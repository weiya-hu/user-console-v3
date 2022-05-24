import { get, post } from '@/utils/request'
import { LargeNumberLike } from 'crypto'
/**
 * @name 获取企业分组列表
 */
export const getGroup_api = (): Promise<IRes> => {
  return get('user', '/web/company/group.list')
}
/**
 * @name 修改企业分组名称
 */
export const modifyName_api = (data: { name: string; group_id: number }): Promise<IRes> => {
  return post('user', '/web/company/group/name.up', data)
}
/**
 * @name 添加企业分组
 */
export const addGroup_api = (data: { name: string }): Promise<IRes> => {
  return post('user', '/web/company/group.in', data)
}
/**
 * @name 删除企业分组
 */
export const deleteGroup_api = (data: { group_id: number }): Promise<IRes> => {
  return post('user', '/web/company/group.del', data)
}
/**
 * @name 删除企业人员
 */
export const deleteMember_api = (data: { member_id: number }): Promise<IRes> => {
  return post('user', '/web/company/member.del', data)
}
/**
 * @name 获取当前企业所有分组以及分组里的人员
 */
export const getMember_api = (): Promise<IRes> => {
  return get('user', '/web/company/member.do')
}
/**
 * @name 获取当前企业所有人员
 */
export const getList_api = (): Promise<IRes> => {
  return get('user', '/web/company/member.list')
}
/**
 * @name 获取企业人员消息
 */
export const getUser_api = (params: { memberId: number }): Promise<IRes> => {
  return get('user', '/web/company/user.list', params)
}
/**
 * @name 修改人员信息
 */
export const reviseUser_api = (data: any): Promise<IRes> => {
  return post('user', '/web/company/user.up', data)
}
/**
 * @name 获取人员分页数据（根据分组）
 */
export const groupList_api = (data: {
  current: number
  groupId?: number
  size: number
}): Promise<IRes> => {
  return get('user', '/web/company/user/one.page', data)
}
/**
 * @name 企业人员启用或禁用
 */
export const statusUser_api = (data: { member_id: number }): Promise<IRes> => {
  return post('user', '/web/company/user/status.up', data)
}
/**
 * @name 获取人员分页数据（根据角色）
 */
export const roleList_api = (data: {
  current: number
  groupId: number
  size: number
}): Promise<IRes> => {
  return get('user', '/web/company/user/two.page', data)
}
