<template>
  <div class="my_dialog">
    <el-dialog
      v-model="show"
      :width="urlData.down_type == 2 ? '260px' : '400px'"
      :show-close="urlData.down_type == 2 ? false : true"
      custom-class="kf_dialog"
      @close="close"
    >
      <template #title>
        <div :class="urlData.down_type == 2 ? 'fcc kf_title' : 'kf_title'">
          {{ urlData.down_type == 2 ? '联系客服' : '下载链接' }}
        </div>
      </template>
      <template #default>
        <div v-if="urlData.down_type == 2" class="fcc fc">
          <img :src="urlData.qr_code" alt="" />
          <div class="tip">请扫描上方二维码，联系客服索要资料</div>
        </div>
        <div v-else class="msg">
          <div class="url">
            URL链接:
            <a href="">{{ urlData.url }}</a>
          </div>
          <div class="mm">
            秘钥:
            <div>{{ urlData.url_key }}</div>
          </div>
          <div class="tips-txt">复制上述网址后，输入秘钥。可获取下载链接。</div>
        </div>
      </template>
      <template #footer>
        <div v-if="urlData.down_type == 2" class="fcc">
          <el-button type="primary" @click="close">&emsp;我知道了&emsp;</el-button>
        </div>
        <div v-else class="fjend">
          <el-button class="bdc_btn" @click="close">&emsp;取消&emsp;</el-button>
          <el-button type="primary" @click="copy(urlData.url)">&emsp;确定&emsp;</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { downDetail_api } from '@/api/product/cms/resource'
import useClipboard from 'vue-clipboard3'
import { errMsg } from '@/utils/index'
/**
 * 下载qrcode或者链接
 * @author pr hll
 */
const props = withDefaults(
  defineProps<{
    modelValue: boolean // 是否显示
  }>(),
  {}
)
const show = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})
const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

const { toClipboard } = useClipboard()
const copy = async (val: any) => {
  try {
    await toClipboard(val)
  } catch (e) {
    errMsg('该浏览器不支持自动复制')
  }
  close()
}

const urlData = ref<any>({})
const getData = async (id: string) => {
  const res = await downDetail_api({ id })
  console.log(typeof id)

  if (res.status == 1) {
    urlData.value = res.body
  }
}

defineExpose({
  getData,
})
</script>

<style scoped lang="scss">
.my_dialog {
  .msg {
    font-size: 14px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .url {
      line-height: 25px;

      a {
        color: #61a2ec;
        text-decoration: none;
      }
    }
    .mm {
      margin-top: 13px;
      margin-bottom: 20px;
      display: flex;
    }
    .tips-txt {
      font-size: 12px;
      font-weight: 400;
      color: #909399;
    }
  }

  .kf_dialog {
    .tip {
      font-size: 12px;
      color: #666;
      margin-top: 15px;
    }
    .kf_title {
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }

    .el-dialog__header {
      border-bottom: none;
    }
    img {
      width: 160px;
      height: 160px;
    }
    :deep(.el-dialog__footer) {
      padding: 0;
    }
  }
}
</style>
