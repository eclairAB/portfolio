import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { profile } from '../data/profile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        title: `Technical details | ${profile.name}`,
        description: `Tech stack, project deep-dives and experience of ${profile.name}, ${profile.title}.`,
      },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') document.title = to.meta.title
  if (typeof to.meta.description === 'string') {
    document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description)
  }
})

export default router
