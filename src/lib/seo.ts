import type { Metadata } from "next";
import { site } from "./site";

const OG_DIM = { width: 1200, height: 630 } as const;
const DEFAULT_OG_PATH = "/og.jpg";

function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${p}`;
}

/**
 * Per-page Open Graph + Twitter metadata with absolute URLs.
 * Merges into route `metadata` exports so shares resolve to the correct URL.
 */
export function shareMetadata(
  pathname: string,
  title: string,
  description: string,
  opts?: { article?: boolean; imagePath?: string; imageAlt?: string }
): Pick<Metadata, "openGraph" | "twitter"> {
  const pageUrl = absoluteUrl(pathname);
  const imagePath = opts?.imagePath ?? DEFAULT_OG_PATH;
  const imageUrl = absoluteUrl(imagePath);
  const imageAlt = opts?.imageAlt ?? `${site.name} — Custom cabinetry in Easton, PA`;

  return {
    openGraph: {
      type: opts?.article ? "article" : "website",
      locale: "en_US",
      url: pageUrl,
      siteName: site.name,
      title,
      description,
      images: [{ url: imageUrl, ...OG_DIM, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
