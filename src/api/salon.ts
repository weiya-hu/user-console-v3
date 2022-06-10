import { get, post } from '@/utils/request'

/**
 * @name 新闻类别
 */
export const slServiceList_api = (): Promise<IRes> => {
  return get('official ', '/sl/service/list.get')
}

/**
 * @name 新闻列表
 */
export const slRrecordIn_api = (data: {
  company_name: any
  list: any
  user_name: any
}): Promise<IRes> => {
  return post('official ', '/sl/record.in', data)
}
