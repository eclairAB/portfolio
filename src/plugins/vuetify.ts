import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'

// Medium-emphasis text is raised from Vuetify's 0.6 default so grey text meets WCAG AA (4.5:1).
const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F7F5F2',
    surface: '#FFFFFF',
    primary: '#0F5C55',
    secondary: '#3B4A54',
    accent: '#A0481A',
    'on-background': '#1C2326',
    'on-surface': '#1C2326',
  },
  variables: { 'medium-emphasis-opacity': 0.78, 'high-emphasis-opacity': 0.92 },
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121619',
    surface: '#1B2125',
    primary: '#5CC2B6',
    secondary: '#A9B8C2',
    accent: '#F0A06A',
    'on-background': '#E8ECEE',
    'on-surface': '#E8ECEE',
  },
  variables: { 'medium-emphasis-opacity': 0.78, 'high-emphasis-opacity': 0.92 },
}

export function initialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** `ssr` is true only when prerendering pages to static HTML at build time. */
export function createAppVuetify(ssr = false) {
  return createVuetify({
    ssr,
    theme: { defaultTheme: initialTheme(), themes: { light, dark } },
    defaults: {
      VBtn: { rounded: 'lg' },
      VCard: { rounded: 'lg' },
    },
  })
}
