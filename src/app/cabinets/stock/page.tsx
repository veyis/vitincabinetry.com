import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stock Cabinets — Ready from the Showroom · Vitrin Cabinetery",
  description:
    "Vitrin Stock cabinets — plywood-box construction, Blum hardware, dovetail drawers. Curated door styles and finishes, available for pickup or delivery from our Quakertown, PA showroom. Trade pricing.",
  alternates: { canonical: "/cabinets/stock" },
};

// Placeholder SKUs — replace with real inventory as it lands.
const featured = [
  { name: "Inset Shaker", finish: "Painted White Dove", from: "$X" },
  { name: "Full-Overlay Shaker", finish: "Painted Iron Ore", from: "$X" },
  { name: "Slab Modern", finish: "Rift-Cut White Oak", from: "$X" },
  { name: "Beaded Inset", finish: "Stained Walnut", from: "$X" },
];

const sizes = [
  "Base 12, 15, 18, 24, 30, 36",
  "Wall 30, 36, 42",
  "Drawer Base 18, 24, 30",
  "Pantry 18, 24",
  "Vanity Base 24, 30, 36",
  "Custom-cut filler strips",
];

export default function StockPage() {
  const pageUrl = `${site.url}/cabinets/stock`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Stock cabinets ready for pickup at the Vitrin Cabinetery showroom in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Stock</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Vitrin Stock</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Stock cabinets, ready to take home.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Plywood-box construction. Blum hardware. Dovetail drawers. Available for pickup, delivery, or jobsite drop in Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What&apos;s in stock</span>
            <h2 className="section-heading">Featured door styles</h2>
            <p className="section-sub">Placeholder lineup. Real SKUs, photos, and prices land as inventory rolls in.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {featured.map((f) => (
              <div key={f.name} className="card">
                <h3 className="card__title">{f.name}</h3>
                <p className="card__desc">{f.finish}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>From {f.from}</span>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--good, #2f6a3a)" }}>Available now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Sizes</span>
            <h2 className="section-heading">Standard box sizes we stock</h2>
          </div>
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.5rem 2rem", listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
            {sizes.map((s) => (
              <li key={s} style={{ padding: "0.4rem 0", borderBottom: "1px solid var(--border)" }}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <ConstructionSpecs heading="Same construction bar as Vitrin Signature" />

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Pickup &amp; delivery</span>
            <h2 className="section-heading">How you get them out the door</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Will-call pickup", desc: "By appointment at the Quakertown shop once your order is ready. Most stock orders ready within 2 business days." },
              { title: "Local delivery", desc: "Bucks County, Lehigh Valley, Montgomery County. Flat-fee tiers by zone." },
              { title: "Jobsite delivery", desc: "Scheduled against your install date. We coordinate with your foreman." },
              { title: "Lift-gate / inside delivery", desc: "Available on request for larger orders." },
            ].map((b) => (
              <div key={b.title} className="card">
                <h3 className="card__title">{b.title}</h3>
                <p className="card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TradeCalloutStrip />

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Get a stock cabinet quote</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Send us the sizes you need. Stock orders are priced same-day.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=stock" className="btn-primary">Get a Stock Quote</Link>
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
              { name: "Stock", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
