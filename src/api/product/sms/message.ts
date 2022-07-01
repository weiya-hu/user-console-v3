import { get, post } from '@/utils/request'

/**
 * 添加短信签名
 */
export const signatureIn_api = (data: { name: string }): Promise<IRes> => {
  return post('message', '/sms/signature.in', data, true)
}

/**
 * 获取短信签名分页列表
 */
export const signaturePage_api = (params: IPageParams): Promise<IRes> => {
  return get('message', '/sms/signature.page', params)
}

/**
 * 删除短信签名
 */
export const signatureDel_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/signature.del', data, true)
}

/**
 * 获取短信模板分页列表
 */
export const templateSearchPage_api = (
  params: IPageParams<{ keyword?: string }>
): Promise<IRes> => {
  return get('message', '/sms/template/search.page', params)
}

/**
 * 获取发送列表
 */
export const sendPage_api = (data: IPageParams<{ name?: string }>): Promise<IRes> => {
  return post('message', '/sms/send.page', data)
}

/**
 * 启用短信模板
 */
export const templateEnableDo_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/template/enable.do', data, true)
}

/**
 * 停用短信模板
 */
export const templatedisableDo_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/template/disable.do', data, true)
}

/**
 * 删除短信模板
 */
export const templateDel_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/template.del', data, true)
}
