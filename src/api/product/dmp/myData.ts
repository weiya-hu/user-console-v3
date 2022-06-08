import { get, post } from '@/utils/request'

/**
 * @name 上传记录列表
 */
export const upRecordList = (data:any): Promise<any> => {
  return get('dmp', '/dmp/source/upload.page',data)
}

/**
 * @name 上传记录详情
 */
export const upRecordDetail = (data:any): Promise<any> => {
  return get('dmp', '/dmp/source/upload/detail.page',data)
}

/**
 * @name 上传客户
 */
export const upRecordAdd = (data:any): Promise<IRes> => {
  return post('dmp', '/dmp/source/upload.in',data,true)
}

/**
 * @name 数据同步
*/
export const setSync_api = (data:{ list:(string|number)[], type: 1 | 2 }): Promise<IRes> => {
  return post('dmp', data.type == 1 ? '/dmp/source/sync/business.do' : '/dmp/source/sync/customer.do', { list: data.list })
}

/**
 * @name 数据同步今日剩余条数
*/
export const getSyncInfo_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/source/sync.get')
}