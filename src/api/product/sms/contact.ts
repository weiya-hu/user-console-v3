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
  params: IPageParams<{ groupId?: string; mobile?: string; name?: string }>
): Promise<IRes> => {
  return get('message', '/sms/contact/query.page', params)
}

/**
 * 获取联系人分页列表
 */
export const contactGroupList_api = (): Promise<IRes> => {
  return get('message', '/sms/contact/group.list')
}

/**
 * 新增短信联系人
 */
export const contactIn_api = (data: {
  group_id: number
  mobile: string
  name: string
}): Promise<IRes> => {
  return post('message', '/sms/contact.in', data, true)
}
