<template>
  <div class="add_template flex">
    <div class="kz_card lt">
      <div class="card_title fsc">
        <div>{{ id ? '编辑' : '新建' }}模板</div>
        <div class="fcs">
          <el-button class="bdc_btn" @click="$router.back">&emsp;取消&emsp;</el-button>
          <el-button class="bdc_btn" @click="onSendAdd(0)">稍后编辑</el-button>
          <el-button type="primary" @click="onSendAdd(1)">&emsp;提交&emsp;</el-button>
        </div>
      </div>
      <el-form
        ref="addFormRef"
        :model="addForm"
        :rules="addRules"
        hide-required-asterisk
        class="add_form"
      >
        <el-form-item label="短信类型" prop="smsType">
          <el-radio-group v-model="addForm.smsType">
            <el-radio v-for="v in sendTypes" :key="v.label" :label="v.value">{{
              v.label
            }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="模板名称" prop="name">
          <el-input v-model="addForm.name" placeholder="请输入模板名称"></el-input>
        </el-form-item>
        <el-form-item label="插入签名" prop="sign">
          <el-select
            v-model="addForm.sign"
            placeholder="请选择签名"
            class="f1"
            @change="onChangeSign"
          >
            <el-option v-for="item in signs" :key="item.id" :label="item.name" :value="item.id" />
            <el-pagination
              v-model:currentPage="signPage"
              layout="prev, pager, next"
              :total="signTotal"
              :page-size="signSize"
              small
              @current-change="onChangeSignPage"
            >
            </el-pagination>
          </el-select>
          <el-button class="bdc_btn" style="margin-left: 12px" @click="dialogShow = true"
            >新建签名</el-button
          >
        </el-form-item>
        <el-form-item label="模板内容" prop="content">
          <div class="f1">
            <div class="tip fcs mb16">
              <el-icon color="#FE9B25" size="14px" style="margin-right: 8px"><Warning /></el-icon
              >“付款”、“现金”为敏感词，容易导致模板审核失败，或被运营商拦截，请注意修改
            </div>
            <div class="flex">
              <el-input
                v-model="addForm.content"
                :rows="6"
                type="textarea"
                placeholder="请输入模板内容"
                :maxlength="500"
                class="f1"
              />
              <div style="margin-left: 12px">
                <div><el-button class="bdc_btn" disabled>插入变量</el-button></div>
                <div class="mt16"><el-button class="bdc_btn" disabled>插入短链</el-button></div>
              </div>
            </div>
            <div class="content_info">已输入 {{ addForm.content.length }} 字符，按 1 条计费</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="kz_card rt fs0">
      <div class="card_title">短信预览</div>
      <KzIphonePreview v-model="preview" />
    </div>
    <KzDialog v-model="dialogShow" width="470px" title="新建签名" @sure="sureBtn">
      <el-form ref="formRef" :model="formValue" :rules="formRule">
        <el-form-item label="签名标题" prop="name">
          <el-input
            v-model="formValue.name"
            placeholder="请输入签名"
            :maxlength="10"
            :minlength="2"
          />
        </el-form-item>
      </el-form>
    </KzDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzIphonePreview from '@/components/sms/KzIphonePreview.vue'
import { Warning } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import {
  saveTemplate_api,
  addTemplate_api,
  signaturePage_api,
  getTemplateDetail_api,
  signatureIn_api,
} from '@/api/product/sms/message'
import KzDialog from '@/components/KzDialog.vue'

const dialogShow = ref(false)
const formRef = ref()
const formValue = ref({
  name: '',
})
const nameCheck = (rule: any, value: string, callback: any) => {
  if (value.length < 2) {
    callback(new Error('签名字数需在2~10之间'))
  } else {
    callback()
  }
}
const formRule = ref({
  name: [
    { required: true, message: '请输入签名', trigger: 'change' },
    { validator: nameCheck, trigger: 'blur' },
  ],
})
const sureBtn = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      const { status } = await signatureIn_api(formValue.value)
      status &&
        (() => {
          formRef.value.resetFields()
          dialogShow.value = false
          signPage.value = 1
          getSignList()
        })()
    }
  })
}

const router = useRouter()
const route = useRoute()

const id = route.query.id ? String(route.query.id) : ''

const signText = ref('')
const preview = computed(
  () => (addForm.value.sign ? '【' + signText.value + '】' : '') + addForm.value.content
)

const addFormRef = ref()
const addForm = ref({
  smsType: 1,
  name: '',
  sign: '',
  content: '',
})

const addRules = {
  smsType: [
    {
      required: true,
      message: '请选择短信类型！',
      trigger: 'change',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入模板名称！',
      trigger: 'change',
    },
  ],
  sign: [
    {
      required: true,
      message: '请选择签名！',
      trigger: 'change',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入模板内容！',
      trigger: 'change',
    },
  ],
}

const sendTypes = [
  { label: '事务类', value: 1 },
  { label: '通用/运营类', value: 2 },
]

const signPage = ref(1)
const signSize = ref(5)
const signTotal = ref(0)
const signs = ref<any[]>([])
const getSignList = async () => {
  const { status, body } = await signaturePage_api({
    size: signSize.value,
    current: signPage.value,
  })
  if (status) {
    signTotal.value = body.total
    signs.value = body.records
  }
}
const onChangeSign = (id: number) => {
  signText.value = signs.value.find((v) => v.id === id)?.name
}

const onChangeSignPage = () => {
  getSignList()
}

const saveType = ref(0)
const onSendAdd = (type: 0 | 1) => {
  saveType.value = type
  if (type) {
    addFormRef.value.validate(async (valid: boolean) => {
      if (valid) {
        const { status } = await addTemplate_api({
          content: addForm.value.content,
          signature_id: addForm.value.sign,
          title: addForm.value.name,
          type: addForm.value.smsType,
          id,
        })
        if (status) {
          router.back()
        }
      }
    })
  } else {
    addFormRef.value.validateField('name', async (valid: boolean) => {
      if (valid) {
        const { status } = await saveTemplate_api({
          content: addForm.value.content,
          signature_id: addForm.value.sign,
          title: addForm.value.name,
          type: addForm.value.smsType,
          id,
        })
        if (status) {
          router.back()
        }
      }
    })
  }
}

const getEdit = async () => {
  await getSignList()
  if (id) {
    getTemplateDetail_api({ id }).then(async (res) => {
      addForm.value.smsType = res.body.type
      addForm.value.name = res.body.title
      addForm.value.sign = res.body.signature_id
      addForm.value.content = res.body.content
      const findSign = async () => {
        const signObj = signs.value.find((v) => v.id === Number(res.body.signature_id))
        signText.value = signObj ? signObj.name : ''
        if (signObj || signPage.value * signSize.value >= signTotal.value) {
        } else {
          signPage.value++
          await getSignList()
          findSign()
        }
      }
      await findSign()
    })
  }
}
getEdit()
</script>

<style lang="scss" scoped>
.add_template {
  height: 100%;
  .lt {
    margin-right: 16px;
    width: calc(100% - 516px);
    .add_form {
      padding: 0 24px 24px;
      .tip {
        height: 32px;
        padding: 0 12px;
        font-size: 12px;
        background-color: rgba(254, 155, 37, 0.1);
        color: #fe9b25;
      }
      .content_info {
        font-size: 12px;
        color: #909399;
      }
    }
  }
  .rt {
    height: 100%;
    width: 500px;
  }
}
</style>
