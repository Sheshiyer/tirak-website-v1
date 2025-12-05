# Architecture Summary

## High-Level Diagram

```mermaid
flowchart TD
  subgraph Client[Client SPA]
    A[main.tsx] --> B[App.tsx]
    B --> C[Providers]
    C -->|Theme| D[ThemeProvider]
    C -->|Data| E[QueryClientProvider]
    C -->|UI| F[TooltipProvider]
    B --> G[Router]
    G --> H[Index Page]
    G --> I[TirakLanding]
    G --> J[Static Pages]
    H --> K[Hero/Sections]
    I --> K
    K --> L[Components]
    L --> M[UI Variants]
    L --> N[Hooks]
    L --> O[Icons]
  end

  subgraph Serverless[Vercel Serverless]
    P[/api/contact]
    Q[/api/signup]
  end

  B -. fetch .-> P
  B -. fetch .-> Q
```

## Core Functionality

- The app is a content-rich landing site using React components and Tailwind for styling.
- Routing is client-side via `react-router-dom`, with pages built from reusable section components.
- The theme system supports light/dark/system with persistence and CSS class toggling.
- Toast notifications use a lightweight in-memory store and Radix/Shadcn UI to present feedback.
- Two serverless endpoints provide basic contact form handling and prelaunch signup, intentionally stubbed to avoid PII storage.

## Patterns and Conventions

- Aliased imports using `@` resolve to `src`, enabling clear module paths.
- Components use PascalCase and colocated files in `src/components` and `src/pages`.
- Styling follows Tailwind CSS with `cva`-based variants in a central `lib/ui-variants.ts` to maintain consistency.
- Hooks are small, focused utilities (`useIsMobile`, `useToast`).
- Providers are composed at `App.tsx` for global concerns (theme, query client, tooltips, toasts).
- Pages primarily assemble section components, keeping logic in components and hooks.

## Technical Debt and Improvements

- Toast removal delay (`TOAST_REMOVE_DELAY = 1_000_000`) is unusually long; consider shortening to avoid memory growth.
- `useIsMobile` initializes `isMobile` as `undefined` which can trigger double render; consider deriving directly from `matchMedia` without separate state on mount.
- `TirakLanding` uses `useMemo` and manual query parsing for `isCompanyRep`; extracting a URL/utm helper would improve reuse and testability.
- API handlers log to console in production scenarios; replace with structured logging or integrate a proper ESP/DB with environment guards.
- Ensure `SEO` consistently sets canonical URLs across pages and aligns with `vercel.json` redirects.
- Verify that the `lovable-tagger` plugin is needed in development; remove if unused to speed startup.

