# Public crawler metadata build

`npm run build` now emits route-specific HTML heads for every preserved route, a noindex 404.html, sitemap.xml and robots.txt. The route catalogue in src/lib/seo-routes.json is shared with client-side metadata updates. This prepares crawler metadata only: React body content still renders in the browser. Full content prerendering and production HTTP404 behavior remain separate release gates.

Build QA/preview candidates with `VITE_SITE_INDEXING=disabled`. This sets noindex/nofollow in all emitted HTML and client metadata, disallows crawling and omits sitemap URLs. Indexing configuration must be read back on the actual hosted artifact before acceptance; local generated output does not change deployed QA.

The social image uses the existing real512x512 Tirak app icon and a summary card. It replaces the missing og.jpg reference and fabricated category image dimensions. A dedicated wide campaign preview creative remains open. The unsupported SearchAction for nonexistent /search has been removed. Favicon/Apple/Android icons remain existing Tirak assets with actual16/32/180/192/512dimensions.

October20 verification:84website tests, app/node TypeScript and production build passed. Generated raw heads were checked across21routes; JSON-LD parsed; sitemap XML parsed; private/duplicate paths excluded. Separate disabled-indexing build verified22HTML artifacts, robots disallow and empty sitemap. Browser unknownroute→Contact navigation verified robots reset, absolutecanonical and matching page/OG/Twittertitles. No public promotion performed.
