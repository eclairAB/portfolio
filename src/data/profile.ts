// Single source of truth for all site copy. Extracted from Alan-Golpeo-Web-Developer-CV.pdf.

export interface Project {
  name: string
  clientSummary: string
  outcome?: string
  tech: string[]
  technicalNotes?: string
  link?: string
  repo?: string
}

export interface Experience {
  role: string
  company: string
  period: string
  /** Plain-language highlights for the client-facing Home page. */
  clientHighlights: string[]
  /** Full technical highlights, as written in the CV. */
  highlights: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  summary: string
  location?: string
  contact: { email?: string; phone?: string; linkedin?: string; github?: string; website?: string }
  services: { title: string; description: string; icon: string }[]
  projects: Project[]
  experience: Experience[]
  education: { school: string; program: string; period?: string }[]
  skills: { category: string; items: string[] }[]
  languages?: string[]
  certifications?: string[]
}

/** First professional role (Infosoft, Nov 2019). Month is 0-based. */
const CAREER_START = { year: 2019, month: 10 }

/** Full years of experience since CAREER_START, computed when the page loads. */
function yearsOfExperience(now = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.year) * 12 + now.getMonth() - CAREER_START.month
  return Math.floor(months / 12)
}

export const profile: Profile = {
  name: 'Alan Benedict Golpeo',
  title: 'Web Developer',
  tagline:
    'I build and improve business websites, with a focus on online payments and fast-loading pages.',
  summary:
    `I have ${yearsOfExperience()} years of experience building and customizing websites, especially online stores that take payments. ` +
    'I also build fully custom web applications when a project needs more than an off-the-shelf website can offer.',
  location: 'Remote, Philippines (UK/US overlap hours available)',
  contact: {
    email: 'Abg.rkls@gmail.com',
    phone: '+63-936-3300-820',
    linkedin: 'https://linkedin.com/in/ab-golpeo',
    github: 'https://github.com/eclairAB',
  },
  services: [
    {
      title: 'Online payments',
      description:
        'Let customers pay on your website by card and local payment methods, with refunds and payouts handled for you.',
      icon: 'mdi-credit-card-outline',
    },
    {
      title: 'Faster websites',
      description:
        'Find what is slowing your site down and fix it, so visitors are not left waiting.',
      icon: 'mdi-speedometer',
    },
    {
      title: 'Website building & customization',
      description:
        'Custom features, layouts and add-ons for your website, built to match how your business works.',
      icon: 'mdi-web',
    },
    {
      title: 'Custom web & mobile apps',
      description:
        'Tailor-made applications, from visitor kiosks to mobile apps, when a standard website is not enough.',
      icon: 'mdi-cellphone-link',
    },
  ],
  projects: [
    {
      name: 'Payment system for a Brazilian marketplace',
      clientSummary:
        'Let customers pay with Brazilian payment methods (PIX, boleto and cards), with refunds and withdrawals handled, and vendors paid out automatically.',
      tech: ['WooCommerce', 'Asaas', 'PIX', 'PHP'],
      technicalNotes:
        'Custom WooCommerce payment gateway integrating Asaas (PIX, boleto, cards), handling refunds and withdrawals. Designed a marketplace payout architecture to split payments and pay out vendors automatically.',
    },
    {
      name: 'Travel eSIM shop',
      clientSummary:
        'Added Nordic eSIM sales for tourists to the company website, with secure online card payments.',
      tech: ['WordPress', 'WooCommerce', 'Stripe', 'Webhooks'],
      technicalNotes:
        'Integrated Nordic eSIM on the WordPress site. Stripe payment implementation for eSIM purchases using the WooCommerce plugin and webhooks.',
    },
    {
      name: 'Website speed overhaul',
      clientSummary:
        'Made the company website load much faster, and set it up so new images are optimized automatically.',
      outcome: 'Page load time cut from 10 seconds to 2 seconds',
      tech: ['WordPress', 'Caching', 'Image optimization'],
      technicalNotes:
        'Implemented caching and an automatic image optimization script that runs on upload.',
    },
    {
      name: 'Environmental sensor dashboard',
      clientSummary: 'A dashboard that shows live water level and air quality sensor readings.',
      tech: ['Apache Superset', 'Python', 'Loriot'],
      technicalNotes:
        'Implemented the Superset BI tool to display water level and air quality sensor readings from the Loriot provider using Python.',
    },
    {
      name: 'Tourism mobile app',
      clientSummary: 'A mobile app for a tourism website, published on Google Play.',
      outcome: '12,000 downloads on Google Play',
      tech: ['NativeScript'],
      technicalNotes:
        'Deployed a mobile app built with NativeScript for a tourism site on Google Play.',
    },
    {
      name: 'Visitor kiosk',
      clientSummary: 'A self-service kiosk where visitors scan a QR code.',
      outcome: 'Used at 5 locations',
      tech: ['Vue 3'],
      technicalNotes:
        'Web app for a kiosk machine, built with Vue 3, letting visitors scan QR codes.',
    },
    {
      name: 'Eclairman’s User Login Blocker',
      clientSummary:
        'A free add-on that lets a website administrator stop chosen user accounts from logging in, while everyone else logs in normally.',
      tech: ['WordPress', 'PHP'],
      technicalNotes: 'WordPress plugin published on the official WordPress.org plugin directory.',
      link: 'https://wordpress.org/plugins/eclairman-user-login-blocker/',
    },
  ],
  experience: [
    {
      role: 'Freelance Full-Stack Developer (Part-time)',
      company: 'Remote',
      period: 'Feb 2026 – Mar 2026',
      clientHighlights: [
        'Built a payment system for a Brazilian client, including refunds and withdrawals.',
        'Designed automatic vendor payouts for a marketplace.',
      ],
      highlights: [
        'Built a custom WooCommerce payment gateway integrating Asaas (PIX, boleto, cards) for a Brazilian client, handling refunds and withdrawals.',
        'Designed marketplace payout architecture to split payments and pay out vendors automatically.',
      ],
    },
    {
      role: 'WordPress Developer (Contract)',
      company: 'AWTG Ltd.',
      period: 'Aug 2024 – Present',
      clientHighlights: [
        'Cut website load time from 10 seconds to 2 seconds.',
        'Added eSIM sales for tourists with online card payments.',
      ],
      highlights: [
        'Integrated Nordic eSIM for tourists on the WordPress site.',
        'Stripe payment implementation for eSIM purchases making use of WooCommerce plugin and usage of Webhooks.',
        'Cut page load time from 10s to 2s by implementing caching and an automatic image optimization script on upload.',
        'Implemented Superset BI tool to display water level & Air quality sensor readings from Loriot provider using Python.',
      ],
    },
    {
      role: 'WordPress Developer (Full-time)',
      company: 'CAMP Digital',
      period: 'Feb 2024 – Present',
      clientHighlights: [
        'Reviewed website performance and fixed the issues found.',
        'Managed content across a network of websites.',
      ],
      highlights: [
        'Audited site performance with Screaming Frog and acted on the findings.',
        'Managed content and sites across a WordPress Multisite network on WP Engine.',
      ],
    },
    {
      role: 'WordPress / Full Stack Developer',
      company: 'Codevwork',
      period: 'Oct 2023 – Feb 2024',
      clientHighlights: ['Built custom website sections for displaying images, notes and entries.'],
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
      clientHighlights: [
        'Launched a tourism mobile app with 12,000 downloads.',
        'Built a visitor kiosk used at 5 locations.',
      ],
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
  skills: [
    { category: 'WordPress', items: ['WordPress Development', 'Plugin & Theme Customization'] },
    { category: 'Back end', items: ['PHP', 'Laravel'] },
    { category: 'Front end', items: ['JavaScript', 'Vue.js', 'React'] },
    { category: 'Mobile', items: ['NativeScript', 'React Native'] },
    { category: 'Payments', items: ['Stripe', 'Asaas/PIX', 'WooCommerce payment gateways'] },
    { category: 'SEO', items: ['SEO best practices'] },
  ],
  languages: ['English', 'Tagalog'],
}
