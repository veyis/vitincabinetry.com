import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const PAGE_TITLE = "Quartz, Granite & Porcelain Countertops — Easton, PA";
const PAGE_DESC =
  "Quartz, granite, and porcelain countertops templated, fabricated, and installed from Easton, PA. Paired with our cabinets or fitted to yours. Serving Bucks County and the Lehigh Valley.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/countertops" },
  ...shareMetadata("/countertops", PAGE_TITLE, PAGE_DESC, {
    imagePath: "/images/heros/calacatta-marble-kitchen-island-overhead.png",
    imageAlt: "Honed stone countertop on a custom kitchen island by Vitrin Cabinetry",
  }),
};

const materials = [
  {
    title: "Quartz",
    desc: "The workhorse of Bucks County kitchens. Non-porous, no sealing, consistent patterning — and the widest color range of the three. If you have kids, pets, or red wine in the house, quartz forgives more than anything else on this page.",
  },
  {
    title: "Granite",
    desc: "Natural stone, so no two slabs match — which is exactly why people choose it. Excellent heat resistance, and with modern sealers the old maintenance complaints are mostly history. You pick your actual slab before we cut it.",
  },
  {
    title: "Porcelain",
    desc: "The newest of the three and the one designers ask about most. Thin, extremely hard, UV-stable, and rated for outdoor kitchens. Large-format porcelain also makes a striking full-height backsplash cut from the same sheet.",
  },
];

const steps = [
  { name: "Material selection", text: "Sit at the materials bench in our Easton showroom with door samples and slab samples side by side — the way you'll actually see them in your kitchen." },
  { name: "Template after cabinets are set", text: "We template only after base cabinets are installed and level. Templating from drawings alone is how you end up with a seam over the dishwasher." },
  { name: "Fabrication", text: "Your tops are cut, polished, and edge-profiled to the template — cutouts for sink, cooktop, and faucet included." },
  { name: "Installation", text: "Set, seamed, and supported correctly, with plumbing reconnection coordinated so your kitchen is out of service for days, not weeks." },
];

const faqs = [
  {
    q: "How long does countertop installation take?",
    a: "From template to installed tops is typically one to two weeks. The install itself is usually a single day for a standard kitchen. If we're supplying your cabinets too, we sequence both so the gap between cabinet install and countertop install is as short as possible.",
  },
  {
    q: "Do you install countertops on cabinets you didn't build?",
    a: "Yes. Most of our countertop work goes on our own cabinetry, but we template and install on existing cabinets too — as long as the boxes are sound and level. If they aren't, we'll tell you before we cut stone, not after.",
  },
  {
    q: "Quartz vs. granite — which should I choose?",
    a: "Quartz for low maintenance and consistent color; granite for natural variation and heat resistance. In practice the decision usually comes down to the look you want next to your door style and floor — which is why we show slab samples next to cabinet doors at the showroom rather than in isolation.",
  },
  {
    q: "What affects countertop cost the most?",
    a: "Material tier first, then square footage, then details: edge profile, number of cutouts, seam count, and backsplash height. A straightforward quartz kitchen and an exotic-slab kitchen with a waterfall island can differ by thousands. We quote line-item, so you see exactly where the money goes.",
  },
  {
    q: "Do you do backsplashes as well?",
    a: "Yes — 4-inch matching splash, full-height stone or porcelain, or tile installed after the tops are in. If you're planning tile, we'll coordinate so the splash lands correctly against window trim and upper cabinets.",
  },
];

export default function Page() {
  const pageUrl = `${site.url}/countertops`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Honed stone countertop on a custom kitchen island built by Vitrin Cabinetry in Easton, PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Countertops</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Countertops</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Quartz, granite &amp; porcelain countertops — done in the right order.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "660px", margin: "0 auto", lineHeight: 1.6 }}>
            The countertop is the last big decision in a kitchen and the first thing everyone touches. We template after the cabinets are set, fabricate to the template, and install with the same crew accountability as our cabinetry — across Easton, Bethlehem, Allentown, and the greater Lehigh Valley.
          </p>
        </div>
      </section>

      {/* Why counters from a cabinet shop */}
      <section>
        <div className="container--narrow prose">
          <h2>Why buy countertops from a cabinet shop?</h2>
          <p>
            Because the most common countertop problems aren&apos;t stone problems — they&apos;re sequencing problems. Tops templated before the cabinets were level. A seam landing in the worst possible spot because nobody looked at the cabinet layout. An overhang that doesn&apos;t clear the drawer bank. When the same shop is responsible for the boxes and the tops, those problems get caught on paper instead of in your kitchen.
          </p>
          <p>
            We supply countertops two ways: paired with a <Link href="/cabinets/custom">Vitrin Signature</Link> or <Link href="/cabinets/stock">Vitrin Stock</Link> cabinet order on one schedule, or as a standalone replacement on cabinets you already own. Either way, you pick the material at our Easton showroom next to real door samples — not from a laminate chip under fluorescent light.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Materials</span>
            <h2 className="section-heading">Three materials cover almost every kitchen.</h2>
            <p className="section-sub">
              We&apos;ll give you the honest trade-offs of each — including the ones the slab yard won&apos;t mention.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {materials.map((m) => (
              <div key={m.title} className="card">
                <h3 className="card__title">{m.title}</h3>
                <p className="card__desc">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="section-sub" style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Want quartzite, marble, or butcher block instead? We source those on request for custom projects. Still weighing materials? Read the full comparison: <Link href="/guides/quartz-vs-granite-vs-porcelain-countertops">quartz vs. granite vs. porcelain</Link>.
          </p>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How It Works</span>
              <h2 className="section-heading">Template, fabricate, install — in that order, every time.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  A countertop is only as good as its template. That&apos;s why ours happen on site, after cabinets are installed and shimmed level — and why we won&apos;t quote a firm seam layout until we&apos;ve seen the room.
                </p>
              </div>
            </div>
            <div>
              <ol role="list" aria-label="Countertop installation steps" style={{ listStyle: "none", padding: 0 }}>
                {steps.map((s, i) => (
                  <li
                    key={s.name}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "0.85rem 0",
                      borderTop: i === 0 ? "1px solid var(--border)" : "none",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-serif)", color: "var(--primary)", fontSize: "1.1rem", width: "1.5rem", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong style={{ color: "var(--text)" }}>{s.name}.</strong>{" "}
                      <span style={{ color: "var(--text-secondary)" }}>{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Countertop FAQs</span>
            <h2 className="section-heading">What Bucks County homeowners ask us.</h2>
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
          <h2 className="section-heading">Pick your slab next to your door style.</h2>
          <p style={{ fontSize: "1.05rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Visit the Easton showroom, or send us your kitchen dimensions for a countertop quote — with or without cabinets.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=countertops" className="btn-primary">Get a Countertop Quote</Link>
            <Link href="/showroom" className="btn-secondary">Visit the Showroom</Link>
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
              { name: "Countertops", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Countertop Fabrication & Installation",
              description:
                "Quartz, granite, and porcelain countertops templated, fabricated, and installed by Vitrin Cabinetry in Easton, PA — with cabinets or standalone.",
              url: pageUrl,
              serviceType: "Countertop Installation",
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
