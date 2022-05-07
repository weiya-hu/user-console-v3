import { createRouter, createWebHistory, RouteLocation } from 'vue-router'

/**
 * @path 全小写 
 * @name 保证唯一 大驼峰 例如 UserInfo
 * @component 需要重定向的空路由页面统一用rView.vue
 * @redirect 重定向 非必写
 * @meta title：导航标题
 * @ 子页面都必须写在Layout的children下，因为左侧导航是直接取routes[1]即Layout
 */
export const routes = [
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
    redirect: (to: RouteLocation) => {
      return '/console'
      if (localStorage.getItem('islogin')) {
        return '/index'
      }
      return '/login'
    },
    meta: { title: '康洲数智' },
    children: [
      {
        path: '/console',
        name: 'Console',
        component: () => import('@/views/layout/console/console.vue'),
        meta: { title: '控制台' },
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/layout/rView.vue'),
        redirect: '/product/dmp',
        meta: { title: '产品与服务' },
        children: [
          {
            path: '/product/dmp',
            name: 'Dmp',
            component: () => import('@/views/layout/rView.vue'),
            meta: { title: 'DMP数据系统' },
          },
          {
            path: '/product/cms',
            name: 'Cms',
            component: () => import('@/views/layout/rView.vue'),
            meta: { title: 'CMS内容管理中心' },
          },
        ]
      },
      {
        path: '/report',
        name: 'Report',
        component: () => import('@/views/layout/rView.vue'),
        meta: { title: '数据报表' },
        children: [
          {
            path: '/report/reportcenter',
            name: 'Dmp',
            component: () => import('@/views/layout/report/reportCenter.vue'),
            meta: { title: '报表中心' },
          },
        ]
      },
      {
        path: '/manage',
        name: 'Manage',
        component: () => import('@/views/layout/rView.vue'),
        redirect: '/manage/user',
        meta: { title: '管理与设置' },
        children: [
          {
            path: '/manage/user',
            name: 'User',
            component: () => import('@/views/layout/manage/user.vue'),
            meta: { title: '用户中心' },
          },
          {
            path: '/manage/company',
            name: 'Company',
            component: () => import('@/views/layout/manage/company.vue'),
            meta: { title: '企业管理' },
          },
        ]
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
