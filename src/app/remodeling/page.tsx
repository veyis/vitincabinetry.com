import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const PAGE_TITLE = "Kitchen & Bathroom Remodeling — Quakertown & Bucks County, PA";
const PAGE_DESC =
  "Complete kitchen and bathroom remodeling from a Quakertown, PA cabinet shop — 3D design, demolition, cabinetry, countertops, backsplash, lighting, plumbing, electrical, and finishing.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/remodeling" },
  ...shareMetadata("/remodeling", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/heritage-green-custom-kitchen-cabinets-bucks-county.png",
    imageAlt: "Fully remodeled kitchen with heritage green custom cabinets in Bucks County by Vitrin Cabinetry",
  }),
};

const scope = [
  { title: "3D design", desc: "Your kitchen or bath drawn in 3D before demo day — layout, cabinetry, counters, and finishes decided on screen, where changes are free." },
  { title: "Demolition", desc: "Careful tear-out with floors and pathways protected, debris hauled, and surprises behind the walls documented and priced before work continues." },
  { title: "Cabinetry", desc: "The center of the project — bench-built Vitrin Signature or in-stock Vitrin Stock, from the shop that's running your whole remodel." },
  { title: "Countertops & backsplash", desc: "Quartz, granite, or porcelain templated after cabinets are set; tile or full-height splash installed after the tops." },
  { title: "Lighting, plumbing & electrical", desc: "Recessed and under-cabinet lighting, fixture swaps, relocated supply lines and circuits — handled within the remodel and permitted where code requires." },
  { title: "Flooring & finishing", desc: "LVP, hardwood, or tile sequenced correctly against cabinet installation, then paint, trim, and the punch list that makes it feel finished." },
];

const steps = [
  "In-home survey & measurements",
  "3D design & line-item quote",
  "Demolition & rough-in",
  "Cabinetry, counters & flooring",
  "Backsplash, lighting & finishing",
];

const faqs = [
  {
    q: "How long does a kitchen remodel take in Bucks County?",
    a: "From signed contract to finished kitchen is typically 10–14 weeks: design lock, then 4–8 weeks of cabinet fabrication at our Quakertown bench, then 2–4 weeks on site covering demo, install, counters, backsplash, and finishing. Bathrooms are usually faster — commonly 3–6 weeks on site depending on tile scope.",
  },
  {
    q: "Do I need permits for a kitchen or bathroom remodel?",
    a: "If the project touches plumbing, electrical circuits, structural walls, or HVAC — usually yes. Cosmetic swaps typically don't. We coordinate with your municipality (Quakertown Borough, Richland Township, and the surrounding townships all handle this slightly differently) and pull permits in your name when the scope requires it.",
  },
  {
    q: "Can I stay in my house during the remodel?",
    a: "Almost everyone does. For kitchens, we help you set up a temporary kitchen — fridge, microwave, coffee — outside the work zone, and we keep the dusty phase as short as possible by doing fabrication in our shop, not your driveway. Bathrooms are easier still if the house has a second full bath.",
  },
  {
    q: "What drives remodeling cost the most?",
    a: "Three things, in order: whether the layout changes (moving plumbing and walls costs more than replacing in place), the cabinetry tier, and the countertop material. Our quotes are line-item, so you can see each decision's price and trade down or up deliberately instead of guessing at an allowance.",
  },
  {
    q: "Why hire a cabinet shop as the remodeler instead of a general contractor?",
    a: "Because in a kitchen or bath, the cabinetry is the schedule. It's the longest lead item, the most expensive line, and the thing every other trade works around. When the shop building the cabinets also runs the project, the design, fabrication, and site work stay on one calendar — and one company answers for the whole room, not just their slice of it.",
  },
];

export default function Page() {
  const pageUrl = `${site.url}/remodeling`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/heritage-green-custom-kitchen-cabinets-bucks-county.png"
          alt="Fully remodeled kitchen with heritage green custom cabinets in Bucks County, PA by Vitrin Cabinetry"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Remodeling</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Kitchen &amp; Bath Remodeling</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Complete kitchen &amp; bath remodels, run by the cabinet shop.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            From 3D design through demolition, cabinetry, countertops, backsplash, lighting, plumbing, electrical, flooring, and finishing — one accountable team in Quakertown, PA, serving Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section>
        <div className="container--narrow prose">
          <h2>The cabinetry is the schedule. We own both.</h2>
          <p>
            Every kitchen remodel in Bucks County is organized around one thing whether anyone admits it or not: when the cabinets arrive. It&apos;s the longest lead time, the biggest line on the budget, and the piece every other trade fits around. That&apos;s why a remodel run by the shop that builds the cabinets works differently — the design, the fabrication calendar, and the site schedule live in one place, a few minutes from your house.
          </p>
          <p>
            You&apos;ve seen how we <Link href="/cabinets/custom">build cabinets</Link> and <Link href="/process">how ordering works</Link>. Remodeling is that same process with the walls, wires, pipes, floors, and finishes included — and the same rule applied to all of it: we answer for the work.
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Full Scope</span>
            <h2 className="section-heading">Everything between the empty room and the finished one.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {scope.map((s) => (
              <div key={s.title} className="card">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How It Runs</span>
              <h2 className="section-heading">Five phases, one calendar, weekly updates.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  Because fabrication happens at our bench — not on site — your house isn&apos;t a workshop for three months. The disruptive on-site phase is measured in weeks, and you get photo updates from the shop while your cabinetry is being built.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/process" className="btn-secondary">See the full process</Link>
              </div>
            </div>
            <div>
              <ol role="list" aria-label="Remodeling phases" style={{ listStyle: "none", padding: 0 }}>
                {steps.map((step, i) => (
                  <li
                    key={step}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      padding: "0.85rem 0",
                      borderTop: i === 0 ? "1px solid var(--border)" : "none",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-serif)", color: "var(--primary)", fontSize: "1.1rem", width: "1.5rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "var(--text)" }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Pieces of the Puzzle</span>
            <h2 className="section-heading">Only need part of the remodel?</h2>
            <p className="section-sub">Every piece of the full scope is also available on its own.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            <Link href="/cabinets" className="card"><h3 className="card__title">Cabinets</h3><p className="card__desc">Stock and bench-built custom.</p><div className="card__more">Explore →</div></Link>
            <Link href="/countertops" className="card"><h3 className="card__title">Countertops</h3><p className="card__desc">Quartz, granite &amp; porcelain.</p><div className="card__more">Explore →</div></Link>
            <Link href="/flooring" className="card"><h3 className="card__title">Flooring</h3><p className="card__desc">LVP, hardwood &amp; tile.</p><div className="card__more">Explore →</div></Link>
            <Link href="/closets" className="card"><h3 className="card__title">Closets</h3><p className="card__desc">3D-designed, bench-built.</p><div className="card__more">Explore →</div></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Remodeling FAQs</span>
            <h2 className="section-heading">What to know before you demo anything.</h2>
          </div>
          <div>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item" style={{ borderBottom: "1px solid var(--border)", padding: "1rem 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--text)", cursor: "pointer" }}>{f.q}</summary>
                <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Start with a 3D design and a line-item quote.</h2>
          <p style={{ fontSize: "1.05rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Tell us about the room. We&apos;ll survey it, design it in 3D, and price every line so there are no allowance games.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=remodeling" className="btn-primary">Get a Remodeling Quote</Link>
            <Link href="/portfolio" className="btn-secondary">See Finished Projects</Link>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Remodeling", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Kitchen & Bathroom Remodeling",
              description:
                "Complete kitchen and bathroom remodeling by Vitrin Cabinetry in Quakertown, PA — 3D design, demolition, cabinetry, countertops, backsplash, lighting, plumbing, electrical, flooring, and finishing.",
              url: pageUrl,
              serviceType: "Kitchen and Bathroom Remodeling",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqPageJsonLd(faqs)) }}
      />
    </main>
  );
}
