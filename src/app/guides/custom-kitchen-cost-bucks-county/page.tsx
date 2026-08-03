import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";
import LeadMagnet from "@/components/LeadMagnet";

const SLUG = "custom-kitchen-cost-bucks-county";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const tierRows = [
  {
    tier: "Studio Semi-Custom",
    range: "$30,000 – $55,000",
    fits: "Mid-size kitchens, transitional palettes, standard appliances",
    cabinetCount: "20–28 cabinets",
    notes: "Plywood boxes, dovetail drawers, soft-close, painted or stained.",
  },
  {
    tier: "Signature Custom",
    range: "$55,000 – $95,000",
    fits: "Most full custom kitchens in Bucks County",
    cabinetCount: "25–40 cabinets",
    notes: "Full bench-built, any door style, integrated appliance panels, custom interior fittings.",
  },
  {
    tier: "Signature Luxury",
    range: "$95,000 +",
    fits: "Open-plan kitchens with butler's pantry, premium appliances, exotic species",
    cabinetCount: "35+ cabinets",
    notes: "Sub-Zero/Wolf/Miele integration, hand-built furniture details, complex storage systems.",
  },
];

const factors = [
  {
    name: "Cabinet count",
    body: "Most Bucks County kitchens have 20–40 cabinets. Each additional cabinet adds roughly $800–$2,500 depending on tier and complexity.",
  },
  {
    name: "Door style",
    body: "Flat-panel is the most efficient style we build. Inset shaker adds ~10–15% over full-overlay. Traditional raised-panel adds another 5–10% on top of that.",
  },
  {
    name: "Wood species",
    body: "Paint-grade poplar or maple is the value choice. Rift-cut white oak, walnut, cherry, and quarter-sawn species each step the materials cost up roughly 15–25%.",
  },
  {
    name: "Hardware suite",
    body: "Mid-tier knobs and pulls (Top Knobs, Emtek) typical: $4–$12 each. Premium suites (Rocky Mountain, custom forged): $40–$120 each. A 30-cabinet kitchen has 40–80 hardware pieces.",
  },
  {
    name: "Counters",
    body: "Counters are a separate line item, typically $4,000–$12,000 for quartz and $6,000–$18,000 for natural stone, depending on slab and edge profile.",
  },
  {
    name: "Integrated appliance panels",
    body: "Each integrated panel (refrigerator, dishwasher, freezer column) adds $1,200–$2,800 — it's a custom-built furniture face, not a stock cabinet door.",
  },
  {
    name: "Demolition + utility work",
    body: "Demo of existing cabinets typically $1,500–$4,000. Moving plumbing, electrical, or HVAC adds $3,000–$10,000 depending on scope. Structural changes (wall removal) require engineering.",
  },
  {
    name: "Installation labor",
    body: "Included in our Signature pricing. For projects where we are the cabinet sub working under a GC, install runs $4,000–$9,000 separately.",
  },
];

const faqs = [
  {
    q: "Why is custom more expensive than the franchise quotes I've been getting?",
    a: "Franchise kitchen companies sell a manufactured catalog cabinet line and subcontract installation. Their pricing reflects that — bulk-discounted product, low-margin install, profit on volume. Custom cabinetry is built one project at a time, by a small team, with materials we buy at smaller scale. The trade is real craft and full layout freedom for higher cost.",
  },
  {
    q: "What does an average Bucks County kitchen actually cost in 2026?",
    a: "Across the projects we delivered in 2025, our median total was around $68,000, including cabinets, counters, and installation but not appliances. Our 25th percentile was $48,000 and our 75th percentile was $89,000.",
  },
  {
    q: "Can I lower the cost without losing the custom feel?",
    a: "Yes. The biggest dial: stay in the Studio Semi-Custom tier. Use paint-grade species instead of premium woods. Keep door style to flat-panel or shaker. Use mid-tier hardware. Skip integrated appliance panels. Make those four choices and a 30-cabinet kitchen drops $15,000–$25,000.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — through Wisetack, with 0% promotional terms available on qualifying projects. Most of our clients pay in three milestone draws (deposit, fabrication, completion) directly to us; financing is there if it helps the cash flow.",
  },
  {
    q: "How are deposits structured?",
    a: "Typical structure: 10% to lock the design slot, 40% on shop start, 40% on shop completion, 10% on final walkthrough. Every project is contracted in writing with milestone-based draws.",
  },
  {
    q: "Do you do free quotes?",
    a: "Discovery calls (30 minutes by phone) are free. In-home surveys (60–90 minutes) are free. Full line-item written proposals after design are part of the project — included if you sign, $500 standalone if you don't (credited back if you proceed later).",
  },
];

const exampleProjects = [
  {
    title: "Studio Semi-Custom — Coopersburg ranch",
    price: "$42,000",
    detail:
      "22 cabinets, painted poplar inset doors, mid-tier polished-nickel hardware, quartz counter, no integrated panels. 9-week timeline.",
  },
  {
    title: "Signature Custom — Perkasie Victorian",
    price: "$71,000",
    detail:
      "30 cabinets, two-tone painted-maple and stained-walnut, premium pulls, soapstone island + quartz perimeter, integrated dishwasher panel. 12-week timeline.",
  },
  {
    title: "Signature Luxury — Solebury stone home",
    price: "$132,000",
    detail:
      "36 cabinets, rift-cut white oak full-overlay, integrated Sub-Zero columns + Miele dishwashers, hand-forged hardware, butler's pantry. 16-week timeline.",
  },
];

export default function CostGuidePage() {
  const pageUrl = `${site.url}/guides/${SLUG}`;

  const articleSchema = articleJsonLd({
    headline: meta.title,
    description: meta.excerpt,
    url: pageUrl,
    datePublished: meta.datePublished,
  });
  const faqSchema = faqPageJsonLd(faqs);

  return (
    <main>
      <Navbar />

      <section className="subhero">
        <div className="container--narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>
            <span aria-current="page">Cost in Bucks County</span>
          </nav>
          <span className="eyebrow">Pricing Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            No competitor in this region publishes pricing. We do — because the &quot;call for quote&quot; game wastes everyone&apos;s time. Here&apos;s what custom kitchens actually cost in Bucks County in 2026.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The 30-second answer</h2>
            <p>
              Most full custom kitchens in Bucks County cost between <strong>$45,000 and $90,000</strong>, including cabinetry, counters, and installation. Budget kitchens land lower, in the <strong>$30,000–$45,000</strong> range. Luxury kitchens with integrated appliances and exotic species start at <strong>$95,000</strong> and routinely run past <strong>$150,000</strong>.
            </p>
            <p>
              The biggest variables are cabinet count, door style, wood species, hardware suite, and whether your appliances are getting integrated panels. The rest is detail.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>The three tiers we build in</h2>
            <p>
              We publish three tiers so prospective clients can self-qualify before either of us invests time. Every quote ladders into one of them.
            </p>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Tier</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Range</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Cabinets</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tierRows.map((r, i) => (
                    <tr key={r.tier} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.tier}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text)" }}>{r.range}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.cabinetCount}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>What moves the number</h2>
            <p>
              Inside each tier, a handful of choices do most of the work. Here&apos;s the order of magnitude on each.
            </p>
          </div>

          <div className="container--narrow">
            {factors.map((f) => (
              <div key={f.name} style={{ borderTop: "1px solid var(--border)", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-sans)", fontWeight: 600, marginBottom: "0.4rem" }}>{f.name}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>Three real projects, three real prices</h2>
            <p>
              Generic ranges only tell you so much. Here are three recent Bucks County / Lehigh Valley projects, with the actual contracted price (not list, not pre-discount — the number on the contract).
            </p>
          </div>

          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginTop: "1.5rem" }}>
              {exampleProjects.map((ex) => (
                <div key={ex.title} className="card">
                  <div style={{ color: "var(--primary)", fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "0.4rem" }}>{ex.price}</div>
                  <h3 className="card__title">{ex.title}</h3>
                  <p className="card__desc">{ex.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>Where the comparison shops will quote you</h2>
            <p>
              For perspective: a comparable franchise-catalog kitchen from a competitor in this region typically quotes 15–25% under our Signature Custom tier. The cost gap reflects the catalog cabinet line vs. bench-built construction, and the subcontracted installer vs. in-house team. Whether that gap is worth it depends entirely on what you&apos;re trying to achieve.
            </p>
            <p>
              At the other end, a refacing job on the same kitchen footprint runs <strong>$10,000–$20,000</strong>. We&apos;ve written a separate guide on <Link href="/guides/refacing-vs-custom" className="text-link">refacing vs. custom replacement</Link> if that&apos;s where your decision actually sits.
            </p>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>What to ask any cabinet shop quoting you</h2>
            <ul>
              <li>Are these cabinets built in-house, or are they a manufactured line you resell?</li>
              <li>Is the installer your employee or a subcontractor?</li>
              <li>Will I get a line-item proposal showing door style, wood species, hardware brand, and cabinet count?</li>
              <li>What is the lead time from contract signed to install start?</li>
              <li>What is the warranty, and does it transfer when I sell the home?</li>
              <li>What scope is *not* in the quote (counters, plumbing, electrical, tile, demo, appliances)?</li>
            </ul>
            <p>
              If any of those answers come back vague, that&apos;s the signal. A real custom shop can answer all six in 30 seconds.
            </p>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>FAQs</h2>
          </div>

          <div className="container--narrow" style={{ marginBottom: "3rem" }}>
            <LeadMagnet 
              title="Download the 2026 Kitchen Remodel Cost Breakdown" 
              description="Get a detailed PDF showing exactly where every dollar goes in a $65k kitchen remodel in Bucks County, from demo to finishing." 
              buttonText="Download PDF" 
              downloadUrl="/downloads/2026-kitchen-cost-breakdown.pdf" 
            />
          </div>

          <div className="container--narrow">
            <div className="faq-list">
              {faqs.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Want a real number for your kitchen?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Free 30-minute discovery call, free in-home survey, full line-item proposal after design lock. No mystery, no &quot;call for pricing,&quot; no commitment until you sign.
          </p>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Guides", url: `${site.url}/guides` },
              { name: meta.title, url: pageUrl },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </main>
  );
}
