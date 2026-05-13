import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Custom Kitchens Built by Vitrin Cabinetery",
  description:
    "Selected custom kitchen and bath projects by Vitrin Cabinetery — bench-built at our Quakertown, PA shop. Browse by style and town.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const pageUrl = `${site.url}/portfolio`;

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/navy-blue-custom-kitchen-cabinets-twilight.png"
          alt="Custom navy blue kitchen with brass pendants at twilight, built by Vitrin Cabinetery in Bucks County PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Portfolio</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Portfolio</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Selected work, photographed and named.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Every project below was built by our team at the bench in Quakertown. Click through any of them for the story, the style, and the choices behind the work.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Want to commission something like this?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Every project starts with a 30-minute discovery call. Tell us what you&apos;re thinking and we&apos;ll tell you what&apos;s realistic for your space and budget tier.
          </p>
          <Link href="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Portfolio", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
