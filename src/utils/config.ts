/**
 * 产品hash
 * @key 产品product_id
 * @value 产品名称
 */
export const KzProduct = {
  1: 'cms',
  2: 'dmp',
}

/**
 * 工单全局状态
 */
export const KZ_STATUS: Record<number, { text: string; className: string }> = {
  0: { text: '---', className: '' },
  1: { text: '待处理', className: 'sdot_y' },
  2: { text: '已受理', className: 'sdot_g' },
  3: { text: '被驳回', className: 'sdot_r' },
  4: { text: '已完结', className: 'sdot_b' },
}

/**
 * cms我的作品库状态
 */
export const KZ_MY_STATUS: Record<number, { text: string; className: string }> = {
  0: { text: '---', className: '' },
  1: { text: '草稿', className: 'sdot_9' },
  2: { text: '待处理', className: 'sdot_y' },
  3: { text: '已完结', className: 'sdot_b' },
  4: { text: '被驳回', className: 'sdot_r' },
}

/**
 * 企业全局状态
 */
export const KZ_COM_STATUS: Record<number, { text: string; className: string }> = {
  0: { text: '---', className: '' },
  1: { text: '草稿', className: 'sdot_c0' },
  2: { text: '审核中', className: 'sdot_fe' },
  3: { text: '审核通过', className: 'sdot_g' },
  4: { text: '审核失败', className: 'sdot_ff' },
}

/**
 * dmp来源
 */
export const sourceObj: Record<number, string> = {
  1: '康州数智',
  2: '第三方数据',
  3: '号码段',
  4: '广告投放',
  5: '微信好友',
  6: '百度关键词',
  7: '大数据获客',
  8: '400获客',
  9: '竞价获客',
  10: '短信获客',
}
