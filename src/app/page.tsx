import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { breadcrumbSchema, cabinetStoreSchema, toJsonLd } from "@/lib/schema";

const stats = [
  { num: "15+", label: "Years on the Bench" },
  { num: "500+", label: "Cabinets Built" },
  { num: "100%", label: "Signature Built Here" },
  { num: `${towns.length}+`, label: "Towns We Serve Weekly" },
];

const pillars = [
  {
    title: "Built in Easton.",
    desc: "Every Vitrin Signature cabinet is milled, assembled, and finished here. Plywood boxes, dovetail drawers, Blum hardware — and shop tours so you see the bench before you sign.",
  },
  {
    title: "Two tiers, one shop.",
    desc: "Vitrin Stock ships fast from the showroom floor. Vitrin Signature is built to your kitchen's exact dimensions — drawn, milled, and finished on our bench. Same team stands behind both.",
  },
  {
    title: "Yours to install — or we’ll do it.",
    desc: "Most contractors install our cabinets themselves. Homeowners who’d rather not can add installation as an option.",
  },
];

const audienceCards = [
  {
    title: "Homeowners",
    desc: "Walk in, sit at the materials bench, take stock cabinets home this week or order a full custom kitchen.",
    href: "/cabinets",
  },
  {
    title: "Contractors & installers",
    desc: "Bulk pricing, fast quoting, will-call pickup or jobsite delivery.",
    href: "/trade",
  },
  {
    title: "Designers & architects",
    desc: "Spec-grade cabinetry with 3D renderings on custom orders.",
    href: "/trade#designers",
  },
];

// TODO: fill real starting prices from the shop; "$X" entries render without a price.
const featuredStock = [
  { name: "Inset Shaker · Painted White Dove", from: "$X" },
  { name: "Full-Overlay Shaker · Painted Iron Ore", from: "$X" },
  { name: "Slab Modern · Rift-Cut White Oak", from: "$X" },
];

const beyondCabinets = [
  {
    title: "Countertops",
    desc: "Quartz, granite, and porcelain — templated and installed with your cabinets, one schedule.",
    href: "/countertops",
  },
  {
    title: "Flooring",
    desc: "Luxury vinyl plank, hardwood, engineered hardwood, and tile — installed as part of your remodel.",
    href: "/flooring",
  },
  {
    title: "Kitchen & bath remodeling",
    desc: "3D design, demolition, cabinetry, countertops, backsplashes, lighting, plumbing, electrical, and finishing — one accountable crew.",
    href: "/remodeling",
  },
  {
    title: "Custom closets",
    desc: "Designed in 3D, built to your walls at our Easton bench, installed by our team.",
    href: "/closets",
  },
];

/* Representative imagery — door styles, finishes, and the workshop.
   Not named client projects; real project photography lands on /portfolio. */
const theLook = [
  {
    src: "/images/heros/walnut-waterfall-island-modern-custom-kitchen.png",
    alt: "Modern custom kitchen with walnut slab cabinets and waterfall stone island",
    title: "Walnut Slab, Waterfall Stone",
    loc: "Vitrin Signature",
    span: "tile--7",
    href: "/cabinets/custom",
  },
  {
    src: "/images/heros/heritage-green-custom-kitchen-cabinets-bucks-county.png",
    alt: "Heritage green custom kitchen cabinets, bench-finished by Vitrin Cabinetry",
    title: "Heritage Green Inset",
    loc: "Custom color, bench-finished",
    span: "tile--5",
    href: "/cabinets/custom",
  },
  {
    src: "/images/heros/sage-inset-cabinet-door-brass-cup-pull-detail.png",
    alt: "Close-up of a sage inset cabinet door with brass cup pull",
    title: "Inset Door, Brass Cup Pull",
    loc: "Finish detail",
    span: "tile--5",
    href: "/cabinets",
  },
  {
    src: "/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png",
    alt: "Inset shaker kitchen in a Pennsylvania stone farmhouse",
    title: "Shaker for a Stone Farmhouse",
    loc: "Inset · Signature",
    span: "tile--7",
    href: "/portfolio",
  },
  {
    src: "/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png",
    alt: "Craftsman hand-planing white oak in the Vitrin Cabinetry workshop in Easton, PA",
    title: "On the Bench",
    loc: "Easton workshop",
    span: "tile--wide",
    href: "/shop-tour",
  },
];

const orderSteps = [
  "Discovery call",
  "In-home survey & measurements",
  "Design & quote",
  "Fabrication at our bench",
  "Delivery (install optional)",
];

function SectionHead({
  num,
  label,
  title,
  sub,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="sec-head reveal">
      <div>
        <div className="eyebrow-row">
          <span className="eyebrow-num">{num}</span>
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="section-heading">{title}</h2>
      </div>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollReveal />

      {/* Hero — editorial: left-aligned, bottom-anchored, staggered line reveal */}
      <section id="main-content" className="hero hero--editorial">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/heros/bespoke-kitchen-stone-farmhouse-bucks-county-poster.jpg"
          aria-hidden="true"
        >
          <source media="(prefers-reduced-motion: no-preference)" src="/videos/bespoke-kitchen-stone-farmhouse-bucks-county.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <div className="eyebrow-row">
            <span className="eyebrow-rule" aria-hidden="true" style={{ background: "#e6c87a" }} />
            <span className="eyebrow" style={{ color: "#e6c87a", marginBottom: 0 }}>The Lehigh Valley&apos;s Cabinet Shop</span>
          </div>
          <h1 className="hero__title">
            <span className="mask-line"><span>Cabinets, built and sold</span></span>
            {" "}
            <span className="mask-line"><span>in <em>Easton.</em></span></span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.92)", maxWidth: "720px", lineHeight: 1.6 }}>
            We don&apos;t sell kitchens out of a catalog — we build them at our own bench in Easton, PA, with in-stock door styles on the floor when speed matters. Kitchen, bath, and closet cabinetry drawn in 3D and finished in our shop, then completed with quartz, granite, or porcelain counters, tile, and flooring by the same crew — in homes that have stood in Easton, Bethlehem, and Allentown for a century or more.
          </p>
          <div className="hero__cta">
            <Link href="/cabinets/stock" className="btn-primary">Browse Stock Cabinets &rarr;</Link>
            <Link
              href="/cabinets/custom"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                padding: "1rem 2rem",
                borderRadius: "4px",
                fontWeight: 600,
                display: "inline-block",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.9rem",
              }}
            >
              Order a Custom Kitchen &rarr;
            </Link>
          </div>
        </div>
        <div className="hero__strip">
          <div className="hero__strip-inner">
            <span>Easton, PA</span>
            <span>15+ Years on the Bench</span>
            <span>500+ Cabinets Built</span>
            <span>Easton &middot; Bethlehem &middot; Allentown</span>
          </div>
        </div>
      </section>

      {/* Marquee band — decorative service ticker */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__item" key={copy}>
              {["Kitchens", "Bath Vanities", "Custom Closets", "Countertops", "Flooring", "Remodeling", "Built-ins"].map((s) => (
                <React.Fragment key={s}>
                  <span>{s}</span>
                  <span className="marquee__sep">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section>
        <div className="container">
          <SectionHead
            num="01"
            label="The Vitrin Difference"
            title={<>Bench-built Signature. Curated Stock. <em>One Easton shop.</em></>}
            sub="When you want a kitchen built to your room — not a line card — we mill and finish it here. When you need quality fast, we stock door styles on the floor. Same address, same craftspeople, same warranty philosophy: we answer for the work."
          />

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title" style={{ color: "var(--primary)" }}>{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we sell to */}
      <section className="section--surface">
        <div className="container">
          <SectionHead
            num="02"
            label="Who We Sell To"
            title={<>One brand. <em>Three audiences.</em></>}
          />

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {audienceCards.map((a) => (
              <Link key={a.href} href={a.href} className="card" style={{ display: "block" }}>
                <h3 className="card__title">{a.title}</h3>
                <p className="card__desc">{a.desc}</p>
                <div className="card__more">Learn More &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From the showroom */}
      <section>
        <div className="container">
          <SectionHead
            num="03"
            label="From the Showroom"
            title={<>Stock cabinets in our <em>Easton shop</em></>}
            sub="Featured Vitrin Stock door styles. Pickup or delivery from Easton, PA."
          />

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {featuredStock.map((s) => (
              <Link key={s.name} href="/cabinets/stock" className="card">
                <h3 className="card__title">{s.name}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  {s.from !== "$X" && <span style={{ color: "var(--primary)", fontWeight: 600 }}>From {s.from}</span>}
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--good, #2f6a3a)" }}>Available now</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/cabinets/stock" className="btn-secondary">Browse all Vitrin Stock &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Custom kitchen teaser */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center reveal">
            <span className="eyebrow">Vitrin Signature</span>
            <h2 className="section-heading">When stock isn&apos;t right, <em>we build it.</em></h2>
            <p className="section-sub">
              Fully custom kitchens, built at our Easton bench. Any size, any door style, any finish. 4 to 8 weeks in the shop, weekly photo updates.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/cabinets/custom" className="btn-primary">Order a Custom Kitchen &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Beyond cabinets — countertops, flooring, remodeling, closets */}
      <section>
        <div className="container">
          <SectionHead
            num="04"
            label="Beyond Cabinets"
            title={<>Cabinets first — and everything that <em>finishes the room.</em></>}
            sub="Kitchen, bathroom, and closet cabinetry is the core. Countertops, flooring, backsplashes, and complete kitchen and bath remodeling round out the project — same shop, same crew, one schedule."
          />

          <div className="svc-list reveal">
            {beyondCabinets.map((s, i) => (
              <Link key={s.href} href={s.href} className="svc-row">
                <span className="svc-row__num">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="svc-row__title">{s.title}</span>
                  <span className="svc-row__desc">{s.desc}</span>
                </span>
                <span className="svc-row__arrow" aria-hidden="true">&#8599;</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/remodeling" className="btn-secondary">See full remodeling scope &rarr;</Link>
          </div>
        </div>
      </section>

      {/* The look — representative imagery, real project photos land on /portfolio */}
      <section className="section--surface">
        <div className="container">
          <SectionHead
            num="05"
            label="The Look"
            title={<>Door styles, finishes, and the bench <em>they come from.</em></>}
            sub="A feel for the range — inset and overlay, painted and natural wood. Browse named projects on the portfolio."
          />

          <div className="work-grid">
            {theLook.map((w, i) => (
              <Link key={w.src} href={w.href} className={`tile ${w.span} reveal${i % 2 === 1 ? " reveal-delay-1" : ""}`}>
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  sizes={w.span === "tile--wide" ? "(max-width: 1232px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
                  className="tile__img"
                />
                <span className="tile__cap">
                  <span className="tile__loc">{w.loc}</span>
                  <span className="tile__title">{w.title}</span>
                </span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/portfolio" className="btn-secondary">View the Portfolio &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Trade callout */}
      <TradeCalloutStrip />

      {/* Process snapshot — 5 steps */}
      <section>
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="eyebrow-row">
                <span className="eyebrow-num">06</span>
                <span className="eyebrow-rule" aria-hidden="true" />
                <span className="eyebrow">How Ordering Works</span>
              </div>
              <h2 className="section-heading">How ordering a custom kitchen works — <em>five steps.</em></h2>
              <div className="prose" style={{ marginTop: "1.5rem" }}>
                <p>
                  One supplier, one rep, one accountable shop. We deliver — your crew installs, or ours can.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/process" className="btn-secondary">See the full process</Link>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <ol role="list" aria-label="Custom kitchen ordering steps" style={{ listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
                {orderSteps.map((step, i) => (
                  <li
                    key={step}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      padding: "0.85rem 0",
                      borderTop: i === 0 ? "1px solid var(--border)" : "none",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-serif)", color: "var(--primary)", fontSize: "1.1rem", width: "1.5rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "var(--text)" }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--surface section--tight">
        <div className="container">
          <div className="stat-grid reveal">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote — the shop's own promise.
          TODO: swap for a real customer review (with permission) once reviews
          accumulate — see site.aggregateRating in src/lib/site.ts. */}
      <section>
        <div className="container">
          <div className="pullquote reveal">
            <span className="pullquote__mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              We answer for the work. Every cabinet that leaves this shop was measured, drawn, milled, and finished by people you can meet in Easton.
            </blockquote>
            <div className="pullquote__attr">The Vitrin Promise &middot; Easton, PA</div>
          </div>
        </div>
      </section>

      {/* Town grid */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center reveal">
            <span className="eyebrow">Where We Sell</span>
            <h2 className="section-heading">Built in Easton. Sold across the Lehigh Valley and Bucks County.</h2>
            <p className="section-sub">
              We supply cabinets to homeowners and trade in {towns.slice(0, 6).map((t) => t.name).join(", ")} and beyond.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", textAlign: "center" }}>
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/custom-kitchen-cabinets/${t.slug}`}
                style={{
                  padding: "0.85rem",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                }}
              >
                {t.name}, PA
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dual final CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to order cabinets?</h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Visit our Easton showroom — or send us your kitchen drawings for a quote.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/showroom" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
              Visit the Showroom
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>
              Get a Cabinet Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([{ name: "Home", url: site.url }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(cabinetStoreSchema),
        }}
      />
    </main>
  );
}
