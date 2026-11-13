# Portfolio Website: Vue 3 + Vuetify

Build a personal portfolio website for **Alan Benedict Golpeo**, a WordPress & full-stack developer looking for remote roles with UK/US teams. All content comes from the CV file below. Do not invent anything that is not in the CV.

## Source of truth

- **CV file:** `./Alan-Golpeo-Web-Developer-CV.pdf` (adjust the path if the file lives elsewhere)
- Read it locally before writing any code. Use `pdftotext -layout`, `pdfplumber`, or whatever PDF tool is available.
- If the CV is missing, stop and ask for the correct path. Do not continue with placeholder content.

## Step 1: Extract the CV into structured data

Parse the PDF into `src/data/profile.ts`, which is the only place content lives. Pages and components read from this file and never hardcode copy.

```ts
export interface Profile {
  name: string
  title: string                  // "WordPress & Full-Stack Developer" — use this headline everywhere
  tagline: string                // one sentence naming the core stack and experience
  availability: string           // e.g. "Open to remote roles with UK/US teams."
  summary: string                // 2-3 sentences, based on the CV profile
  location?: string
  contact: { email?: string; linkedin?: string; github?: string; website?: string }  // no phone on the site
  heroStack: string[]            // core stack chips in the Home hero; each also appears in `skills`
  keyResults: { value: string; label: string }[]   // measurable results from the CV only
  projects: Project[]
  codeSamples: { name: string; description: string; url: string }[]   // real public repos only
  howIWork: string               // 2-3 sentences; replaces the old AI-workflow cards
  experience: { role: string; company: string; period: string; highlights: string[] }[]  // CV bullets verbatim
  education: { school: string; program: string; period?: string }[]
  skills: { category: string; items: string[] }[]
  languages?: string[]
  certifications?: string[]
}

export interface Project {
  name: string
  problem: string                // one line
  built: string                  // one line: what the owner built
  tech: string[]                 // stack chips, shown on both pages
  result?: string                // measurable result, only if the CV states one
  technicalNotes?: string        // extra detail, Technical page only
  diagram?: { steps: string[]; caption?: string }        // simple flow diagram
  comparison?: { label: string; before: number; after: number; unit: string }  // before/after bars
  image?: { src: string; alt: string }
  link?: { href: string; label: string }   // e.g. "View on WordPress.org"
  repo?: string
  todos?: string[]               // TODO(owner) notes, rendered in dev mode only
}
```

### Extraction rules

- Copy facts exactly: names, dates, numbers, employers, and technologies.
- **Rewrite for readability, never for embellishment.** `tagline`, `problem`, and `built` may be reworded, but they must stay true to the CV.
- If a field has no data in the CV, leave it out and add a `TODO(owner)` (code comment or `todos` entry). Do not guess.
- Keep experience bullets in one place (`experience.highlights`). Do not keep a second, rewritten copy for the Home page.
- Keep `TODO.md` listing every `TODO(owner)` so the owner can fill them in.

## Tech stack for the site

- Vue 3 with `<script setup>` (Composition API)
- Vuetify 3 (Material Design components)
- Vite
- Vue Router 4 with two routes
- TypeScript
- `@mdi/font` for icons
- No Pinia or backend. This is a static site.

```bash
npm create vite@latest portfolio -- --template vue-ts
cd portfolio
npm i vuetify @mdi/font vue-router
npm i -D vite-plugin-vuetify
```

## Pages

### Route `/`: Home (technical-first)

Audience is technical hiring managers and recruiters for remote WordPress and full-stack (Laravel / Vue.js) roles. **Technical terms, framework names, and tech stack lists are expected on this page.** Show the stack, the payments work, and the results above the fold.

Sections, in order:

1. **Hero:** eyebrow with `title`, name, `tagline`, and three buttons: "Download CV" (primary), "View selected work" (scrolls to projects), and "Email me". Under them, the `availability` line. Beside them, a Results card (`keyResults`) and a Core stack card (`heroStack` chips).
2. **About:** short summary and location.
3. **Selected work:** a project card for each project with Problem, What I built, stack chips (`tech`), Result (if present), and a diagram, comparison, or image when available. Link label comes from `link.label`.
4. **How I work:** the `howIWork` paragraph.
5. **Code samples:** cards from `codeSamples`. Hidden while the list is empty.
6. **Experience:** compact timeline showing role, company, dates, and the first CV bullet. Link to the full history on the Technical page.
7. **Contact:** "Open to remote roles. The best way to reach me is email." Email, LinkedIn, and GitHub. No phone number and no backend form.
8. **Footer:** a link to the Technical page, labeled something like "Looking for the technical details?"

### Route `/technical`: Technical details

Audience is developers, technical hiring managers, and CTOs.

Sections, in order:

1. **Header:** short intro, a "Back to portfolio" link, and a "Download CV (PDF)" button.
2. **Tech stack:** skills grouped by `profile.skills` category, shown as chips. Use real tools only. Do not add soft-skill tags such as "SEO best practices", and do not put AI tools in the grid.
3. **Project deep-dives:** the same project card as Home, in `detailed` mode, which adds `technicalNotes`.
4. **Experience (technical view):** every `experience.highlights` bullet.
5. **Education and certifications.**
6. **Download CV:** button linking to the PDF in `public/`.

## Project structure

```
src/
  main.ts                          # client entry
  entry-server.ts                  # build-time SSR entry used for prerendering
  App.vue
  plugins/vuetify.ts
  router/index.ts
  data/profile.ts
  layouts/DefaultLayout.vue        # app bar, footer
  pages/
    HomePage.vue
    TechnicalPage.vue
  components/
    home/ HeroSection.vue AboutSection.vue HowIWork.vue CodeSamples.vue ContactSection.vue
    shared/ SectionHeading.vue ProjectCard.vue ExperienceTimeline.vue FlowDiagram.vue BeforeAfterBars.vue DevTodo.vue
    technical/ SkillGroup.vue
  assets/
scripts/prerender.mjs              # writes static HTML for each route into dist/
assets-src/                        # SVG sources for favicon and og-image
public/
  Alan-Golpeo-Web-Developer-CV.pdf
  favicon.svg favicon-32.png apple-touch-icon.png og-image.png
```

## Design guidelines

- Define a custom Vuetify theme (light and dark) in `plugins/vuetify.ts`. Support dark mode with a toggle in the app bar.
- Pick a restrained palette: one primary, one accent, and neutral surfaces. Avoid default Vuetify blue.
- Pick one typeface pairing via Google Fonts and apply it through the Vuetify theme.
- App bar: logo/name on the left; links to Home and Technical, a "CV" download button, and the theme toggle on the right.
- Use one container width for every section, left-aligned. Body text is at least 16px and secondary text at least 14px.
- Fully responsive. Check mobile (360px), tablet, and desktop.
- Use `v-container`, `v-row`, `v-col`, `v-card`, `v-chip`, `v-timeline`, and `v-btn`. Avoid custom CSS where a Vuetify utility class works.
- Subtle scroll or fade-in transitions only. No heavy animation.

## Quality requirements

- **Accessibility:** semantic headings (one `h1` per page), alt text on images, keyboard navigable, AA contrast in both themes.
- **SEO:** unique `<title>` and meta description per route, Open Graph tags (including `og:image`), a canonical URL, and a favicon in `index.html`. Page content must be in the initial HTML, so keep the prerender step in `npm run build`.
- **Performance:** lazy-load the Technical route, optimize images, and tree-shake Vuetify through `vite-plugin-vuetify`.
- **Code:** TypeScript with no `any`, small single-purpose components, and ESLint and Prettier configured.

## Deployment

- Static build with `npm run build`.
- Target: Netlify, Vercel, or GitHub Pages (owner's choice).
- If using Vue Router history mode, add a SPA fallback (`_redirects` for Netlify, `vercel.json` rewrites, or `404.html` for GitHub Pages).

## Definition of done

- [ ] All copy comes from `src/data/profile.ts`, which was extracted from the CV
- [ ] Home page shows the stack, payments work, and results above the fold, with "WordPress & Full-Stack Developer" as the headline
- [ ] Every missing fact is a `TODO(owner)` and listed in `TODO.md`; no phone number on the site
- [ ] Technical page contains every skill and project's tech from the CV
- [ ] `TODO.md` lists everything missing from the CV
- [ ] Dark and light themes both work
- [ ] Lighthouse accessibility score of 90 or higher
- [ ] `npm run build` succeeds with no errors or warnings
- [ ] Short `README.md` with setup, dev, and build instructions

## Working instructions for the agent

1. Read the CV and show a short summary of what you extracted before building.
2. Scaffold the project and set up Vuetify and the router.
3. Write `profile.ts` and `TODO.md`.
4. Build the Home page, then the Technical page.
5. Polish the theme and responsiveness, then run the build.
6. Report what is still missing from the CV.