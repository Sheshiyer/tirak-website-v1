# Recommended Minor Improvements

## Formatting and Syntax

- Run `eslint --fix` to ensure consistent style across TS/TSX files.
- Standardize imports order and alias usage (`@/...`) consistently in all pages.
- Confirm `index.css` contains only global styles and remove any unused classes.

## Code Quality

- `use-toast.ts`: Reduce `TOAST_REMOVE_DELAY` to a reasonable value (e.g., 10_000 ms) to avoid long-lived timers.
- `use-mobile.tsx`: Initialize `isMobile` from `matchMedia` synchronously to avoid `undefined` flashes.
- `TirakLanding.tsx`: Extract UTM parsing and company rep detection into a small helper in `lib/utils.ts`.
- Enforce `type` imports where possible to optimize TS emit.

## Documentation

- Expand `README.md` with links to `docs/` and quickstart instructions.
- Add brief JSDoc comments to key hooks/components (ThemeContext, use-toast, ui-variants) clarifying intent.

## Build and Config

- Confirm necessity of `lovable-tagger` plugin; remove if unused to reduce dev overhead.
- Add `preview` note in `README.md` explaining `vite preview` usage and port.

## Testing and Verification

- Add smoke tests for `ThemeProvider` behavior (light/dark/system switching).
- Add a simple integration test to ensure `/api/signup` and `/api/contact` respond to valid payloads.

