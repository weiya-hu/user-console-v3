<template>
  <div class="error">
    <el-result icon="error" title="加载失败" sub-title="请重试">
      <template #extra>
        <el-button type="primary" @click="reDo">重试</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
/**
 * v-error="true" 后加载的错误组件
 * @author chn
 */
import { ElButton, ElResult } from 'element-plus'
import emiter from '@/utils/bus'
import { ref } from 'vue'
const reDoEmitEvent = ref('')
const reDo = () => {
  emiter.emit(reDoEmitEvent.value)
}
const setEmitEvent = (eventName: string) => {
  reDoEmitEvent.value = eventName
}
defineExpose({
  setEmitEvent, // 设置emiter事件名
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'KzError',
})
</script>

<style scoped lang="scss">
.error {
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
