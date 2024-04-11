import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminLogin from '@/views/Backend/AdminLogin.vue'
import AdminDashboard from '@/views/Backend/Dashboard.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin,
  },
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: AdminDashboard,
  },
  // {
  //   path: '/',
  //   component: LayoutAdmin,
  //   children: [
  //     { path: 'dashboard', component: AdminDashboard },
  //   ]
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
