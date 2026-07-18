import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import WargaView from '../views/WargaView.vue'
import TransaksiView from '../views/TransaksiView.vue'
import KeuanganView from '../views/KeuanganView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: HomeView },
  { path: '/warga', name: 'warga', component: WargaView },
  { path: '/transaksi', name: 'transaksi', component: TransaksiView },
  { path: '/keuangan', name: 'keuangan', component: KeuanganView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
