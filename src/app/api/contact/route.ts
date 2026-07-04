import { NextResponse } from "next/server";
import { getClientIP, getUserAgent, getGeolocationFromIP } from "@/lib/geolocation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Same format as vmpowerconstruction.com: forward leads to the PxlPeak
// /api/v1/leads platform (storage, fraud scoring, owner notification,
// customer auto-reply all handled there).

const PROJECT_TYPE_LABEL: Record<string, string> = {
  stock: "Vitrin Stock cabinets",
  custom: "Vitrin Signature (custom kitchen)",
  kitchen: "Kitchen cabinets",
  bath: "Bath cabinets",
  "built-ins": "Built-ins / library / mudroom",
  "aging-in-place": "Aging-in-place cabinetry",
  remodeling: "Kitchen / bath remodeling",
  countertops: "Countertops",
  flooring: "Flooring",
  closets: "Custom closets",
  install: "Installation add-on",
  trade: "Trade pricing inquiry",
  other: "Other",
};

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  audienceType?: string;
  projectType?: string;
  message?: string;
  honeypot?: string;
};

function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["firstName", "lastName", "email", "projectType", "message"] as const;
  for (const k of required) {
    if (!isString(body[k])) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email!)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (body.message!.length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  const apiUrl = process.env.PXLPEAK_API_URL;
  const apiKey = process.env.PXLPEAK_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("PXLPEAK_API_URL or PXLPEAK_API_KEY not configured");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 },
    );
  }

  const ipAddress = getClientIP(req);
  const userAgent = getUserAgent(req);
  const referrer = req.headers.get("referer") || undefined;

  // Best-effort geolocation — fraud scoring works without it
  let geoData: Awaited<ReturnType<typeof getGeolocationFromIP>> | null = null;
  try {
    geoData = await getGeolocationFromIP(ipAddress);
  } catch {
    geoData = null;
  }

  const messageParts = [
    body.audienceType ? `Audience: ${body.audienceType}` : null,
    `Project: ${PROJECT_TYPE_LABEL[body.projectType!] ?? body.projectType}`,
    "",
    body.message!,
  ].filter((p): p is string => p !== null);

  const leadPayload: Record<string, unknown> = {
    name: `${body.firstName} ${body.lastName}`.trim(),
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone || undefined,
    // PxlPeak caps message at 5000 chars; prefix lines can push us over
    message: messageParts.join("\n").slice(0, 5000),
    source: "contact_form",
    pageUrl: referrer,
    referrer,
    clientIP: ipAddress,
    clientUserAgent: userAgent,
    notifications: { admin: true, confirmation: true },
    // PxlPeak logs honeypot hits to fraud_submissions and returns a fake 201
    honeypots: body.honeypot ? { companyName: body.honeypot } : undefined,
  };

  if (geoData?.country) {
    leadPayload.geoData = {
      city: geoData.city || "Unknown",
      region: geoData.region || "Unknown",
      country: geoData.country || "Unknown",
      timezone: geoData.timezone,
      lat: geoData.latitude,
      lon: geoData.longitude,
      isp: geoData.isp,
    };
  }

  try {
    const resp = await fetch(`${apiUrl}/api/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Forwarded-For": ipAddress,
        "User-Agent": userAgent,
      },
      body: JSON.stringify(leadPayload),
      signal: AbortSignal.timeout(15_000),
    });

    if (!resp.ok) {
      const errorBody = await resp.text().catch(() => "Unknown error");
      console.error("PxlPeak leads API error:", resp.status, errorBody);
      if (resp.status === 422) {
        return NextResponse.json(
          { error: "Please check your form details and try again." },
          { status: 400 },
        );
      }
      return NextResponse.json({ error: "Could not send message" }, { status: 500 });
    }

    const result = await resp.json();
    return NextResponse.json({ ok: true, id: result.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Could not send message" }, { status: 500 });
  }
}
