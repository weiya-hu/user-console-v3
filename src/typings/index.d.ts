/**
 * @name 接口返回数据类型
 */
interface IRes {
  status: number
  body: any
  errno?: number
  message?: string
}

interface INavitem {
  path: string
  name: string
  [propName: string]: any
}

/**
 * @name 分页类型
 */
interface IPageParams {
  size: number
  current: number
  source?: number
  [propName: string]: any
}

/**
 * @name 登录表单类型
 */
interface ILoginForm {
  mobile?: string
  acode?: string
  sms?: string
  pass?: string
  captcha?: string
  invite_code?: any
  surePass?: string
}

interface Window {
  WxLogin: any
}
/**
 * @name 实名认证表单类型
 */
 interface IUserForm {
  mobile: string
  acode: string
  sms: string
  real_name: string
  id_card: string
}