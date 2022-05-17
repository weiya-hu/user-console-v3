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
  return get('user ', '/user/information.get')
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
  return post('user ', '/user/information.up', data, true)
}
/**
 * @name 修改用户中心基本信息
 */
export const authenticate_api = (data: {
  acode: string
  id_card: string
  mobile: string
  pass: string
  sms: string
}): Promise<IRes> => {
  return post('user ', '/user/real/name/authenticate.do', data, true)
}

/**
 * @name 查看邀请用户详情
 */
export const invitation_api = (): Promise<IRes> => {
  return get('user ', '/user/invitation/user.list')
}

/**
 * @name 发送实名认证短信
 */
export const sendSms_api = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/user/verified/sms/send.do', data)
}
