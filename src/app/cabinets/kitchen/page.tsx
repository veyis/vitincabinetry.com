import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Cabinets — Stock & Custom · Vitrin Cabinetery",
  description:
    "Kitchen cabinets from Vitrin Cabinetery — stock cabinets ready from the Quakertown showroom, or fully custom kitchens built at our bench. Plywood boxes, Blum hardware, dovetail drawers.",
  alternates: { canonical: "/cabinets/kitchen" },
};

const styles = [
  { title: "Inset Shaker", desc: "Painted, traditional bones, contemporary palette. Our most-requested door style — works in farmhouses, colonials, and transitional builds alike." },
  { title: "Full-overlay flat panel", desc: "Clean and modern. Rift-cut oak, walnut, or smooth painted finishes. Popular in new construction and open-plan renovations." },
  { title: "Two-tone island contrast", desc: "Painted perimeter, stained or contrasting island. Available in both stock and custom tiers." },
  { title: "Traditional raised panel", desc: "Cherry, maple, or paint-grade. Holds up well in older Bucks County homes and period-appropriate restorations." },
];

const features = [
  "Plywood box construction with dado joinery",
  "Dovetail solid-wood drawer boxes",
  "Blum soft-close hinges and undermount slides",
  "Painted or stained in our dust-controlled finishing room",
  "Inset, full-overlay, or frameless construction",
  "Integrated appliance panels (Sub-Zero, Wolf, Miele, Thermador)",
];

export default function Page() {
  const pageUrl = `${site.url}/cabinets/kitchen`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/walnut-waterfall-island-modern-custom-kitchen.png"
          alt="Custom kitchen cabinets built by Vitrin Cabinetery in Quakertown, PA"
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
            <Link href="/cabinets" style={{ color: "inherit" }}>Cabinets</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Kitchen</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Kitchen Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Kitchen cabinets — stock or built to fit.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Two ways to cabinet your kitchen — pick door styles from in-stock SKUs in our Quakertown showroom, or order a kitchen built to your room&apos;s exact dimensions.
          </p>
        </div>
      </section>

      {/* Two-tier cards */}
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h2 className="card__title">Stock kitchen cabinets</h2>
              <p className="card__desc">In-showroom inventory. Curated door styles and finishes. Ready for pickup within the week. Best for rental units, secondary kitchens, fast-turn contractor jobs.</p>
              <div className="card__more">Browse Vitrin Stock →</div>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h2 className="card__title">Custom kitchen cabinets</h2>
              <p className="card__desc">Built at our Quakertown bench to your room&apos;s exact dimensions. Any door style, any wood species, any finish. 4–8 week build.</p>
              <div className="card__more">Order a Vitrin Signature kitchen →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Door styles — ported from /services/kitchen-cabinets */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Style Options</span>
            <h2 className="section-heading">Four door styles, fully configurable from there.</h2>
            <p className="section-sub">
              These are the starting points most buyers choose. Every dimension, finish, and hardware decision flexes from here. Available in both stock and custom tiers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {styles.map((s) => (
              <div key={s.title} className="card">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction features — ported from /services/kitchen-cabinets */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">What You Get</span>
              <h2 className="section-heading">Bench-built cabinetry on both tiers.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  &quot;Custom&quot; means different things in this industry. At Vitrin, it means your cabinets are physically built in our shop, to dimensions drawn for your house — not picked from a catalog. Stock cabinets share the same construction bar: plywood boxes, dovetail drawers, Blum hardware.
                </p>
                <p>
                  Both tiers give you a single point of contact, a written quote, and cabinetry built in Quakertown — not assembled overseas and warehoused at a big-box store.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
                {features.map((f) => (
                  <li key={f} style={{ marginBottom: "0.6rem", color: "var(--text)" }}>
                    <span style={{ color: "var(--primary)", marginRight: "0.5rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Species &amp; Finishes</span>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>Wood species and finish options.</h2>
              <div className="prose">
                <p>
                  Stock carries a curated palette. Custom orders open the full species list.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                {[
                  "Maple — stock and custom",
                  "Paint-grade MDF — stock and custom",
                  "White oak — custom, rift or flat-sawn",
                  "Walnut — custom, natural or stained",
                  "Cherry — custom",
                  "Alder — custom",
                  "Painted finishes — full Benjamin Moore palette",
                  "Stained finishes — matched to your sample",
                ].map((item) => (
                  <li key={item} style={{ marginBottom: "0.5rem", color: "var(--text)" }}>
                    <span style={{ color: "var(--primary)", marginRight: "0.5rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ConstructionSpecs />

      <section className="section--surface">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Talk to us about your kitchen</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Two options, one shop. We&apos;ll help you choose the right tier.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=kitchen" className="btn-primary">Get a Kitchen Quote</Link>
            <Link href="/showroom" className="btn-secondary">Visit the Showroom</Link>
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
              { name: "Cabinets", url: `${site.url}/cabinets` },
              { name: "Kitchen", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
