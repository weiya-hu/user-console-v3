import { get, post, getWithResponseType } from '@/utils/request'

/**
 * 下载联系人模板
 */
export const contactTemplate_api = (): Promise<any> => {
  return getWithResponseType('message', '/sms/contact/template/download.do', 'blob')
}

/**
 * 获取联系人分页列表
 */
export const yy = (param: { current: number; goupId?: number }): Promise<IRes> => {
  return get('message', '/sms/contact/query.page', param)
}
