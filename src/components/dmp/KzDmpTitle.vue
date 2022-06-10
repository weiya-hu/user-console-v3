<template>
  <div class="kz_dmp_title">
    <div class="title">
      <slot>{{ $route.meta.title }}</slot>
    </div>
    <div v-if="total !== ''" class="find_total">
      为您找到<span>&ensp;{{ total }}&ensp;</span
      >家符合条件的客户（*根据政策与监管法规要求，联系人手机号脱敏展示）
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 顶部按钮组
 * @author chn
 */
const props = withDefaults(
  defineProps<{
    type?: 'all' | 'sync' | 'add'
    total?: number | string
  }>(),
  {
    type: 'all',
    total: '',
  }
)
</script>

<style scoped lang="scss">
.kz_dmp_title {
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #303133;
  }
  .find_total {
    margin-top: 10px;
    font-size: 12px;
    color: #909399;
    span {
      color: #ff4736;
    }
  }
}
</style>
