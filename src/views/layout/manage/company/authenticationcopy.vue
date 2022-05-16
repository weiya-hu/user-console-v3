<template>
  <div class="rz">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="180px"
      class="demo-ruleForm"
      size="large"
      v-loading="loading"
    >
      <el-form-item prop="left_time">
        <el-date-picker v-model="ruleForm.left_time" type="date" value-format="x" />
        <el-checkbox v-model="ruleForm.left_time" true-label="4102415999000">永久</el-checkbox>
      </el-form-item>

      <el-form-item label="资质照片" prop="license">
        <div class="imgs">
          <kzMediaUpload
            ref="upload"
            :max="2"
            :exname-list="exnameList"
            @upOneSuccess="upOne"
            @look="upLook"
            @error="upError"
            @change="onChange"
          ></kzMediaUpload>
          <div>*请上传资质编号清晰的资质照片；</div>
          <div>仅支持jpg、png、jpeg格式图片，最多上传2张。</div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="sub" @click="submitForm">提交认证</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import kzMediaUpload from '@/components/kzMediaUpload.vue'
import KzCascader from '@/components/KzCascader.vue'
import { lookImage, errMsg } from '@/utils/index'
import { examine, examineSave, codeCheck } from '@/api/authentication'
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '',
  industry_id: [],
  left_time: '',
  legal_person: '',
  resource: '',
  business_scope: '',
  code: '',
  contact: '',
  address: '',
  url: '',
  addr: [],
  license: '',
})
const loading = ref(false)
const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const upload = ref()
const rules = {
  name: [
    { required: true, message: '请输入企业名称', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  industry_id: [
    {
      required: true,
      message: '请输入行业分类',
      trigger: 'change',
    },
  ],
  left_time: [
    {
      required: true,
      message: '请输入证件有效期',
      trigger: 'change',
    },
  ],
  legal_person: [
    {
      required: true,
      message: '请输入联系人',
      trigger: 'blur',
    },
  ],
  contact: [
    {
      required: true,
      message: '请输入联系电话',
      trigger: 'blur',
    },
  ],
  addr: [
    {
      required: true,
      message: '请选择地址',
      trigger: 'blur',
    },
  ],
  license: [
    {
      required: true,
      message: '请添加资质照片',
      trigger: 'change',
    },
  ],
  code: [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
}

const upError = (err: string) => {
  errMsg(err)
  loading.value = false
}
const upLook = (list: string[], i: number) => {
  lookImage(list, i)
}
const upOne = (url: string) => {
  ruleForm.license = url
  console.log(ruleForm.license)
}
const onChange = () => {
  ruleFormRef.value.clearValidate('license')
}
const submitForm = () => {
  ruleFormRef.value.validate((valid: boolean) => {
    upload.value.submit()
    console.log(Number(ruleForm.left_time) / 1000)
  })
}
</script>
<style scoped lang="scss">
.rz {
  background: #ffffff;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  .demo-ruleForm {
    margin-top: 74px;
    :deep(.el-input__inner) {
      width: 320px;
      height: 40px;
    }
    :deep(.el-input__wrapper) {
      width: 320px;
      height: 40px;
    }
    :deep(.el-textarea__inner) {
      width: 320px;
      height: 140px;
    }
    .imgs {
      div:nth-child(n + 2) {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #909399;
      }
    }
    :deep(.el-form-item__content) {
      line-height: 24px;
    }
    .sub {
      width: 320px;
      height: 40px;
      margin-bottom: 25px;
    }
    .preser {
      margin: 40px 0px 16px 265px;
    }
  }
}
</style>
