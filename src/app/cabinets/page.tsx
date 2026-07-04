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
  title: "Cabinets — Stock & Custom · Vitrin Cabinetry",
  description:
    "Two ways to buy cabinets from Vitrin: stock cabinets ready from our Quakertown showroom, or fully custom kitchens built to your exact dimensions. Trade pricing on both.",
  alternates: { canonical: "/cabinets" },
};

const rows: Array<{ label: string; stock: string; signature: string }> = [
  { label: "Lead time",     stock: "In stock — pick up this week",                                         signature: "4–8 weeks" },
  { label: "Sizes",         stock: "Fixed cabinet box sizes",                                              signature: "Built to your exact dimensions" },
  { label: "Door styles",   stock: "Curated lineup (≈6 styles)",                                           signature: "Any style we make" },
  { label: "Finishes",      stock: "Curated palette",                                                       signature: "Full paint / stain match" },
  { label: "Construction",  stock: "Plywood box · Blum hardware · dovetail drawers",                       signature: "Same" },
  { label: "Price tier",    stock: "$",                                                                     signature: "$$–$$$" },
  { label: "Trade pricing", stock: "Yes",                                                                   signature: "Yes" },
  { label: "Install",       stock: "Optional add-on",                                                       signature: "Optional add-on" },
  { label: "Best for",      stock: "Bath vanities · laundry · mudrooms · rentals · spec homes · contractor jobs", signature: "Whole kitchens · custom built-ins · designed spaces" },
];

export default function CabinetsPage() {
  const pageUrl = `${site.url}/cabinets`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "50vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/heritage-green-custom-kitchen-cabinets-bucks-county.png"
          alt="Two ways to buy cabinets at Vitrin Cabinetry — stock and custom, Quakertown PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Cabinets</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Two ways to buy cabinets. One Quakertown shop.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Stock cabinets ready from the showroom. Custom kitchens built at our bench. Same construction bar on both.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Compare</span>
            <h2 className="section-heading">Vitrin Stock vs. Vitrin Signature</h2>
          </div>
          <div
            style={{ overflowX: "auto" }}
            tabIndex={0}
            role="region"
            aria-label="Stock vs Signature comparison"
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)" }}>
                    <span style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>Feature</span>
                  </th>
                  <th scope="col" style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Vitrin Stock</th>
                  <th scope="col" style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Vitrin Signature</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--text)", textAlign: "left" }}>{r.label}</th>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.stock}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            <Link href="/cabinets/stock" className="btn-primary">Browse Stock Cabinets →</Link>
            <Link href="/cabinets/custom" className="btn-secondary">Order a Custom Kitchen →</Link>
          </div>
        </div>
      </section>

      {/* Decision strip */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">How to choose</span>
            <h2 className="section-heading">Not sure which fits?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h3 className="card__title">I need cabinets this week</h3>
              <p className="card__desc">→ Vitrin Stock. In-showroom pickup, lower price tier.</p>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h3 className="card__title">I&apos;m doing a full kitchen and want it built to fit</h3>
              <p className="card__desc">→ Vitrin Signature. 4–8 week build. Any style, any finish.</p>
            </Link>
            <Link href="/contact" className="card">
              <h3 className="card__title">I&apos;m not sure which fits my project</h3>
              <p className="card__desc">→ Talk to us. We&apos;ll tell you the truth in 10 minutes.</p>
            </Link>
          </div>
        </div>
      </section>

      <ConstructionSpecs />

      <TradeCalloutStrip />

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to order?</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/showroom" className="btn-primary">Visit the Showroom</Link>
            <Link href="/contact" className="btn-secondary">Get a Cabinet Quote</Link>
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
              { name: "Cabinets", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
