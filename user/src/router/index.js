import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Header',
    name: 'header',
    component: () => import(/* webpackChunkName: "about" */ '../layout/Header.vue')
  },
  {
    path: '/Footer',
    name: 'footer',
    component: () => import(/* webpackChunkName: "about" */ '../layout/Footer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
