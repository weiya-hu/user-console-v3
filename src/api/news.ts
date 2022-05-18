import { get, post } from '@/utils/request'

/**
 * @name 新闻类别
 */
export const newsType_api = (): Promise<IRes> => {
  return get('official ', '/public/type.list')
}
