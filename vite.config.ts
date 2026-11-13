import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  // Vuetify ships CSS imports inside its components, so bundle it for the prerender build.
  ssr: { noExternal: ['vuetify'] },
})
