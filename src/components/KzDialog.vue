<template>
  <el-dialog
    v-model="show"
    :width="width ? width : type === 'kf' ? '330px' : '430px'"
    :show-close="!type"
    :custom-class="type ? 'no_header_dialog' : 'kz_dialog'"
    :center="type ? true : false"
    :title="type === 'kf' ? '联系客服' : title"
    @close="close"
  >
    <!-- <template #header>
      <div :class="type === 'kf' && 'fcc kf_title'">{{ type === 'kf' ? '联系客服' : title }}</div>
    </template> -->
    <template #default>
      <slot>
        <div v-if="type === 'kf'" class="fcc fc">
          <img :src="kf_qrcode_i" alt="" />
          <div class="tip">请扫描上方二维码，联系客服人员</div>
          <div class="kf_tel fcc">
            <img :src="kzkf_i" alt="" />
            <div>客服热线：023-62797926</div>
          </div>
        </div>
        <div v-else class="fcs msg">{{ msg }}</div>
      </slot>
    </template>
    <template #footer>
      <div v-if="type === 'kf'" class="fcc long_btn">
        <el-button type="primary" size="large" @click="close">我知道了</el-button>
      </div>
      <div v-else>
        <div v-if="btn === 2" class="fjend">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">确定</el-button>
        </div>
        <div v-else class="fjend">
          <el-button type="primary" size="large" @click="close">我知道了</el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
/**
 * 通用弹窗 和 客服弹窗，默认slot，弹窗内容
 * @author chn
 */
import kf_qrcode_i from '@/assets/images/kf_qrcode.png'
import kzkf_i from '@/assets/images/kzkf.png'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    modelValue: boolean // 是否显示
    title?: string // 标题
    msg?: string // 内容
    type?: 'kf' | undefined // 'kf' 客服
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
  .long_btn {
    .el-button {
      width: 160px;
    }
  }
  .kf_tel {
    font-size: 20px;
    border-top: 1px dashed #ddd;
    margin-top: 24px;
    padding-top: 30px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 12px;
    }
  }
}
.kz_dialog {
  .msg {
    padding: 14px 0 10px;
  }
}
</style>
