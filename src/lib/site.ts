/**
 * Central source of truth for site-wide constants.
 * NAP (Name / Address / Phone) values MUST match Google Business Profile
 * exactly. Inconsistency across citations is a top cause of stagnant local
 * rankings. Replace the placeholders below with real values before launch.
 */

export const site = {
  name: "Vitrin Cabinetery",
  legalName: "Vitrin Cabinetery LLC",
  url: "https://vitrincabinetery.com",
  defaultLocale: "en-US",

  // Replace placeholders before launch — these become the schema NAP.
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+1-267-555-0100",
  phoneDisplay: process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY || "(267) 555-0100",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@vitrincabinetery.com",

  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_STREET || "TBD — Showroom address",
    locality: "Quakertown",
    region: "PA",
    postalCode: "18951",
    country: "US",
  },

  // Approximate Quakertown lat/lon. Update once the showroom address is set.
  geo: { latitude: 40.4418, longitude: -75.3413 },

  // Service area towns — used in schema `areaServed` and footer.
  areaServed: [
    "Quakertown, PA",
    "Perkasie, PA",
    "Doylestown, PA",
    "Sellersville, PA",
    "Souderton, PA",
    "Coopersburg, PA",
    "Hellertown, PA",
    "Emmaus, PA",
    "Harleysville, PA",
    "Lansdale, PA",
    "New Hope, PA",
    "Center Valley, PA",
  ],

  // Hours — keep aligned with Google Business Profile.
  hours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],

  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    houzz: process.env.NEXT_PUBLIC_HOUZZ_URL || "",
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
