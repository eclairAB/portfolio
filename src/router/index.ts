import { createRouter, type RouterHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { profile } from '../data/profile'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: `${profile.name} | ${profile.title}`,
      description: profile.tagline,
    },
  },
  {
    path: '/technical',
    name: 'technical',
    component: () => import('../pages/TechnicalPage.vue'),
    meta: {
      title: `Technical details | ${profile.name}, ${profile.title}`,
      description: `Tech stack, project deep-dives and full experience of ${profile.name}, ${profile.title}.`,
    },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

function setMeta(selector: string, content: string) {
  document.head.querySelector(selector)?.setAttribute('content', content)
}

export function createAppRouter(history: RouterHistory) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, _from, saved) {
      if (saved) return saved
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0 }
    },
  })

  if (typeof document !== 'undefined') {
    router.afterEach((to) => {
      const { title, description } = to.meta
      if (title) {
        document.title = title
        setMeta('meta[property="og:title"]', title)
      }
      if (description) {
        setMeta('meta[name="description"]', description)
        setMeta('meta[property="og:description"]', description)
      }
    })
  }

  return router
}
