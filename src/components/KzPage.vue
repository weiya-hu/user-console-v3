<template>
  <div class="mypage">
    <el-pagination
      v-model:currentPage="my_page"
      v-model:page-size="my_size"
      background
      :layout="
        hideSizes ? 'total, prev, pager, next, jumper' : 'total, sizes, prev, pager, next, jumper'
      "
      :total="total"
      :pager-count="9"
      :page-sizes="[10, 20, 30, 50]"
      @current-change="change"
      @size-change="changeSize"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
/**
 * 分页组件
 * @author chn
 */
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    page: number // 当前页
    total: number // 总数
    size?: number // 每页条数
    hideSizes?: boolean // 是否隐藏条数选择
  }>(),
  {
    total: 0,
    size: 10,
    hideSizes: false,
  }
)
const emit = defineEmits(['update:page', 'change', 'update:size'])

const my_page = computed({
  get: () => props.page,
  set: (val) => {
    emit('update:page', val)
  },
})

const my_size = computed({
  get: () => props.size,
  set: (val) => {
    emit('update:size', val)
  },
})

const change = (page: number) => {
  emit('update:page', page)
  emit('change')
}
const changeSize = (size: number) => {
  emit('update:size', size)
  emit('change')
}
</script>

<style scoped lang="scss">
.mypage {
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
  :deep(.el-pagination) {
    .el-pager {
      --el-pagination-button-bg-color: #fff;
      --el-color-white: #2d68eb;
      --el-color-primary: rgba(33, 80, 236, 0.05);
    }
    &.is-background {
      .btn-prev,
      .btn-next {
        background-color: #fff;
        border: 1px solid #ddd;
      }
      .el-pager li {
        border: 1px solid #ddd;
        &.is-active {
          border: 1px solid #2d68eb;
        }
      }
    }
  }
}
</style>
