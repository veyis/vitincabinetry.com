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
];

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}
