import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import insPowerHash from '@/utils/insPower'

declare module 'vue-router' {
  interface RouteMeta {
    title: string // 导航标题
    icon?: string // 左侧二级导航图标
    father?: string // 在导航中不出现的详情页需要此属性，值为在此页面时需要激活的导航的path
    keepAlive?: boolean // 页面是否需要缓存，一般在父级进入详情页时，父级需要缓存则给父级添加，父级页面还需要导出name，导出的name和路由的name保持一致
    scroll?: boolean // 页面中是否使用单独的el-scrollbar组件，一般在页面中使用了KzStepTab组件时设置
    lv?: string // 现仅用于判断是否需要登录的页面
    power?: string // 页面权限字段，现仅用于是否企业管理员（能否进入企业管理页面）判断
    insPower?: string // 实例页面权限字段
  }
}

/**
 * @path 全小写，详情页和父级同级，详情页在meta里添加father字段为父级的path
 * @name 保证唯一 大驼峰 例如 UserInfo
 * @component 需要重定向的空路由页面统一用rView.vue
 * @redirect 重定向 非必写
 * @meta 详见RouteMeta接口
 * 需要在左侧导航出现的页面都必须写在Layout的children里，因为左侧导航是直接取Layout的children
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/salon',
    name: 'Salon',
    component: () => import('@/views/salon/index.vue'),
    redirect: '/salon',
    meta: { title: '沙龙', lv: '-1' },
    children: [
      {
        path: '/salon',
        name: 'Salon',
        component: () => import('@/views/salon/activity.vue'),
        meta: { title: '沙龙', lv: '-1' },
      },
      {
        path: '/salon/login',
        name: 'SalonLogin',
        component: () => import('@/views/salon/salonLogin.vue'),
        meta: { title: '登录', lv: '-1' },
      },
      {
        path: '/useragreementh5',
        name: 'SalonUseragreementH5',
        component: () => import('@/views/salon/useragreementH5.vue'),
        meta: { title: '用户须知', lv: '-1' },
      },
    ]
  },
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
            redirect: '/product/dmp/findb',
            component: () => import('@/views/layout/rView.vue'),
            meta: { title: 'DMP数据系统', icon: '#icon-lanmu-DMP' },
            children: [
              {
                path: '/product/dmp/findb',
                name: 'FindB',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '找B端客户', insPower: insPowerHash.dmp_b },
                redirect: '/product/dmp/findb/kzdata',
                children: [
                  {
                    path: '/product/dmp/findb/kzdata',
                    name: 'BKzData',
                    component: () => import('@/views/layout/product/dmp/findB/kzData.vue'),
                    meta: { title: '康州数据源', scroll: true, insPower: insPowerHash.dmp_b_kz },
                  },
                  {
                    path: '/product/dmp/findb/otherdata',
                    name: 'BOtherData',
                    component: () => import('@/views/layout/product/dmp/findB/otherData.vue'),
                    meta: { title: '第三方数据', insPower: insPowerHash.dmp_b_dsf },
                  },
                  {
                    path: '/product/dmp/findb/specificdata',
                    name: 'BSpecificData',
                    component: () => import('@/views/layout/product/dmp/findB/specificData.vue'),
                    meta: {
                      title: '个性化数据',
                      keepAlive: true,
                      insPower: insPowerHash.dmp_b_diy,
                    },
                  },
                  {
                    path: '/product/dmp/findb/specificdatadetails',
                    name: 'BSpecificDataDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/findB/specificDataDetails.vue'),
                    meta: {
                      title: '个性化数据详细页',
                      father: '/product/dmp/findb/specificdata',
                      insPower: insPowerHash.dmp_b_diy,
                    },
                  },
                ],
              },
              {
                path: '/product/dmp/findc',
                name: 'FindC',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '找C端客户' },
                redirect: '/product/dmp/findc/kzdata',
                children: [
                  {
                    path: '/product/dmp/findc/kzdata',
                    name: 'CKzData',
                    component: () => import('@/views/layout/product/dmp/findC/kzData.vue'),
                    meta: { title: '康州数据源' },
                  },
                  {
                    path: '/product/dmp/findc/otherdata',
                    name: 'COtherData',
                    component: () => import('@/views/layout/product/dmp/findC/otherData.vue'),
                    meta: { title: '第三方数据源' },
                  },
                  {
                    path: '/product/dmp/findc/teldata',
                    name: 'TelData',
                    component: () => import('@/views/layout/product/dmp/findC/telData.vue'),
                    meta: { title: '号码段获客' },
                  },
                  {
                    path: '/product/dmp/findc/teldatadetails',
                    name: 'TelDataDetails',
                    component: () => import('@/views/layout/product/dmp/findC/telDataDetails.vue'),
                    meta: { title: '号码段获客详细页', father: '/product/dmp/findc/teldata' },
                  },
                  {
                    path: '/product/dmp/findc/wxdata',
                    name: 'WxData',
                    component: () => import('@/views/layout/product/dmp/findC/wxData.vue'),
                    meta: { title: '微信获客' },
                  },
                  {
                    path: '/product/dmp/findc/wxdatadetails',
                    name: 'WxDataDetails',
                    component: () => import('@/views/layout/product/dmp/findC/wxDataDetails.vue'),
                    meta: { title: '微信获客详细页', father: '/product/dmp/findc/addata' },
                  },
                  {
                    path: '/product/dmp/findc/baidudata',
                    name: 'BaiduData',
                    component: () => import('@/views/layout/product/dmp/findC/baiduData.vue'),
                    meta: { title: '百度关键词获客' },
                  },
                  {
                    path: '/product/dmp/findc/baidudatadetails',
                    name: 'BaiduDataDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/findC/baiduDataDetails.vue'),
                    meta: { title: '百度关键词获客详细页', father: '/product/dmp/findc/baidudata' },
                  },
                  {
                    path: '/product/dmp/findc/bigdata',
                    name: 'BigData',
                    component: () => import('@/views/layout/product/dmp/findC/bigData.vue'),
                    meta: { title: '大数据获客' },
                  },
                  {
                    path: '/product/dmp/findc/bigdatadetails',
                    name: 'BigDataDetails',
                    component: () => import('@/views/layout/product/dmp/findC/bigDataDetails.vue'),
                    meta: { title: '大数据获客详细页', father: '/product/dmp/findc/bigdata' },
                  },
                  {
                    path: '/product/dmp/findc/fourdata',
                    name: 'FourData',
                    component: () => import('@/views/layout/product/dmp/findC/fourData.vue'),
                    meta: { title: '400获客' },
                  },
                  {
                    path: '/product/dmp/findc/fourdatadetails',
                    name: 'FourDataDetails',
                    component: () => import('@/views/layout/product/dmp/findC/fourDataDetails.vue'),
                    meta: { title: '400获客详细页', father: '/product/dmp/findc/fourdata' },
                  },
                  {
                    path: '/product/dmp/findc/biddingdata',
                    name: 'BiddingData',
                    component: () => import('@/views/layout/product/dmp/findC/biddingData.vue'),
                    meta: { title: '竞价获客' },
                  },
                  {
                    path: '/product/dmp/findc/biddingdatadetails',
                    name: 'BiddingDataDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/findC/biddingDataDetails.vue'),
                    meta: { title: '竞价获客详细页', father: '/product/dmp/findc/biddingdata' },
                  },
                  {
                    path: '/product/dmp/findc/msgdata',
                    name: 'MsgData',
                    component: () => import('@/views/layout/product/dmp/findC/msgData.vue'),
                    meta: { title: '短信获客' },
                  },
                  {
                    path: '/product/dmp/findc/msgdatadetails',
                    name: 'MsgDataDetails',
                    component: () => import('@/views/layout/product/dmp/findC/msgDataDetails.vue'),
                    meta: { title: '短信获客详细页', father: '/product/dmp/findc/msgdata' },
                  },
                ],
              },
              {
                path: '/product/dmp/seekPathPro',
                name: 'SeekPathPro',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '找渠道/项目' },
                redirect: '/product/dmp/seekPathPro/seekpath',
                children: [
                  {
                    path: '/product/dmp/seekPathPro/seekpath',
                    name: 'SeekPath',
                    component: () => import('@/views/layout/product/dmp/seekPathPro/seekPath.vue'),
                    meta: { title: '找渠道' },
                  },
                  {
                    path: '/product/dmp/seekPathPro/seekpathdetails',
                    name: 'SeekPathDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/seekPathPro/seekPathDetails.vue'),
                    meta: { title: '找渠道详细页', father: '/product/dmp/seekPathPro/seekpath' },
                  },
                  {
                    path: '/product/dmp/seekPathPro/seekproject',
                    name: 'SeekProject',
                    component: () =>
                      import('@/views/layout/product/dmp/seekPathPro/seekProject.vue'),
                    meta: { title: '找项目' },
                  },
                  {
                    path: '/product/dmp/seekPathPro/seekprojectdetails',
                    name: 'SeekProjectDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/seekPathPro/seekProjectDetails.vue'),
                    meta: {
                      title: '找项目数据详细页',
                      father: '/product/dmp/seekPathPro/seekproject',
                    },
                  },
                ],
              },
              {
                path: '/product/dmp/seekAbroad',
                name: 'SeekAbroad',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '找海外' },
                redirect: '/product/dmp/seekAbroad/buyer',
                children: [
                  {
                    path: '/product/dmp/seekAbroad/buyer',
                    name: 'Buyer',
                    component: () => import('@/views/layout/product/dmp/seekAbroad/buyer.vue'),
                    meta: { title: '采购商' },
                  },
                  {
                    path: '/product/dmp/seekAbroad/buyerdetails',
                    name: 'BuyerDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/seekAbroad/buyerDetails.vue'),
                    meta: { title: '采购商详细页', father: '/product/dmp/seekAbroad/buyer' },
                  },
                  {
                    path: '/product/dmp/seekAbroad/supplier',
                    name: 'Supplier',
                    component: () => import('@/views/layout/product/dmp/seekAbroad/supplier.vue'),
                    meta: { title: '供应商' },
                  },
                  {
                    path: '/product/dmp/seekAbroad/supplierdetails',
                    name: 'SupplierDetails',
                    component: () =>
                      import('@/views/layout/product/dmp/seekAbroad/supplierDetails.vue'),
                    meta: { title: '供应商详细页', father: '/product/dmp/seekAbroad/supplier' },
                  },
                ],
              },
              {
                path: '/product/dmp/myData',
                name: 'MyData',
                component: () => import('@/views/layout/rView.vue'),
                meta: { title: '我的数据源' },
                redirect: '/product/dmp/mydata/up2b',
                children: [
                  {
                    path: '/product/dmp/mydata/up2b',
                    name: 'Up2B',
                    component: () => import('@/views/layout/product/dmp/myData/up2b.vue'),
                    meta: { title: '上传2B数据' },
                  },
                  {
                    path: '/product/dmp/mydata/up2bdetails',
                    name: 'Up2BDetails',
                    component: () => import('@/views/layout/product/dmp/myData/up2bDetails.vue'),
                    meta: { title: '上传2B数据详细页', father: '/product/dmp/mydata/up2b' },
                  },
                  {
                    path: '/product/dmp/mydata/up2c',
                    name: 'Up2C',
                    component: () => import('@/views/layout/product/dmp/myData/up2c.vue'),
                    meta: { title: '上传2C数据' },
                  },
                  {
                    path: '/product/dmp/mydata/up2cdetails',
                    name: 'Up2CDetails',
                    component: () => import('@/views/layout/product/dmp/myData/up2cDetails.vue'),
                    meta: { title: '上传2C数据详细页', father: '/product/dmp/mydata/up2c' },
                  },
                ],
              },
            ],
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
                    path: '/product/cms/mywork/articleadd',
                    name: 'MyworkArticleAdd',
                    component: () => import('@/views/layout/product/cms/myWork/articleAdd.vue'),
                    meta: {  title: '软文编辑/新增',father: '/product/cms/mywork/article',},
                  },
                  {
                    path: '/product/cms/mywork/articledetails',
                    name: 'MyworkArticleDetails',
                    component: () => import('@/views/layout/product/cms/myWork/articleDetails.vue'),
                    meta: { title: '软文详情',father: '/product/cms/mywork/article', },
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
                    path: '/product/cms/custom/articledetail',
                    name: 'CustomArticleDetail',
                    component: () => import('@/views/layout/product/cms/custom/articleDetail.vue'),
                    meta: { title: '软文库详情', father: '/product/cms/custom/article' },
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
            meta: { title: '企业管理', icon: '#icon-lanmu-qiyeguanli', power: 'IS_NOW_MANAGER' },
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
