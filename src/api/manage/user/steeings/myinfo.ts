import { get, post } from '@/utils/request'

// 获取会员类别
export const userMember_api = (): Promise<IRes> => {
  return get('user ', '/public/member.list')
}
//用户中心用户基本信息和会员信息列表
export const userInfo_api = (): Promise<IRes> => {
  return get('user ', '/user/information.get')
}
// 修改用户中心基本信息
export const userInfoEdit_api = (data: {
  birth?: number
  city?: number | string
  district?: number | string
  head?: string
  name?: string
  province?: number | string
  sex?: 0 | 1 | 2
}): Promise<IRes> => {
  return post('user ', '/user/information.up', data, true)
}
