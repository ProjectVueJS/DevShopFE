import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminLogin from '@/views/Backend/AdminLogin.vue'
import AdminDashboard from '@/views/Backend/Dashboard.vue'
import UserManagement from '@/views/Backend/User/UserManagement.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin,
  },
  {
    path: '/dashboard',
    name: 'admin.dashboard',
    component: AdminDashboard,
  },
  {
    path: '/user-management',
    name: 'admin.user.mng',
    component: UserManagement,
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
