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
              <el-select
                v-model="addForm.tid"
                placeholder="请选择短信模板"
                class="f1"
                @change="onChangeTemplate"
              >
                <el-option
                  v-for="item in templates"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                  :disabled="item.template_status !== 3 || item.status === 0"
                />
                <el-pagination
                  v-model:currentPage="tPage"
                  layout="prev, pager, next"
                  :total="tTotal"
                  :page-size="tSize"
                  small
                  @current-change="getTemplateList"
                >
                </el-pagination>
              </el-select>
              <el-button class="bdc_btn" style="margin-left: 12px">新建模板</el-button>
            </div>
            <div v-show="addForm.tid" class="template_content">
              <div class="template_text">{{ preview }}</div>
              <div class="template_info">本条短信共计{{ preview.length }}个字，按1条计费</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="发送方式" prop="sendType">
          <div>
            <el-radio-group v-model="addForm.sendType" @change="onChangeSendType">
              <el-radio :label="1">即时发送</el-radio>
              <el-radio :label="2">定时发送</el-radio>
            </el-radio-group>
            <div v-show="addForm.sendType === 2">
              <el-date-picker
                v-model="addForm.sendTime"
                type="datetime"
                placeholder="请选择发送时间"
                format="YYYY/MM/DD hh:mm"
                value-format="x"
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
            <KzTelInput v-show="selType === 1" v-model="addForm.tels" @change="onChangeTels" />
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
                  <el-button class="bdc_btn" @click="onSearchContact">查询</el-button>
                </div>
                <div class="contacts_total">共选择号码：{{ addForm.contactsArr.length }}个</div>
              </div>
              <div class="dmp_table mt16 fcs">
                <el-table
                  ref="tableRef"
                  v-loading="tableLoading"
                  row-key="id"
                  :data="tableData"
                  height="250"
                  style="width: 310px"
                  @select-all="onSelAllTable"
                  @select="onSelTable"
                >
                  <el-table-column type="selection" width="50" />
                  <el-table-column
                    prop="group_name"
                    label="分组"
                    width="80"
                    :filters="groupList"
                    :filter-method="filterGroup"
                    filter-placement="bottom-end"
                    show-overflow-tooltip
                  >
                    <template #default="{ row }">
                      {{ row.group_name || '-' }}
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="70" />
                  <el-table-column prop="mobile" label="电话号码" width="110" />
                  <template v-if="tableData.length >= contactsTotal && tableData.length" #append>
                    <div class="fcc" style="color: #c0c4cc">没有更多了</div>
                  </template>
                </el-table>
                <div style="width: 30px" class="fcc f0">
                  <KzIcon href="#icon-tiaozhuan-youxiantiao" />
                </div>
                <div class="is_sels f1">
                  <el-scrollbar :noresize="true">
                    <div v-for="(v, i) in addForm.contactsArr" :key="v.id" class="is_sel_item fsc">
                      <div class="fcs">
                        <div class="is_sel_item_name els">{{ v.name }}</div>
                        <div>{{ v.mobile }}</div>
                      </div>
                      <KzIcon href="#icon-suoxiao" size="16px" @click="onDelSel(v.mobile, i)" />
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
import { contactPage_api, contactGroupList_api } from '@/api/product/sms/contact'
import {
  addSend_api,
  saveSend_api,
  templateSearchPage_api,
  getSendDetail_api,
} from '@/api/product/sms/message'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const id = route.query.id ? String(route.query.id) : ''

// const telArr = ref([])
const preview = ref('')

const addFormRef = ref()
const addForm = ref({
  tid: '',
  sendType: 1,
  sendTime: '',
  tels: [],
  contactsArr: [] as any[],
})
const telRegArr = computed(() => addForm.value.tels.filter((v) => telReg.test(v)))

const telsPass = (rule: any, value: any, callback: any) => {
  if (selType.value === 1) {
    if (!addForm.value.tels.length) {
      callback(new Error('请输入号码!'))
      return
    }
    if (!telRegArr.value.length) {
      callback(new Error('请输入正确号码!'))
      return
    }
    callback()
    return
  }
  if (selType.value === 2 && !addForm.value.contactsArr.length) {
    callback(new Error('请选择联系人!'))
    return
  }
  callback()
}

const sendTimePass = (rule: any, value: any, callback: any) => {
  if (addForm.value.sendType === 2 && !addForm.value.sendTime) {
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

const getTemplateList = async () => {
  const { status, body } = await templateSearchPage_api({
    size: tSize.value,
    current: tPage.value,
  })
  if (status) {
    tTotal.value = body.total
    templates.value = body.records
  }
}
const onChangeTemplate = (id: number) => {
  const tItem = templates.value.find((v) => v.id === id)
  preview.value = tItem ? '【' + tItem.signature + '】' + tItem.content : ''
}

const templates = ref<any[]>([])
const tPage = ref(1)
const tSize = ref(5)
const tTotal = ref(0)
const selType = ref(1)
const onChangeSelType = (type: 1 | 2) => {
  selType.value = type
  addFormRef.value.clearValidate('tels')
}

const onChangeSendType = () => {
  addFormRef.value.clearValidate('sendType')
}

const onChangeTels = () => {
  addFormRef.value.validateField('tels')
}

const groupList = ref<{ text: string; value: number }[]>([])
const getGroupList = async () => {
  const { status, body } = await contactGroupList_api()
  if (status) {
    groupList.value = body.map((v: any) => {
      return { text: v.name, value: v.id }
    })
  }
}
getGroupList()
const searchContacts = ref('')
const tableRef = ref()
const contactsPage = ref(1)
const contactsTotal = ref(0)
const tableLoading = ref(false)
const tableData = ref<any[]>([])
const getContactList = async () => {
  tableLoading.value = true
  const { status, body } = await contactPage_api({
    size: 10,
    current: contactsPage.value,
    str: searchContacts.value,
  })
  if (status) {
    contactsTotal.value = body.total
    contactsPage.value++
    tableData.value = tableData.value.concat(body.records)
    tableLoading.value = false
  }
}
getContactList()
const onSearchContact = () => {
  tableData.value.length = 0
  contactsPage.value = 1
  getContactList()
}

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
  if (tableData.value.length >= contactsTotal.value) {
    return
  }
  const { clientHeight, scrollTop, scrollHeight } = e.target as HTMLElement
  // 父容器高度 + 子容器距离父容器顶端的高度 = 子容器可滚动的高度
  if (clientHeight + scrollTop === scrollHeight) {
    getContactList()
  }
}

const filterGroup = (value: string | number, row: any) => {
  return Number(row.group_id) === Number(value)
}
// const contactsArr = ref<any[]>([])
const oldAllselLen = ref(0)
const onSelAllTable = (selection: any[]) => {
  const flag = selection.length > oldAllselLen.value ? 'add' : 'del'
  if (flag === 'add') {
    selection.forEach((v) => {
      const cindex = addForm.value.contactsArr.findIndex((j) => j.mobile === v.mobile)
      if (cindex === -1) {
        addForm.value.contactsArr.push(v)
      }
    })
  }
  if (flag === 'del') {
    const delArr = tableData.value.filter((v) => !selection.find((j) => v.id === j.id)) // 都是表格的数据，用id查找
    delArr.forEach((v) => {
      const cindex = addForm.value.contactsArr.findIndex((j) => j.mobile === v.mobile)
      if (cindex !== -1) {
        addForm.value.contactsArr.splice(cindex, 1)
      }
    })
  }
  oldAllselLen.value = selection.length
}
const onSelTable = (selection: any[], row: any) => {
  const flag = selection.find((v) => v.id === row.id) ? 'add' : 'del'
  const i = addForm.value.contactsArr.findIndex((v) => v.mobile === row.mobile)
  if (flag === 'add' && i === -1) {
    addForm.value.contactsArr.push(row)
  }
  if (flag === 'del' && i !== -1) {
    addForm.value.contactsArr.splice(i, 1)
  }
  oldAllselLen.value = selection.length
}

const onDelSel = (mobile: number | string, i: number) => {
  // const i = addForm.value.contactsArr.findIndex(v => v.mobile === mobile)
  addForm.value.contactsArr.splice(i, 1)
  oldAllselLen.value--
  tableRef.value.toggleRowSelection(
    tableData.value.find((v) => v.mobile === mobile),
    undefined
  )
}

const saveType = ref(0)
const onSendAdd = (type: 0 | 1) => {
  saveType.value = type
  if (type) {
    addFormRef.value.validate(async (valid: boolean) => {
      if (valid) {
        const { status } = await addSend_api({
          tid: addForm.value.tid,
          type: addForm.value.sendType,
          send_time: addForm.value.sendType === 2 ? Number(addForm.value.sendTime) : 0,
          contact_info:
            selType.value === 2
              ? addForm.value.contactsArr.map((v) => {
                  return { name: v.name, mobile: v.mobile }
                })
              : [],
          mobiles: selType.value === 1 ? telRegArr.value : [],
          task_id: id,
        })
        if (status) {
          router.back()
        }
      }
    })
  } else {
    addFormRef.value.validateField('tid', async (valid: boolean) => {
      if (valid) {
        const { status } = await saveSend_api({
          tid: addForm.value.tid,
          type: addForm.value.sendType,
          send_time: addForm.value.sendType === 2 ? Number(addForm.value.sendTime) : 0,
          contact_info:
            selType.value === 2
              ? addForm.value.contactsArr.map((v) => {
                  return { name: v.name, mobile: v.mobile }
                })
              : [],
          mobiles: selType.value === 1 ? telRegArr.value : [],
          task_id: id,
        })
        if (status) {
          router.back()
        }
      }
    })
  }
}

const getEdit = async () => {
  await getTemplateList()
  if (id) {
    getSendDetail_api({ taskId: id }).then(async (res) => {
      addForm.value.tid = res.body.tid
      addForm.value.sendType = res.body.type
      addForm.value.sendTime = res.body.send_time
      addForm.value.tels = res.body.mobiles || []
      addForm.value.contactsArr = res.body.contact_info || []
      selType.value = res.body.contact_info.length ? 2 : 1
      const findTemplate = async () => {
        const templateObj = templates.value.find((v) => v.id === Number(res.body.tid))
        preview.value = templateObj ? '【' + templateObj.signature + '】' + templateObj.content : ''
        if (templateObj || tPage.value * tSize.value >= tTotal.value) {
        } else {
          tPage.value++
          await getTemplateList()
          findTemplate()
        }
      }
      await findTemplate()
    })
  }
}
getEdit()
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
            max-width: 55px;
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
