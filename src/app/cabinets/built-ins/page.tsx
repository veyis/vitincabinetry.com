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
  title: "Built-Ins, Libraries & Mudrooms — Stock & Custom · Vitrin Cabinetery",
  description:
    "Custom built-ins, libraries, mudrooms, and home offices from Vitrin Cabinetery — built at our Quakertown bench. Plywood, dovetail drawers, Blum hardware.",
  alternates: { canonical: "/cabinets/built-ins" },
};

const rooms = [
  { title: "Entertainment walls", desc: "TV-centric living rooms with concealed media gear, integrated sound, and lighting. Floating or floor-anchored. Custom-built to your wall dimensions." },
  { title: "Libraries & studies", desc: "Built-in bookshelves and reading rooms. Adjustable shelving, ladder rails, and integrated desk surfaces. Stock modules for starter shelves; custom for full walls." },
  { title: "Home offices", desc: "Workstations and credenzas built for cable management, monitor mounts, and the storage a working office needs. Custom widths and configurations." },
  { title: "Mudrooms", desc: "Lockers, benches, hooks, drop zones. Sized for boots, jackets, backpacks. Stock locker modules or custom-built to your entry." },
  { title: "Custom pantries", desc: "Walk-in or reach-in. Adjustable shelving, drawer banks, pull-outs, integrated counter, and lighting. Custom-built to your pantry footprint." },
  { title: "Wet bars & coffee stations", desc: "Compact bars, butler's pantries, and coffee niches. Refrigeration, plumbing, and ice integration where needed. Custom builds only." },
];

export default function Page() {
  const pageUrl = `${site.url}/cabinets/built-ins`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
          alt="Custom built-in cabinetry by Vitrin Cabinetery in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Built-ins</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Built-In Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Built-ins for the rest of your house.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Libraries, mudrooms, home offices, entertainment walls, closets. Stock modules for small spaces; custom-built for whole walls.
          </p>
        </div>
      </section>

      {/* Two-tier cards */}
      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h2 className="card__title">Stock built-in cabinets</h2>
              <p className="card__desc">Smaller module units ready from the showroom — mudroom hooks, single library shelves, closet inserts.</p>
              <div className="card__more">Browse Vitrin Stock →</div>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h2 className="card__title">Custom built-in cabinets</h2>
              <p className="card__desc">Full walls, ceiling-height libraries, entertainment units built to your exact wall dimensions. Any style, any finish.</p>
              <div className="card__more">Order a Vitrin Signature built-in →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Use-case grid — ported from /services/living-room-units */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What We Supply</span>
            <h2 className="section-heading">Six common starting points — anything from there.</h2>
            <p className="section-sub">
              Each of these spaces benefits from cabinetry drawn to fit it. Stock works for smaller additions; custom is the answer for full-room builds.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {rooms.map((r) => (
              <div key={r.title} className="card">
                <h3 className="card__title">{r.title}</h3>
                <p className="card__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why custom beats stock for built-ins — ported from /services/living-room-units */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Stock vs. Custom for Built-ins</span>
              <h2 className="section-heading">The pieces stock cabinets can&apos;t reach.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  Stock cabinets are built for kitchens. Put one in a library, a mudroom, or under a sloped ceiling and the gaps appear — wrong proportions, wrong depths, awkward fillers, missed details.
                </p>
                <p>
                  Custom solves that in one step. The cabinet is drawn to the wall it lives on, the function it serves, and the room it shares. Vitrin Stock works for drop-in mudroom lockers, single shelving runs, and closet inserts. For full walls, start with Vitrin Signature.
                </p>
              </div>
            </div>
            <div>
              <span className="eyebrow">Style &amp; Finish Options</span>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>Any room style, any finish.</h2>
              <div className="prose">
                <p>
                  Built-ins carry the same door-style and finish options as our kitchen cabinets. Painted or stained, traditional or contemporary.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                {[
                  "Inset Shaker — most requested for libraries and studies",
                  "Flat panel — clean look for entertainment walls and offices",
                  "Open shelving — adjustable, solid-wood, no doors",
                  "Painted — full Benjamin Moore palette",
                  "Stained — white oak, walnut, cherry, maple",
                  "Two-tone — painted case, stained face or shelf",
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
          <h2 className="section-heading">Talk to us about your built-in</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Two options, one shop. We&apos;ll help you choose the right tier.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=built-ins" className="btn-primary">Get a Built-in Quote</Link>
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
              { name: "Built-ins", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Built-In Cabinet Supply",
              description: "Custom built-ins, libraries, mudrooms, home offices, and entertainment walls built by Vitrin Cabinetery in Quakertown, PA.",
              url: pageUrl,
              serviceType: "Custom Cabinetry Supply",
            })
          ),
        }}
      />
    </main>
  );
}
