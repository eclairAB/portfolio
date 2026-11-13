// Single source of truth for all site copy. Both pages read from this file.
// Facts come from Alan-Golpeo-Web-Developer-CV.pdf. Anything missing is marked TODO(owner)
// in a comment or in a `todos` field (todos are shown only in `npm run dev`, never in production).

export interface Project {
  name: string
  /** One line: the problem the client or employer had. */
  problem: string
  /** One line: what the owner built. */
  built: string
  tech: string[]
  /** Measurable result, only if the CV states one. */
  result?: string
  /** Extra implementation detail, shown on the Technical page. */
  technicalNotes?: string
  /** Simple left-to-right flow rendered as a diagram on the card. */
  diagram?: { steps: string[]; caption?: string }
  /** Before/after comparison rendered as bars on the card. */
  comparison?: { label: string; before: number; after: number; unit: string }
  image?: { src: string; alt: string }
  link?: { href: string; label: string }
  repo?: string
  /** Missing facts for the owner to supply. Visible in dev mode only. */
  todos?: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  /** Bullets exactly as written in the CV. Home shows the first one; Technical shows all. */
  highlights: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  availability: string
  summary: string
  location?: string
  contact: { email?: string; linkedin?: string; github?: string; website?: string }
  /** Short stack list shown in the Home hero. Every item also appears in `skills`. */
  heroStack: string[]
  keyResults: { value: string; label: string }[]
  projects: Project[]
  codeSamples: { name: string; description: string; url: string }[]
  howIWork: string
  experience: Experience[]
  education: { school: string; program: string; period?: string }[]
  skills: { category: string; items: string[] }[]
  languages?: string[]
  certifications?: string[]
}

/** Public URL of the deployed site, used for canonical and Open Graph tags. */
export const SITE_URL = 'https://eclairab.github.io/portfolio/'

// TODO(owner): add the final CV PDF to /public and confirm this filename.
const CV_FILE = 'Alan-Golpeo-Web-Developer-CV.pdf'
export const cvUrl = `${import.meta.env.BASE_URL}${CV_FILE}`

/** First professional role (Infosoft, Nov 2019). Month is 0-based. */
const CAREER_START = { year: 2019, month: 10 }

/** Full years of experience since CAREER_START. */
function yearsOfExperience(now = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.year) * 12 + now.getMonth() - CAREER_START.month
  return Math.floor(months / 12)
}

const years = yearsOfExperience()

export const profile: Profile = {
  name: 'Alan Benedict Golpeo',
  title: 'WordPress & Full-Stack Developer',
  tagline:
    `WooCommerce payments, Laravel and Vue.js apps, and fast WordPress sites. ${years} years’ experience. ` +
    'Remote from the Philippines, UK/US overlap hours available.',
  availability: 'Open to remote roles with UK/US teams.',
  summary:
    `I’m a WordPress & full-stack developer with ${years} years of experience building and customizing ` +
    'WordPress plugins and themes, focused on WooCommerce payment integrations and site performance. ' +
    'I also bring full-stack experience with Laravel and Vue.js, so I can build custom solutions ' +
    'beyond WordPress’s native capabilities when a project calls for it.',
  location: 'Remote, Philippines (UK/US overlap hours available)',
  contact: {
    email: 'Abg.rkls@gmail.com',
    linkedin: 'https://linkedin.com/in/ab-golpeo',
    github: 'https://github.com/eclairAB',
  },
  heroStack: [
    'WordPress',
    'WooCommerce',
    'Stripe',
    'Asaas (PIX, boleto, cards)',
    'PHP',
    'Laravel',
    'Vue.js',
  ],
  keyResults: [
    { value: '10s → 2s', label: 'page load time after a speed overhaul' },
    { value: '12,000', label: 'Google Play downloads for a NativeScript app' },
    { value: '5', label: 'locations running a Vue 3 visitor kiosk' },
    { value: `${years} yrs`, label: 'building WordPress and full-stack projects' },
  ],
  projects: [
    {
      name: 'Payment system for a Brazilian marketplace',
      problem:
        'A Brazilian marketplace needed PIX, boleto and card payments, with vendors paid out automatically.',
      built:
        'A custom WooCommerce payment gateway on Asaas that handles refunds and withdrawals, plus the payout architecture that splits each payment between vendors.',
      tech: ['WooCommerce', 'Asaas', 'PIX', 'PHP'],
      technicalNotes:
        'Freelance, part-time, Feb – Mar 2026. Custom WooCommerce payment gateway integrating Asaas (PIX, boleto, cards), handling refunds and withdrawals. Designed a marketplace payout architecture to split payments and pay out vendors automatically.',
      diagram: {
        steps: [
          'Customer checkout',
          'Custom WooCommerce gateway',
          'Asaas: PIX, boleto, cards',
          'Split vendor payouts',
        ],
        caption: 'Refunds and withdrawals are handled through the same gateway.',
      },
      todos: [
        'Confirm webhook or reconciliation details.',
        'Add any volume or scale figure.',
        'Confirm whether it was PHP-only or used Laravel.',
      ],
    },
    {
      name: 'Travel eSIM shop',
      problem:
        'A company website needed to sell Nordic eSIMs to tourists, with online card payments.',
      built:
        'Integrated Nordic eSIM into the WordPress site and implemented Stripe payments through WooCommerce, using webhooks.',
      tech: ['WordPress', 'WooCommerce', 'Stripe', 'Webhooks'],
      technicalNotes:
        'Integrated Nordic eSIM on the WordPress site. Stripe payment implementation for eSIM purchases using the WooCommerce plugin and webhooks.',
      diagram: { steps: ['WooCommerce checkout', 'Stripe payment', 'Webhooks', 'Nordic eSIM'] },
      todos: [
        'Confirm the order of the checkout / webhook flow in the diagram.',
        'Add order volume if known.',
      ],
    },
    {
      name: 'Website speed overhaul',
      problem: 'The company website took 10 seconds to load.',
      built:
        'Implemented caching and an automatic image optimization script that runs on every upload.',
      tech: ['WordPress', 'Caching', 'Image optimization'],
      result: 'Page load time cut from 10s to 2s',
      technicalNotes:
        'Implemented caching and an automatic image optimization script that runs on upload, so new images stay optimized without manual work.',
      comparison: { label: 'Page load time', before: 10, after: 2, unit: 's' },
      todos: ['Add before/after PageSpeed or GTmetrix screenshots, or exact metrics.'],
    },
    {
      name: 'Environmental sensor dashboard',
      problem:
        'Water level and air quality sensor readings from the Loriot provider needed to be visible in one place.',
      built:
        'Used Python to bring the Loriot sensor readings into an Apache Superset BI dashboard.',
      tech: ['Apache Superset', 'Python', 'Loriot'],
      technicalNotes:
        'Implemented the Superset BI tool to display water level and air quality sensor readings from the Loriot provider using Python.',
      diagram: {
        steps: ['Water level & air quality sensors', 'Loriot', 'Python', 'Apache Superset'],
      },
      todos: ['Add the number of sensors or the update frequency.'],
    },
    {
      name: 'Tourism mobile app',
      problem: 'A tourism site needed a mobile app.',
      built:
        'Built and published a NativeScript tourism app on Google Play. The app has since been retired.',
      tech: ['NativeScript'],
      result: '12,000 downloads on Google Play (since retired)',
      technicalNotes:
        'Deployed a mobile app built with NativeScript for a tourism site on Google Play. It is no longer listed.',
      todos: ['Add a screenshot if one is available.'],
    },
    {
      name: 'Visitor kiosk',
      problem: 'Visitors at several sites needed a self-service kiosk to scan QR codes.',
      built: 'Built the web app for the kiosk machine in Vue 3, with QR code scanning.',
      tech: ['Vue 3'],
      result: 'Used at 5 locations',
      technicalNotes:
        'Web app for a kiosk machine, built with Vue 3, letting visitors scan QR codes.',
      todos: ['Add technical details of the QR flow.', 'Add a screenshot or photo if available.'],
    },
    {
      name: 'Eclairman’s User Login Blocker',
      problem:
        'Site administrators needed to stop chosen user accounts from logging in without affecting anyone else.',
      built:
        'Wrote and published a free WordPress plugin on the official WordPress.org plugin directory.',
      tech: ['WordPress', 'PHP'],
      technicalNotes: 'WordPress plugin published on the official WordPress.org plugin directory.',
      link: {
        href: 'https://wordpress.org/plugins/eclairman-user-login-blocker/',
        label: 'View on WordPress.org',
      },
      todos: [
        'Add active installs and rating.',
        'Add a link to the GitHub repo if it is public.',
        'Add the plugin banner image.',
      ],
    },
  ],
  // TODO(owner): choose 2–3 public repos with good READMEs to feature. A small public Laravel
  // project (for example a payment webhook handler with tests) would fill the biggest gap.
  // Do not list repos that do not exist.
  codeSamples: [],
  // TODO(owner): mention docs or tests here only if you can point to real examples.
  howIWork:
    'I use AI coding assistants such as Claude Code and GitHub Copilot for routine work: scaffolding, ' +
    'boilerplate, and exploring unfamiliar APIs like payment provider SDKs. I review every change myself ' +
    'and own everything that ships.',
  experience: [
    {
      role: 'Freelance Full-Stack Developer (Part-time)',
      company: 'Remote', // TODO(owner): add the client name if it can be shared.
      period: 'Feb 2026 – Mar 2026',
      highlights: [
        'Built a custom WooCommerce payment gateway integrating Asaas (PIX, boleto, cards) for a Brazilian client, handling refunds and withdrawals.',
        'Designed marketplace payout architecture to split payments and pay out vendors automatically.',
      ],
    },
    {
      role: 'WordPress Developer (Contract)',
      company: 'AWTG Ltd.',
      period: 'Aug 2024 – Present',
      highlights: [
        'Cut page load time from 10s to 2s by implementing caching and an automatic image optimization script on upload.',
        'Integrated Nordic eSIM for tourists on the WordPress site.',
        'Stripe payment implementation for eSIM purchases making use of WooCommerce plugin and usage of Webhooks.',
        'Implemented Superset BI tool to display water level & Air quality sensor readings from Loriot provider using Python.',
      ],
    },
    {
      role: 'WordPress Developer (Full-time)',
      company: 'CAMP Digital',
      period: 'Feb 2024 – Present',
      highlights: [
        'Audited site performance with Screaming Frog and acted on the findings.',
        'Managed content and sites across a WordPress Multisite network on WP Engine.',
      ],
    },
    {
      role: 'WordPress / Full Stack Developer',
      company: 'Codevwork',
      period: 'Oct 2023 – Feb 2024',
      highlights: [
        'Laravel Livewire / Vue.js stack.',
        'Developed custom DIVI modules displaying images and note entries.',
        'Developed custom ACF modules displaying lazy loaded entries.',
      ],
    },
    {
      role: 'WordPress / Full Stack Developer',
      company: 'Infosoft',
      period: 'Nov 2019 – Oct 2023',
      highlights: [
        'Deployed mobile app using NativeScript for tourism site in Google Play with 12,000 downloads.',
        'Built Web App for a Kiosk machine for visitors at 5 locations to scan QR using Vue 3.',
        'Developed ACF modules to display custom PDF upload entries.',
        'WordPress Theme customization.',
      ],
    },
  ],
  education: [
    {
      school: 'STI College Cotabato',
      program: "Bachelor's degree, Information Technology",
      period: '2015 – 2019',
    },
  ],
  // TODO(owner): add Docker, Git, Linux and MySQL only if you confirm them.
  skills: [
    {
      category: 'WordPress',
      items: ['WordPress', 'ACF', 'DIVI', 'WordPress Multisite', 'WP Engine'],
    },
    { category: 'WooCommerce', items: ['WooCommerce', 'Custom payment gateways'] },
    { category: 'Payments', items: ['Stripe', 'Asaas (PIX, boleto, cards)', 'Webhooks'] },
    { category: 'Back end', items: ['PHP', 'Laravel', 'Laravel Livewire', 'Python'] },
    { category: 'Front end', items: ['JavaScript', 'Vue.js', 'Vue 3', 'React'] },
    { category: 'Mobile', items: ['NativeScript', 'React Native'] },
    { category: 'Data & BI', items: ['Apache Superset', 'Loriot'] },
    { category: 'Performance and SEO', items: ['Screaming Frog', 'Caching', 'Image optimization'] },
  ],
  languages: ['English', 'Tagalog'],
}
