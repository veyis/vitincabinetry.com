import { site } from "./site";
import type { 
  WithContext, 
  Thing, 
  LocalBusiness, 
  Organization, 
  WebSite, 
  Article, 
  FAQPage, 
  ItemList, 
  AboutPage, 
  CreativeWork, 
  HowTo, 
  VideoObject, 
  BreadcrumbList, 
  Service,
  HomeAndConstructionBusiness,
  Product,
  Offer,
  Person
} from "schema-dts";

/**
 * JSON-LD payload builders for schema.org structured data.
 * Render with: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(payload) }} />
 */

export function toJsonLd(payload: Thing | WithContext<Thing>): string {
  // Escape `<` to prevent HTML injection per Next.js docs guidance.
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

// Omit streetAddress when site.address.street is still the placeholder value.
// Once NEXT_PUBLIC_BUSINESS_STREET is set in the env, the real street flows through.
const postalAddress = {
  "@type": "PostalAddress" as const,
  ...(site.address.street.startsWith("TBD") ? {} : { streetAddress: site.address.street }),
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const openingHours = site.hours.map((h) => ({
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: h.dayOfWeek,
  opens: h.opens,
  closes: h.closes,
}));

const sameAs = Object.values(site.social).filter(Boolean);

const googleProfile = site.social.google;
const hasMapUrl =
  googleProfile &&
  (googleProfile.includes("google.com/maps") || googleProfile.includes("goo.gl/maps"))
    ? googleProfile
    : undefined;

/** Mirrors the GBP service list so Google sees the same offering on both surfaces. */
const offerCatalog = {
  "@type": "OfferCatalog" as const,
  name: "Kitchen, Bathroom & Closet Services",
  itemListElement: site.services.map((s) => ({
    "@type": "Offer" as const,
    itemOffered: { "@type": "Service" as const, name: s },
  })),
};

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}#localbusiness`,
  name: site.name,
  alternateName: site.gbpName,
  description: site.description,
  url: site.url,
  image: `${site.url}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$$",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", ...site.geo },
  areaServed: site.areaServed,
  openingHoursSpecification: openingHours,
  knowsAbout: [...site.knowsAbout],
  hasOfferCatalog: offerCatalog,
  contactPoint: [
    {
      "@type": "ContactPoint" as const,
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: site.areaServed,
    },
  ],
  ...(hasMapUrl ? { hasMap: hasMapUrl } : {}),
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

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  knowsAbout: [...site.knowsAbout],
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}#website`,
  name: site.name,
  url: site.url,
  description: `Custom kitchen, bathroom, and closet cabinetry designed, built, and installed in-house in ${site.address.locality}, ${site.address.region} — plus countertops, flooring, and complete kitchen and bath remodeling. Serving Bucks County and the Lehigh Valley.`,
  inLanguage: "en-US",
  publisher: { "@id": `${site.url}#organization` },
  potentialAction: [
    {
      "@type": "SearchAction",
      name: "Request a consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vitrincabinetry.com/search?q={search_term_string}",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  ],
};

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrls?: string[];
}): WithContext<Article> {
  const images =
    opts.imageUrls && opts.imageUrls.length > 0 ? opts.imageUrls : [`${site.url}/og.jpg`];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    author: { "@id": `${site.url}#organization` },
    publisher: { "@id": `${site.url}#organization` },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: opts.url,
    url: opts.url,
    image: images,
  };
}

export function faqPageJsonLd(faqs: ReadonlyArray<{ q: string; a: string }>): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListJsonLd(opts: {
  name: string;
  description?: string;
  url?: string;
  items: ReadonlyArray<{ name: string; description: string; url?: string }>;
}): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.url ? { url: opts.url } : {}),
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      ...(item.url
        ? {
            item: {
              "@type": "WebPage",
              "@id": item.url,
              name: item.name,
              description: item.description,
              url: item.url,
            },
          }
        : {}),
    })),
  };
}

export function aboutPageJsonLd(opts: { name: string; description: string; url: string }): WithContext<AboutPage> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    mainEntity: { "@id": `${site.url}#organization` },
    isPartOf: { "@id": `${site.url}#website` },
  };
}

export function portfolioProjectJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  dateCreated: string;
  locationCreated: string;
  keywords: string;
}): WithContext<CreativeWork> {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    creator: { "@id": `${site.url}#organization` },
    dateCreated: opts.dateCreated,
    locationCreated: opts.locationCreated,
    keywords: opts.keywords,
    ...(opts.imageUrl ? { image: opts.imageUrl } : {}),
  };
}

export function howToJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  steps: ReadonlyArray<{ name: string; text: string }>;
  totalTime?: string;
}): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function videoObjectJsonLd(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  embedUrl?: string;
}): WithContext<VideoObject> {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    contentUrl: opts.contentUrl,
    uploadDate: opts.uploadDate,
    ...(opts.embedUrl ? { embedUrl: opts.embedUrl } : {}),
    publisher: { "@id": `${site.url}#organization` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> {
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
}): WithContext<Service> {
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

/**
 * Vitrin operates as both a custom cabinetry workshop AND a cabinet store —
 * stock cabinets sold from the showroom plus made-to-order custom. The
 * default localBusinessSchema (@type "CabinetMaker") emphasizes the workshop.
 * This variant emphasizes the storefront and is rendered on /, /showroom,
 * and the town pages where both tiers are sold.
 */
export const cabinetStoreSchema: WithContext<HomeAndConstructionBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness" as const,
  "@id": `${site.url}#cabinetstore`,
  name: site.name,
  alternateName: site.gbpName,
  url: site.url,
  image: `${site.url}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", ...site.geo },
  areaServed: site.areaServed,
  openingHoursSpecification: openingHours,
  // aggregateRating intentionally omitted — the storefront and the workshop
  // share the same rating pool; render it only on localBusinessSchema.
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export function productSchema(opts: {
  name: string;
  description: string;
  image: string;
  url: string;
  sku?: string;
  offers?: Offer | Offer[];
}): WithContext<Product> {
  const offers = opts.offers
    ? Array.isArray(opts.offers)
      ? opts.offers
      : [opts.offers]
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: opts.url,
    ...(opts.sku ? { sku: opts.sku } : {}),
    brand: { "@type": "Brand", name: site.name },
    ...(offers ? { offers } : {}),
  };
}

export function offerSchema(opts: {
  price: string;
  priceCurrency?: string;
  // schema.org ItemAvailability enum — "MadeToOrder" is not a valid value.
  // Use "PreOrder" for custom-built items not yet in production,
  // or "InStock" when the item is orderable from stock.
  availability?: "InStock" | "OutOfStock" | "PreOrder" | "BackOrder";
  url?: string;
}): Offer {
  return {
    "@type": "Offer",
    priceCurrency: opts.priceCurrency ?? "USD",
    price: opts.price,
    availability: `https://schema.org/${opts.availability ?? "InStock"}`,
    ...(opts.url ? { url: opts.url } : {}),
    seller: { "@id": `${site.url}#cabinetstore` },
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url: string;
}): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    ...(opts.jobTitle ? { jobTitle: opts.jobTitle } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.image ? { image: opts.image } : {}),
    url: opts.url,
    worksFor: { "@id": `${site.url}#organization` },
  };
}
