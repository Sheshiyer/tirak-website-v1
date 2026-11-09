# Core website release preparation — 7 November 2026

## Review base and source

Prepare this change against `codex/launch-readiness-20261020` at `4d66bb5`, the
source recorded by the current public deployment. Remote `main` at `15b339e`
is an ancestor of that release line. The earlier website PRs merged into the
release branch, so using it as the review base preserves the public design and
already-delivered application, support, city and category work.

This preparation starts from `fa6cbeb`. Its existing changes route the legacy
guide page to `/apply`, point traveler web-app links to `https://app.tirak.app/`,
and remove the unused legacy website form. The redirect is a browser route
transition, not a server HTTP redirect.

## Redirect verification

Open `/supplier-onboarding?utm_source=partner&utm_campaign=guide_launch` in the
browser. The final route must be
`/apply?utm_source=partner&utm_campaign=guide_launch`. Duplicate or unsupported
query fields, including private receipt or token fields, must not be forwarded.
The canonical guide form remains the connected application and recovery path.

The existing acquisition tests cover bounded query forwarding. The connected
admin/website browser journey also checks the URL transition, accepted
attribution, application reload and three private evidence uploads against a
disposable Worker. An HTTP 200 for the old route alone does not prove the
browser transition or form persistence.

## Caller retirement sequence

1. Publish and verify the compatible Core API and this redirect candidate.
2. Check current browser behavior and caller evidence for
   `POST /api/public/vendor-application`, the endpoint used by the old website
   form. Keep the endpoint available while the redirect is unpublished or
   callers remain unresolved.
3. In a separately reviewed API change, retire only the legacy **Core** intake
   path after caller evidence supports it. Its shared handler also accepts Plus
   mode, so do not remove Plus behavior without separate verified replacement.
4. Preserve canonical `/api/supplier-onboarding`, application status and
   evidence routes. The shared admin's active Plus modal uses the canonical
   submission transport; it is not a caller of the old vendor endpoint.

No API route is retired by this website change. Campaign attribution collection
continues within the existing bounded contract; conversion writes retain their
separate gate.

## Local checks and release gates

```sh
npm test
npx tsc -p tsconfig.app.json --noEmit
npx tsc -p tsconfig.node.json --noEmit
npm run build
```

For connected local verification, use an explicit disposable `VITE_CORE_API_URL`
and keep indexing disabled. Production promotion, live caller retirement,
provider delivery, account changes and public store release remain separate.
