import { get, post } from '@/utils/request'

/**
 * @name 获取阿里oss参数 //key 过期时间2s
 */
export const getAliToken_api = (params: { site: string }): Promise<IRes> => {
  return get('user ', '/user/upload.sign', params)
}

/**
 * @name 获取行业分类列表
 */
export const getIndustryList_api = (): Promise<IRes> => {
  return get('user', '/dim/industry.list')
}

/**
 * @name 获取地区列表id
 */
export const getAddressList_api = (): Promise<IRes> => {
  return get('user', '/dim/geo.list')
}

/**
 * @name 获取跳转地址
 */
export const getYxtUrl_api = (): Promise<IRes> => {
  return get('user', '/public/env.get')
}

/**
 * @name 获取用户信息
 */
export const getUserInfo = (): Promise<IRes> => {
  return get('user', '/public/uinfo.get')
}
