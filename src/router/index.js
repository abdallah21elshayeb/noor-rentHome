import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tenantsView from '../views/tenantsView.vue'
import landlordsView from '../views/landlordsView.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import AboutView from '../views/AboutView.vue'
import profileView from '../views/profileView.vue'
import requestsView from '../views/requestsView.vue'
import { loginDataStore } from '../stores/auth/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/tenants',
      name: 'tenants',
      component: tenantsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      name: 'requests',
      component: requestsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/landlords',
      name: 'landlords',
      component: landlordsView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
      meta: { requiresUnauth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
      meta: { requiresUnauth: true }
    }
  ]
})

router.beforeEach( async (to, from, next) => {
  const store = loginDataStore()
  await store.tryLogin()
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresUnauth && store.isAuthenticated) {
    next('/home')
  } else {
    next()
  }
})

export default router
