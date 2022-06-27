<template>
  <div
    class="kz_tel_input fc fsc"
    @mousedown="onSelStar"
    @mouseup="onSelEnd"
    @mousemove="onTagsMove"
    @keydown.backspace="onDelTag"
  >
    <div class="kz_tel_main w100">
      <el-scrollbar :noresize="true">
        <div class="tags">
          <template v-if="telArr.length">
            <el-tag
              v-for="(v, i) in telArr"
              :key="i"
              closable
              :type="telReg.test(v) ? 'success' : 'danger'"
              class="tel_tag"
              effect="plain"
              :class="[selTags.includes(v) ? 'tel_tag_sel' : '', 'tel_tag_' + i]"
              @mouseenter="onShowToolTip($event, v)"
              @mouseleave="tooltipShow = false"
              @close.stop="onCloseTag(i)"
              @dblclick.stop="onDblclickTag(i)"
              @click.stop="onSelOneTag(v)"
              @mousedown.stop
              @mouseup.stop="onTagMouseup"
              >{{ v }}</el-tag
            >
          </template>
          <input
            v-if="!isDown"
            ref="tagIpt"
            v-model.trim="tel"
            type="text"
            class="tag_ipt"
            :style="{ width: tel.length * 16 + 'px' }"
            @keyup="onKeyTelIpt($event)"
            @change="onChangeTel"
          />
          <input
            v-if="editShow"
            ref="editIpt"
            v-model.number="editTel"
            type="text"
            class="edit_tag_ipt"
            :style="{
              top: editStyle.top + 'px',
              left: editStyle.left + 'px',
              width: editStyle.width + 'px',
            }"
            @change="changeEidt"
            @blur="onEditBlur"
            @mousedown.stop
            @mouseup.stop
            @keydown.stop
          />
        </div>
        <el-tooltip
          v-model:visible="tooltipShow"
          :virtual-ref="msgRef"
          virtual-triggering
          trigger="hover"
          placement="top"
        >
          <template #content>
            <div>{{ tooltipMsg }}</div>
          </template>
        </el-tooltip>
      </el-scrollbar>
    </div>
    <div class="total w100">共输入号码：{{ telArr.length }}</div>
  </div>
</template>

<script setup lang="ts">
/**
 * 号码输入框，号码会转换为标签形式
 * @author chn
 */
import { ref, computed, nextTick } from 'vue'
import { telReg, trimReg } from '@/utils/index'
import debounce from 'lodash/debounce'

const props = withDefaults(
  defineProps<{
    modelValue: string[] // 号码数组
  }>(),
  {}
)
const emit = defineEmits(['update:modelValue'])

const tagIpt = ref()
const tel = ref('')
const telArr = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})
const splitReg = new RegExp(/,|，/) // 全/半角逗号
const onKeyTelIpt = (e: KeyboardEvent) => {
  if (e.key === ',') {
    // 输入逗号时触发
    const tels = tel.value.split(splitReg)
    if (tels.some((v) => v)) {
      tels.forEach((v) => {
        const value = v.replace(trimReg, '')
        if (value && !telArr.value.includes(value)) {
          telArr.value.push(value)
        }
      })
      tel.value = ''
    }
  }
  if (selTags.value.length && e.key !== 'Backspace') {
    clearSel()
  }
}
const onChangeTel = debounce(() => {
  if (splitReg.test(tel.value)) {
    const tels = tel.value.split(splitReg)
    if (tels.some((v) => v)) {
      tels.forEach((v) => {
        const value = v.replace(trimReg, '')
        if (value && !telArr.value.includes(value)) {
          telArr.value.push(value)
        }
      })
      tel.value = ''
    }
  } else {
    if (telReg.test(tel.value)) {
      if (telArr.value.includes(tel.value)) {
        msgRef.value = tagIpt.value
        tooltipMsg.value = '重复号码'
        tooltipShow.value = true
        return
      }
    }
    const value = tel.value.replace(trimReg, '')
    if (value && !telArr.value.includes(value)) {
      telArr.value.push(value)
    }
    tel.value = ''
    tooltipShow.value = false
  }
}, 500)
const onCloseTag = (index: number) => {
  telArr.value.splice(index, 1)
  tooltipShow.value = false
  clearSel()
}
const editTel = ref('')
const editIpt = ref()
const editShow = ref(false)
const eidtIndex = ref(0)
const editStyle = ref({ top: 0, left: 0, width: 0 })
const onDblclickTag = (index: number) => {
  clearSel()
  eidtIndex.value = index
  editTel.value = telArr.value[eidtIndex.value]
  const tagDom = document.querySelector('.tel_tag_' + index) as HTMLElement
  if (tagDom) {
    editStyle.value.width = tagDom.offsetWidth
    editStyle.value.left = tagDom.offsetLeft
    editStyle.value.top = tagDom.offsetTop
    editShow.value = true
    nextTick(() => {
      editIpt.value.blur()
      editIpt.value.focus()
    })
  }
}
const changeEidt = () => {
  telArr.value[eidtIndex.value] = String(editTel.value) // editTel.value绑定的v-model.number会转换为number类型
  editShow.value = false
  iptFocus()
}
const onEditBlur = () => {
  editShow.value = false
  editTel.value = ''
}

const onTagMouseup = () => {
  if (isDown.value) {
    document.getSelection()?.removeAllRanges()
    isDown.value = false
    iptFocus()
  }
}

const selTags = ref<string[]>([])
const clearSel = () => {
  selTags.value.length = 0
}
const onSelOneTag = (tag: string) => {
  clearSel()
  selTags.value.push(tag)
}
const onSelTag = (tag: string) => {
  selTags.value.push(tag)
  iptFocus()
}
const onDelTag = () => {
  if (tel.value) {
    return
  }
  if (selTags.value.length) {
    const arr: string[] = []
    telArr.value.forEach((v) => {
      if (selTags.value.indexOf(v) === -1) {
        arr.push(v)
      }
    })
    telArr.value = arr
    clearSel()
    iptFocus()
    return
  }
  if (telArr.value.length) {
    clearSel()
    onSelTag(telArr.value[telArr.value.length - 1])
  }
}

const onClickIpt = () => {
  iptFocus()
  clearSel()
}

const timer = ref()
const isDown = ref(false)
const onSelStar = () => {
  // onClickIpt() // 无效？
  if (telArr.value.length) {
    timer.value = setTimeout(() => {
      isDown.value = true
    }, 200)
  }
}
const onSelEnd = async () => {
  clearTimeout(timer.value)
  if (isDown.value) {
    isDown.value = false
    iptFocus()
    return
  }
  onClickIpt()
}

const onTagsMove = () => {
  if (isDown.value && telArr.value.length) {
    const nowSelection = document.getSelection()
    if (nowSelection?.toString()) {
      const telStr = nowSelection?.toString().replace(/\n/g, ',')
      selTags.value = telStr.split(',').map((v) => v)
    }
  }
}

const msgRef = ref()
const tooltipShow = ref(false)
const tooltipMsg = ref('')
const onShowToolTip = (e: MouseEvent, tel: string) => {
  const flag = telReg.test(tel)
  if (!flag) {
    msgRef.value = e.currentTarget
    tooltipMsg.value = '号码效验失败，请双击更改'
    tooltipShow.value = true
  }
}

const iptFocus = () => {
  nextTick(() => {
    // 等待dom下一次更新，及isDown.value = false，tagIpt 加载后
    tagIpt.value.blur()
    tagIpt.value.focus()
    editShow.value = false
    editTel.value = ''
  })
}
</script>

<style scoped lang="scss">
.kz_tel_input {
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  width: 100%;
  height: 200px;
  cursor: text;
  padding: 10px 12px;
  .kz_tel_main {
    height: calc(100% - 20px);
  }
  .tags {
    position: relative;
    width: 100%;
    line-height: 1;
    .tag_ipt {
      background-color: #fff;
      min-width: 75px;
      max-width: 100%;
      border: none;
      font-size: 12px;
    }
    .edit_tag_ipt {
      position: absolute;
      height: 24px;
      border: none;
    }
    .tel_tag {
      cursor: default;
      margin: 2px;
      vertical-align: middle;
      &.el-tag--danger:hover {
        --el-tag-bg-color: var(--el-color-danger-light-9);
        // --el-tag-border-color: var(--el-color-danger-light-8);
        --el-tag-hover-color: var(--el-color-danger);
        --el-tag-text-color: var(--el-color-danger);
      }
      &.el-tag--danger.tel_tag_sel {
        --el-tag-bg-color: var(--el-color-danger);
        --el-tag-border-color: var(--el-color-danger);
        --el-tag-hover-color: var(--el-color-danger-light-3);
        --el-tag-text-color: var(--el-color-white);
      }
      &.el-tag--success:hover {
        --el-tag-bg-color: var(--el-color-success-light-9);
        // --el-tag-border-color: var(--el-color-success-light-8);
        --el-tag-hover-color: var(--el-color-success);
        --el-tag-text-color: var(--el-color-success);
      }
      &.el-tag--success.tel_tag_sel {
        --el-tag-bg-color: var(--el-color-success);
        --el-tag-border-color: var(--el-color-success);
        --el-tag-hover-color: var(--el-color-success-light-3);
        --el-tag-text-color: var(--el-color-white);
      }
    }
  }
  .total {
    font-size: 12px;
    line-height: 12px;
    color: #c0c4cc;
    text-align: right;
    margin-top: 8px;
  }
}
</style>
