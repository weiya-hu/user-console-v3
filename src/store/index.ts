import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getUserInfo } from '@/api/login'
import {
  getIndustryList_api,
  getAddressList_api,
  getYxtUrl_api,
  getMemberList_api,
  getIsManager_api,
  getUserCompanyList_api,
  getNowInsList_api,
  getInsPowerList_api,
  getCAndC_api,
  getCountryList_api,
} from '@/api/index'
import { getHash } from '@/utils/index'

import user_general_i from '@/assets/images/user_general.svg'
import user_silver_i from '@/assets/images/user_silver.svg'
import user_gold_i from '@/assets/images/user_gold.svg'
import user_star_i from '@/assets/images/user_star.svg'

type IStoreObj = Record<string | number, any>

export const mainStore = defineStore('mainStore', () => {
  // 这样写第一个参数就是$id
  const state = reactive({
    yxtUrl: {} as IStoreObj, // 跳转地址
    userInfo: {} as IStoreObj, // 用户信息
    memberList: [] as IStoreObj[], // 会员等级列表
    userCompany: {} as IStoreObj, // 用户个人/企业列表
    nowUserIdentity: {} as IStoreObj, // 当前用户身份
    insListInfo: {} as { [x: string]: { insid: number; name: string; product_id: number }[] }, // 当前用户当前身份下可用实例 { dmp: [...], cms: [...] }
    insPowerListInfo: {} as any, // 用户全部实例权限列表 键为insid，值为对应的权限字符数组
    typeList: [] as IStoreObj[], // 行业分类
    typeHash: {} as IStoreObj, // 行业分类哈希表
    addressList: [] as IStoreObj[], // 地区列表
    addressHash: {} as IStoreObj, // 地区列表哈希表
    companyType: [] as IStoreObj[], // 企业类型
    countryList: [] as IStoreObj[], // 国家列表
    keepList: [] as string[], // 需要缓存的路由组件列表，须要在组件文件中设置name属性，并且name必须和组件对应的路由的name一致，路由的meta属性中也必须添加keepAlive:true,下级路由的meta中也要加入father字段为需要缓存的路由的path
    userPower: [] as string[], // 用户权限数组，现仅用于是否企业管理员（能否进入企业管理页面）判断
    newsMayLikeId: 2, //新闻资讯推荐id
    newsFollowId: 1, //新闻关注id
  })
  const getTypeList = async () => {
    const res = await getIndustryList_api()
    if (res.status === 1) {
      state.typeList = res.body
      state.typeHash = getHash(res.body, 'industry_id')
      return state.typeList
    }
  }
  const getAddressList = async () => {
    const res = await getAddressList_api()
    if (res.status === 1) {
      state.addressList = res.body
      state.addressHash = getHash(res.body, 'code')
      return state.addressList
    }
  }
  const setKeepList = (list: string[]) => {
    state.keepList = list
  }
  const setUserinfo = (isClear?: boolean) => {
    if (isClear) {
      state.userInfo = {}
      return Promise.resolve()
    }
    return new Promise<any>((resolve, reject) => {
      getUserInfo()
        .then(async (res: IRes) => {
          if (res.status === 1) {
            state.userInfo = res.body
            const res1 = await getIsManager_api()
            if (res.status === 1) {
              state.userInfo.isManager = res1.body
              if (res1.body) {
                state.userPower.push('IS_NOW_MANAGER')
              }
            }
            resolve(state.userInfo)
          } else {
            state.userInfo = {}
            reject(res.message)
          }
        })
        .catch((err) => {
          state.userInfo = {}
          reject(err)
        })
    })
  }
  const getYxtUrl = async () => {
    const res = await getYxtUrl_api()
    if (res.status === 1) {
      localStorage.setItem('yxtUrl', JSON.stringify(res.body))
      state.yxtUrl = res.body
      return res.body
    }
  }

  const getMemberList = async () => {
    const res = await getMemberList_api()
    if (res.status === 1) {
      state.memberList = res.body
      const icons = [user_general_i, user_silver_i, user_gold_i, user_star_i]
      state.memberList.forEach((v, i) => {
        v.icon = icons[i]
      })
      return state.memberList
    }
  }
  const getCAndC = async () => {
    const res = await getCAndC_api()
    if (res.status == 1) {
      state.companyType = res.body.c_type
      return res.body
    }
  }
  const getCountryList = async () => {
    const res = await getCountryList_api()
    if (res.status == 1) {
      state.countryList = res.body
      return res.body
    }
  }

  const isCanDo = (power: string | undefined) => {
    if (power) {
      return state.userPower.includes(power)
    }
    return false
  }

  /**
   * @name 设置用户个人/企业列表和当前选择的身份
   */
  const setUserCompany = async () => {
    const res = await getUserCompanyList_api()
    if (res.status === 1) {
      state.userCompany = res.body
      if (res.body.user.selected === 1) {
        state.nowUserIdentity = res.body.user
        state.nowUserIdentity.iconType = 'user'
      } else {
        state.nowUserIdentity = res.body.company_list.find((v: any) => v.selected === 1)
        state.nowUserIdentity.iconType = 'company'
      }
    }
  }
  /**
   * @name 设置用户当前身份可用实例及用户所有实例权限
   */
  const setInstance = async () => {
    return new Promise<void>(async (resolve, reject) => {
      const res1 = await getNowInsList_api()
      state.insListInfo = res1.body
      const res2 = await getInsPowerList_api()
      state.insPowerListInfo = res2.body
      resolve()
    })
  }
  return {
    state,
    getTypeList, // 获取行业树
    getAddressList, // 获取地区树
    setKeepList, // 设置缓存列表
    setUserinfo, // 设置用户信息，传入true清空用户信息
    getYxtUrl, // 获取跳转地址
    getMemberList, // 获取会员等级列表
    getCAndC, // 获取联系方式列表与企业类型列表
    getCountryList, // 获取国家名称
    isCanDo, // 传入权限string判断用户是否有此权限，现仅用于是否企业管理员（能否进入企业管理页面）判断
    setUserCompany, // 设置用户个人/企业列表和当前选择的身份
    setInstance, // 设置用户当前身份可用实例及用户所有实例权限
  }
})
