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
 * @name 获取联系方式列表与企业类型列表
 */
export const getCAndC_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/business/condition/check.list')
}

/**
 * @name 获取国家名称
 */
export const getCountryList_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/overseas/country.list')
}

/**
 * @name 获取切换个人版和企业版列表
 */
export const getUserCompanyList_api = (): Promise<IRes> => {
  return get('user', '/web/user/and/company/switch.list')
}

/**
 * @name 切换个人版和企业版
 */
export const changeIdentity_api = (data: { cid: number }): Promise<IRes> => {
  return post('user', '/web/user/company/switch.do', data)
}

/**
 * @name 获取会员等级信息 [银牌会员。。。]
 */
export const getMemberList_api = (): Promise<IRes> => {
  return get('user', '/public/member.list')
}

/**
 * @name 用户是否当前企业管理员
 */
export const getIsManager_api = (): Promise<IRes> => {
  return get('user', '/web/user/company/admin/verify.do')
}

/**
 * @name 获取当前用户当前身份下所有可用实例
 */
export const getNowInsList_api = (): Promise<IRes> => {
  return get('user ', '/web/usable/product/instance.list')
}

/**
 * @name 获取当前用户所有实例权限
 */
export const getInsPowerList_api = (): Promise<IRes> => {
  return get('user ', '/user/permission.get')
}
