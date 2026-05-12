import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio — Custom Kitchens Built by Vitrin Cabinetery",
  description:
    "Selected custom kitchen and bath projects by Vitrin Cabinetery — designed, built, and installed at our Quakertown, PA shop. Browse by style and town.",
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
            Every project below was designed, built, and installed by our team. Click through any of them for the story, the style, and the choices behind the work.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                style={{
                  display: "block",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  background: "#fff",
                }}
              >
                <div
                  className="img-placeholder"
                  style={{ minHeight: "260px", border: "none", borderRadius: 0, fontSize: "0.8rem" }}
                  role="img"
                  aria-label={`${p.title} — photo coming soon`}
                >
                  {p.title} — photo coming soon
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ color: "var(--primary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>
                    {p.style} · {p.town}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.55, fontSize: "0.95rem" }}>{p.summary}</p>
                  <div style={{ marginTop: "1rem", color: "var(--primary)", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                    View Project →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Want to commission something like this?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Every project starts with a 30-minute discovery call. Tell us what you&apos;re thinking and we&apos;ll tell you what&apos;s realistic for your space and budget tier.
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
              { name: "Portfolio", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
