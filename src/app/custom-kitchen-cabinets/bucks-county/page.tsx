import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Custom Kitchen Cabinets in Bucks County, PA",
  description:
    "Custom kitchen cabinets for Bucks County homes — bench-built in Quakertown, not catalog-dropped. Vitrin Cabinetry: local install, published pricing tiers, historic-district experience, and a lifetime workmanship warranty on Signature work.",
  alternates: { canonical: "/custom-kitchen-cabinets/bucks-county" },
};

const reasons = [
  {
    title: "We are local — actually local.",
    body: "Our shop is in Quakertown, PA. Bucks County is our home market, and we install across it weekly. Every town we serve is within a 35-minute drive of the bench where your cabinets are built.",
  },
  {
    title: "Bench-built, not catalog product.",
    body: "Every cabinet is built at our Quakertown shop — plywood box, dovetail drawers, soft-close hardware, finished in a dust-controlled spray booth. No franchise catalog, no manufactured-line shortcut.",
  },
  {
    title: "Same team start to finish.",
    body: "The person who measures your kitchen is the person watching it leave the shop and the person on site the day it goes in. No franchise hand-offs, no installer subcontracting.",
  },
  {
    title: "Transparent pricing tiers.",
    body: "We publish our project ranges ($30k–$95k+) so you can self-qualify before a single visit. No mystery pricing, no \"call for quote\" gatekeeping.",
  },
  {
    title: "Built for the local housing stock.",
    body: "Bucks County is older housing. From 1700s stone homes in New Hope to 1920s farmhouses in Quakertown to mid-century ranches in Lansdale, we build cabinetry that fits the room — and the house — it lives in.",
  },
  {
    title: "Lifetime cabinetry warranty.",
    body: "Our warranty covers our work for as long as you own the home — not the resale clock that catalog-cabinet warranties run on.",
  },
];

const tiers = [
  { tier: "Studio Semi-Custom", range: "$30k – $55k", desc: "Curated door styles, sized to your space. Painted or stained, plywood boxes, dovetail drawers." },
  { tier: "Signature Custom", range: "$55k – $95k", desc: "Full bench-built. Any style, species, or finish. Integrated appliances. Custom storage." },
  { tier: "Signature Luxury", range: "$95k +", desc: "Exotic species, complex layouts, premium hardware suites, full whole-home cabinetry coordination." },
];

const faqs = [
  {
    q: "How long does a kitchen project take in Bucks County?",
    a: "Most projects run 10–14 weeks total: 1–2 weeks of design and finishes, 4–8 weeks of fabrication in our shop, and 1–2 weeks of installation on site. Counter templating and any structural scope can extend that.",
  },
  {
    q: "What towns do you serve?",
    a: `We install across upper Bucks County, lower Lehigh, and parts of upper Montgomery. The towns we install in most often are ${towns.map((t) => t.name).join(", ")}. If your town isn't on the list, we likely still serve it — call to confirm.`,
  },
  {
    q: "Do you work with Bucks County historic districts?",
    a: "Yes. We work in Doylestown's historic district, New Hope Borough, and other period neighborhoods regularly. Period-correct casework is one of our specialties.",
  },
  {
    q: "What's your typical project size?",
    a: "Most projects fall between $45k and $85k. Smaller jobs (single vanities, custom pantries, built-ins) and larger jobs ($120k+ luxury kitchens with integrated appliances) are both common.",
  },
  {
    q: "Do you handle counters, tile, and plumbing?",
    a: "We can. Cabinetry is the core service. We routinely coordinate counter templating, plumbing rough-in, electrical, and tile — either as the GC of the whole job or as a sub working under your own contractor.",
  },
];

export default function BucksCountyPillar() {
  const pageUrl = `${site.url}/custom-kitchen-cabinets/bucks-county`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const featured = projects.slice(0, 3);

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "70vh", padding: "180px 0 100px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Pennsylvania stone farmhouse custom inset Shaker kitchen with sage cabinets and brass hardware, built by Vitrin Cabinetry in Bucks County"
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
            <Link href="/cabinets/kitchen" style={{ color: "inherit" }}>Cabinet Types</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Bucks County, PA</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Bucks County, PA</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Custom kitchen cabinets across Bucks County.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            From Doylestown to New Hope to Quakertown, Bucks County kitchens are rarely “standard size.” Vitrin draws, mills, and finishes Signature cabinetry at our Quakertown shop — and keeps curated Stock on hand when the schedule does not allow an 8-week bench build. One team, line-item quotes, weekly bench photos on custom work.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <Link href="/portfolio" className="btn-secondary" style={{ background: "transparent", color: "#fff", borderColor: "#fff" }}>See Recent Work</Link>
          </div>
        </div>
      </section>

      {/* Why Vitrin */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Why Vitrin</span>
            <h2 className="section-heading">Six reasons Bucks County homeowners choose us.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {reasons.map((r) => (
              <div key={r.title} className="card">
                <h3 className="card__title">{r.title}</h3>
                <p className="card__desc">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Towns we serve */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Towns We Serve</span>
            <h2 className="section-heading">12 towns across upper Bucks, the Lehigh Valley, and upper Montgomery.</h2>
            <p className="section-sub">
              Each town below has its own dedicated page with local project examples, township-specific permitting notes, and styles popular in that part of the region.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/custom-kitchen-cabinets/${t.slug}`}
                style={{
                  display: "block",
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ fontWeight: 600 }}>{t.name}, PA</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{t.housing}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Featured Work</span>
            <h2 className="section-heading">Recent kitchens across the county.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                style={{
                  display: "block",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div className="img-placeholder" style={{ minHeight: "220px", border: "none", borderRadius: 0, fontSize: "0.8rem" }} role="img" aria-label={`${p.title} preview`}>
                  {p.title}
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ color: "var(--primary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.4rem" }}>
                    {p.style} · {p.town}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.55 }}>{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/portfolio" className="btn-secondary">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Pricing</span>
            <h2 className="section-heading">Transparent ranges. No mystery.</h2>
            <p className="section-sub">
              Three tiers covering the range of work we do across Bucks County. Every quote is line-item — door style, drawer count, hinge brand, wood species, hardware finish — so every dollar is accounted for.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {tiers.map((t) => (
              <div key={t.tier} className="card" style={{ background: "#fff" }}>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "0.4rem" }}>{t.range}</div>
                <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>{t.tier}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{t.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/guides/custom-kitchen-cost-bucks-county" className="text-link" style={{ fontSize: "0.95rem" }}>
              Read the full Bucks County pricing guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-heading">Bucks County homeowners ask us these.</h2>
          </div>
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

      <section>
        <div className="container--narrow prose" style={{ textAlign: "center" }}>
          <h2>The whole room, not just the boxes.</h2>
          <p>
            Cabinets are where most Bucks County projects start — and rarely where they end. We also handle <Link href="/countertops">quartz, granite, and porcelain countertops</Link>, <Link href="/flooring">LVP, hardwood, and tile flooring</Link>, <Link href="/closets">custom closets</Link>, and <Link href="/remodeling">complete kitchen and bathroom remodels</Link> — one shop, one schedule, one crew that answers for all of it.
          </p>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to start your project?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Free 30-minute discovery call. We&apos;ll talk space, budget tier, timeline, and whether we&apos;re the right shop for your project.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <Link href="/shop-tour" className="btn-secondary">Take the Shop Tour</Link>
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
              { name: "Cabinet Types", url: `${site.url}/cabinets/kitchen` },
              { name: "Bucks County, PA", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Kitchen Cabinets in Bucks County, PA",
              description:
                "Custom kitchen cabinetry built in Quakertown and supplied across Bucks County, PA by Vitrin Cabinetry. Serving 12+ towns from Quakertown to New Hope.",
              url: pageUrl,
              serviceType: "Custom Kitchen Cabinets",
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </main>
  );
}
