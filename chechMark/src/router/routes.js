import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name: 'login',
      component: ()=>import('../views/login.vue'),
    },
    {
      path:'/report',
      name: 'report',
      component: ()=>import('../views/report.vue'),
    },
    // {
    //   path:'/settings',
    //   name: 'settings',
    //   component: ()=>import('../views/settings.vue'),
    // }
  ]
})

export default router
