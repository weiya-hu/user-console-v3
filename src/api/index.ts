import { get, post } from '@/utils/request'

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
 * @name 获取会员等级信息
 */
export const getMemberList_api = (): Promise<IRes> => {
  //获取会员等级信息
  return get('user', '/public/member.list')
}
