# Alan Benedict Golpeo: Portfolio

Static portfolio site built with Vue 3, Vuetify 3, Vue Router 4, Vite and TypeScript.

All content lives in [`src/data/profile.ts`](src/data/profile.ts), which was extracted from the CV. Edit that file to change any copy.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev      # start dev server at http://localhost:5173
npm run lint     # ESLint
npm run format   # Prettier
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Routes

- `/`: client-facing portfolio (no jargon)
- `/technical`: tech stack, project deep-dives, full experience, and the CV download (lazy-loaded)

## Deploy

Upload `dist/` to any static host. The site uses history-mode routing, so it needs an SPA fallback:

- **Netlify**: already handled by `public/_redirects`.
- **Vercel**: add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **GitHub Pages**: run `npm run deploy`. It builds with base `/portfolio/`, adds a `404.html` SPA fallback, and pushes `dist/` to the `gh-pages` branch. Change `--base` in the `predeploy` script if the repo isn't named `portfolio`, or use `--base=/` for a custom domain or `eclairAB.github.io`.

See [`TODO.md`](TODO.md) for content still missing from the CV.
