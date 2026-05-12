# Week 1 — Owner Action Checklist

A companion to `strategy.md`. These are the items that **only the business owner can do** because they require account creation, identity verification, or payment. The codebase items are already shipped (see end of file for what's been deployed).

Allow **2–4 hours total** across the week. None of these are hard; they just have to be done by an authorized human.

---

## 1. Google Business Profile (GBP) — highest priority

**Why:** GBP is the single biggest local-pack ranking signal. Without a verified profile, no amount of on-site SEO will surface Vitrin in the Map Pack.

### Steps

1. Go to https://business.google.com → **Manage now**.
2. Search for "Vitrin Cabinetery, Quakertown, PA." If a profile already exists (auto-created by Google), claim it. If not, create new.
3. Choose category: **Cabinet maker** (primary). Secondary: **Kitchen remodeler**, **Bathroom remodeler**, **Custom furniture maker**.
4. Verification: Google will offer postcard, phone, email, or video. Pick whichever is fastest. Video is usually approved within 5 business days.
5. **Once verified**, complete every field:
   - Business name (exactly: `Vitrin Cabinetery`)
   - Address (exact — must match the address in `src/lib/site.ts` and every citation)
   - Service area (use the 12 towns in `src/lib/site.ts`)
   - Phone (same number used everywhere)
   - Website URL: `https://vitrincabinetery.com`
   - Hours (must match the website's footer + schema)
   - Description (750 chars max — focus on craft + custom + Quakertown)
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

1. Go to https://search.google.com/search-console → **Add property** → **Domain** → enter `vitrincabinetery.com`.
2. Verify via DNS TXT record (Vercel makes this easy — copy the TXT, add it in the Vercel domain dashboard).
3. Submit sitemap: `https://vitrincabinetery.com/sitemap.xml`.
4. Set preferred reporting country: US.

### Google Analytics 4 (free, ~10 min)

1. Go to https://analytics.google.com → **Admin** → **Create account** → "Vitrin Cabinetery."
2. Create property → name "Vitrin Cabinetery Website" → United States → USD.
3. **Data Streams** → **Web** → URL `https://vitrincabinetery.com` → Stream name "Web."
4. Copy the **Measurement ID** (starts with `G-`).
5. In the repo, copy `.env.example` → `.env.local`, paste the ID into `NEXT_PUBLIC_GA_ID`.
6. Set the same ID as a production env var in Vercel: `vercel env add NEXT_PUBLIC_GA_ID production`.
7. In GA4 Admin → Data Streams → your stream → **Enhanced measurement** → enable all toggles.

### Link GSC ↔ GA4

In GA4 → Admin → **Product links** → **Search Console links** → link the property.

---

## 3. Microsoft Clarity (free heatmaps + session recordings)

1. Go to https://clarity.microsoft.com → sign in with Microsoft account.
2. **New project** → name "Vitrin Cabinetery" → category Home Services → website URL.
3. Copy the **Project ID** (alphanumeric string).
4. Paste it as `NEXT_PUBLIC_CLARITY_ID` in `.env.local` and Vercel production env.

---

## 4. Resend (transactional email for the contact form)

The contact form is wired; we just need credentials.

1. Go to https://resend.com → sign up.
2. **Domains** → **Add domain** → `vitrincabinetery.com` → add the SPF + DKIM TXT records in Vercel DNS.
3. Wait for verification (usually <30 min).
4. **API Keys** → **Create API key** → name "vitrin-prod" → permission "Sending access" → restrict to verified domain.
5. Copy the key. Paste it into `.env.local` as `RESEND_API_KEY`. Set the same value in Vercel as a production env var.
6. Set `CONTACT_TO_EMAIL` (where leads should land) and `CONTACT_FROM_EMAIL` (must be `@vitrincabinetery.com`).

Test: submit the form locally with the env set. Resend's dashboard logs every send.

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
   - **Quakertown Chamber of Commerce** — https://upperbuckschamber.org
   - **NARI member directory** (after joining — see below)
   - **NKBA member directory** (after joining — see below)

**Rule:** every entry must match `Vitrin Cabinetery / [exact street] / Quakertown, PA 18951 / [exact phone]`. One wrong digit anywhere = inconsistency penalty.

---

## 6. Baseline keyword rank tracking

Set this up so we have a "before" snapshot.

### Tool

- **AccuRanker** — $30/mo, best UI ([https://www.accuranker.com](https://www.accuranker.com))
- **SerpRobot** — $9/mo, basic ([https://www.serprobot.com](https://www.serprobot.com))
- **Free path** — paste keywords into a Google Sheet, check positions manually weekly using an incognito window from Quakertown IP (via VPN if traveling).

### The 30 baseline keywords

Paste these into the rank tracker. Target location: **Quakertown, PA 18951**. Device: **mobile** (70% of local search is mobile).

| # | Keyword | Tier |
|---|---------|------|
| 1 | custom kitchen cabinets quakertown | T1 money |
| 2 | kitchen remodeling quakertown pa | T1 money |
| 3 | kitchen cabinets bucks county | T1 money |
| 4 | custom cabinets bucks county | T1 money |
| 5 | kitchen designer quakertown | T1 money |
| 6 | bathroom vanity quakertown | T1 money |
| 7 | cabinet maker quakertown | T1 money |
| 8 | kitchen remodeling bucks county pa | T1 money |
| 9 | custom kitchen cabinets perkasie | T2 town |
| 10 | custom kitchen cabinets doylestown | T2 town |
| 11 | custom kitchen cabinets sellersville | T2 town |
| 12 | custom kitchen cabinets souderton | T2 town |
| 13 | custom kitchen cabinets coopersburg | T2 town |
| 14 | custom kitchen cabinets hellertown | T2 town |
| 15 | custom kitchen cabinets emmaus | T2 town |
| 16 | custom kitchen cabinets harleysville | T2 town |
| 17 | custom kitchen cabinets lansdale | T2 town |
| 18 | custom kitchen cabinets new hope | T2 town |
| 19 | custom kitchen cabinets center valley | T2 town |
| 20 | cabinet refacing vs custom | T3 decision |
| 21 | semi-custom vs custom cabinets | T3 decision |
| 22 | custom kitchen cost bucks county pa | T3 decision |
| 23 | how to choose a kitchen designer | T3 decision |
| 24 | inset vs full overlay cabinets | T3 decision |
| 25 | frameless vs face frame cabinets | T3 decision |
| 26 | quartz vs granite countertops | T3 decision |
| 27 | wolf cabinets vs custom | T3 decision (brand) |
| 28 | inset shaker cabinets bucks county | T5 long-tail |
| 29 | paint grade cabinetry quakertown | T5 long-tail |
| 30 | custom pantry quakertown | T5 long-tail |

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
| Contact form rebuilt as React client component → POST to `/api/contact` → Resend send | `src/app/contact/ContactForm.tsx`, `src/app/api/contact/route.ts`, `src/lib/email.ts` | Working lead capture with honeypot + validation |
| Single source of truth for NAP, hours, service-area towns | `src/lib/site.ts` | Edit one file, schema + footer + contact all update |
| Sitemap + robots updated with all routes | `src/app/sitemap.ts`, `src/app/robots.ts` | Crawler-ready |
| Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) | `next.config.ts` | Hardened defaults |
| `.env.example` documenting every required env var | repo root | Onboarding clarity |

---

## End-of-Week-1 Definition of Done

You can mark Week 1 complete when **all** of these are true:

- [ ] GBP claimed, verified, fully filled, 20+ photos uploaded, weekly cadence on the calendar.
- [ ] GSC verified for `vitrincabinetery.com`, sitemap submitted.
- [ ] GA4 property created, Measurement ID pasted in Vercel env, linked to GSC.
- [ ] Microsoft Clarity project created, ID pasted in Vercel env.
- [ ] Resend API key set in Vercel env, domain verified, contact form tested end-to-end (real submission lands in inbox).
- [ ] Citation scan run; top 15 directories show consistent NAP.
- [ ] 30-keyword baseline rank report saved as Week-0 snapshot.
- [ ] First project photographer booked.
- [ ] Shop-tour videographer booked.
- [ ] NARI / NKBA / Chamber applications submitted.
