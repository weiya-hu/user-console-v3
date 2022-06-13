import { get, post } from '@/utils/request'

/**
 * @name 获取需求列表
 */
export const channelPage_api = (data: IPageParams): Promise<IRes> => {
  return get('dmp', '/dmp/channel/demand.page', data)
}

/**
 * @name 获取需求详情
 */
export const channelDetailPage_api = (data: any): Promise<IRes> => {
  return get('dmp', '/dmp/channel/demand/detail.page', data)
}

/**
 * @name 删除需求
 */
export const channelDel_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/channel/demand.del', data, true)
}

/**
 * @name 添加需求
 */
export const channelIn_api = (data: any): Promise<IRes> => {
  return post('dmp', '/dmp/channel/demand.in', data, true)
}

/**
 * @name 数据同步
 */
export const setSync_api = (data: { list: (string | number)[]; type: 1 | 2 }): Promise<IRes> => {
  return post(
    'dmp',
    data.type == 1 ? '/dmp/channel/sync/channel.do' : '/dmp/channel/sync/project.do',
    data
  )
}

/**
 * @name 数据同步今日剩余条数
 */
export const getSyncInfo_api = (): Promise<IRes> => {
  return get('dmp', '/dmp/channel/sync.get')
}
