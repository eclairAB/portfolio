# Portfolio Website: Vue 3 + Vuetify

Build a personal portfolio website for **Alan Golpeo**, a web developer. All content comes from the CV file below. Do not invent anything that is not in the CV.

## Source of truth

- **CV file:** `./Alan-Golpeo-Web-Developer-CV.pdf` (adjust the path if the file lives elsewhere)
- Read it locally before writing any code. Use `pdftotext -layout`, `pdfplumber`, or whatever PDF tool is available.
- If the CV is missing, stop and ask for the correct path. Do not continue with placeholder content.

## Step 1: Extract the CV into structured data

Parse the PDF into `src/data/profile.ts`, which is the only place content lives. Pages and components read from this file and never hardcode copy.

```ts
export interface Profile {
  name: string
  title: string                  // e.g. "Full-Stack Web Developer"
  tagline: string                // one client-friendly sentence
  summary: string                // 2-3 sentences, plain language
  location?: string
  contact: { email?: string; phone?: string; linkedin?: string; github?: string; website?: string }
  services: { title: string; description: string; icon: string }[]   // client-facing, no jargon
  projects: Project[]
  experience: { role: string; company: string; period: string; highlights: string[] }[]
  education: { school: string; program: string; period?: string }[]
  skills: { category: string; items: string[] }[]                    // used on the Technical page
  certifications?: string[]
}

export interface Project {
  name: string
  clientSummary: string          // what it did for the client, plain language
  outcome?: string               // measurable result, only if the CV states one
  tech: string[]                 // used on the Technical page
  technicalNotes?: string        // architecture, integrations, challenges
  link?: string
  repo?: string
}
```

### Extraction rules

- Copy facts exactly: names, dates, numbers, employers, and technologies.
- **Rewrite for readability, never for embellishment.** `clientSummary`, `tagline`, and `services` may be reworded into plain language, but they must stay true to the CV.
- If a field has no data in the CV, leave it out. Do not guess.
- After extraction, create `TODO.md` listing missing or unclear items so the owner can fill them in. Examples: no email found, project has no outcome, no profile photo.

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

### Route `/`: Home (client-facing)

Audience is non-technical: business owners, recruiters, and prospective clients. **No tech stack lists, framework names, or jargon on this page.** Describe outcomes, not tools.

Sections, in order:

1. **Hero:** name, title, tagline, and two buttons: "View my work" (scrolls to projects) and "Get in touch" (scrolls to contact).
2. **About:** short summary, optional photo if one is provided.
3. **What I can do for you:** service cards from `profile.services`.
4. **Selected work:** project cards showing `name`, `clientSummary`, and `outcome` if present. Include a "Live site" link if available. Do not show `tech` here.
5. **Experience snapshot:** brief timeline of roles and companies with 1-2 plain-language highlights each.
6. **Contact:** email, social links, and a simple mailto button. No backend form unless the owner asks for one.
7. **Footer:** a link to the Technical page, labeled something like "Looking for the technical details?"

### Route `/technical`: Technical details

Audience is developers, technical hiring managers, and CTOs.

Sections, in order:

1. **Header:** short intro and a "Back to portfolio" link.
2. **Tech stack:** skills grouped by `profile.skills` category, shown as chips or icon grids.
3. **Project deep-dives:** for each project, show `tech` chips, `technicalNotes`, and `repo` or live links.
4. **Experience (technical view):** full `experience.highlights` with tools and responsibilities.
5. **Education and certifications.**
6. **Download CV:** button linking to the PDF. Copy the PDF into `public/` for this.

## Project structure

```
src/
  main.ts
  App.vue
  plugins/vuetify.ts
  router/index.ts
  data/profile.ts
  layouts/DefaultLayout.vue        # app bar, footer
  pages/
    HomePage.vue
    TechnicalPage.vue
  components/
    home/ HeroSection.vue AboutSection.vue ServicesGrid.vue ProjectCard.vue ExperienceTimeline.vue ContactSection.vue
    technical/ SkillGroup.vue ProjectDetail.vue
  assets/
public/
  Alan-Golpeo-Web-Developer-CV.pdf
```

## Design guidelines

- Define a custom Vuetify theme (light and dark) in `plugins/vuetify.ts`. Support dark mode with a toggle in the app bar.
- Pick a restrained palette: one primary, one accent, and neutral surfaces. Avoid default Vuetify blue.
- Pick one typeface pairing via Google Fonts and apply it through the Vuetify theme.
- App bar: logo/name on the left; links to Home and Technical on the right; theme toggle.
- Fully responsive. Check mobile (360px), tablet, and desktop.
- Use `v-container`, `v-row`, `v-col`, `v-card`, `v-chip`, `v-timeline`, and `v-btn`. Avoid custom CSS where a Vuetify utility class works.
- Subtle scroll or fade-in transitions only. No heavy animation.

## Quality requirements

- **Accessibility:** semantic headings (one `h1` per page), alt text on images, keyboard navigable, AA contrast in both themes.
- **SEO:** unique `<title>` and meta description per route, Open Graph tags in `index.html`.
- **Performance:** lazy-load the Technical route, optimize images, and tree-shake Vuetify through `vite-plugin-vuetify`.
- **Code:** TypeScript with no `any`, small single-purpose components, and ESLint and Prettier configured.

## Deployment

- Static build with `npm run build`.
- Target: Netlify, Vercel, or GitHub Pages (owner's choice).
- If using Vue Router history mode, add a SPA fallback (`_redirects` for Netlify, `vercel.json` rewrites, or `404.html` for GitHub Pages).

## Definition of done

- [ ] All copy comes from `src/data/profile.ts`, which was extracted from the CV
- [ ] Home page contains no technical jargon or tech stack lists
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