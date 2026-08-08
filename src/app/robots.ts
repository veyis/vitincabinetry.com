import { MetadataRoute } from "next";
import { site } from "@/lib/site";

function siteHostname(): string {
  try {
    return new URL(site.url).hostname;
  } catch {
    return "vitrincabinetry.com";
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: siteHostname(),
    sitemap: `${site.url}/sitemap.xml`,
  };
}
