# TODO: missing or unclear items from the CV

- [ ] **Profile photo**: none provided. Add one to `src/assets/` and show it in `AboutSection.vue`.
- [ ] **Projects section**: the CV has no dedicated projects list. The projects on the site are built from the work-experience bullets. Confirm they are fine to show publicly, especially client work under NDA.
- [ ] **Project names**: names such as "Travel eSIM shop" and "Visitor kiosk" are descriptive labels, not real product names. Replace them with real names if you have them.
- [ ] **Live links / repos**: only the WordPress plugin has a link. Add `link` or `repo` for any other project that can be shown.
- [ ] **Outcomes**: these projects have no measurable result: Brazilian payment system, eSIM shop, sensor dashboard, plugin. Add numbers if you have any (e.g. transactions processed, active installs).
- [ ] **Freelance client name**: the Feb–Mar 2026 role lists only "Remote". Add the client name if it can be shared.
- [ ] **Overlapping roles**: AWTG (contract) and CAMP Digital (full-time) both run from 2024 to Present. Confirm this is correct.
- [ ] **Certifications**: none in the CV.
- [ ] **Personal website / domain**: none in the CV. Needed for the `og:url` and `og:image` tags.
- [ ] **Open Graph image**: none. Add `public/og-image.png` and an `og:image` tag in `index.html`.
- [ ] **Phone number on the public site**: it is currently shown on the Contact section. Remove `phone` from `profile.ts` if you'd rather not publish it.
- [ ] **Interests**: the CV lists tech conventions and video games. They are not used on the site yet.
- [ ] **Hosting**: choose Netlify, Vercel, or GitHub Pages. `public/_redirects` is already set up for Netlify.
