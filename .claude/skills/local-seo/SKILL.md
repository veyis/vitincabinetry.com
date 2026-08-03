---
name: local-seo
description: Use when working on local search visibility for this site — contact/NAP data, LocalBusiness JSON-LD, Google Business Profile, citations, the /custom-kitchen-cabinets/[town] landing pages, or when asked why the site isn't showing in the local pack, Google Maps, or "cabinet shop near me" searches. Also use before recommending or buying any SEO tool.
---

# Local SEO

Local rankings for this site are gated by a chain of dependencies. Work on a
later gate while an earlier one is open and the return is zero, no matter how
good the work is.

## The NAP invariant

`src/lib/site.ts` is the only source of name/address/phone/email. Footer,
contact, showroom, trade, privacy, terms, town pages, shop-tour, and both
JSON-LD business nodes all derive from it.

- Never hardcode a phone, email, or address in a page.
- Never reintroduce `NEXT_PUBLIC_BUSINESS_PHONE` / `_PHONE_DISPLAY` /
  `_EMAIL`. They were removed on purpose — they were unset in Vercel, so
  production silently rendered placeholder fallbacks for months.
- `NEXT_PUBLIC_BUSINESS_STREET` is still env-driven and still unset.
  `next.config.ts` warns about it on every production build.

Google matches the site's NAP against the Google Business Profile
character-for-character. "Ste 4" vs "Suite 4" is a mismatch.

## Gate order — do not skip ahead

| # | Gate | State |
|---|------|-------|
| 1 | GBP claimed + verified | **open** — see `week1-checklist.md` §1 |
| 2 | Real `streetAddress` in `site.address.street` | **open** — renders as absent in JSON-LD |
| 3 | GSC + GA4 connected | **open** — no analytics tags in production HTML |
| 4 | `sameAs` social URLs + `hasMap` | **open** — `site.social.*` all empty |
| 5 | Reviews (≥10 before enabling `aggregateRating`) | open |
| 6 | Citation consistency across directories | open |
| 7 | Content: town pages, guides | done and ongoing |

Gates 1 and 2 are hard blockers: the local pack requires a verified physical
address. No schema, content, or paid tool substitutes for one. If asked to buy
an SEO tool while 1–3 are open, say so — the money measures a business Google
has not been told exists.

## Audit the live site, don't assume

```bash
# JSON-LD business nodes: @id, priceRange, and the fields that are usually missing
curl -sL https://www.vitrincabinetry.com/ -o /tmp/vc.html
python3 - <<'PY'
import re, json
h = open('/tmp/vc.html').read()
for b in re.findall(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', h, re.S):
    it = json.loads(b)
    if 'Breadcrumb' in str(it.get('@type')): continue
    addr = it.get('address') or {}
    print(it.get('@type'), '|', it.get('@id'))
    for k in ('streetAddress',): print('   ', k, ':', addr.get(k, '<<MISSING>>'))
    for k in ('sameAs','hasMap','telephone'): print('   ', k, ':', it.get(k, '<<MISSING>>'))
PY

# NAP drift sweep — every page must agree with site.ts
for p in "" contact showroom trade privacy terms shop-tour; do
  echo "/$p $(curl -sL https://www.vitrincabinetry.com/$p | grep -c '542-2571')"
done

# Analytics actually firing in production?
grep -o 'gtag/js?id=[A-Z0-9-]*\|clarity\.ms' /tmp/vc.html | sort -u
```

## Schema map

Two business nodes exist by design, injected in `src/app/layout.tsx`:

| Export in `src/lib/schema.ts` | `@id` | Type | Role |
|---|---|---|---|
| `localBusinessSchema` | `#localbusiness` | CabinetMaker | `provider` on every Service |
| `cabinetStoreSchema` | `#cabinetstore` | FurnitureStore | `seller` on every Product |
| `organizationSchema` | `#organization` | Organization | entity identity — carries `sameAs` |
| `websiteSchema` | `#website` | WebSite | site-level |

Both business nodes share one NAP but carry different `priceRange` (`$$$` vs
`$$`). That is a deliberate service-vs-store split, not a bug — but it is a
known entity-resolution ambiguity. If Google picks the wrong one as primary,
consolidate rather than adding a third node.

## Town pages

`/custom-kitchen-cabinets/[town]` is generated from `src/lib/towns.ts` (15
entries). `/custom-kitchen-cabinets/bucks-county` is a separate hand-written
route, not a `towns.ts` entry — 16 URLs total.

Every `TownData` field is required and must contain real local detail: named
townships, actual housing stock, a specific project. Generic filler turns 15
pages into 15 thin-content pages, which is worse than not having them. Add a
town by appending to `towns.ts`; the route, sitemap, and schema follow.

## Never

- Set `aggregateRating.enabled = true` before ≥10 genuine reviews exist.
  Fabricated ratings are a manual-action risk.
- Let `week1-checklist.md` drift from `site.ts`. It instructs humans what to
  type into GBP and citation directories; when it disagrees with `site.ts` it
  actively manufactures the NAP inconsistency it exists to prevent.
- Change the canonical host. It is `www.vitrincabinetry.com`; the apex 301s in
  `vercel.json`. `vitrincabinetery.com` is the repo and Vercel project name — a
  misspelling, never a URL.
