import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabinet Installation — Optional Service · Vitrin Cabinetry",
  description:
    "Most of our cabinets are installed by the contractor who bought them. For homeowners buying direct, Vitrin offers installation as an optional service. Cabinet install only — we coordinate with your other trades but don't perform them.",
  alternates: { canonical: "/installation" },
  robots: { index: true, follow: true },
};

const whoInstalls = [
  { buyer: "Homeowner buying direct", typically: "Vitrin install crew, or homeowner's chosen contractor" },
  { buyer: "Contractor / installer",   typically: "Their own crew" },
  { buyer: "Designer / architect",      typically: "Their preferred install partner" },
  { buyer: "Builder",                    typically: "Their on-site crew" },
];

const included = [
  "Cabinet install only (the cabinets we sold)",
  "Filler / scribe fitting",
  "Crown molding / light rail",
  "Toe kick",
  "Hardware install (knobs, pulls, soft-close adjustment)",
  "Punch-list walkthrough on the final day",
  "Counter templating coordination (we coordinate; templating itself is by your fabricator)",
];

const notIncluded = [
  "Plumbing",
  "Electrical",
  "Tile / backsplash",
  "Drywall / paint",
  "Flooring",
];

export default function InstallationPage() {
  const pageUrl = `${site.url}/installation`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "45vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
          alt="Cabinet craftsman at the Vitrin workshop in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Installation</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Installation</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Installation, if you want it.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.92)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.6 }}>
            Most of our cabinets are installed by the contractor who bought them. For homeowners buying direct, we offer installation as an optional service.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Who handles install</span>
            <h2 className="section-heading">It depends who&apos;s buying</h2>
          </div>
          <div
            style={{ overflowX: "auto" }}
            tabIndex={0}
            role="region"
            aria-label="Who installs cabinets by buyer type"
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Buyer type</th>
                  <th scope="col" style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Typically installed by</th>
                </tr>
              </thead>
              <tbody>
                {whoInstalls.map((r) => (
                  <tr key={r.buyer}>
                    <th scope="row" style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--text)", textAlign: "left" }}>{r.buyer}</th>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.typically}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <div className="two-col">
            <div>
              <span className="eyebrow">Included</span>
              <h3 style={{ marginTop: "0.5rem", fontSize: "1.3rem", marginBottom: "0.75rem", color: "var(--text)" }}>What our install covers</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                {included.map((i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{i}</li>)}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Not included</span>
              <h3 style={{ marginTop: "0.5rem", fontSize: "1.3rem", marginBottom: "0.75rem", color: "var(--text)" }}>What we don&apos;t do</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                {notIncluded.map((i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{i}</li>)}
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
                We coordinate with your other trades — we just don&apos;t perform them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Pricing</span>
            <h2 className="section-heading">What install costs</h2>
            <p className="section-sub">
              Installation is typically <strong>10–15% of cabinet order value</strong> for kitchens, <strong>8–12%</strong> for bath. Final figure is included in your quote.
            </p>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Timeline</span>
            <h2 className="section-heading">When install happens</h2>
            <p className="section-sub">
              Most installs are scheduled within 2–4 weeks of cabinet delivery. Crew of 2–3 installers. Most kitchens are installed in 5–10 working days.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Add install to your cabinet quote</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Installation is added to your existing cabinet quote — no separate form or process.
          </p>
          <Link href="/contact?type=install" className="btn-primary">Add Installation to Your Quote</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Installation", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
