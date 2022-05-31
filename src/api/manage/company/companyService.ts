import { get, post } from '@/utils/request'

/**
 * @name 获取所有产品（企业版）
 */
export const getAll_api = (): Promise<IRes> => {
  return get('user ', '/web/company/product/version.list')
}
/**
 * @name 获取企业产品实例
 */
export const companyInstance_api = (params: { id: number }): Promise<IRes> => {
  return get('user ', '/web/company/product/instance.list', params)
}
/**
 * @name 进入企业实例
 */
export const companySwitch_api = (data: { id: number; version_type: number }): Promise<IRes> => {
  return get('user ', '/web/company/instance/switch.do', data)
}
