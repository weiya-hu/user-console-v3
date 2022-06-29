<template>
  <div class="add_templete flex">
    <div class="kz_card lt">
      <div class="card_title fsc">
        <div>新建模板</div>
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
            <el-radio label="1">Option 1</el-radio>
            <el-radio label="2">Option 2</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属系统" prop="belong">
          <el-select v-model="addForm.belong" placeholder="请选择所属系统" class="f1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="模板名称" prop="name">
          <el-input v-model="addForm.name" placeholder="请输入模板名称"></el-input>
        </el-form-item>
        <el-form-item label="插入签名" prop="sign">
          <el-select v-model="addForm.sign" placeholder="请选择签名" class="f1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button class="bdc_btn" style="margin-left: 12px">新建签名</el-button>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzIphonePreview from '@/components/sms/KzIphonePreview.vue'
import { Warning } from '@element-plus/icons-vue'

const preview = computed(
  () => (addForm.value.sign ? '【' + addForm.value.sign + '】' : '') + addForm.value.content
)

const addFormRef = ref()
const addForm = ref({
  smsType: '',
  belong: '',
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
  belong: [
    {
      required: true,
      message: '请选择所属系统！',
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

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const saveType = ref(0)
const onSendAdd = (type: 0 | 1) => {
  saveType.value = type
  if (type) {
    addFormRef.value.validate((valid: boolean) => {
      console.log(valid)
    })
  }
}
</script>

<style lang="scss" scoped>
.add_templete {
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
