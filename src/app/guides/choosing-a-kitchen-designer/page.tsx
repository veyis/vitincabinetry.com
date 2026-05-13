import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const SLUG = "choosing-a-kitchen-designer";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const questions = [
  {
    q: "Do you design and build, or just design?",
    why: "Some kitchen designers are independent — they draw, you bring your own cabinet maker and installer. Others (like us) do all three under one roof. Both models work. Knowing which one you're hiring matters.",
  },
  {
    q: "Are the cabinets built in-house, or are they a manufactured line you resell?",
    why: "This is the single biggest differentiator in this industry. Franchise shops resell a catalog line. Custom shops build their own. The price, lead time, and customization ceiling all depend on the answer.",
  },
  {
    q: "Who installs my project?",
    why: "If the answer is \"a subcontractor we use,\" ask which one and whether you can talk to them. Two-thirds of post-install problems come from a builder/installer hand-off.",
  },
  {
    q: "Can I see a project you built in the last 12 months — in person, not just a photo?",
    why: "Photos are flattering. A walkable, recent project tells you what a year-in-the-life of their work actually looks like.",
  },
  {
    q: "What is your design fee, and what does it include?",
    why: "Some designers charge $0 and recover it in the cabinet markup. Others charge $500–$5,000 for design and credit it to the deposit. Others charge full hourly. There is no wrong answer — just be clear about what you're paying for.",
  },
  {
    q: "What's the lead time from contract signed to install?",
    why: "Custom kitchens run 8–14 weeks in this region. Catalog kitchens run 4–8 weeks. Refacing is 1–2 weeks. If the answer is much faster than the model implies, ask why.",
  },
  {
    q: "What's the warranty, and what voids it?",
    why: "Manufactured cabinets often have a transferable lifetime warranty on the box and 5–10 years on the finish. Bench-built shops usually warranty their own work. Find out what's covered and for how long.",
  },
  {
    q: "What scope is NOT included in the price?",
    why: "Counters, tile, plumbing, electrical, appliances, demo. Make sure every one is either in the quote or you have a separate vendor lined up — gaps in scope are the #1 source of surprise costs.",
  },
];

const redFlags = [
  {
    flag: "\"Call for pricing\" with no published ranges anywhere.",
    body: "Some opacity is normal — every project is custom. Total opacity is a tell. If a designer can't give you any range at all without an in-home visit, they're using your time to qualify a sale.",
  },
  {
    flag: "High-pressure same-day close discounts.",
    body: "\"Sign today and we'll knock 10% off\" is a finance trick, not a craft business. Real custom shops don't run that play.",
  },
  {
    flag: "No portfolio with named projects and tagged styles.",
    body: "Generic stock-photo carousels are a tell. A real designer can point to specific projects, name the clients (with permission), and walk you through the choices.",
  },
  {
    flag: "Can't or won't tell you where the cabinets are built.",
    body: "If you can't get a straight answer about whether the boxes are bench-built or factory product, the answer is factory.",
  },
  {
    flag: "No written contract or no milestone-based deposit schedule.",
    body: "A real cabinet project is contracted in writing with milestone draws. A signed proposal alone is not enough.",
  },
];

const faqs = [
  {
    q: "Do I need a designer with NKBA or AKBD certification?",
    a: "Certifications signal seriousness but don't guarantee good work. Plenty of excellent designers don't have them; plenty of mediocre ones do. Use them as a tiebreaker, not a filter.",
  },
  {
    q: "Should I hire a separate designer and cabinet maker, or use a design-build firm?",
    a: "Either works. Separate designer gives you a neutral party with no incentive to push a specific cabinet line — but you manage two contracts and split accountability. Design-build (us) gives you a single contract and single point of contact — at the cost of less neutrality on the cabinet decision. Both models produce great kitchens. Match the model to your project size and your appetite for managing vendors.",
  },
  {
    q: "How much should I pay for design alone?",
    a: "Design-only fees in this region run $1,500–$8,000 for a typical kitchen, depending on the designer's reputation and the project's complexity. Design-build firms often roll design into the project price or charge a modest standalone fee that's credited to the deposit.",
  },
  {
    q: "What's the difference between a kitchen designer and an interior designer?",
    a: "Kitchen designers specialize in kitchen and bath specifically — cabinet layout, function, ergonomics, code. Interior designers cover whole rooms and tend to focus more on aesthetic and finishes. The best kitchens are usually drawn by someone who specializes in them.",
  },
  {
    q: "Do you offer free design consultations?",
    a: "Yes. Our discovery call (30 min by phone) and in-home survey (60–90 min) are free. Full design and renderings are part of the project; a standalone design package costs $500 and is credited back if you proceed.",
  },
];

export default function ChoosingDesignerGuide() {
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
            <span aria-current="page">Choosing a Kitchen Designer</span>
          </nav>
          <span className="eyebrow">Decision Guide · {meta.readingMinutes} min read</span>
          <h1 className="section-heading">{meta.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            Picking a kitchen designer is mostly a process of separating real custom shops from rebadged catalog resellers — and finding someone whose model matches your project. Here&apos;s what to ask.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>The two business models you&apos;re actually choosing between</h2>
            <p>
              Almost every &quot;kitchen designer&quot; in this region falls into one of two models, and the choice between them matters more than any individual designer&apos;s taste.
            </p>
            <p>
              <strong>Catalog resellers.</strong> A designer (often working at a franchise or a regional dealer) sells a manufactured cabinet line — Wolf, Aristokraft, Masterbrand, Echelon, etc. — and subcontracts the installation. They have a showroom, a couple of cabinet lines they can price, and a stable of installers. This model is fast, lead times are short, and the price ceiling is mid-tier.
            </p>
            <p>
              <strong>Bench-built shops.</strong> A small team that designs AND builds AND installs — the cabinets come out of their own workshop. This is what custom actually means. Lead times are longer, price ceiling is higher, but the customization is unlimited.
            </p>
            <p>
              Both models produce good work. Neither is universally &quot;better.&quot; The question is which one fits your project. If you have a standard layout, mid-tier budget, and want it done in two months, catalog wins. If you have an older house with weird walls, a layout you want redrawn, and an appetite for craft, bench-built wins.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>The eight questions you should ask anyone you&apos;re considering</h2>
            <p>
              Walk into any consultation with this list. The answers tell you everything you need to know — including whether you&apos;re in the right kind of shop for your project.
            </p>
          </div>

          <div className="container--narrow">
            {questions.map((q, i) => (
              <div key={q.q} style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 0" }}>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-serif)", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-sans)", fontWeight: 600, marginBottom: "0.4rem" }}>{q.q}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{q.why}</p>
              </div>
            ))}
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>Five red flags</h2>
            <p>
              These are the patterns that should make you pause. None of them are fatal on their own — but if you see two or more in the same shop, walk.
            </p>
          </div>

          <div className="container--narrow">
            {redFlags.map((r) => (
              <div key={r.flag} style={{ borderTop: "1px solid var(--border)", padding: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--font-sans)", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text)" }}>
                  <span style={{ color: "#b00020", marginRight: "0.6rem" }}>•</span>
                  {r.flag}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginLeft: "1.4rem" }}>{r.body}</p>
              </div>
            ))}
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>What good looks like</h2>
            <p>
              In every meeting, the designer should be more curious about your house and life than excited about their own product. They should ask how you cook, where you store things, who else lives in the room, what frustrates you about the current kitchen. They should listen to your answers before sketching anything.
            </p>
            <p>
              They should give you straight answers to the eight questions above — not deflections, not redirections, not &quot;great question, let me get back to you.&quot;
            </p>
            <p>
              They should be honest enough to tell you when their shop isn&apos;t the right fit. The best designers in any region routinely refer projects out — to refacers, to other custom shops, to GCs they trust — when the project doesn&apos;t match their model. That&apos;s a sign of someone who&apos;s thinking about your kitchen more than their booking calendar.
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
          <h2 className="section-heading">Ask us the eight questions.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Free 30-minute discovery call. Bring the list. We&apos;ll give you straight answers — and if we&apos;re not the right shop for your project, we&apos;ll tell you who is.
          </p>
          <Link href="/contact" className="btn-primary">Book a Consultation</Link>
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
