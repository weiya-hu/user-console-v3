/**
 * @name 接口返回数据类型
 */
interface IRes {
  status: number
  body: any
  errno?: number
  message?: string
}

/**
 * @name 分页类型
 */
type IPageParams<T = IKzObj> = {
  [x in keyof T]: T[x]
} & {
  size: number
  current: number
  source?: number
}

/**
 * @name 对象类型
 */
type IKzObj = Record<string | number | symbol, any>

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
