import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd, videoObjectJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Workshop Tour — Where Vitrin Signature Is Built in Quakertown, PA",
  description:
    "Walk through the Vitrin Cabinetry workshop in Quakertown, PA. See where every kitchen is designed, built, and finished by hand before it lands in your home.",
  alternates: { canonical: "/shop-tour" },
};

const stations = [
  {
    title: "Drafting bench",
    body:
      "Every project begins here — full-scale layouts, elevation drawings, and the materials list. What gets drawn here is what gets built downstairs.",
  },
  {
    title: "CNC + joinery",
    body:
      "Our CNC handles dado joinery and precise panel cuts to a few thousandths of an inch — the part where a machine outperforms a human hand.",
  },
  {
    title: "Hand bench",
    body:
      "Drawer dovetails, edge banding by hand, scribe work, the small joinery details that decide whether a cabinet feels custom or catalog.",
  },
  {
    title: "Finishing room",
    body:
      "A dust-controlled spray booth and a separate drying rack. Paint and stain go on cabinets that are sanded, sealed, and prepped — never sprayed in a dusty corner.",
  },
  {
    title: "Materials library",
    body:
      "Where you pick what your kitchen will look like. Real samples, full-size door panels, paint chips, counter slabs, and hardware to hold in your hand.",
  },
  {
    title: "Staging & QC",
    body:
      "Every project is fully assembled and inspected in the shop before it leaves. We do the punch list here, not at your house.",
  },
];

export default function ShopTourPage() {
  const pageUrl = `${site.url}/shop-tour`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
          alt="Master cabinetmaker at the bench inside the Vitrin Cabinetry workshop in Quakertown, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Workshop Tour</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Workshop Tour</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Tour the Workshop — where Vitrin Signature is built.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Most kitchen shops keep the work floor off-limits. Ours is the same room where the work happens. You can stand at the bench where your cabinets will be assembled.
          </p>
        </div>
      </section>

      <div style={{ textAlign: "center", margin: "2rem auto", padding: "1rem", background: "var(--surface)", borderRadius: "6px", maxWidth: "640px" }}>
        Looking to visit the showroom instead? See <Link href="/showroom" className="text-link">Showroom →</Link>
      </div>

      <section>
        <div className="container">
          <div
            style={{
              marginBottom: "2.5rem",
              borderRadius: "12px",
              overflow: "hidden",
              maxWidth: "960px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "1px solid var(--border)",
              background: "#000",
            }}
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
              aria-label="Video tour of the Vitrin Cabinetry workshop in Quakertown, Pennsylvania"
              style={{ display: "block", width: "100%", height: "auto" }}
            >
              <source src="/videos/vitrin-cabinetry-shop-tour-workshop-quakertown.mp4" type="video/mp4" />
              Your browser does not support embedded video. You can still book an in-person shop tour below.
            </video>
          </div>

          <div className="section-center">
            <span className="eyebrow">Six Stations</span>
            <h2 className="section-heading">What you&apos;ll see when you walk through.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {stations.map((s) => (
              <div key={s.title} className="card">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Schedule a visit.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Shop tours are free and last about 30 minutes. We&apos;ll show you projects in progress, the materials library, and answer anything you want to ask about how a custom kitchen actually gets built.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "2rem" }}>
            {site.address.locality}, {site.address.region} · {site.phoneDisplay}
          </p>
          <Link href="/contact" className="btn-primary">Book a Shop Tour</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Workshop Tour", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            videoObjectJsonLd({
              name: "Vitrin Cabinetry workshop tour — Quakertown, PA",
              description:
                "Walk through the Vitrin Cabinetry workshop where Signature kitchens are designed, built, and finished before delivery.",
              thumbnailUrl: `${site.url}/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png`,
              contentUrl: `${site.url}/videos/vitrin-cabinetry-shop-tour-workshop-quakertown.mp4`,
              uploadDate: "2026-05-01",
            })
          ),
        }}
      />
    </main>
  );
}
