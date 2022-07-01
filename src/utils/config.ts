/**
 * 产品hash
 * @key 产品product_id
 * @value 产品名称
 */
export const KzProduct = {
  1: 'cms',
  2: 'dmp',
  3: 'sms',
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
 * 短信发送状态
 */
export const KZ_MESSAGE_STATUS: Record<number, { text: string; className: string }> = {
  0: { text: '---', className: '' },
  1: { text: '草稿', className: 'sdot_c0' },
  2: { text: '待发送', className: 'sdot_fe' },
  3: { text: '发送中', className: 'sdot_g' },
  4: { text: '发送完成', className: 'sdot_b' },
  5: { text: '发送失败', className: 'sdot_ff' },
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

/**
 * 新闻随机默认封面
 */
import defaultCover1 from '@/assets/images/news/cover1.jpg'
import defaultCover2 from '@/assets/images/news/cover2.jpg'
import defaultCover3 from '@/assets/images/news/cover3.jpg'
import defaultCover4 from '@/assets/images/news/cover4.jpg'
import defaultCover5 from '@/assets/images/news/cover5.jpg'
import defaultCover6 from '@/assets/images/news/cover6.jpg'
import defaultCover7 from '@/assets/images/news/cover7.jpg'
import defaultCover8 from '@/assets/images/news/cover8.jpg'
export const newsDefaultCover: Record<number, string> = {
  1: defaultCover1,
  2: defaultCover2,
  3: defaultCover3,
  4: defaultCover4,
  5: defaultCover5,
  6: defaultCover6,
  7: defaultCover7,
  8: defaultCover8,
}
