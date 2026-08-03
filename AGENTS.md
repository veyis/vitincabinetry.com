<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# This repo

Static marketing/SEO site for a cabinet shop. No test suite — `pnpm check`
(tsc + eslint) is the fast gate, `pnpm build` is the real one. Package manager
is **pnpm**, never npm.

- `src/lib/site.ts` is the only source of NAP (name/address/phone/email). Never
  hardcode contact info in a page or reintroduce `NEXT_PUBLIC_BUSINESS_*` vars.
- Canonical host is `www.vitrincabinetry.com`; the apex 301s in `vercel.json`.
- Contact form posts to the PxlPeak leads API (`src/app/api/contact/route.ts`),
  not to email. There is no database in this app.
- Lightning CSS drops `-webkit-backdrop-filter` when paired with the standard
  property — write only `backdrop-filter`.
- To check a change in a real browser (screenshots, Lighthouse, Core Web
  Vitals), use the `chrome-devtools` MCP server.
