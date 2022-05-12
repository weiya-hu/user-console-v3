<template>
  <el-dialog
    v-model="show"
    :width="width ? width : type === 'kf' ? '280px' : '500px'"
    :show-close="!type"
    :custom-class="type ? 'no_header_dialog' : ''"
    @close="close"
  >
    <template v-if="type !== 'tip'" #title>
      <div :class="type === 'kf' && 'fcc kf_title'">{{ type === 'kf' ? '联系客服' : title }}</div>
    </template>
    <template #default>
      <slot>
        <div v-if="type === 'kf'" class="fcc fc">
          <img :src="kf_code_i" alt="" />
          <div class="tip">请扫描上方二维码，联系客服人员</div>
        </div>
        <div v-else class="fcc msg">{{ msg }}</div>
      </slot>
    </template>
    <template #footer>
      <div v-if="type === 'kf'" class="fcc long_btn">
        <el-button type="primary" size="large" @click="close">我知道了</el-button>
      </div>
      <div v-else>
        <div v-if="btn === 2" class="fcc">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">确定</el-button>
        </div>
        <div v-else class="fcc">
          <el-button type="primary" size="large" @click="close">我知道了</el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
/**
 * 简易的居中布局弹窗 和 客服弹窗
 * @author chn
 */
import kf_code_i from '@/assets/images/kf_code.png'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    modelValue: boolean // 是否显示
    title?: string // 标题
    msg?: string // 内容
    type?: 'kf' | 'tip' | undefined // 'kf' 客服  tip 提示
    btn?: 1 | 2 // 按钮数 1/2
    width?: string // 宽度 需要单位
  }>(),
  {
    title: '提示',
    type: undefined,
    msg: '',
    btn: 2,
    width: '',
  }
)

const show = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

//sure 点击确认时
const emit = defineEmits(['update:modelValue', 'sure'])

const close = () => {
  emit('update:modelValue', false)
}
const sure = () => {
  emit('sure')
}
</script>

<style scoped lang="scss">
.no_header_dialog {
  .kf_title {
    padding: 20px 24px 16px;
    font-size: 16px;
    color: #333333;
    font-weight: 600;
  }
  .tip {
    font-size: 12px;
    color: #666;
    margin-top: 16px;
  }

  img {
    width: 180px;
    height: 180px;
  }
}
.long_btn {
  .el-button {
    width: 160px;
  }
}
</style>
