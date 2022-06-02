import { get, post } from '@/utils/request'

/**
 * @name 获取企业信息
 */
export const getCompany_api = (): Promise<IRes> => {
  return get('user ', 'web/company/info.get')
}
/**
 * @name 修改联系信息
 */
export const reviseContact_api = (data: {
  address?: string
  city: string | number
  contact: string | number
  district: string | number
  email?: string
  legal_person: string
  province: string | number
  tel?: string
  url?: string
}): Promise<IRes> => {
  return post('user ', '/web/company/contact.up', data)
}
