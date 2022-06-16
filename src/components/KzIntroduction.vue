<template>
  <div class="kz_introduction">
    <div v-if="showMsg" class="fcc tip_msg">
      <el-icon color="#2150EC"><WarningFilled /></el-icon>
      <div class="tip_content">亲爱的用户，{{ contents[props.type].msg }}</div>
      <el-link type="primary" @click="show = true">{{ contents[props.type].link }}</el-link>
    </div>
    <img :src="product ? noInsImg[product as keyof typeof noInsImg] : ''" alt="" />
    <KzDialog v-model="show" type="kf" />
  </div>
</template>

<script setup lang="ts">
/**
 * 介绍页面
 * @author chn
 */
import { ref, computed } from 'vue'
import KzDialog from '@/components/KzDialog.vue'
import { WarningFilled } from '@element-plus/icons-vue'
import { mainStore } from '@/store/index'
const props = withDefaults(
  defineProps<{
    product: string // 产品名称，dmp cms ...
    showMsg?: boolean // 是否显示提示
    type?: 1 | 2 | 3 // 1：没有订购过，2：订购过到期了，3：没有权限
  }>(),
  {
    showMsg: false,
    type: 1,
  }
)
const noInsImg = ref({
  dmp: 'https://res.kzszh.com/dev/web/index/image/5850940396c41a72c181eaa202d02123.jpg',
  cms: 'https://res.kzszh.com/dev/web/index/image/966cdce67688806609fb0826a9303134.jpg',
})
const show = ref(false)
const store = mainStore()
const nowIdentity = computed(() => store.state.nowUserIdentity.iconType)
const contents = ref({
  1: {
    msg: '暂未订购该产品与服务。',
    link: '联系客服订购产品',
  },
  2: {
    msg: '该产品已到期，请联系客服续订。',
    link: '联系客服续订产品',
  },
  3: {
    msg: `当前身份/版本无此权限，请联系${
      nowIdentity.value === 'user' ? '客服升级。' : '企业管理员设置权限。'
    }`,
    link: nowIdentity.value === 'user' ? '联系客服升级产品' : '',
  },
})
</script>

<style scoped lang="scss">
.kz_introduction {
  padding-top: 44px;
  img {
    width: 100%;
  }
  .tip_content {
    margin-left: 10px;
  }
  .tip_msg {
    position: absolute;
    left: 0;
    top: -1px;
    z-index: 999;
    width: 100%;
    height: 44px;
    background-color: #dfebff;
    transition: all 0.3s ease;
  }
}
</style>
