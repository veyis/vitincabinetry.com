// Trimmed from vmpowerconstruction.com lib/geolocation.ts (console instead of log lib)

interface GeolocationData {
  ip: string;
  country?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  isp?: string;
}

export async function getGeolocationFromIP(ip: string): Promise<GeolocationData> {
  // Return just the IP if it's localhost or private
  if (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.") ||
    ip.startsWith("172.")
  ) {
    return { ip, country: "Local", region: "Local", city: "Local" };
  }

  try {
    // ip-api.com free tier: no key, 45 req/min
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,lat,lon,timezone,isp`,
      { signal: AbortSignal.timeout(5000) },
    );

    if (!response.ok) return { ip };

    const data = await response.json();
    if (data.status === "fail") return { ip };

    return {
      ip,
      country: data.country,
      region: data.regionName,
      city: data.city,
      latitude: data.lat,
      longitude: data.lon,
      timezone: data.timezone,
      isp: data.isp,
    };
  } catch (error) {
    console.warn("Geolocation lookup failed", { ip, error });
    return { ip };
  }
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return (forwarded.split(",")[0] ?? "").trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

export function getUserAgent(request: Request): string {
  return request.headers.get("user-agent") || "Unknown";
}
