<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>联系人</div>
      <div class="flexr">
        <el-input
          v-model="searchModel"
          placeholder="请输入姓名/电话号码搜索"
          class="search_inpt"
          clearable
          @input="
            () => {
              !searchModel && getList()
            }
          "
          @keydown.enter="getList(searchModel)"
        />
        <el-button class="bdc_btn" @click="getList(searchModel)">查询</el-button>
        <el-button
          class="bdc_btn"
          @click="
            () => {
              importShow = true
              getTemplateUrl()
            }
          "
          >导入联系人</el-button
        >
        <el-button
          class="bdc_btn"
          @click="
            () => {
              drawer2 = true
              getGroupList()
            }
          "
          >分组管理</el-button
        >
        <el-button type="primary" @click="addContactBtn"
          ><KzIcon
            href="#icon-tianjia"
            size="14px"
            color="white"
            class="add_need_icon"
          />&nbsp;新建&nbsp;&nbsp;</el-button
        >
      </div>
    </div>
    <div class="dmp_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column property="name" label="联系人姓名" min-width="100" />
        <el-table-column property="group_name" label="联系人分组" min-width="100" />
        <el-table-column property="mobile" label="电话号码" min-width="120"> </el-table-column>
        <el-table-column property="create_time" label="添加时间" min-width="120">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd hh:mm') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="250">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                type="primary"
                @click="
                  $router.push(
                    '/product/notification/sms/addsend?mobile=' +
                      row.mobile +
                      '&name=' +
                      row.name +
                      '&contactId=' +
                      row.id
                  )
                "
                >发送短信</el-link
              >
              <div class="line"></div>
              <el-link type="primary" @click="editContact(row)">修改</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="cancelContact(row)">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
      <KzPage
        v-model:page="current"
        v-model:size="size"
        :total="total"
        @change="getList(searchModel, true)"
      />
    </div>
    <KzDialog
      v-model="dialogShow"
      width="470px"
      :title="contactTitle"
      @sure="sureBtn"
      @close="clearContactForm"
    >
      <el-form ref="formRef" :model="formValue" :rules="formRule">
        <el-form-item label="联系人姓名" prop="name">
          <el-input v-model="formValue.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="联系人分组" prop="group_id">
          <el-select v-model="formValue.group_id" placeholder="请选择分组" class="group_select">
            <el-option
              v-for="item in groupList"
              :key="item.id"
              :value="item.id"
              :label="item.name"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item label="&nbsp&nbsp&nbsp电话号码" prop="mobile">
          <el-input v-model="formValue.mobile" placeholder="请输入电话号码" />
        </el-form-item>
      </el-form>
    </KzDialog>
    <div class="type-tips">
      <el-drawer v-model="drawer2" :direction="direction" size="480">
        <template #header>
          <div class="tips-nav">
            <span>分组管理</span>
          </div>
        </template>
        <template #default>
          <div class="bbtns flexr">
            <el-button type="primary" class="bdc_btn type-add" plain @click="typeAdd"
              >添加</el-button
            >
          </div>
          <div class="dragbox">
            <div v-if="addBox" class="typeAdd">
              <el-input v-model="typeName" class="type-input" clearable="true" />
              <div class="cz">
                <el-button type="primary" class="bdc_btn" plain @click="typeAdd">取消</el-button>
                <el-button type="primary" class="" @click="typeComfirm">确认</el-button>
              </div>
            </div>
            <div v-for="(element, i) in groupList" :key="element.id">
              <div class="items">
                <div class="txt">{{ element.name }}</div>
                <div class="handle">
                  <div v-if="i !== 0" class="fcs fjend imgicon">
                    <el-tooltip effect="dark" content="修改名称" placement="bottom">
                      <el-icon
                        class="chover"
                        size="18px"
                        margin-right="5px"
                        @click="editName(element)"
                        ><edit
                      /></el-icon>
                    </el-tooltip>
                    <el-tooltip effect="dark" content="删除" placement="bottom">
                      <el-icon
                        class="chover"
                        size="18px"
                        margin-right="5px"
                        @click="delName(element)"
                        ><delete
                      /></el-icon>
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">取消</el-button>
            <el-button type="primary" @click="cancelClick">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </div>
    <KzDialog
      v-model="editShow"
      title="修改分组"
      width="380px"
      @close="typeName = ''"
      @sure="sureEdit"
    >
      <el-input v-model="typeName" placeholder="请输入分组名称" />
    </KzDialog>
    <KzDialog v-model="newsDelShow" :msg="'确认删除分组 “ ' + typeName + ' ” ?'" @sure="groupDel" />
    <KzDialog
      v-model="importShow"
      title="导入联系人"
      width="470px"
      @sure="sureUpload"
      @close="
        () => {
          upFile.clear()
        }
      "
    >
      <div class="flexl up_file">
        <div>上传附件</div>
        <div class="upload_pre">
          <el-form ref="upFileFormRef" :model="upFileFormValue" :rules="upFileRules">
            <el-form-item prop="addFile">
              <KzUploadToService
                ref="upFile"
                v-model="upFileFormValue.addFile"
                :exname-list="['.csv']"
                @change="upChange"
              >
                <div class="up_file_describ">
                  <div>
                    <div>1：下载模板，根据模板要求填写号码；</div>
                    <div>2：上传填写后的模板文件；</div>
                    <div>3：点击确认按钮；</div>
                  </div>
                  <el-link class="download_url" type="primary" :href="downLink" download="模板.csv"
                    >下载模板示例</el-link
                  >
                </div>
              </KzUploadToService>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </KzDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { formatDate } from '@/utils/date'
import KzDialog from '@/components/KzDialog.vue'
import { mobileCheck, errMsg } from '@/utils/index'
import { Edit, Delete } from '@element-plus/icons-vue'
import KzUploadToService from '@/components/sms/KzUploadToService.vue'
import KzPage from '@/components/KzPage.vue'
import { ElMessageBox } from 'element-plus'
import {
  contactTemplate_api,
  contactPage_api,
  contactGroupList_api,
  contactIn_api,
  contactImportDo_api,
  contactGroupIn_api,
  contactGroupUp_api,
  contactGroupDel_api,
  contactUp_api,
  contactDel_api,
  contactGet_api,
} from '@/api/product/sms/contact'

const current = ref(1)
const size = ref(10)
const total = ref(0)
const contactTitle = ref() //新建或修改联系人的悬浮框title
const fileErrorType = ref('none')
const upFile = ref()
const searchModel = ref()
const tableData = ref()
const dialogShow = ref(false)
const formRef = ref()
const groupList = ref<any[]>()
const formValue = ref({
  name: '',
  group_id: null,
  mobile: '',
})
const upFileFormRef = ref()
type IFile = Blob | string
const upFileFormValue = ref<{ addFile: IFile }>({
  addFile: '',
})
const formRule = ref({
  name: [{ required: true, message: '请输入姓名', trigger: 'change' }],
  group_id: [{ required: true, message: '请选择分组', trigger: 'change' }],
  mobile: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
})
const fileCheck = (rule: any, value: string, callback: any) => {
  console.log(fileErrorType.value)
  switch (fileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break
    case 'type':
      callback(new Error('请添加 .csv 格式的文件'))
      break
    case 'none':
      callback(new Error('请添加文件'))
      break
    default:
      callback()
      break
  }
}

const upFileRules = ref({
  addFile: [{ validator: fileCheck, trigger: 'change' }],
})

const getList = async (str?: string, pageMore?: boolean) => {
  current.value = pageMore ? current.value : 1
  const data = {
    current: current.value,
    size: size.value,
    str,
  }
  const { status, body } = await contactPage_api(data)
  status &&
    (() => {
      ;(tableData.value = body.records), (total.value = body.total)
    })()
}
getList()

//新建联系人按钮
const addContactBtn = () => {
  dialogShow.value = true
  contactTitle.value = '新建联系人'
  getGroupList()
  nextTick(() => {
    formRef.value.resetFields()
    clearContactForm()
  })
}
//确认新建/编辑联系人按钮
const sureBtn = () => {
  const flag = contactTitle.value === '编辑联系人'
  console.log(formValue.value)
  formRef.value.validate(async (valid: boolean) => {
    if (valid) {
      const { status } = flag
        ? await contactUp_api(formValue.value)
        : await contactIn_api(formValue.value)
      status &&
        (() => {
          getList()
          dialogShow.value = false
        })()
    }
  })
}
const getGroupList = async () => {
  const { status, body } = await contactGroupList_api()
  status && (groupList.value = body)
}
//修改联系人按钮
const editContact = (row: any) => {
  getGroupList()
  contactGet_api({ id: row.id }).then((res) => {
    formValue.value = res.body
    contactTitle.value = '编辑联系人'
    dialogShow.value = true
  })
}
//清空联系人表单
const clearContactForm = () => {
  // formRef.value.resetFields()
  formValue.value = {
    name: '',
    group_id: null,
    mobile: '',
  }
}
//删除联系人
const cancelContact = (row: any) => {
  ElMessageBox.confirm('是否确认删除联系人：' + row.name, '操作提示', {
    showCancelButton: true,
    cancelButtonText: '取消',
    confirmButtonText: '确认',
  })
    .then(async () => {
      const { status } = await contactDel_api({ id: row.id })
      status && getList()
    })
    .catch(() => {})
}

// 分组管理
const typeId = ref<any>({})
const typeName = ref<any>('')
const drawer2 = ref(false)
const direction = ref('rtl')
const addBox = ref(false)
const newsDelShow = ref(false)
const editShow = ref(false)

const cancelClick = () => {
  drawer2.value = false
}
//添加分组按钮
const typeAdd = () => {
  addBox.value = !addBox.value
}
//确认添加分组按钮
const typeComfirm = async () => {
  const { status } = await contactGroupIn_api({ name: typeName.value })
  if (status) {
    getGroupList()
    addBox.value = false
    typeName.value = ''
  }
}
//删除按钮
const delName = (item: any) => {
  typeId.value = item.id
  typeName.value = item.name
  newsDelShow.value = true
}
//编辑按钮
const editName = (item: any) => {
  typeId.value = item.id
  typeName.value = item.name
  editShow.value = true
}
//确认删除分组按钮
const groupDel = async () => {
  const data = {
    id: typeId.value,
  }
  const { status } = await contactGroupDel_api(data)
  status &&
    (() => {
      getGroupList()
      newsDelShow.value = false
    })()
}
//确认修改分组按钮
const sureEdit = async () => {
  const data = {
    name: typeName.value,
    id: typeId.value,
  }
  const { status } = await contactGroupUp_api(data)
  status &&
    (() => {
      getGroupList()
      editShow.value = false
    })()
}

//导入联系人

//获取下载模板链接
const downLink = ref()
const importShow = ref(false)
const getTemplateUrl = async () => {
  const res = await contactTemplate_api()
  downLink.value = URL.createObjectURL(res)
}

//上传文件有改变时
const upChange = (errorType: any) => {
  if (errorType) {
    fileErrorType.value = errorType
    upFileFormValue.value.addFile = ''
    upFileFormRef.value!.validateField('addFile', () => null)
  } else {
    fileErrorType.value = ''
    upFileFormRef.value!.clearValidate('updateFile')
  }
}
//导入联系人确认按钮
const sureUpload = () => {
  upFileFormRef.value.validate(async (valid: boolean) => {
    valid &&
      (async () => {
        const formData = new FormData() //以表单的形式传递给oss
        formData.append('file', upFileFormValue.value.addFile)
        const { status, message } = await contactImportDo_api(formData)
        status
          ? (() => {
              importShow.value = false
              ElMessageBox.alert(message, '提示', {
                confirmButtonText: 'OK',
                callback: () => {
                  getList()
                },
              })
            })()
          : errMsg(message as string)
      })()
  })
}
</script>

<style lang="scss" scoped>
.send_list {
  background: #ffffff;
  padding: 20px 24px;
  .send_list_top {
    & > div:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      line-height: 18px;
    }
    .search_inpt {
      width: 180px;
      margin-right: 12px;
    }
    .bdc_btn {
      width: 88px;
    }
  }
  .dmp_table {
    margin-top: 20px;
  }
  .group_select {
    width: 330px;
  }
  .type-tips {
    position: relative;
    :deep(.el-drawer) {
      width: 480px !important;
      .el-drawer__header {
        height: 52px;
        background: #dddddd;
        padding: 0;
        margin-bottom: 0;
        .tips-nav {
          margin-left: 24px;
          font-size: 16px;
          font-weight: 500;
          color: #333333;
        }
      }
    }
  }
  .bbtns {
    position: relative;
    // top: 55px;
    right: 10px;
    .type-add {
      width: 80px;
    }
  }
  .dragbox {
    padding: 10px;
    width: 300px;
    .typeAdd {
      width: 150%;
      height: 56px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #2d68eb;
      margin-bottom: 8px;
      line-height: 56px;
      display: flex;
      flex-direction: row;
      .type-input {
        margin: 13px;
        width: 240px;
        height: 32px;
        background: #ffffff;
        border-radius: 2px;
      }
    }
    .items {
      // width: 372px;
      width: 150%;
      height: 56px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #dddddd;
      margin-bottom: 8px;
      line-height: 56px;
      display: flex;
      flex-direction: row;
      &:hover {
        border: 1px solid #2d68eb;
      }
      .txt {
        margin-left: 8px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
      .handle {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: flex-end;
        :deep(.el-icon) {
          margin-right: 8px;
        }
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .up_file {
    align-items: flex-start;
    padding-top: 8px;
    & > div:nth-child(1) {
      width: 66px;
      height: 40px;
      font-size: 14px;
      color: #303133;
      line-height: 40px;
      margin-right: 10px;
    }
    .upload_pre {
      width: 362px;
      height: 100px;
      :deep(.my_upload) {
        height: 100px;
      }
      .up_file_describ {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        margin-left: 10px;
        & div {
          font-size: 12px;
          color: #909399;
          text-align: justify;
          line-height: 20px;
        }
        .download_url {
          font-size: 12px;
          color: #2d68eb;
          text-align: justify;
          line-height: 20px;
        }
      }
    }
    :deep(.el-form-item__error) {
      padding-left: 10px;
    }
  }
}
</style>
