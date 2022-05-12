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

/**
 * @name 发送登录短信
 */
export const sendSms = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/login/sms/send.do', data)
}

/**
 * @name 发送注册短信
 */
export const sendRegsms = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/login/regsms/send.do', data)
}

/**
 * @name 重置密码发送短信
 */
export const sendResetsms = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/login/resetsms/send.do', data)
}

/**
 * @name 登录
 */
export const doLogin = (data: { acode: string; mobile: string }): Promise<IRes> => {
  return post('user', '/login/login.do', data)
}

/**
 * @name 获取图形验证码
 */
export const captchaGet = (): Promise<IRes> => {
  return get('user ', '/public/captcha.get')
}

/**
 * @name 注册
 */
export const doRegister = (data: {
  acode: string
  mobile: string
  pass: string
  sms: string
  invite_code?: string
}): Promise<IRes> => {
  return post('user', '/login/register.do', data)
}

/**
 * @name 重置密码短信验证
 */
export const doResetsmsCheck_api = (data: {
  acode: string
  mobile: string
  sms: string
}): Promise<IRes> => {
  return post('user', '/login/resetsms/check.do', data)
}

/**
 * @name 重置密码
 */
export const doResetpass_api = (data: {
  acode: string
  mobile: string
  pass: string
}): Promise<IRes> => {
  return post('user', '/login/resetpass/modify.do', data)
}

/**
 * @name 获取微信登录二维码链接
 */
export const wechatQrinfoGet_api = (params: { url?: any }): Promise<IRes> => {
  return get('user ', '/login/wechat/qrinfo.get', params)
}

/**
 * @name 微信登录
 */
export const doWechat_api = (data: { code: any; state: any }): Promise<IRes> => {
  return post('user', '/login/wechat/callback.do', data)
}

/**
 * @name 微信登录绑定手机号
 */
export const doWechatBind_api = (data: {
  acode: any
  captcha?: any
  invite_code?: any
  mobile: any
  sms: any
  type: any
}): Promise<IRes> => {
  return post('user', 'login/wechat/bind.do', data)
}
