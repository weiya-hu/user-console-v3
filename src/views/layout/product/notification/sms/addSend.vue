<template>
  <div class="add_send flex">
    <div class="kz_card lt">
      <div class="card_title fsc">
        <div>新建短信</div>
        <div class="fcs">
          <el-button class="bdc_btn">取消</el-button>
          <el-button class="bdc_btn">稍后编辑</el-button>
          <el-button type="primary" disabled>使用5G消息发送</el-button>
          <el-button type="primary">&emsp;提交&emsp;</el-button>
        </div>
      </div>
      <el-form ref="formRef" class="add_form">
        <el-form-item label="短信模板">
          <el-select v-model="value" placeholder="Select" class="f1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            <el-pagination
              v-model:currentPage="page"
              layout="prev, pager, next"
              :total="total"
              :pager-count="5"
              small
            >
            </el-pagination>
          </el-select>
          <el-button class="bdc_btn" style="margin-left: 12px">新建模板</el-button>
        </el-form-item>
        <el-form-item label="发送方式">
          <el-radio-group v-model="radio1" class="ml-4">
            <el-radio label="1">Option 1</el-radio>
            <el-radio label="2">Option 2</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发送号码">
          <div class="sedn_type mb16" :class="sendType === 1 && 'active'" @click="sendType = 1">手动输入</div>
          <div class="sedn_type mb16" :class="sendType === 2 && 'active'" @click="sendType = 2">从联系人选择</div>
          <KzTelInput v-model="telArr" v-show="sendType === 1"/>
        </el-form-item>
      </el-form>
    </div>
    <div class="kz_card rt fs0">
      <div class="card_title">短信预览</div>
      <KzIphonePreview v-model="preview"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KzTelInput from "@/components/sms/KzTelInput.vue";
import KzIphonePreview from "@/components/sms/KzIphonePreview.vue";
const telArr = ref([])

const formRef = ref()

const page = ref(1)
const total = ref(100)
const sendType = ref(1)
const preview = ref('短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览')

const value = ref('')
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
const radio1 = ref('1')

</script>

<style lang="scss" scoped>
.add_send{
  height: 100%;
  .lt{
    margin-right: 16px;
    width: calc(100% - 516px);
    .add_form{
      padding: 0 24px 24px;
      .sedn_type{
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        background-color: #fff;
        border-radius: 4px;
        margin-right: 2px;
        cursor: pointer;
        color: #303133;
        &.active,&:hover{
          background-color: #EAF0FD;
          color: $dfcolor
        }
      }
    }
  }
  .rt{
    height: 100%;
    width: 500px;
  }
}
</style>
