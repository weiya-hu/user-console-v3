import { get, post } from '@/utils/request'
/**
 * @name 提交企业认证消息
 */
export const examine_api = (data: {
  address: string
  business_scope: string
  city: string | number
  code: string | number
  contact: string | number
  district: string | number
  industry_id: string
  left_time: number
  legal_person: string
  license: string
  name: string
  province: string | number
  source?: number
  url?: string
}): Promise<IRes> => {
  return post('user', '/company/authenticate.do', data)
}
/**
 * @name 保存企业认证消息
 */
export const examineSave_api = (data: {
  address: string
  business_scope: string
  city: string | number
  code: string | number
  contact: string | number
  district: string | number
  industry_id: string
  left_time: number
  legal_person: string
  license: string
  name: string
  province: string | number
  source?: number
  url?: string
}): Promise<IRes> => {
  return post('user', '/company/authentication.in', data)
}
/**
 * @name 校验社会信用代码
 */
export const codeCheck_api = (data: { code: string }): Promise<IRes> => {
  return post('user', '/company/code/check.do', data)
}
/**
 * @name 获取用户企业认证消息
 */
export const getCompany_api = (): Promise<IRes> => {
  return get('user', '/company/relation/audit.get')
}
