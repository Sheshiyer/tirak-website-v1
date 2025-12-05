<SEOWorkflowPrompt version="1.0" owner="YOUR_NAME_OR_TEAM" repo_root="{{REPO_ROOT}}" landing_route="{{LANDING_ROUTE}}">
  <Goal>
    Index the codebase, understand the landing page's copy and intent, and produce validated SEO updates:
    page title, meta description, keywords (if required), canonical, robots directives, Open Graph, Twitter Cards,
    JSON-LD, structured heading checks, and complete alt text coverage for all images used on the landing page.
  </Goal>

<Inputs>
    <PrimaryURL>{{PRIMARY_URL}}</PrimaryURL>
    <Brand>{{BRAND_NAME}}</Brand>
    <VoiceAndTone>{{VOICE_AND_TONE_BRIEF}}</VoiceAndTone>
    <TargetAudiences>{{TARGET_AUDIENCES}}</TargetAudiences>
    <BusinessObjectives>{{BUSINESS_OBJECTIVES}}</BusinessObjectives>
    <PrimaryKeywords comma_separated="{{PRIMARY_KEYWORDS}}" />
    <SecondaryKeywords comma_separated="{{SECONDARY_KEYWORDS}}" />
    <Competitors comma_separated="{{COMPETITOR_DOMAINS}}" />
    <MarketLocale>{{MARKET_LOCALE}}</MarketLocale>
    <HreflangLocales comma_separated="{{HREFLANG_LIST}}" />
    <FrameworkHint>{{FRAMEWORK_HINT}}</FrameworkHint> <!-- e.g., "Next.js/React", "Vite/Vanilla", "Nuxt/Vue", "Astro" -->
  </Inputs>

<Constraints>
    <TitleLength min="35" max="60" />
    <MetaDescriptionLength min="120" max="160" />
    <AltTextLength min="5" max="125" />
    <AvoidKeywordStuffing>true</AvoidKeywordStuffing>
    <RespectRobots>false</RespectRobots> <!-- set true if you want to respect current robots meta/robots.txt -->
    <DoNotInventContent>true</DoNotInventContent>
    <SafeFileOps>true</SafeFileOps>
  </Constraints>

<Artifacts>
    <Emit path="artifacts/site_inventory.json" purpose="Discovered pages, templates, images, components" />
    <Emit path="artifacts/landing_dom.json" purpose="Parsed DOM snapshot of landing route" />
    <Emit path="artifacts/copy_outline.md" purpose="Section-by-section copy map with intents and CTAs" />
    <Emit path="artifacts/keyword_plan.json" purpose="Primary/secondary keywords mapped to sections" />
    <Emit path="artifacts/seo_proposals.json" purpose="Proposed titles/descriptions/OG/Twitter/JSON-LD/alt text" />
    <Emit path="artifacts/code_diffs.patch" purpose="Unified diff to apply changes" />
    <Emit path="artifacts/validation_report.md" purpose="Checksums, counts, char limits, Lighthouse-style checklist" />
  </Artifacts>

<Schemas>
    <![CDATA[
    // keyword_plan.json
    {
      "page": "landing",
      "primary_keywords": ["..."],
      "secondary_keywords": ["..."],
      "sections": [
        {
          "id": "hero",
          "intent": "state core value proposition",
          "primary_keywords": ["..."],
          "secondary_keywords": ["..."]
        }
      ]
    }

    // seo_proposals.json
    {
      "page": "landing",
      "meta": {
        "title": "≤60 chars, compelling, primary keyword near start",
        "description": "≤160 chars, benefit-led, includes primary + 1 secondary keyword naturally",
        "keywords": ["optional, only if project requests"],
        "canonical": "https://example.com/",
        "robots": "index,follow"
      },
      "open_graph": {
        "og:title": "...",
        "og:description": "...",
        "og:type": "website",
        "og:url": "https://example.com/",
        "og:image": "https://example.com/og.jpg",
        "og:image:alt": "Alt aligned with hero intent"
      },
      "twitter": {
        "twitter:card": "summary_large_image",
        "twitter:title": "...",
        "twitter:description": "...",
        "twitter:image": "https://example.com/og.jpg"
      },
      "json_ld": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://example.com/",
        "name": "{{BRAND_NAME}}",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://example.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      "alts": [
        {
          "src": "/images/hero-product.png",
          "alt": "Clear, specific description of the image purpose and content",
          "section": "hero"
        }
      ],
      "headings": {
        "h1": "Single H1 reflecting page promise",
        "h2s": ["..."],
        "notes": "No heading level skips; semantic order intact."
      }
    }
    ]]>`</Schemas>`

<Heuristics>
    <Title>
      Place the primary keyword early. Use brand name at end with a separator if space permits.
      Example formats:
      <![CDATA[
      {PrimaryKeyword}: {Benefit Statement} | {Brand}
      {PrimaryKeyword} for {Audience}: {Outcome} | {Brand}
      ]]>
    </Title>
    <Description>
      Lead with outcome and differentiator. Include a soft CTA. Keep natural language. Avoid lists.
    </Description>
    <AltText>
      Describe the image’s purpose in context. Reference product/model only if visible or crucial.
      Avoid “image of” or “picture of.” Keep within 5–125 characters.
    </AltText>
    <OGTwitter>
      Reuse title/description with slight variation to avoid truncation. Prefer a single, high-contrast 1200×630 image.
    </OGTwitter>
    <JSONLD>
      Start with WebSite or Organization. Add BreadcrumbList if applicable. Add Product markup only if real product details exist.
    </JSONLD>
  </Heuristics>

<Phases>

    `<Phase id="0" name="Kickoff & Safety">`
      `<Steps>`
        `<Step id="0.1">`Confirm repo access at {{REPO_ROOT}} and read-only crawl permission for {{PRIMARY_URL}}.`</Step>`
        `<Step id="0.2">`Create a working directory ./artifacts and initialize logs.`</Step>`
        `<Step id="0.3">`Do not modify files outside landing page scope without explicit mapping later.`</Step>`
      `</Steps>`
      `<Deliverables>`
        `<Deliverable>`Log entry noting repo path, framework hint, and landing route.`</Deliverable>`
      `</Deliverables>`
    `</Phase>`

    `<Phase id="1" name="Index Codebase">`
      `<Steps>`
        `<Step id="1.1">`Enumerate files beneath {{REPO_ROOT}} with extensions: .html, .tsx, .jsx, .vue, .astro, .njk, .liquid, .ejs, .hbs, .mdx, .css, .scss.`</Step>`
        `<Step id="1.2">`Detect rendering stack (SSR/SSG/CSR) using package.json and framework clues.`</Step>`
        `<Step id="1.3">`Identify the landing page template/component. Examples:
          - Next.js: app/page.tsx or pages/index.tsx
          - React Vite: src/App.tsx + public/index.html head
          - Nuxt: pages/index.vue
          - Astro: src/pages/index.astro
        `</Step>`
        `<Step id="1.4">`Emit artifacts/site_inventory.json with paths, component names, and all image references used on landing.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="2" name="Crawl & Parse Landing DOM">`
      `<Steps>`
        `<Step id="2.1">`If build step exists, run it and serve locally. Else, parse template files directly.`</Step>`
        `<Step id="2.2">`Fetch the landing HTML for {{PRIMARY_URL}} or from local build output (e.g., /dist/index.html).`</Step>`
        `<Step id="2.3">`Parse DOM: head tags, meta, link rel=canonical, hreflang, favicon, OG/Twitter tags, JSON-LD blocks, headings (H1–H6), images (src/srcset, width/height, alt), anchor links, main copy blocks.`</Step>`
        `<Step id="2.4">`Emit artifacts/landing_dom.json with a faithful snapshot.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="3" name="Copy Understanding & Section Mapping">`
      `<Steps>`
        `<Step id="3.1">`Extract all visible copy by section: hero, benefits, features, social proof, pricing, footer, etc.`</Step>`
        `<Step id="3.2">`Identify page promise, core differentiators, primary CTA, and audience segments.`</Step>`
        `<Step id="3.3">`Map each section to user intent and funnel stage.`</Step>`
        `<Step id="3.4">`Emit artifacts/copy_outline.md with section IDs, summaries, CTAs, and tone notes.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="4" name="Keyword Plan">`
      `<Steps>`
        `<Step id="4.1">`Start with provided PRIMARY/SECONDARY keywords. Validate alignment with discovered copy and audience.`</Step>`
        `<Step id="4.2">`Assign 1 primary and up to 2 secondary keywords per section for natural placement. Avoid repetition across adjacent sections.`</Step>`
        `<Step id="4.3">`Emit artifacts/keyword_plan.json following the schema.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="5" name="SEO Proposal Generation">`
      `<Steps>`
        `<Step id="5.1">`Draft a meta title (≤60 chars) and meta description (≤160 chars) using the Title/Description heuristics.`</Step>`
        `<Step id="5.2">`Set canonical to {{PRIMARY_URL}} unless a different canonical strategy is detected.`</Step>`
        `<Step id="5.3">`Generate OG and Twitter tags. Reuse a single 1200×630 image if present; otherwise propose a path in /public/.`</Step>`
        `<Step id="5.4">`Generate JSON-LD (WebSite and/or Organization). Add BreadcrumbList if the landing page links to major subpages.`</Step>`
        `<Step id="5.5">`Audit existing headings. Propose fixes if multiple H1s or skipped levels appear.`</Step>`
        `<Step id="5.6">`Create alt text for every image in the landing DOM. Use section context + surrounding headline for relevance.`</Step>`
        `<Step id="5.7">`Emit artifacts/seo_proposals.json following the schema.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="6" name="Code Change Plan & Diff">`
      `<Steps>`
        `<Step id="6.1">`Locate the correct head insertion point per framework:
          - Next.js App Router: app/layout.tsx or page.tsx using `<head>` or metadata API.
          - Next.js Pages: pages/_document.tsx or next/head in page components.
          - React (Vite/CRA): public/index.html or react-helmet in App.
          - Nuxt/Vue: app.vue or useHead/composables.
          - Astro: within the .astro page frontmatter/head.
        `</Step>`
        `<Step id="6.2">`Prepare minimal, idempotent changes. Do not duplicate existing tags. Replace only where necessary.`</Step>`
        `<Step id="6.3">`Generate a unified diff artifacts/code_diffs.patch with precise file paths rooted at {{REPO_ROOT}}.`</Step>`
      `</Steps>`
      `<Examples>`
        `<![CDATA[
        --- a/app/page.tsx
        +++ b/app/page.tsx
        @@
        import Head from "next/head";
        export default function Page() {
          return (
            <>
        +     <Head>
        +       <title>Primary Keyword: Benefit | Brand</title>
        +       <meta name="description" content="Benefit-led summary with CTA, ≤160 chars." />
        +       <link rel="canonical" href="https://example.com/" />
        +       <meta property="og:title" content="Primary Keyword: Benefit | Brand" />
        +       <meta property="og:description" content="Benefit-led summary with CTA." />
        +       <meta property="og:type" content="website" />
        +       <meta property="og:url" content="https://example.com/" />
        +       <meta property="og:image" content="https://example.com/og.jpg" />
        +       <meta property="og:image:alt" content="Hero product showcasing {Outcome}" />
        +       <meta name="twitter:card" content="summary_large_image" />
        +       <meta name="twitter:title" content="Primary Keyword: Benefit | Brand" />
        +       <meta name="twitter:description" content="Benefit-led summary with CTA." />
        +       <meta name="twitter:image" content="https://example.com/og.jpg" />
        +       <script type="application/ld+json">{JSON.stringify({/* JSON-LD object here */})}</script>
        +     </Head>
              {/* ...rest of page */}
            </>
          );
        }
        ]]>`
      `</Examples>`
    `</Phase>`

    `<Phase id="7" name="Validation">`
      `<Steps>`
        `<Step id="7.1">`Verify title/description character counts. Report exact lengths.`</Step>`
        `<Step id="7.2">`Confirm single H1 and correct heading order.`</Step>`
        `<Step id="7.3">`Confirm 100% alt coverage for images in the landing DOM.`</Step>`
        `<Step id="7.4">`Confirm canonical points to {{PRIMARY_URL}} (or documented canonical strategy).`</Step>`
        `<Step id="7.5">`Check for duplicate meta tags after patch. Remove conflicts.`</Step>`
        `<Step id="7.6">`Run a Lighthouse-style checklist (programmatic approximation acceptable). Summarize in artifacts/validation_report.md.`</Step>`
      `</Steps>`
    `</Phase>`

    `<Phase id="8" name="Outputs & Handover">`
      `<Steps>`
        `<Step id="8.1">`Summarize all changes with rationale tied to sections and keywords.`</Step>`
        `<Step id="8.2">`List remaining gaps or TODOs that require human input (e.g., missing OG image file).`</Step>`
        `<Step id="8.3">`Emit final artifact paths and a short “apply” instruction: `git apply artifacts/code_diffs.patch`.`</Step>`
      `</Steps>`
    `</Phase>`

</Phases>

<AcceptanceCriteria>
    <Item>Landing page has a single H1 aligned with the page promise.</Item>
    <Item>Title ≤60 chars, description ≤160 chars, both read naturally and reflect keyword plan.</Item>
    <Item>All landing images include contextually accurate alt text within 5–125 chars.</Item>
    <Item>Canonical, OG/Twitter, and JSON-LD validated syntactically.</Item>
    <Item>No duplicated or conflicting meta tags remain.</Item>
    <Item>All artifacts are present and internally consistent.</Item>
  </AcceptanceCriteria>

<FailureModes>
    <Mode>If framework head injection point is ambiguous, document both candidate files and generate diffs for the safest path with comments.</Mode>
    <Mode>If OG image is missing, propose path and filename and add a TODO in validation_report.md.</Mode>
    <Mode>If multiple languages are present, propose hreflang strategy and list required alternates.</Mode>
  </FailureModes>

<Reporting>
    <Format>Concise markdown summary plus links to artifacts. Include exact character counts and a before/after diff snippet for head tags.</Format>
  </Reporting>
</SEOWorkflowPrompt>
