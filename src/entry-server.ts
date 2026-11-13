// Build-time entry used by scripts/prerender.mjs to render each route to static HTML.
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import App from './App.vue'
import { createAppVuetify } from './plugins/vuetify'
import { createAppRouter } from './router'
import { SITE_URL } from './data/profile'

export { SITE_URL }

export const prerenderRoutes = ['/', '/technical']

export async function render(url: string) {
  const router = createAppRouter(createMemoryHistory(import.meta.env.BASE_URL))
  const vuetify = createAppVuetify(true)
  const app = createSSRApp(App).use(vuetify).use(router)
  await router.push(url)
  await router.isReady()
  const html = await renderToString(app)
  const { title = '', description = '' } = router.currentRoute.value.meta
  // Theme CSS variables; the client reuses this <style> id when it mounts.
  const themeCss = vuetify.theme.styles.value
  return { html, title, description, themeCss }
}
