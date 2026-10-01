import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/gallery/:slug',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
  ],
})

export default router
