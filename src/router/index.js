import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/catalogo', name: 'catalogo', component: CatalogView },
    { path: '/sobre-nosotros', name: 'about', component: AboutView }
  ]
})

export default router