<template>
  <div class="rz">
    <el-form
      ref="ruleFormRef"
      v-loading="loading"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
      size="large"
    >
      <el-form-item label="行业分类" prop="industry_id">
        <KzCascader
          ref="typeCRef"
          v-model="ruleForm.industry_id"
          type="type"
          placeholder="请选择行业"
          :disabled="state === 2"
        />
      </el-form-item>
      <el-form-item label="企业名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入" :disabled="state === 2" />
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="code">
        <el-input
          v-model="ruleForm.code"
          placeholder="请输入"
          :disabled="state === 2"
          @blur="blur(ruleForm.code)"
        />
      </el-form-item>
      <el-form-item label="资质照片" prop="imgName">
        <div class="imgs">
          <kzImgUpload
            v-if="upShow"
            ref="upload"
            :max="2"
            :img-list="imgList"
            @up-all-success="upAll"
            @error="upError"
            @change="onChange"
            @del="delImg"
          >
          </kzImgUpload>
          <div>*请上传资质编号清晰的资质照片；</div>
          <div>仅支持jpg、png、jpeg格式图片，最多上传2张。</div>
        </div>
      </el-form-item>
      <el-form-item label="证件有效期" required>
        <!-- <el-col :span="11"> -->
        <el-form-item prop="left_time">
          <el-date-picker
            v-model="ruleForm.left_time"
            type="date"
            value-format="x"
            :disabled="state === 2"
          />
          <el-checkbox
            v-model="ruleForm.left_time"
            true-label="4102415999000"
            :disabled="state === 2"
            >永久</el-checkbox
          >
        </el-form-item>
        <!-- </el-col> -->
      </el-form-item>
      <el-form-item label="联系人" prop="legal_person">
        <el-input v-model="ruleForm.legal_person" placeholder="请输入" :disabled="state === 2" />
      </el-form-item>
      <el-form-item label="联系电话" prop="contact">
        <el-input v-model="ruleForm.contact" placeholder="请输入" :disabled="state === 2" />
      </el-form-item>
      <el-form-item label="省份地区" prop="addr">
        <KzCascader
          v-model="ruleForm.addr"
          type="address"
          placeholder="请选择地址"
          :disabled="state === 2"
        />
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入" :disabled="state === 2" />
      </el-form-item>
      <el-form-item label="官方网站" prop="url">
        <el-input v-model="ruleForm.url" placeholder="请输入" :disabled="state === 2" />
      </el-form-item>

      <el-form-item label="经营范围" prop="business_scope">
        <el-input
          v-model="ruleForm.business_scope"
          placeholder="请填写经营范围"
          type="textarea"
          clearable
          :disabled="state === 2"
        />
      </el-form-item>
      <div class="preser">
        <el-link type="primary" class="fcc" :disabled="state === 2" @click="submitForm(1)"
          ><KzIcon href="#icon-baocun" />保存认证信息</el-link
        >
      </div>
      <el-form-item>
        <el-button type="primary" class="sub" :disabled="state === 2" @click="submitForm(2)"
          >提交认证</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import kzImgUpload from '@/components/kzImgUpload.vue'
import KzCascader from '@/components/KzCascader.vue'
import { telReg, errMsg } from '@/utils/index'
import {
  examine_api,
  examineSave_api,
  codeCheck_api,
  getCompany_api,
} from '@/api/manage/company/authentication'
import { useRoute, useRouter } from 'vue-router'
const ruleFormRef = ref() //表单
const route = useRoute()
const id = route.query.id
const imgList = ref<string[]>([])
const upShow = ref(false)
const state = ref()
const getS = async () => {
  upShow.value = false
  if (id) {
    const { body, status } = await getCompany_api({ id: Number(id) })
    state.value = body.status
    if (status === 1) {
      ruleForm.name = body.name
      ruleForm.industry_id = body.industry_id.split(',')
      ruleForm.left_time = body.left_time
      ruleForm.legal_person = body.legal_person
      ruleForm.business_scope = body.business_scope
      ruleForm.code = body.code
      ruleForm.contact = body.contact
      ruleForm.address = body.address
      ruleForm.url = body.url
      ruleForm.license = body.license
      if (ruleForm.license) {
        ruleForm.license.split(',').forEach((v: string) => {
          imgList.value.push(v)
        })
      }
      ruleForm.addr = [body.province, body.city, body.district]
      ruleForm.imgName = body.license ? 'oldName' : ''
    }
  }
  upShow.value = true
}
getS()
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
  addr: [] as (string | number)[],
  license: '',
  imgName: '', // 图片名（校验用）
})
const loading = ref(false)
const upload = ref() //上传组件ref
const telPass = (rule: any, value: string, callback: any) => {
  if (telReg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号码!'))
  }
}
const imgsPass = (rule: any, value: string, callback: any) => {
  if (upload.value.imgs.length) {
    callback()
  }
  callback(new Error('请添加资质照片！'))
}
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
    { validator: telPass, trigger: 'blur' },
  ],
  addr: [
    {
      required: true,
      message: '请选择地址',
      trigger: 'blur',
    },
  ],
  imgName: [
    {
      required: true,
      message: '请添加资质照片',
      trigger: 'change',
    },
    { validator: imgsPass, trigger: 'change' },
  ],
  code: [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
}
const blur = async (code: string) => {
  await codeCheck_api({ code })
}
const upError = (err: string) => {
  errMsg(err)
  loading.value = false
}
const upAll = async (url: string[]) => {
  const Data = {
    city: ruleForm.addr[1] || 0,
    province: ruleForm.addr[0] || 0,
    district: ruleForm.addr[2],
    industry_id: ruleForm.industry_id.join(','), //行业ID
    left_time: Number(ruleForm.left_time),
    id: Number(id),
  }
  ruleForm.license = url.toString() //资质图片地址
  console.log('qwert')

  const res =
    aStatus.value === 1
      ? await examineSave_api({ ...ruleForm, ...Data })
      : await examine_api({ ...ruleForm, ...Data })
  console.log(res)
  if (res.status === 1) {
    router.back()
  }
}

const onChange = (val: string) => {
  ruleForm.imgName = val
  ruleFormRef.value.clearValidate('imgName')
}
const delImg = () => {
  if (upload.value.imgs.length === 0) {
    ruleForm.imgName = ''
  }
}
const router = useRouter()

const aStatus = ref<1 | 2>(1) // 1 保存 2 提交
const submitForm = async (val: 1 | 2) => {
  aStatus.value = val
  const Data = {
    city: ruleForm.addr[1] || 0,
    province: ruleForm.addr[0] || 0,
    district: ruleForm.addr[2],
    industry_id: ruleForm.industry_id.join(','), //行业ID
    left_time: Number(ruleForm.left_time),
    id: Number(id),
  }
  if (aStatus.value === 1) {
    if (ruleForm.imgName) {
      ruleFormRef.value.clearValidate()
      upload.value.submit()
      return
    }
    const res = await examineSave_api({ ...ruleForm, ...Data })
    console.log(res)

    if (res.status === 1) {
      router.back()
    }
  } else {
    ruleFormRef.value.validate((valid: boolean) => {
      if (valid) {
        upload.value.submit()
      }
    })
  }
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
