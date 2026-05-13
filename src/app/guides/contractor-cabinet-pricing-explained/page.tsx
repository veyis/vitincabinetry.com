import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

const SLUG = "contractor-cabinet-pricing-explained";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
};

export default function ContractorPricingPage() {
  const pageUrl = `${site.url}/guides/${SLUG}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.excerpt,
    author: { "@id": `${site.url}#organization` },
    publisher: { "@id": `${site.url}#organization` },
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    mainEntityOfPage: pageUrl,
    url: pageUrl,
  };

  return (
    <main>
      <Navbar />

      <section className="subhero">
        <div className="container--narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contractor Cabinet Pricing Explained</span>
          </nav>
          <span className="eyebrow">Pricing Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            {meta.excerpt}
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            {/* TODO(content): Replace this placeholder with the full guide body.
                Voice rules (spec §9):
                - Plainspoken, not poetic
                - Numbers when possible
                - Transactional verbs (buy, pick up, order, quote, ship, deliver)
                - Trade-respectful — never describe Vitrin doing what trade does for themselves
                - No emojis, no exclamation marks
                Target length: 800–1500 words.
                After writing: update readingMinutes in src/lib/guides.ts to match (≈ word count ÷ 200).
            */}
            <p>This guide is being written. Check back soon — or <Link href="/contact" className="text-link">ask us directly</Link> in the meantime.</p>
          </div>
        </section>
      </article>

      {/* TODO(content): Add closing CTA section here. Pattern (see existing guides):
          <section className="section--surface">
            <div className="container--narrow" style={{ textAlign: "center" }}>
              <h2 className="section-heading">Get a quote — or come in.</h2>
              <p className="section-sub">...</p>
              <Link href="/contact" className="btn-primary">...</Link>
            </div>
          </section>
      */}

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Guides", url: `${site.url}/guides` },
              { name: meta.title, url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
