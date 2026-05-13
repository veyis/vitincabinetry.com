import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About — A Custom Cabinetry Shop in Quakertown, PA",
  description:
    "Vitrin Cabinetery is a Quakertown, PA cabinet shop that builds and supplies custom kitchens and baths from our own bench. Meet the team and the shop.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const pageUrl = `${site.url}/about`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
          alt="Master cabinetmaker hand-planing solid white oak at the Vitrin Cabinetery workshop in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>About</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>About Vitrin</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            A workshop. Not a showroom for someone else&apos;s cabinets.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Vitrin Cabinetery is a small, hands-on cabinet shop in Quakertown, PA. We build every cabinet at our bench and deliver finished work our crew installs. No franchise. No catalog. No outsourcing.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow prose">
          <h3>Why we exist</h3>
          <p>
            The cabinetry buyer in Bucks County and the Lehigh Valley has two real options today: a national franchise selling catalog product with subcontracted installers, or a legacy luxury shop a 25-minute drive away with a six-month waitlist. Vitrin is the third option neither one offers — a local custom shop, honest pricing, real craft, sane timelines.
          </p>

          <h3>The shop</h3>
          <p>
            Our workshop is in Quakertown. It is where every Vitrin cabinet is built. Inside, you&apos;ll find a CNC for joinery accuracy, a hand-bench for the parts a machine should never touch, a dust-controlled finishing room, and racks of solid hardwood waiting to become someone&apos;s kitchen. We invite every prospective client to walk through it. What you see is what builds your project.
          </p>

          <h3>The team</h3>
          <p>
            Vitrin is intentionally small. The same person who draws your cabinet layout helps measure the space, watches every piece go through the bench, and is present the day it goes in. One shop, a handful of people — sometimes the same person filling more than one role. That is the entire point. There is nobody for accountability to land on but us.
          </p>

          <h3>What we believe</h3>
          <ul>
            <li><strong>Custom should mean custom.</strong> Not 50 stock colors. Real bench-built cabinets, drawn to your dimensions, finished how you want them.</li>
            <li><strong>Pricing should be transparent.</strong> Line-item proposals. Tiered ranges published on the website. No mystery-shopper games.</li>
            <li><strong>Installers should be the builders.</strong> The same hands. Every time.</li>
            <li><strong>Timelines should be honest.</strong> Four to eight weeks in the shop. One to two weeks on site. We tell you what we know and we update you weekly.</li>
            <li><strong>The warranty should be the team&apos;s, not a manufacturer&apos;s.</strong> Our lifetime cabinetry warranty stands as long as you own the home.</li>
          </ul>

          <h3>Where we work</h3>
          <p>
            We install across {site.areaServed.slice(0, 8).map((t) => t.replace(", PA", "")).join(", ")} and the rest of upper Bucks and the Lehigh Valley. Our shop is in Quakertown — most clients live within a 25-minute drive of it.
          </p>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Come meet us at the shop.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Most decisions feel different in person. We&apos;d rather show you the bench, the materials, and the work in progress than send another glossy brochure.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Book a Visit</Link>
            <Link href="/process" className="btn-secondary">See the Process</Link>
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
              { name: "About", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
