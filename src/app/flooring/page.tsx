import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const PAGE_TITLE = "Flooring Installation — LVP, Hardwood & Tile · Easton, PA";
const PAGE_DESC =
  "Luxury vinyl plank, hardwood, engineered hardwood, and tile flooring installed in Easton, PA and across Bucks County — sequenced correctly with your kitchen or bath remodel.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/flooring" },
  ...shareMetadata("/flooring", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png",
    imageAlt: "Wide-plank flooring in a Pennsylvania stone farmhouse kitchen by Vitrin Cabinetry",
  }),
};

const floorTypes = [
  {
    title: "Luxury vinyl plank (LVP)",
    desc: "100% waterproof, warm underfoot, and convincing enough that guests will ask if it's oak. The default recommendation for kitchens, baths, basements, and any house with kids or dogs.",
  },
  {
    title: "Hardwood",
    desc: "Solid oak, maple, or hickory — the floor that adds the most resale value in Bucks County and can be refinished for generations. Best in dining rooms, living spaces, and dry-side kitchens.",
  },
  {
    title: "Engineered hardwood",
    desc: "Real wood wear layer over a dimensionally stable core. Handles the seasonal movement of older Upper Bucks houses better than solid boards — and it's the right call over radiant heat or concrete.",
  },
  {
    title: "Tile",
    desc: "Porcelain and ceramic for baths, mudrooms, and entries. Correct substrate prep — flattening, decoupling membrane where the subfloor calls for it — is most of what separates a 20-year tile job from a 2-year one.",
  },
];

const faqs = [
  {
    q: "Should flooring go in before or after the cabinets?",
    a: "It depends on the floor. Hardwood and tile usually go in first, with cabinets set on top. Floating floors like most LVP should not be pinned under cabinets — they need to move, so cabinets go in first and the floor is cut to them. Because we supply both, we sequence this correctly instead of leaving two contractors to argue about it in your kitchen.",
  },
  {
    q: "What's the best flooring for a kitchen remodel?",
    a: "For most families: LVP for waterproof durability, or engineered hardwood if you want real wood with better moisture stability. Solid hardwood is beautiful but less forgiving of dishwasher leaks and dropped stock pots. We'll show you all three next to your cabinet door sample so you choose with your eyes, not a brochure.",
  },
  {
    q: "Can you match new flooring to existing floors in the rest of the house?",
    a: "Often, yes. With hardwood we can match species, plank width, and stain, then feather the transition. With LVP and engineered products we work from manufacturer lines wide enough to get close. Where a perfect match isn't realistic, we'll recommend a deliberate transition instead of a near-miss.",
  },
  {
    q: "How long does a flooring installation take?",
    a: "A typical room is one to three days. A whole first floor is usually under a week, plus acclimation time for wood products — hardwood needs to sit in your house several days before installation so it stabilizes at your home's humidity. We build that into the schedule instead of skipping it.",
  },
  {
    q: "Do older Lehigh Valley homes need special prep?",
    a: "Frequently. Upper Bucks housing stock ranges from 1800s stone farmhouses with uneven subfloors to post-war ranches with plywood that needs refastening. Skipping subfloor prep is the number-one cause of squeaks, cracked tile, and lifting planks — so we assess it during the estimate, not after demo day.",
  },
];

export default function Page() {
  const pageUrl = `${site.url}/flooring`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Wide-plank flooring and inset shaker cabinetry in a Pennsylvania stone farmhouse kitchen by Vitrin Cabinetry"
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
            <span aria-current="page" style={{ color: "#fff" }}>Flooring</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Flooring</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Flooring that&apos;s sequenced with the rest of the room.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "660px", margin: "0 auto", lineHeight: 1.6 }}>
            Luxury vinyl plank, hardwood, engineered hardwood, and tile — installed across Easton, Bethlehem, Allentown, and the greater Lehigh Valley. Most of our flooring goes in as part of a kitchen or bath remodel, which is exactly when install order and subfloor prep matter most.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section>
        <div className="container--narrow prose">
          <h2>Flooring from the shop that builds the cabinets.</h2>
          <p>
            The floor and the cabinets meet at a hundred points in a kitchen — toe kicks, appliance openings, transitions, thresholds. When one contractor installs the floor and another sets the cabinets, that seam is where the finger-pointing lives. We install both, so the sequencing question (floors first or cabinets first — the answer depends on the floor) gets decided once, on paper, by the people responsible for both outcomes.
          </p>
          <p>
            We also take flooring-only projects — a first floor of LVP, a hardwood dining room, a tile bath — anywhere in our <Link href="/custom-kitchen-cabinets/bucks-county">Bucks County service area</Link>. Wondering about install order? We wrote the full answer: <Link href="/guides/flooring-or-cabinets-first">floors or cabinets first?</Link>
          </p>
        </div>
      </section>

      {/* Floor types */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What We Install</span>
            <h2 className="section-heading">Four floors, honestly compared.</h2>
            <p className="section-sub">
              Every material below is one we&apos;d put in our own homes — the question is which one fits your room, your subfloor, and your household.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {floorTypes.map((f) => (
              <div key={f.title} className="card">
                <h3 className="card__title">{f.title}</h3>
                <p className="card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section>
        <div className="container--narrow prose">
          <h2>Upper Bucks floors have upper Bucks problems.</h2>
          <p>
            The housing across the Lehigh Valley isn&apos;t uniform, and neither are its subfloors. Easton and Bethlehem rowhomes from the early 1900s often hide narrow-strip pine or oak under decades of carpet. The postwar ranches and split-levels around Allentown and Palmer Township tend to have plywood subfloors that need refastening before anything goes on top — squeaks are the giveaway. And the older stone homes scattered from Forks to the Saucon Valley move with the seasons in ways that punish rigid flooring choices.
          </p>
          <p>
            None of this is a problem if it&apos;s diagnosed before installation. All of it is a problem after. Our estimates start with the subfloor, because that&apos;s where flooring jobs are actually won or lost.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Flooring FAQs</span>
            <h2 className="section-heading">The questions we answer every week.</h2>
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
          <h2 className="section-heading">Get a flooring estimate that starts with the subfloor.</h2>
          <p style={{ fontSize: "1.05rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Tell us the rooms and rough square footage — we&apos;ll walk the space, check what&apos;s underneath, and quote it line by line.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=flooring" className="btn-primary">Get a Flooring Quote</Link>
            <Link href="/remodeling" className="btn-secondary">Planning a full remodel?</Link>
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
              { name: "Flooring", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Flooring Installation",
              description:
                "Luxury vinyl plank, hardwood, engineered hardwood, and tile flooring installed by Vitrin Cabinetry in Easton, PA and across Bucks County.",
              url: pageUrl,
              serviceType: "Flooring Installation",
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
