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
  title: "Aging-in-Place Cabinets — Stock & Custom · Vitrin Cabinetry",
  description:
    "Aging-in-place kitchen and bath cabinetry from Vitrin Cabinetry — lower counter heights, knee space, pull-out accessibility. Stock and custom options. Built in Easton, PA.",
  alternates: { canonical: "/cabinets/aging-in-place" },
};

const principles = [
  {
    title: "Drawers, not lower-door cabinets.",
    body: "Doors require bending and reaching into a dark interior. Drawers bring contents out to the user. Every aging-in-place kitchen we supply maximizes drawer banks in the base cabinets — full-extension, soft-close, operable one-handed.",
  },
  {
    title: "Roll-under sinks and counters.",
    body: "An ADA-style roll-under sink station provides seated counter access. Built with removable panels so the cabinetry reads as standard when not in use.",
  },
  {
    title: "Lever pulls, no knobs.",
    body: "Round knobs are difficult to grip with reduced hand strength. Lever pulls and D-pulls operate for any hand. Standard spec on every aging-in-place order.",
  },
  {
    title: "Layered lighting.",
    body: "Aging eyes require 3–4x the light of younger eyes. Layered lighting — overhead, under-cabinet, in-cabinet, toe-kick — provides generous workspace illumination without harsh glare.",
  },
  {
    title: "Lower counter heights.",
    body: "Standard 36-inch counter heights are tiring for extended standing. We supply sections at seated-task height (30 inches) or build adjustable-height counters for primary work zones.",
  },
  {
    title: "Pull-out shelves, not deep cabinets.",
    body: "Pantry shelves on full-extension hardware bring contents into view on every open. Nothing buried, nothing forgotten.",
  },
];

const bathPrinciples = [
  {
    title: "Curbless shower coordination + vanity heights.",
    body: "Vanity cabinetry sized and positioned for curbless shower entries, with toe-kick clearance for shower chairs and walking aids.",
  },
  {
    title: "Knee space at the vanity.",
    body: "Open knee space below the sink for seated use, with concealed plumbing behind a removable panel so the cabinetry reads as standard.",
  },
  {
    title: "Grab bar–ready blocking.",
    body: "We coordinate with tile and framing trades to block walls for grab bars now — even if they are not installed yet — so adding them later is a 20-minute job rather than a rebuild.",
  },
];

export default function Page() {
  const pageUrl = `${site.url}/cabinets/aging-in-place`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/minimalist-white-oak-custom-kitchen-cabinetry.png"
          alt="Aging-in-place accessible cabinetry by Vitrin Cabinetry"
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
            <span aria-current="page" style={{ color: "#fff" }}>Aging in Place</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Aging in Place Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Cabinets built for accessibility.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Lower counter heights. Knee space at sinks. Pull-out drawers in place of shelves. Tile-edge hardware. Stock and custom options.
          </p>
        </div>
      </section>

      {/* Two-tier cards */}
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h2 className="card__title">Stock aging-in-place cabinets</h2>
              <p className="card__desc">Standard-size vanity bases and pull-out drawer modules for retrofits and accessibility upgrades.</p>
              <div className="card__more">Browse Vitrin Stock →</div>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h2 className="card__title">Custom aging-in-place cabinets</h2>
              <p className="card__desc">Custom-built kitchens and baths specified for accessibility — knee space, raised dishwashers, lowered counter zones, easy-grip hardware.</p>
              <div className="card__more">Order a Vitrin Signature aging-in-place →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why this matters — ported/reframed from /services/aging-in-place, supplier tone */}
      <section>
        <div className="container--narrow prose">
          <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>What accessibility cabinetry actually means</h2>
          <p>
            The standard kitchen is built around an assumed user: 5&apos;6&quot;–6&apos;0&quot; tall, full hand strength, full balance, good vision. That assumption holds for most of life. It stops holding for almost everyone eventually.
          </p>
          <p>
            Aging-in-place cabinetry is not a hospital-room aesthetic. The finished kitchen reads as a well-built custom kitchen — same door styles, same finish options, same hardware tier as anything else we supply. The accessibility choices are in the layout, the drawer mix, the hardware function, and the lighting design. None of them read as &quot;accessibility features.&quot;
          </p>
          <p>
            Most of these choices are also better cabinetry regardless of age. A kitchen with drawer banks instead of lower-door cabinets is easier to use at any stage. Lever pulls outperform round knobs every time. Layered lighting is just good lighting. The accessibility-driven spec tends to be the better spec.
          </p>
        </div>
      </section>

      {/* Kitchen principles — ported from /services/aging-in-place */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Kitchen Specifications</span>
            <h2 className="section-heading">Six choices that change daily usability.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {principles.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bath principles — ported from /services/aging-in-place */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Bath Specifications</span>
            <h2 className="section-heading">Three more in the bathroom.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {bathPrinciples.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConstructionSpecs />

      <section className="section--surface">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Talk to us about accessibility</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Two options, one shop. We&apos;ll help you choose the right tier.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=aging-in-place" className="btn-primary">Get an Aging-in-Place Quote</Link>
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
              { name: "Aging in Place", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Aging-in-Place Cabinet Supply",
              description: "Accessible cabinetry for kitchens and baths — lower counters, knee space, pull-out drawers. Stock and custom options from Vitrin Cabinetry, Easton, PA.",
              url: pageUrl,
              serviceType: "Custom Cabinetry Supply",
            })
          ),
        }}
      />
    </main>
  );
}
