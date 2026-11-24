# Tirak website

Public marketing and intake website for Tirak, served at https://www.tirak.app.
It is a Vite + React + TypeScript single-page app using Tailwind CSS and
shadcn/ui, hosted on Vercel as a static build.

## What it does

- Marketing pages: home (`/`), `/tirak`, `/download`, city pages
  (`/bangkok`, `/chiang-mai`, `/phuket`) and category pages (`/culture`,
  `/adventure`, `/wellness`, `/nightlife`, `/food`, `/lifestyle`, `/cinema`,
  `/events`).
- Legal pages: `/privacy`, `/terms`.
- Intake forms, all sent to the Tirak Core API (no serverless functions in
  this repository):
  - Guide application (`/apply`) via `src/lib/core-intake.ts`
    (`/supplier-onboarding`, status and evidence endpoints).
  - Email updates via `src/lib/core-intake.ts` (`/interest`).
  - Contact (`/contact`) and data deletion (`/data-deletion`) via
    `src/lib/support-intake.ts` (`/support-requests`).

## Configuration

Set at build time (Vite `VITE_*` variables):

| Variable | Purpose |
| --- | --- |
| `VITE_CORE_API_URL` | Core API base, including the `/api` prefix. No fallback: forms report the service as unavailable when it is missing. |
| `VITE_SITE_INDEXING` | Set to `disabled` for QA/preview builds: emits `noindex` everywhere, a disallow-all `robots.txt` and an empty sitemap. |
| `VITE_FACEBOOK_ENABLED` | Set to `false` to hide the Facebook footer link. |

## Commands

```sh
npm ci
npm run dev                          # local dev server on port 8080
npm test                             # vitest
npx tsc -p tsconfig.app.json --noEmit
npx tsc -p tsconfig.node.json --noEmit
npm run build                        # production build into dist/
npm run lint
```

## SEO

`src/lib/seo-routes.json` is the route catalogue shared by the client-side
`SEO` component and the build plugin in `scripts/seo-build.ts`. The build emits
a route-specific HTML head for every catalogued route, a `404.html`,
`sitemap.xml` and `robots.txt`. Do not add static copies of `sitemap.xml` or
`robots.txt` to `public/`; they are generated.

## Further reading

See `docs/` for release preparation, architecture and verification notes.
