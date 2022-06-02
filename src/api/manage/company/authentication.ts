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
  id?: number
}): Promise<IRes> => {
  return post('user', '/web/company/audit/submit.do', data, true)
}
// /**
//  * @name 重新企业认证提交消息
//  */
// export const examineRe_api = (data: {
//   address: string
//   business_scope: string
//   city: string | number
//   code?: string | number
//   contact: string | number
//   district: string | number
//   industry_id: string
//   left_time: number
//   legal_person: string
//   license: string
//   name: string
//   province: string | number
//   source?: number
//   url?: string
//   id: number
// }): Promise<IRes> => {
//   return post('user', '/web/company/again/audit/submit.do', data)
// }
// /**
//  * @name 重新企业认证保存消息
//  */
// export const saveRe_api = (data: {
//   address: string
//   business_scope: string
//   city: string | number
//   code?: string | number
//   contact: string | number
//   district: string | number
//   industry_id: string
//   left_time: number
//   legal_person: string
//   license: string
//   name: string
//   province: string | number
//   source?: number
//   url?: string
//   id: number
// }): Promise<IRes> => {
//   return post('user', '/web/company/again/audit/save.do', data)
// }
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
  id?: number
}): Promise<IRes> => {
  return post('user', '/web/company/audit/save.do', data, true)
}
/**
 * @name 校验社会信用代码
 */
export const codeCheck_api = (data: { code: string }): Promise<IRes> => {
  return post('user', '/web/company/code/check.do', data)
}
/**
 * @name 获取用户企业认证消息
 */
export const getCompany_api = (params: { id?: number }): Promise<IRes> => {
  return get('user', '/web/company/audit.get', params)
}
