import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabinet Refacing vs. Custom Replacement — An Honest Comparison",
  description:
    "When cabinet refacing makes sense and when it doesn't. A custom cabinetmaker's honest comparison of refacing vs. full replacement — cost, lifespan, design freedom, and the math behind the decision.",
  alternates: { canonical: "/guides/refacing-vs-custom" },
};

const faqs = [
  {
    q: "Is refacing really 50% cheaper than new cabinets?",
    a: "Sometimes. The big national refacing companies advertise that figure, and on a like-for-like kitchen with stock-grade replacement, the math can work out close to 40–50%. But the comparison is rarely like-for-like — refacing keeps your old boxes, layout, and storage, while a custom replacement gives you all three of those redesigned. Compare total value, not just sticker.",
  },
  {
    q: "How long does refacing last?",
    a: "The doors and veneer themselves usually hold up 15–20 years. The original boxes underneath are the limiting factor — if those are particle-board with worn-out hinges and damaged drawer slides, you're putting expensive new fronts on tired infrastructure.",
  },
  {
    q: "Can I reface and change the layout?",
    a: "Generally no. Refacing keeps the existing boxes in place — that's where the savings come from. If you want to move the range, add an island, or change cabinet sizes, you're really asking for new cabinetry, not refacing.",
  },
  {
    q: "Do you offer refacing?",
    a: "No. Vitrin is a custom cabinetry shop — we build new cabinets from scratch. If refacing is the right answer for your project, we'll tell you so and point you toward a reputable refacing contractor. Honest match-making matters more than booking the wrong job.",
  },
  {
    q: "What's the typical Bucks County price difference?",
    a: "A refacing job on a standard 10x12 kitchen runs roughly $10k–$20k. A custom replacement of the same kitchen runs $30k–$55k for our Studio Semi-Custom tier and $55k+ for full Signature Custom. The decision usually isn't whether you can afford one vs. the other — it's whether the refaced kitchen actually fixes what's wrong with the current one.",
  },
];

const tableRows = [
  { feature: "Typical cost", refacing: "$10k–$20k", custom: "$30k–$55k (semi-custom) / $55k+ (custom)" },
  { feature: "Timeline", refacing: "1–2 weeks", custom: "4–8 weeks fabrication + 1–2 weeks install" },
  { feature: "Layout changes", refacing: "Not possible", custom: "Fully redesigned" },
  { feature: "Box quality", refacing: "Your existing boxes (whatever they are)", custom: "New plywood boxes with dado joinery" },
  { feature: "Drawer quality", refacing: "Existing — usually stapled particle-board", custom: "New solid-wood dovetail drawers" },
  { feature: "Hardware", refacing: "Often the same hinges as before", custom: "New Blum or Hettich soft-close throughout" },
  { feature: "Finish durability", refacing: "Depends on veneer quality (varies)", custom: "Catalyzed finish in dust-controlled booth" },
  { feature: "Style ceiling", refacing: "Door styles from refacer's catalog", custom: "Anything that can be drawn" },
  { feature: "Lifespan", refacing: "15–20 years", custom: "30+ years on the cabinetry itself" },
  { feature: "Warranty (typical)", refacing: "5–25 yrs depending on company", custom: "Lifetime on bench-built cabinetry" },
];

export default function GuidePage() {
  const pageUrl = `${site.url}/guides/refacing-vs-custom`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cabinet Refacing vs. Custom Replacement — An Honest Comparison",
    description:
      "A custom cabinetmaker's honest comparison of cabinet refacing vs. full replacement — cost, lifespan, design freedom, and how to decide.",
    author: { "@id": `${site.url}#organization` },
    publisher: { "@id": `${site.url}#organization` },
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    mainEntityOfPage: pageUrl,
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
            <span aria-current="page">Refacing vs. Custom</span>
          </nav>
          <span className="eyebrow">Decision Guide · 8 min read</span>
          <h1 className="section-heading">Cabinet refacing vs. custom replacement — an honest comparison.</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            We&apos;re a custom cabinet shop — we don&apos;t do refacing — so we have no skin in this comparison except telling the truth. Here&apos;s how to decide.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The 30-second answer</h2>
            <p>
              <strong>Reface when:</strong> Your existing cabinet boxes are solid, the layout works, you like the bones of the kitchen, and you just want a refreshed surface look. Most refacing jobs that work out well start with kitchens less than 20 years old, with plywood (not particle-board) carcasses and a layout the family is already happy with.
            </p>
            <p>
              <strong>Replace when:</strong> The existing boxes are tired, the layout is wrong, you want different storage, drawer banks where doors used to be, an island that wasn&apos;t there before, integrated panels on appliances, or any door style your refacer can&apos;t produce. Custom replacement is the right answer most of the time — but not all the time.
            </p>
            <p>
              <strong>The math nobody mentions:</strong> Refacing&apos;s real savings come from skipping demolition, electrical, plumbing, and counters. Once a refacing project starts touching any of those, the gap closes fast.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>What refacing actually is</h2>
            <p>
              Refacing keeps your existing cabinet boxes in place. The doors and drawer fronts come off and get replaced with new ones. The visible sides of the cabinets get a thin veneer applied. Hardware (hinges, pulls) sometimes gets replaced. Counters and appliances stay where they are.
            </p>
            <p>
              The pitch is &quot;new kitchen look for half the price.&quot; The reality is &quot;new doors and a veneer wrap over whatever you had.&quot; That can be a great deal — or a waste of money — depending on what you had.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>What custom replacement actually is</h2>
            <p>
              Custom replacement means new cabinet boxes, new drawers, new hardware, new doors. The opportunity is full redesign — drawer banks instead of base cabinets, full-extension hardware, soft-close everything, integrated appliance panels, custom storage cubbies sized to your dishes. You can also change layout: add an island, move the range, expand the pantry.
            </p>
            <p>
              The trade-off is cost and time — typically two to four times the price of a comparable refacing job, and a longer schedule. The win is a kitchen that actually fits how you live.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>Side-by-side comparison</h2>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Feature</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Refacing</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Custom Replacement</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, i) => (
                    <tr key={r.feature} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.feature}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.refacing}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>When refacing is the right answer</h2>
            <ul>
              <li>The cabinets are less than 15 years old and the boxes are plywood (not particle-board).</li>
              <li>You like the existing layout — the work triangle, the storage, the flow.</li>
              <li>The drawers still glide and the hinges still close properly.</li>
              <li>You want a quicker, lower-disruption project.</li>
              <li>You&apos;re prepping the house for sale within the next few years.</li>
            </ul>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>When refacing is the wrong answer</h2>
            <ul>
              <li>The existing boxes are particle-board, water-damaged, or sagging.</li>
              <li>You want to change layout — move the range, add an island, expand the pantry.</li>
              <li>You want drawer banks where lower doors are now.</li>
              <li>You want integrated appliance panels.</li>
              <li>You want a door style your refacer doesn&apos;t offer.</li>
              <li>You&apos;re investing in a forever home and want this to be the last kitchen for thirty years.</li>
            </ul>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>A note about Kitchen Magic and the national refacers</h2>
            <p>
              The national refacing companies are real businesses with decent products. Kitchen Magic, the dominant refacer in this region, has been doing this for forty years and has a workmanlike record. If refacing is genuinely the right answer for your project, they will probably do a fine job.
            </p>
            <p>
              What they will not do is tell you when refacing is the wrong answer. Their sales pitch is engineered around closing a refacing sale, not steering you to a different solution. That&apos;s not malice — it&apos;s how their business model works. So if you&apos;re considering refacing, get a custom-replacement quote from a real cabinet shop alongside it. Compare the two in light of the table above, and pick the right tool for the actual job.
            </p>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>FAQs</h2>
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
          <h2 className="section-heading">Want a real comparison for your kitchen?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            We&apos;ll give you a custom-replacement quote — and tell you honestly if refacing is the better call for your specific room. The conversation is free.
          </p>
          <Link href="/contact" className="btn-primary">Book a Consultation</Link>
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
              { name: "Refacing vs. Custom", url: pageUrl },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </main>
  );
}
