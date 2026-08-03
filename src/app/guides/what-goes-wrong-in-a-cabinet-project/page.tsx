import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { getGuide } from "@/lib/guides";
import { articleJsonLd, breadcrumbSchema, faqPageJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

const SLUG = "what-goes-wrong-in-a-cabinet-project";
const meta = getGuide(SLUG)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  alternates: { canonical: `/guides/${SLUG}` },
  ...shareMetadata(`/guides/${SLUG}`, meta.title, meta.excerpt, { article: true }),
};

const faqs = [
  {
    q: "What is the most common cabinet project complaint?",
    a: "Schedule. Across cabinet and remodeling complaints, the pattern that repeats most is a kitchen that stays unusable for months past the promised date. It is rarely one big failure — it is a scope change or a back-ordered part that pushes the job to the back of a production queue, then waits there.",
  },
  {
    q: "Why do cabinet doors arrive damaged or in the wrong finish?",
    a: "Because most cabinets sold as custom in this region are ordered from a factory several states away, built to a spec sheet, and shipped by freight. Order-entry mistakes and transit damage both stay invisible until the crate is opened — usually on install day, in your kitchen, with the old cabinets already in a dumpster.",
  },
  {
    q: "How long should custom cabinets take?",
    a: "Four to eight weeks of shop time is normal for genuinely custom work, plus one to two weeks of installation. Anything advertised as dramatically faster is usually stock or semi-custom. Anything stretching past twelve weeks usually means the order sat in a queue somewhere.",
  },
  {
    q: "What should I ask a cabinet shop before I sign?",
    a: "Four questions do most of the work. Where are these cabinets built, and who inspects them before they reach my house? Is every line on this quote a selection or an allowance? Who is my single point of contact from deposit to final walkthrough? And can I see the 3D drawing with my actual appliance model numbers in it?",
  },
  {
    q: "Is an allowance the same as a price?",
    a: "No, and this is where most mid-project price increases come from. An allowance is a placeholder — a budget line for a decision you have not made yet. A selection is a specific product at a specific price. A quote built mostly of allowances is an estimate wearing a contract's clothing.",
  },
  {
    q: "Does buying local actually prevent these problems?",
    a: "It removes some of them structurally rather than by promise. A cabinet milled and finished in the same building that sells it cannot be damaged in freight, cannot be a factory order-entry error, and can be remade in the same shop instead of reordered. It does not automatically fix scheduling, communication, or design errors — those still come down to how the shop runs.",
  },
];

const failureRows = [
  {
    mode: "Months without a kitchen",
    cause: "Work started before scope was fully specified; one change re-enters a production queue",
    ask: "What happens to my schedule if one cabinet changes after the order is placed?",
  },
  {
    mode: "Wrong or damaged doors",
    cause: "Cabinets built at a distant factory, shipped by freight, first inspected at your house",
    ask: "Where are these built, and who inspects them before they reach me?",
  },
  {
    mode: "Finish peeling or bubbling",
    cause: "Thin laminate over old doors, or a coating sprayed in an uncontrolled environment",
    ask: "What finish system is this, and where is it sprayed?",
  },
  {
    mode: "Silence after the deposit",
    cause: "Sales and production are separate departments; you get handed off once the sale closes",
    ask: "Who is my one contact from deposit to walkthrough, and how often do I hear from them?",
  },
  {
    mode: "Price moves mid-project",
    cause: "Quote built on allowances instead of selections",
    ask: "Is every line on this quote a selection or an allowance?",
  },
  {
    mode: "Doors that cannot open",
    cause: "Drawing never checked against real appliance specs and door swings",
    ask: "Can I see the 3D with my actual appliance model numbers in it?",
  },
];

export default function GuidePage() {
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
            <span aria-current="page">What Goes Wrong</span>
          </nav>
          <span className="eyebrow">Process Guide · 11 min read</span>
          <h1 className="section-heading">What actually goes wrong in a cabinet project.</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            Read enough cabinet complaints and the same six stories come back around. None of them are exotic. All of them are predictable — and most of them are visible in the contract before anyone breaks ground.
          </p>
        </div>
      </section>

      <article>
        <section style={{ padding: "60px 0 0" }}>
          <div className="container--narrow prose">
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>Why we wrote this</h2>
            <p>
              Most cabinet shops sell you the finished photograph. Nobody sells you the twelve weeks in between, which is where every bad experience in this industry actually happens.
            </p>
            <p>
              We read through public complaints and reviews for cabinet manufacturers, refacers, and remodelers — ours and everyone else&apos;s. The failures cluster hard. Six patterns account for nearly all of it, and every one traces back to a structural decision made before the first cabinet was drawn.
            </p>
            <p>
              You can spot all six with four questions. Here they are, with the reasoning behind them.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>1. The kitchen that stays unfinished for months</h2>
            <p>
              <strong>What it looks like:</strong> A promised six weeks becomes five months. The family washes dishes in a bathtub through two holidays. The reviews that describe this are never angry about the cabinets — they are angry about the calendar.
            </p>
            <p>
              <strong>Why it happens:</strong> The job started before the scope was locked. A countertop gets chosen late and needs a different base cabinet depth. An appliance changes and the panel no longer fits. Each change means a revised order, and a revised order does not resume where it left off — it re-enters the production queue at the back. When the cabinets are built at a factory running a national order book, that queue is long and you are not in it alone.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;What happens to my schedule if one cabinet changes after the order is placed?&quot; A shop with a real answer will describe their change process. A shop without one will tell you changes are no problem, which is how you end up five months in.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>2. The doors arrive wrong, damaged, or in the wrong finish</h2>
            <p>
              <strong>What it looks like:</strong> The crate opens on install day. Two door fronts are chipped, one run is a shade off, and the hinges are the wrong type. Public complaint records against large cabinet manufacturers describe exactly this — boxes with gouges and cracked frames, uneven or wavy doors, wrong colors, missing parts, hinges nobody ordered.
            </p>
            <p>
              <strong>Why it happens:</strong> Most cabinetry sold as custom in this region is not built where it is sold. It is specified locally, entered into an order system, built hundreds of miles away, and shipped by freight. That creates two failure points nobody in the showroom controls: a typo in order entry, and a forklift. Both stay invisible until the crate is opened — in your kitchen, on the day your old cabinets went into a dumpster.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;Where are these cabinets built, and who physically inspects them before they reach my house?&quot; The answer tells you how a mistake gets fixed. A door built in the same building that sold it gets remade. A door from a factory gets a claim number.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>3. The finish fails two years later</h2>
            <p>
              <strong>What it looks like:</strong> Not a failure at handover — a failure at the two-year mark. Bubbles under the surface near the range. Edges lifting on the doors that get opened most. Reviews describing doors that &quot;peel off from normal use.&quot;
            </p>
            <p>
              <strong>Why it happens:</strong> Finish durability is decided by two things: the coating chemistry and the room it is sprayed in. A thin laminate bonded to an existing door has one adhesion layer standing between it and steam. A coating sprayed in an open shop picks up airborne dust that keeps it from curing into a continuous film. Neither problem is visible on install day, which is why it survives the walkthrough.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;What finish system is this, and where is it sprayed?&quot; You are listening for a named product and a controlled space. Anything vaguer is a shop that has not thought about the two-year mark.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>4. Nobody answers after the deposit clears</h2>
            <p>
              <strong>What it looks like:</strong> The designer who returned calls in an hour before the contract now takes four days. One complaint in the public record involves a cabinet door coming loose and striking a customer&apos;s foot — and the customer reporting that the automated message system produced no response and no repair visit.
            </p>
            <p>
              <strong>Why it happens:</strong> In most operations, sales and production are separate departments with separate incentives. The person who sold you the kitchen is compensated on closing it, not on delivering it. Once the deposit clears you are transferred to a queue, and the queue has no relationship with you.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;Who is my single point of contact from deposit to final walkthrough, and how often will I hear from them without chasing?&quot; A defined cadence — even a modest one — beats an enthusiastic promise to always be available.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>5. The price moves after you have signed</h2>
            <p>
              <strong>What it looks like:</strong> The contract said one number. Invoices arrive that add up to noticeably more, each individually justified, and none of them feel like something you agreed to.
            </p>
            <p>
              <strong>Why it happens:</strong> Allowances. A quote line reading &quot;countertop allowance: $4,000&quot; is not a price — it is a placeholder for a decision you have not made. When you pick the slab you actually want, the difference becomes a change order. Do that across counters, hardware, tile, and lighting and a quote can drift well past its headline number without anyone doing anything dishonest.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;Is every line on this quote a selection or an allowance?&quot; Then make them mark each one. Allowances are not inherently wrong — early in design they are unavoidable — but you deserve to know which parts of your price are real. Our{" "}
              <Link href="/guides/custom-kitchen-cost-bucks-county">cost breakdown guide</Link> walks through what the line items should look like.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>6. The design does not work in the actual room</h2>
            <p>
              <strong>What it looks like:</strong> Everything is installed, and the refrigerator door will not open past sixty degrees because the island is where it is. Complaint records include cabinets designed so the refrigerator could not open at all.
            </p>
            <p>
              <strong>Why it happens:</strong> The drawing was never checked in three dimensions against real appliance specifications. Elevations hide clearance problems well — a door swing, a handle projection, and a drawer pulled out at the same time are things a flat drawing simply does not show. Add an out-of-square wall in an older house and a paper-perfect plan stops fitting.
            </p>
            <p>
              <strong>What to ask:</strong> &quot;Can I see the 3D with my actual appliance model numbers in it, and the door swings drawn?&quot; Model numbers, not categories. A thirty-six inch refrigerator is not a specification.
            </p>

            <h2 className="section-heading" style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.8rem" }}>The whole thing on one page</h2>
          </div>

          <div className="container" style={{ marginTop: "1.5rem" }}>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>What goes wrong</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Root cause</th>
                    <th style={{ textAlign: "left", padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>Ask before you sign</th>
                  </tr>
                </thead>
                <tbody>
                  {failureRows.map((r, i) => (
                    <tr key={r.mode} style={{ background: i % 2 === 0 ? "#fff" : "var(--surface)" }}>
                      <td style={{ padding: "0.85rem 1.25rem", fontWeight: 600 }}>{r.mode}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.cause}</td>
                      <td style={{ padding: "0.85rem 1.25rem", color: "var(--text-secondary)" }}>{r.ask}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container--narrow prose" style={{ paddingTop: "3rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>How our shop is set up against this list</h2>
            <p>
              We are not going to claim nothing ever goes wrong here. Wood moves, houses are out of square, and anyone in this trade who tells you they have never remade a door is telling you something else. What we can tell you is which of these six failure modes we removed structurally rather than by promising harder.
            </p>
            <ul>
              <li>
                <strong>Built where it is sold.</strong> Every Vitrin Signature cabinet is milled, assembled, and finished in our own shop in Easton. There is no freight leg and no distant order-entry desk, which takes out most of failure mode 2. If a door comes out wrong, it gets remade at the same bench rather than reordered.
              </li>
              <li>
                <strong>Four to eight weeks, with weekly photo updates.</strong> Custom work takes the time it takes. What we can fix is the silence — you get photographs of your actual cabinets while they are being built, without asking. That is aimed squarely at failure mode 4.
              </li>
              <li>
                <strong>Catalyzed finish, sprayed in a dust-controlled booth.</strong> Plywood boxes with dado joinery, solid-wood dovetail drawers, Blum or Hettich soft-close hardware throughout. These are the specifications that decide whether failure mode 3 shows up at year two.
              </li>
              <li>
                <strong>One crew through the whole job.</strong> Cabinets, countertops, and flooring are handled by the same people, so there is no handoff seam where the schedule slips and nobody owns it. Sequencing matters more than people expect — our{" "}
                <Link href="/guides/flooring-or-cabinets-first">floors-or-cabinets-first guide</Link> explains why.
              </li>
              <li>
                <strong>We will tell you when we are the wrong answer.</strong> Sometimes the honest recommendation is stock cabinets, or refacing, or a different shop entirely. See{" "}
                <Link href="/guides/stock-vs-custom-cabinets-when-to-choose-each">stock vs. custom</Link> and{" "}
                <Link href="/guides/refacing-vs-custom">refacing vs. custom</Link> — both are written to talk you out of overbuying where that is the right call.
              </li>
            </ul>
            <p>
              Fifteen years on the bench and more than five hundred cabinets built, and the cabinetry carries a lifetime warranty. Take this list to whoever else you are quoting with. If they answer the four questions well, that is a good sign — regardless of whose name ends up on the contract.
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
          <h2 className="section-heading">Bring us the hard questions.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Ask us all four. Ask the other shops too. We would rather lose a job to a good question than win one that turns into somebody&apos;s bad review.
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
              { name: "What Goes Wrong in a Cabinet Project", url: pageUrl },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </main>
  );
}
