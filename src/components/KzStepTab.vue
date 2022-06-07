<template>
  <div class="kz_step_tab flex">
    <div class="kz_step_tab_left fc kz_card">
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
    <div v-if="slots.content" class="kz_step_tab_right f1">
      <el-scrollbar ref="scrollbarRef" :noresize="true" @scroll="debounceScroll">
        <slot name="content"></slot>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 类似步骤条的标签页
 * @author chn
 * @slot 默认作用域插槽，作用域参数为 { item }; #content 插槽，右侧内容，和tabs对应
 */
import { ref, onMounted, nextTick, useSlots } from 'vue'
import debounce from 'lodash/debounce'
const props = withDefaults(
  defineProps<{
    modelValue: number // 激活的，tabs索引
    tabs: any[] // [{}] 形式，默认使用title字段
    itemEl?: NodeListOf<HTMLElement> // content插槽下item的domList，querySelectorAll获取
    viewHeight?: number // 滚动视图高度，HTMLElement.offsetHeight获取.
    totalHeight?: number // 滚动元素总高度，即 #content 插槽内容总offsetHeight
  }>(),
  {
    modelValue: 0,
    tabs: () => [],
    itemEl: undefined,
    viewHeight: 0,
    totalHeight: 0,
  }
)
const slots = useSlots()

const emit = defineEmits(['update:modelValue', 'change'])
// 点击时触发，改变绑定的v-model,触发change，返回点击的index
const change = (index: number) => {
  if (!slots.content) {
    emit('update:modelValue', index)
    emit('change', index)
    return
  }
  const itme = props.itemEl[index]
  if (!index) {
    scrollbarRef.value!.setScrollTop(0)
    return
  }
  if (index === props.itemEl.length - 1) {
    scrollbarRef.value!.setScrollTop(props.totalHeight)
    return
  }
  if (itme.offsetHeight > props.viewHeight / 2) {
    scrollbarRef.value!.setScrollTop(itme.offsetTop)
    return
  }
  scrollbarRef.value!.setScrollTop(itme.offsetTop - itme.offsetHeight)
}

const scrollbarRef = ref()
const scroll = ({ scrollTop }: { scrollTop: number }) => {
  if (!scrollTop) {
    // 滚动到顶部了
    emit('update:modelValue', 0)
    emit('change', 0)
    return
  }
  if (scrollTop + props.viewHeight >= props.totalHeight) {
    // 滚动到底部了
    emit('update:modelValue', props.itemEl.length - 1)
    emit('change', props.itemEl.length - 1)
    return
  }
  props.itemEl.forEach((v, i) => {
    if (v.offsetTop + v.offsetHeight <= scrollTop + props.viewHeight) {
      emit('update:modelValue', i)
      emit('change', i)
    }
  })
}
const debounceScroll = debounce(scroll, 200) // 防抖，停止滚动200ms后再调用函数
</script>

<style lang="scss" scoped>
.kz_step_tab {
  height: 100%;
  .kz_step_tab_left {
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
  .kz_step_tab_right {
    margin-left: 16px;
  }
}
</style>
