import { get, post } from '@/utils/request'

/**
 * @name 获取产品与服务列表(用户中心)
 */
export const productList_api = (): Promise<IRes> => {
  return get('user', '/web/user/product.list')
}
/**
 * @name 用户中心-进入系统
 */
export const userEnter_api = (data: { id: number; version_type: number }): Promise<IRes> => {
  return post('user', '/web/user/instance/switch.do', data)
}
