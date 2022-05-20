import { get, post } from '@/utils/request'
/**
 * @name 获取企业分组列表
 */
export const getgroup_api = (): Promise<IRes> => {
  return get('user', '/web/company/group.list')
}
/**
 * @name 修改企业分组名称
 */
export const modifyname_api = (data: { name: string; group_id: number }): Promise<IRes> => {
  return post('user', '/web/company/group/name.up', data)
}
/**
 * @name 添加企业分组
 */
export const addgroup_api = (data: { name: string }): Promise<IRes> => {
  return post('user', '/web/company/group.in', data)
}
/**
 * @name 删除企业分组
 */
export const deletegroup_api = (data: { group_id: number }): Promise<IRes> => {
  return post('user', '/web/company/group.del')
}
