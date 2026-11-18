import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'
import FiturView from '../views/FiturView.vue'
import DemoView from '../views/DemoView.vue'
import KontakView from '../views/KontakView.vue'

const routes = [
  { path: '/', name: 'beranda', component: BerandaView },
  { path: '/fitur', name: 'fitur', component: FiturView },
  { path: '/demo', name: 'demo', component: DemoView },
  { path: '/kontak', name: 'kontak', component: KontakView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router