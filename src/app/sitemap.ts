import { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { projects } from "@/lib/projects";
import { guides } from "@/lib/guides";

const base = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shop-tour`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/trade`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const services: MetadataRoute.Sitemap = [
    { url: `${base}/services/kitchen-cabinets`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/bathroom-vanities`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/living-room-units`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/aging-in-place`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const pillars: MetadataRoute.Sitemap = [
    { url: `${base}/custom-kitchen-cabinets/bucks-county`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  ];

  const townPages: MetadataRoute.Sitemap = towns.map((t) => ({
    url: `${base}/custom-kitchen-cabinets/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.datePublished),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...core, ...services, ...pillars, ...townPages, ...projectPages, ...guidePages];
}
