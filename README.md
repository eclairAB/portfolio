# Alan Benedict Golpeo: Portfolio

Static portfolio site built with Vue 3, Vuetify 3, Vue Router 4, Vite and TypeScript.

All content lives in [`src/data/profile.ts`](src/data/profile.ts), which was extracted from the CV. Both pages read from it, so edit that file to change any copy.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev      # dev server at http://localhost:5173 (shows TODO(owner) boxes)
npm run lint     # ESLint
npm run format   # Prettier
```

## Build

```bash
npm run build    # type-check, build, then prerender each route to static HTML in dist/
npm run preview  # serve the production build locally
```

`npm run build` runs three steps: the client build, an SSR build of `src/entry-server.ts`, and `scripts/prerender.mjs`. The last step writes `dist/index.html` and `dist/technical/index.html` with the page content and per-route title, description, canonical and Open Graph tags already in the HTML, so crawlers and link previews can read them without running JavaScript.

## Routes

- `/`: main portfolio for hiring managers. Shows headline, results, core stack, selected work, how I work, a compact experience timeline and contact.
- `/technical`: full tech stack, project deep-dives with technical notes, full experience bullets, education and the CV download (lazy-loaded).

## Images

- `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` and `og-image.png` (1200×630) are generated from the sources in `assets-src/`. To regenerate them:

  ```bash
  rsvg-convert -w 1200 -h 630 assets-src/og-image.svg -o public/og-image.png
  rsvg-convert -w 32 -h 32 assets-src/favicon.svg -o public/favicon-32.png
  rsvg-convert -w 180 -h 180 assets-src/favicon.svg -o public/apple-touch-icon.png
  cp assets-src/favicon.svg public/favicon.svg
  ```

## Deploy

Upload `dist/` to any static host. Both routes are prerendered. Unknown paths still need an SPA fallback:

- **Netlify**: already handled by `public/_redirects`.
- **Vercel**: add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **GitHub Pages**: run `npm run deploy`. It builds and prerenders with base `/portfolio/`, adds a `404.html` fallback, and pushes `dist/` to the `gh-pages` branch. Change `--base` in the `predeploy` script (both places) if the repo isn't named `portfolio`, and update `SITE_URL` in `profile.ts` and the URLs in `index.html` if the domain changes.

See [`TODO.md`](TODO.md) for facts and assets still needed from the owner.
