import { get, post } from '@/utils/request'

/**
 * @name 获取角色列表
 */
export const companyRoleList_api = (): Promise<IRes> => {
  return get('user ', '/web/company/role.list')
}

/**
 * @name 获取指定角色的全部权限
 */
export const permitRoleList_api = (params: { roleId: any }): Promise<IRes> => {
  return get('user ', '/web/permit/role.list', params)
}

/**
 * @name 获取当前企业全部权限
 */
export const permitCompanyList_api = (): Promise<IRes> => {
  return get('user ', '/web/permit/company.list')
}

/**
 * @name 修改企业角色名称
 */
export const companyRoleNameUp_api = (data: {
  role_id: number
  role_name: string
}): Promise<IRes> => {
  return post('user ', '/web/company/role/name.up', data)
}

/**
 * @name 给指定角色添加权限
 */
export const permitRoleAdd_api = (data: { role_id: number; map: any }): Promise<IRes> => {
  return post('user ', '/web/permit/role.add', data)
}

/**
 * @name 删除企业角色
 */
export const companyRoleDel_api = (data: { role_id: number }): Promise<IRes> => {
  return post('user ', '/web/company/role.del', data)
}

/**
 * @name 添加企业角色
 */
export const companyRoleIn_api = (data: { role_name: any }): Promise<IRes> => {
  return post('user ', '/web/company/role.in', data)
}

/**
 * @name 获取当前企业所有人员
 */
export const companyMemberList_api = (): Promise<IRes> => {
  return get('user ', '/web/company/member.list')
}

/**
 * @name 获取当前企业所有分组以及分组里的人员
 */
export const companyMemberDo_api = (): Promise<IRes> => {
  return get('user ', '/web/company/member.do')
}

/**
 * @name 根据员工名称模糊搜索
 */
export const companyMemberNameGet_api = (params: { name: any }): Promise<IRes> => {
  return get('user ', '/web/company/member/name.get', params)
}

/**
 * @name 批量添加员工角色
 */
export const companyMemberRoleListUp_api = (data: {
  role_id: any
  member_ids: []
}): Promise<IRes> => {
  return post('user ', '/web/company/member/role/list.up', data, true)
}

/**
 * @name 根据员工名称模糊搜索
 */
export const companyUserTwoPage_api = (params: {
  current: any
  roleId: any
  size: any
}): Promise<IRes> => {
  return get('user ', '/web/company/user/two.page', params)
}

/**
 * @name 获取指定人员角色IDs
 */
export const companyRoleIdsGet_api = (params: { memberId: any }): Promise<IRes> => {
  return get('user ', '/web/company/role/ids.get', params)
}

/**
 * @name 删除指定人员和指定角色的绑定关系
 */
export const companyRoleIdDel_api = (data: { memberId: any; role_id: any }): Promise<IRes> => {
  return post('user ', '/web/company/role/id.del', data)
}

/**
 * @name 修改指定人员角色
 */
export const companyRoleIdsUp_api = (data: { memberId: any; role_ids: any }): Promise<IRes> => {
  return post('user ', '/web/company/role/ids.up', data)
}
