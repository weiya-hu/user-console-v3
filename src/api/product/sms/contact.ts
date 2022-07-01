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
export const contactPage_api = (
  params: IPageParams<{ groupId?: string; str?: string }>
): Promise<IRes> => {
  return get('message', '/sms/contact/query.page', params)
}

/**
 * 获取短信联系人分组列表
 */
export const contactGroupList_api = (): Promise<IRes> => {
  return get('message', '/sms/contact/group.list')
}

/**
 * 新增短信联系人
 */
export const contactIn_api = (data: {
  group_id: any
  mobile: string
  name: string
}): Promise<IRes> => {
  return post('message', '/sms/contact.in', data, true)
}

/**
 * 导入短信联系人
 */
export const contactImportDo_api = (data: any): Promise<IRes> => {
  return post('message', '/sms/contact/import.do', data)
}

/**
 * 新增分组
 */
export const contactGroupIn_api = (data: { name: string }): Promise<IRes> => {
  return post('message', '/sms/contact/group.in', data, true)
}

/**
 * 编辑分组
 */
export const contactGroupUp_api = (data: { name: string; id: number }): Promise<IRes> => {
  return post('message', '/sms/contact/group.up', data, true)
}

/**
 * 删除分组
 */
export const contactGroupDel_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/contact/group.del', data, true)
}

/**
 * 编辑短信联系人
 */
export const contactUp_api = (data: any): Promise<IRes> => {
  return post('message', '/sms/contact.up', data, true)
}

/**
 * 删除短信联系人
 */
export const contactDel_api = (data: { id: number }): Promise<IRes> => {
  return post('message', '/sms/contact.del', data, true)
}
