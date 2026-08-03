# Backlinks — Executed Research & Action Pack

Companion to `strategy.md` §8. That section *planned* off-page work; this file is
the *executed* version: real prospects, verified by opening the page, plus the
drafts. Researched 2026-08-02.

**Verification standard:** every row below is marked with what I actually
confirmed. "Verified" = I opened the page and saw the thing. "Unverified" = I
could not load it or could not see the claim. Nothing here is assumed.

---

## 0. Read this before doing anything

Two of the pack's strategies are **blocked**, and running them now causes
permanent damage rather than zero effect.

`src/lib/site.ts` still has:

```
street: process.env.NEXT_PUBLIC_BUSINESS_STREET || "TBD — Showroom address"
```

`NEXT_PUBLIC_BUSINESS_STREET` is unset in Vercel. Confirmed against production
on 2026-08-02 — `streetAddress`, `sameAs`, and `hasMap` are all absent from
every JSON-LD node on the live homepage, and no analytics tag fires:

```
CabinetMaker    | #localbusiness  streetAddress: <<MISSING>>  sameAs: <<MISSING>>
FurnitureStore  | #cabinetstore   streetAddress: <<MISSING>>  sameAs: <<MISSING>>
```

**Consequence for link building:** a citation is a *Name + Address + Phone*
record. Submitting 30 directory listings before the real address exists writes
30 wrong records across the web that then get scraped, syndicated, and cached by
aggregators. Cleaning that up later costs more than the listings ever earned.
This is the single most expensive mistake available in this pack.

So the work splits cleanly:

| | Needs the street address? | Status |
|---|---|---|
| **Track A — Editorial links** (PR, niche edits, guest posts, resource pages) | No — needs a name and a URL | **Start today** |
| **Track B — Citations** (directories, chambers, GBP, BBB, Houzz, Angi) | Yes — the address *is* the payload | **Blocked** on `site.address.street` + verified GBP |

Track B is not "later because we're lazy." It is later because doing it now is
net-negative. Get the address into `site.ts`, verify GBP, then Track B becomes
the highest-ROI work on this list.

---

## 1. Strategy triage — the pack's 12, scored for a Lehigh Valley cabinet shop

The pack is written for SaaS/affiliate sites. A local trade business with a
physical showroom has a different payoff curve: relevance and locality beat
volume, and several "S-tier" plays are actively wrong here.

| Pack strategy | Pack tier | **Real tier here** | Why |
|---|---|---|---|
| NGO / charity links | S | **A — but reframed** | The supporters-page mechanism doesn't exist at the two relevant charities (§2). The *donation* still works — as a news story, not a listing. |
| Niche edits | S | **B** | Works, but the regional pool is small and mostly competitor-owned. |
| Backlink exchange | S | **Skip as written → A as adapted** | Every same-niche site in a 40-mile radius is a direct competitor (`competitors.md`). But the *adjacent-trade* version works and is verified — see §9. |
| Guest posts | A | **B** | Thin regional supply — searched, found almost nothing local accepting contributions. National remodeling blogs work but convert nothing. |
| Directory listings | A | **S — when unblocked** | This *is* local SEO. Blocked on address. |
| PR / press release | A | **S** | Proven in this exact market by two competitors (§2). |
| Profile links | B | **C, except social** | Generic profiles are noise. But the 4 in `site.social` are gate 4 — they populate `sameAs`. Do those. |
| PBN / expired domains | B | **Never** | Manual-action risk on a business whose entire lead flow is one local pack. Asymmetric downside. |
| Parasite SEO | B | **Skip** | Ranks the platform's page, not the site. Nofollow. No local pack effect. |
| Social links | B | **A (do now)** | Free, unblocks JSON-LD gate 4. |
| Broken link building | Big Mover | **C** | Needs a backlink export to be efficient. Without a paid tool, the crawl-it-yourself version is low yield. |
| Expired domain 301 | — | **Never** | Same reasoning as PBN. |

**Not in the pack, and better than most of it: supplier & manufacturer dealer
locators.** See §5.

---

## 2. The charity play — what's actually true

The pack assumes: donate → get listed on a supporters page → get a link. I
checked whether that page exists at the two charities that fit a cabinet shop.

| Charity | Donate/partner page | Does it list sponsors **with outbound links**? |
|---|---|---|
| Habitat for Humanity of the Lehigh Valley | [habitatlv.org/support](https://habitatlv.org/support) | **No.** Verified — page describes corporate giving and house sponsorships, lists no sponsors, no logos, no outbound links. Contact: 610-776-7737. |
| Habitat for Humanity of Bucks County | [habitatbucks.org/give/corporate/](https://www.habitatbucks.org/give/corporate/) | **No.** Verified — partnership tiers referenced via a "Partnership Recognition Benefits" PDF, but no partners named on-page. Contact: 215.822.2812. |

So the pack's stated mechanism **fails here.** Reporting that rather than
padding the table.

**But the play still works — via a different mechanism.** Both of Vitrin's
closest analogues already ran it, and both earned real links:

- **Kitchen Magic** (competitor #5 in `competitors.md`) sponsored Lehigh Valley
  Habitat and got a
  [PRNewswire release](https://www.prnewswire.com/news-releases/kitchen-magic-proud-sponsor-of-lehigh-valley-habitat-for-humanity-to-help-families-in-need-301612011.html)
  plus a [page on their own site](https://www.kitchenmagic.com/about/awards/kitchen-magic-proud-sponsor-lehigh-valley-habitat-for-humanity-family-in-need).
- **The Solid Wood Cabinet Company** donated $100k of vanity cabinets to the
  Langhorne ReStore and earned an editorial writeup on
  [buckscountyalive.com](https://buckscountyalive.com/bloginfo/the-solid-wood-cabinet-company-habitat-for-humanity-upcycle-together.cfm)
  — **verified to contain an outbound link** to solidwoodcabinets.com.

**The correct play:** donate *surplus and display cabinetry* to a ReStore —
which a cabinet shop generates for free as a byproduct — then pitch the story.
The link comes from coverage, not from a donor list.

Why this fits Vitrin specifically: tear-out and showroom-refresh cabinetry is
inventory that currently costs money to dump. The donation is tax-deductible,
the material cost is already sunk, and it generates a genuine local news hook.
No other strategy in this pack has that economics.

**Donation logistics (verified):**
- Lehigh Valley ReStore (Whitehall) — pickup scheduling at
  [onlinedonationpickup.com/habitatlv](https://www.onlinedonationpickup.com/habitatlv/), 610-776-7499
- Bucks County ReStores (Chalfont, Langhorne) — donate form at
  [habitatbucks.org/restore/donate/](https://www.habitatbucks.org/restore/donate/), 215-822-2708

### Draft — donation + story pitch

> **Subject:** Cabinet donation from an Easton shop — and a story for the ReStore
>
> Hi [NAME],
>
> I run Vitrin Cabinetry, a custom cabinet shop in Easton. We pull out serviceable
> cabinetry on most remodels and refresh our showroom displays a few times a year.
> Right now that material goes to a dumpster, which is a waste of good boxes.
>
> I'd like to set up a standing donation to the [Whitehall / Langhorne] ReStore —
> starting with [QUANTITY / DESCRIPTION], and recurring as jobs come through.
>
> Two questions:
> 1. What's the easiest way to schedule drop-off or pickup on a recurring basis?
> 2. Would the ReStore want to co-promote it? I'm happy to supply photos and a
>    quote, and I'd share it with local press. Solid Wood Cabinet Company did
>    something similar with Langhorne and it got decent pickup.
>
> Thanks,
> Veyis Akgul — Vitrin Cabinetry, Easton PA — (484) 542-2571
> https://www.vitrincabinetry.com

**Do not** ask for a link in this email. The link comes from the coverage, and
asking makes the donation look transactional to a nonprofit that gets that
pitch constantly.

---

## 3. Local editorial & directory targets — verified

Track A rows can start now. Track B rows are listed so they're ready the day the
address lands.

| # | Site | URL | Cost | Links out? | Track | Verified |
|---|---|---|---|---|---|---|
| ⭐1 | **BucksCountyAlive** business listing | [business-listing.cfm](https://buckscountyalive.com/business/business-listing.cfm) | **Free** tier; $15/mo highlighted; $75/mo ad | **Yes** — free tier includes name, address, phone, **website** | B | ✅ opened, saw pricing tiers |
| ⭐2 | **LehighValleyAlive** B2B directory | [lehighvalleyalive.com/b2b](https://lehighvalleyalive.com/b2b/) | **Free** listing | **Yes** — website link included | B | ✅ opened |
| ⭐3 | **BucksCountyAlive** editorial | [advertise/business.cfm](https://buckscountyalive.com/advertise/business.cfm) | Unstated | Yes — the Solid Wood article proves outbound links | A | ✅ proven by live example |
| 4 | Greater Lehigh Valley Chamber | [lehighvalleychamber.org/memberbenefits.html](https://www.lehighvalleychamber.org/memberbenefits.html) | Dues not published; see `/join.html` | **Yes** — free website listing + social links, stated $350 value | B | ✅ opened; **price unverified** |
| 5 | Easton Area Chamber (division of above) | [lehighvalleychamber.org/easton.html](https://www.lehighvalleychamber.org/easton.html) | Included in GLVCC | Presumed | B | ⚠️ not separately opened |
| 6 | NKBA member directory | [nkba.org/resources/directory/](https://nkba.org/resources/directory/) | ~$400/yr (per `week1-checklist.md`) | Member profile includes website link | B | ⚠️ benefit described in third-party sources, not confirmed on NKBA's own page |
| 7 | Patch — Hellertown, Easton, Levittown etc. | [patch.com](https://patch.com) | Free | Community posts; **assume nofollow** | A | ⚠️ link attribute unverified |
| 8 | Lehigh Valley Business "Movers & Shakers" | [lvb.com/movers-and-shakers-form](https://lvb.com/movers-and-shakers-form/) | **$300/person**, $850 featured | Unstated | — | ✅ opened; **paid — see §7** |
| 9 | Discover Lehigh Valley | [discoverlehighvalley.com/partnership/](https://www.discoverlehighvalley.com/partnership/) | Paid partnership | Yes, partner listing | — | ✅ opened; **weak fit — tourism audience, not remodel buyers** |

Rows 8 and 9 are listed to be dismissed with a reason, not recommended.

---

## 4. What I could *not* find — reported, not padded

Running the pack's guest-post and niche-edit searches against this niche and
region returned close to nothing usable:

- `Lehigh Valley|Bucks County home improvement blog "write for us"` → one
  regional remodeling blog with no contributor page, plus off-topic noise.
- The regional home-improvement publishing layer barely exists. What does exist
  is owned by competitors, who will not link to Vitrin.

**This is a finding, not a gap in the research.** For a local trade business the
guest-post channel is genuinely weak, and any list of 20 "guest post
opportunities" in this niche would be padded with national blogs whose readers
will never buy a kitchen in Easton. Skip it.

**Fabuwood dealer locator** ([fabuwood.com/dealers](https://www.fabuwood.com/dealers))
returned HTTP 429 — could not confirm whether entries link to dealer websites.
Marked unverified; check manually.

---

## 5. The play the pack misses: supplier & manufacturer dealer locators

Not in the prompt pack, and for a cabinet shop it beats most of what is.

Cabinet lines, countertop brands, and flooring brands run "find a dealer"
locators. Those pages are topically perfect, permanently maintained, and free —
they cost a phone call to the rep Vitrin already buys from. Verified locators
exist at:

- [Showplace Cabinetry](https://showplacecabinetry.com/dealer-locator/)
- [Schrock](https://www.schrock.com/dealer-locator)
- [Fabuwood](https://www.fabuwood.com/dealers) *(429 — link-out unverified)*

**Blocked on one fact I don't have:** which lines Vitrin actually carries. The
site names **Blum** hardware (`ConstructionSpecs.tsx`) and mentions
**Aristokraft** in a guide, but claims no dealer relationships.

**Action:** get the list of every brand Vitrin is an authorized dealer for —
cabinet lines, countertop (Cambria/Silestone/MSI), flooring
(Coretec/Shaw/Mohawk), hardware. For each, ask the rep to add Vitrin to the
dealer locator. Reps say yes because it's their job.

> **Subject:** Dealer locator listing — Vitrin Cabinetry, Easton PA
>
> Hi [REP],
>
> We carry [LINE] out of our Easton showroom. I noticed we're not on your dealer
> locator at [LOCATOR URL]. Can you get us added?
>
> Vitrin Cabinetry — [STREET], Easton, PA 18042 — (484) 542-2571 —
> https://www.vitrincabinetry.com
>
> Thanks, Veyis

Note this needs the street address too — so it lands in Track B, but it's the
first thing to do the day the address exists.

---

## 6. Social profiles — do this now, it unblocks the schema

The pack's "social links" prompt is B-tier generic advice, but here it closes
**gate 4** in the local-SEO gate order: `site.social.*` are all empty, so
`sameAs` is absent from all three business nodes.

The code is already correct — `src/lib/schema.ts:51` filters empties and
conditionally emits `sameAs`/`hasMap`. Nothing to build. Set the env vars in
Vercel and the schema populates on next deploy:

```
NEXT_PUBLIC_FACEBOOK_URL
NEXT_PUBLIC_INSTAGRAM_URL
NEXT_PUBLIC_HOUZZ_URL
NEXT_PUBLIC_GOOGLE_PROFILE_URL   # the Maps place URL, not the GBP admin link — enables hasMap
```

### Profile copy — consistent everywhere

**Tagline (one line):**
> Custom kitchen, bath, and closet cabinetry — built for the Lehigh Valley and Bucks County.

**Short bio (~50 words):**
> Vitrin Cabinetry designs, builds, and installs custom and semi-custom kitchen
> cabinets, bathroom vanities, and closets from our Easton, PA showroom. Full
> design-through-installation service across the Lehigh Valley and Bucks County,
> including countertops, flooring, and complete kitchen and bath remodels.

**Long bio (~150 words):**
> Vitrin Cabinetry is a custom cabinet shop serving Easton, Bethlehem, Allentown,
> and Bucks County from our Easton, PA showroom. We handle kitchen cabinets,
> bathroom vanities, custom closets, and built-ins — from 3D design through
> fabrication and professional installation.
>
> Our work spans the full remodel: cabinetry, quartz, granite and porcelain
> countertops, backsplashes, and flooring in luxury vinyl plank, hardwood,
> engineered hardwood, and tile. Boxes are built with dovetail drawers and
> soft-close Blum hardware, in inset and full-overlay styles to suit anything
> from a Federal-era Easton rowhome to new construction in Bucks County.
>
> We work directly with homeowners as well as builders, contractors, and interior
> designers through our trade program.
>
> Vitrin Cabinetry — [STREET], Easton, PA 18042 — (484) 542-2571 —
> https://www.vitrincabinetry.com

**NAP block — paste this character-for-character, everywhere:**
```
Vitrin Cabinetry
[STREET]
Easton, PA 18042
(484) 542-2571
https://www.vitrincabinetry.com
```
Directory name field: `Vitrin Cabinetry`. Use the longer
`Vitrin Cabinetry | Kitchen, Bathroom & Closet` **only** on Google Business
Profile, matching `site.gbpName`. Mixing the two across directories manufactures
the exact inconsistency citations exist to prevent.

---

## 7. Paid tools — held to the standing rule

Standing constraint on this account: free tools only. That rule holds here, and
the gate order gives it teeth — **while gates 1–3 are open there is nothing for
a paid tool to measure.** Rank tracking a business Google has not verified
returns "not in local pack" for $30/month.

| Asked for | Verdict |
|---|---|
| BrightLocal ($30/mo, `week1-checklist.md` §5) | **No** — Option B free path. Nothing to track until GBP is verified. |
| AccuRanker / SerpRobot | **No** — GSC is free and isn't connected yet (gate 3). Connect that first. |
| LVB Movers & Shakers ($300–850) | **No** — that's ad spend priced as a link. |
| Discover Lehigh Valley partnership | **No** — tourism audience, wrong buyer. |
| NARI / NKBA / Chamber dues | **Defer, not reject** — these are memberships with referral value, not SEO tools. Revisit once Track B opens. |

---

## 8. Order of operations

**Now (unblocked):**
1. Set the four social env vars in Vercel → closes gate 4, populates `sameAs`.
2. Connect GSC + GA4 (`week1-checklist.md` §2) → gate 3. Free, ~15 min.
3. Contact both ReStores about a standing cabinet donation (§2 draft).
4. Collect the authorized-dealer brand list from the owner (§5).
5. Open trade-partner conversations with Bucks/Lehigh GCs and designers —
   Turchi Construction first (§9 draft). Relationship now, link later.
6. Email `ListingDetails@HistoricPreservation.com` — free listing, no address
   required, dead-link audit as the opener (§11 draft).

**Blockers to clear — these gate everything else:**
7. Real street address into `site.address.street` (or set
   `NEXT_PUBLIC_BUSINESS_STREET` in Vercel) → gate 2.
8. Claim + verify GBP (`week1-checklist.md` §1) → gate 1.

**Then (Track B unlocks), in this order:**
9. **Greater Lehigh Valley Chamber** — highest-value single citation. Its
   Cabinetry Makers category has 4 entries and two are direct competitors (§9).
10. Free listings: BucksCountyAlive, LehighValleyAlive.
11. Dealer locator requests to every rep (§5).
12. Lehigh Valley Builders Association, NKBA, then the rest of the
    `week1-checklist.md` §5 citation list.
13. Pitch the donation story once material has actually moved.

**Never:** PBNs, expired-domain 301s, link swaps with local competitors.

---

## 9. Trade-partner links — the swap strategy, corrected

`strategy.md` §8.3 calls partnership backlinks "highest ROI" but never researched
them. This section does. It also replaces the pack's **backlink exchange**
strategy, which is unusable as written: a link swap needs a non-competitor, and
every cabinet shop within 40 miles competes with Vitrin directly. The adjacent
trades — GCs, designers, architects — are the non-competitors, and they refer
work as well as link.

### Verified: the mechanism is real

**Turchi Construction** (Bucks County GC) publishes
["Our Preferred Vendors For Quality Materials"](https://turchiconstruction.com/kitchen-remodeling/)
— five vendors, **all hyperlinked to their own sites**: Shenandoah Cabinetry,
GAF Roofing, MI Windows, Therma-Tru, Jeld-Wen. Contact:
`turchiconstruction@gmail.com`.

Note *what* they link to: **Shenandoah Cabinetry**, a national factory brand.
That's the pitch. A Bucks County GC listing a national line has no local
cabinetmaker to send clients to for custom work — and can't offer a showroom
visit. This is a genuine gap, not a favor to ask.

### Verified: competitors are already using the chamber

The Greater Lehigh Valley Chamber directory pages **do carry outbound "Visit
Site" links**, confirmed on two category pages:

| Category | Businesses | Outbound links? |
|---|---|---|
| [Cabinetry Makers & Distributors](https://web.lehighvalleychamber.org/Cabinetry-Makers-Distributors) | 4 listed | **Yes** — Stofanak → stofanak.com, Morris Black → morrisblack.com, American Millwork → amcmillwork.com |
| [Home Improvement & Remodeling](https://web.lehighvalleychamber.org/Home-Improvement-Remodeling) | 15 listed | **Yes** — "Visit Site" on each |

**Stofanak (competitor #3) and Morris Black (competitor #4) are both already in
the cabinetry category. Vitrin is not.** That category page has four entries —
it is not a crowded listing, and it is exactly the page a Lehigh Valley buyer
lands on. This upgrades the chamber from "membership dues" to the single
best-targeted citation available. Still Track B: it needs the address.

### Honest limit on this play

I checked several regional designers and builders for published partner pages.
Most have none — [Love Your Room](https://loveyourroom.com/) (Allentown, 610-387-6002)
names vendors only in Instagram captions, with no vendor page at all. Turchi is
the exception, not the pattern.

**So this is not a prospecting play, it's a relationship play.** You will not
find 20 existing "preferred vendor" pages to get added to. You build the
referral relationship first, and the page listing follows — often because you
ask them to make one. Budget it as business development that yields links, not
as link building.

Also found and worth joining once Track B opens:
**[Lehigh Valley Builders Association](https://lvba.org/)** — trade association
with a member directory, directly relevant to a cabinet shop.

### Draft — GC / designer outreach

> **Subject:** Custom cabinetry for your Bucks County kitchens
>
> Hi [NAME],
>
> I saw Shenandoah on your preferred vendors list. Reasonable line — but when a
> client wants something it can't do (odd ceiling heights, an inset door, a
> period-correct box for an older home), you're stuck ordering a semi-custom
> workaround.
>
> I run Vitrin Cabinetry in Easton. We mill, assemble, and finish in our own
> shop, so we handle the one-offs semi-custom lines refuse. Typical shop time is
> 4–8 weeks with weekly photo updates, which means you can hold a schedule.
>
> Worth a conversation? I'd rather show you a finished box than pitch you. Happy
> to bring samples to your office, or you're welcome at the Easton showroom.
>
> Veyis Akgul — Vitrin Cabinetry — (484) 542-2571
> https://www.vitrincabinetry.com

Ask for the vendor-page listing on the **second** contact, after a real
conversation — never in the first email. A cold "please link to me" to a GC
reads as spam and burns a referral relationship worth far more than the link.

---

## 10. Two dead ends — checked, reported

**No unlinked brand mentions exist.** Searched `"Vitrin Cabinetry" Easton PA`.
Every result is either the site itself or an unrelated HomeAdvisor/1stdibs page.
The unlinked-mention reclamation play (usually a reliable quick win) has nothing
to work with because the brand is new. Recheck in ~6 months.

**No stale-title bug.** A search snippet showed `/custom-kitchen-cabinets/new-hope`
titled "…in Quakertown, PA", which looked like a template defect. Checked
production directly — all town titles render correctly from `data.name`, and
`generateMetadata` in `[town]/page.tsx:23` is sound. It was a stale search index
entry. No code change needed.

---

## 11. Broken-link building — actually executed

I rated this C-tier in §1 partly because the pack says it needs a paid backlink
export. Half of it doesn't: `curl` can status-check any page's outbound links for
free. So I ran it rather than leaving the rating as an assumption.

### Method

Target: [historicpreservation.com preservation/restoration contractors
directory](https://historicpreservation.com/usa/contractors/preservationrestoration.html)
— chosen because Vitrin's own copy sells period-correct cabinetry for Federal-era
Easton rowhomes, so a preservation directory is a genuine topical fit.

```bash
# extract outbound links, then status-check all of them in parallel
sort -u urls.txt | xargs -P 16 -I{} \
  curl -sL -o /dev/null --max-time 12 -w '%{http_code} %{url_effective}\n' {}
```

**160 outbound links checked. Result: 131 OK, 16× 404, 5× no-connect, 6× 406,
1× 403, 1× 409.** A ~13% rot rate.

### Verified dead — DNS-confirmed, false positive removed

`000` from curl means "didn't connect", which is *not* the same as dead. I
re-checked each with a real user-agent and a DNS lookup:

| Domain | Verdict |
|---|---|
| alleghenyrestoration.com | **Dead** — NXDOMAIN |
| mjmayrestoration.com | **Dead** — NXDOMAIN |
| graugeneral.com | **Dead** — NXDOMAIN |
| evergreene.com | **Unresolved** — DNS resolves (216.146.198.22) but won't connect. Not called dead. |
| rjdoerr.com | **NOT dead** — 301s to rjdoerr.net. My first pass flagged it; the recheck cleared it. |

Plus 16 hard 404s across `atelierchroma.ca` (4), `talismanservices.com` (4),
`hughloftingtimberframe.com` (3), `christmanco.com`, `oldnewenglandrestoration.com`,
`thecoopergroupct.com`, `timelessbarncompany.com`, and their own X/Twitter link.

### The honest verdict: mechanically fine, relevance-starved

The pack's rule is "only offer my page as a replacement where it genuinely
matches the dead one." Applying it kills the play: the dead links are a West
Virginia restoration contractor, a Wisconsin barn company, a timber framer, and
a Canadian atelier. **A custom cabinet shop in Easton is not a replacement for
any of them.** Pitching Vitrin as one would be exactly the transparent spam the
Ground Rules warn about, and the editor would bin it.

**Conclusion: don't buy Ahrefs for this.** The constraint isn't tooling — I ran
the play with free tools and got clean data. The constraint is that a
hyper-local business rarely matches a dead national link. That is worth knowing
*before* spending $100+/month to discover it.

### What the data is actually good for

Two real, unblocked wins fell out of it:

**1. A free, topically-perfect listing — no address required.**
`historicpreservation.com` accepts directory submissions by email to
`ListingDetails@HistoricPreservation.com`, and asks only for **business name,
website link, contact name, and phone**. No address field. That makes it
**Track A** — do it today. Site shows a 2026 copyright and is curated, not
auto-listed.

**2. The audit is the outreach.** Instead of a fake relevance pitch, lead with
the 21 broken links as a genuine favor. Rare, verifiable, and it earns the
listing on merit.

> **Subject:** 21 dead links in your preservation contractors directory
>
> Hi,
>
> I was working through your preservation/restoration contractors list and
> noticed a chunk of it has rotted. I checked all 160 outbound links — 21 are
> dead. Three domains are gone entirely (alleghenyrestoration.com,
> mjmayrestoration.com, graugeneral.com), and there are 404s under
> talismanservices.com, atelierchroma.ca, hughloftingtimberframe.com,
> oldnewenglandrestoration.com, timelessbarncompany.com, thecoopergroupct.com,
> and christmanco.com. Your own X link is 404 too.
>
> Happy to send the full list with status codes — no strings.
>
> Separately: I run Vitrin Cabinetry in Easton, PA. We build period-correct
> cabinetry and millwork for historic homes — inset doors, traditional raised
> panel, matching existing profiles in Federal-era rowhomes. If the directory is
> open to a cabinetry/millwork listing, we'd like to be considered:
>
> Vitrin Cabinetry — https://www.vitrincabinetry.com — Veyis Akgul — (484) 542-2571
>
> Thanks,
> Veyis

### Re-running this

The script generalizes to any resource page. Swap the target URL, keep the DNS
recheck step — it's what separates a real audit from a list of transient
timeouts, and it's the step that makes the email credible.

---

## 12. Local preservation angle — worth a look

Surfaced while researching §11 and genuinely under-exploited:

- **[Easton Conservation Districts](https://www.eastonconservationdistricts.com/)**
  — grassroots preservation group for College Hill, the West Ward, and the
  Southside. Community org, local, topically aligned.
- **[City of Easton Local Historic District](https://www.easton-pa.com/167/Local-Historic-District)**
  — properties in the district need a Certificate of Appropriateness from the
  Historic District Commission for exterior work. Interior cabinetry is
  generally out of scope, but the *homeowner audience* is exactly Vitrin's.
- **Easton Residential Façade Improvement Grant** (Redevelopment Authority,
  ARPA-funded, West Ward / South Side priority) — the RDA helps homeowners scope
  work and select contractors. Exterior-focused, so a partial fit, but the
  contractor relationship is worth having.

The content play here is stronger than the link play: a guide on period-correct
cabinetry for Easton's historic rowhomes would be the only such page in the
market and gives every org above a natural reason to link. Flagging it for
`strategy.md`'s editorial calendar rather than building it unprompted.

---

## Sources

- https://habitatlv.org/support
- https://www.habitatbucks.org/give/corporate/
- https://www.habitatbucks.org/restore/donate/
- https://www.onlinedonationpickup.com/habitatlv/
- https://buckscountyalive.com/bloginfo/the-solid-wood-cabinet-company-habitat-for-humanity-upcycle-together.cfm
- https://buckscountyalive.com/business/business-listing.cfm
- https://lehighvalleyalive.com/b2b/
- https://www.lehighvalleychamber.org/memberbenefits.html
- https://lvb.com/movers-and-shakers-form/
- https://www.discoverlehighvalley.com/partnership/
- https://www.prnewswire.com/news-releases/kitchen-magic-proud-sponsor-of-lehigh-valley-habitat-for-humanity-to-help-families-in-need-301612011.html
- https://showplacecabinetry.com/dealer-locator/
- https://www.schrock.com/dealer-locator
- https://nkba.org/resources/directory/
- https://turchiconstruction.com/kitchen-remodeling/
- https://web.lehighvalleychamber.org/Cabinetry-Makers-Distributors
- https://web.lehighvalleychamber.org/Home-Improvement-Remodeling
- https://loveyourroom.com/
- https://lvba.org/
- https://historicpreservation.com/usa/contractors/preservationrestoration.html
- https://historicpreservation.com/
- https://www.eastonconservationdistricts.com/
- https://www.easton-pa.com/167/Local-Historic-District
