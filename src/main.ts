import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import { createAppVuetify } from './plugins/vuetify'
import { createAppRouter } from './router'
import './styles.css'

// The build prerenders each route to static HTML (see scripts/prerender.mjs) so crawlers and
// link previews see the content. The client app then mounts over it.
const router = createAppRouter(createWebHistory(import.meta.env.BASE_URL))
createApp(App).use(createAppVuetify()).use(router).mount('#app')
