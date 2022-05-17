<template>
  <svg class="kzicon" aria-hidden="true" :style="{ fontSize: size, color: color }">
    <use :xlink:href="href"></use>
  </svg>
</template>

<script setup lang="ts">
/**
 * 图标组件
 * @author chn
 */
const props = withDefaults(
  defineProps<{
    href: string // 图标
    size?: string // 尺寸，需要单位
    color?: string // 颜色，无色图标才能改颜色
  }>(),
  {
    size: '1em',
    color: '',
  }
)
</script>

<style scoped lang="scss"></style>
