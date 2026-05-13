import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, cabinetStoreSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Visit the Vitrin Showroom — Quakertown, PA",
  description:
    "Vitrin Cabinetery's showroom in Quakertown, PA. Sit at the materials bench, browse stock cabinets ready to take home, and start a custom kitchen — all in one place.",
  alternates: { canonical: "/showroom" },
};

const expectations = [
  { title: "Stock cabinets on display", body: "See the full Vitrin Stock lineup — door styles, finishes, and finished cabinets you can take home this week." },
  { title: "Materials bench", body: "Sit down with samples — wood species, paint and stain swatches, hardware, counter chips." },
  { title: "Dedicated rep on hand", body: "A real person who knows the inventory, the lead times, and the trade-pricing tiers." },
  { title: "No pressure visits", body: "Walk through, look, ask questions, leave. Or talk pricing and place an order. Whichever you came for." },
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
            Quakertown, PA. Stock cabinets on the floor, materials bench, dedicated rep. The place to start, whether you came for one vanity or a full custom kitchen.
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
            Our Quakertown showroom is opening soon. Until the address is final, book a visit by phone or email — we&apos;ll confirm the exact location and time.
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
    </main>
  );
}
