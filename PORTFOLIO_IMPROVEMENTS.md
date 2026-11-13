# Portfolio Improvement Brief

Site: https://eclairab.github.io/portfolio/ (Home page + "Technical details" page)
Owner: Alan Benedict Golpeo, WordPress / full-stack developer, Philippines, 7 years' experience.
Goal: land a remote WordPress or full-stack (Laravel / Vue.js) role with a UK or US company.

Read this whole file before changing anything. Work through the tasks in priority order.

---

## Ground rules (do not break these)

1. **Never invent facts.** No made-up metrics, client names, links, testimonials, install counts, or Lighthouse scores. If a detail is missing, insert a visible `TODO(owner): ...` placeholder in a code comment or a clearly marked content slot, and list it in your final summary.
2. **Only use facts already on the site or in the owner's CV.** The facts available are: 7 years' experience; the project list on the site; 10s to 2s load-time result; 12,000 Google Play downloads; kiosk used at 5 locations; published WordPress.org plugin; the listed stack and employers.
3. **Keep one source of truth for content.** Move roles, projects, and skills into a single data file (for example `src/data/content.ts` or JSON) that both pages read from. Today the experience section is duplicated on both pages and has already drifted out of sync (the Home bullets are shortened rewrites of the Technical ones).
4. Do not remove the dark mode toggle. Do not add heavy dependencies.

---

## Honest assessment (why these changes)

1. **The site is written for the wrong audience.** The Home page speaks to non-technical business owners ("I build and improve business websites"). The people who will hire the owner are technical hiring managers and recruiters, and everything they care about (Stripe, Asaas/PIX, webhooks, Laravel, Vue 3, Python, Superset) is hidden on a secondary page. The best selling points are one click away.
2. **The positioning is inconsistent.** The site says "Web Developer", the CV says "WordPress Developer", and the owner is also pursuing full-stack and Laravel roles. "Web Developer" matches almost no job search. Pick one headline and use it everywhere.
3. **It is a portfolio with no visuals.** Seven text cards, no screenshots, no diagrams, no before/after evidence, and only one outbound link (the plugin). A reader cannot verify or "see" any of the work. Client work may be under NDA, but sanitized diagrams and screenshots are still possible.
4. **The project descriptions are too vague.** "A dashboard that shows live water level and air quality sensor readings" says nothing about the problem, the stack, or the owner's contribution. Only three projects have any result.
5. **It looks generic.** Clean, but it reads as a stock template: green cards, no personality, nothing that proves visual or engineering craft. For a developer whose pitch is "fast-loading pages", the site itself should be proof of that.
6. **The contact section sounds like a freelancer's** ("Tell me about your project") and never says the owner is open to roles. The phone number is also published in plain text, which invites spam and scraping.
7. **The CV download is buried** at the bottom of the secondary page. A recruiter's first need is the CV.
8. **The AI section is generic and slightly risky.** Listing Claude, Claude Code, and GitHub Copilot as "tech stack" next to PHP and Laravel dilutes the stack. The four AI cards could describe anyone. "Docs & tests" is a claim a hiring manager may probe, and the site shows no tests.
9. **Technical weaknesses.** Small light-grey text on a light background is low contrast; the body text and experience bullets are small; alignment is inconsistent (centered hero, left-offset narrow columns, full-width card grids). Page content may not be present in the initial HTML (a fetch of the page returned only the meta tags), which would hurt link previews, search indexing, and recruiter tooling.

---

## P0: Fix first

### P0.1 Reposition for hiring managers
- Make the Home page technical-first. Either merge the "Technical details" content into the Home page, or keep two pages but make the Home page show the stack, the payments work, and the results above the fold.
- Replace the eyebrow `WEB DEVELOPER` with `WORDPRESS & FULL-STACK DEVELOPER`.
- Suggested hero copy (edit tone, keep facts):
  - Tagline: "WooCommerce payments, Laravel and Vue.js apps, and fast WordPress sites. 7 years' experience. Remote from the Philippines, UK/US overlap hours available."
  - Buttons: **Download CV** (primary), **View selected work**, **Email me**.
  - Add one availability line under the buttons: "Open to remote roles with UK/US teams."
- Update `<title>` to `Alan Benedict Golpeo | WordPress & Full-Stack Developer` and the meta description / `og:description` to match the new tagline.

### P0.2 Make the content crawlable
- Verify the page content exists in the initial HTML (view-source, or load with JavaScript disabled). If it only renders client-side, switch to static pre-rendering or static generation so the HTML contains the content.
- Add `og:image` (a simple 1200x630 card with name and headline), a favicon, a canonical URL, and `twitter:card` set to `summary_large_image`.

### P0.3 Put the CV download in the hero and nav
- Add a visible "Download CV (PDF)" button in the hero and a nav link. Keep the existing one at the bottom of the Technical page.
- Link to the current CV PDF in the repo (`TODO(owner): add final CV PDF to /public and confirm filename`).

### P0.4 Contact section and privacy
- Replace "Let's work together / Tell me about your project" with: "Open to remote roles. The best way to reach me is email."
- Remove the plain-text phone number. Keep email, LinkedIn, and GitHub. (The phone stays on the CV.)

---

## P1: Strengthen the work section

### P1.1 Rewrite each project as Problem, What I built, Stack, Result
Use only known facts. Where something is missing, leave a `TODO(owner)` slot instead of guessing. Suggested content:

| Project | What to show | Known facts to use | TODO(owner) |
|---|---|---|---|
| Payment system for a Brazilian marketplace | Payment flow diagram: customer, WooCommerce gateway, Asaas (PIX, boleto, cards), refunds/withdrawals, vendor payout split | Custom WooCommerce gateway, Asaas, refunds and withdrawals, marketplace payout architecture, freelance, Feb to Mar 2026, part-time | Confirm webhooks or reconciliation details; any volume or scale figure; whether it was PHP-only or Laravel |
| Travel eSIM shop | Checkout / webhook flow | Nordic eSIM integration, Stripe, WooCommerce, webhooks | Order volume if known |
| Website speed overhaul | Before/after PageSpeed or GTmetrix screenshots | 10s to 2s, caching, automatic image optimization on upload | Screenshots or exact metrics |
| Environmental sensor dashboard | Architecture sketch: Loriot to Python to Superset | Water level and air quality sensors, Loriot provider, Python, Apache Superset | Number of sensors or update frequency |
| Tourism mobile app | Screenshot if available | Built with NativeScript, 12,000 downloads on Google Play | Say plainly that it is no longer listed on Google Play (see P2.2) |
| Visitor kiosk | Screenshot or photo if available | Vue 3, QR scanning, 5 locations | Tech details of the QR flow |
| Eclairman's User Login Blocker | Plugin banner and link | Published on WordPress.org, PHP | Active installs and rating; link to GitHub repo if public |

- Every card should have: 1-line problem, 1-line what the owner did, stack tags, and a result line when one exists.
- Add an image or diagram slot per card (use placeholders marked `TODO(owner)` until real assets exist). Use simple SVG diagrams where no screenshot is possible.
- Relabel the plugin link from "Live site" to **View on WordPress.org**.

### P1.2 Fix the tech stack section
- Add **WooCommerce** as its own group. It is currently missing even though it is the headline skill.
- Add the remaining stack from the CV: ACF, DIVI, WordPress Multisite, WP Engine, Python, Apache Superset, Screaming Frog, Vue 3, Laravel Livewire. Add Docker, Git, Linux, and MySQL only if the owner confirms (`TODO(owner)`).
- Remove "SEO best practices" as a tag (it is not a technology; fold it into a "Performance and SEO" group with Screaming Frog and caching/image optimization).
- Remove the duplicate-looking WordPress group ("WordPress Development", "Plugin & Theme Customization"); list real tools instead.
- Move the "AI tools" group out of the stack grid (see P1.4).

### P1.3 Add a "Code samples" section
- Link to 2 to 3 public GitHub repositories with good READMEs (setup instructions, screenshots, what it demonstrates).
- This is the biggest evidence gap for Laravel and full-stack roles: the only Laravel role on the CV lasted four months and has no public proof.
- Placeholder: `TODO(owner): choose repos to feature. A small public Laravel project (for example a payment webhook handler with tests) would fill this gap. Do not fabricate repos.`

### P1.4 Rewrite the AI section
- Rename to "How I work", shorten to 2 to 3 sentences, and move it below the projects.
- Keep the honest framing ("I use AI coding assistants for routine work and review every change myself").
- Remove the four generic cards. Only mention tests or documentation if the owner confirms real examples (`TODO(owner)`).
- Remove Claude / Claude Code / GitHub Copilot from the tech-stack grid.

---

## P2: Polish

### P2.1 Visual design and layout
- Pick one alignment system. Currently the hero is centered, About and Experience sit in a narrow left-offset column, and the card grids are full-width. Align everything to one container width.
- Reduce the large empty gap between the hero and About.
- Raise body text to at least 16px and experience bullets to at least 14px.
- Fix contrast: the grey tagline, dates, and location lines should meet WCAG AA (4.5:1). Check both light and dark modes.
- Add some personality: a real project screenshot or diagram in the hero area, or a distinctive accent treatment. Avoid stock illustrations.
- Optional: a small "Site built for speed" line with the portfolio's own Lighthouse scores, but only after running Lighthouse and using the real numbers (`TODO(owner)`).

### P2.2 Honesty and verifiability
- The tourism app is no longer listed on Google Play. Use past tense: "Built and published a NativeScript tourism app (12,000 downloads; since retired)". Do not imply it is live.
- Make sure dates, titles, and numbers match the CV exactly (the Home page and Technical page should come from the same data file after P0 and rule 3).

### P2.3 Experience section
- On the Home page, show a compact timeline (role, company, dates, one line). Keep full bullets in one place only.
- Keep the "(Contract)", "(Full-time)", and "(Part-time)" labels exactly as they are on the CV.

### P2.4 Social proof
- Add a testimonials or recommendations slot only if the owner supplies real quotes or a LinkedIn recommendation (`TODO(owner)`). Otherwise leave it out.

---

## Acceptance checklist

- [ ] Headline and `<title>` read "WordPress & Full-Stack Developer"; no remaining "Web Developer"
- [ ] CV download visible in hero and nav
- [ ] Phone number removed from the page
- [ ] Contact copy says open to remote roles
- [ ] Page content present in initial HTML; `og:image`, favicon, canonical added
- [ ] Single content data file feeds both pages; no duplicated experience copy
- [ ] Each project card has problem, what was built, stack, and result (or a TODO)
- [ ] WooCommerce listed in the tech stack; "SEO best practices" and AI tools removed from the grid
- [ ] "How I work" replaces the AI-assisted workflow section
- [ ] Contrast and font-size checks pass in light and dark mode
- [ ] Final summary lists every `TODO(owner)` placeholder that remains

## Out of scope
- Do not change the owner's job history, dates, or titles.
- Do not add blog, newsletter, or analytics features.
- Do not add content the owner has not confirmed.
