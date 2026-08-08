import type { NextConfig } from "next";

// Phone/email are literals in src/lib/site.ts now; only the street is still env-driven.
const street = process.env.NEXT_PUBLIC_BUSINESS_STREET ?? "";
if (process.env.VERCEL_ENV === "production" && (!street.trim() || street.includes("TBD"))) {
  console.warn(
    "\n[vitrincabinetry] SEO: set NEXT_PUBLIC_BUSINESS_STREET to the real showroom address (NAP must match Google Business Profile).\n"
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

  async redirects() {
    return [
      {
        source: "/services/kitchen-cabinets",
        destination: "/cabinets/kitchen",
        permanent: true,
      },
      {
        source: "/services/bathroom-vanities",
        destination: "/cabinets/bath",
        permanent: true,
      },
      {
        source: "/services/living-room-units",
        destination: "/cabinets/built-ins",
        permanent: true,
      },
      {
        source: "/services/aging-in-place",
        destination: "/cabinets/aging-in-place",
        permanent: true,
      },
      // Legacy / guessed URLs that currently hard-404 (GSC "Blocked due to other 4xx").
      // Apex host already 308s to www; these keep crawl equity on real pages.
      { source: "/services", destination: "/cabinets", permanent: true },
      { source: "/services/:path*", destination: "/cabinets", permanent: true },
      { source: "/shop", destination: "/shop-tour", permanent: true },
      { source: "/products", destination: "/cabinets", permanent: true },
      { source: "/product", destination: "/cabinets", permanent: true },
      { source: "/kitchen", destination: "/cabinets/kitchen", permanent: true },
      { source: "/kitchen-cabinets", destination: "/cabinets/kitchen", permanent: true },
      { source: "/bathroom", destination: "/cabinets/bath", permanent: true },
      { source: "/bath", destination: "/cabinets/bath", permanent: true },
      { source: "/vanities", destination: "/cabinets/bath", permanent: true },
      { source: "/blog", destination: "/guides", permanent: true },
      { source: "/blog/:path*", destination: "/guides", permanent: true },
      { source: "/gallery", destination: "/portfolio", permanent: true },
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/our-work", destination: "/portfolio", permanent: true },
      // GSC 404 ghosts (not in sitemap) — send crawl equity to the Bucks County hub
      { source: "/locations", destination: "/custom-kitchen-cabinets/bucks-county", permanent: true },
      { source: "/locations/:path*", destination: "/custom-kitchen-cabinets/bucks-county", permanent: true },
      { source: "/areas", destination: "/custom-kitchen-cabinets/bucks-county", permanent: true },
      { source: "/areas/:path*", destination: "/custom-kitchen-cabinets/bucks-county", permanent: true },
    ];
  },
};

export default nextConfig;
