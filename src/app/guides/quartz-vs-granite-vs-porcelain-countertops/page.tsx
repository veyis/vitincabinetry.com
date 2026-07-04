import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const SLUG = "quartz-vs-granite-vs-porcelain-countertops";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const rows = [
  { feature: "What it is", quartz: "Engineered: ~90% ground quartz + resin binder", granite: "Natural stone, quarried and cut from a single slab", porcelain: "Kiln-fired ceramic slab, extremely dense and thin" },
  { feature: "Look", quartz: "Consistent, controlled patterning — what you see in the sample is what you get", granite: "Unique — no two slabs match; you pick your actual slab", porcelain: "Printed surface: convincing marble looks, large formats, book-matching" },
  { feature: "Sealing", quartz: "Never", granite: "Periodically (modern sealers last years, not months)", porcelain: "Never" },
  { feature: "Stains", quartz: "Highly resistant — non-porous", granite: "Resistant when sealed; porous when neglected", porcelain: "Highly resistant — non-porous" },
  { feature: "Heat", quartz: "Use a trivet — resin can scorch above ~300°F", granite: "Excellent — hot pans are fine", porcelain: "Excellent — rated for direct heat" },
  { feature: "Scratches & chips", quartz: "Very scratch-resistant; edges can chip on hard impact", granite: "Very hard; chips can usually be filled invisibly", porcelain: "Hardest surface — but a hard corner strike can crack it" },
  { feature: "Outdoors / UV", quartz: "No — resin yellows in sunlight", granite: "Yes", porcelain: "Yes — UV-stable, made for outdoor kitchens" },
  { feature: "Typical cost position", quartz: "Mid — wide range by brand and pattern", granite: "Mid — commodity colors low, exotic slabs high", porcelain: "Mid-high — material is moderate, fabrication is specialized" },
];

const faqs = [
  {
    q: "Which countertop is the most durable overall?",
    a: "For everyday kitchen life — spills, knives, kids, wine — quartz and porcelain are effectively tied, because neither is porous and neither needs sealing. Granite is a close third only because it depends on being sealed. For heat specifically, granite and porcelain beat quartz. There is no bad answer among the three; there's only the wrong answer for how your kitchen gets used.",
  },
  {
    q: "Is porcelain too new to trust?",
    a: "The material isn't new — Europe has used porcelain slabs for two decades. What's newer in the U.S. is fabrication experience: porcelain is thin and extremely hard, and it cuts differently than stone. The material almost never fails; inexperienced fabrication is what fails. Ask any shop quoting porcelain how many porcelain kitchens they've templated and installed.",
  },
  {
    q: "Do quartz countertops really scorch?",
    a: "They can. The quartz content handles heat fine, but the resin binder can discolor from a pan straight off the burner — and the mark is permanent. It's the one genuine weakness of an otherwise nearly indestructible surface. A trivet solves it entirely.",
  },
  {
    q: "What moves the price more — the material or the fabrication?",
    a: "Usually the details, not the slab. Edge profile, cutout count, seam count, backsplash height, and waterfall ends move the number more than most people expect. Two kitchens with the same quartz can be quoted thousands apart on fabrication scope alone — which is why a line-item quote matters more than the per-square-foot teaser number.",
  },
  {
    q: "When should the countertop be templated?",
    a: "After the base cabinets are installed and level — never from drawings alone. Templating from plans is how seams land over dishwashers and overhangs miss drawer clearances. Template-to-install is typically one to two weeks; plan the remodel schedule around that gap.",
  },
];

export default function QuartzVsGraniteVsPorcelainPage() {
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
            <span aria-current="page">Quartz vs. Granite vs. Porcelain</span>
          </nav>
          <span className="eyebrow">Materials Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            Three good materials, three different personalities. Here&apos;s the comparison we walk through at the materials bench — including the weaknesses each one&apos;s marketing skips.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The 30-second answer</h2>
            <p>
              <strong>Quartz</strong> if you want zero maintenance and consistent color — the default for busy family kitchens, with one rule: use a trivet.
            </p>
            <p>
              <strong>Granite</strong> if you want real stone, natural variation, and hot pans set down without a thought — and you&apos;re fine resealing every few years.
            </p>
            <p>
              <strong>Porcelain</strong> if you want big-slab marble looks, direct-heat tolerance, or an outdoor kitchen — fabricated by someone who genuinely knows the material.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>Side-by-side comparison</h2>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Feature</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Quartz</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Granite</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Porcelain</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.feature} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.feature}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.quartz}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.granite}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.porcelain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>How to actually decide</h2>
            <p>
              Skip the material-first debate and start with three questions about your household:
            </p>
            <ul>
              <li>
                <strong>Do hot pans land on the counter?</strong> If yes — honestly yes, not aspirationally — granite or porcelain. If everyone reliably uses trivets, quartz is back on the table.
              </li>
              <li>
                <strong>Do you want the counter to be consistent or unique?</strong> Quartz and porcelain repeat their pattern predictably. A granite slab is a one-off — which is either the whole point or a problem, depending on your taste.
              </li>
              <li>
                <strong>Will anyone maintain it?</strong> If the answer is no, that eliminates granite for you — not because sealing is hard, but because unsealed granite eventually stains, and you should choose the material that matches reality.
              </li>
            </ul>
            <p>
              Then look at real samples next to your actual door style and floor. Countertop colors that look perfect in isolation routinely fight the cabinets they land on — it&apos;s why we show slab samples at the materials bench beside full-size doors, and why our <Link href="/countertops">countertop projects</Link> get templated only after the cabinets are set.
            </p>

            <h2 className="section-heading" style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.8rem" }}>The one rule that outranks the material</h2>
            <p>
              Whatever you choose, the sequencing is the same: cabinets installed and leveled, then template, then fabrication, then install. Rushing the template — or taking it from drawings to &quot;save time&quot; — is the root cause of most countertop horror stories, regardless of material. If you&apos;re planning the whole room at once, our <Link href="/remodeling">kitchen remodeling</Link> page walks through how the countertop fits the larger schedule, and the <Link href="/guides/flooring-or-cabinets-first">floors-or-cabinets-first guide</Link> covers the other big sequencing question.
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
          <h2 className="section-heading">See all three next to your door style.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Slab samples and full-size cabinet doors, side by side at the Quakertown materials bench. The decision takes ten minutes in person.
          </p>
          <Link href="/contact?type=countertops" className="btn-primary">Get a Countertop Quote</Link>
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
