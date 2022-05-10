<template>
  <div class="kz_step_tab fc kz_card">
    <div
      v-for="(v, i) in tabs"
      :key="i"
      class="kz_step_item"
      :class="i === modelValue && 'kz_step_item_active'"
    >
      <div class="kz_step_title fcs" @click="change(i)">
        <div class="kz_step_dot"></div>
        <div class="kz_step_text">
          <slot :item="v">{{ v.title }}</slot>
        </div>
      </div>
      <div v-if="i !== tabs.length - 1" class="kz_step_line fcc">
        <div class="kz_step_line_box"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 类似步骤条的标签页
 * @author chn
 * @slot 默认作用域插槽，作用域参数为 { item }
 */
const props = withDefaults(
  defineProps<{
    modelValue: number // 激活的
    tabs: { title: string; [propName: string]: any }[]
  }>(),
  {
    modelValue: 0,
    tabs: () => [],
  }
)
// 点击时触发，改变绑定的v-model,触发change，返回点击的index
const emit = defineEmits(['update:modelValue', 'change'])
const change = (index: number) => {
  emit('update:modelValue', index)
  emit('change', index)
}
</script>

<style lang="scss" scoped>
.kz_step_tab {
  width: 160px;
  padding: 34px 0;
  align-items: center;
  .kz_step_item {
    .kz_step_title {
      cursor: pointer;
      &:hover {
        .kz_step_text {
          color: $dfcolor;
        }
      }
    }
    .kz_step_dot {
      width: 17px;
      height: 17px;
      background-color: #c0c4cc;
      border: 2px solid #fff;
      box-sizing: border-box;
      border-radius: 50%;
    }
    .kz_step_text {
      font-size: 16px;
      color: $color333;
      margin-left: 6px;
    }
    .kz_step_line {
      width: 17px;
      height: 26px;
      margin: 6px 0;
      .kz_step_line_box {
        width: 1px;
        height: 100%;
        background-color: $coloreee;
      }
    }

    &.kz_step_item_active {
      .kz_step_dot {
        background-color: #fff;
        border: 4px solid $dfcolor;
      }
    }
  }
}
</style>
