# Week 1 — Owner Action Checklist

A companion to `strategy.md`. These are the items that **only the business owner can do** because they require account creation, identity verification, or payment. The codebase items are already shipped (see end of file for what's been deployed).

Allow **2–4 hours total** across the week. None of these are hard; they just have to be done by an authorized human.

---

## 1. Google Business Profile (GBP) — highest priority

**Why:** GBP is the single biggest local-pack ranking signal. Without a verified profile, no amount of on-site SEO will surface Vitrin in the Map Pack.

### Steps

1. Go to https://business.google.com → **Manage now**.
2. Search for "Vitrin Cabinetry, Easton, PA." If a profile already exists (auto-created by Google), claim it. If not, create new.
3. Choose category: **Cabinet maker** (primary). Secondary: **Kitchen remodeler**, **Bathroom remodeler**, **Custom furniture maker**.
4. Verification: Google will offer postcard, phone, email, or video. Pick whichever is fastest. Video is usually approved within 5 business days.
5. **Once verified**, complete every field:
   - Business name (exactly `site.gbpName`: `Vitrin Cabinetry | Kitchen, Bathroom & Closet`)
   - Address (exact — must match `site.address` in `src/lib/site.ts` and every citation)
   - Service area (use the 15 towns in `site.areaServed`)
   - Phone (exactly `site.phoneDisplay`: `(484) 542-2571`)
   - Website URL: `https://www.vitrincabinetry.com`
   - Hours (must match `site.hours`: Mon–Fri 9–6, Sat 10–4)
   - Description (750 chars max — focus on craft + custom + Easton / Lehigh Valley)
   - Products → add 6+ cabinet styles with photos
   - Services → add 8+ (custom kitchens, bath vanities, closets, pantries, etc.)
6. Upload **20+ photos**: shop interior, team, completed projects, before/after pairs.
7. Add 10 seed Q&As yourself (the FAQ section is owned by whoever answers first).
8. Enable messaging.

**Estimated time:** 60–90 minutes initial + 5 minutes weekly.

### Weekly cadence after launch

- 2 Google Posts per week (a project, a tip, an offer, a behind-the-scenes shot).
- 5 new photos per week.
- Reply to every review within 24 hours.

---

## 2. Google Search Console + Google Analytics 4

The site code is ready — just need to connect accounts and paste IDs into `.env.local`.

### Search Console (free, ~5 min)

1. Go to https://search.google.com/search-console → **Add property** → **Domain** → enter `vitrincabinetry.com`.
2. Verify via DNS TXT record (Vercel makes this easy — copy the TXT, add it in the Vercel domain dashboard).
3. Submit sitemap: `https://www.vitrincabinetry.com/sitemap.xml` (the apex 301s to `www` — see `vercel.json`).
4. Set preferred reporting country: US.

### Google Analytics 4 (free, ~10 min)

1. Go to https://analytics.google.com → **Admin** → **Create account** → "Vitrin Cabinetry."
2. Create property → name "Vitrin Cabinetry Website" → United States → USD.
3. **Data Streams** → **Web** → URL `https://www.vitrincabinetry.com` → Stream name "Web."
4. Copy the **Measurement ID** (starts with `G-`).
5. In the repo, copy `.env.example` → `.env.local`, paste the ID into `NEXT_PUBLIC_GA_ID`.
6. Set the same ID as a production env var in Vercel: `vercel env add NEXT_PUBLIC_GA_ID production`.
7. In GA4 Admin → Data Streams → your stream → **Enhanced measurement** → enable all toggles.

### Link GSC ↔ GA4

In GA4 → Admin → **Product links** → **Search Console links** → link the property.

---

## 3. Microsoft Clarity (free heatmaps + session recordings)

1. Go to https://clarity.microsoft.com → sign in with Microsoft account.
2. **New project** → name "Vitrin Cabinetry" → category Home Services → website URL.
3. Copy the **Project ID** (alphanumeric string).
4. Paste it as `NEXT_PUBLIC_CLARITY_ID` in `.env.local` and Vercel production env.

---

## 4. PxlPeak (lead delivery for the contact form)

The form does **not** send its own email. `src/app/api/contact/route.ts` POSTs the lead to
PxlPeak's `/api/v1/leads`, which handles storage, fraud scoring, the owner notification, and
the customer auto-reply — same setup as the other agency sites. There is no Resend account
and no `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for this project.

1. In PxlPeak, confirm the `vitrincabinetry.com` site exists and note its site UUID.
2. **Settings → Email receivers** (`v2.sites.settings.emailReceivers`) → add whoever should get
   lead notifications. This is the only place recipients are configured.
3. Create a publishable key scoped to that site (`pk_live_…`).
4. Set `PXLPEAK_API_URL="https://pxlpeak.com"` and `PXLPEAK_API_KEY` in `.env.local`, then set
   both in Vercel as production env vars.

Test: submit the form locally. A missing/blank key returns a 500 with
`PXLPEAK_API_URL or PXLPEAK_API_KEY not configured` in the server log; a good submission
returns `{ ok: true, id }` and appears in the PxlPeak leads dashboard.

> Separately: `hello@vitrincabinetry.com` is published in the footer and JSON-LD but has no
> mailbox behind it yet. Provision it (or a forwarder) before launch — the contact form is
> unaffected, but anyone who clicks the address mails into a void.

---

## 5. Citation cleanup — BrightLocal (or free alternative)

**Why:** Inconsistent Name/Address/Phone across directories is a top-3 cause of stagnant local rankings.

### Option A — BrightLocal ($30/mo, fastest)

1. Go to https://www.brightlocal.com → sign up.
2. **Citation Tracker** → add the business.
3. Run the initial scan — it finds existing listings across ~30 directories.
4. Fix every inconsistency (NAP, hours, website).

### Option B — Free path (Whitespark scanner + manual fixes)

1. Go to https://whitespark.ca/local-citation-finder/ → free 3 scans.
2. Export the list.
3. Manually claim/correct on these high-value directories:
   - **Bing Places** — https://www.bingplaces.com (uses Google data; claim it)
   - **Apple Maps Connect** — https://mapsconnect.apple.com
   - **Yelp for Business** — https://biz.yelp.com
   - **Houzz Pro** — https://www.houzz.com/pro/landing
   - **BBB** — https://www.bbb.org → Get Accredited (paid, optional but worth it)
   - **Angi** — https://www.angi.com/for-pros
   - **HomeAdvisor** — https://www.homeadvisor.com/pro
   - **Thumbtack** — https://www.thumbtack.com/pro
   - **Porch** — https://www.porch.com/for-pros
   - **NextDoor Business** — https://business.nextdoor.com
   - **Yellow Pages** — https://accounts.yellowpages.com
   - **Foursquare** — https://business.foursquare.com
   - **Manta** — https://www.manta.com/claim
   - **Greater Lehigh Valley Chamber of Commerce** — https://www.lehighvalleychamber.org (covers Easton, Bethlehem, Allentown)
   - **Upper Bucks Chamber of Commerce** — https://upperbuckschamber.org (secondary — only if defending the Bucks County pages)
   - **NARI member directory** (after joining — see below)
   - **NKBA member directory** (after joining — see below)

**Rule:** every entry must match `src/lib/site.ts` exactly — `Vitrin Cabinetry / [site.address.street] / Easton, PA 18042 / (484) 542-2571`. One wrong digit anywhere = inconsistency penalty.

---

## 6. Baseline keyword rank tracking

Set this up so we have a "before" snapshot.

### Tool

- **AccuRanker** — $30/mo, best UI ([https://www.accuranker.com](https://www.accuranker.com))
- **SerpRobot** — $9/mo, basic ([https://www.serprobot.com](https://www.serprobot.com))
- **Free path** — paste keywords into a Google Sheet, check positions manually weekly using an incognito window from an Easton IP (via VPN if traveling).

### The 30 baseline keywords

Paste these into the rank tracker. Target location: **Easton, PA 18042** (must match `site.address` in `src/lib/site.ts`). Device: **mobile** (70% of local search is mobile).

| # | Keyword | Tier |
|---|---------|------|
| 1 | custom kitchen cabinets easton pa | T1 money |
| 2 | custom kitchen cabinets bethlehem pa | T1 money |
| 3 | custom kitchen cabinets allentown pa | T1 money |
| 4 | cabinet maker easton pa | T1 money |
| 5 | kitchen remodeling easton pa | T1 money |
| 6 | bathroom vanity easton pa | T1 money |
| 7 | custom cabinets lehigh valley | T1 money |
| 8 | kitchen designer lehigh valley | T1 money |
| 9 | custom kitchen cabinets quakertown | T2 town |
| 10 | custom kitchen cabinets perkasie | T2 town |
| 11 | custom kitchen cabinets doylestown | T2 town |
| 12 | custom kitchen cabinets sellersville | T2 town |
| 13 | custom kitchen cabinets souderton | T2 town |
| 14 | custom kitchen cabinets coopersburg | T2 town |
| 15 | custom kitchen cabinets hellertown | T2 town |
| 16 | custom kitchen cabinets emmaus | T2 town |
| 17 | custom kitchen cabinets harleysville | T2 town |
| 18 | custom kitchen cabinets lansdale | T2 town |
| 19 | custom kitchen cabinets new hope | T2 town |
| 20 | custom kitchen cabinets center valley | T2 town |
| 21 | kitchen cabinets bucks county | T2 regional |
| 22 | custom cabinets bucks county | T2 regional |
| 23 | cabinet refacing vs custom | T3 decision |
| 24 | stock vs custom cabinets | T3 decision |
| 25 | how to choose a kitchen designer | T3 decision |
| 26 | inset vs full overlay cabinets | T3 decision |
| 27 | quartz vs granite countertops | T3 decision |
| 28 | custom kitchen cost bucks county pa | T3 decision |
| 29 | contractor cabinet pricing | T3 decision |
| 30 | flooring or cabinets first | T3 decision |

Set the tool to email a weekly rank report. Save the **Week-0 snapshot** as the baseline — every gain measured from here.

---

## 7. Memberships to apply for (do in Month 1)

These are paid but pay back via citations + trust signals + referrals.

| Organization | Annual cost | What you get |
|--------------|-------------|--------------|
| Upper Bucks Chamber of Commerce | ~$300–$500 | Local backlink + chamber referrals |
| NARI (National Association of the Remodeling Industry) | ~$500 | Membership badge + member-directory backlink |
| NKBA (National Kitchen & Bath Association) | ~$400 | Trust badge + directory listing + industry network |
| Houzz Pro | Tiered (free Lite, paid Pro) | High-DR profile (~92 DR), lead generation |
| BBB Accredited Business | ~$500/yr | Trust signal especially with older buyers |

---

## 8. Photographer + videographer engagement

By end of Week 1, have two bookings on the calendar:

- **Project photographer** — monthly retainer, 1 finished kitchen shoot per month. Budget $800–$1,500/shoot.
- **Videographer** — one-time 60–90 second shop-tour hero video. Budget $1,500–$3,000.

Local recommendations (search Google Maps for "interior photographer Bucks County" — most will quote within 24 hours).

---

## What's already shipped in code (no action required)

The technical foundation that supports everything above is already deployed:

| Deliverable | Where | What it gives you |
|-------------|-------|-------------------|
| Full `LocalBusiness` / `Organization` / `WebSite` JSON-LD on every page | `src/lib/schema.ts` + `src/app/layout.tsx` | Schema rich results eligibility |
| Site-wide Metadata API (title template, OG, Twitter, canonical, robots) | `src/app/layout.tsx` | All pages emit correct head tags |
| `next/font` for Inter + Playfair Display (self-hosted, zero CLS) | `src/app/layout.tsx` | Fixes layout shift + privacy |
| Hero image converted from CSS background to `next/image fill` | `src/app/page.tsx` | Better LCP + automatic WebP/AVIF |
| All internal nav uses `<Link>` (instant client-side transitions) | `src/components/Navbar.tsx`, `Footer.tsx`, `page.tsx` | INP + UX improvement |
| Production-only Google Analytics, Vercel Analytics, Vercel Speed Insights, Microsoft Clarity, all gated on env vars | `src/app/layout.tsx` | Measurement infrastructure |
| Contact form rebuilt as React client component → POST to `/api/contact` → PxlPeak leads API | `src/app/contact/ContactForm.tsx`, `src/app/api/contact/route.ts`, `src/lib/geolocation.ts` | Working lead capture with honeypot + validation |
| Single source of truth for NAP, hours, service-area towns | `src/lib/site.ts` | Edit one file, schema + footer + contact all update |
| Sitemap + robots updated with all routes | `src/app/sitemap.ts`, `src/app/robots.ts` | Crawler-ready |
| Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) | `next.config.ts` | Hardened defaults |
| `.env.example` documenting every required env var | repo root | Onboarding clarity |

---

## End-of-Week-1 Definition of Done

You can mark Week 1 complete when **all** of these are true:

- [ ] GBP claimed, verified, fully filled, 20+ photos uploaded, weekly cadence on the calendar.
- [ ] GSC verified for `vitrincabinetry.com`, sitemap submitted.
- [ ] GA4 property created, Measurement ID pasted in Vercel env, linked to GSC.
- [ ] Microsoft Clarity project created, ID pasted in Vercel env.
- [ ] `PXLPEAK_API_KEY` set in Vercel env, email receivers configured in PxlPeak, contact form tested end-to-end (real submission lands in the leads dashboard + notification inbox).
- [ ] `hello@vitrincabinetry.com` mailbox or forwarder provisioned.
- [ ] Citation scan run; top 15 directories show consistent NAP.
- [ ] 30-keyword baseline rank report saved as Week-0 snapshot.
- [ ] First project photographer booked.
- [ ] Shop-tour videographer booked.
- [ ] NARI / NKBA / Chamber applications submitted.
