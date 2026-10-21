# Public source launch baseline — 2026-10-20

Owner selected preserving public Sheshiyer website design/pages and porting verified onboarding repairs. Branch codex/launch-readiness-20261020 begins at15b339e. QA Pineapple has unrelated history and must not replace public source wholesale. Existing city/category routes are retained.

A bounded SEO lifecycle fix resets robots indexability when leaving noindex routes and removes only JSON-LD scripts created by the departing component. Local browser at127.0.0.1:4182 verified missing route noindex→home index; Bangkok adds one structured-data block (3 total), returning home removes it (2 total). Screenshot is in umbrella launch evidence screenshots/public-design-preserved-local-20261020.jpg. This is local source/browser evidence, no deployed SEO acceptance.

Clean npm ci failed because shipped package-lock lacks shadcn and its transitive dependencies. npm install --ignore-scripts --no-audit --no-fund repaired the lock and installed713packages. Vite production build passes in5.34s; node TypeScript project passes. App TypeScript baseline fails8 diagnostics: dark-only ThemeContext conflicts with App/ThemeToggle system/light callers, and CategoryOverview uses unsupported ringColor CSS property. These remain launch repair items; no typecheck pass is claimed.

Existing favicon sizes read with sips:16,32,180touch,192,512. Visual brand approval and deployed content types remain unverified. Source references /og.jpg but that asset is absent; sitemap absent. Do not infer complete SEO readiness from existing head tags.
