import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const PAGE_TITLE = "Custom Closets — Designed in 3D, Built in Easton, PA";
const PAGE_DESC =
  "Custom closets designed in 3D and bench-built from plywood in Easton, PA — walk-ins, reach-ins, pantries, and mudrooms for Bucks County and Lehigh Valley homes.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/closets" },
  ...shareMetadata("/closets", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/sage-inset-cabinet-door-brass-cup-pull-detail.png",
    imageAlt: "Bench-built cabinetry detail by Vitrin Cabinetry — the same construction used in our custom closets",
  }),
};

const closetTypes = [
  {
    title: "Walk-in closets",
    desc: "Double-hang runs, drawer banks, shoe walls, an island if the room allows — drawn in 3D around your actual wardrobe, not a template.",
  },
  {
    title: "Reach-in closets",
    desc: "The most underused space in most bedrooms. A properly designed reach-in — double hang plus shelving — often doubles usable capacity without moving a wall.",
  },
  {
    title: "Pantries",
    desc: "Roll-out trays, appliance garages, deep bins for the Costco run. Built with the same carcass construction as our kitchen cabinets, because it is a kitchen cabinet.",
  },
  {
    title: "Mudrooms & entry storage",
    desc: "Lockers, bench seats, cubbies, and hooks sized to your actual family. The Bucks County four-seasons problem — boots, backpacks, sports gear — solved at the door.",
  },
];

const faqs = [
  {
    q: "What makes a Vitrin closet different from a franchise closet system?",
    a: "Materials and fit. Most closet franchises sell 5/8-inch melamine panels in fixed increments, drilled at a factory somewhere else. We build closets the way we build kitchen cabinets: plywood construction, real drawer boxes with soft-close hardware, scribed to your walls — which in an older Bucks County home are rarely straight. You also deal with the people who build it, not a sales rep working on commission.",
  },
  {
    q: "Do you really design the closet in 3D before building?",
    a: "Yes. Every custom closet starts with measurements of your space and an inventory conversation — how much double-hang, long-hang, folded storage, and shoes you actually own. You review a 3D rendering and approve the layout before anything gets cut.",
  },
  {
    q: "How long does a custom closet take?",
    a: "Design takes a week or two depending on revisions. Build time at our Easton bench is typically two to four weeks, and installation is usually a single day for a reach-in or pantry, one to two days for a large walk-in.",
  },
  {
    q: "Is a custom closet worth it for a reach-in?",
    a: "Usually, yes — reach-ins are where the default builder-grade single rod wastes the most space. A drawer bank and a double-hang section can eliminate the need for a dresser in the room, which often matters more in smaller bedrooms than in the primary suite.",
  },
  {
    q: "Painted or wood-tone finishes?",
    a: "Both. Painted closets get the same bath-rated lacquer we use on vanities. Wood-tone builds run from clear-sealed maple to stained white oak and walnut. Two-tone — painted carcass, wood drawer fronts — is the current favorite in walk-ins.",
  },
];

export default function Page() {
  const pageUrl = `${site.url}/closets`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/sage-inset-cabinet-door-brass-cup-pull-detail.png"
          alt="Bench-built cabinet door and drawer detail by Vitrin Cabinetry — the same construction used in custom closets"
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
            <span aria-current="page" style={{ color: "#fff" }}>Closets</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Custom Closets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Closets built like furniture, not filing systems.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "660px", margin: "0 auto", lineHeight: 1.6 }}>
            Walk-ins, reach-ins, pantries, and mudrooms — designed in 3D around what you actually own, bench-built from plywood at our Easton shop, and installed by the crew that built them. Serving Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section>
        <div className="container--narrow prose">
          <h2>A closet is a cabinet. So we build it like one.</h2>
          <p>
            Most &quot;custom&quot; closets are wire racks or factory-drilled melamine panels cut to standard increments. They work — until a drawer slide gives out or the panel edges start to chip, and you discover nobody local built it and nobody local fixes it.
          </p>
          <p>
            Vitrin closets come off the same bench as our <Link href="/cabinets/custom">custom kitchens</Link>: plywood carcasses, dovetail or doweled drawer boxes, soft-close hardware, finishes applied in a dust-controlled room. They&apos;re scribed to your walls during installation — which matters in the older housing stock around Easton, Bethlehem, and Allentown, where a &quot;flat&quot; wall can wander half an inch across a closet run. If you&apos;ve seen our <Link href="/cabinets/built-ins">built-ins</Link>, you already know the construction.
          </p>
        </div>
      </section>

      {/* Closet types */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What We Build</span>
            <h2 className="section-heading">Four spaces where custom storage earns its keep.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {closetTypes.map((c) => (
              <div key={c.title} className="card">
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container--narrow prose">
          <h2>How a Vitrin closet comes together.</h2>
          <p>
            It starts with an inventory conversation, not a catalog. How much double-hang versus long-hang do you own? Do shoes live here or at the door? Is the goal to eliminate a dresser? From there we measure the space, draw the closet in 3D, and revise until the layout is right. You approve the rendering before anything is cut. Build time at the bench is two to four weeks; installation is usually a day.
          </p>
          <p>
            Building a new primary suite or renovating? Closets fold neatly into a larger <Link href="/remodeling">remodeling project</Link> — one design pass, one schedule, one crew.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Closet FAQs</span>
            <h2 className="section-heading">Before you call a franchise, read this.</h2>
          </div>
          <div>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item" style={{ borderBottom: "1px solid var(--border)", padding: "1rem 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--text)", cursor: "pointer" }}>{f.q}</summary>
                <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Start with a 3D design of your closet.</h2>
          <p style={{ fontSize: "1.05rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Send us the closet dimensions and a photo — we&apos;ll talk through the layout and quote it line by line.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=closets" className="btn-primary">Get a Closet Quote</Link>
            <Link href="/shop-tour" className="btn-secondary">See the Workshop</Link>
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
              { name: "Closets", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Closet Design & Installation",
              description:
                "Custom walk-in closets, reach-ins, pantries, and mudroom storage designed in 3D and bench-built by Vitrin Cabinetry in Easton, PA.",
              url: pageUrl,
              serviceType: "Custom Closet Design",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqPageJsonLd(faqs)) }}
      />
    </main>
  );
}
