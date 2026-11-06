import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F7F5F2',
    surface: '#FFFFFF',
    primary: '#0F5C55',
    secondary: '#3B4A54',
    accent: '#B5541C',
    'on-background': '#1C2326',
    'on-surface': '#1C2326',
  },
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
}

export function initialTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default createVuetify({
  theme: { defaultTheme: initialTheme(), themes: { light, dark } },
  defaults: {
    VBtn: { rounded: 'lg' },
    VCard: { rounded: 'lg' },
  },
})
