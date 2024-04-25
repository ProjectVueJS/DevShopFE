import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminLogin from '@/views/Backend/AdminLogin.vue'
import AdminDashboard from '@/views/Backend/Dashboard.vue'
import UserManagement from '@/views/Backend/User/UserManagement.vue'
import LayoutAdmin from '@/components/BE/Layout.vue'

const routes = [
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: AdminLogin,
  // },
  // {
  //   path: '/dashboard',
  //   name: 'admin.dashboard',
  //   component: AdminDashboard,
  // },
  // {
  //   path: '/user-management',
  //   name: 'admin.user.mng',
  //   component: UserManagement,
  // },
  {
    path: '/admin',
    component: AdminLogin
  },
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '/dashboard',
        component: AdminDashboard
      },
      {
        path: '/user-management',
        name: 'admin.user.mng',
        component: UserManagement,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
