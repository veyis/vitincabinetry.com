import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { breadcrumbSchema, cabinetStoreSchema, toJsonLd } from "@/lib/schema";

const stats = [
  { num: "15+", label: "Years on the Bench" },
  { num: "500+", label: "Cabinets Built" },
  { num: "100%", label: "Built in Our Shop" },
  { num: "4.9★", label: "Avg Customer Rating" },
];

const pillars = [
  {
    title: "Built in Quakertown.",
    desc: "Every Vitrin Signature cabinet is milled, assembled, and finished at our shop. Plywood boxes, dovetail drawers, Blum hardware.",
  },
  {
    title: "Two tiers, one shop.",
    desc: "Vitrin Stock ships fast from the showroom floor. Vitrin Signature is built to your kitchen&apos;s exact dimensions. Same quality bar.",
  },
  {
    title: "Yours to install — or we’ll do it.",
    desc: "Most contractors install our cabinets themselves. Homeowners who’d rather not can add installation as an option.",
  },
];

const audienceCards = [
  {
    title: "Homeowners",
    desc: "Walk in, sit at the materials bench, take stock cabinets home this week or order a full custom kitchen.",
    href: "/cabinets",
  },
  {
    title: "Contractors & installers",
    desc: "Bulk pricing, fast quoting, will-call pickup or jobsite delivery.",
    href: "/trade",
  },
  {
    title: "Designers & architects",
    desc: "Spec-grade cabinetry with 3D renderings on custom orders.",
    href: "/trade#designers",
  },
];

const featuredStock = [
  { name: "Inset Shaker · Painted White Dove", from: "$X" },
  { name: "Full-Overlay Shaker · Painted Iron Ore", from: "$X" },
  { name: "Slab Modern · Rift-Cut White Oak", from: "$X" },
];

const orderSteps = [
  "Discovery call",
  "In-home survey & measurements",
  "Design & quote",
  "Fabrication at our bench",
  "Delivery (install optional)",
];

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="hero animate-fade-in">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/heros/bespoke-kitchen-stone-farmhouse-bucks-county-poster.jpg"
          aria-label="Custom kitchen built by Vitrin Cabinetery in Quakertown, PA"
        >
          <source media="(prefers-reduced-motion: no-preference)" src="/videos/bespoke-kitchen-stone-farmhouse-bucks-county.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Quakertown&apos;s Cabinet Shop</span>
          <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Cabinets, built and sold in Quakertown.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Two ways to buy — pick from in-stock door styles in our showroom, or order a kitchen custom-built at our bench. For homeowners, contractors, designers, and builders across Bucks County and the Lehigh Valley.
          </p>
          <div className="hero__cta">
            <Link href="/cabinets/stock" className="btn-primary">Browse Stock Cabinets &rarr;</Link>
            <Link
              href="/cabinets/custom"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                padding: "1rem 2rem",
                borderRadius: "4px",
                fontWeight: 600,
                display: "inline-block",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.9rem",
              }}
            >
              Order a Custom Kitchen &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">The Vitrin Difference</span>
            <h2 className="section-heading">A franchise sells you a catalog. We build you a cabinet.</h2>
            <p className="section-sub">
              Most local cabinet shops are reselling a manufactured line. We build our custom cabinets ourselves, in our own shop — and stock a curated lineup ready for pickup.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title" style={{ color: "var(--primary)" }}>{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we sell to */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Who We Sell To</span>
            <h2 className="section-heading">One brand. Three audiences.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {audienceCards.map((a) => (
              <Link key={a.href} href={a.href} className="card" style={{ display: "block" }}>
                <h3 className="card__title">{a.title}</h3>
                <p className="card__desc">{a.desc}</p>
                <div className="card__more">Learn More &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From the showroom */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">From the Showroom</span>
            <h2 className="section-heading">Stock cabinets in our Quakertown shop</h2>
            <p className="section-sub">Featured Vitrin Stock door styles. Pickup or delivery from Quakertown, PA.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {featuredStock.map((s) => (
              <Link key={s.name} href="/cabinets/stock" className="card">
                <h3 className="card__title">{s.name}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>From {s.from}</span>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--good, #2f6a3a)" }}>Available now</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/cabinets/stock" className="btn-secondary">Browse all Vitrin Stock &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Custom kitchen teaser */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Vitrin Signature</span>
            <h2 className="section-heading">When stock isn&apos;t right, we build it.</h2>
            <p className="section-sub">
              Fully custom kitchens, built at our Quakertown bench. Any size, any door style, any finish. 4 to 8 weeks in the shop, weekly photo updates.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/cabinets/custom" className="btn-primary">Order a Custom Kitchen &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Trade callout */}
      <TradeCalloutStrip />

      {/* Process snapshot — 5 steps */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How Ordering Works</span>
              <h2 className="section-heading">How ordering a custom kitchen works — five steps.</h2>
              <div className="prose" style={{ marginTop: "1.5rem" }}>
                <p>
                  One supplier, one rep, one accountable shop. We deliver — install if you want us to, or your contractor&apos;s crew if you don&apos;t.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/process" className="btn-secondary">See the full process</Link>
              </div>
            </div>
            <div>
              <ol role="list" aria-label="Custom kitchen ordering steps" style={{ listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
                {orderSteps.map((step, i) => (
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

      {/* Stats */}
      <section className="section--surface section--tight">
        <div className="container">
          <div className="stat-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Town grid */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Where We Sell</span>
            <h2 className="section-heading">Built in Quakertown. Sold across Bucks County and the Lehigh Valley.</h2>
            <p className="section-sub">
              We supply cabinets to homeowners and trade in {towns.slice(0, 6).map((t) => t.name).join(", ")} and beyond.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", textAlign: "center" }}>
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/custom-kitchen-cabinets/${t.slug}`}
                style={{
                  padding: "0.85rem",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                }}
              >
                {t.name}, PA
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dual final CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to order cabinets?</h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Visit our Quakertown showroom — or send us your kitchen drawings for a quote.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/showroom" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
              Visit the Showroom
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
              Get a Cabinet Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([{ name: "Home", url: site.url }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(cabinetStoreSchema),
        }}
      />
    </main>
  );
}
