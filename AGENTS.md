# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static **Next.js 16 / React 19** site (`pengwenjing.com`) — a
one-page Chinese-language real-estate leasing landing page for 泰康保险大厦
(Taikang Insurance Tower). There is no backend, database, or authentication;
everything is a statically exported front end.

### Services

There is a single service: the Next.js app.

- Dev server: `npm run dev` (runs `next dev --webpack` on http://localhost:3000).
- Lint: `npm run lint`
- Build: `npm run build` (static export via `output: "export"` in `next.config.ts`; output goes to `out/`).
- Preview production export: `npm run start`.

Scripts live in `package.json`; do not duplicate them elsewhere.

### Non-obvious notes

- Both `dev` and `build` are pinned to the **webpack** bundler (`--webpack`), not
  Turbopack. Keep that flag when running/adding scripts to match the project setup.
- `next.config.ts` sets `output: "export"` with `images.unoptimized: true`, so this
  is a fully static site — there are no API routes or server components at runtime.
- Page images are served from `public/assets/*` and referenced as `/assets/<name>`
  in `src/app/page.tsx`. The top-level `assets/` folder is a duplicate source copy;
  the ones actually served are under `public/assets/`.
