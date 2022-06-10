import { get, post } from '@/utils/request'

/**
 * @name 关键词搜索
 */
export const wordSearchList_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/keyword/company.page', data)
}

/**
 * @name 关键词记录
 */
export const getSearchWord_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/business/keyword.list')
}

/**
 * @name 条件组列表
 */
export const conditionsList_api = (data: any): Promise<IRes> => {
  return get('dmp', '/dmp/business/condition.list', data)
}

/**
 * @name 保存条件组
 */
export const subConditions_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/condition.in', data, true)
}

/**
 * @name 删除条件组
 */
export const delConditions_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/condition.del', data, true)
}

/**
 * @name 条件组搜索（高级搜索）
 */
export const searchByConditions_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/condition/company.page', data)
}

/**
 * @name 个性化需求列表
 */
export const demandList_api = (data: any): Promise<IRes> => {
  return get('dmp', '/dmp/business/demand.page', data)
}

/**
 * @name 添加个性化需求
 */
export const addDemand_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/demand.in', data, true)
}

/**
 * @name 删除个性化需求
 */
export const delDemand_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/business/demand.del', data, true)
}

/**
 * @name 个性化需求详情
 */
export const demandDetail_api = (data: any): Promise<IRes> => {
  return get('dmp', '/dmp/business/demand/detail.page', data)
}

/**
 * @name 数据同步
 */
export const setSync_api = (data: { list: (string | number)[] }): Promise<IRes> => {
  return post('dmp', '/dmp/business/sync.do', data)
}

/**
 * @name 数据同步今日剩余条数
 */
export const getSyncInfo_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/business/sync.get')
}
