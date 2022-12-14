import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bloodsugar',
    name: 'bloodSugar',
    component: () => import('../views/BloodSugar.vue')
  },
  {
    path: '/bloodPressure',
    name: 'bloodPressure',
    component: () => import('../views/BloodPressure.vue')
  },
  {
    path: '/energy',
    name: 'energy',
    component: () => import('../views/Energy.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
