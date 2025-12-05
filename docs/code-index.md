# Code Index

## Directory Structure

Root application is a Vite + React + TypeScript SPA with Tailwind CSS and Radix UI components. Serverless API endpoints are provided under `api/` for Vercel.

```
.
├── api/                          # Serverless endpoints (Vercel)
│   ├── contact.ts                # Contact form submission handler
│   └── signup.ts                 # Prelaunch signup handler (stub)
├── public/                       # Static assets and redirects
├── src/                          # Application source
│   ├── assets/                   # Images and logos
│   ├── components/               # UI components
│   │   ├── AdaptiveLogo.tsx
│   │   ├── CategoriesGrid.tsx
│   │   ├── CompanionStories.tsx
│   │   ├── FeaturedCompanions.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── ForLocalGuides.tsx
│   │   ├── Header.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SEO.tsx
│   │   ├── SkipToContent.tsx
│   │   ├── StreamlinedHero.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/                   # Shadcn/Radix flavored UI primitives
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Theme provider and hook
│   ├── hooks/
│   │   ├── use-mobile.tsx        # Responsive breakpoint hook
│   │   └── use-toast.ts          # Toast state and helpers
│   ├── lib/
│   │   ├── category-icons.tsx    # SVG icons for categories
│   │   ├── ui-variants.ts        # CVA variants for UI
│   │   └── utils.ts              # Utility helpers (e.g., `cn`)
│   ├── pages/
│   │   ├── Contact.tsx
│   │   ├── DataDeletion.tsx
│   │   ├── Download.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── TirakLanding.tsx
│   ├── App.tsx                   # App shell: providers and routes
│   ├── main.tsx                  # React root render
│   └── index.css                 # Global styles
├── tailwind.config.ts            # Tailwind theme
├── vite.config.ts                # Vite config (aliases, plugins)
├── eslint.config.js              # ESLint config
├── README.md
├── todo.md
└── memory.md
```

## Modules and Relationships

- `src/main.tsx` mounts `<App />` to `#root`.
- `src/App.tsx` composes providers: `ThemeProvider`, `QueryClientProvider`, Radix `TooltipProvider`, and `react-router` routes; renders `Header`, `Toaster`, and `Sonner` toasts.
- `src/pages/*.tsx` define top-level route pages. `Index.tsx` and `TirakLanding.tsx` assemble sections using components.
- `src/components/*` provides reusable sections and UI widgets. `SEO.tsx` handles meta tags; `StreamlinedHero.tsx` provides CTA and dynamic hero; `ThemeToggle.tsx` consumes `ThemeContext`.
- `src/contexts/ThemeContext.tsx` exposes `ThemeProvider` and `useTheme` with system-resolved `actualTheme` and localStorage persistence.
- `src/hooks/use-mobile.tsx` exposes `useIsMobile` based on media query; `src/hooks/use-toast.ts` implements a minimal toast store used by UI to show feedback.
- `src/lib/ui-variants.ts` centralizes CVA-based style variants for buttons, labels, sheets, toasts, etc.
- `src/lib/utils.ts` exports `cn` utility (`clsx` + `tailwind-merge`).
- `api/contact.ts` handles contact submissions with rate limit, validation, sanitization, and stubbed email sending.
- `api/signup.ts` is a safe stub for prelaunch signup, returning success while avoiding PII storage.
- `vite.config.ts` configures React SWC plugin, alias `@` to `src`, and `lovable-tagger` in development.
- `tailwind.config.ts` defines design tokens, fonts, colors, animations, and content paths.

## Key Functions and Components

- `ThemeProvider(props)` in `contexts/ThemeContext.tsx`: Manages theme state, resolves system preference, applies classes to `documentElement`, and exposes `useTheme`.
- `useIsMobile()` in `hooks/use-mobile.tsx`: Reactive boolean tied to `MOBILE_BREAKPOINT` for responsive behavior.
- `useToast()` and `toast()` in `hooks/use-toast.ts`: In-memory toast store with add/update/dismiss/remove, enforcing `TOAST_LIMIT` and delayed removal.
- `cn(...inputs)` in `lib/utils.ts`: Tailwind class deduper/merger.
- `buttonVariants`, `labelVariants`, `sheetVariants`, `toastVariants`, etc. in `lib/ui-variants.ts`: CVA variant definitions used across UI.
- `Contact handler(req, res)` in `api/contact.ts`: Validates, sanitizes, rate-limits, formats email; simulates sending.
- `Signup handler(req, res)` in `api/signup.ts`: Validates input, logs safe info, returns `{ ok: true }`.
- Section components such as `StreamlinedHero`, `CategoriesGrid`, `FeaturedCompanions`, `CompanionStories`, `HowItWorks`, `ForLocalGuides`, `FinalCTA`, `Footer`, `Header`, `SEO` compose page content.
- `CategoryIcons` in `lib/category-icons.tsx` exports category SVG icon components.

## External Dependencies and Integrations

- UI and UX: `@radix-ui/*`, `class-variance-authority`, `lucide-react`, `tailwindcss`, `tailwind-merge`, `tailwindcss-animate`.
- Data and state: `@tanstack/react-query` for async state, `sonner` and custom toast for notifications.
- Routing: `react-router-dom`.
- Build tooling: `vite`, `@vitejs/plugin-react-swc`, `lovable-tagger` (dev only), TypeScript.
- Platform: Vercel serverless (`@vercel/node`) with `vercel.json` for routing.

## Notes on Relationships

- Pages import section components rather than handling logic themselves, keeping business logic minimal in pages.
- Theme state flows via `ThemeProvider`; consumers like `ThemeToggle` and CSS rely on `documentElement` classes and `data-theme`.
- Toast utilities integrate with Radix UI `Toaster`/`Sonner` components provided in `App.tsx`.

