<template>
  <div class="add_send flex">
    <div class="kz_card lt">
      <div class="card_title fsc">
        <div>新建短信</div>
        <div class="fcs">
          <el-button class="bdc_btn" @click="$router.back">&emsp;取消&emsp;</el-button>
          <el-button class="bdc_btn" @click="onSendAdd(0)">稍后编辑</el-button>
          <el-button type="primary" disabled>使用5G消息发送</el-button>
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
        <el-form-item label="短信模板" prop="tid">
          <div class="f1">
            <div class="flex">
              <el-select v-model="addForm.tid" placeholder="请选择短信模板" class="f1">
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
            </div>
            <div v-show="addForm.tid" class="template_content">
              <div class="template_text">
                【xx京东店】亲，双十一即将来临！为感谢您一直以来的支持与厚爱，xx京东店酬谢活动开始了，全场xx商品8折起，两件以上6折起，详询xx退订回T
              </div>
              <div class="template_info">本条短信共计74个字，按2条计费</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="发送方式" prop="sendType">
          <div>
            <el-radio-group v-model="addForm.sendType" @change="onChangeSendType">
              <el-radio label="1">即时发送</el-radio>
              <el-radio label="2">定时发送</el-radio>
            </el-radio-group>
            <div v-show="addForm.sendType === '2'">
              <el-date-picker
                v-model="addForm.sendTime"
                type="datetime"
                placeholder="请选择发送时间"
                format="YYYY/MM/DD hh:mm"
              />
            </div>
          </div>
        </el-form-item>
        <el-form-item label="发送号码" prop="tels">
          <div class="f1">
            <div class="fcs mb16">
              <div class="sedn_type" :class="selType === 1 && 'active'" @click="onChangeSelType(1)">
                手动输入
              </div>
              <div class="sedn_type" :class="selType === 2 && 'active'" @click="onChangeSelType(2)">
                从联系人选择
              </div>
            </div>
            <KzTelInput v-show="selType === 1" v-model="telArr" @change="onChangeTels" />
            <div v-show="selType === 2" class="add_contacts">
              <div class="add_contacts_search fsc">
                <div class="fcs fjend">
                  <el-input
                    v-model="searchContacts"
                    style="width: 180px; margin-right: 12px"
                    placeholder="请输入"
                  >
                    <template #prefix>
                      <KzIcon href="#icon-sousuo"></KzIcon>
                    </template>
                  </el-input>
                  <el-button class="bdc_btn">查询</el-button>
                </div>
                <div class="contacts_total">共选择联系人：{{ contactsArr.length }}个</div>
              </div>
              <div class="dmp_table mt16 fcs">
                <el-table
                  ref="tableRef"
                  v-loading="tableLoading"
                  row-key="id"
                  :data="tableData"
                  height="250"
                  style="width: 310px"
                  @selection-change="onChangeSel"
                >
                  <el-table-column type="selection" width="50" />
                  <el-table-column
                    prop="type"
                    label="分组"
                    width="80"
                    :filters="[
                      { text: '分组一', value: '1' },
                      { text: '分组二', value: '2' },
                    ]"
                    :filter-method="filterType"
                    filter-placement="bottom-end"
                  >
                    <template #default="{ row }">
                      {{ row.type }}
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="70" />
                  <el-table-column prop="tel" label="电话号码" width="110" />
                </el-table>
                <div style="width: 30px" class="fcc f0">
                  <KzIcon href="#icon-tiaozhuan-youxiantiao" />
                </div>
                <div class="is_sels f1">
                  <el-scrollbar :noresize="true">
                    <div v-for="v in contactsArr" :key="v.id" class="is_sel_item fsc">
                      <div class="fcs">
                        <div class="is_sel_item_name">{{ v.name }}</div>
                        <div>{{ v.tel }}</div>
                      </div>
                      <KzIcon href="#icon-suoxiao" size="16px" @click="onDelSel(v.id)" />
                    </div>
                  </el-scrollbar>
                </div>
              </div>
            </div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import KzTelInput from '@/components/sms/KzTelInput.vue'
import KzIphonePreview from '@/components/sms/KzIphonePreview.vue'
import { telReg } from '@/utils/index'

const telArr = ref([])
const telRegArr = computed(() => telArr.value.filter((v) => telReg.test(v)))
const preview = ref(
  '短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览短信预览'
)

const addFormRef = ref()
const addForm = ref({
  tid: '',
  sendType: '',
  sendTime: '',
  tels: [],
})

const telsPass = (rule: any, value: any, callback: any) => {
  if (selType.value === 1) {
    if (!telArr.value.length) {
      callback(new Error('请输入号码!'))
      return
    }
    if (!telRegArr.value.length) {
      callback(new Error('请输入正确号码!'))
      return
    }
    return
  }
  if (selType.value === 2 && !contactsArr.value.length) {
    callback(new Error('请选择联系人!'))
    return
  }
  callback()
}

const sendTimePass = (rule: any, value: any, callback: any) => {
  if (addForm.value.sendType === '2' && !addForm.value.sendTime) {
    callback(new Error('请选择发送时间!'))
    return
  }
  callback()
}
const addRules = {
  tid: [
    {
      required: true,
      message: '请选择短信模板！',
      trigger: 'change',
    },
  ],
  sendType: [
    {
      required: true,
      message: '请选择短信发送方式！',
      trigger: 'blur',
    },
    {
      validator: sendTimePass,
      trigger: 'blur',
    },
  ],
  tels: [
    {
      validator: telsPass,
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
const page = ref(1)
const total = ref(100)
const selType = ref(1)
const onChangeSelType = (type: 1 | 2) => {
  selType.value = type
  addFormRef.value.clearValidate('tels')
}

const onChangeSendType = () => {
  addFormRef.value.clearValidate('sendType')
}

const onChangeTels = () => {
  console.log(1)

  addFormRef.value.validateField('tels')
}

const searchContacts = ref('')
const tableRef = ref()
const contactsPage = ref(1)
const contactsSize = ref(10)
const contactsTotal = ref(0)
const tableLoading = ref(false)
const tableData = ref([
  {
    id: 1,
    name: '张三',
    type: '1',
    tel: '123',
  },
  {
    id: 2,
    name: '李四',
    type: '2',
    tel: '1234',
  },
  {
    id: 3,
    name: '李四',
    type: '2',
    tel: '1234',
  },
  {
    id: 4,
    name: '李四',
    type: '2',
    tel: '1234',
  },
  {
    id: 5,
    name: '李四',
    type: '2',
    tel: '1234',
  },
  {
    id: 6,
    name: '李四',
    type: '2',
    tel: '1234',
  },
  {
    id: 7,
    name: '李四',
    type: '2',
    tel: '1234',
  },
])

onMounted(() => {
  tableRef.value &&
    tableRef.value.$refs.bodyWrapper
      .getElementsByClassName('el-scrollbar__wrap')[0]
      .addEventListener('scroll', onContactsLoad)
})
onUnmounted(() => {
  tableRef.value &&
    tableRef.value.$refs.bodyWrapper
      .getElementsByClassName('el-scrollbar__wrap')[0]
      .removeEventListener('scroll', onContactsLoad)
})
const onContactsLoad = (e: Event) => {
  const { clientHeight, scrollTop, scrollHeight } = e.target as HTMLElement
  // 父容器高度 + 子容器距离父容器顶端的高度 = 子容器可滚动的高度
  if (clientHeight + scrollTop === scrollHeight) {
    console.log('竖向滚动条已经滚动到底部')
  }
}

const filterType = (value: string, row: any) => {
  return row.type === value
}
const contactsArr = ref<any[]>([])
const onChangeSel = (val: any) => {
  contactsArr.value = val
  console.log(contactsArr.value)
}
const onDelSel = (id: number | string) => {
  tableRef.value.toggleRowSelection(
    tableData.value.find((v) => v.id === id),
    undefined
  )
}

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
.add_send {
  height: 100%;
  .lt {
    margin-right: 16px;
    width: calc(100% - 516px);
    .add_form {
      padding: 0 24px 24px;
      .template_content {
        margin-top: 12px;
        .template_text {
          color: #606266;
          background-color: #f3f4f8;
          padding: 16px;
          word-break: break-all;
          line-height: 24px;
          border-radius: 4px;
        }
        .template_info {
          font-size: 12px;
          line-height: 1;
          margin-top: 12px;
          color: #909399;
        }
      }
      .sedn_type {
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        background-color: #fff;
        border-radius: 4px;
        margin-right: 2px;
        cursor: pointer;
        color: #303133;
        &.active,
        &:hover {
          background-color: #eaf0fd;
          color: $dfcolor;
        }
      }
      .add_contacts {
        .contacts_total {
          color: #909399;
          font-size: 12px;
        }
      }
      .is_sels {
        height: 250px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #eeeeee;
        .is_sel_item {
          height: 40px;
          padding: 0 16px;
          font-size: 13px;
          color: #606266;
          &:hover {
            background-color: var(--el-fill-color-light);
          }
          .is_sel_item_name {
            margin-right: 12px;
          }
          .kzicon {
            margin-left: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .rt {
    height: 100%;
    width: 500px;
  }
}
</style>
