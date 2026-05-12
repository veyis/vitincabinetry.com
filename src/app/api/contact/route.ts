import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload> & { honeypot?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; real users don't.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const required: (keyof ContactPayload)[] = ["firstName", "lastName", "email", "projectType", "message"];
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

  try {
    await sendContactEmail(body as ContactPayload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Could not send message" }, { status: 500 });
  }
}
