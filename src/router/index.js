import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tenantsView from '../views/tenantsView.vue'
import landlordsView from '../views/landlordsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tenants',
      name: 'tenants',
      component: tenantsView
    },
    {
      path: '/landlords',
      name: 'landlords',
      component: landlordsView
    },
  ]
})

export default router
