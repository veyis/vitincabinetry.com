import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

const PAGE_TITLE = "Custom Bathroom Vanities — Bench-Built in Quakertown, PA";
const PAGE_DESC =
  "Custom bathroom vanities designed, built, and installed by Vitrin Cabinetery. Floating, freestanding, single, double — built for moisture and made for your space.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/services/bathroom-vanities" },
  ...shareMetadata("/services/bathroom-vanities", PAGE_TITLE, PAGE_DESC),
};

const types = [
  { title: "Single vanity", desc: "Standard 30–48\" widths or anything custom. Drawer-bank or door-bank configurations." },
  { title: "Double vanity", desc: "Symmetrical or asymmetrical. Integrated his-and-hers storage and mid-counter mirror walls." },
  { title: "Floating vanity", desc: "Wall-mounted, contemporary. Concealed LED toe-kick lighting available." },
  { title: "Powder-room vanity", desc: "Small footprint, statement piece. Often where homeowners experiment with bolder finishes." },
];

const features = [
  "Moisture-resistant, marine-grade plywood box construction",
  "Solid-wood drawer boxes with dovetail joinery",
  "Sealed and lacquered finishes designed for steam and humidity",
  "Quartz or natural-stone tops, fabricated locally",
  "Blum or Hettich soft-close hardware",
  "Integrated outlet pop-ups and concealed plumbing where possible",
];

export default function BathroomVanitiesPage() {
  const pageUrl = `${site.url}/services/bathroom-vanities`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/sage-inset-cabinet-door-brass-cup-pull-detail.png"
          alt="Hand-painted sage inset cabinet door with solid unlacquered brass cup pull — custom cabinetry detail by Vitrin Cabinetery"
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
            <span aria-current="page" style={{ color: "#fff" }}>Custom Bathroom Vanities</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Bathroom Vanities</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            A vanity built for moisture — and for your space.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Most stock vanities are sized for a generic bathroom. Yours isn&apos;t generic. We build to your wall, your plumbing, and your routine — out of materials and finishes that survive twenty years of daily steam.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div className="img-placeholder" style={{ minHeight: "440px" }} role="img" aria-label="Custom bathroom vanity — photo coming soon">
              Custom bath vanity — photo coming soon
            </div>
            <div>
              <span className="eyebrow">What You Get</span>
              <h2 className="section-heading">Built like our kitchens — designed for a wetter room.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  We build vanities the same way we build kitchens, with one change: every material choice gets re-evaluated for moisture. Plywood selection, drawer-box joinery, finish chemistry, hardware plating — all picked specifically for the bathroom environment.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1.25rem" }}>
                {features.map((f) => (
                  <li key={f} style={{ marginBottom: "0.6rem" }}>
                    <span style={{ color: "var(--primary)", marginRight: "0.5rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Vanity Types</span>
            <h2 className="section-heading">Four common configurations — anything you ask for from there.</h2>
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

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Designing a bath remodel?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Vanities are usually one piece of a bigger project. We design the cabinetry and coordinate with your tile, fixture, and counter trades.
          </p>
          <Link href="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Bathroom Vanities", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Bathroom Vanities",
              description:
                "Custom bathroom vanities designed, built, and installed in Quakertown, PA. Moisture-grade materials, dovetail drawers, soft-close hardware.",
              url: pageUrl,
              serviceType: "Custom Bathroom Vanities",
            })
          ),
        }}
      />
    </main>
  );
}
