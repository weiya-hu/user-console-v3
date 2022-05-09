import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * @path 全小写 
 * @name 保证唯一 大驼峰 例如 UserInfo
 * @component 需要重定向的空路由页面统一用rView.vue
 * @redirect 重定向 非必写
 * @meta title：导航标题
 * @ 子页面都必须写在Layout的children下，因为左侧导航是直接取routes[1]即Layout
 */
export const routes: RouteRecordRaw[] = [
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
    redirect: (to) => {
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
        redirect: '/report/reportcenter',
        meta: { title: '数据报表' },
        children: [
          {
            path: '/report/reportcenter',
            name: 'Reportcenter',
            component: () => import('@/views/layout/rView.vue'),
            redirect: '/report/reportcenter/overview',
            meta: { title: '报表中心' },
            children: [
              {
                path: '/report/reportcenter/overview',
                name: 'Overview',
                component: () => import('@/views/layout/report/reportCenter/overview.vue'),
                meta: { title: '概览' },
              },
            ]
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
            component: () => import('@/views/layout/rView.vue'),
            redirect: '/manage/user/product',
            meta: { title: '用户中心' },
            children: [
              {
                path: '/manage/user/product',
                name: 'UserProduct',
                component: () => import('@/views/layout/rView.vue'),
                redirect: '/manage/user/product/myproduct',
                meta: { title: '产品与服务' },
                children: [
                  {
                    path: '/manage/user/product/myproduct',
                    name: 'MyProduct',
                    component: () => import('@/views/layout/manage/user/product/myProduct.vue'),
                    meta: { title: '我的产品与服务' },
                  },
                ]
              },
            ]
          },
          {
            path: '/manage/company',
            name: 'Company',
            component: () => import('@/views/layout/rView.vue'),
            redirect: '/manage/company/companyinfo',
            meta: { title: '企业管理' },
            children: [
              {
                path: '/manage/company/companyinfo',
                name: 'CompanyInfo',
                component: () => import('@/views/layout/manage/company/companyInfo.vue'),
                meta: { title: '企业信息' },
              },
              {
                path: '/manage/company/authentication',
                name: 'Authentication',
                component: () => import('@/views/layout/manage/company/authentication.vue'),
                meta: { title: '企业认证', father: '/manage/company/companyinfo' },
              },
              {
                path: '/manage/company/companyservice',
                name: 'CompanyService',
                component: () => import('@/views/layout/manage/company/companyService.vue'),
                meta: { title: '企业服务' },
              },
            ]
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
