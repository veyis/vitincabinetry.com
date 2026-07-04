import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListJsonLd, toJsonLd } from "@/lib/schema";

const PAGE_TITLE = "Guides — Kitchen Remodeling Resources by Vitrin Cabinetry";
const PAGE_DESC =
  "Honest, plain-language guides on custom cabinetry, kitchen remodeling, and the questions buyers in Bucks County actually ask. Pricing, comparisons, decisions.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/guides" },
  ...shareMetadata("/guides", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/calacatta-marble-kitchen-island-overhead.png",
    imageAlt: "Custom kitchen island with honed Calacatta marble countertop by Vitrin Cabinetry",
  }),
};

const categoryOrder: ReadonlyArray<typeof guides[number]["category"]> = ["Decision", "Pricing", "Materials", "Process"];

export default function GuidesPage() {
  const pageUrl = `${site.url}/guides`;
  const grouped = categoryOrder
    .map((cat) => ({ cat, items: guides.filter((g) => g.category === cat) }))
    .filter((g) => g.items.length > 0);

  const guidesListLd = itemListJsonLd({
    name: "Kitchen remodeling guides by Vitrin Cabinetry",
    description: PAGE_DESC,
    url: `${pageUrl}#guides`,
    items: guides.map((g) => ({
      name: g.title,
      description: g.excerpt,
      url: `${site.url}/guides/${g.slug}`,
    })),
  });

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Custom kitchen island with honed Calacatta marble countertop by Vitrin Cabinetry — design guide reference"
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
            <span aria-current="page" style={{ color: "#fff" }}>Guides</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Guides</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Plain-language answers to the questions buyers actually ask.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            No fluff, no &quot;contact us for pricing&quot; bait. These guides give you the information we&apos;d want if we were buying a kitchen instead of selling one.
          </p>
        </div>
      </section>

      <section id="guides">
        <div className="container--narrow">
          {grouped.map((group) => (
            <div key={group.cat} style={{ marginBottom: "3rem" }}>
              <div style={{ color: "var(--primary)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>
                {group.cat}
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {group.items.map((g) => (
                  <li key={g.slug} style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border)" }}>
                    <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                      <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "0.6rem" }}>{g.excerpt}</p>
                    <Link
                      href={`/guides/${g.slug}`}
                      style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}
                    >
                      Read Guide · {g.readingMinutes} min →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Guides", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(guidesListLd) }}
      />
    </main>
  );
}
