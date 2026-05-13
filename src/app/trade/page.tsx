import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trade Program — Cabinet Supply for Contractors, Builders & Designers",
  description:
    "Vitrin Cabinetery's Trade Program: standing trade pricing, fast quotes, dedicated rep, will-call pickup, and jobsite delivery for contractors, builders, designers, architects, and installers in Bucks County and the Lehigh Valley.",
  alternates: { canonical: "/trade" },
};

const benefits = [
  {
    title: "Standing trade pricing",
    desc: "Tiered by volume. Pricing sheet sent on first quote after approval. Additional terms on multi-unit and new-construction orders.",
  },
  {
    title: "One dedicated rep",
    desc: "Same person handles every order — knows your style, your timeline expectations, and your typical project shape.",
  },
  {
    title: "Fast quotes",
    desc: "Most preliminary quotes within 5 business days. Stock orders priced same-day.",
  },
  {
    title: "Honest lead times",
    desc: "Stock ships when promised. Signature: 4–8 weeks at our bench, with weekly progress updates.",
  },
  {
    title: "Co-marketing optional, never required",
    desc: "We'll credit you in our portfolio if you want it. We disappear at the consumer level if you don't.",
  },
  {
    title: "3D renderings on custom orders",
    desc: "Optional. Drop photo-realistic renderings into your client presentations on Signature projects.",
  },
];

const audiences = [
  {
    id: "contractors",
    title: "General contractors & remodelers",
    desc: "Stock pickup for fast jobs, custom for the kitchens you don't want to outsource. Account terms after first order.",
  },
  {
    id: "installers",
    title: "Kitchen & bath installers",
    desc: "Buy from us, install for your client. We don't compete with your install crew. Will-call or jobsite delivery.",
  },
  {
    id: "builders",
    title: "Builders & developers",
    desc: "Volume pricing on stock for spec homes; custom for buyers-in-tow. Multi-unit terms.",
  },
  {
    id: "designers",
    title: "Interior designers",
    desc: "Spec Vitrin on your projects. Trade pricing on both Stock and Signature. Renderings available on custom projects.",
  },
  {
    id: "architects",
    title: "Architects",
    desc: "Spec-grade casework drawings, residential and small commercial. We can produce drawings to your standard.",
  },
];

export default function TradePage() {
  const pageUrl = `${site.url}/trade`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Inset Shaker custom kitchen built by Vitrin Cabinetery for a trade client in Pennsylvania"
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
            <span aria-current="page" style={{ color: "#fff" }}>Trade Program</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Trade Program</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Your cabinet supplier in Quakertown.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Trade pricing on every cabinet we make. Stock cabinets ready for pickup. Custom kitchens built to your spec. For contractors, builders, designers, and installers across Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What You Get</span>
            <h2 className="section-heading">A real supply partner, not a discount code.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="card__title">{b.title}</h3>
                <p className="card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Who It&apos;s For</span>
            <h2 className="section-heading">Built for five kinds of partner.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {audiences.map((a) => (
              <div key={a.id} id={a.id} className="card">
                <h3 className="card__title">{a.title}</h3>
                <p className="card__desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">How Buying Works</span>
            <h2 className="section-heading">Two paths — first order, then every order after.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <div className="card">
              <h3 className="card__title">First time buying from us</h3>
              <ol style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                <li><strong>Apply</strong> — 2-minute form. Tell us your firm and the kinds of projects you do.</li>
                <li><strong>Get your pricing sheet</strong> — emailed within 2 business days.</li>
                <li><strong>Place your first order</strong> — stock ships the same week; custom enters the 4–8 wk queue.</li>
              </ol>
            </div>
            <div className="card">
              <h3 className="card__title">After your first order</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                <li>Stock orders by phone, email, or showroom walk-in. Quoted same-day.</li>
                <li>Custom orders go through your rep with drawings and specs.</li>
                <li>Account terms available after first paid order.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Delivery &amp; Pickup</span>
            <h2 className="section-heading">How cabinets get out the door</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Will-call pickup", desc: "At the Quakertown shop, by appointment." },
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

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Apply for trade pricing</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Tell us about your firm and one project that&apos;s in front of you. We respond within two business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=trade" className="btn-primary">Apply for Trade Pricing</Link>
            <a className="btn-secondary" href={`mailto:${site.email}?subject=Trade%20Project%20Quote`}>Email a Project for a Quote</a>
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
              { name: "Trade Program", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
