import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const SLUG = "inset-vs-full-overlay";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const comparisonRows = [
  { feature: "Construction", inset: "Door sits flush inside the cabinet frame opening", overlay: "Door sits on the face of the cabinet, covering the frame or box edge" },
  { feature: "Visible reveal", inset: "Frame visible around every door — the look people associate with \"furniture grade\"", overlay: "Frame minimally visible (face-frame) or hidden (frameless)" },
  { feature: "Construction tolerance", inset: "Very tight — every door must fit its opening perfectly. Wood movement matters.", overlay: "More forgiving — small variations are masked by the door overlap" },
  { feature: "Cost vs. flat-panel baseline", inset: "+10–15%", overlay: "Baseline" },
  { feature: "Visual character", inset: "Traditional, period-correct, formal. Reads as crafted furniture.", overlay: "Contemporary, clean, modern. Reads as flush cabinetry." },
  { feature: "Storage efficiency", inset: "Slightly less — frame steals ~1 inch per cabinet width", overlay: "More — frame steals less or none (frameless)" },
  { feature: "Seasonal movement", inset: "Visible if the wood moves with humidity — gaps may open in winter", overlay: "Invisible — door overlap masks any movement" },
  { feature: "Best for", inset: "Older homes, traditional kitchens, period-correct work", overlay: "Newer homes, modern kitchens, frameless European-style designs" },
];

const faqs = [
  {
    q: "Which is more expensive?",
    a: "Inset is roughly 10–15% more than full-overlay on the same kitchen, because of the construction tolerance required and the additional hand-fitting time. On a $60k kitchen, that's a $6k–$9k delta.",
  },
  {
    q: "Does inset cabinetry have problems in a humid climate?",
    a: "It can. In a place like Bucks County with seasonal humidity swings, inset doors will move a few thousandths of an inch between summer and winter — sometimes enough to create a small visible gap. A good shop builds for that movement (selecting wood, sealing correctly, allowing the right tolerance). A bad shop ignores it and you end up with doors that stick or gap.",
  },
  {
    q: "Can I mix inset and full-overlay in the same kitchen?",
    a: "It's done — sometimes inset for the perimeter and full-overlay for the island, or vice versa. We don't usually recommend it because the visual mismatch fights itself. Pick one for the whole room.",
  },
  {
    q: "What about beaded inset?",
    a: "Beaded inset adds a small decorative bead around the door opening. It's a more period-correct, more formal look — almost always seen in traditional kitchens. Adds another ~5% to inset pricing.",
  },
  {
    q: "Is full-overlay the same as frameless?",
    a: "No. Full-overlay covers most of the face frame but the frame is still there underneath. Frameless construction (also called European) eliminates the face frame entirely and screws the door directly to the cabinet box. Frameless gives you the maximum storage and the cleanest modern look. We build both.",
  },
];

export default function InsetVsFullOverlayPage() {
  const pageUrl = `${site.url}/guides/${SLUG}`;

  const articleSchema = articleJsonLd({
    headline: meta.title,
    description: meta.excerpt,
    url: pageUrl,
    datePublished: meta.datePublished,
  });
  const faqSchema = faqPageJsonLd(faqs);

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
            <span aria-current="page">Inset vs. Full-Overlay</span>
          </nav>
          <span className="eyebrow">Materials Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            One of the few cabinetry decisions where the visual difference is dramatic and the cost gap is real. Here&apos;s how to pick the right one for your house.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The 30-second answer</h2>
            <p>
              <strong>Inset</strong> doors sit flush inside the cabinet frame. The frame is visible around every door. The look is traditional, crafted, formal — what most people mean when they say &quot;furniture-grade cabinetry.&quot; It costs 10–15% more than full-overlay because the construction tolerance is much tighter.
            </p>
            <p>
              <strong>Full-overlay</strong> doors sit on the face of the cabinet, covering the frame. The look is clean, contemporary, modern. The frame mostly disappears behind the doors. Cost is the baseline; storage is slightly better; seasonal wood movement is invisible.
            </p>
            <p>
              <strong>Frameless</strong> (sometimes called European) is full-overlay with the frame removed entirely. Maximum storage. Cleanest modern look. Same baseline cost as full-overlay.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>Side-by-side comparison</h2>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Feature</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Inset</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Full-Overlay</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr key={r.feature} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.feature}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.inset}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.overlay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>When inset is the right answer</h2>
            <ul>
              <li>Older home (pre-1970) where period-correct character matters.</li>
              <li>Traditional or transitional kitchen aesthetic.</li>
              <li>You want the cabinetry to read as furniture, not as installed casework.</li>
              <li>You&apos;re willing to pay for the additional construction precision and accept that wood will move with the seasons.</li>
              <li>The kitchen will be painted or stained in a finish that emphasizes detail rather than minimizing it.</li>
            </ul>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>When full-overlay is the right answer</h2>
            <ul>
              <li>Newer home (1980s+) or contemporary aesthetic.</li>
              <li>Modern or transitional-modern kitchen.</li>
              <li>Maximum storage efficiency matters.</li>
              <li>You want the cabinetry to read as flush, quiet, architectural — not as furniture.</li>
              <li>Frameless modern with integrated handles is the look you&apos;re after.</li>
            </ul>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>A note on construction quality</h2>
            <p>
              Inset construction punishes a bad shop. Because every door must fit a precise opening, any sloppiness in the box build shows up immediately as a misaligned door or an uneven reveal. If a shop is selling cheap inset, the corners are almost certainly being cut somewhere — either in the wood selection, the joinery, or the finishing prep.
            </p>
            <p>
              Full-overlay forgives more. Small variations get hidden by the door overlap. This is part of why full-overlay is the standard for catalog cabinet lines — the manufacturing process can tolerate the variance.
            </p>
            <p>
              Real-world rule: a great shop builds either style well. A mediocre shop only does full-overlay convincingly. Ask to see a year-old inset job before you sign for one.
            </p>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>FAQs</h2>
          </div>

          <div className="container--narrow">
            <div className="faq-list">
              {faqs.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Want to see both in person?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Every showroom visit includes time at the shop materials bench — full-size inset and full-overlay door samples, side by side. Decisions feel different in person.
          </p>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </div>
      </section>

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </main>
  );
}
