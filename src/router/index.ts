import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: (to: RouteLocationNormalized) => {
      return '/index'
      if (localStorage.getItem('islogin')) {
        return '/index'
      }
      return '/login'
    },
    meta: { title: '康洲数智' },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
