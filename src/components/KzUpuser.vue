<template>
  <div class="upload-users">
    <el-dialog
      v-model="dialogVisible"
      :width="500"
      title="创建需求"
      :before-close="beforeCloseAdd"
      @close="close"
    >
      <div v-loading="loading" class="myform">
        <el-form ref="formRef" :model="formValue" :rules="upUserRule" label-width="90px">
          <el-form-item label="需求标题" prop="title">
            <el-input v-model="formValue.title" placeholder="请输入需求标题"></el-input>
          </el-form-item>
          <el-form-item label="需求描述" prop="desc">
            <el-input
              v-model="formValue.desc"
              type="textarea"
              maxlength="150"
              show-word-limit
              rows="5"
              resize="none"
              placeholder="简要描述您的具体需求，以及期望目标。"
            ></el-input>
          </el-form-item>
          <el-form-item label="文件上传" prop="updateFile" style="margin-bottom: 20px">
            <KzUpload
              ref="upload"
              v-model="formValue.updateFile"
              msg="附件大小不超过4M<br/>支持.zip、.rar、.7z压缩包"
              :exname-list="['.zip', '.rar', '.7z']"
              :max-size="4"
              @change="upChange"
              @error="upError"
              @success="upSuccess"
            />
          </el-form-item>
        </el-form>
        <div class="fcs fjend pb20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue'
import KzUpload from '@/components/KzUpload.vue'
import { errMsg, kzConfirm } from '@/utils/index'
import { useRoute } from 'vue-router'
import { customAdd_api } from '@/api/product/cms/custom'
//父组件传的值
const props = withDefaults(
  defineProps<{
    modelValue: boolean // 是否显示
    type: number // 1软文，2图库，3海报, 4视频
  }>(),
  {}
)
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

//变量
const route = useRoute()
const fileVali = (rule: any, value: any, callback: any) => {
  switch (fileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break
    case 'type':
      callback(new Error('请添加 .zip、.rar、.7z 格式的文件'))
      break
    case 'none':
      // callback(new Error('请添加文件'))
      callback()
      break
    default:
      callback()
      break
  }
}
const upUserRule = reactive({
  title: [
    {
      required: true,
      message: '请输入需求标题',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '请输入需求描述',
      trigger: 'blur',
    },
  ],
  updateFile: [
    {
      validator: fileVali,
      trigger: 'change',
    },
  ],
})

const fileErrorType = ref('none') //上传文件错误类型
const formRef = ref()
const upload = ref() //上传组件ref
const formValue = ref({
  title: '',
  desc: '',
  updateFile: '',
})
const loading = ref(false)
const downloadUrl = ref('')

//submitSuccess 添加成功后
const emit = defineEmits(['update:modelValue', 'submitSuccess'])
const close = () => {
  formRef.value.resetFields()
  upload.value.clear()
  emit('update:modelValue', false)
}
const beforeCloseAdd = (done: Function) => {
  if (loading.value) {
    kzConfirm()
      .then(() => {
        upload.value.doAbort()
        done()
      })
      .catch(() => {})
  } else {
    done()
  }
}

const sure = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      loading.value = true
      if (formValue.value.updateFile) {
        upload.value.submit()
      } else {
        upSuccess('')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const upChange = (errorType: string) => {
  //上传组件状态改变时 添加时效验文件格式大小
  if (errorType) {
    fileErrorType.value = errorType
    formValue.value.updateFile = ''
    formRef.value!.validateField('updateFile', () => null)
  } else {
    fileErrorType.value = ''
    formRef.value!.clearValidate('updateFile')
  }
}
const upError = (err: any) => {
  //上传失败时
  console.log('uperr', err)
  formValue.value.updateFile = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  loading.value = false
  errMsg('上传失败')
}
const upSuccess = async (path: string) => {
  const res = await customAdd_api(
    {
      attach_url: path,
      detail: formValue.value.desc,
      title: formValue.value.title,
    },
    props.type
  )
  loading.value = false
  if (res.status === 1) {
    emit('submitSuccess')
  }
}
</script>

<style scoped lang="scss">
.upload-users {
  :deep(.upbox) {
    .up_tip {
      display: none;
    }
  }
  .tips {
    margin-left: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    > div {
      font-size: 12px;
      color: $color999;
      line-height: 12px;
    }
    .tips-download {
      color: $dfcolor;
      margin-top: 12px;
      cursor: pointer;
    }
  }
  .pd_btns {
    padding-bottom: 24px;
  }
}
</style>
