# TODO(owner): missing facts and assets

The site shows only facts from the CV. Each item below is marked `TODO(owner)` in the code. Project
TODOs also appear as dashed red boxes on the cards when you run `npm run dev`. They never appear in
production builds.

## Projects (`src/data/profile.ts` → `projects[].todos`)

- [ ] **Brazilian marketplace payments**: confirm webhook or reconciliation details; add any volume or scale figure; confirm whether it was PHP-only or used Laravel.
- [ ] **Travel eSIM shop**: confirm the order of the checkout / webhook flow shown in the diagram; add order volume if known.
- [ ] **Website speed overhaul**: add before/after PageSpeed or GTmetrix screenshots, or exact metrics.
- [ ] **Environmental sensor dashboard**: add the number of sensors or the update frequency.
- [ ] **Tourism mobile app**: add a screenshot if available. The copy already says the app is retired.
- [ ] **Visitor kiosk**: add technical details of the QR flow, and a screenshot or photo.
- [ ] **Eclairman’s User Login Blocker**: add active installs and rating, a GitHub repo link if public, and the plugin banner image.
- [ ] **Screenshots in general**: to show one, add the image to `src/assets/` or `public/` and set `image: { src, alt }` on the project. It replaces the diagram on that card.

## Evidence and content

- [ ] **Code samples**: choose 2–3 public GitHub repos with good READMEs and add them to `codeSamples`. A small public Laravel project (for example a payment webhook handler with tests) would fill the biggest gap. The section stays hidden until this list has entries.
- [ ] **How I work**: mention docs or tests only if you can point to real examples.
- [ ] **Tech stack**: add Docker, Git, Linux and MySQL to `skills` only if you confirm them.
- [ ] **Freelance client name**: the Feb–Mar 2026 role lists only "Remote". Add the client name if it can be shared.
- [ ] **Testimonials**: add a section only if you have real quotes or a LinkedIn recommendation.
- [ ] **Lighthouse line**: optional "Site built for speed" line. Run Lighthouse on the deployed site and use the real numbers.

## Files and setup

- [ ] **CV PDF**: add the final CV to `public/` and confirm the filename in `CV_FILE` (`src/data/profile.ts`). The current PDF still says "Web Developer" in its heading. Update it to "WordPress & Full-Stack Developer" so it matches the site.
- [ ] **CV vs site**: the CV does not mention Claude Code or GitHub Copilot, but the "How I work" section does. Add them to the CV, or remove them from `howIWork`.
- [ ] **Overlapping roles**: AWTG (contract) and CAMP Digital (full-time) both run from 2024 to Present. Confirm this is correct.
- [ ] **Custom domain**: if you move off `eclairab.github.io/portfolio`, update `SITE_URL` in `profile.ts`, the URLs in `index.html`, and the OG image text (`assets-src/og-image.svg`).
- [ ] **Profile photo**: none provided (optional).
