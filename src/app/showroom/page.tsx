import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, cabinetStoreSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Visit the Vitrin Showroom — Easton, PA",
  description:
    "Vitrin Cabinetry's showroom in Easton, PA. Sit at the materials bench, browse stock cabinets ready to take home, and start a custom kitchen — all in one place.",
  alternates: { canonical: "/showroom" },
};

const expectations = [
  { title: "Stock cabinets on display", body: "See the full Vitrin Stock lineup — door styles, finishes, and finished cabinets you can take home this week." },
  { title: "Materials bench", body: "Sit down with samples — wood species, paint and stain swatches, hardware, counter chips." },
  { title: "Dedicated rep on hand", body: "A real person who knows the inventory, the lead times, and the trade-pricing tiers." },
  { title: "No pressure visits", body: "Walk through, look, ask questions, leave. Or talk pricing and place an order. Whichever you came for." },
];

// Visible Q&A, mirrored into FAQPage JSON-LD. Every answer restates a fact
// already published on this site or in src/lib/site.ts — no street address,
// no invented drive times, no hours the GBP has not confirmed.
const faqs = [
  {
    q: "Where is the Vitrin Cabinetry showroom?",
    a: `The showroom is in Easton, Pennsylvania. It is opening soon, and the exact street address is confirmed when you book your visit — call ${site.phoneDisplay} or email ${site.email} and we will send you the location and a time.`,
  },
  {
    q: "Can I visit the showroom before it officially opens?",
    a: `Yes. Visits are arranged by appointment while the address is being finalized. Call ${site.phoneDisplay} or email ${site.email}, tell us roughly what you are working on, and we will confirm a time and the exact location.`,
  },
  {
    q: "What can I see at the showroom?",
    a: "The full Vitrin Stock lineup — door styles, finishes, and finished cabinets — plus a materials bench where you can sit down with wood species, paint and stain swatches, hardware, and counter chips. A rep who knows the inventory, the lead times, and the trade-pricing tiers is on hand.",
  },
  {
    q: "Can I take cabinets home from the showroom?",
    a: "Vitrin Stock cabinets are held in inventory, so finished cabinets can be ready to take home the same week rather than ordered and waited on. Custom cabinetry is built to order — the showroom is where that order starts.",
  },
  {
    q: "Do you offer trade pricing for contractors and designers?",
    a: "Yes. Trade-pricing tiers are available and the showroom rep can walk you through them. The trade page explains how an account is set up.",
  },
  {
    q: "Do I have to visit the showroom to get a quote?",
    a: `No. You can start a quote by phone at ${site.phoneDisplay}, by email at ${site.email}, or through the contact form. The showroom helps most when you want to see finishes and door styles next to each other before deciding.`,
  },
];

export default function ShowroomPage() {
  const pageUrl = `${site.url}/showroom`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "50vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/navy-blue-custom-kitchen-cabinets-twilight.png"
          alt="Navy blue custom kitchen with white countertops and brass hardware in warm light"
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
            <span aria-current="page" style={{ color: "#fff" }}>Showroom</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Showroom</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Visit the Vitrin showroom.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Easton, PA. Stock cabinets on the floor, materials bench, dedicated rep. The place to start, whether you came for one vanity or a full custom kitchen.
          </p>
        </div>
      </section>

      {/* Answer-first block: the direct answer to "where is the Vitrin showroom",
          kept in static HTML so passage extraction and zero-JS crawlers read it
          without running the page. */}
      <section>
        <div className="container--narrow prose">
          <h2>Where is the Vitrin Cabinetry showroom?</h2>
          <p>
            Vitrin Cabinetry&apos;s showroom is in Easton, Pennsylvania. You can see the full Vitrin Stock lineup on the
            floor, sit at the materials bench with wood, paint, and countertop samples, and meet a rep who knows the
            inventory and the lead times. The showroom is opening soon, and the exact street address is confirmed when
            you book — call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> or email{" "}
            <a href={`mailto:${site.email}?subject=Showroom%20Visit`}>{site.email}</a> to arrange a visit.
          </p>
          <p>
            Vitrin serves Easton, Bethlehem, Allentown, and the wider Lehigh Valley and Bucks County. If you would
            rather see where the cabinetry is actually built, the <Link href="/shop-tour">workshop tour</Link> is the
            other half of the story.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What to expect</span>
            <h2 className="section-heading">A real showroom, not a sales pitch</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {expectations.map((e) => (
              <div key={e.title} className="card">
                <h3 className="card__title">{e.title}</h3>
                <p className="card__desc">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Plan your visit</span>
          <h2 className="section-heading">Address coming soon</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Our Easton showroom is opening soon. Until the address is final, book a visit by phone or email — we&apos;ll confirm the exact location and time.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${site.phone}`} className="btn-primary">
              Call {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}?subject=Showroom%20Visit`} className="btn-secondary">
              Email {site.email}
            </a>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            Prefer to see where the cabinets are built? <Link href="/shop-tour" className="text-link">Take the workshop tour →</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Showroom FAQs</span>
            <h2 className="section-heading">Before you drive over.</h2>
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

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Showroom", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(cabinetStoreSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(faqPageJsonLd(faqs)),
        }}
      />
    </main>
  );
}
