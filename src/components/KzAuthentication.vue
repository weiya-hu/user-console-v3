<template>
  <div class="rz_dialog_hll">
    <el-dialog v-model="modelValue" width="500px" custom-class="rz_dialog" @close="close">
      <div class="fcc fc imgs">
        <img :src="img" alt="" />
        <img :src="img_small" alt="" class="pic" />
      </div>
      <div class="fcc msg">{{ msg }}</div>
      <div class="fcc msgTwo">{{ msgTwo }}</div>

      <div class="fcc">
        <el-button type="primary" @click="close">我知道了</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
/**
 * 居中认证弹窗
 * @author hll
 */
const props = withDefaults(
  defineProps<{
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

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped lang="scss">
.rz_dialog {
  .msg {
    font-size: 16px;
    color: #303133;
    font-family: PingFangSC-Medium, PingFang SC;

    font-weight: 800;
  }
  .msgTwo {
    margin-top: 7px;
    font-size: 12px;
    color: #606266;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  .el-button {
    width: 160px;
    height: 40px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .imgs {
    margin-bottom: 32px;
    img {
      width: 90px;
      height: 60px;
    }
    .pic {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 104px;
      left: 279px;
    }
  }

  .el-dialog {
    :deep(.el-dialog__header) {
      border-bottom: none;
    }
  }
}
</style>
