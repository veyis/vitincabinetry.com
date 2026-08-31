# Google Business Profile — setup pack for Vitrin Cabinetry

**Written 2026-08-31. Everything below is copied from `src/lib/site.ts` or measured; nothing is invented.**

Vitrin has **no Google Business Profile**. Measured 2026-08-31 via `search_local_businesses` at both
25 km and 80 km around Easton: nothing under this name, and a Maps query for "Vitrin Cabinetry Easton"
returns a competitor.

That is the site's single binding constraint. The technical layer is already clean — the www→apex
migration is complete, and all four inspected money pages are indexed and self-canonical — and
`/showroom` was prepared for the listing on 2026-08-31 (commit `9680b97`). Nothing more on the site
moves the Local Pack until the profile exists.

---

## ⚠️ Read this first — do not use the name that is currently in the code

`src/lib/site.ts` sets:

```
gbpName: "Vitrin Cabinetry | Kitchen, Bathroom & Closet"
```

**Do not register that.** Google's business-name guideline requires the real-world business name;
adding service keywords is the single most common cause of a name edit, a suspension, or a
competitor-submitted correction. Two sibling listings in this portfolio already carry this exposure
("VM Power Flooring & Basement/ Kitchen/ Bathroom Remodeling" and the Decks listing).

**Register exactly:**

```
Vitrin Cabinetry
```

Then change `gbpName` in `src/lib/site.ts` to match character-for-character, since that value feeds
the schema `alternateName`. NAP must be identical across site schema, GBP, and every citation.

---

## Step 1 — Create the profile

**Business type:** Service-area business, **no street address shown**. The Easton showroom address is
unpublished by choice and is still `TBD` in the code. Do not enter a street you are not ready to
publish — Google will show it, and it then has to match the site.

When the showroom address is public, switch the listing to a storefront and add it in the same pass
as `NEXT_PUBLIC_BUSINESS_STREET` (below).

| Field | Value |
|---|---|
| Name | `Vitrin Cabinetry` |
| Phone | `(484) 542-2571` |
| Website | `https://vitrincabinetry.com` (apex — the www host 308s here) |
| Email | `hello@vitrincabinetry.com` |

**Hours** (from `site.hours` — align the two if you change either):

| Days | Open |
|---|---|
| Mon–Fri | 09:00 – 18:00 |
| Sat | 10:00 – 16:00 |
| Sun | Closed |

---

## Step 2 — Categories

All slugs below were verified against Google's live category list on 2026-08-31
(`list_business_categories`). **Primary category is the strongest single GBP lever** — it decides
which pack you are eligible for at all.

**Primary — pick one:**

- `cabinet_store` (Cabinet store) — choose this if the showroom and stock cabinets are the offer.
  Cornerstone Kitchens, the *weakest* incumbent in the Easton pack (unrated), holds it, so the
  category is under-defended.
- `kitchen_remodeler` (Kitchen remodeler) — choose this if remodels are the revenue. It is what
  **Laslo Custom Kitchens** uses, and Laslo is the benchmark: #1–2 organic for "kitchen remodeling
  easton pa" *and* #3 in the pack at 5.0/72 reviews.

Recommendation: **`cabinet_store` as primary**, because the site's striking-distance queries are
showroom queries ("bath showroom easton pa" pos 13.7, "bathroom cabinet showroom easton pa" pos 11.0)
and because it is the least-defended category in this pack. Add `kitchen_remodeler` as a secondary so
you stay eligible for the remodel pack too.

**Secondaries (all verified valid):** `kitchen_remodeler`, `bathroom_remodeler`, `cabinet_maker`,
`countertop_store`, `remodeler`

**Note:** there is **no "closet" category** in Google's list — "Custom closets" is a *service*, not a
category. Do not go looking for one.

Do not add categories for work you do not actually do. Category padding is what makes one listing
compete with its own siblings — measured in this portfolio, where the VM Power Decks listing shows up
at #10 for kitchen queries because it carries nine categories.

---

## Step 3 — Services

Paste these into the Services section (they mirror `site.services`, which also feeds the schema
`hasOfferCatalog`, so the two surfaces agree):

Kitchen cabinets · Bathroom vanities · Custom closets · Quartz countertops · Granite countertops ·
Porcelain countertops · Luxury vinyl plank flooring · Hardwood flooring · Engineered hardwood
flooring · Tile flooring · Kitchen remodeling · Bathroom remodeling · Custom closet design ·
3D design · Backsplash installation · Demolition · Lighting, plumbing & electrical (remodel scope) ·
Finishing

## Step 4 — Service area

From `site.areaServed` (15 towns):

Easton PA · Bethlehem PA · Allentown PA · Hellertown PA · Emmaus PA · Center Valley PA ·
Coopersburg PA · Quakertown PA · Perkasie PA · Doylestown PA · Sellersville PA · Souderton PA ·
Harleysville PA · Lansdale PA · New Hope PA

## Step 5 — Description

Use the site's own description (kept in sync with `site.description`) so the GBP "About" and the
schema `description` say the same thing. Do not add superlatives or numbers.

## Step 6 — Photos

Real shop and showroom photos, uploaded before verification and then monthly. Benchmark: KB
Remodeling Plus has 232 photos. Original photography is the experience anchor — it is not a traffic
source, but it is what a rater and a customer both check.

---

## Step 7 — Verification

**Pre-record the ~30-second verification video before you start**, because the flow can demand it on
the spot and the recording usually must be continuous and unedited. Plan to show, in one take:

1. The street/exterior and any signage
2. Walking inside
3. The showroom floor and the materials bench
4. Tools/stock that prove it is a working business
5. Something that ties it to you — a vehicle, business card, or opening a locked area

Video verification has become the harder path; a single clean take beats three rushed attempts.

---

## Step 8 — The day the listing is live: flip the site on

No code change is needed. Set these in **Vercel → Project → Settings → Environment Variables
(Production *and* Preview)** and redeploy. `src/lib/schema.ts` picks them up automatically:

| Env var | Value | Turns on |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_PROFILE_URL` | the Maps **place** URL (not the admin link) | `sameAs` **and** `hasMap` |
| `NEXT_PUBLIC_FACEBOOK_URL` | profile URL | `sameAs` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | profile URL | `sameAs` |
| `NEXT_PUBLIC_HOUZZ_URL` | profile URL | `sameAs` |
| `NEXT_PUBLIC_BUSINESS_STREET` | street address | `streetAddress` in `PostalAddress` |

**Only set a URL that actually resolves.** A `sameAs` pointing at a profile that does not exist is
worse than no `sameAs` — this portfolio once shipped five fabricated profile URLs in schema. `403` is
not the same as absent; open each one signed out before adding it.

Then, in the same pass:

- [ ] Change `gbpName` in `src/lib/site.ts` to the registered name, character-for-character
- [ ] Update `site.geo` from the approximate Easton coordinates to the real ones
- [ ] Confirm `site.hours` matches the GBP exactly
- [ ] Leave `aggregateRating.enabled: false` until there are **≥10 real reviews**, then update
      `ratingValue` and `reviewCount` together and re-date them

---

## Step 9 — Reviews

The Easton pack as measured 2026-08-31:

| Listing | Rating / reviews |
|---|---|
| KB Remodeling Plus (pack #1) | 4.7 / 36 |
| All Inclusive Kitchens | 4.9 / 35 |
| Laslo Custom Kitchens | 5.0 / 72 |
| Cornerstone Kitchens & Baths | unrated |

This is a **beatable** pack — nobody is above 72 reviews. Ask within 48 hours of a finished job, keep
a steady velocity (bursts trigger fake-review filters), respond to 100% of reviews, and never gate or
incentivize. Google removed 292M violating reviews in 2025, and a July 2026 guideline update
specifically targets undisclosed incentivized reviews.

Consumer thresholds worth designing against: 47% won't use a business with fewer than 20 reviews, 31%
require 4.5+, and 74% want reviews from the last 3 months (BrightLocal, n=1,002, Feb 2026 — vendor
research with a disclosed method, use it to prioritize, never as a customer-facing claim).

---

## What NOT to expect

Creating the profile does not produce pack rankings immediately, and proximity still dominates. The
measured lesson from the sibling listing: **VM Power Flooring has 5.0/160 reviews — more than every
Allentown incumbent — and still appears in only 3 of 9 grid cells**, because its Maps reach dies
within ~3 km of its address. Reviews do not extend a radius.

So: the GBP unlocks eligibility and the brand/near-me queries around Easton. Allentown and the wider
Lehigh Valley still have to be won organically.

**Re-measure with a 3×3 `get_local_rank_grid` about 30 days after verification** (~27 credits — that
is 9 *searches* at ~3 credits each; the "9 credits" figure quoted elsewhere was the search count).
Use the same parameters each time so the grids are comparable.
