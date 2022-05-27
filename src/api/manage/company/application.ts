import { get, post } from '@/utils/request'

/**
 * @name 获取企业邀请用户列表
 */
export const inviteCompany_api = (data: { current: number; size?: number }): Promise<IRes> => {
  return get('user ', '/company/user/invite.page', data)
}
/**
 * @name 批量审核企业邀请
 * @status 1 同意 ；0 拒绝
 */
export const invitePass_api = (data: { invite_ids: number[]; status?: 0 | 1 }): Promise<IRes> => {
  return post('user ', '/web/company/member/add.do', data)
}
