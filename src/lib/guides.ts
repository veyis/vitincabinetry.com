/**
 * Guide metadata source-of-truth. Each entry powers both the /guides index
 * and the per-guide page metadata. Add new guides here.
 */

export type GuideMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Decision" | "Pricing" | "Materials" | "Process";
  readingMinutes: number;
  datePublished: string;
};

export const guides: GuideMeta[] = [
  {
    slug: "refacing-vs-custom",
    title: "Cabinet refacing vs. custom replacement — an honest comparison",
    excerpt:
      "When refacing makes sense, when it doesn't, and the math behind the decision. Written for homeowners getting both quotes.",
    category: "Decision",
    readingMinutes: 8,
    datePublished: "2026-05-12",
  },
  {
    slug: "custom-kitchen-cost-bucks-county",
    title: "How much does a custom kitchen cost in Bucks County, PA?",
    excerpt:
      "Real pricing tiers, line-item breakdowns, and the factors that move the number up or down. No \"call for pricing\" games.",
    category: "Pricing",
    readingMinutes: 12,
    datePublished: "2026-05-12",
  },
  {
    slug: "choosing-a-kitchen-designer",
    title: "How to choose a kitchen designer — the questions that actually matter",
    excerpt:
      "Credentials, business model, red flags, and the questions you should ask before paying anyone a design fee. From inside the industry.",
    category: "Decision",
    readingMinutes: 10,
    datePublished: "2026-05-12",
  },
  {
    slug: "inset-vs-full-overlay",
    title: "Inset vs. full-overlay cabinets — which one fits your house?",
    excerpt:
      "Construction differences, visual character, cost gap, maintenance, and when each style actually fits the room you're building.",
    category: "Materials",
    readingMinutes: 7,
    datePublished: "2026-05-12",
  },
  {
    slug: "setting-up-a-trade-cabinet-account",
    title: "Setting Up a Trade Cabinet Account at Vitrin",
    excerpt:
      "How contractors, builders, and installers set up a trade account with Vitrin Cabinetry — application, pricing sheet, and net terms after first order.",
    category: "Process",
    readingMinutes: 6,
    datePublished: "2026-05-12",
  },
  {
    slug: "stock-vs-custom-cabinets-when-to-choose-each",
    title: "Stock vs. Custom Cabinets — When to Choose Each",
    excerpt:
      "When stock cabinets are the smart pick and when custom is worth the wait. A decision framework from a shop that sells both.",
    category: "Decision",
    readingMinutes: 9,
    datePublished: "2026-05-12",
  },
  {
    slug: "buying-cabinets-for-a-spec-home",
    title: "Buying Cabinets for a Spec Home — Builder's Guide",
    excerpt:
      "How builders and developers source cabinets for spec homes — volume pricing, lead times, and design flexibility for buyers-in-tow.",
    category: "Pricing",
    readingMinutes: 8,
    datePublished: "2026-05-12",
  },
  {
    slug: "cabinet-delivery-and-jobsite-coordination",
    title: "Cabinet Delivery and Jobsite Coordination",
    excerpt:
      "Will-call pickup, jobsite delivery, lift-gate, and inside delivery — how Vitrin gets cabinets to your install date without breaking your schedule.",
    category: "Process",
    readingMinutes: 7,
    datePublished: "2026-05-12",
  },
  {
    slug: "contractor-cabinet-pricing-explained",
    title: "Contractor Cabinet Pricing Explained",
    excerpt:
      "How trade pricing works at Vitrin — tiered by volume, account terms, and what to expect on your first pricing sheet.",
    category: "Pricing",
    readingMinutes: 10,
    datePublished: "2026-05-12",
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}
