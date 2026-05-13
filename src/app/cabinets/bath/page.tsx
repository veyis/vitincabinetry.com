import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bath Vanities & Cabinets — Stock & Custom · Vitrin Cabinetery",
  description:
    "Bathroom vanities and cabinetry from Vitrin Cabinetery — stock vanities ready from the Quakertown showroom, or fully custom bath cabinetry built at our bench. Plywood boxes, Blum hardware, dovetail drawers.",
  alternates: { canonical: "/cabinets/bath" },
};

const types = [
  { title: "Single vanity", desc: "Standard 30–48\" widths or anything custom. Drawer-bank or door-bank configurations. Available in stock and custom tiers." },
  { title: "Double vanity", desc: "Symmetrical or asymmetrical. Integrated his-and-hers storage and mid-counter mirror walls. Custom builds accommodate any width." },
  { title: "Floating vanity", desc: "Wall-mounted, contemporary. Concealed LED toe-kick lighting available. Stock modules or custom-built to your wall span." },
  { title: "Powder-room vanity", desc: "Small footprint, statement piece. Often where buyers experiment with bolder finishes. Stock and custom options." },
];

const features = [
  "Moisture-resistant, marine-grade plywood box construction",
  "Solid-wood drawer boxes with dovetail joinery",
  "Sealed and lacquered finishes rated for steam and humidity",
  "Quartz or natural-stone tops, fabricated locally",
  "Blum or Hettich soft-close hardware",
  "Integrated outlet pop-ups and concealed plumbing where possible",
];

export default function Page() {
  const pageUrl = `${site.url}/cabinets/bath`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/sage-inset-cabinet-door-brass-cup-pull-detail.png"
          alt="Custom bath vanity built by Vitrin Cabinetery in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Bath</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Bath Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Bath vanities — stock or built to fit.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Floating vanities, double vanities, custom dimensions — pick from in-stock SKUs at our Quakertown showroom, or order built to fit. Same construction bar on both tiers.
          </p>
        </div>
      </section>

      {/* Two-tier cards */}
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h2 className="card__title">Stock bath cabinets</h2>
              <p className="card__desc">In-showroom inventory in standard widths. Ready for pickup. Best for guest baths, powder rooms, primary baths where a standard vanity fits.</p>
              <div className="card__more">Browse Vitrin Stock →</div>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h2 className="card__title">Custom bath cabinets</h2>
              <p className="card__desc">Built to your bath&apos;s exact dimensions — floating, full-height, his-and-hers, integrated medicine cabinets. Any finish.</p>
              <div className="card__more">Order a Vitrin Signature vanity →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vanity types — ported from /services/bathroom-vanities */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Vanity Types</span>
            <h2 className="section-heading">Four common configurations — anything from there.</h2>
            <p className="section-sub">
              Standard configurations available in both stock and custom tiers. Custom orders accommodate non-standard widths, floating mounts, and integrated medicine cabinets.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {types.map((t) => (
              <div key={t.title} className="card">
                <h3 className="card__title">{t.title}</h3>
                <p className="card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction — ported from /services/bathroom-vanities */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Construction</span>
              <h2 className="section-heading">Built like our kitchens — specified for a wetter room.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  Bath cabinetry uses the same construction methods as our kitchens, with every material re-evaluated for moisture: plywood grade, drawer-box joinery, finish chemistry, hardware plating. The result is cabinetry that holds up to daily steam without delaminating or swelling.
                </p>
                <p>
                  Stock vanities use moisture-rated materials throughout. Custom builds extend the same spec to any width or configuration you need.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1.25rem" }}>
                {features.map((f) => (
                  <li key={f} style={{ marginBottom: "0.6rem", color: "var(--text)" }}>
                    <span style={{ color: "var(--primary)", marginRight: "0.5rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Finish Options</span>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>Paint, stain, and specialty finishes.</h2>
              <div className="prose">
                <p>
                  Stock carries a curated palette suited for bath environments. Custom orders open any painted or stained finish.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                {[
                  "Painted — full Benjamin Moore palette, bath-rated lacquer",
                  "Stained — matched to sample or specified color",
                  "Two-tone — painted body, stained or contrasting door",
                  "Natural — clear-sealed white oak, maple, or walnut",
                  "Limewashed — popular on floating and powder-room vanities",
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
          <h2 className="section-heading">Talk to us about your bath</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Two options, one shop. We&apos;ll help you choose the right tier.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=bath" className="btn-primary">Get a Bath Quote</Link>
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
              { name: "Bath", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Bath Vanity & Cabinet Supply",
              description: "Stock and custom bath vanities sold from Vitrin Cabinetery in Quakertown, PA. Plywood boxes, moisture-rated finishes.",
              url: pageUrl,
              serviceType: "Custom Cabinetry Supply",
            })
          ),
        }}
      />
    </main>
  );
}
