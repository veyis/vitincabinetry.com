import { site } from "./site";

/**
 * JSON-LD payload builders for schema.org structured data.
 * Render with: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(payload) }} />
 */

export function toJsonLd(payload: Record<string, unknown>): string {
  // Escape `<` to prevent HTML injection per Next.js docs guidance.
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const openingHours = site.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.dayOfWeek,
  opens: h.opens,
  closes: h.closes,
}));

const sameAs = Object.values(site.social).filter(Boolean);

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CabinetMaker",
  "@id": `${site.url}#localbusiness`,
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$$",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", ...site.geo },
  areaServed: site.areaServed,
  openingHoursSpecification: openingHours,
  ...(sameAs.length > 0 ? { sameAs } : {}),
  ...(site.aggregateRating.enabled
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.aggregateRating.ratingValue,
          reviewCount: site.aggregateRating.reviewCount,
        },
      }
    : {}),
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}#organization` },
};

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType ?? "Custom Cabinetry",
    provider: { "@id": `${site.url}#localbusiness` },
    areaServed: site.areaServed,
  };
}
