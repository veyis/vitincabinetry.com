# Cabinet Supplier Pivot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition vitrincabinetery.com from a design-build-install firm to a Quakertown cabinet supplier with two product tiers (Vitrin Stock + Vitrin Signature), serving both retail and trade. Installation becomes a quiet, optional service.

**Architecture:** Pure content + IA pivot on top of the existing Next.js 16 App Router site. New product-oriented `/cabinets/*` route surface replaces the existing `/services/*` surface (with 301 redirects). Homepage and `/trade` get full rewrites; supporting pages get tone edits. Schema, sitemap, navbar, and footer all updated to match the new IA. No new dependencies; no business logic changes.

**Tech Stack:** Next.js 16.2.6 (App Router) · React 19.2.4 · TypeScript 5 · Tailwind v4 · Resend (existing) · No test framework (this is a content site — verification is build + lint + manual visual).

**Companion spec:** [`docs/superpowers/specs/2026-05-12-cabinet-supplier-pivot-design.md`](../specs/2026-05-12-cabinet-supplier-pivot-design.md) — the canonical decision record. Every task in this plan implements a section of that spec. When the plan and the spec disagree, the spec wins; flag it and update the plan.

---

## Standing rules for every task

1. **Read the Next.js 16 docs before touching any framework API.** Project CLAUDE.md is explicit: *"This is NOT the Next.js you know."* Before editing `next.config.ts`, `sitemap.ts`, `robots.ts`, metadata, Image, App Router conventions, or layout/route group features — consult `node_modules/next/dist/docs/` for the version-pinned guidance. Heed deprecation notices.
2. **Verification at the end of every task is the same triple:**
   - `npm run build` → must succeed
   - `npm run lint` → must succeed (or, if it fails on pre-existing issues unrelated to the task, document and proceed)
   - Spot-check the affected page(s) in `npm run dev` → matches the spec visually and reads correctly
3. **One small commit per task.** Commit message format: `feat(<area>): <short title>` for new pages, `refactor(<area>): <short title>` for rewrites, `chore(<area>): <short title>` for infra. Never use `--no-verify` or `--amend`.
4. **No deletions until safety net is in place.** The four `/services/*` page files survive until Task 18 (after redirects are in place). Old URLs must never 404 mid-migration.
5. **Copy comes from the spec.** When in doubt about a sentence of marketing copy, look it up in the design spec section referenced in the task header. The spec is the source of truth.
6. **No new dependencies.** This pivot adds zero npm packages. All work is content, JSX, and metadata.
7. **DRY in shared blocks.** Three repeated blocks appear on multiple pages — extract them to `src/components/` rather than copy-pasting:
   - `TradeCalloutStrip` — the "Bulk pricing for contractors" dark band
   - `ConstructionSpecs` — plywood / Blum / dovetail spec list (on `/cabinets`, `/cabinets/stock`, `/cabinets/custom`)
   - `InstallOptionalNote` — the "We can install yours, or your contractor can" mini-block
8. **Frontend a11y must not regress.** The current `Navbar.tsx` is keyboard-accessible (skip link, escape closes menu). Preserve and extend; never lose.

---

## File structure map

### Files to CREATE

| Path | Responsibility |
|---|---|
| `src/components/TradeCalloutStrip.tsx` | Repeated dark band: "Bulk pricing for contractors, builders, and trade." Used on `/`, `/cabinets`, `/cabinets/stock`. |
| `src/components/ConstructionSpecs.tsx` | Shared spec block — plywood, Blum, dovetail. Used on `/cabinets`, `/cabinets/stock`, `/cabinets/custom`. |
| `src/components/InstallOptionalNote.tsx` | Small block: *"We can install yours, or your contractor can."* Used on `/cabinets/custom`, `/cabinets/stock` (trimmed). |
| `src/app/cabinets/page.tsx` | Overview + Stock vs Signature comparison table. |
| `src/app/cabinets/stock/page.tsx` | Vitrin Stock detail. |
| `src/app/cabinets/custom/page.tsx` | Vitrin Signature detail. |
| `src/app/cabinets/kitchen/page.tsx` | Application page — ported from `/services/kitchen-cabinets`. |
| `src/app/cabinets/bath/page.tsx` | Application page — ported from `/services/bathroom-vanities`. |
| `src/app/cabinets/built-ins/page.tsx` | Application page — ported from `/services/living-room-units`. |
| `src/app/cabinets/aging-in-place/page.tsx` | Application page — ported from `/services/aging-in-place`. |
| `src/app/installation/page.tsx` | Short, footer-only "installation as an optional service" page. |
| `src/app/showroom/page.tsx` | "Visit us" page. Phone-only contact until address lands. |
| `src/app/guides/setting-up-a-trade-cabinet-account/page.tsx` | New SEO guide. |
| `src/app/guides/stock-vs-custom-cabinets-when-to-choose-each/page.tsx` | New SEO guide. |
| `src/app/guides/buying-cabinets-for-a-spec-home/page.tsx` | New SEO guide. |
| `src/app/guides/cabinet-delivery-and-jobsite-coordination/page.tsx` | New SEO guide. |
| `src/app/guides/contractor-cabinet-pricing-explained/page.tsx` | New SEO guide. |

### Files to MODIFY

| Path | Why |
|---|---|
| `src/lib/schema.ts` | Add `cabinetStoreSchema` + `productSchema` + `offerSchema` helpers. Update `serviceSchema()` default `serviceType` away from "Custom Cabinetry"-only framing (keep backward-compatible). |
| `src/app/page.tsx` | Full homepage rewrite per spec §4. |
| `src/app/trade/page.tsx` | Full rewrite per spec §6 — supply partner framing. |
| `src/app/process/page.tsx` | Reframe: 7 steps → 5 ordering steps. Retitle. Drop `serviceType: "Design-Build Cabinetry"`. |
| `src/app/about/page.tsx` | Tone edits — drop "design-build-install" framing. |
| `src/app/contact/page.tsx` | Add audience segmentation field, support `?type=` prefills, update copy. |
| `src/app/portfolio/page.tsx` | Add filter chips. |
| `src/app/shop-tour/page.tsx` | Reframe as workshop tour (distinct from showroom). |
| `src/app/custom-kitchen-cabinets/[town]/page.tsx` | Retarget content: dual-tier "Stock cabinets in [town]" + "Custom kitchens in [town]" blocks. |
| `src/components/Navbar.tsx` | New 5-item nav with Cabinets dropdown. |
| `src/components/Footer.tsx` | 4-column footer per spec §3.4. |
| `next.config.ts` | Add `redirects()` for the 4 `/services/*` URLs. |
| `src/app/sitemap.ts` | Remove `/services/*`. Add new `/cabinets/*`, `/installation`, `/showroom`, and 5 new guides. |

### Files to DELETE (Task 18, after redirects are live)

- `src/app/services/kitchen-cabinets/page.tsx`
- `src/app/services/bathroom-vanities/page.tsx`
- `src/app/services/living-room-units/page.tsx`
- `src/app/services/aging-in-place/page.tsx`
- Empty `src/app/services/` directory (rm after the files are gone).

---

## Execution order — why this sequence

The plan is **additive-first**, **destructive-last**. New pages exist before redirects point at them. Redirects exist before the old pages are deleted. Navbar/Footer point at new URLs only after those URLs exist. The site is always shippable at every commit.

```
Phase A  · Tasks 1–9   · Add new pages (no user-visible disruption — new routes appear)
Phase B  · Tasks 10–14 · Rewrite existing pages (homepage, trade, etc.)
Phase C  · Tasks 15–16 · Reorganize Navbar + Footer (now safe — destinations exist)
Phase D  · Tasks 17–19 · Redirects · Sitemap · Delete /services/*  (the cutover)
Phase E  · Tasks 20    · 5 new SEO guides
Phase F  · Tasks 21–22 · Site-wide kill-list grep + final acceptance check
```

---

# PHASE A — Foundation + new pages

## Task 1 — Add new schema helpers

**Goal:** Extend `src/lib/schema.ts` with the three new helpers needed for the cabinet-store positioning: `cabinetStoreSchema` (LocalBusiness variant), `productSchema`, `offerSchema`. Backward-compatible — existing exports unchanged.

**Files:**
- Modify: `src/lib/schema.ts`

**Spec reference:** §10.3 (Schema changes)

- [ ] **Step 1: Read the Next.js 16 metadata + structured data guidance.**

```bash
ls node_modules/next/dist/docs/ 2>/dev/null | head -30
```

Skim any doc whose name includes "metadata," "head," or "structured data." Note any v16-specific patterns. (Existing `schema.ts` uses `Record<string, unknown>` + `dangerouslySetInnerHTML` + `JSON.stringify`-with-`<` escaping — the same pattern is correct for new helpers.)

- [ ] **Step 2: Read the current schema.ts and locate the bottom of the file.**

```bash
tail -20 src/lib/schema.ts
```

The new exports go after `serviceSchema()` (the existing last export).

- [ ] **Step 3: Append the three new helpers to `src/lib/schema.ts`.**

After the last line (`}`) of the existing file, add:

```ts
/**
 * Vitrin operates as both a custom cabinetry workshop AND a cabinet store —
 * stock cabinets sold from the showroom plus made-to-order custom. The
 * default localBusinessSchema (@type "CabinetMaker") emphasizes the workshop.
 * This variant emphasizes the storefront and is rendered on /, /showroom,
 * and the town pages where both tiers are sold.
 */
export const cabinetStoreSchema = {
  "@context": "https://schema.org",
  "@type": ["FurnitureStore", "HomeAndConstructionBusiness"],
  "@id": `${site.url}#cabinetstore`,
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", ...site.geo },
  areaServed: site.areaServed,
  openingHoursSpecification: openingHours,
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export function productSchema(opts: {
  name: string;
  description: string;
  image: string;
  url: string;
  sku?: string;
  offer?: ReturnType<typeof offerSchema>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: opts.url,
    ...(opts.sku ? { sku: opts.sku } : {}),
    brand: { "@type": "Brand", name: site.name },
    ...(opts.offer ? { offers: opts.offer } : {}),
  };
}

export function offerSchema(opts: {
  price: string;
  priceCurrency?: string;
  availability?: "InStock" | "PreOrder" | "MadeToOrder";
  url?: string;
}) {
  return {
    "@type": "Offer",
    priceCurrency: opts.priceCurrency ?? "USD",
    price: opts.price,
    availability: `https://schema.org/${opts.availability ?? "InStock"}`,
    ...(opts.url ? { url: opts.url } : {}),
    seller: { "@id": `${site.url}#cabinetstore` },
  };
}
```

- [ ] **Step 4: Build to verify type correctness.**

```bash
npm run build
```

Expected: build succeeds. The new exports are unused — no rendering check needed yet.

- [ ] **Step 5: Lint.**

```bash
npm run lint
```

Expected: passes.

- [ ] **Step 6: Commit.**

```bash
git add src/lib/schema.ts
git commit -m "feat(schema): add cabinetStoreSchema, productSchema, offerSchema helpers"
```

---

## Task 2 — Add shared components: `TradeCalloutStrip`, `ConstructionSpecs`, `InstallOptionalNote`

**Goal:** Three small reusable components that will appear on multiple pages. Build them up front so subsequent page tasks compose rather than copy-paste.

**Files:**
- Create: `src/components/TradeCalloutStrip.tsx`
- Create: `src/components/ConstructionSpecs.tsx`
- Create: `src/components/InstallOptionalNote.tsx`

**Spec reference:** §4.6 (trade callout), §5.1.a (construction specs), §5.3 (install optional note)

- [ ] **Step 1: Create `src/components/TradeCalloutStrip.tsx`.**

```tsx
import React from "react";
import Link from "next/link";

/**
 * Full-width dark band CTA — "Bulk pricing for contractors and trade."
 * Used on /, /cabinets, /cabinets/stock.
 */
export default function TradeCalloutStrip() {
  return (
    <section className="section--dark" aria-label="Trade pricing">
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 320px" }}>
          <div className="eyebrow" style={{ color: "#e6c87a" }}>For Trade</div>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.5, margin: "0.5rem 0 0", color: "#fff" }}>
            <strong>Bulk pricing for contractors, builders, and trade.</strong>{" "}
            No minimums on the first order.
          </p>
        </div>
        <Link href="/trade" className="btn-primary" style={{ background: "#e6c87a", color: "#1c1c1c" }}>
          Apply for trade pricing →
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/components/ConstructionSpecs.tsx`.**

```tsx
import React from "react";

/**
 * Shared spec block — plywood, Blum, dovetail.
 * The line that says "buying stock is not buying down."
 * Used on /cabinets, /cabinets/stock, /cabinets/custom.
 */
export default function ConstructionSpecs({ heading = "How every Vitrin cabinet is built" }: { heading?: string }) {
  return (
    <section>
      <div className="container">
        <div className="section-center">
          <span className="eyebrow">Construction</span>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-sub">
            The construction bar is the same for Vitrin Stock and Vitrin Signature. The difference is how each cabinet is made, not how well.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {[
            { title: "Plywood boxes", desc: "1/2-inch plywood sides, 3/4-inch top, bottom, and shelves. No particleboard." },
            { title: "Dovetail drawers", desc: "Solid-wood dovetail drawer boxes — 5/8-inch sides, captured plywood bottoms." },
            { title: "Blum hardware", desc: "Soft-close hinges and undermount slides on every drawer and door." },
            { title: "Finished in-house", desc: "Spray-finished in our dust-controlled booth. Touch-up kit included with every order." },
          ].map((s) => (
            <div key={s.title} className="card">
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `src/components/InstallOptionalNote.tsx`.**

```tsx
import React from "react";
import Link from "next/link";

/**
 * Small block reassuring contractors that install is optional.
 * Used on /cabinets/custom and (trimmed) /cabinets/stock.
 */
export default function InstallOptionalNote() {
  return (
    <div
      className="callout"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "1.25rem 1.5rem",
        background: "var(--surface)",
        margin: "1.5rem 0",
      }}
    >
      <strong>Installation is optional.</strong>{" "}
      We can install your cabinets, or your contractor can. Most of our trade
      customers install themselves. <Link href="/installation" className="text-link">Learn about installation →</Link>
    </div>
  );
}
```

- [ ] **Step 4: Build + lint.**

```bash
npm run build && npm run lint
```

Expected: passes. Unused components are fine; build doesn't fail on that.

- [ ] **Step 5: Commit.**

```bash
git add src/components/TradeCalloutStrip.tsx src/components/ConstructionSpecs.tsx src/components/InstallOptionalNote.tsx
git commit -m "feat(components): add TradeCalloutStrip, ConstructionSpecs, InstallOptionalNote"
```

---

## Task 3 — Create `/cabinets` overview page

**Goal:** The product-tier landing page. Centerpiece is the Stock-vs-Signature comparison table.

**Files:**
- Create: `src/app/cabinets/page.tsx`

**Spec reference:** §5.1

- [ ] **Step 1: Read the existing `/trade/page.tsx` for patterns.**

```bash
wc -l src/app/trade/page.tsx
```

This is the model for page layout (Navbar, hero section, Footer, JSON-LD). Match its style.

- [ ] **Step 2: Create `src/app/cabinets/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabinets — Stock & Custom · Vitrin Cabinetery",
  description:
    "Two ways to buy cabinets from Vitrin: stock cabinets ready from our Quakertown showroom, or fully custom kitchens built to your exact dimensions. Trade pricing on both.",
  alternates: { canonical: "/cabinets" },
};

const rows: Array<{ label: string; stock: string; signature: string }> = [
  { label: "Lead time",     stock: "In stock — pick up this week",                                         signature: "4–8 weeks" },
  { label: "Sizes",         stock: "Fixed cabinet box sizes",                                              signature: "Built to your exact dimensions" },
  { label: "Door styles",   stock: "Curated lineup (≈6 styles)",                                           signature: "Any style we make" },
  { label: "Finishes",      stock: "Curated palette",                                                       signature: "Full paint / stain match" },
  { label: "Construction",  stock: "Plywood box · Blum hardware · dovetail drawers",                       signature: "Same" },
  { label: "Price tier",    stock: "$",                                                                     signature: "$$–$$$" },
  { label: "Trade pricing", stock: "Yes",                                                                   signature: "Yes" },
  { label: "Install",       stock: "Optional add-on",                                                       signature: "Optional add-on" },
  { label: "Best for",      stock: "Bath vanities · laundry · mudrooms · rentals · spec homes · contractor jobs", signature: "Whole kitchens · custom built-ins · designed spaces" },
];

export default function CabinetsPage() {
  const pageUrl = `${site.url}/cabinets`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "50vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Cabinets</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Two ways to buy cabinets. One Quakertown shop.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Stock cabinets ready from the showroom. Custom kitchens built at our bench. Same construction bar on both.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Compare</span>
            <h2 className="section-heading">Vitrin Stock vs. Vitrin Signature</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)" }}></th>
                  <th style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Vitrin Stock</th>
                  <th style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Vitrin Signature</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--text)" }}>{r.label}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.stock}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            <Link href="/cabinets/stock" className="btn-primary">Browse Stock Cabinets →</Link>
            <Link href="/cabinets/custom" className="btn-secondary">Order a Custom Kitchen →</Link>
          </div>
        </div>
      </section>

      {/* Decision strip */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">How to choose</span>
            <h2 className="section-heading">Not sure which fits?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h3 className="card__title">I need cabinets this week</h3>
              <p className="card__desc">→ Vitrin Stock. In-showroom pickup, lower price tier.</p>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h3 className="card__title">I'm doing a full kitchen and want it built to fit</h3>
              <p className="card__desc">→ Vitrin Signature. 4–8 week build. Any style, any finish.</p>
            </Link>
            <Link href="/contact" className="card">
              <h3 className="card__title">I'm not sure which fits my project</h3>
              <p className="card__desc">→ Talk to us. We'll tell you the truth in 10 minutes.</p>
            </Link>
          </div>
        </div>
      </section>

      <ConstructionSpecs />

      <TradeCalloutStrip />

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to order?</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/showroom" className="btn-primary">Visit the Showroom</Link>
            <Link href="/contact" className="btn-secondary">Get a Cabinet Quote</Link>
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
              { name: "Cabinets", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

- [ ] **Step 3: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 4: Visual spot-check.**

```bash
npm run dev
```

Open `http://localhost:3000/cabinets`. Confirm hero, table, decision cards, construction-specs block, trade band, and final CTAs render. Stop the dev server.

- [ ] **Step 5: Commit.**

```bash
git add src/app/cabinets/page.tsx
git commit -m "feat(cabinets): add /cabinets overview with Stock vs Signature comparison"
```

---

## Task 4 — Create `/cabinets/stock` page (Vitrin Stock detail)

**Goal:** The transactional product page contractors will bookmark. Looks like a real product page, not a brochure. Zero design-service language.

**Files:**
- Create: `src/app/cabinets/stock/page.tsx`

**Spec reference:** §5.2

- [ ] **Step 1: Create `src/app/cabinets/stock/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Stock Cabinets — Ready from the Showroom · Vitrin Cabinetery",
  description:
    "Vitrin Stock cabinets — plywood-box construction, Blum hardware, dovetail drawers. Six door styles, curated finishes, available for pickup or delivery from our Quakertown, PA showroom. Trade pricing.",
  alternates: { canonical: "/cabinets/stock" },
};

// Placeholder SKUs — replace with real inventory as it lands.
const featured = [
  { name: "Inset Shaker", finish: "Painted White Dove", from: "$X", img: "/images/placeholder.png" },
  { name: "Full-Overlay Shaker", finish: "Painted Iron Ore", from: "$X", img: "/images/placeholder.png" },
  { name: "Slab Modern", finish: "Rift-Cut White Oak", from: "$X", img: "/images/placeholder.png" },
  { name: "Beaded Inset", finish: "Stained Walnut", from: "$X", img: "/images/placeholder.png" },
];

const sizes = [
  "Base 12, 15, 18, 24, 30, 36",
  "Wall 30, 36, 42",
  "Drawer Base 18, 24, 30",
  "Pantry 18, 24",
  "Vanity Base 24, 30, 36",
  "Custom-cut filler strips",
];

export default function StockPage() {
  const pageUrl = `${site.url}/cabinets/stock`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/cabinets" style={{ color: "inherit" }}>Cabinets</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Stock</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Vitrin Stock</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Stock cabinets, ready to take home.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Plywood-box construction. Blum hardware. Dovetail drawers. Available for pickup, delivery, or jobsite drop in Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What's in stock</span>
            <h2 className="section-heading">Featured door styles</h2>
            <p className="section-sub">Placeholder lineup. Real SKUs, photos, and prices land as inventory rolls in.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {featured.map((f) => (
              <div key={f.name} className="card">
                <h3 className="card__title">{f.name}</h3>
                <p className="card__desc">{f.finish}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>From {f.from}</span>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--good, #2f6a3a)" }}>Available now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Sizes</span>
            <h2 className="section-heading">Standard box sizes we stock</h2>
          </div>
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.5rem 2rem", listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
            {sizes.map((s) => (
              <li key={s} style={{ padding: "0.4rem 0", borderBottom: "1px solid var(--border)" }}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <ConstructionSpecs heading="Same construction bar as Vitrin Signature" />

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Pickup &amp; delivery</span>
            <h2 className="section-heading">How you get them out the door</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Will-call pickup", desc: "By appointment at the Quakertown shop once your order is ready. Most stock orders ready within 2 business days." },
              { title: "Local delivery", desc: "Bucks County, Lehigh Valley, Montgomery County. Flat-fee tiers by zone." },
              { title: "Jobsite delivery", desc: "Scheduled against your install date. We coordinate with your foreman." },
              { title: "Lift-gate / inside delivery", desc: "Available on request for larger orders." },
            ].map((b) => (
              <div key={b.title} className="card">
                <h3 className="card__title">{b.title}</h3>
                <p className="card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TradeCalloutStrip />

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Get a stock cabinet quote</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Send us the sizes you need. Stock orders are priced same-day.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=stock" className="btn-primary">Get a Stock Quote</Link>
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
              { name: "Cabinets", url: `${site.url}/cabinets` },
              { name: "Stock", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 3: Visual spot-check at `http://localhost:3000/cabinets/stock`.**

Confirm: hero, featured-style grid with "Available now" badges, sizes list, construction-specs block, pickup/delivery grid, trade band, CTAs. Grep the rendered page for the word "consultation" — it must NOT appear.

- [ ] **Step 4: Verify no "consultation" or "design-build" leaked in.**

```bash
grep -niE "consultation|design.?build" src/app/cabinets/stock/page.tsx
```

Expected: zero output.

- [ ] **Step 5: Commit.**

```bash
git add src/app/cabinets/stock/page.tsx
git commit -m "feat(cabinets): add /cabinets/stock — Vitrin Stock detail page"
```

---

## Task 5 — Create `/cabinets/custom` page (Vitrin Signature detail)

**Goal:** The custom-kitchen detail page for the homeowner who wants a designed kitchen. Keeps the craft premium without threatening contractors.

**Files:**
- Create: `src/app/cabinets/custom/page.tsx`

**Spec reference:** §5.3

- [ ] **Step 1: Read existing `/services/kitchen-cabinets/page.tsx` to identify portable content blocks.**

```bash
wc -l src/app/services/kitchen-cabinets/page.tsx
```

Note any door-style lists, wood-species lists, accessory lists, FAQ content — these will be reused. The page itself stays in place until Task 18; we're only borrowing content here, not deleting yet.

- [ ] **Step 2: Create `src/app/cabinets/custom/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstallOptionalNote from "@/components/InstallOptionalNote";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vitrin Signature — Custom Cabinets, Built in Quakertown",
  description:
    "Vitrin Signature is fully custom cabinetry built at our Quakertown bench. Any size, any door style, any finish. 4–8 week lead time. Plywood boxes, dovetail drawers, Blum hardware.",
  alternates: { canonical: "/cabinets/custom" },
};

const orderSteps = [
  { title: "Discovery", body: "30-minute phone call. Scope, location, budget tier, timeline." },
  { title: "In-home survey", body: "We measure, photograph, and document the space." },
  { title: "Design & quote", body: "3D renderings + line-item written quote within 1–2 weeks." },
  { title: "Fabrication", body: "4–8 weeks at our Quakertown bench. Weekly photo updates." },
  { title: "Delivery (install optional)", body: "Delivered to your home or jobsite. Install if you want it; your contractor's crew if you don't." },
];

export default function CustomPage() {
  const pageUrl = `${site.url}/cabinets/custom`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Custom Vitrin Signature kitchen with honed Calacatta marble island, built at our Quakertown bench"
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
            <Link href="/cabinets" style={{ color: "inherit" }}>Cabinets</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Custom</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Vitrin Signature</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Custom cabinets, built at our Quakertown bench.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Any size. Any door style. Any finish. Built to your kitchen's exact dimensions. 4–8 weeks in the shop after design approval.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">What custom means</span>
              <h2 className="section-heading">Built to fit your house — not the next house over.</h2>
              <div className="prose">
                <p>
                  Vitrin Signature cabinets are drawn, milled, assembled, and finished at our Quakertown shop. We don't resell a manufactured line. Every box is built for your dimensions, in the door style and finish you chose, on the timeline we both agreed to.
                </p>
                <p>
                  Most of our Signature kitchens land between $35,000 and $90,000 in cabinetry alone. Final figure depends on box count, door style, wood species, and accessory choices.
                </p>
              </div>
            </div>
            <div>
              <h3 className="card__title" style={{ marginTop: 0 }}>What you can choose</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                <li><strong>Door styles:</strong> inset Shaker, full-overlay Shaker, beaded inset, slab modern, raised panel, mullion glass — and bespoke styles drawn to your reference.</li>
                <li><strong>Wood species:</strong> rift-cut white oak, walnut, cherry, maple, paint-grade poplar/MDF.</li>
                <li><strong>Finishes:</strong> any Benjamin Moore, Sherwin-Williams, or Farrow & Ball color — plus stained, glazed, or limed.</li>
                <li><strong>Accessories:</strong> integrated trash pull-outs, spice racks, knife drawers, plate slots, lighted interiors, charging stations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">How ordering works</span>
            <h2 className="section-heading">From first sketch to delivery — five steps.</h2>
          </div>
          <ol style={{ listStyle: "none", padding: 0 }}>
            {orderSteps.map((s, i) => (
              <li key={s.title} className="step">
                <div className="step__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="step__body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/process" className="btn-secondary">See the full ordering process</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Lead time</span>
            <h2 className="section-heading">4 to 8 weeks in the shop after design approval.</h2>
            <p className="section-sub">
              You get weekly photo updates from the bench. No silence. No surprises. If lead time matters more than custom, see <Link href="/cabinets/stock" className="text-link">Vitrin Stock</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <InstallOptionalNote />
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Start a custom kitchen</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Tell us the room and the budget tier. We'll set up a discovery call.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=custom" className="btn-primary">Start a Custom Kitchen</Link>
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
              { name: "Cabinets", url: `${site.url}/cabinets` },
              { name: "Custom", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

- [ ] **Step 3: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 4: Visual spot-check at `http://localhost:3000/cabinets/custom`.**

- [ ] **Step 5: Commit.**

```bash
git add src/app/cabinets/custom/page.tsx
git commit -m "feat(cabinets): add /cabinets/custom — Vitrin Signature detail page"
```

---

## Task 6 — Create 4 application pages (`/cabinets/kitchen`, `/bath`, `/built-ins`, `/aging-in-place`)

**Goal:** Port the content from the four `/services/*` pages into their new homes under `/cabinets/*`. Each page leads with both tiers ("Stock for [room]" + "Custom for [room]"). The old `/services/*` files stay in place until Task 18.

**Files:**
- Create: `src/app/cabinets/kitchen/page.tsx`
- Create: `src/app/cabinets/bath/page.tsx`
- Create: `src/app/cabinets/built-ins/page.tsx`
- Create: `src/app/cabinets/aging-in-place/page.tsx`

**Spec reference:** §5.4, §8 (disposition row for each /services/*)

- [ ] **Step 1: Read each `/services/*` page to inventory portable content.**

```bash
ls src/app/services/
for f in src/app/services/*/page.tsx; do
  echo "=== $f ==="
  head -40 "$f"
  echo
done
```

Each page has a metadata block, hero, content sections, schema. The portable parts are:
- Metadata title/description (lightly rewritten for the new URL + tier framing)
- Content prose (door styles, wood species, accessory specs, FAQ)
- Hero image references

What does NOT port:
- "Design-build" / "consultation" / "designed, built, installed" language — must be removed.
- The `serviceSchema()` payloads that use `"Custom Cabinetry"` etc. — keep schema but retarget `serviceType` to `"Custom Cabinetry Supply"` for these pages.

- [ ] **Step 2: Create `src/app/cabinets/kitchen/page.tsx`.**

This page is the kitchen-specific cross-cut of both tiers. Use this skeleton, then port the door-style / wood-species / accessory copy out of `/services/kitchen-cabinets/page.tsx` into the marked block.

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionSpecs from "@/components/ConstructionSpecs";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Cabinets — Stock & Custom · Vitrin Cabinetery",
  description:
    "Kitchen cabinets from Vitrin Cabinetery — stock cabinets ready from the Quakertown showroom, or fully custom kitchens built at our bench. Plywood boxes, Blum hardware, dovetail drawers.",
  alternates: { canonical: "/cabinets/kitchen" },
};

export default function CabinetsKitchenPage() {
  const pageUrl = `${site.url}/cabinets/kitchen`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "55vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/cabinets" style={{ color: "inherit" }}>Cabinets</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Kitchen</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Kitchen Cabinets</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Kitchen cabinets — stock or built to fit.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Two ways to cabinet your kitchen — pick door styles from in-stock SKUs in our Quakertown showroom, or order a kitchen built to your room's exact dimensions.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <Link href="/cabinets/stock" className="card">
              <h2 className="card__title">Stock kitchen cabinets</h2>
              <p className="card__desc">
                In-showroom inventory. Curated door styles and finishes. Ready for pickup within the week. Best for rental units, secondary kitchens, fast-turn contractor jobs.
              </p>
              <div className="card__more">Browse Vitrin Stock →</div>
            </Link>
            <Link href="/cabinets/custom" className="card">
              <h2 className="card__title">Custom kitchen cabinets</h2>
              <p className="card__desc">
                Built at our Quakertown bench to your room's exact dimensions. Any door style, any wood species, any finish. 4–8 week build.
              </p>
              <div className="card__more">Order a Vitrin Signature kitchen →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PORTED CONTENT BLOCK ==============
          Port from src/app/services/kitchen-cabinets/page.tsx:
          - door style overview (inset / full-overlay / frameless)
          - wood species + paint options
          - accessory / interior options
          - any FAQs that read as supplier-neutral

          Drop / rewrite:
          - any "consultation" CTAs
          - any "designed, built, and installed" claims
          - any line that says Vitrin "manages" or "owns" the project
      ================================================== */}

      <ConstructionSpecs />

      <section className="section--surface">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Talk to us about your kitchen</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Two options, one shop. We'll help you choose the right tier.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=kitchen" className="btn-primary">Get a Kitchen Quote</Link>
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
              { name: "Cabinets", url: `${site.url}/cabinets` },
              { name: "Kitchen", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

- [ ] **Step 3: Port the door-style / wood / accessory content from `src/app/services/kitchen-cabinets/page.tsx` into the marked block.**

Open both files. Copy the door-style overview, wood-species options, and accessory descriptions across. Strip any "consultation," "design-build," "installed by us," or "for you" wording on the way through. The voice should match the kill/use lists in spec §9.

- [ ] **Step 4: Create `src/app/cabinets/bath/page.tsx` using the same template, swapping kitchen → bath.**

Use the same skeleton from Step 2. Change:
- All "kitchen" → "bath" / "bathroom vanities"
- The 2-card grid links read "Stock bath vanities" + "Custom bath vanities"
- The ported content comes from `src/app/services/bathroom-vanities/page.tsx`
- The hero copy reflects bath-specific use cases (floating vanities, double sinks, etc.)
- Metadata + canonical URL updated to `/cabinets/bath`

- [ ] **Step 5: Create `src/app/cabinets/built-ins/page.tsx` from the same template.**

- "kitchen" → "built-ins"
- The 2-card grid reads "Stock built-ins" (smaller library/mudroom modules) + "Custom built-ins" (full walls, libraries, entertainment units)
- Ported content from `src/app/services/living-room-units/page.tsx`

- [ ] **Step 6: Create `src/app/cabinets/aging-in-place/page.tsx` from the same template.**

- "kitchen" → "aging-in-place"
- The 2-card grid reads "Stock aging-in-place vanities" + "Custom aging-in-place cabinetry" (lower counters, knee space, pull-out accessibility)
- Ported content from `src/app/services/aging-in-place/page.tsx`
- This is the niche-est of the 4 — keep tone factual; do not use sentimental "your loved ones" language.

- [ ] **Step 7: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 8: Visual spot-check all four URLs.**

```
http://localhost:3000/cabinets/kitchen
http://localhost:3000/cabinets/bath
http://localhost:3000/cabinets/built-ins
http://localhost:3000/cabinets/aging-in-place
```

For each: hero renders, two-tier cards render, ported content is visible, construction-specs block is present, footer/navbar still match the OLD site (these get updated in Tasks 15–16; that's fine for now).

- [ ] **Step 9: Grep the four new pages for kill-list phrases.**

```bash
grep -niE "design.?build|consultation|designed, built, and installed|behind your name" src/app/cabinets/kitchen/page.tsx src/app/cabinets/bath/page.tsx src/app/cabinets/built-ins/page.tsx src/app/cabinets/aging-in-place/page.tsx
```

Expected: zero output. If anything matches, rewrite the line.

- [ ] **Step 10: Commit.**

```bash
git add src/app/cabinets/kitchen/page.tsx src/app/cabinets/bath/page.tsx src/app/cabinets/built-ins/page.tsx src/app/cabinets/aging-in-place/page.tsx
git commit -m "feat(cabinets): add 4 application pages — kitchen, bath, built-ins, aging-in-place"
```

---

## Task 7 — Create `/installation` page

**Goal:** The single most contractor-sensitive page on the site. Short. Honest. Contractor-aware. Footer-only.

**Files:**
- Create: `src/app/installation/page.tsx`

**Spec reference:** §7

- [ ] **Step 1: Create `src/app/installation/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabinet Installation — Optional Service · Vitrin Cabinetery",
  description:
    "Most of our cabinets are installed by the contractor who bought them. For homeowners buying direct, Vitrin offers installation as an optional service. Cabinet install only — we coordinate with your other trades but don't perform them.",
  alternates: { canonical: "/installation" },
  robots: { index: true, follow: true },
};

const whoInstalls = [
  { buyer: "Homeowner buying direct", typically: "Vitrin install crew, or homeowner's chosen contractor" },
  { buyer: "Contractor / installer",   typically: "Their own crew" },
  { buyer: "Designer / architect",      typically: "Their preferred install partner" },
  { buyer: "Builder",                    typically: "Their on-site crew" },
];

const included = [
  "Cabinet install only (the cabinets we sold)",
  "Filler / scribe fitting",
  "Crown molding / light rail",
  "Toe kick",
  "Hardware install (knobs, pulls, soft-close adjustment)",
  "Punch-list walkthrough on the final day",
  "Counter templating coordination (we coordinate; templating itself is by your fabricator)",
];

const notIncluded = [
  "Plumbing",
  "Electrical",
  "Tile / backsplash",
  "Drywall / paint",
  "Flooring",
];

export default function InstallationPage() {
  const pageUrl = `${site.url}/installation`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "45vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Installation</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Installation</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Installation, if you want it.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.92)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.6 }}>
            Most of our cabinets are installed by the contractor who bought them. For homeowners buying direct, we offer installation as an optional service.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Who handles install</span>
            <h2 className="section-heading">It depends who's buying</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Buyer type</th>
                  <th style={{ textAlign: "left", padding: "0.85rem 0.75rem", borderBottom: "2px solid var(--border)", color: "var(--text)" }}>Typically installed by</th>
                </tr>
              </thead>
              <tbody>
                {whoInstalls.map((r) => (
                  <tr key={r.buyer}>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--text)" }}>{r.buyer}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>{r.typically}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <div className="two-col">
            <div>
              <span className="eyebrow">Included</span>
              <h3 className="card__title" style={{ marginTop: "0.5rem" }}>What our install covers</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                {included.map((i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{i}</li>)}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Not included</span>
              <h3 className="card__title" style={{ marginTop: "0.5rem" }}>What we don't do</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                {notIncluded.map((i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{i}</li>)}
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
                We coordinate with your other trades — we just don't perform them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Pricing</span>
            <h2 className="section-heading">What install costs</h2>
            <p className="section-sub">
              Installation is typically <strong>10–15% of cabinet order value</strong> for kitchens, <strong>8–12%</strong> for bath. Final figure is included in your quote.
            </p>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">Timeline</span>
            <h2 className="section-heading">When install happens</h2>
            <p className="section-sub">
              Most installs are scheduled within 2–4 weeks of cabinet delivery. Crew of 2–3 installers. Most kitchens are installed in 5–10 working days.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Add install to your cabinet quote</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            One CTA, one form. Install is added to your existing cabinet order — it's not a separate process.
          </p>
          <Link href="/contact?type=install" className="btn-primary">Add Installation to Your Quote</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Installation", url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

- [ ] **Step 2: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 3: Visual check at `http://localhost:3000/installation`.**

Page should be visibly shorter than other pages (intentional). Confirm: "Who handles install" table renders, included/not-included two-column block is clear, pricing block is honest.

- [ ] **Step 4: Commit.**

```bash
git add src/app/installation/page.tsx
git commit -m "feat(installation): add /installation — quiet optional-service page"
```

---

## Task 8 — Create `/showroom` page

**Goal:** "Visit us" page. The address is TBD, so the page is phone-first and emphasizes scheduling a visit by phone or email until the address lands.

**Files:**
- Create: `src/app/showroom/page.tsx`

**Spec reference:** §3.1, §8 (disposition row for /showroom), §10.5 (GBP changes don't affect this task but signal showroom importance)

- [ ] **Step 1: Create `src/app/showroom/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, cabinetStoreSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Visit the Vitrin Showroom — Quakertown, PA",
  description:
    "Vitrin Cabinetery's showroom in Quakertown, PA. Sit at the materials bench, browse stock cabinets ready to take home, and start a custom kitchen — all in one place.",
  alternates: { canonical: "/showroom" },
};

const expectations = [
  { title: "Stock cabinets on display", body: "See the full Vitrin Stock lineup — door styles, finishes, and finished cabinets you can take home this week." },
  { title: "Materials bench", body: "Sit down with samples — wood species, paint and stain swatches, hardware, counter chips." },
  { title: "Dedicated rep on hand", body: "A real person who knows the inventory, the lead times, and the trade-pricing tiers." },
  { title: "No pressure visits", body: "Walk through, look, ask questions, leave. Or talk pricing and place an order. Whichever you came for." },
];

export default function ShowroomPage() {
  const pageUrl = `${site.url}/showroom`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "50vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Showroom</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Showroom</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Visit the Vitrin showroom.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Quakertown, PA. Stock cabinets on the floor, materials bench, dedicated rep. The place to start, whether you came for one vanity or a full custom kitchen.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What to expect</span>
            <h2 className="section-heading">A real showroom, not a sales pitch</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {expectations.map((e) => (
              <div key={e.title} className="card">
                <h3 className="card__title">{e.title}</h3>
                <p className="card__desc">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address-TBD block — replace with map + hours when address lands. */}
      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Plan your visit</span>
          <h2 className="section-heading">Address coming soon</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Our Quakertown showroom is opening soon. Until the address is final, book a visit by phone or email — we'll confirm the exact location and time.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${site.phone}`} className="btn-primary">
              Call {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}?subject=Showroom%20Visit`} className="btn-secondary">
              Email {site.email}
            </a>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            Prefer to see where the cabinets are built? <Link href="/shop-tour" className="text-link">Take the workshop tour →</Link>
          </p>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Showroom", url: pageUrl },
            ])
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
```

- [ ] **Step 2: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 3: Visual check at `http://localhost:3000/showroom`.**

The "Address coming soon" block must be prominent and friendly — not apologetic. Phone and email buttons must be the primary CTAs.

- [ ] **Step 4: Commit.**

```bash
git add src/app/showroom/page.tsx
git commit -m "feat(showroom): add /showroom — phone-first visit page (address TBD)"
```

---

## Task 9 — Phase A integration check

**Goal:** All new product/supporting pages exist. Site still builds. Navbar/Footer still point at old URLs — that's intentional and gets fixed in Phase C.

**Files:** none (verification only)

- [ ] **Step 1: Confirm all 9 new routes exist.**

```bash
ls src/app/cabinets/ src/app/cabinets/stock src/app/cabinets/custom src/app/cabinets/kitchen src/app/cabinets/bath src/app/cabinets/built-ins src/app/cabinets/aging-in-place src/app/installation src/app/showroom
```

Expected: each directory contains a `page.tsx`.

- [ ] **Step 2: Run full build + lint.**

```bash
npm run build && npm run lint
```

Expected: passes.

- [ ] **Step 3: Manual smoke test of all 9 new URLs in dev.**

```bash
npm run dev
```

Visit each URL in a browser:
- `/cabinets`
- `/cabinets/stock`
- `/cabinets/custom`
- `/cabinets/kitchen`
- `/cabinets/bath`
- `/cabinets/built-ins`
- `/cabinets/aging-in-place`
- `/installation`
- `/showroom`

Each should render. Old navbar/footer pointing at /services/* is expected at this stage.

- [ ] **Step 4: No commit needed — checkpoint only.**

If anything is broken, fix it in a new commit with `fix(cabinets): <description>`.

---

# PHASE B — Rewrite existing pages

## Task 10 — Rewrite the homepage

**Goal:** The full homepage rewrite per spec §4. New hero, new pillar strip, new "Who we sell to" strip, stock-feature placeholder grid, custom-kitchen teaser, trade callout, retitled process snapshot, dual-CTA footer.

**Files:**
- Modify: `src/app/page.tsx`

**Spec reference:** §4

- [ ] **Step 1: Read the existing homepage end-to-end to inventory what's reusable.**

```bash
wc -l src/app/page.tsx
cat src/app/page.tsx
```

Save mental notes on:
- Stats block (kept, swap one label)
- Town grid (kept verbatim)
- Process step list (trimmed from 7 → 5, retitled)

- [ ] **Step 2: Replace the contents of `src/app/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradeCalloutStrip from "@/components/TradeCalloutStrip";
import { site } from "@/lib/site";
import { breadcrumbSchema, cabinetStoreSchema, toJsonLd } from "@/lib/schema";

const stats = [
  { num: "15+", label: "Years on the Bench" },
  { num: "500+", label: "Cabinets Built" },
  { num: "100%", label: "Built in Our Shop" },
  { num: "4.9★", label: "Avg Customer Rating" },
];

const pillars = [
  {
    title: "Built in Quakertown.",
    desc: "Every Vitrin Signature cabinet is milled, assembled, and finished at our shop. Plywood boxes, dovetail drawers, Blum hardware.",
  },
  {
    title: "Two tiers, one shop.",
    desc: "Vitrin Stock ships fast from the showroom floor. Vitrin Signature is built to your kitchen's exact dimensions. Same quality bar.",
  },
  {
    title: "Yours to install — or we'll do it.",
    desc: "Most contractors install our cabinets themselves. Homeowners who'd rather not can add installation as an option.",
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
    desc: "Spec-grade cabinetry behind your name, with 3D renderings on custom orders.",
    href: "/trade#designers",
  },
];

const featuredStock = [
  { name: "Inset Shaker · Painted White Dove", from: "$X" },
  { name: "Full-Overlay Shaker · Painted Iron Ore", from: "$X" },
  { name: "Slab Modern · Rift-Cut White Oak", from: "$X" },
];

const orderSteps = [
  "Discovery call",
  "In-home survey & measurements",
  "Design & quote",
  "Fabrication at our bench",
  "Delivery (install optional)",
];

export default function Home() {
  return (
    <main>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="hero animate-fade-in">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/heros/bespoke-kitchen-stone-farmhouse-bucks-county-poster.jpg"
          aria-label="Custom kitchen built by Vitrin Cabinetery in Quakertown, PA"
        >
          <source media="(prefers-reduced-motion: no-preference)" src="/videos/bespoke-kitchen-stone-farmhouse-bucks-county.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Quakertown&apos;s Cabinet Shop</span>
          <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Cabinets, built and sold in Quakertown.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Two ways to buy — pick from in-stock door styles in our showroom, or order a kitchen custom-built at our bench. For homeowners, contractors, designers, and builders across Bucks County and the Lehigh Valley.
          </p>
          <div className="hero__cta">
            <Link href="/cabinets/stock" className="btn-primary">Browse Stock Cabinets →</Link>
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
              Order a Custom Kitchen →
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">The Vitrin Difference</span>
            <h2 className="section-heading">A franchise sells you a catalog. We build you a cabinet.</h2>
            <p className="section-sub">
              Most local cabinet shops are reselling a manufactured line. We build our custom cabinets ourselves, in our own shop — and stock a curated lineup ready for pickup.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
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
          <div className="section-center">
            <span className="eyebrow">Who We Sell To</span>
            <h2 className="section-heading">One brand. Three audiences.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {audienceCards.map((a) => (
              <Link key={a.href} href={a.href} className="card" style={{ display: "block" }}>
                <h3 className="card__title">{a.title}</h3>
                <p className="card__desc">{a.desc}</p>
                <div className="card__more">Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From the showroom */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">From the Showroom</span>
            <h2 className="section-heading">Stock cabinets in our Quakertown shop</h2>
            <p className="section-sub">Featured Vitrin Stock door styles. Pickup or delivery from Quakertown, PA.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {featuredStock.map((s) => (
              <Link key={s.name} href="/cabinets/stock" className="card">
                <h3 className="card__title">{s.name}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>From {s.from}</span>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--good, #2f6a3a)" }}>Available now</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/cabinets/stock" className="btn-secondary">Browse all Vitrin Stock →</Link>
          </div>
        </div>
      </section>

      {/* Custom kitchen teaser */}
      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Vitrin Signature</span>
            <h2 className="section-heading">When stock isn&apos;t right, we build it.</h2>
            <p className="section-sub">
              Fully custom kitchens, built at our Quakertown bench. Any size, any door style, any finish. 4 to 8 weeks in the shop, weekly photo updates.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/cabinets/custom" className="btn-primary">Order a Custom Kitchen →</Link>
          </div>
        </div>
      </section>

      {/* Trade callout */}
      <TradeCalloutStrip />

      {/* Process snapshot — 5 steps */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How Ordering Works</span>
              <h2 className="section-heading">How ordering a custom kitchen works — five steps.</h2>
              <div className="prose" style={{ marginTop: "1.5rem" }}>
                <p>
                  One supplier, one rep, one accountable shop. We deliver — install if you want us to, or your contractor's crew if you don&apos;t.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/process" className="btn-secondary">See the full process</Link>
              </div>
            </div>
            <div>
              <ol style={{ listStyle: "none", padding: 0, color: "var(--text-secondary)" }}>
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
          <div className="stat-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Town grid */}
      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Where We Sell</span>
            <h2 className="section-heading">Built in Quakertown. Sold across Bucks County and the Lehigh Valley.</h2>
            <p className="section-sub">
              We supply cabinets to homeowners and trade in {site.areaServed.slice(0, 6).map((t) => t.replace(", PA", "")).join(", ")} and beyond.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", textAlign: "center" }}>
            {site.areaServed.map((town) => {
              const slug = town.replace(", PA", "").toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={town}
                  href={`/custom-kitchen-cabinets/${slug}`}
                  style={{
                    padding: "0.85rem",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    color: "var(--text)",
                  }}
                >
                  {town}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dual final CTA */}
      <section className="section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to order cabinets?</h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "560px", margin: "1rem auto 2.5rem" }}>
            Visit our Quakertown showroom — or send us your kitchen drawings for a quote.
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
```

Notes on the rewrite:
- **Hero headline** is *"Cabinets, built and sold in Quakertown."* (locked, spec §4.1).
- **Eyebrow** dropped the "Since [year]" placeholder (per spec self-review).
- **Pillars** are the new three from spec §4.2 — Pillar #3 is the contractor-trust line.
- **Town links** use a slug derived from the town name; today's homepage hard-codes them to `/custom-kitchen-cabinets/quakertown`. Confirm the towns library has matching slugs by reading `src/lib/towns.ts` (Task 10 Step 3).
- **Final CTAs** are now dual — Visit the Showroom + Get a Cabinet Quote.
- **CabinetStore schema** is rendered at the bottom alongside breadcrumb.

- [ ] **Step 3: Verify town slug derivation matches `src/lib/towns.ts`.**

```bash
grep -E "slug" src/lib/towns.ts | head -20
```

If the slugs in `towns.ts` don't match `town.toLowerCase().replace(/\s+/g, "-")`, replace the inline derivation with a lookup against the towns library. Read `src/lib/towns.ts` and use its `slug` field directly.

- [ ] **Step 4: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 5: Visual check at `http://localhost:3000/`.**

Confirm: new hero copy, new pillars (especially pillar #3), "Who we sell to" cards, stock feature grid, custom kitchen teaser, trade band, 5-step process snapshot, dual CTA, stats with "Cabinets Built" label.

- [ ] **Step 6: Grep the rewritten homepage for kill-list phrases.**

```bash
grep -niE "design.?build|designed, built, and installed|book a consultation|behind your name|your remodel" src/app/page.tsx
```

Expected: zero output.

- [ ] **Step 7: Commit.**

```bash
git add src/app/page.tsx
git commit -m "refactor(home): rewrite homepage for cabinet-supplier positioning"
```

---

## Task 11 — Rewrite `/trade` page

**Goal:** Full rewrite per spec §6. Headline flips from *"Custom cabinetry, behind your name"* to *"Your cabinet supplier in Quakertown."* Audience cards reordered. Anchor IDs added. New "Delivery, pickup & jobsite" block.

**Files:**
- Modify: `src/app/trade/page.tsx`

**Spec reference:** §6

- [ ] **Step 1: Replace the contents of `src/app/trade/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trade Program — Cabinet Supply for Contractors, Builders & Designers",
  description:
    "Vitrin Cabinetery's Trade Program: standing trade pricing, fast quotes, dedicated rep, will-call pickup, and jobsite delivery for contractors, builders, designers, architects, and installers in Bucks County and the Lehigh Valley.",
  alternates: { canonical: "/trade" },
};

const benefits = [
  {
    title: "Standing trade pricing",
    desc: "Tiered by volume. Pricing sheet sent on first quote after approval. Additional terms on multi-unit and new-construction orders.",
  },
  {
    title: "One dedicated rep",
    desc: "Same person handles every order — knows your style, your timeline expectations, and your typical project shape.",
  },
  {
    title: "Fast quotes",
    desc: "Most preliminary quotes within 5 business days. Stock orders priced same-day.",
  },
  {
    title: "Honest lead times",
    desc: "Stock ships when promised. Signature: 4–8 weeks at our bench, with weekly progress updates.",
  },
  {
    title: "Co-marketing optional, never required",
    desc: "We'll credit you in our portfolio if you want it. We disappear at the consumer level if you don't.",
  },
  {
    title: "3D renderings on custom orders",
    desc: "Optional. Drop photo-realistic renderings into your client presentations on Signature projects.",
  },
];

const audiences = [
  {
    id: "contractors",
    title: "General contractors & remodelers",
    desc: "Stock pickup for fast jobs, custom for the kitchens you don't want to outsource. Account terms after first order.",
  },
  {
    id: "installers",
    title: "Kitchen & bath installers",
    desc: "Buy from us, install for your client. We don't compete with your install crew. Will-call or jobsite delivery.",
  },
  {
    id: "builders",
    title: "Builders & developers",
    desc: "Volume pricing on stock for spec homes; custom for buyers-in-tow. Multi-unit terms.",
  },
  {
    id: "designers",
    title: "Interior designers",
    desc: "Spec Vitrin behind your name. Trade pricing on both Stock and Signature. Renderings available on custom projects.",
  },
  {
    id: "architects",
    title: "Architects",
    desc: "Spec-grade casework drawings, residential and small commercial. We can produce drawings to your standard.",
  },
];

export default function TradePage() {
  const pageUrl = `${site.url}/trade`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/inset-shaker-kitchen-pennsylvania-stone-farmhouse.png"
          alt="Inset Shaker custom kitchen built by Vitrin Cabinetery for a trade client in Pennsylvania"
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
            Your cabinet supplier in Quakertown.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Trade pricing on every cabinet we make. Stock cabinets ready for pickup. Custom kitchens built to your spec. For contractors, builders, designers, and installers across Bucks County and the Lehigh Valley.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What You Get</span>
            <h2 className="section-heading">A real supply partner, not a discount code.</h2>
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
            <h2 className="section-heading">Built for five kinds of partner.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {audiences.map((a) => (
              <div key={a.id} id={a.id} className="card">
                <h3 className="card__title">{a.title}</h3>
                <p className="card__desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <div className="section-center">
            <span className="eyebrow">How Buying Works</span>
            <h2 className="section-heading">Two paths — first order, then every order after.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            <div className="card">
              <h3 className="card__title">First time buying from us</h3>
              <ol style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                <li><strong>Apply</strong> — 2-minute form. Tell us your firm and the kinds of projects you do.</li>
                <li><strong>Get your pricing sheet</strong> — emailed within 2 business days.</li>
                <li><strong>Place your first order</strong> — stock ships the same week; custom enters the 4–8 wk queue.</li>
              </ol>
            </div>
            <div className="card">
              <h3 className="card__title">After your first order</h3>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-secondary)" }}>
                <li>Stock orders by phone, email, or showroom walk-in. Quoted same-day.</li>
                <li>Custom orders go through your rep with drawings and specs.</li>
                <li>Account terms available after first paid order.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Delivery &amp; Pickup</span>
            <h2 className="section-heading">How cabinets get out the door</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Will-call pickup", desc: "At the Quakertown shop, by appointment." },
              { title: "Local delivery", desc: "Bucks County, Lehigh Valley, Montgomery County. Flat-fee tiers by zone." },
              { title: "Jobsite delivery", desc: "Scheduled against your install date. We coordinate with your foreman." },
              { title: "Lift-gate / inside delivery", desc: "Available on request for larger orders." },
            ].map((b) => (
              <div key={b.title} className="card">
                <h3 className="card__title">{b.title}</h3>
                <p className="card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Apply for trade pricing</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Tell us about your firm and one project that&apos;s in front of you. We respond within two business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=trade" className="btn-primary">Apply for Trade Pricing</Link>
            <a className="btn-secondary" href={`mailto:${site.email}?subject=Trade%20Project%20Quote`}>Email a Project for a Quote</a>
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
    </main>
  );
}
```

- [ ] **Step 2: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 3: Visual check at `http://localhost:3000/trade`.**

Verify: new hero headline "Your cabinet supplier in Quakertown", 5 audience cards in the right order (contractors → installers → builders → designers → architects), anchor IDs on each card (test by visiting `http://localhost:3000/trade#contractors` and checking the scroll target), two-path "How buying works" grid, delivery/pickup block.

- [ ] **Step 4: Grep for kill-list phrases.**

```bash
grep -niE "behind your name|design.?build|book a consultation" src/app/trade/page.tsx
```

Expected: zero output.

- [ ] **Step 5: Commit.**

```bash
git add src/app/trade/page.tsx
git commit -m "refactor(trade): rewrite as cabinet-supply partnership (drop design-partner framing)"
```

---

## Task 12 — Reframe `/process` page

**Goal:** Trim the 7-step "design-build-install" flow to 5 ordering steps. Retitle. Drop `serviceType: "Design-Build Cabinetry"`.

**Files:**
- Modify: `src/app/process/page.tsx`

**Spec reference:** §8 (process disposition), §10.3 (schema change)

- [ ] **Step 1: Read the current `/process/page.tsx` to identify what to trim.**

The current page has 7 steps including "Installation by our own crew" and "Walkthrough & lifetime warranty" — these are install-heavy and read as design-build. The 5-step version drops them to "Delivery (install optional)."

- [ ] **Step 2: Replace the contents of `src/app/process/page.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Ordering a Custom Kitchen Works — Vitrin Cabinetery",
  description:
    "How Vitrin Cabinetery handles a custom kitchen order, end to end: discovery, in-home survey, design and quote, fabrication at our Quakertown bench, and delivery (install optional).",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    title: "Discovery call",
    duration: "30 minutes · free",
    body:
      "A focused phone call: project scope, location, budget tier, timeline, and whether Vitrin Stock or Vitrin Signature is the right tier. No pressure, no obligation.",
  },
  {
    title: "In-home survey & measurements",
    duration: "60–90 minutes · free",
    body:
      "We come to your home, measure the space (including utilities, ductwork, and what's behind the walls when we can), photograph current conditions, and talk through how you actually use the room.",
  },
  {
    title: "Design & quote",
    duration: "1–2 weeks",
    body:
      "We deliver 3D renderings, full elevations, and a written quote with transparent, line-item pricing. You see what you're paying for — door style, drawer count, hinge brand, wood species — line by line.",
  },
  {
    title: "Fabrication at our bench",
    duration: "4–8 weeks",
    body:
      "Your cabinets are built at our Quakertown shop by our team. Plywood boxes, dovetail solid-wood drawers, Blum soft-close hardware, finished in a dust-controlled spray booth. Weekly photo updates.",
  },
  {
    title: "Delivery — install optional",
    duration: "1 day",
    body:
      "Cabinets delivered to your home or jobsite. Install if you want us to — most contractors install themselves. Lifetime cabinet warranty included on the workmanship.",
  },
];

export default function ProcessPage() {
  const pageUrl = `${site.url}/process`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Custom Vitrin Signature kitchen with honed Calacatta marble island"
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
            <span aria-current="page" style={{ color: "#fff" }}>Process</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>How Ordering Works</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            One supplier, five steps.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            The full ordering path for a Vitrin Signature custom kitchen — from discovery call to delivery. Install is optional; your own contractor can install too.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <ol style={{ listStyle: "none", padding: 0 }}>
            {steps.map((s) => (
              <li key={s.title} className="step">
                <div className="step__num">{String(steps.indexOf(s) + 1).padStart(2, "0")}</div>
                <div className="step__body">
                  <h3>{s.title}</h3>
                  <div style={{ color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>
                    {s.duration}
                  </div>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Stock cabinets work differently.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            This 5-step process is for Vitrin Signature custom kitchens. For stock cabinets — pickup from the showroom this week — see <Link href="/cabinets/stock" className="text-link">Vitrin Stock</Link>.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=custom" className="btn-primary">Start a Custom Kitchen</Link>
            <Link href="/shop-tour" className="btn-secondary">Take the Workshop Tour</Link>
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
              { name: "Process", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Cabinet Manufacturing",
              description:
                "A 5-step process for ordering custom kitchens and bath cabinetry, manufactured at our Quakertown, PA shop. Installation is optional and offered separately.",
              url: pageUrl,
              serviceType: "Custom Cabinet Manufacturing",
            })
          ),
        }}
      />
    </main>
  );
}
```

Key changes vs the old file:
- Hero headline: "One team, seven steps, no hand-offs." → "One supplier, five steps."
- 7 steps → 5 steps. The "Installation by our own crew" and "Walkthrough & lifetime warranty" steps are absorbed into the new "Delivery — install optional" step.
- `serviceSchema()` now uses `serviceType: "Custom Cabinet Manufacturing"` instead of `"Design-Build Cabinetry"`.

- [ ] **Step 3: Build + lint + visual check at `http://localhost:3000/process`.**

```bash
npm run build && npm run lint
```

- [ ] **Step 4: Grep for the old serviceType string.**

```bash
grep -ni "Design-Build" src/app/process/page.tsx
```

Expected: zero output.

- [ ] **Step 5: Commit.**

```bash
git add src/app/process/page.tsx
git commit -m "refactor(process): reframe as 5-step ordering flow; drop Design-Build Cabinetry service type"
```

---

## Task 13 — Tone edit on `/about`

**Goal:** Tone-edit `/about` to remove "design-build-install" framing while keeping the craft / founder story. Lighter than a rewrite.

**Files:**
- Modify: `src/app/about/page.tsx`

**Spec reference:** §8 (about disposition)

- [ ] **Step 1: Read `/about/page.tsx` and locate the design-build phrases.**

```bash
grep -niE "design.?build|designed, built, and installed|behind your name|consultation|whole.?home remodel" src/app/about/page.tsx
```

For each hit:
- "design-build" / "design-build-install" → rewrite to "cabinet shop" or "cabinet supplier"
- "designed, built, and installed by our own hands" → "built at our Quakertown bench, sold from our showroom"
- "your kitchen project" / "your remodel" (in headings) → "your cabinets" or "your custom kitchen"
- "consultation" (as CTA) → "showroom visit" or "quote"

- [ ] **Step 2: Apply targeted edits using the Edit tool, one phrase at a time.**

For each hit found in Step 1, make a focused edit replacing the old phrase with the new wording. Preserve all other content — this is a tone pass, not a rewrite.

- [ ] **Step 3: Build + lint + visual check at `http://localhost:3000/about`.**

- [ ] **Step 4: Run the kill-list grep one more time.**

```bash
grep -niE "design.?build|designed, built, and installed|behind your name" src/app/about/page.tsx
```

Expected: zero output.

- [ ] **Step 5: Commit.**

```bash
git add src/app/about/page.tsx
git commit -m "refactor(about): tone edit — drop design-build-install framing"
```

---

## Task 14 — Update `/contact` for audience segmentation + query-param prefills

**Goal:** The contact form is the bottom of every funnel. Add an audience field, support `?type=` prefills that other pages link with, and update the page copy.

**Files:**
- Modify: `src/app/contact/page.tsx`

**Spec reference:** §8 (contact disposition)

- [ ] **Step 1: Read `src/app/contact/page.tsx` to understand the form structure.**

The current form likely uses Resend (in `package.json`) via a route handler. Audience segmentation is a new field; query-param prefill is a new client behavior.

- [ ] **Step 2: Add an audience-type field to the form.**

```tsx
// Inside the form JSX, near the top — adjust styling to match the existing form fields:
<div className="form-field">
  <label htmlFor="audience-type">I&apos;m a…</label>
  <select id="audience-type" name="audienceType" required>
    <option value="">— Select —</option>
    <option value="homeowner">Homeowner</option>
    <option value="contractor">General contractor / remodeler</option>
    <option value="installer">Kitchen &amp; bath installer</option>
    <option value="builder">Builder / developer</option>
    <option value="designer">Interior designer</option>
    <option value="architect">Architect</option>
    <option value="trade-other">Trade — other</option>
  </select>
</div>
```

- [ ] **Step 3: Add a project-type field driven by `?type=` query params.**

If the file is a Server Component, parse the query param via the `searchParams` prop. If it's a Client Component, use `useSearchParams()`.

```tsx
// Allowed types — keep this list aligned with all uses across the site.
const ALLOWED_TYPES = ["trade", "install", "custom", "stock", "kitchen"] as const;
type ProjectType = typeof ALLOWED_TYPES[number];

function normalizeType(input: string | string[] | undefined): ProjectType | "" {
  const v = Array.isArray(input) ? input[0] : input;
  return (ALLOWED_TYPES as readonly string[]).includes(v ?? "") ? (v as ProjectType) : "";
}
```

Use `normalizeType()` to derive the initial value for a hidden or pre-filled `projectType` form field. The values map to:
- `trade` — sent from /trade
- `install` — sent from /installation
- `custom` — sent from /cabinets/custom
- `stock` — sent from /cabinets/stock
- `kitchen` — sent from /cabinets/kitchen and other application pages

- [ ] **Step 4: Update the page heading + intro copy.**

Replace "Book a consultation" framing with "Get a quote / Schedule a showroom visit" framing per spec §9 voice rules. Sample heading: *"Get a cabinet quote — or just talk."*

- [ ] **Step 5: Update the Resend email template / route handler payload.**

If the form posts to a route handler in `src/app/api/contact/` (or similar), include `audienceType` and `projectType` in the Resend email body so the team can route inquiries. Find the handler:

```bash
find src/app/api -type f -name "*.ts" -o -name "*.tsx"
```

Open it, add the two new fields to the destructured form data + the email body string.

- [ ] **Step 6: Build + lint + visual check.**

```bash
npm run build && npm run lint
```

Visit:
- `http://localhost:3000/contact` (no prefill)
- `http://localhost:3000/contact?type=trade` (project-type pre-filled to "trade")
- `http://localhost:3000/contact?type=bogus` (invalid type — falls back to empty)

- [ ] **Step 7: Commit.**

```bash
git add src/app/contact/page.tsx src/app/api/contact/route.ts 2>/dev/null || true
git add src/app/contact/page.tsx
git commit -m "feat(contact): add audience segmentation + ?type= query-param prefill"
```

(Adjust the `git add` if the route handler lives at a different path.)

---

# PHASE C — Reorganize Navbar + Footer

## Task 15 — Update Footer to 4-column structure

**Goal:** Replace the 3-column "Services / Company / Contact" footer with the 4-column structure from spec §3.4. Old `/services/*` links go away; new `/cabinets/*`, `/installation`, `/showroom`, `/trade` links replace them. Town grid at the bottom stays.

**Files:**
- Modify: `src/components/Footer.tsx`

**Spec reference:** §3.4

- [ ] **Step 1: Replace the contents of `src/components/Footer.tsx`.**

```tsx
import React from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";

const cabinetsCol = [
  { href: "/cabinets/stock", label: "Stock cabinets" },
  { href: "/cabinets/custom", label: "Custom kitchens" },
  { href: "/cabinets/kitchen", label: "Kitchen" },
  { href: "/cabinets/bath", label: "Bath" },
  { href: "/cabinets/built-ins", label: "Built-ins" },
  { href: "/cabinets/aging-in-place", label: "Aging in Place" },
];

const buyersCol = [
  { href: "/process", label: "How ordering works" },
  { href: "/installation", label: "Installation" },
  { href: "/showroom", label: "Visit the showroom" },
  { href: "/shop-tour", label: "Workshop tour" },
];

const tradeCol = [
  { href: "/trade", label: "Trade program" },
  { href: "/trade#contractors", label: "For contractors" },
  { href: "/trade#installers", label: "For installers" },
  { href: "/trade#builders", label: "For builders" },
  { href: "/trade#designers", label: "For designers" },
];

const vitrinCol = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "4rem 0 2rem",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-secondary)",
        fontSize: "0.9rem",
      }}
    >
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
            {site.name}
          </div>
          <div>Cabinets, built and sold in Quakertown, PA. For homeowners and trade.</div>
          <div style={{ marginTop: "0.75rem" }}>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br/>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Cabinets</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {cabinetsCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>For Buyers</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {buyersCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>For Trade</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {tradeCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Vitrin</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {vitrinCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
          Cabinets by town
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.4rem 1rem" }}>
          {towns.map((t) => (
            <Link key={t.slug} href={`/custom-kitchen-cabinets/${t.slug}`} style={{ fontSize: "0.85rem" }}>
              {t.name}, PA
            </Link>
          ))}
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2rem",
          marginTop: "2rem",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
```

Key changes:
- Tagline: "Custom kitchens, baths, and cabinetry — designed, built, and installed in Quakertown, PA" → "Cabinets, built and sold in Quakertown, PA. For homeowners and trade."
- 3 columns → 5 columns total (brand + 4 nav cols)
- Old `/services/*` links removed; new Cabinets, For Buyers, For Trade, Vitrin columns added
- Phone + email moved into the brand column for visibility
- Town grid heading "Custom kitchens by town" → "Cabinets by town"

- [ ] **Step 2: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 3: Visual check on any page (e.g., `/`) — confirm new 5-column footer renders and all links resolve.**

- [ ] **Step 4: Commit.**

```bash
git add src/components/Footer.tsx
git commit -m "refactor(footer): replace services-centric footer with cabinets/trade IA"
```

---

## Task 16 — Update Navbar with Cabinets dropdown

**Goal:** Replace the 5-item flat nav with the new 5-item nav including a `Cabinets ▾` dropdown.

**Files:**
- Modify: `src/components/Navbar.tsx`

**Spec reference:** §3.3

- [ ] **Step 1: Read current Navbar.tsx — preserve the a11y behavior (skip link, escape closes mobile menu, aria-expanded).**

The current code uses a flat array. The new structure needs a dropdown. Approach: a hover-or-focus disclosure that's also keyboard operable. No new dependencies.

- [ ] **Step 2: Replace the contents of `src/components/Navbar.tsx`.**

```tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cabinetsLinks = [
  { href: "/cabinets/stock", label: "Vitrin Stock" },
  { href: "/cabinets/custom", label: "Vitrin Signature" },
  { href: "/cabinets/kitchen", label: "Kitchen" },
  { href: "/cabinets/bath", label: "Bath" },
  { href: "/cabinets/built-ins", label: "Built-ins" },
  { href: "/cabinets/aging-in-place", label: "Aging in Place" },
];

const topLevel: Array<{ href: string; label: string }> = [
  { href: "/trade", label: "Trade" },
  { href: "/showroom", label: "Showroom" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropdownOpen]);

  const close = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  const cabinetsActive = isActive("/cabinets");

  return (
    <nav
      className={`navbar ${isOpen ? "navbar--open" : ""}`}
      aria-label="Primary"
    >
      <Link href="/" className="navbar__brand" onClick={close}>
        Vitrin Cabinetery
      </Link>

      <button
        className="navbar__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span aria-hidden="true" className="navbar__toggle-bar" />
        <span aria-hidden="true" className="navbar__toggle-bar" />
      </button>

      <div id="primary-navigation" className="navbar__links">
        {/* Cabinets dropdown */}
        <div
          ref={dropdownRef}
          className="navbar__dropdown"
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            type="button"
            className={cabinetsActive ? "navbar__link--active" : undefined}
            aria-haspopup="menu"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((o) => !o)}
            onFocus={() => setDropdownOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Cabinets ▾
          </button>
          {dropdownOpen && (
            <div
              role="menu"
              className="navbar__dropdown-menu"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "0.5rem 0",
                minWidth: "200px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                zIndex: 100,
                marginTop: "0.5rem",
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setDropdownOpen(false);
                }
              }}
            >
              {cabinetsLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  role="menuitem"
                  style={{
                    display: "block",
                    padding: "0.5rem 1rem",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {topLevel.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={active ? "page" : undefined}
              className={active ? "navbar__link--active" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

Key changes:
- Adds the `Cabinets ▾` dropdown (mouse hover, focus, and click all open it).
- Closes on Escape (existing pattern) and on click outside (new).
- Keeps the existing skip-link / aria-expanded / mobile-toggle behavior intact.
- Top-level nav order: Cabinets · Trade · Showroom · Portfolio · Contact.

- [ ] **Step 3: Read `src/app/globals.css` for any navbar-specific styles that need updating.**

```bash
grep -n "navbar" src/app/globals.css | head -20
```

If the dropdown needs additional styles for mobile collapse, add a minimal block to globals.css. Default: on mobile (< 768px) the dropdown links flatten into the open mobile menu via the existing `.navbar--open .navbar__links` rules. Test in dev.

- [ ] **Step 4: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 5: Manual a11y + visual check.**

In dev:
- Tab into the nav. The Cabinets button should receive focus and open the dropdown via Enter or Space.
- Esc closes the dropdown and (if mobile) the mobile menu.
- Click outside the dropdown closes it.
- All dropdown items are reachable by keyboard.
- Mobile view (< 768px): dropdown links visible inside the open mobile menu.

- [ ] **Step 6: Commit.**

```bash
git add src/components/Navbar.tsx src/app/globals.css 2>/dev/null || git add src/components/Navbar.tsx
git commit -m "refactor(navbar): replace flat 5-item nav with Cabinets dropdown + new IA"
```

---

# PHASE D — Cutover

## Task 17 — Add 301 redirects in `next.config.ts`

**Goal:** Add permanent redirects from the four retired `/services/*` URLs to their new `/cabinets/*` homes. After this commit, old URLs serve 301 to the new pages — no 404s.

**Files:**
- Modify: `next.config.ts`

**Spec reference:** §10.4

- [ ] **Step 1: Read the Next.js 16 redirects docs.**

```bash
find node_modules/next/dist/docs -name "*redirect*" 2>/dev/null | head
```

Open any redirects/rewrites doc and confirm the `redirects()` async function signature. (The function returns an array of `{ source, destination, permanent }` objects in v16.)

- [ ] **Step 2: Update `next.config.ts` to add the `redirects()` function.**

Replace the existing file with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/services/kitchen-cabinets",
        destination: "/cabinets/kitchen",
        permanent: true,
      },
      {
        source: "/services/bathroom-vanities",
        destination: "/cabinets/bath",
        permanent: true,
      },
      {
        source: "/services/living-room-units",
        destination: "/cabinets/built-ins",
        permanent: true,
      },
      {
        source: "/services/aging-in-place",
        destination: "/cabinets/aging-in-place",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Build.**

```bash
npm run build
```

Expected: build succeeds. The build output should list the 4 redirects under "Redirects."

- [ ] **Step 4: Verify the redirects work in dev.**

```bash
npm run dev
```

In a second terminal:

```bash
for url in /services/kitchen-cabinets /services/bathroom-vanities /services/living-room-units /services/aging-in-place; do
  echo "=== $url ==="
  curl -sI "http://localhost:3000$url" | head -3
done
```

Expected: each response shows `HTTP/1.1 308 Permanent Redirect` (Next.js uses 308 for `permanent: true` by default, which is semantically equivalent to 301) and the `location:` header points to the new `/cabinets/*` URL.

Stop dev.

- [ ] **Step 5: Commit.**

```bash
git add next.config.ts
git commit -m "chore(redirects): 301 services/* URLs to new cabinets/* URLs"
```

---

## Task 18 — Update sitemap; delete `/services/*` page files

**Goal:** Remove the four retired `/services/*` URLs from the sitemap, add the new `/cabinets/*`, `/installation`, `/showroom` URLs, then delete the old `/services/*` page files. Redirects (from Task 17) take over.

**Files:**
- Modify: `src/app/sitemap.ts`
- Delete: `src/app/services/kitchen-cabinets/page.tsx`
- Delete: `src/app/services/bathroom-vanities/page.tsx`
- Delete: `src/app/services/living-room-units/page.tsx`
- Delete: `src/app/services/aging-in-place/page.tsx`
- Delete: `src/app/services/` directory (once empty)

**Spec reference:** §3.1, §10.7, §11

- [ ] **Step 1: Replace the `services` block in `src/app/sitemap.ts` with the new cabinets block.**

Open `src/app/sitemap.ts`. Find the `services` array (lines 23–28 of the original file). Replace it entirely:

```ts
  const cabinets: MetadataRoute.Sitemap = [
    { url: `${base}/cabinets`,                lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/cabinets/stock`,          lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/cabinets/custom`,         lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/cabinets/kitchen`,        lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/cabinets/bath`,           lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/cabinets/built-ins`,      lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/cabinets/aging-in-place`, lastModified: now, changeFrequency: "monthly", priority: 0.8  },
  ];

  const supporting: MetadataRoute.Sitemap = [
    { url: `${base}/installation`, lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/showroom`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
```

Update the return statement at the bottom of the file:

```ts
  return [...core, ...cabinets, ...supporting, ...pillars, ...townPages, ...projectPages, ...guidePages];
```

Confirm the file no longer references `services`. Run:

```bash
grep -n "services" src/app/sitemap.ts
```

Expected: zero output.

- [ ] **Step 2: Build to confirm the sitemap is valid.**

```bash
npm run build
```

- [ ] **Step 3: Verify the new sitemap URLs.**

```bash
npm run dev
```

```bash
curl -s http://localhost:3000/sitemap.xml | grep -E "cabinets|installation|showroom|services" | head -20
```

Expected: the cabinets/*, installation, showroom URLs appear; no `/services/*` URL appears. Stop dev.

- [ ] **Step 4: Delete the four `/services/*` page files.**

```bash
rm src/app/services/kitchen-cabinets/page.tsx
rm src/app/services/bathroom-vanities/page.tsx
rm src/app/services/living-room-units/page.tsx
rm src/app/services/aging-in-place/page.tsx
```

- [ ] **Step 5: Remove the now-empty `/services/*` subdirectories and the parent.**

```bash
rmdir src/app/services/kitchen-cabinets src/app/services/bathroom-vanities src/app/services/living-room-units src/app/services/aging-in-place
rmdir src/app/services
```

- [ ] **Step 6: Build + lint.**

```bash
npm run build && npm run lint
```

Expected: build succeeds. The 4 old routes no longer exist as page files; the redirects from Task 17 take over.

- [ ] **Step 7: Verify redirects still work after deletion.**

```bash
npm run dev
curl -sI http://localhost:3000/services/kitchen-cabinets | head -3
```

Expected: 308 redirect to `/cabinets/kitchen`. Stop dev.

- [ ] **Step 8: Commit.**

```bash
git add src/app/sitemap.ts
git add -A src/app/services 2>/dev/null || true
git commit -m "chore(sitemap): swap services/* for cabinets/* + supporting URLs; delete old services pages"
```

---

## Task 19 — Edit `/portfolio`, `/shop-tour`, and town pages

**Goal:** Three tone-only edits that finish Phase D. Portfolio gets filter chips (UI), shop-tour gets reframed as "workshop tour" (distinct from showroom), and the town pages get dual-tier "Stock + Custom" content blocks.

This is one task with three sub-edits because each individually is small.

**Files:**
- Modify: `src/app/portfolio/page.tsx`
- Modify: `src/app/shop-tour/page.tsx`
- Modify: `src/app/custom-kitchen-cabinets/[town]/page.tsx`

**Spec reference:** §8 (portfolio + shop-tour disposition), §10.1 (town pages)

### Sub-edit 19a: Portfolio filter chips

- [ ] **Step 1: Read `src/app/portfolio/page.tsx`. Confirm whether it's a Server Component or Client Component.**

If it's a Server Component, the filter UI needs to either become a Client Component (via `"use client"` at the top, or a sub-component) or use query params + Server Component re-render. Simplest: extract the project grid into a small Client Component that handles the filter state, leaving the page itself as a Server Component for SEO.

- [ ] **Step 2: Add the filter chip strip above the existing project grid.**

If the project list is `projects` from `@/lib/projects`, add a category-tag field per project (if not already there) or derive it. Filter values:
- All
- Custom kitchens
- Stock projects
- Trade installs
- Bath
- Built-ins

- [ ] **Step 3: Build + lint + visual check at `http://localhost:3000/portfolio`.**

### Sub-edit 19b: Shop-tour reframe

- [ ] **Step 4: Read `src/app/shop-tour/page.tsx`. Find any "showroom" wording that conflicts with the new `/showroom` page.**

```bash
grep -ni "showroom" src/app/shop-tour/page.tsx
```

- [ ] **Step 5: Edit `/shop-tour` to clarify it's the *workshop* tour (the place where Vitrin Signature is built), distinct from `/showroom` (the place where you buy).**

Suggested headline change: *"Shop tour"* → *"Workshop tour"*.

Add a cross-link to `/showroom` near the top of the page: *"Looking to visit the showroom instead? See [Showroom →](/showroom)"*.

- [ ] **Step 6: Build + lint + visual check at `http://localhost:3000/shop-tour`.**

### Sub-edit 19c: Town pages — dual-tier content

- [ ] **Step 7: Read `src/app/custom-kitchen-cabinets/[town]/page.tsx`.**

This page renders for all 12 towns. Find the main content section. Add two new blocks: "Stock cabinets in [town]" + "Custom kitchens in [town]" — each with a paragraph + link to `/cabinets/stock` and `/cabinets/custom` respectively.

- [ ] **Step 8: Edit the page to introduce the dual-tier blocks.**

Sample structure to insert after the existing hero:

```tsx
<section>
  <div className="container">
    <div className="section-center">
      <span className="eyebrow">Two ways to buy in {town.name}</span>
      <h2 className="section-heading">Stock and custom cabinets — one Quakertown shop, both delivered to {town.name}.</h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
      <Link href="/cabinets/stock" className="card">
        <h3 className="card__title">Stock cabinets in {town.name}</h3>
        <p className="card__desc">
          In-showroom inventory ready for pickup or delivery to {town.name}. Plywood boxes, Blum hardware, dovetail drawers. Best for rentals, bath vanities, mudrooms, and fast-turn contractor jobs.
        </p>
        <div className="card__more">Browse Vitrin Stock →</div>
      </Link>
      <Link href="/cabinets/custom" className="card">
        <h3 className="card__title">Custom kitchens in {town.name}</h3>
        <p className="card__desc">
          Built at our Quakertown bench to your kitchen's exact dimensions. Delivered to {town.name} when ready — install if you'd like us to, or your contractor's crew if you wouldn't.
        </p>
        <div className="card__more">Order a Vitrin Signature kitchen →</div>
      </Link>
    </div>
  </div>
</section>
```

- [ ] **Step 9: Add the CabinetStore schema to the town page.**

Inside the existing `<script type="application/ld+json">` block (or as a new sibling script), add `cabinetStoreSchema`:

```tsx
import { cabinetStoreSchema } from "@/lib/schema";
// ...
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: toJsonLd(cabinetStoreSchema) }}
/>
```

- [ ] **Step 10: Build + lint + visual check.**

```bash
npm run build && npm run lint
```

Visit two town pages to confirm:
- `http://localhost:3000/custom-kitchen-cabinets/quakertown`
- `http://localhost:3000/custom-kitchen-cabinets/doylestown`

Confirm both show the new "Two ways to buy in [town]" block and that the schema includes the cabinet-store payload (View Source → search for `FurnitureStore`).

### Final commit for Task 19

- [ ] **Step 11: Commit all three sub-edits together.**

```bash
git add src/app/portfolio/page.tsx src/app/shop-tour/page.tsx src/app/custom-kitchen-cabinets/[town]/page.tsx
git commit -m "refactor(content): portfolio filter chips, shop-tour reframe, town pages dual-tier"
```

---

# PHASE E — New SEO guides

## Task 20 — Add 5 new guide pages

**Goal:** Create the five new guides from spec §10.6. Each is a long-form SEO capture page. This is a content-heavy task — the engineer writes a real ~800-1500 word guide per topic, following the editorial voice in spec §9. We're scaffolding the routes + metadata + skeleton; the content can ship in a follow-up if needed.

**Files:**
- Create: `src/app/guides/setting-up-a-trade-cabinet-account/page.tsx`
- Create: `src/app/guides/stock-vs-custom-cabinets-when-to-choose-each/page.tsx`
- Create: `src/app/guides/buying-cabinets-for-a-spec-home/page.tsx`
- Create: `src/app/guides/cabinet-delivery-and-jobsite-coordination/page.tsx`
- Create: `src/app/guides/contractor-cabinet-pricing-explained/page.tsx`

**Spec reference:** §10.6

- [ ] **Step 1: Read an existing guide for the page pattern.**

```bash
ls src/app/guides/
find src/app/guides -name "page.tsx" -not -path "*/node_modules/*" | head -3
```

Open the first one to see the metadata + content pattern. Copy that pattern for the new guides.

- [ ] **Step 2: Update `src/lib/guides.ts` to register the 5 new guides.**

```bash
cat src/lib/guides.ts
```

The file likely exports a `guides` array with `slug`, `title`, `description`, `datePublished` fields. Add five new entries:

```ts
// Inside the existing guides array — append these entries:
{
  slug: "setting-up-a-trade-cabinet-account",
  title: "Setting Up a Trade Cabinet Account at Vitrin",
  description: "How contractors, builders, and installers set up a trade account with Vitrin Cabinetery — application, pricing sheet, and net terms after first order.",
  datePublished: "2026-05-12",
},
{
  slug: "stock-vs-custom-cabinets-when-to-choose-each",
  title: "Stock vs. Custom Cabinets — When to Choose Each",
  description: "When stock cabinets are the smart pick and when custom is worth the wait. A decision framework from a shop that sells both.",
  datePublished: "2026-05-12",
},
{
  slug: "buying-cabinets-for-a-spec-home",
  title: "Buying Cabinets for a Spec Home — Builder's Guide",
  description: "How builders and developers source cabinets for spec homes — volume pricing, lead times, and design flexibility for buyers-in-tow.",
  datePublished: "2026-05-12",
},
{
  slug: "cabinet-delivery-and-jobsite-coordination",
  title: "Cabinet Delivery and Jobsite Coordination",
  description: "Will-call pickup, jobsite delivery, lift-gate, and inside delivery — how Vitrin gets cabinets to your install date without breaking your schedule.",
  datePublished: "2026-05-12",
},
{
  slug: "contractor-cabinet-pricing-explained",
  title: "Contractor Cabinet Pricing Explained",
  description: "How trade pricing works at Vitrin — tiered by volume, account terms, and what to expect on your first pricing sheet.",
  datePublished: "2026-05-12",
},
```

- [ ] **Step 3: Create the 5 page files using a shared template.**

For each slug, create `src/app/guides/<slug>/page.tsx` with this skeleton (replacing `SLUG`, `TITLE`, `DESCRIPTION`, and the `<article>` body with the real content):

```tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, toJsonLd } from "@/lib/schema";

const SLUG = "<slug-here>";
const TITLE = "<title-here>";
const DESCRIPTION = "<description-here>";

export const metadata: Metadata = {
  title: `${TITLE} — Vitrin Cabinetery`,
  description: DESCRIPTION,
  alternates: { canonical: `/guides/${SLUG}` },
};

export default function GuidePage() {
  const pageUrl = `${site.url}/guides/${SLUG}`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "40vh", padding: "180px 0 60px" }}>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/guides" style={{ color: "inherit" }}>Guides</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>{TITLE}</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Guide</span>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "1.25rem", color: "#fff" }}>
            {TITLE}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            {DESCRIPTION}
          </p>
        </div>
      </section>

      <article>
        <div className="container--narrow prose">
          {/* TODO(content): Replace this comment with the body of the guide.
              Voice rules from spec §9:
              - Plainspoken, not poetic
              - Numbers when possible
              - Transactional verbs (buy, pick up, order, quote, ship, deliver)
              - Trade-respectful — never describe Vitrin doing what trade does for themselves
              - No emojis, no exclamation marks
              Target length: 800–1500 words.
          */}
          <p>This guide is being written. Check back soon — or <Link href="/contact" className="text-link">ask us directly</Link> in the meantime.</p>
        </div>
      </article>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Guides", url: `${site.url}/guides` },
              { name: TITLE, url: pageUrl },
            ])
          ),
        }}
      />
    </main>
  );
}
```

Important: the body content (the `<article>` block) is a `TODO(content)` block in this scaffold. **This is the only intentional TODO in this plan** — long-form SEO content is a sub-project of its own. Mark it clearly so a follow-up task can capture it.

- [ ] **Step 4: Build + lint.**

```bash
npm run build && npm run lint
```

- [ ] **Step 5: Verify all 5 guides are reachable.**

```bash
npm run dev
```

Visit each of:
```
http://localhost:3000/guides/setting-up-a-trade-cabinet-account
http://localhost:3000/guides/stock-vs-custom-cabinets-when-to-choose-each
http://localhost:3000/guides/buying-cabinets-for-a-spec-home
http://localhost:3000/guides/cabinet-delivery-and-jobsite-coordination
http://localhost:3000/guides/contractor-cabinet-pricing-explained
```

Confirm: each renders the hero + the placeholder paragraph. Also confirm `/guides` index lists all 5 (if the index renders from `src/lib/guides.ts`).

Stop dev.

- [ ] **Step 6: Verify sitemap includes the new guides.**

```bash
curl -s http://localhost:3000/sitemap.xml | grep -E "setting-up-a-trade|stock-vs-custom|buying-cabinets-for-a-spec|cabinet-delivery|contractor-cabinet-pricing" | wc -l
```

Expected: 5.

- [ ] **Step 7: Commit.**

```bash
git add src/lib/guides.ts src/app/guides/setting-up-a-trade-cabinet-account src/app/guides/stock-vs-custom-cabinets-when-to-choose-each src/app/guides/buying-cabinets-for-a-spec-home src/app/guides/cabinet-delivery-and-jobsite-coordination src/app/guides/contractor-cabinet-pricing-explained
git commit -m "feat(guides): scaffold 5 new trade-channel SEO guides (content TODOs)"
```

---

# PHASE F — Final verification

## Task 21 — Site-wide kill-list grep

**Goal:** Acceptance criterion 9 from spec §12 — *"Site-wide grep for kill-list phrases returns zero matches in user-facing copy."* Find and fix any remaining instances.

**Files:** any user-facing copy file that still hits a kill-list phrase.

**Spec reference:** §9.1, §12 (acceptance criterion 9)

- [ ] **Step 1: Run the kill-list grep across all user-facing files.**

```bash
grep -rniE "design.?build|designed, built, and installed|behind your name|book a consultation|whole.?home remodel|turnkey kitchen" src/app src/components src/lib 2>/dev/null
```

Expected after a clean run: zero output, OR only matches inside files where the phrase is intentional (e.g., a guide that *quotes* "design-build" as a term being defined — that's fine; flag and accept).

- [ ] **Step 2: For each unintentional match, replace the phrase.**

Use the vocabulary use-list in spec §9.2. Pick the closest preferred term. Edit the file. Verify by re-running the grep.

- [ ] **Step 3: Build + lint after fixes.**

```bash
npm run build && npm run lint
```

- [ ] **Step 4: Commit if any files were modified.**

```bash
git status --short
# If anything is modified:
git add <modified-files>
git commit -m "chore(copy): remove remaining kill-list phrases site-wide"
```

If nothing was modified (grep was clean), skip the commit and proceed to Task 22.

---

## Task 22 — Acceptance criteria walkthrough

**Goal:** Walk through every acceptance criterion in spec §12 and confirm it passes. This is the final gate before considering the pivot shipped.

**Files:** none (verification only)

**Spec reference:** §12

- [ ] **Step 1: AC1 — Hero rewrite (contains "sold," does NOT contain "designed, built, and installed").**

```bash
grep -ni "sold" src/app/page.tsx | head -3
grep -ni "designed, built, and installed" src/app/page.tsx
```

Expected: first command shows matches; second returns nothing.

- [ ] **Step 2: AC2 — Two-track CTA on the homepage hero.**

```bash
grep -nE "/cabinets/stock|/cabinets/custom" src/app/page.tsx | head -4
```

Expected: both URLs appear (CTAs in the hero).

- [ ] **Step 3: AC3 — Trade page headline + audience order + no "behind your name."**

```bash
grep -n "Your cabinet supplier in Quakertown" src/app/trade/page.tsx
grep -n "behind your name" src/app/trade/page.tsx
grep -nE 'id="(contractors|installers|builders|designers|architects)"' src/app/trade/page.tsx
```

Expected: headline present; "behind your name" returns zero; all 5 anchor IDs present.

- [ ] **Step 4: AC4 — All 4 `/services/*` URLs return 308/301.**

```bash
npm run build  # produce production output
npm run start &
SERVER_PID=$!
sleep 3
for url in /services/kitchen-cabinets /services/bathroom-vanities /services/living-room-units /services/aging-in-place; do
  status=$(curl -so /dev/null -w "%{http_code}" "http://localhost:3000$url")
  echo "$url → $status"
done
kill $SERVER_PID
```

Expected: all four print `308` (Next.js default for permanent: true). 301 also acceptable if config differs.

- [ ] **Step 5: AC5 — `/installation` is reachable but NOT in the primary navbar.**

```bash
grep -n "/installation" src/components/Navbar.tsx
grep -n "/installation" src/components/Footer.tsx
```

Expected: zero matches in Navbar.tsx (not in primary nav); at least one in Footer.tsx (footer-only as designed).

- [ ] **Step 6: AC6 — All 9 new pages have metadata.**

```bash
for p in src/app/cabinets/page.tsx src/app/cabinets/stock/page.tsx src/app/cabinets/custom/page.tsx src/app/cabinets/kitchen/page.tsx src/app/cabinets/bath/page.tsx src/app/cabinets/built-ins/page.tsx src/app/cabinets/aging-in-place/page.tsx src/app/installation/page.tsx src/app/showroom/page.tsx; do
  echo "=== $p ==="
  grep -A1 "export const metadata" "$p" | head -4
done
```

Expected: each page shows a `Metadata` export with `title` and `description`.

- [ ] **Step 7: AC7 — Schema cleanup on `/process`; cabinet-store schema on `/` and `/showroom`.**

```bash
grep -n "Design-Build" src/app/process/page.tsx
grep -n "cabinetStoreSchema" src/app/page.tsx src/app/showroom/page.tsx
```

Expected: no "Design-Build" in process; `cabinetStoreSchema` present in both homepage and showroom.

- [ ] **Step 8: AC8 — Sitemap includes new URLs and excludes retired ones.**

```bash
npm run dev &
DEV_PID=$!
sleep 3
curl -s http://localhost:3000/sitemap.xml | grep -E "cabinets|installation|showroom" | head -10
echo "--- expect zero hits below ---"
curl -s http://localhost:3000/sitemap.xml | grep -E "services/(kitchen-cabinets|bathroom-vanities|living-room-units|aging-in-place)"
kill $DEV_PID
```

Expected: ≥9 hits for new URLs; zero hits for retired URLs.

- [ ] **Step 9: AC9 — Site-wide kill-list grep returns zero.**

```bash
grep -rniE "design.?build|designed, built, and installed|behind your name|book a consultation" src/app src/components 2>/dev/null
```

Expected: zero output (or only intentional matches — flag any in a comment).

- [ ] **Step 10: AC10 — Final build + lint.**

```bash
npm run build && npm run lint
```

Expected: both succeed.

- [ ] **Step 11: Mark the pivot complete.**

Tag the release for clarity:

```bash
git tag -a v1.0-cabinet-supplier-pivot -m "Cabinet supplier pivot complete — all 10 acceptance criteria pass"
git log --oneline -25
```

The pivot is shipped. The site now reads as a Quakertown cabinet supplier serving both retail and trade audiences, with installation as a quiet optional add-on.

---

# Plan self-review

After writing the complete plan above, looking at it with fresh eyes.

### Spec coverage check

Walked through each section of `docs/superpowers/specs/2026-05-12-cabinet-supplier-pivot-design.md`:

| Spec section | Covered by |
|---|---|
| §3.1 IA — new routes | Tasks 3–8 (creation), 18 (sitemap), 17 (redirects) |
| §3.2 retired routes | Task 17 (redirects), Task 18 (deletion) |
| §3.3 navbar | Task 16 |
| §3.4 footer | Task 15 |
| §4 homepage | Task 10 |
| §5 cabinet tier pages | Tasks 3, 4, 5, 6 |
| §6 trade page | Task 11 |
| §7 installation page | Task 7 |
| §8 disposition matrix | Tasks 10 (/), 11 (/trade), 12 (/process), 13 (/about), 14 (/contact), 19 (/portfolio, /shop-tour, town pages), 18 (services retirement), 7 (/installation), 8 (/showroom), 6 (application pages) |
| §9 voice & language rules | Tasks 4, 6, 10, 11, 13, 21 (kill-list grep) |
| §10.1 town pages retarget | Task 19c |
| §10.2 new keyword universe | Reflected in page copy (Tasks 4, 7, 10, 11) and guides (Task 20) |
| §10.3 schema changes | Task 1 (helpers), Task 12 (/process serviceType), Task 8 (showroom), Task 10 (homepage), Task 19 (town pages) |
| §10.4 redirect map | Task 17 |
| §10.5 GBP changes | Not a code change — flagged in spec §13 as operational. Reference only. |
| §10.6 5 new guides | Task 20 |
| §10.7 sitemap | Task 18 |
| §11 file-level surface | All tasks map to files in §11 |
| §12 acceptance criteria | Task 22 walks all 10 |
| §13 out-of-scope items | Not code — flagged in spec, not implemented. Correct. |
| §14 risks | Mitigated by additive-first ordering (Phase A before Phase D) |

No spec gaps detected.

### Placeholder scan

Searched the plan for "TBD", "TODO", "implement later", "add appropriate error handling," "similar to Task N."

- **One intentional `TODO(content)` in Task 20** — the body of each guide is left as a content TODO because long-form copy is genuinely a follow-up content sub-project, not a coding task. Marked explicitly in the plan as the *only* TODO. Acceptable.
- "Address coming soon" in Task 8's showroom copy — not a TODO; this is intentional production copy per the locked decision in spec §2 (showroom address is TBD).
- Placeholder SKU prices (`"$X"`) in Tasks 4, 10 — intentional, flagged in the spec (Section 13 operational item: "Inventory truth"), production copy will hold them as placeholders until real inventory lands.
- Placeholder image src `/images/placeholder.png` in Task 4 — flagged in the spec (Section 13 photography item). Engineer should create or stub `public/images/placeholder.png` if missing.

No accidental placeholders.

### Type consistency

- `cabinetStoreSchema` defined in Task 1, used in Tasks 8, 10, 19. Same name across.
- `productSchema()`, `offerSchema()` defined in Task 1 — currently unused in the plan (no concrete stock SKUs to render schema for at launch). Acceptable: helpers exist for the future task of wiring real SKUs.
- `ProjectType` enum in Task 14: `"trade" | "install" | "custom" | "stock" | "kitchen"` — these are the only `?type=` values linked from other tasks (Task 4 uses `?type=stock`, Task 5 uses `?type=custom`, Task 7 uses `?type=install`, Task 11 uses `?type=trade`, Task 6 uses `?type=kitchen`). Consistent.
- Anchor IDs on `/trade`: `#contractors`, `#installers`, `#builders`, `#designers`, `#architects` — referenced from homepage Task 10 (`/trade#designers`). Consistent.
- Component names: `TradeCalloutStrip`, `ConstructionSpecs`, `InstallOptionalNote` — same names used across Tasks 2, 3, 4, 5, 10.

No type/name drift detected.

### Scope check

22 tasks total. Each phase ships a coherent slice:
- Phase A (1–9): site is larger; no breaking changes.
- Phase B (10–14): site reads as cabinet supplier; old links still resolve via redirects-coming-soon.
- Phase C (15–16): navbar/footer updated.
- Phase D (17–19): cutover — redirects, sitemap, services deletion, town pages.
- Phase E (20): SEO content scaffolding.
- Phase F (21–22): verification.

Scope is appropriate for one plan. No subsystem should be split out.

---

**End of plan.**
