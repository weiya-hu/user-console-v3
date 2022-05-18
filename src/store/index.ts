import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getIndustryList_api, getAddressList_api, getUserInfo, getYxtUrl_api } from '@/api/login'
import { getHash } from '@/utils/index'

type IStoreObj = Record<string | number, any>

export const mainStore = defineStore('mainStore', () => {
  // 这样写第一个参数就是$id
  const state = reactive({
    yxtUrl: {} as IStoreObj, // 跳转地址
    userInfo: {} as IStoreObj, // 用户信息
    typeList: [] as IStoreObj[], // 行业分类
    typeHash: {} as IStoreObj, // 行业分类哈希表
    addressList: [] as IStoreObj[], // 地区列表
    addressHash: {} as IStoreObj, // 地区列表哈希表
    keepList: [] as string[], // 需要缓存的路由组件列表，须要在组件文件中设置name属性，并且name必须和组件对应的路由的name一致，路由的meta属性中也必须添加keepAlive:true,下级路由的meta中也要加入father字段为需要缓存的路由的path
    userPower: ['1'] as string[], // 用户权限数组
    newsMayLikeId: 2,//新闻资讯推荐id
    newsFollowId: 1,//新闻关注id
  })
  const getTypeList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if (state.typeList.length) {
        resolve(state.typeList)
      } else {
        getIndustryList_api()
          .then((res: IRes) => {
            state.typeList = res.body
            state.typeHash = getHash(res.body, 'industry_id')
            resolve(state.typeList)
          })
          .catch((error: any) => {
            reject(error)
          })
      }
    })
  }
  const getAddressList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if (state.addressList.length) {
        resolve(state.addressList)
      } else {
        getAddressList_api()
          .then((res: IRes) => {
            state.addressList = res.body
            state.addressHash = getHash(res.body, 'code')
            resolve(state.addressList)
          })
          .catch((error: any) => {
            reject(error)
          })
      }
    })
  }
  const setKeepList = (list: string[]) => {
    state.keepList = list
  }
  const setUserinfo = (isClear?: boolean) => {
    if (isClear) {
      state.userInfo = {}
      return Promise.reject()
    }
    return new Promise<any>((resolve, reject) => {
      getUserInfo()
        .then((res: IRes) => {
          if (res.status == 1) {
            state.userInfo = res.body
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
  const getYxtUrl = () => {
    return new Promise<any>((resolve, reject) => {
      getYxtUrl_api()
        .then((res: IRes) => {
          if (res.status == 1) {
            localStorage.setItem('yxtUrl', JSON.stringify(res.body))
            state.yxtUrl = res.body
            resolve(res.body)
          } else {
            reject(res.message)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const isCanDo = (powerId: string) => {
    return state.userPower.includes(powerId)
  }
  return {
    state,
    getTypeList, // 获取行业树
    getAddressList, // 获取地区树
    setKeepList, // 设置缓存列表
    setUserinfo, // 设置用户信息，传入true清空用户信息
    getYxtUrl, // 获取跳转地址
    isCanDo, // 传入权限id判断用户是否有此权限
  }
})
