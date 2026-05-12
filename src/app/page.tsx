import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

const stats = [
  { num: "15+", label: "Years on the Bench" },
  { num: "500+", label: "Kitchens Delivered" },
  { num: "100%", label: "Built in Our Shop" },
  { num: "4.9★", label: "Avg Customer Rating" },
];

const pillars = [
  {
    title: "Designed by us.",
    desc: "Every project starts at our drafting table. No franchise catalog, no template kitchens — just drawings made for your house.",
  },
  {
    title: "Built by us.",
    desc: "We mill, assemble, sand, and finish every cabinet at our Quakertown shop. The same hands that drew it build it.",
  },
  {
    title: "Installed by us.",
    desc: "Our installers are our builders. One team, one accountable point of contact, from first sketch to final reveal.",
  },
];

const services = [
  {
    title: "Custom Kitchens",
    desc: "Inset, full-overlay, frameless. Painted, stained, rift-cut oak. Drawn to your house, not the next house over.",
    href: "/services/kitchen-cabinets",
  },
  {
    title: "Bathroom Vanities",
    desc: "Single, double, floating, his-and-hers. Built with the same bench-built cabinetry as our kitchens.",
    href: "/services/bathroom-vanities",
  },
  {
    title: "Living, Library & Built-ins",
    desc: "Entertainment walls, libraries, home offices, mudrooms. Anywhere a custom cabinet earns its place.",
    href: "/services/living-room-units",
  },
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
          aria-label="Bespoke stone farmhouse custom kitchen with Calacatta marble island built by Vitrin Cabinetery in Bucks County, PA"
        >
          <source media="(prefers-reduced-motion: no-preference)" src="/videos/bespoke-kitchen-stone-farmhouse-bucks-county.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Quakertown&apos;s Custom Cabinetry Shop</span>
          <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Kitchens designed, built, and installed by our own hands.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Vitrin is a cabinetry workshop in Quakertown, PA. Every kitchen and bath we deliver is drawn at our bench, built in our shop, and installed by the people who built it. Serving Bucks County and the Lehigh Valley.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link
              href="/process"
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
              See How We Build
            </Link>
          </div>
        </div>
      </section>

      {/* The Vitrin Difference — 3-pillar */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">The Vitrin Difference</span>
            <h2 className="section-heading">A franchise sells you a catalog. We build you a kitchen.</h2>
            <p className="section-sub">
              Most local kitchen shops are reselling a manufactured cabinet line and subcontracting installation. We do every part of the work ourselves — and that is the entire point.
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

      {/* Services teaser */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What We Build</span>
            <h2 className="section-heading">Custom cabinetry for every room that earns it.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card" style={{ display: "block" }}>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
                <div className="card__more">Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process snapshot */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How It Works</span>
              <h2 className="section-heading">From first sketch to final reveal — one team, seven steps.</h2>
              <div className="prose" style={{ marginTop: "1.5rem" }}>
                <p>
                  Most remodels involve four or five companies pointing fingers at one another. Vitrin is one company, with one accountable team, from discovery call to lifetime warranty.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/process" className="btn-secondary">See the Full Process</Link>
              </div>
            </div>
            <div>
              <ol style={{ listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
                {[
                  "Discovery call",
                  "In-home survey & measurements",
                  "Design & 3D renderings",
                  "Materials & finishes in our shop",
                  "Fabrication at our bench",
                  "Installation by our crew",
                  "Walkthrough & lifetime warranty",
                ].map((step, i) => (
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

      {/* Local proof */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-heading">Built in Quakertown. Installed across Bucks County and the Lehigh Valley.</h2>
            <p className="section-sub">
              Our shop is in Quakertown, PA. We install regularly in {site.areaServed.slice(0, 6).map((t) => t.replace(", PA", "")).join(", ")} and beyond.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", textAlign: "center" }}>
            {site.areaServed.map((town) => (
              <Link
                key={town}
                href="/custom-kitchen-cabinets/quakertown"
                style={{
                  padding: "0.85rem",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                }}
              >
                {town}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to plan your kitchen?</h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Book a free 30-minute discovery call. We&apos;ll talk through your space, budget tier, and what custom actually means for your project.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
            Book a Consultation
          </Link>
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
    </main>
  );
}
