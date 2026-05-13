import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, howToJsonLd, serviceSchema, toJsonLd } from "@/lib/schema";

const tradeJoinSteps = [
  {
    title: "Apply",
    body: "Use the form at the bottom of this page. Tell us your firm, the kinds of projects you do, and a sample portfolio link.",
  },
  {
    title: "Intro call + shop visit",
    body: "30 minutes on the phone or in our Quakertown shop. We learn how you work, you confirm we're the right partner.",
  },
  {
    title: "Approved + first project",
    body: "Onboarding packet (price list, sample kit, materials library, design checklist). Most partners send their first project within 30 days.",
  },
] as const;

const PAGE_TITLE = "Trade Program — For Designers, Architects, and Builders";
const PAGE_DESC =
  "Vitrin Cabinetery's Trade Program: trade pricing, fast-turn quoting, dedicated rep, and a shared portfolio for interior designers, architects, and general contractors in Bucks County and the Lehigh Valley.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/trade" },
  ...shareMetadata("/trade", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png",
    imageAlt: "Pennsylvania stone farmhouse custom inset Shaker kitchen built by Vitrin Cabinetery for trade clients",
  }),
};

const benefits = [
  {
    title: "Trade pricing",
    desc: "Standing 15–20% off published list on every project, with additional terms on multi-unit and new-construction orders.",
  },
  {
    title: "One dedicated rep",
    desc: "A single point of contact who learns your style, your timeline expectations, and your typical project shape. No re-explaining yourself project to project.",
  },
  {
    title: "Fast-turn quoting",
    desc: "Most preliminary quotes turned around in 5 business days. Final fabrication drawings within 2 weeks of design lock.",
  },
  {
    title: "Photo-realistic renderings",
    desc: "Every project includes 3D renderings you can drop straight into your client presentations — no extra fee, no extra round-trip.",
  },
  {
    title: "Co-marketing rights",
    desc: "Finished projects are credited to you in our portfolio, with reciprocal links and high-resolution photography you can use in yours.",
  },
  {
    title: "Honest scheduling",
    desc: "We tell you the truth about lead times — 4 to 8 weeks in the shop — and we give weekly progress updates so you can manage your own client.",
  },
];

const fits = [
  {
    title: "Interior designers",
    desc: "Kitchens, baths, libraries, mudrooms, closets. We do the cabinetry, you keep the design fee and the client relationship.",
  },
  {
    title: "Architects",
    desc: "Spec-level millwork and bespoke casework for both residential and small commercial. We can produce drawings to your standard.",
  },
  {
    title: "General contractors",
    desc: "Reliable lead times, single-shop accountability, in-house install. The cabinet sub that doesn't blow up your schedule.",
  },
  {
    title: "Builders & developers",
    desc: "Multi-unit pricing on new-construction kitchens, with flexible style packages for spec homes and full-custom for buyers-in-tow.",
  },
];

export default function TradePage() {
  const pageUrl = `${site.url}/trade`;

  const tradeServiceLd = serviceSchema({
    name: "Trade Program — cabinetry for design and build partners",
    description: PAGE_DESC,
    url: pageUrl,
    serviceType: "B2B Cabinetry Partnership",
  });

  const tradeHowToLd = howToJsonLd({
    name: "How to join the Vitrin Cabinetery Trade Program",
    description:
      "Three steps to apply and onboard for interior designers, architects, builders, and GCs partnering with Vitrin for bench-built cabinetry in Bucks County and the Lehigh Valley.",
    url: `${pageUrl}#onboarding`,
    steps: tradeJoinSteps.map((s) => ({ name: s.title, text: s.body })),
  });

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Pennsylvania stone farmhouse custom inset Shaker kitchen built by Vitrin Cabinetery for trade clients"
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
            <span aria-current="page" style={{ color: "#fff" }}>Trade Program</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Trade Program</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Custom cabinetry, behind your name.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Vitrin partners with interior designers, architects, GCs, and builders across Bucks County and the Lehigh Valley. You bring the client and the vision. We build the cabinetry — and stay invisible at the consumer level if that&apos;s how you want it.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What You Get</span>
            <h2 className="section-heading">A real trade partner, not just a discount code.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <h3 className="card__title">{b.title}</h3>
                <p className="card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Who It&apos;s For</span>
            <h2 className="section-heading">Built for four kinds of partner.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {fits.map((f) => (
              <div key={f.title} className="card">
                <h3 className="card__title">{f.title}</h3>
                <p className="card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="onboarding">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">How To Join</span>
            <h2 className="section-heading">Three steps. About a week.</h2>
          </div>

          <ol style={{ listStyle: "none", padding: 0 }}>
            {tradeJoinSteps.map((s, i) => (
              <li key={s.title} className="step">
                <div className="step__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="step__body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Apply now.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Tell us about your firm and one project that&apos;s in front of you. We respond within two business days.
          </p>
          <Link
            href="/contact?type=trade"
            className="btn-primary"
            style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}
          >
            Apply to the Trade Program
          </Link>
          <div style={{ marginTop: "1.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Or email{" "}
            <a className="text-link" href={`mailto:${site.email}?subject=Trade%20Program%20Inquiry`}>
              {site.email}
            </a>
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
              { name: "Trade Program", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(tradeServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(tradeHowToLd) }}
      />
    </main>
  );
}
