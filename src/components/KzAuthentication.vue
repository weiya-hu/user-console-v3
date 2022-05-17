<template>
  <div class="rz_dialog_hll">
    <div class="kz_card identific" :model="show">
      <div class="card_title">{{ u_type == 'user' ? '实名认证' : '认证信息' }}</div>
      <div class="fcc fc imgs">
        <img :src="img" alt="" />
      </div>
      <img :src="img_small" alt="" class="pic" />
      <div class="fcc msg">{{ msg }}</div>
      <div class="fcc msgTwo">{{ msgTwo }}</div>
      <div class="fcc">
        <el-button type="primary" @click="goUrl" v-if="reSubmit">重新认证</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 居中认证弹窗
 * @author hll  pr
 */
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const showUp = ref(1)
const router = useRouter()
const props = withDefaults(
  defineProps<{
    reSubmit?: boolean //判断是否需要重新认证
    u_type: string //判断个人还是用户
    modelValue: boolean // 是否显示
    img?: string // 图片
    img_small?: string // 小图片
    msg?: string // 内容
    msgTwo?: string // 灰色文字
  }>(),
  {
    img: '',
    img_small: '',
    type: '',
    msg: '',
    msgTwo: '',
  }
)
const show = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})
const emit = defineEmits(['update:modelValue', 'redo'])
const goUrl = () => {
  emit('redo')
}
</script>

<style scoped lang="scss">
.msg {
  font-size: 16px;
  color: #303133;
  font-weight: 800;
}
.msgTwo {
  margin-top: 7px;
  font-size: 12px;
  color: #606266;
  font-weight: 400;
}
.el-button {
  width: 160px;
  height: 40px;
  margin-top: 25px;
  margin-bottom: 15px;
}
.identific {
  .imgs {
    margin-top: 100px;
    margin-bottom: 32px;
    // position: relative;
    img {
      width: 90px;
      height: 60px;
    }
  }
  .pic {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 223px;
    right:794px;
  }
}

.el-dialog {
  :deep(.el-dialog__header) {
    border-bottom: none;
  }
}
</style>
