<template>
  <el-popover placement="left" trigger="click" popper-class="show_share user_drop" width="120">
    <ul class="my_popover_list">
      <li v-for="v in imgArr" :key="v.tips" class="share_tips" @mouseover="handClick(v)">
        <img :src="v.haveColor" alt="" />
        <span>{{ v.tips }}</span>
        <div v-if="showTyoe == v.tips && showTyoe == '微信'" class="qcshare">
          <qrcode-vue
            :value="
              'https://' +
              cmsUrl +
              '/cms_resource.html?id=' +
              shareId +
              '&invite_code=' +
              invite_code
            "
            :size="qcsize"
            level="H"
            class="qrcode"
          />
          <span>微信扫码分享</span>
        </div>
      </li>
    </ul>
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
/**
 * 分享弹窗
 * @author pr hll
 */
import wx_i from '@/assets/images/wx.png'
import wx_a_i from '@/assets/images/wx_a.png'
import QQ_i from '@/assets/images/QQ_share.png'
import QQ_a_i from '@/assets/images/QQ_a.png'
import db_i from '@/assets/images/db.png'
import db_a_i from '@/assets/images/db_a.png'
import wb_i from '@/assets/images/wb.png'
import wb_a_i from '@/assets/images/wb_a.png'
import kj_i from '@/assets/images/kj.png'
import kj_a_i from '@/assets/images/kj_a.png'
import tt_i from '@/assets/images/tt.png'
import tt_a_i from '@/assets/images/tt_a.png'
import link_i from '@/assets/images/link.png'
import link_a_i from '@/assets/images/link_a.png'
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { mainStore } from '@/store/index'
const props = withDefaults(
  defineProps<{
    shareId: string // 分享id

    // invite_code: string // 邀请码
  }>(),
  {}
)
const store = mainStore()

const invite_code = store.state.userInfo.invite_code
const cmsUrl = store.state.yxtUrl.mobile
const imgArr = ref([
  {
    haveColor: wx_i,
    noColor: wx_a_i,
    tips: '微信',
  },
  {
    haveColor: QQ_i,
    noColor: QQ_a_i,
    tips: 'QQ',
  },
  {
    haveColor: db_i,
    noColor: db_a_i,
    tips: '豆瓣',
  },
  {
    haveColor: wb_i,
    noColor: wb_a_i,
    tips: '新浪微博',
  },
  {
    haveColor: kj_i,
    noColor: kj_a_i,
    tips: 'QQ空间',
  },
  {
    haveColor: tt_i,
    noColor: tt_a_i,
    tips: '今日头条',
  },
  {
    haveColor: link_i,
    noColor: link_a_i,
    tips: '复制链接',
  },
])

const qcsize = 90
const showTyoe = ref('')
// 点击item时触发，返回所点击的item
const handClick = (value: any) => {
  showTyoe.value = value.tips
}
</script>

<style scoped lang="scss">
.show_share {
  .my_popover_list {
    // margin-left: -30px;
    li {
      margin-top: 13px;
      img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.share_tips {
  position: relative;
  .qcshare {
    position: absolute;
    top: 0;
    left: -180px;
    width: 130px;
    height: 156px;
    background: #ffffff;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    .qrcode {
      margin: 20px;
      margin-bottom: 12px;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      line-height: 14px;
      font-weight: 400;
      margin: 0 auto;
    }
  }
}
</style>
