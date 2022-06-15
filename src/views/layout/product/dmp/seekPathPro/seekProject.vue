<template>
  <div class="kz_card dmp_page">
    <div class="fsc mb20">
      <KzDmpTitle />
      <el-button type="primary" :icon="Plus" @click="addShow = true">新增需求</el-button>
    </div>
    <div class="dmp_table">
      <el-table v-loading="loading" :data="tableList" size="large">
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="type" label="行业分类" width="150">
          <template #default="scope">
            <div>{{ getHashStr(scope.row.industry_id.split(','), typeHash, 'last') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="地区" width="180">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px">
                  {{
                    row.province > 0 &&
                    getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                  }}
                </div>
              </template>
              <div class="els">
                {{
                  row.province > 0 &&
                  getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="group_name" label="项目名称" width="200">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px" class="fcc">{{ row.group_name }}</div>
              </template>
              <div class="els2">{{ row.group_name }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="group_desc" label="项目描述" width="300">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px" class="fcc">{{ row.group_name }}</div>
              </template>
              <div class="els2">{{ row.group_name }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="发起时间" width="155">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="100">
          <template #default="{ row }">
            <div class="fcs">
              <div class="status_dot" :class="getKzStatus(row.status).className"></div>
              <div>
                {{ getKzStatus(row.status).text }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="user_name" label="创建人" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                v-if="row.status === 4"
                type="primary"
                @click="$router.push('/product/dmp/seekpathpro/seekpathdetails?id=' + row.id)"
                >详情</el-link
              >
              <el-link v-if="row.status === 2" type="primary">---</el-link>
              <el-link v-if="row.status === 3" type="primary" @click="showFail(row.fail_reason)"
                >驳回原因</el-link
              >
              <el-link
                v-if="row.status === 1 && row.attachment"
                type="primary"
                :href="row.attachment"
                >下载附件</el-link
              >
              <div v-if="row.status !== 2 && row.attachment" class="line"></div>
              <el-link v-if="row.status !== 2" type="primary" @click="goDel(row.id)">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
    <KzDialog v-model="errorShow" title="拒绝原因" :msg="errorMsg" :btn="1" />
    <KzDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel" />

    <el-dialog
      v-model="addShow"
      :width="500"
      draggable
      title="新增需求"
      :before-close="beforeCloseAdd"
      @close="closeAdd"
    >
      <div>
        <el-form
          ref="formRef"
          v-loading="formLoading"
          :model="formValue"
          :rules="upRule"
          label-width="80px"
        >
          <el-form-item label="行业分类" required prop="industryType">
            <KzCascader v-model="formValue.industryType" type="type" />
          </el-form-item>
          <el-form-item label="选择地区" required prop="country">
            <KzCascader v-model="formValue.country" type="country" />
          </el-form-item>
          <el-form-item label="项目名称" required prop="name">
            <el-input v-model="formValue.name" placeholder="请输入项目名称" clearable></el-input>
          </el-form-item>
          <el-form-item label="项目描述" required prop="desc">
            <el-input
              v-model="formValue.desc"
              type="textarea"
              maxlength="150"
              rows="4"
              show-word-limit
              placeholder="请对寻找的项目进行简要的描述（比如招投标项目、商机项目、合作项目等）"
            ></el-input>
          </el-form-item>
          <el-form-item label="上传附件" prop="updateFile">
            <KzUpload
              ref="upload"
              v-model="formValue.updateFile"
              site="dmp_attach"
              @change="upChange"
              @error="upError"
              @success="upSuccess"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="flexr">
          <el-button :disabled="formLoading" @click="addShow = false">取消</el-button>
          <el-button type="primary" :disabled="formLoading" @click="addSure">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHashStr, strToArr, getKzStatus, errMsg, kzConfirm } from '@/utils/index'
import { mainStore } from '@/store/index'
import { channelPage_api, channelIn_api, channelDel_api } from '@/api/product/dmp/seekPathPro'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import KzDialog from '@/components/KzDialog.vue'
import KzUpload from '@/components/KzUpload.vue'
import KzCascader from '@/components/KzCascader.vue'

const store = mainStore()
const addressHash = ref(store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)
const tableList = ref([])
const total = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)
const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 2,
    size: size.value,
  }
  const { status, body } = await channelPage_api(data)
  loading.value = false
  if (status) {
    total.value = body.total
    tableList.value = body.records
  }
}
getList()

const errorShow = ref(false)
const errorMsg = ref('')
const showFail = (fail: string) => {
  errorMsg.value = fail
  errorShow.value = true
}

const delShow = ref(false)
const delId = ref<string | number>('')
const goDel = (id: string | number) => {
  delId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const { status } = await channelDel_api({ id: delId.value })
  if (status === 1) {
    delShow.value = false
    getList()
  }
}

const formLoading = ref(false)
const addShow = ref(false)
const formRef = ref()
const upload = ref() //上传组件ref
const formValue = ref({
  industryType: [],
  country: [],
  name: '',
  desc: '',
  updateFile: '',
})
const fileErrorType = ref() //上传文件错误类型
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
const upRule = reactive({
  industryType: [
    {
      required: true,
      message: '请选择行业分类',
      trigger: 'blur',
    },
  ],
  country: [
    {
      required: true,
      message: '请选择地区',
      trigger: 'blur',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入项目名称',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入项目名称',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '请输入项目描述',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入项目描述',
      trigger: 'blur',
    },
  ],
  updateFile: [
    {
      validator: fileVali,
      trigger: 'change',
    },
  ],
})
const upChange = (errorType: string) => {
  //上传组件状态改变时 添加时效验文件格式大小
  if (errorType) {
    fileErrorType.value = errorType
    formValue.value.updateFile = ''
    formRef.value!.validateField('updateFile', () => null)
  } else {
    fileErrorType.value = ''
    formRef.value!.clearValidate('updateFile')
  }
}
const upError = (err: any) => {
  //上传失败时
  formValue.value.updateFile = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  formLoading.value = false
  errMsg('上传失败')
}
const upSuccess = (path?: string) => {
  //上传成功再提交表单
  channelIn_api({
    attachment: path || '', //附件地址
    group_desc: formValue.value.desc, //人群描述
    group_name: formValue.value.name, //人群名称
    type: 2,
    province: formValue.value.country[0],
    city: formValue.value.country[1],
    district: formValue.value.country[2],
    industry_id: formValue.value.industryType.join(','),
  })
    .then((res) => {
      if (res.status) {
        addShow.value = false
        formRef.value.resetFields()
        page.value = 1
        getList()
      } else {
        formValue.value.updateFile = ''
        upload.value.clear()
      }
      formLoading.value = false
    })
    .catch(() => {
      formLoading.value = false
      upError('')
    })
}
const addSure = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      //表单效验成功再上传
      formLoading.value = true
      formValue.value.updateFile ? upload.value.submit() : upSuccess()
    } else {
      return false
    }
  })
}

const beforeCloseAdd = (done: Function) => {
  //关闭添加弹窗之前
  if (formLoading.value) {
    kzConfirm()
      .then(() => {
        done()
      })
      .catch(() => {})
  } else {
    done()
  }
}

const closeAdd = () => {
  //关闭添加弹窗
  formLoading.value = false
  fileErrorType.value = 'none'
  upload.value.clear()
  formRef.value!.resetFields()
}
</script>

<script lang="ts">
export default { name: 'SeekProject' }
</script>

<style scoped lang="scss"></style>
