import type { NextConfig } from "next";

const street = process.env.NEXT_PUBLIC_BUSINESS_STREET ?? "";
const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "";
const napIncomplete =
  !street.trim() || street.includes("TBD") || !phone.trim() || phone.includes("555");
if (process.env.VERCEL_ENV === "production" && napIncomplete) {
  console.warn(
    "\n[vitrincabinetery] SEO: set NEXT_PUBLIC_BUSINESS_STREET and NEXT_PUBLIC_BUSINESS_PHONE to real values (NAP must match Google Business Profile).\n"
  );
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
