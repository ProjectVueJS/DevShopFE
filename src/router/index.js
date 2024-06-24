import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminLogin from '@/views/Backend/AdminLogin.vue'
import AdminDashboard from '@/views/Backend/Dashboard.vue'
import UserManagement from '@/views/Backend/User/UserManagement.vue'
import NewUser from '@/views/Backend/User/NewUser.vue'
import LayoutAdmin from '@/components/BE/Layout.vue'
import PageNotFound from '@/common/PageNotFound.vue'
import ProductManagement from '@/views/Backend/Product/ProductManagement.vue'

// import PageNotFound from '@/common/PageNotFound.vue'

const routes = [
  {
    path: '/admin',
    component: AdminLogin
  },
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: AdminDashboard
      },
      {
        path: 'product-management',
        name: 'admin.prod.mng',
        component: ProductManagement,
      },
      {
        path: 'user-management',
        name: 'admin.user.mng',
        component: UserManagement,
      },
      {
        path: 'user-management/new-user',
        name: 'admin.user.mng.add',
        component: NewUser,
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
