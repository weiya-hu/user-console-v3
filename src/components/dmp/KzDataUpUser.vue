<template>
  <div class="upload-users">
    <el-dialog v-model="show" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">上传客户</div>
      </template>
      <div>
        <el-form ref="formRef" v-loading="loading" :model="formValue" :rules="upUserRule">
          <el-form-item label="人群名称" required prop="personsName">
            <el-input
              v-model="formValue.personsName"
              placeholder="请输入人群名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="人群描述" required prop="personsDesc">
            <el-input
              v-model="formValue.personsDesc"
              type="textarea"
              maxlength="150"
              show-word-limit
              class="input-textarea"
              placeholder="请对人群进行简单的描述"
            ></el-input>
          </el-form-item>
          <el-form-item label="文件上传" prop="updateFile" required>
            <KzUpload
              ref="upload"
              v-model="formValue.updateFile"
              site="dmp_excel"
              :down-link="downloadUrl"
              :exname-list="['.doc', '.docx', '.pdf', '.xls', '.xlsx']"
              msg="数据文件大小不超过2M"
              @change="upChange"
              @error="upError"
              @success="upSuccess"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">上传</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue'
import KzUpload from '@/components/KzUpload.vue'
import { errMsg } from '@/utils/index'
import { upRecordAdd } from '@/api/product/dmp/myData'
import { useRoute } from 'vue-router'
import axios from 'axios'
//父组件传的值
const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {}
)

const show = computed({
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
      callback(new Error('请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件'))
      break
    case 'none':
      callback(new Error('请添加文件'))
      break
    default:
      callback()
      break
  }
}
const upUserRule = reactive({
  personsName: [
    {
      required: true,
      message: '请输入人群名称',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入人群名称',
      trigger: 'blur',
    },
  ],
  personsDesc: [
    {
      required: true,
      message: '请输入人群描述',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入人群描述',
      trigger: 'blur',
    },
  ],
  updateFile: [
    {
      required: true,
      message: '请添加文件',
      trigger: 'blur',
    },
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
  personsName: '',
  personsDesc: '',
  updateFile: '',
})
const loading = ref(false)
const downloadUrl = ref('')

//方法
onMounted(() => {
  console.log(route.path)
  const url =
    route.path === '/myData/up2b'
      ? '/dmp/source/template/download.do?type=1'
      : '/dmp/source/template/download.do?type=2'
  //下载模板要设置返回类型，不然文件会损坏
  axios({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      MODULE: 'dmp',
    },
    responseType: 'blob',
  }).then((res) => {
    downloadUrl.value = URL.createObjectURL(res.data)
  })
})

const emit = defineEmits(['update:modelValue', 'submitSuccess'])
const close = () => {
  emit('update:modelValue', false)
}
const sure = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      loading.value = true
      upload.value.submit()
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
    formRef.value!.validateField('file', () => null)
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
const upSuccess = (path: string) => {
  loading.value = false
  //上传成功再提交表单
  upRecordAdd({
    attachment: path, //附件地址
    group_desc: formValue.value.personsDesc, //人群描述
    group_name: formValue.value.personsName, //人群名称
    type: route.path === '/product/dmp/mydata/up2b' ? 1 : 2,
  })
    .then((res) => {
      if (res.status) {
        close()
        formRef.value.resetFields()
        emit('submitSuccess', 1)
      } else {
        formValue.value.updateFile = ''
        fileErrorType.value = 'none'
        upload.value.clear()
      }
      loading.value = false
    })
    .catch(() => {
      upError('')
    })
}
</script>

<style scoped lang="scss">
.upload-users {
  .upbox {
    .up_lt {
      width: 100px;
      height: 100px;
      border: 1px dashed $colorddd;
      flex-shrink: 0;
      position: relative;
      .file_name {
        font-size: 12px;
        line-height: 12px;
      }
      .el-icon {
        font-size: 28px;
        color: $colorddd;
      }
    }

    .up_rt {
      padding-left: 12px;
      div {
        font-size: 12px;
      }
      color: $color999;
      line-height: 20px;
      text-align: left;
      .up_tip {
        margin-top: 8px;
      }
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
}
</style>
