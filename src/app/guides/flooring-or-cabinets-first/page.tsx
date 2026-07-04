import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const SLUG = "flooring-or-cabinets-first";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const rows = [
  { floor: "Solid hardwood (nailed)", order: "Floor first, cabinets on top", why: "The floor is a permanent structural layer. Cabinets sit on it, and you can refinish around them for decades." },
  { floor: "Engineered hardwood (glued)", order: "Floor first, cabinets on top", why: "Glued-down engineered behaves like solid — it isn't going anywhere, so it can carry cabinets." },
  { floor: "Engineered hardwood (floating)", order: "Cabinets first, floor cut to them", why: "A floating floor must expand and contract. Pin it under 600 lbs of cabinetry and it buckles at the seams." },
  { floor: "LVP (floating, most products)", order: "Cabinets first, floor cut to them", why: "Same rule as any floating floor — it needs room to move. Manufacturers void the warranty if it's trapped." },
  { floor: "LVP (glue-down)", order: "Either works — floor first is cleaner", why: "Glue-down doesn't float, so it can go under cabinets. Going first avoids visible cuts at the toe kick." },
  { floor: "Tile", order: "Floor first, cabinets on top", why: "Tile plus mortar bed raises the finished floor height — set cabinets after so counters land at 36 inches, not 35." },
];

const faqs = [
  {
    q: "What happens if you install cabinets on top of a floating floor?",
    a: "The floor loses its ability to expand and contract with the seasons. The trapped section stays put while the open field moves against it — and the movement shows up as buckled seams, gaps, or peaked joints, usually the first winter or summer after the install. It also typically voids the flooring manufacturer's warranty.",
  },
  {
    q: "Does 'floors first' waste money on flooring nobody sees?",
    a: "You do pay for material under the cabinets, but with nailed hardwood or tile it buys real flexibility: the kitchen layout can change in fifteen years without a flooring patch that never quite matches. On large kitchens, some builders run structural sub-material under cabinet zones instead — legitimate, but it locks the layout permanently.",
  },
  {
    q: "How does floor height affect appliances?",
    a: "This is the detail that bites. A dishwasher installed before a thicker floor goes in can literally be trapped under the countertop — the new floor raises the ramp-out height and the unit no longer clears. We check appliance clearances against finished floor height during design, before anything is ordered.",
  },
  {
    q: "Who decides the sequence when different companies do floors and cabinets?",
    a: "In theory the general contractor. In practice, nobody — the flooring crew follows their default, the cabinet crew follows theirs, and the homeowner inherits whatever happens. It's one of the quieter arguments for buying flooring and cabinetry from one shop: the sequencing decision gets made once, on paper, by people accountable for both.",
  },
  {
    q: "Does the toe kick hide the flooring cut when cabinets go first?",
    a: "Yes — a floating floor cut to the cabinet line disappears behind the toe kick and quarter-round or a clean scribe. Done properly you cannot tell the floor stops at the cabinet face. Done sloppily, you see wavy cuts and caulk. Ask to see photos of a finished toe-kick line before hiring.",
  },
];

export default function FlooringOrCabinetsFirstPage() {
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
            <span aria-current="page">Floors or Cabinets First</span>
          </nav>
          <span className="eyebrow">Process Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            It&apos;s the most common sequencing question in a kitchen remodel, and the internet answers it badly because the honest answer is: it depends on the floor.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The 30-second answer</h2>
            <p>
              <strong>Permanent floors go under the cabinets.</strong> Nailed hardwood, glued engineered, and tile are structural layers — install them wall to wall, then set cabinets on top.
            </p>
            <p>
              <strong>Floating floors go in after the cabinets.</strong> Most <Link href="/flooring">LVP</Link> and click-lock engineered products expand and contract with the seasons. They must never be pinned under cabinetry — cabinets first, floor cut to the cabinet line, cut hidden by the toe kick.
            </p>
            <p>
              Get this backwards in one direction and you have buckled planks by February. Get it backwards in the other and your dishwasher is trapped under the counter. Both are expensive, and both are avoidable on paper.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>The sequencing table</h2>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Floor type</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Install order</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.floor} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.floor}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.order}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The three mistakes we get called about</h2>
            <ul>
              <li>
                <strong>Floating floor pinned under cabinets.</strong> The classic. Looks perfect on install day; buckles at the first big humidity swing. The fix is pulling cabinets or cutting relief lines — neither is cheap.
              </li>
              <li>
                <strong>Appliances trapped by floor height.</strong> A new floor installed up to — but not under — an existing dishwasher raises the floor in front of it. When the dishwasher fails years later, it can&apos;t come out without cutting the countertop or the floor.
              </li>
              <li>
                <strong>Counter height creep.</strong> Cabinets set before a thick tile assembly means the finished counter lands below the standard 36 inches, and stock appliances suddenly don&apos;t fit under them or stand proud of them.
              </li>
            </ul>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>Why this is really a coordination problem</h2>
            <p>
              None of the rules above are secrets — every competent flooring installer and every competent cabinet installer knows their half. The failures happen at the seam between two companies, when nobody owns the sequence. The flooring crew arrives first because that&apos;s when they had availability, and the sequencing decision gets made by the calendar instead of by the material.
            </p>
            <p>
              It&apos;s a big part of why we install <Link href="/flooring">flooring</Link> and <Link href="/cabinets">cabinetry</Link> — and run <Link href="/remodeling">complete kitchen remodels</Link> — from one shop. The install order is decided during design, written into the schedule, and checked against your appliance specs before anything is ordered.
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
          <h2 className="section-heading">Planning both floors and cabinets?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Tell us about the room and we&apos;ll sequence the whole thing on paper — floor type, install order, appliance clearances — before you spend a dollar.
          </p>
          <Link href="/contact?type=remodeling" className="btn-primary">Get a Quote</Link>
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
