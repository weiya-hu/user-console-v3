<template>
  <div class="kz_iphone_preview">
    <img :src="iphone_i" alt="" />
    <el-scrollbar :noresize="true" max-height="380px" class="preview_main">
      <div class="preview_content">{{ content }}</div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
/**
 * 短信预览，苹果手机样式
 * @author chn
 */
import iphone_i from '@/assets/images/iphone.png'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    modelValue: string // 预览内容
  }>(),
  {}
)
const content = computed(() => props.modelValue)
</script>

<style scoped lang="scss">
.kz_iphone_preview {
  position: relative;
  padding: 20px 100px;
  user-select: none;
  img {
    width: 300px;
    height: 612px;
  }
  .preview_main {
    position: absolute;
    left: 100px;
    top: 180px;
    width: 280px;
    padding-left: 30px;
    height: 380px;
  }
  .preview_content {
    position: relative;
    background-color: #f2f3f3;
    width: 200px;
    padding: 12px;
    border-radius: 10px;
    color: #303133;
    font-weight: 500;
    line-height: 17px;
    font-size: 12px;
    &::after {
      content: '';
      position: absolute;
      left: -10px;
      bottom: -4px;
      border-top: 10px solid transparent;
      border-left: 10px solid transparent;
      border-right: 10px solid #f2f3f3;
      border-bottom: 10px solid #f2f3f3;
      border-radius: 4px;
      transform: rotate(-30deg);
    }
  }
}
</style>
