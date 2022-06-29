import { get, post } from '@/utils/request'

/**
 * @name 查询短信联系人分页列表
 */
export const getContactList_api = (
  data: IPageParams<{ groupId?: number; mobile?: string; name?: string }>
): Promise<IRes> => {
  return get('message', '/sms/contact/query.page', data)
}
