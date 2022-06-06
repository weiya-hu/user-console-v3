<template>
  <div class="kz_empty fcc fc">
    <img :src="img" alt="" />
    <div class="kz_empty_text">{{ msg }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * 空状态组件
 * @author chn
 */
import empty_i from '@/assets/images/empty.png'
const props = withDefaults(
  defineProps<{
    msg?: string // 提示文本
    img?: string // 展示图片
  }>(),
  {
    msg: '暂无数据',
    img: empty_i,
  }
)
</script>

<style scoped lang="scss">
.kz_empty {
  padding-top: 20px;
  .kz_empty_text {
    font-size: 14px;
    color: #c0c4cc;
    margin-bottom: 32px;
  }
  img {
    margin-bottom: 8px;
    width: 99px;
    height: 96px;
  }
}
</style>
