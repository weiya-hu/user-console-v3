<template>
  <div>
    <div class="tag_box" @click="tagIpt.focus()">
      <div v-if="telArr.length" class="tags">
        <el-tag
          v-for="(v, i) in telArr"
          :key="i"
          closable
          :type="telReg.test(v) ? 'success' : 'danger'"
          @mouseenter="onShowToolTip($event, v)"
          @mouseleave="tooltipShow = false"
          @close="onCloseTag(i)"
          @dblclick="onDblclickTag(i)"
          >{{ v }}
        </el-tag>
      </div>
      <input
        ref="tagIpt"
        v-model="tel"
        type="text"
        class="tag_ipt"
        @keyup.,="iptTel"
        @change="changeTel"
        @keyup.delete="onDelLast"
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
        <div @mouseenter="tooltipShow = true" @mouseleave="tooltipShow = false">
          {{ tooltipMsg }}
        </div>
      </template>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { telReg } from '@/utils/index'
import debounce from 'lodash/debounce'
const tagIpt = ref()
const tel = ref('')
const telArr = ref<string[]>([])
const splitReg = new RegExp(/,|，/) // 全/半角逗号
const numberReg = new RegExp(/^(?=.*\d)/)
const iptTel = () => {
  // 输入逗号时触发
  console.log(2)
  const tels = tel.value.split(splitReg)
  if (tels.some((v) => v)) {
    tels.forEach((v) => {
      if (v && !telArr.value.includes(v)) {
        telArr.value.push(v)
      }
    })
    tel.value = ''
  }
}
const changeTel = debounce(() => {
  console.log(1)

  if (splitReg.test(tel.value)) {
    if (!numberReg.test(tel.value)) {
      console.log(11)
      return
    }
    console.log(12)
    const tels = tel.value.split(splitReg)
    tels.forEach((v) => {
      if (v && !telArr.value.includes(v)) {
        telArr.value.push(v)
      }
    })
    tel.value = ''
  } else {
    console.log(13)
    if (telReg.test(tel.value)) {
      if (telArr.value.includes(tel.value)) {
        msgRef.value = tagIpt.value
        tooltipMsg.value = '重复号码'
        tooltipShow.value = true
        return
      }
      telArr.value.push(tel.value)
      tel.value = ''
    }
    tooltipShow.value = false
  }
}, 200)
const onCloseTag = (index: number) => {
  telArr.value.splice(index, 1)
  tooltipShow.value = false
}
const onDblclickTag = (index: number) => {}
const onDelLast = () => {
  nextTick(() => {
    if (telArr.value.length && !tel.value) {
      telArr.value.splice(telArr.value.length - 1, 1)
      tooltipShow.value = false
    }
  })
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
</script>

<style lang="scss" scoped>
.tag_box {
  background-color: #ddd;
  border-radius: 8px;
  width: 500px;
  height: 300px;
  cursor: text;
  .tag_ipt {
    width: auto;
    border: none;
  }
}
</style>
