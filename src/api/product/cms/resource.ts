import { get, post } from '@/utils/request'

/**
 * @name 获取资源内容库分页
 */
export const getUserCompanyList_api = (params: IPageParams): Promise<IRes> => {
  return get('cms', '/cms/res.page', params)
}

/**
 * @name 查看资源内容详情
 */
export const getDetail_api = (params: { id: string }): Promise<IRes> => {
  return get('cms', '/public/res.get', params)
}

/**
 * @name 获取行业分类
 */
export const geIndustry_api = (): Promise<IRes> => {
  return get('cms', '/cms/industry.list')
}

/**
 * @name 下载资源内容详情
 */
export const downDetail_api = (params: { id: string }): Promise<IRes> => {
  return get('cms', '/cms/res/download.do', params)
}
