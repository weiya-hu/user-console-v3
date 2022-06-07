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
        path: '/invite',
        name: 'Invite',
        component: () => import('@/views/login/invite.vue'),
        meta: { title: '邀请', lv: '-1' },
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
                yxtUrl ? '//' + JSON.parse(yxtUrl).dmp : 'http://lc.kzszh.com:9000/console',
                '_blank'
              ) // 会被浏览器阻止
              return '/console'
            },
            meta: { title: 'DMP数据系统', icon: '#icon-lanmu-DMP' },
          },
          {
            path: '/product/cms',
            name: 'Cms',
            redirect: '/product/cms/mywork',
            component: () => import('@/views/layout/rView.vue'),
            meta: { title: 'CMS内容管理中心', icon: '#icon-lanmu-CMS' },
            children: [
              {
                path: '/product/cms/mywork',
                name: 'MyWork',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '我的作品库' },
                redirect: '/product/cms/mywork/article',
                children: [
                  {
                    path: '/product/cms/mywork/article',
                    name: 'MyworkArticle',
                    component: () => import('@/views/layout/product/cms/myWork/article.vue'),
                    meta: { title: '软文库' },
                  },
                  {
                    path: '/product/cms/mywork/images',
                    name: 'MyworkImages',
                    component: () => import('@/views/layout/product/cms/myWork/images.vue'),
                    meta: { title: '图片库' },
                  },
                  {
                    path: '/product/cms/mywork/poster',
                    name: 'MyworkPoster',
                    component: () => import('@/views/layout/product/cms/myWork/poster.vue'),
                    meta: { title: '海报库' },
                  },
                  {
                    path: '/product/cms/mywork/video',
                    name: 'MyworkVideo',
                    component: () => import('@/views/layout/product/cms/myWork/video.vue'),
                    meta: { title: '视频库' },
                  },
                ],
              },
              {
                path: '/product/cms/custom',
                name: 'Custom',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '个性化内容库' },
                redirect: '/product/cms/custom/article',
                children: [
                  {
                    path: '/product/cms/custom/article',
                    name: 'CustomArticle',
                    component: () => import('@/views/layout/product/cms/custom/article.vue'),
                    meta: { title: '软文库' },
                  },
                  {
                    path: '/product/cms/custom/images',
                    name: 'CustomImages',
                    component: () => import('@/views/layout/product/cms/custom/images.vue'),
                    meta: { title: '图片库' },
                  },
                  {
                    path: '/product/cms/custom/poster',
                    name: 'CustomPoster',
                    component: () => import('@/views/layout/product/cms/custom/poster.vue'),
                    meta: { title: '海报库' },
                  },
                  {
                    path: '/product/cms/custom/video',
                    name: 'CustomVideo',
                    component: () => import('@/views/layout/product/cms/custom/video.vue'),
                    meta: { title: '视频库' },
                  },
                ],
              },
              {
                path: '/product/cms/resource',
                name: 'Resource',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '资源内容库' },
                redirect: '/product/cms/resource/resource',
                children: [
                  {
                    path: '/product/cms/resource/resource',
                    name: 'ResourceResource',
                    component: () => import('@/views/layout/product/cms/resource/resource.vue'),
                    meta: { title: '资源内容库' },
                  },
                  {
                    path: '/product/cms/resource/resourceDetail',
                    name: 'ResourceDetail',
                    component: () =>
                      import('@/views/layout/product/cms/resource/resourceDetail.vue'),
                    meta: { title: '资源内容库详情', father: '/product/cms/resource/resource' },
                  },
                ],
              },
            ],
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
            redirect: '/manage/user/myproduct',
            meta: { title: '用户中心', icon: '#icon-lanmu-yonghuzhongxin' },
            children: [
              {
                path: '/manage/user/myproduct',
                name: 'MyProduct',
                component: () => import('@/views/layout/manage/user/myProduct.vue'),
                meta: { title: '我的产品与服务', keepAlive: true },
              },
              {
                path: '/manage/user/productdetails',
                name: 'ProductDetails',
                component: () => import('@/views/layout/manage/user/productDetails.vue'),
                meta: { title: '我的产品与服务详情', father: '/manage/user/myproduct' },
              },
              {
                path: '/manage/user/order',
                name: 'Order',
                component: () => import('@/views/layout/manage/user/order.vue'),
                meta: { title: '订购产品', scroll: true },
              },
              {
                path: '/manage/user/myinfo',
                name: 'MyInfo',
                component: () => import('@/views/layout/manage/user/myInfo.vue'),
                meta: { title: '我的资料', scroll: true },
              },
              {
                path: '/manage/user/realname',
                name: 'RealName',
                component: () => import('@/views/layout/manage/user/realName.vue'),
                meta: { title: '实名认证', father: '/manage/user/myinfo' },
              },
              {
                path: '/manage/user/invitation',
                name: 'Invitation',
                component: () => import('@/views/layout/manage/user/invitation.vue'),
                meta: { title: '邀请用户详情', father: '/manage/user/myinfo' },
              },
              {
                path: '/manage/user/mycompany',
                name: 'MyCompany',
                component: () => import('@/views/layout/manage/user/myCompany.vue'),
                meta: { title: '我的企业' },
              },
              {
                path: '/manage/user/authentication',
                name: 'Authentication',
                component: () => import('@/views/layout/manage/company/authentication.vue'),
                meta: { title: '企业认证', father: '/manage/user/mycompany' },
              },
            ],
          },
          {
            path: '/manage/company',
            name: 'Company',
            component: () => import('@/views/layout/rView.vue'),
            redirect: '/manage/company/companyinfo',
            meta: { title: '企业管理', icon: '#icon-lanmu-qiyeguanli' },
            children: [
              {
                path: '/manage/company/companyinfo',
                name: 'CompanyInfo',
                component: () => import('@/views/layout/manage/company/companyInfo.vue'),
                meta: { title: '企业信息', scroll: true },
              },

              {
                path: '/manage/company/companyservice',
                name: 'CompanyService',
                component: () => import('@/views/layout/manage/company/companyService.vue'),
                meta: { title: '企业产品与服务' },
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
              {
                path: '/manage/company/application',
                name: 'Application',
                component: () => import('@/views/layout/manage/company/application.vue'),
                meta: { title: '加入申请' },
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
