import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
