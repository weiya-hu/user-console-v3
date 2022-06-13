import { get, post } from '@/utils/request'

/**
 * @name 获取服务列表
 */
export const slServiceList_api = (): Promise<IRes> => {
  return get('official ', '/sl/service/list.get')
}

/**
 * @name 保存记录信息
 */
export const slRrecordIn_api = (data: {
  company_name: any
  list: any
  user_name: any
}): Promise<IRes> => {
  return post('official ', '/sl/record.in', data)
}
