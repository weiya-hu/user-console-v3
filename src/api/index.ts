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
