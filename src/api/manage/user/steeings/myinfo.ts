import { get, post } from '@/utils/request'

/**
 *
 * @name 获取会员类别
 */
export const userMember_api = (): Promise<IRes> => {
  return get('user ', '/public/member.list')
}
/**
 *
 * @name 用户中心用户基本信息和会员信息列表
 */
export const userInfo_api = (): Promise<IRes> => {
  return get('user ', '/web/user/information.get')
}
/**
 * @name 修改用户中心基本信息
 */
export const userInfoEdit_api = (data: {
  birth?: number
  city?: number | string
  district?: number | string
  head?: string
  name?: string
  province?: number | string
  sex?: 0 | 1 | 2
}): Promise<IRes> => {
  return post('user ', '/web/user/information.up', data, true)
}
/**
 * @name 实名认证
 */
export const authenticate_api = (data: {
  acode: string
  id_card: string
  mobile: string
  pass: string
  sms: string
}): Promise<IRes> => {
  return post('user ', '/web/user/real/name/authenticate.do', data, true)
}
/**
 * @name 发送实名认证短信
 */
export const sendSms_api = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/web/user/verified/sms/send.do', data)
}

/**
 * @name 查看邀请用户详情
 */
export const invitation_api = (): Promise<IRes> => {
  return get('user ', '/web/user/invitation/user.list')
}
/**
 * @name 用户中心我的企业列表
 */
export const userCompany_api = (): Promise<IRes> => {
  return get('user ', '/web/user/company/and/group.list')
}
/**
 * @name 退出企业
 */
export const quitCompany_api = (data: { cid: number }): Promise<IRes> => {
  return post('user', '/web/user/enterprise/exit.do', data)
}

/**
 * @name 修改手机号短信验证（原手机号）
 */
export const editOldTel_api = (data: { sms: string }): Promise<IRes> => {
  return post('user', '/web/user/modify/mobile/former/sms/check.do', data)
}
/**
 * @name 修改手机号发送短信（原手机号）
 */
export const editOldTelSms_api = (): Promise<IRes> => {
  return post('user', '/web/user/modify/mobile/former/sms/send.do')
}
/**
 * @name 修改手机号短信验证（新手机号）
 */
export const editNewTel_api = (data: {
  acode: string
  mobile: string
  sms: string
}): Promise<IRes> => {
  return post('user', '/web/user/modify/mobile/new/sms/check.do', data)
}
/**
 * @name 修改手机号发送短信（新手机号）
 */
export const editNewTelSms_api = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/web/user/modify/mobile/new/sms/send.do', data)
}
/**
 * @name 修改密码发送短信
 */
export const editMmSms_api = (): Promise<IRes> => {
  return post('user', '/web/user/change/pass/sms/send.do')
}
/**
 * @name 修改密码短信验证
 */
export const editMmTel_api = (data: { sms: string }): Promise<IRes> => {
  return post('user', '/web/user/change/pass/sms/check.do', data)
}
/**
 * @name 修改密码短信验证
 */
export const editMm_api = (data: { confirm_pass: string; new_pass: string }): Promise<IRes> => {
  return post('user', '/web/user/pass/change.do', data)
}
