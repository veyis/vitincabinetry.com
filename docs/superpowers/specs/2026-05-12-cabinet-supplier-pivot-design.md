---
name: cabinet-supplier-pivot
description: Repositions vitrincabinetry.com from a design-build-install firm to a Quakertown cabinet supplier with two product tiers (Stock + Signature), serving both retail and trade. Optional installation; quiet contractor-friendly framing throughout.
metadata:
  type: design-spec
  date: 2026-05-12
  status: drafted-awaiting-approval
---

# Cabinet Supplier Pivot — Design Spec

**Project:** vitrincabinetry.com
**Approach:** C — Two-Tier Cabinet House (selected over A "pure supplier" and B "workshop that sells what it builds")
**Companion artifact:** `cabinet-supplier-pivot.html` (visual brief at project root)
**Companion strategy doc:** `strategy.md` (existing SEO + content roadmap — mostly retained, see Section 8)

---

## 1. Problem statement

The current Vitrin site is built around the promise *"Designed, built, and installed by our own hands."* That single sentence is also the sentence that scares contractors away — it claims the **whole-job revenue** that contractors live on. The client has decided to:

1. Drop the design-build-install framing.
2. Reposition Vitrin as a Quakertown **cabinet supplier** — selling both **stock cabinets** (ready from the showroom) and **Vitrin-built custom kitchens**.
3. Keep installation available on request but never as the headline.
4. Make the trade channel (contractors, installers, builders, designers, architects) a first-class audience.

This spec defines the website changes required to support that pivot.

---

## 2. Locked decisions

| # | Decision | Value |
|---|---|---|
| 1 | Product model | Mix — stock + Vitrin-built custom |
| 2 | Audience positioning | Unified "cabinet supplier" — one homepage, both audiences |
| 3 | Installation visibility | Available but quiet — footer-only link, single subordinate page |
| 4 | Showroom address | TBD — copy stays vague until address lands |
| 5 | Tier names | **Vitrin Signature** (custom) and **Vitrin Stock** (ready) |
| 6 | Strategic approach | C — Two-Tier Cabinet House (explicit tier choice above the fold) |
| 7 | Trade audience order | Contractors → Installers → Builders → Designers → Architects |
| 8 | Net terms | "Account terms available after first paid order" |
| 9 | Trade pricing sheet | Real PDF, tiered, sent privately on first quote after approval |

---

## 3. Information Architecture

### 3.1 New route map

```
/                                       (rewrite — two-track hero)
/cabinets                               (NEW — overview + comparison)
  /cabinets/stock                       (NEW — Vitrin Stock detail)
  /cabinets/custom                      (NEW — Vitrin Signature detail)
  /cabinets/kitchen                     (NEW — from /services/kitchen-cabinets)
  /cabinets/bath                        (NEW — from /services/bathroom-vanities)
  /cabinets/built-ins                   (NEW — from /services/living-room-units)
  /cabinets/aging-in-place              (NEW — from /services/aging-in-place)
/trade                                  (rewrite — supply partner framing)
/installation                           (NEW — minimal, footer-only)
/showroom                               (NEW — "visit us")
/portfolio                              (edit — add filter chips)
/process                                (reframe — "how ordering works")
/about                                  (edit — tone)
/guides                                 (keep + add 5 new guides)
/contact                                (update — audience segmentation)
/custom-kitchen-cabinets/[town] × 12    (retarget content; keep URLs)
/shop-tour                              (keep, reframe as workshop tour)
```

### 3.2 Retired routes (with 301 redirects)

| Old URL | New URL |
|---|---|
| `/services/kitchen-cabinets` | `/cabinets/kitchen` |
| `/services/bathroom-vanities` | `/cabinets/bath` |
| `/services/living-room-units` | `/cabinets/built-ins` |
| `/services/aging-in-place` | `/cabinets/aging-in-place` |

Configure in `next.config.ts` via the `redirects()` function with `permanent: true`.

### 3.3 Primary navbar (max 5 items)

```
Cabinets ▾   Trade   Showroom   Portfolio   Contact
```

The `Cabinets ▾` dropdown reveals: **Stock · Custom · Kitchen · Bath · Built-ins · Aging in Place**.

Implementation note: today's `src/components/Navbar.tsx` is a flat array of links. A dropdown requires either a small JS-controlled menu, a CSS-only hover-or-focus disclosure, or restructuring the route group rendering. Either approach is acceptable as long as it remains keyboard-accessible (current Navbar already has good a11y bones — preserve them).

### 3.4 Footer reorganization

Move secondary nav into a structured footer with four columns:

- **Cabinets:** Stock · Custom · Kitchen · Bath · Built-ins · Aging in Place
- **For Buyers:** How ordering works · Installation · Visit the showroom · Workshop tour
- **For Trade:** Trade program · Pricing & account · Delivery & pickup
- **Vitrin:** About · Portfolio · Guides · Contact

---

## 4. Homepage redesign (`src/app/page.tsx`)

### 4.1 Hero

- **Eyebrow:** *Quakertown's Cabinet Shop*
- **Headline:** **"Cabinets, built and sold in Quakertown."**
- **Subhead:** *"Two ways to buy — pick from in-stock door styles in our showroom, or order a kitchen custom-built at our bench. For homeowners, contractors, designers, and builders across Bucks County and the Lehigh Valley."*
- **CTAs (side by side):**
  - `Browse Stock Cabinets →` → `/cabinets/stock`
  - `Order a Custom Kitchen →` → `/cabinets/custom`
- **Hero media:** keep existing kitchen video temporarily; replace with showroom/workshop shot when new photography is available (Section 9, item 1).

### 4.2 Pillar strip (replaces current 3-pillar block)

1. **Built in Quakertown.** Every Vitrin Signature cabinet is milled, assembled, and finished at our shop. Plywood boxes, dovetail drawers, Blum hardware.
2. **Two tiers, one shop.** Vitrin Stock ships fast from the showroom floor. Vitrin Signature is built to your kitchen's exact dimensions. Same quality bar.
3. **Yours to install — or we'll do it.** Most contractors install our cabinets themselves. Homeowners who'd rather not can add installation as an option.

### 4.3 "Who we sell to" strip (NEW section)

Three equal cards:
- **Homeowners** → `/cabinets`
- **Contractors & installers** → `/trade`
- **Designers & architects** → `/trade#designers`

### 4.4 "From the showroom" stock-feature strip (NEW)

3-up grid of featured Vitrin Stock door styles. Each tile: photo + door-style name + finish + "from $X" + "Available now" badge + link to `/cabinets/stock`. **Launched as a placeholder block** (TBD product photos & SKUs) — replace incrementally as inventory lands.

### 4.5 Custom kitchen teaser (replaces current Services teaser)

One large image, one paragraph, one CTA. Headline: *"When stock isn't right, we build it."*

### 4.6 Trade callout strip (NEW — full-width dark band)

> **Bulk pricing for contractors, builders, and trade.** No minimums on the first order. → Apply for trade pricing

### 4.7 Process snapshot (kept, trimmed)

Reduce 7 steps to 5: Discovery → In-home survey → Design & quote → Fabrication at our bench → Delivery (install optional). Retitle: *"How ordering a custom kitchen works."*

### 4.8 Stats

Keep. Swap *"Kitchens Delivered"* → **"Cabinets Built"**.

### 4.9 Local proof / town grid

Keep verbatim.

### 4.10 Final CTA

Replace single *"Book a Consultation"* CTA with two CTAs:
- `Visit the Showroom` (primary)
- `Get a Cabinet Quote` (secondary)

---

## 5. Cabinet tier pages

### 5.1 `/cabinets` — overview & comparison

Page blocks:

1. **Hero** — *"Two ways to buy cabinets. One Quakertown shop."*
2. **Comparison table** (the centerpiece — see Section 5.1.a)
3. **"How to choose" decision strip** — three prompts → respective destination pages
4. **Shared materials & construction** block (reusable spec content)
5. **Trade callout band** (identical to homepage)
6. **CTA** — "Visit the showroom" + "Get a quote"

#### 5.1.a Comparison table content

| | **Vitrin Stock** | **Vitrin Signature** |
|---|---|---|
| Lead time | In stock — pick up this week | 4–8 weeks |
| Sizes | Fixed cabinet box sizes | Built to your exact dimensions |
| Door styles | Curated lineup (≈6 styles) | Any style we make |
| Finishes | Curated palette | Full paint / stain match |
| Construction | Plywood box · Blum hardware · dovetail drawers | *Same* |
| Price tier | $ | $$–$$$ |
| Trade pricing | Yes | Yes |
| Install | Optional add-on | Optional add-on |
| Best for | Bath vanities · laundry · mudrooms · rentals · spec homes · contractor jobs | Whole kitchens · custom built-ins · designed spaces |

### 5.2 `/cabinets/stock` — Vitrin Stock detail

Page blocks (top to bottom):

1. **Hero** — *"Stock cabinets, ready to take home."* Photo: showroom shelf of finished cabinets.
2. **What's in stock** — grid of door-style + finish tiles. Tile = photo + style/finish name + "from $X" + "Available now" badge. Initial release: 4–6 placeholder tiles flagged TBD until real SKUs land.
3. **Cabinet sizes available** — list/grid of standard box sizes (base 12/15/18/24/30/36, wall 30/36/42, pantry, vanity bases, etc.).
4. **Construction specs** — plywood, dovetail, Blum. *Identical bar to Signature.*
5. **Pickup, delivery, will-call** — transactional block (lead-time-to-pickup, delivery radius, jobsite delivery option).
6. **Trade pricing strip** — explicit: *"Volume pricing for contractors and builders. No minimums on first order."* Link to `/trade`.
7. **CTA** — "Get a stock cabinet quote" + "Visit the showroom."

**Constraint:** zero use of "design service" or "consultation" copy on this page.

### 5.3 `/cabinets/custom` — Vitrin Signature detail

Page blocks (top to bottom):

1. **Hero** — *"Custom cabinets, built at our Quakertown bench."*
2. **What "custom" actually means** — any size, any door style, any finish; built to your kitchen's exact dimensions.
3. **Customization options** — door styles · wood species · finishes · accessories. Reused from current `/services/kitchen-cabinets`.
4. **Process snapshot** — 5-step trimmed list, links to `/process`.
5. **Lead time honesty** — *"4 to 8 weeks in the shop after design approval. Weekly photo updates."*
6. **Portfolio teaser** — 3 featured custom projects → `/portfolio`.
7. **Installation note** — small block: *"We can install yours, or your contractor can. Your call."* Link to `/installation`.
8. **CTA** — "Start a custom kitchen" + "Visit the showroom."

### 5.4 `/cabinets/[application]` pages

Four application pages — content ported from the retiring `/services/*` pages with framing adjusted from "service" to "product application":

- `/cabinets/kitchen` ← `/services/kitchen-cabinets`
- `/cabinets/bath` ← `/services/bathroom-vanities`
- `/cabinets/built-ins` ← `/services/living-room-units`
- `/cabinets/aging-in-place` ← `/services/aging-in-place`

Each application page leads with both tiers ("Stock cabinets for [room]" + "Custom cabinetry for [room]") and inherits the construction-specs block.

---

## 6. Trade page rewrite (`src/app/trade/page.tsx`)

### 6.1 Headline rewrite

| Today | New |
|---|---|
| *"Custom cabinetry, behind your name."* | *"Your cabinet supplier in Quakertown."* |
| Subhead built around "you bring the client and the vision" | *"Trade pricing on every cabinet we make. Stock cabinets ready for pickup. Custom kitchens built to your spec. For contractors, builders, designers, and installers across Bucks County and the Lehigh Valley."* |

### 6.2 Audience cards — 5 cards in new order

Each card needs a stable HTML anchor ID for deep-linking from the homepage.

| Order | Anchor | Audience | Copy |
|---|---|---|---|
| 1 | `#contractors` | General contractors & remodelers | Stock pickup for fast jobs, custom for the kitchens you don't want to outsource. Account terms after first order. |
| 2 | `#installers` | Kitchen & bath installers (NEW) | Buy from us, install for your client. We don't compete with your install crew. |
| 3 | `#builders` | Builders & developers | Volume pricing on stock for spec homes; custom for buyers-in-tow. |
| 4 | `#designers` | Interior designers | Spec Vitrin behind your name. Renderings on custom projects. |
| 5 | `#architects` | Architects | Spec-grade casework drawings, residential and small commercial. |

### 6.3 "What you get" — 6 benefits, reframed

| Today | Rewritten |
|---|---|
| Trade pricing — 15–20% off list | **Standing trade pricing.** Tiered by volume. Pricing sheet sent on first quote. |
| One dedicated rep | **One dedicated rep.** Same person handles every order. |
| Fast-turn quoting | **Fast quotes.** Most preliminary quotes within 5 business days. Stock priced same-day. |
| Photo-realistic renderings | **3D renderings on custom orders.** Optional. *(Demoted from #4 to later.)* |
| Co-marketing rights | **Co-marketing optional, never required.** We'll credit you in our portfolio if you want it. *We disappear at the consumer level if you don't.* |
| Honest scheduling | **Honest lead times.** Stock ships when promised. Signature: 4–8 weeks, weekly updates. |

### 6.4 "How buying works for trade" — replaces 3-step join flow

Two parallel paths, side by side:

**First time buying from us:**
1. Apply — 2-minute form
2. Get your pricing sheet — within 2 business days
3. Place your first order — stock ships same week; custom enters 4–8 wk queue

**After your first order:**
- Stock orders by phone, email, or showroom walk-in. Quoted same-day.
- Custom orders via your rep with drawings and specs.
- Account terms available after first paid order.

### 6.5 Delivery, pickup & jobsite (NEW block)

- **Will-call pickup** at the Quakertown shop, by appointment
- **Local delivery** — Bucks County, Lehigh Valley, Montgomery County. Flat fee tiers.
- **Jobsite delivery** — scheduled against your install date.
- **Lift-gate / inside delivery** — on request.

### 6.6 Drop / replace

- Remove all uses of *"behind your name"*
- Replace *"You bring the client and the vision. We build the cabinetry."* with *"You spec the project. We supply the cabinets."*

### 6.7 CTAs

- Primary: `Apply for trade pricing` → `/contact?type=trade`
- Secondary: `Email a project for a quote` → `mailto:` template

---

## 7. Installation page (`src/app/installation/page.tsx`)

The page is intentionally **short** — one screen of content. Not in the primary navbar. Footer link only.

### 7.1 Page blocks

1. **Hero** — *"Installation, if you want it."* Subhead: *"Most of our cabinets are installed by the contractor who bought them. For homeowners buying direct, we offer installation as an optional service."* Photo: a Vitrin installer hands-on with cabinets (not a kitchen reveal photo).
2. **Who handles install** (table):

   | Buyer type | Typically installed by |
   |---|---|
   | Homeowner buying direct | Vitrin install crew, or homeowner's chosen contractor |
   | Contractor / installer | Their own crew |
   | Designer / architect | Their preferred install partner |
   | Builder | Their on-site crew |

3. **What's included** — Cabinet install only. Filler/scribe fitting. Crown / light rail. Toe kick. Hardware install. Punch list. Counter templating coordination.
4. **What's NOT included** — Plumbing, electrical, tile, drywall, flooring. We coordinate with your trades but don't perform them.
5. **Pricing model** — *"Installation is typically 10–15% of cabinet order value for kitchens, 8–12% for bath. Final figure included in your quote."*
6. **Timeline** — Most installs scheduled within 2–4 weeks of cabinet delivery. Crew of 2–3. Most kitchens installed in 5–10 working days.
7. **CTA** — single: `Add installation to your cabinet quote` → `/contact?type=install`.

### 7.2 What the page must NOT do

- Must not appear in the primary navbar
- Must not have a hero photo that mimics the kitchen-reveal aesthetic of `/cabinets/custom`
- Must not link out to a separate sales funnel (CTA goes to the existing `/contact` form with prefill)

---

## 8. Existing pages — disposition matrix

| URL | Action | Details |
|---|---|---|
| `/` | **REWRITE** | Section 4 |
| `/about` | **EDIT (tone)** | De-emphasize "design-build-install"; emphasize "cabinet shop and supplier in Quakertown." Founder/craft story stays. |
| `/contact` | **UPDATE** | Add audience segmentation field (homeowner / contractor / designer / builder / installer). Support `?type=trade`, `?type=install`, `?type=custom` prefills. Update success copy + auto-replies. |
| `/custom-kitchen-cabinets/[town]` × 12 | **RETARGET** | Same URLs, same SEO equity. Add "Stock cabinets in [town]" section + "Custom kitchens in [town]" section. Add LocalBusiness "Cabinet Store" schema. |
| `/guides/*` | **KEEP + EXPAND** | All existing guides survive. Add 5 new guides (Section 9). |
| `/portfolio` | **EDIT** | Add filter chips: All / Custom kitchens / Stock projects / Trade installs / Bath / Built-ins. |
| `/process` | **REFRAME** | Trim 7 steps → 5. Retitle "How ordering a custom kitchen works." Drop the design-build framing. |
| `/services/kitchen-cabinets` | **RETIRE** | 301 → `/cabinets/kitchen`. Port content. |
| `/services/bathroom-vanities` | **RETIRE** | 301 → `/cabinets/bath`. Port content. |
| `/services/living-room-units` | **RETIRE** | 301 → `/cabinets/built-ins`. Port content. |
| `/services/aging-in-place` | **RETIRE** | 301 → `/cabinets/aging-in-place`. Port content. |
| `/shop-tour` | **REFRAME** | Reframe as the *workshop tour* (where Vitrin Signature is built). Distinct from `/showroom`. Cross-link both. |
| `/trade` | **REWRITE** | Section 6 |
| `/cabinets`, `/cabinets/stock`, `/cabinets/custom`, `/cabinets/kitchen`, `/cabinets/bath`, `/cabinets/built-ins`, `/cabinets/aging-in-place` | **NEW** | Section 5 |
| `/installation` | **NEW** | Section 7 |
| `/showroom` | **NEW** | "Visit us" page. Until address lands: phone-only contact + *"Address coming soon — book a visit by phone or email."* |

---

## 9. Brand voice & language rules

### 9.1 Vocabulary kill list

Never use:

- "Design-build" / "Design-build-install"
- "Design partner" / "Behind your name"
- "Your project" / "Your remodel" *(in headlines — implies project ownership)*
- "Consultation" as the only CTA
- "Turnkey kitchen" / "Whole-home remodel"
- "We manage your remodel" / "We coordinate all trades"
- "Custom-built kitchens for you" *(omit "for you")*
- "Lifetime kitchen warranty" *(use "Lifetime cabinet warranty")*

### 9.2 Vocabulary use list

Preferred terms:

- "Cabinet supplier" / "Cabinet shop"
- "Stock" / "In stock" / "Ready now"
- "Built to order" / "Built at our bench"
- "Quote" / "Pricing" / "Pricing sheet"
- "Pickup" / "Will-call" / "Delivery"
- "Trade pricing" / "Trade account" / "Account terms"
- "Supply" / "Sold" / "Buy" / "Order"

### 9.3 Headline rules

1. Lead with the **noun** (Cabinets), not the verb of service.
2. Use **"and"** not "or" for dual-channel signaling.
3. **Geographic anchor** in ~90% of headlines.
4. **Avoid sentimental kitchen-reveal language.**

### 9.4 Voice attributes

- Plainspoken, not poetic
- Numbers when possible
- Transactional verbs
- Trade-respectful (never describe Vitrin doing what trade does for themselves)
- No emojis, no exclamation marks

### 9.5 Audience-respecting copy patterns

- Every retail-facing page: small trade band ("Buying for trade? See trade pricing →")
- Every trade-facing page: optional inverse band ("Not a trade buyer? Visit our showroom →")
- **Photograph products, not outcomes** on supplier-facing pages. (Outcome photography is still right for `/portfolio` and `/cabinets/custom`.)

---

## 10. SEO continuity plan

### 10.1 Town pages retarget (no URL changes)

The 12 `/custom-kitchen-cabinets/[town]` URLs survive verbatim. Content changes inside:

- New hero: *"Stock and custom cabinets in [town], PA"*
- New section: "What we stock for [town]"
- New section: "Custom kitchens we've built in [town]"
- Same map, same neighbor-town links, same `BreadcrumbList` schema
- Add `LocalBusiness` "Cabinet Store" schema variant with `Offer` schema for representative stock SKUs

### 10.2 New keyword universe (additive — Tier 4 in `strategy.md`)

| Keyword | Target page |
|---|---|
| stock kitchen cabinets quakertown | `/cabinets/stock` + town pages |
| cabinet store quakertown pa | `/` + `/showroom` |
| wholesale kitchen cabinets bucks county | `/trade` |
| cabinet supplier bucks county | `/trade` |
| buy kitchen cabinets near me | `/cabinets/stock` |
| contractor cabinet pricing pa | `/trade#contractors` |
| trade cabinet account | `/trade` |
| ready to go kitchen cabinets pa | `/cabinets/stock` |
| shaker cabinets in stock pa | `/cabinets/stock` |

### 10.3 Schema changes (`src/lib/schema.ts`)

- **DROP** `serviceType: "Design-Build Cabinetry"` from the `serviceSchema()` call on `/process`.
- **ADD** `LocalBusiness` variant — type `"FurnitureStore"` or `"HomeAndConstructionBusiness"` — with category "Cabinet Store" on `/` and `/showroom`.
- **ADD** `Product` + `Offer` schemas for representative stock SKUs on `/cabinets/stock`.
- **ADD** `hasOfferCatalog` on the LocalBusiness for the stock cabinet line.
- **KEEP** existing `Service` schema, retargeted to "Cabinet Supply" or "Custom Cabinet Manufacturing" — not "Design-Build Cabinetry."

### 10.4 301 redirect map (configure in `next.config.ts`)

```ts
redirects: async () => [
  { source: "/services/kitchen-cabinets",    destination: "/cabinets/kitchen",         permanent: true },
  { source: "/services/bathroom-vanities",   destination: "/cabinets/bath",            permanent: true },
  { source: "/services/living-room-units",   destination: "/cabinets/built-ins",       permanent: true },
  { source: "/services/aging-in-place",      destination: "/cabinets/aging-in-place",  permanent: true },
]
```

### 10.5 Google Business Profile changes

- **Primary category:** Cabinet Store
- **Secondary:** Kitchen Remodeler (keep)
- **Secondary:** Cabinet Maker
- Add GBP **Products** module with representative stock SKUs.
- Update GBP **Services** module — remove "Design-Build" wording; add "Stock Cabinets," "Custom Cabinets," "Trade Pricing," "Installation (Optional)."

### 10.6 5 new guides

- `/guides/setting-up-a-trade-cabinet-account`
- `/guides/stock-vs-custom-cabinets-when-to-choose-each`
- `/guides/buying-cabinets-for-a-spec-home`
- `/guides/cabinet-delivery-and-jobsite-coordination`
- `/guides/contractor-cabinet-pricing-explained`

### 10.7 Sitemap (`src/app/sitemap.ts`)

After implementation, the sitemap must include all new `/cabinets/*`, `/installation`, `/showroom`, and the 5 new guides — and **exclude** the retired `/services/*` URLs (since they redirect).

---

## 11. File-level surface area

Files this spec touches (for implementation planning):

**Modify:**
- `src/app/page.tsx` — homepage rewrite (Section 4)
- `src/app/trade/page.tsx` — trade rewrite (Section 6)
- `src/app/process/page.tsx` — reframe + trim (Section 8)
- `src/app/about/page.tsx` — tone edit (Section 8)
- `src/app/contact/page.tsx` — audience segmentation + prefills (Section 8)
- `src/app/portfolio/page.tsx` — filter chips (Section 8)
- `src/app/shop-tour/page.tsx` — reframe as workshop tour (Section 8)
- `src/app/custom-kitchen-cabinets/[town]/page.tsx` — dual-tier content (Section 10.1)
- `src/components/Navbar.tsx` — new nav structure + dropdown (Section 3.3)
- `src/components/Footer.tsx` — 4-column structured footer (Section 3.4)
- `src/lib/schema.ts` — schema changes (Section 10.3)
- `next.config.ts` — 301 redirects (Section 10.4)
- `src/app/sitemap.ts` — new + retired URLs (Section 10.7)

**Create:**
- `src/app/cabinets/page.tsx`
- `src/app/cabinets/stock/page.tsx`
- `src/app/cabinets/custom/page.tsx`
- `src/app/cabinets/kitchen/page.tsx` (port from `/services/kitchen-cabinets`)
- `src/app/cabinets/bath/page.tsx` (port from `/services/bathroom-vanities`)
- `src/app/cabinets/built-ins/page.tsx` (port from `/services/living-room-units`)
- `src/app/cabinets/aging-in-place/page.tsx` (port from `/services/aging-in-place`)
- `src/app/installation/page.tsx`
- `src/app/showroom/page.tsx`
- `src/app/guides/setting-up-a-trade-cabinet-account/page.tsx`
- `src/app/guides/stock-vs-custom-cabinets-when-to-choose-each/page.tsx`
- `src/app/guides/buying-cabinets-for-a-spec-home/page.tsx`
- `src/app/guides/cabinet-delivery-and-jobsite-coordination/page.tsx`
- `src/app/guides/contractor-cabinet-pricing-explained/page.tsx`

**Delete (after redirects are in place):**
- `src/app/services/kitchen-cabinets/page.tsx`
- `src/app/services/bathroom-vanities/page.tsx`
- `src/app/services/living-room-units/page.tsx`
- `src/app/services/aging-in-place/page.tsx`
- (Then remove the now-empty `src/app/services/` directory.)

---

## 12. Acceptance criteria

The pivot is considered complete when:

1. **Hero rewrite** — homepage hero contains the word "sold" and does not contain "designed, built, and installed."
2. **Two-track CTA** — homepage hero shows two CTAs above the fold linking to `/cabinets/stock` and `/cabinets/custom`.
3. **Trade page** — headline reads *"Your cabinet supplier in Quakertown,"* "behind your name" appears nowhere on the page, and audience cards appear in the order: contractors → installers → builders → designers → architects with stable anchor IDs.
4. **All 4 retired `/services/*` URLs** return HTTP 301 to the corresponding `/cabinets/*` URL.
5. **`/installation`** is reachable from the footer only — does not appear in the primary navbar — and contains the "Who handles install" table.
6. **All 9 new pages** render with correct metadata (title, description, canonical URL).
7. **Schema** — `JSON-LD` on `/process` no longer contains `"Design-Build Cabinetry"`; the homepage and `/showroom` carry a `LocalBusiness` "Cabinet Store" payload.
8. **Sitemap** — `src/app/sitemap.ts` output includes every new page and excludes the retired ones.
9. **Site-wide grep** — searching the codebase for the phrases on the kill list (Section 9.1) returns zero matches in user-facing copy.
10. **Type-check + build** — `npm run build` succeeds without TS errors. Lint passes.

---

## 13. Out of scope (operational checklist for client)

These items are required for the pivot to work in practice but are **not part of the website spec**. Flagged for client tracking.

| Item | Why it matters | Recommended action |
|---|---|---|
| Photography (supplier-side shots) | Without will-call counter, stock-shelf, jobsite-delivery photos, the "supplier" signal stays weak. | Half-day shoot once showroom address is set. |
| Trade application infrastructure | Form + CRM sequence to back the page's promised 2-day pricing-sheet response. | HubSpot or Tally form → Mailchimp/Klaviyo sequence. |
| Credit / account terms infra | "Account terms after first paid order" requires a real credit application + AR workflow. | Set up Quickbooks/Xero AR. Build credit app PDF. |
| Inventory truth | "Stock cabinets in stock" must be real. | Airtable/Sheets inventory list, surfaced on `/cabinets/stock` long-term. |
| Pricing sheet design | The PDF IS the trade pitch in physical form. | 2-page branded PDF, tier pricing, updated quarterly. |
| Dedicated trade rep | "One dedicated rep" promise requires a real person. | Hire/designate, or soften copy until in place. |
| Email segmentation | Trade and homeowner sequences must not mix. | Audience-split lists + sequences in ESP. |
| Showroom physical setup | Site implies stock cabinets are visible & ready. | Display wall of stock cabinets; will-call counter visible. |
| Hours matching contractor schedules | Contractors pick up at 7am. Current hours start 9am. | Decide if 7am pickup-by-appointment is feasible; advertise on `/trade` and `/cabinets/stock` if so. |

---

## 14. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Contractors don't believe the "we don't compete with you" promise | Pillar #3 wording + Section 7.1 table + co-marketing line ("we disappear at the consumer level if you don't") are designed to address this. Reinforced by supplier-side photography in Section 13. |
| Homeowners feel the new site is too transactional / loses the craft premium | `/cabinets/custom` and `/portfolio` retain the full craft story. Process page stays. Homepage Pillar #1 ("Built in Quakertown") preserves the bench-built signal. |
| SEO ranking loss from `/services/*` retirement | Mitigated by permanent 301 redirects (Section 10.4) and full content porting to `/cabinets/*` equivalents. |
| Inventory promises break (stock claim but no stock) | Adjacent Section 13 item. Site must not list specific SKUs as "Available now" until inventory is verifiable. Placeholders only at launch. |
| Showroom address not landing before content goes live | Showroom page launches with phone-only contact + "Address coming soon" until address is final. No fake addresses. |

---

## 15. Open items requiring client input before implementation

None. All decisions have been made and recorded in Section 2. The spec is implementation-ready pending the user's final review.

---

*End of spec. Implementation plan will be produced via the `superpowers:writing-plans` skill.*
