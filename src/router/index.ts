import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * @path 全小写，详情页和父级同级，详情页在meta里添加father字段为父级的path
 * @name 保证唯一 大驼峰 例如 UserInfo
 * @component 需要重定向的空路由页面统一用rView.vue
 * @redirect 重定向 非必写
 * @meta title：导航标题；icon: 左侧二级导航图标；
 * father：在导航中不出现的详情页需要此属性，值为在此页面时需要激活的导航的path；
 * keepAlive: 页面是否需要缓存，一般在父级进入详情页时，父级需要缓存则给父级添加，父级页面还需要导出name；
 * scroll：页面中是否使用单独的el-scrollbar组件；
 * @ 子页面都必须写在Layout的children下，因为左侧导航是直接取Layout下children
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginIndex',
    component: () => import('@/views/login/index.vue'),
    redirect: '/login',
    meta: { title: '登录', lv: '-1' },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
        meta: { title: '登录', lv: '-1' },
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/login/register.vue'),
        meta: { title: '注册', lv: '-1' },
      },
      {
        path: '/forget',
        name: 'Forget',
        component: () => import('@/views/login/forget.vue'),
        meta: { title: '忘记密码', lv: '-1' },
      },
      {
        path: '/useragreement',
        name: 'Useragreement',
        component: () => import('@/views/login/useragreement.vue'),
        meta: { title: '用户须知', lv: '-1' },
      },
      {
        path: '/resetpass',
        name: 'ResetPass',
        component: () => import('@/views/login/resetPass.vue'),
        meta: { title: '重设密码', lv: '-1' },
      },
      {
        path: '/bindphone',
        name: 'BindPhone',
        component: () => import('@/views/login/bindPhone.vue'),
        meta: { title: '绑定手机号', lv: '-1' },
      },
      {
        path: '/login/wechat/callback',
        name: 'WxLoginJump',
        component: () => import('@/views/login/wxLoginJump.vue'),
        meta: { title: '微信登录', lv: '-1' },
      },
    ],
  },
  {
    path: '/news',
    name: 'NewsIndex',
    component: () => import('@/views/news/index.vue'),
    redirect: '/news',
    meta: { title: '资讯中心', lv: '-1' },
    children: [
      {
        path: '/news',
        name: 'News',
        component: () => import('@/views/news/news.vue'),
        meta: { title: '资讯中心', lv: '-1' },
      },
      {
        path: '/news/newsdetail',
        name: 'NewsDetail',
        component: () => import('@/views/news/newsDetail.vue'),
        meta: { title: '资讯详情', lv: '-1' },
      },
    ],
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: '/console',
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
            redirect: (to) => {
              const yxtUrl = localStorage.getItem('yxtUrl')
              window.open(
                yxtUrl ? '//' + JSON.parse(yxtUrl).dmp : 'https://dmp-dev.kzszh.com/index',
                '_blank'
              ) // 会被浏览器阻止
              return '/console'
            },
            meta: { title: 'DMP数据系统', icon: '#icon-lanmu-DMP' },
          },
          {
            path: '/product/cms',
            name: 'Cms',
            redirect: (to) => {
              const yxtUrl = localStorage.getItem('yxtUrl')
              window.open(
                yxtUrl ? '//' + JSON.parse(yxtUrl).cms : 'https://cms-dev.kzszh.com/index',
                '_blank'
              ) // 会被浏览器阻止
              return '/console'
            },
            meta: { title: 'CMS内容管理中心', icon: '#icon-lanmu-CMS' },
          },
        ],
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
            meta: { title: '报表中心', icon: '#icon-lanmu-baobiao' },
            children: [
              {
                path: '/report/reportcenter/overview',
                name: 'Overview',
                component: () => import('@/views/layout/report/reportCenter/overview.vue'),
                meta: { title: '概览' },
              },
            ],
          },
        ],
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
            meta: { title: '用户中心', icon: '#icon-lanmu-yonghuzhongxin' },
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
                    meta: { title: '我的产品与服务', keepAlive: true },
                  },
                  {
                    path: '/manage/user/product/productdetails',
                    name: 'ProductDetails',
                    component: () =>
                      import('@/views/layout/manage/user/product/productDetails.vue'),
                    meta: { title: '我的产品与服务详情', father: '/manage/user/product/myproduct' },
                  },
                  {
                    path: '/manage/user/product/order',
                    name: 'Order',
                    component: () => import('@/views/layout/manage/user/product/order.vue'),
                    meta: { title: '订购产品' },
                  },
                ],
              },
              {
                path: '/manage/user/settings',
                name: 'Settings',
                component: () => import('@/views/layout/rView.vue'),
                redirect: '/manage/user/settings/myinfo',
                meta: { title: '账号设置' },
                children: [
                  {
                    path: '/manage/user/settings/myinfo',
                    name: 'MyInfo',
                    component: () => import('@/views/layout/manage/user/settings/myInfo.vue'),
                    meta: { title: '我的资料', scroll: true },
                  },
                  {
                    path: '/manage/user/settings/safe',
                    name: 'Safe',
                    component: () => import('@/views/layout/manage/user/settings/safe.vue'),
                    meta: { title: '账号安全' },
                  },
                  {
                    path: '/manage/user/settings/changepass',
                    name: 'ChangePass',
                    component: () => import('@/views/layout/manage/user/settings/changePass.vue'),
                    meta: { title: '修改密码', father: '/manage/user/settings/safe' },
                  },
                  {
                    path: '/manage/user/settings/realname',
                    name: 'RealName',
                    component: () => import('@/views/layout/manage/user/settings/realName.vue'),
                    meta: { title: '实名认证', father: '/manage/user/settings/myinfo' },
                  },
                  {
                    path: '/manage/user/settings/invitation',
                    name: 'Invitation',
                    component: () => import('@/views/layout/manage/user/settings/invitation.vue'),
                    meta: { title: '邀请用户详情', father: '/manage/user/settings/myinfo' },
                  },
                ],
              },
            ],
          },
          {
            path: '/manage/company',
            name: 'Company',
            component: () => import('@/views/layout/rView.vue'),
            redirect: '/manage/company/companyinfo',
            meta: { title: '团队管理', icon: '#icon-lanmu-qiyeguanli' },
            children: [
              {
                path: '/manage/company/companyinfo',
                name: 'CompanyInfo',
                component: () => import('@/views/layout/manage/company/companyInfo.vue'),
                meta: { title: '团队信息', scroll: true },
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
                meta: { title: '团队产品与服务' },
              },
              {
                path: '/manage/company/personnelmanage',
                name: 'PersonnelManage',
                component: () => import('@/views/layout/manage/company/personnelManage.vue'),
                meta: { title: '人员管理', keepAlive: true },
              },
              {
                path: '/manage/company/rolepermission',
                name: 'RolePermission',
                component: () => import('@/views/layout/manage/company/rolePermission.vue'),
                meta: { title: '角色权限' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '康州数智', lv: '-1' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
