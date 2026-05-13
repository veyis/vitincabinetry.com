import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

const PAGE_TITLE = "Custom Kitchen Cabinets — Designed, Built & Installed in Quakertown";
const PAGE_DESC =
  "Bench-built custom kitchen cabinets designed and installed by Vitrin Cabinetery. Inset, full-overlay, painted, stained, or natural — drawn to your dimensions, built in our Quakertown, PA shop.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/services/kitchen-cabinets" },
  ...shareMetadata("/services/kitchen-cabinets", PAGE_TITLE, PAGE_DESC),
};

const features = [
  "Plywood box construction with dado joinery",
  "Dovetail solid-wood drawer boxes",
  "Blum soft-close hinges and undermount slides",
  "Painted or stained in our dust-controlled finishing room",
  "Inset, full-overlay, or frameless construction",
  "Integrated appliance panels (Sub-Zero, Wolf, Miele, Thermador)",
];

const styles = [
  { title: "Inset Shaker", desc: "Painted, traditional bones, contemporary palette. Our most-requested style." },
  { title: "Full-overlay flat panel", desc: "Clean and modern. Rift-cut oak, walnut, or smooth painted finishes." },
  { title: "Two-tone island contrast", desc: "Painted perimeter, stained or contrasting island. Versatile in transitional homes." },
  { title: "Traditional raised panel", desc: "Cherry, maple, or paint-grade. Holds up beautifully in older Bucks County homes." },
];

export default function KitchenCabinetsPage() {
  const pageUrl = `${site.url}/services/kitchen-cabinets`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/heritage-green-custom-kitchen-cabinets-bucks-county.png"
          alt="Heritage green inset custom kitchen cabinets built by Vitrin Cabinetery in Bucks County, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Custom Kitchen Cabinets</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Custom Kitchens</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            A kitchen drawn to your house. Built at our bench.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Every Vitrin kitchen is designed for your specific space, built from solid wood and plywood in our Quakertown shop, and installed by the people who built it.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">What You Get</span>
              <h2 className="section-heading">Bench-built cabinetry — not catalog product with a name on it.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  &quot;Custom&quot; means a lot of different things in this industry. At Vitrin, it means your cabinets are physically built in our shop, to dimensions we drew specifically for your house. Not picked from a 50-color stock palette.
                </p>
                <p>
                  That gives you control over every joint, every finish, every detail — and it gives you a single team to hold accountable when something doesn&apos;t look right.
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
            <div className="img-placeholder" style={{ minHeight: "440px" }} role="img" aria-label="Custom kitchen build photo — coming soon">
              Custom kitchen build photo — coming soon
            </div>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Style Options</span>
            <h2 className="section-heading">Four styles, fully customizable from there.</h2>
            <p className="section-sub">
              These are the starting points most clients choose. Every dimension, every finish, every hardware decision flexes from here.
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

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Pricing Tiers</span>
          <h2 className="section-heading">Transparent ranges. No mystery.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2.5rem" }}>
            Every project gets a line-item written proposal. Most kitchens fall into one of three tiers.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { tier: "Studio Semi-Custom", range: "$30k – $55k", desc: "Curated door styles & finishes. Sized to your space." },
              { tier: "Signature Custom", range: "$55k – $95k", desc: "Full bench-built. Any style, species, or finish." },
              { tier: "Signature Luxury", range: "$95k+", desc: "Exotic species, integrated appliances, complex layouts." },
            ].map((t) => (
              <div key={t.tier} className="card" style={{ textAlign: "left" }}>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "0.4rem" }}>{t.range}</div>
                <div style={{ fontWeight: 600, marginBottom: "0.6rem" }}>{t.tier}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Local Coverage</span>
            <h2 className="section-heading">Towns we install in regularly.</h2>
          </div>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <Link href="/custom-kitchen-cabinets/bucks-county" className="btn-secondary">
              See All Towns in Bucks County
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {site.areaServed.map((town) => {
              const slug = town.replace(", PA", "").toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={town}
                  href={`/custom-kitchen-cabinets/${slug}`}
                  style={{
                    display: "block",
                    padding: "0.85rem 1rem",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    textAlign: "center",
                    background: "#fff",
                  }}
                >
                  {town}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready for your dream kitchen?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Free 30-minute discovery call. We&apos;ll talk space, budget tier, and timeline before either of us commits anything.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Custom Kitchens", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Kitchen Cabinets",
              description:
                "Bench-built custom kitchen cabinets designed, built, and installed by Vitrin Cabinetery in Quakertown, PA. Serving Bucks County and the Lehigh Valley.",
              url: pageUrl,
              serviceType: "Custom Kitchen Cabinets",
            })
          ),
        }}
      />
    </main>
  );
}
