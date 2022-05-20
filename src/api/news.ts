import { get, post } from '@/utils/request'

/**
 * @name 新闻类别
 */
export const newsType_api = (): Promise<IRes> => {
  return get('official ', '/public/type.list')
}

/**
 * @name 新闻列表
 */
export const newsList_api = (params: {
  current: number
  size: number
  typeId: string
}): Promise<IRes> => {
  return get('official ', '/public/info.page', params)
}
