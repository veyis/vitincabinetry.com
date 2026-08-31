/**
 * Central source of truth for site-wide constants.
 * NAP (Name / Address / Phone) values MUST match Google Business Profile
 * exactly. Inconsistency across citations is a top cause of stagnant local
 * rankings. Replace the placeholders below with real values before launch.
 */

export const site = {
  name: "Vitrin Cabinetry",
  legalName: "Vitrin Cabinetry",
  /** Business name as listed on Google Business Profile. */
  gbpName: "Vitrin Cabinetry | Kitchen, Bathroom & Closet",
  url: "https://vitrincabinetry.com",
  defaultLocale: "en-US",

  /** Keep in sync with the Google Business Profile "About" description. */
  description:
    "Vitrin Cabinetry specializes in custom and semi-custom kitchen, bathroom, and closet cabinetry tailored to every style and budget. We offer expert design, premium craftsmanship, and professional installation to create beautiful, functional spaces. Our services include kitchen cabinets, bathroom vanities, custom closets, quartz, granite and porcelain countertops, luxury vinyl plank, hardwood, engineered hardwood, and tile flooring. We also provide complete kitchen and bathroom remodeling, custom closet design, 3D design, demolition, cabinetry, countertops, lighting, plumbing, electrical, backsplashes, and finishing — all delivered with exceptional quality and attention to detail.",

  /** Service list — mirrors the Google Business Profile; feeds schema hasOfferCatalog. */
  services: [
    "Kitchen cabinets",
    "Bathroom vanities",
    "Custom closets",
    "Quartz countertops",
    "Granite countertops",
    "Porcelain countertops",
    "Luxury vinyl plank flooring",
    "Hardwood flooring",
    "Engineered hardwood flooring",
    "Tile flooring",
    "Kitchen remodeling",
    "Bathroom remodeling",
    "Custom closet design",
    "3D design",
    "Backsplash installation",
    "Demolition",
    "Lighting, plumbing & electrical (remodel scope)",
    "Finishing",
  ],

  // Canonical NAP contact. Edit here only — no env override, so prod can never
  // drift to a fallback. These feed the footer, contact/showroom/trade/legal
  // pages, and the LocalBusiness JSON-LD `telephone` / `email`.
  phone: "+1-484-542-2571",
  phoneDisplay: "(484) 542-2571",
  email: "hello@vitrincabinetry.com",

  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_STREET || "TBD — Showroom address",
    locality: "Easton",
    region: "PA",
    postalCode: "18042",
    country: "US",
  },

  // Approximate Easton lat/lon. Update once the showroom address is set.
  geo: { latitude: 40.6916, longitude: -75.2202 },

  // Service area towns — used in schema `areaServed` and footer.
  areaServed: [
    "Easton, PA",
    "Bethlehem, PA",
    "Allentown, PA",
    "Hellertown, PA",
    "Emmaus, PA",
    "Center Valley, PA",
    "Coopersburg, PA",
    "Quakertown, PA",
    "Perkasie, PA",
    "Doylestown, PA",
    "Sellersville, PA",
    "Souderton, PA",
    "Harleysville, PA",
    "Lansdale, PA",
    "New Hope, PA",
  ],

  /** Topics for Organization / LocalBusiness `knowsAbout` in JSON-LD. */
  knowsAbout: [
    "Custom kitchen cabinets",
    "Custom bathroom vanities",
    "Custom closets and closet design",
    "Bench-built cabinetry",
    "Kitchen design-build",
    "Inset and full-overlay cabinets",
    "Quartz, granite, and porcelain countertops",
    "Luxury vinyl plank, hardwood, engineered hardwood, and tile flooring",
    "Kitchen and bathroom remodeling",
    "3D kitchen design",
    "Backsplash installation",
    "Lehigh Valley kitchen remodeling",
    "Lehigh Valley cabinetry",
    "Bucks County kitchen remodeling",
    "Aging-in-place kitchen design",
  ],

  // Hours — keep aligned with Google Business Profile.
  hours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],

  // GBP switch-on checklist. Vitrin has no Google Business Profile yet
  // (measured 2026-08-31: absent from Google Maps at both 25 km and 80 km
  // search radius). Nothing below is hardcoded on purpose — a `sameAs` that
  // points at a profile which does not resolve is worse than no `sameAs`.
  // The day the GBP goes live, set these in Vercel (Production + Preview) and
  // redeploy; src/lib/schema.ts picks them up with no code change:
  //   NEXT_PUBLIC_GOOGLE_PROFILE_URL  Maps place URL -> sameAs + hasMap
  //   NEXT_PUBLIC_FACEBOOK_URL        profile URL    -> sameAs
  //   NEXT_PUBLIC_INSTAGRAM_URL       profile URL    -> sameAs
  //   NEXT_PUBLIC_HOUZZ_URL           profile URL    -> sameAs
  //   NEXT_PUBLIC_BUSINESS_STREET     street address -> streetAddress in
  //     PostalAddress (omitted while `address.street` still starts with "TBD")
  // Then: set `gbpName` to match the listing character-for-character, align
  // `hours` with the GBP, update `geo` to the real coordinates, and enable
  // `aggregateRating` only once there are >= 10 real reviews.
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    houzz: process.env.NEXT_PUBLIC_HOUZZ_URL || "",
    /** Google Maps place URL (not just the GBP admin link) enables `hasMap` in LocalBusiness JSON-LD. */
    google: process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL || "",
  },

  // Show aggregateRating in schema ONLY once you have ≥10 real reviews.
  // Update both fields together as reviews accumulate.
  aggregateRating: {
    enabled: false,
    ratingValue: "4.9",
    reviewCount: "0",
  },
} as const;

export type Site = typeof site;
