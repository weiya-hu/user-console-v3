<template>
  <div class="rz">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
      size="large"
    >
      <el-form-item label="行业分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择行业">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="企业名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="code">
        <el-input v-model="ruleForm.code" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="资质照片" prop="img">
        <div class="imgs">
          <kzMediaUpload ref="upload" :max="2" :exname-list="exnameList"></kzMediaUpload>
          <div>*请上传资质编号清晰的资质照片；</div>
          <div>仅支持jpg、png、jpeg格式图片，最多上传2张。</div>
        </div>
      </el-form-item>
      <el-form-item label="证件有效期" required>
        <!-- <el-col :span="11"> -->
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="daterange"
            value-format="x"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
        <!-- </el-col> -->
      </el-form-item>
      <el-form-item label="联系人" prop="delivery">
        <el-input v-model="ruleForm.delivery" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="联系电话" prop="phoneNum">
        <el-input v-model="ruleForm.phoneNum" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="选择地区" prop="addr">
        <KzCascader v-model="ruleForm.addr" type="address" placeholder="请选择地址" />
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="官方网站" prop="website">
        <el-input v-model="ruleForm.website" placeholder="请输入" />
      </el-form-item>

      <el-form-item label="请填写经营范围" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="sub" @click="submitForm(ruleFormRef)">提交认证</el-button>
        <!-- <el-button type="primary" @click="submit" class="sub">地区</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import kzMediaUpload from '@/components/kzMediaUpload.vue'
import KzCascader from '@/components/KzCascader.vue'
import { getIndustryList_api, getAddressList_api, getUserInfo, getYxtUrl_api } from '@/api/login'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  region: '',
  date1: '',
  delivery: '',
  resource: '',
  desc: '',
  code: '',
  phoneNum: '',
  address: '',
  website: '',
  addr: [],
  img: [],
})
const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const upload = ref()
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入企业名称', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: '请输入行业分类',
      trigger: 'change',
    },
  ],
  date1: [
    {
      required: true,
      message: '请输入证件有效期',
      trigger: 'change',
    },
  ],
  delivery: [
    {
      required: true,
      message: '请输入联系人',
      trigger: 'blur',
    },
  ],
  phoneNum: [
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
  img: [
    {
      required: true,
      message: '请添加资质照片',
      trigger: 'blur',
    },
  ],
  // desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
  code: [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const submit = async () => {
  const result = await getAddressList_api()
  console.log(result)
}
</script>
<style scoped lang="scss">
.rz {
  background: #ffffff;
  margin: 0 auto;
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
      margin-top: 10px;
      margin-bottom: 25px;
    }
  }
}
</style>
