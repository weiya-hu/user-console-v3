<template>
  <div class="kz_card my_up2c_page">
    <div class="fsc f1">
      <div class="card_title">供应商</div>
      <el-button type="primary" class="btns" @click="add"
        ><el-icon size="14px" style="margin-right: 4px"><Plus /></el-icon>上传数据</el-button
      >
    </div>
    <div class="mytable">
      <el-table
        v-loading="loading"
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="industry_id" label="行业分类">
          <template #default="scope">
            <div>{{ getHashStr(scope.row.industry_id.split(','), typeHash, 'last') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="country_id" label="地区" />
        <el-table-column property="product_name" label="采购商品" />
        <el-table-column property="product_desc" label="描述" />
        <el-table-column property="create_time" label="发起时间">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态">
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
        <el-table-column label="操作" width="300">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                v-if="row.status === 4"
                type="primary"
                @click="$router.push('/product/dmp/myData/buyerdetails?id=' + row.id)"
                >详情</el-link
              >
              <el-link v-if="row.status === 2" type="primary">---</el-link>
              <el-link v-if="row.status === 3" type="primary">驳回原因</el-link>
              <el-link v-if="row.status !== 2" type="primary">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
    <el-dialog
      v-model="addShow"
      :width="500"
      draggable
      title="添加需求"
      :close-on-click-modal="false"
    >
      <div>
        <el-form
          ref="formRef"
          v-loading="formLoading"
          :model="formValue"
          :rules="upRule"
          label-position="left"
          label-width="80px"
          class="my_form"
        >
          <el-form-item label="行业分类" required prop="industryType">
            <KzCascader v-model="formValue.industryType" type="type" />
          </el-form-item>
          <el-form-item label="地区" prop="country">
            <el-select
              v-model="formValue.country"
              class="sele_add"
              placeholder="请选择地区"
              size="large"
              clearable
            >
              <el-option
                v-for="item in countryList"
                :key="item.code"
                :label="item.country_name"
                :value="item.code"
                size="large"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="供应商品" required prop="name" size="large">
            <el-input v-model="formValue.name" placeholder="请输入产品名称" clearable></el-input>
          </el-form-item>
          <el-form-item label="描述" required prop="desc">
            <el-input
              v-model="formValue.desc"
              type="textarea"
              maxlength="150"
              show-word-limit
              class="input_textarea"
              placeholder="可简要描述对寻找地区的采购服务商的要求。"
              :rows="3"
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
          <el-button @click="addShow = false">取消</el-button>
          <el-button type="primary" @click="addSure">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import KzUpload from '@/components/KzUpload.vue'
import KzCascader from '@/components/KzCascader.vue'
import { getHash, getHashStr, strToArr, getKzStatus } from '@/utils/index'
import { mainStore } from '@/store/index'
import { errMsg } from '@/utils/index'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { overseasPage, overseasIn, overseasDel } from '@/api/product/dmp/seekAbroad'

const store = mainStore()

const typeHash = computed(() => store.state.typeHash)
const totle = ref(0)
const size = ref(10)
const page = ref(1)
const router = useRouter()
const loading = ref(false)
const formLoading = ref(false)
const addShow = ref(false)
const formRef = ref()
const upload = ref() //上传组件ref
const countryList = ref()
const getCountryList = () => {
  store.getCountryList().then((res) => {
    countryList.value = res
    console.log(countryList.value)
  })
}
getCountryList()
const formValue = ref({
  industryType: [],
  country: '',
  name: '',
  desc: '',
  updateFile: '',
})
const fileErrorType = ref() //上传文件错误类型
const tableList = ref([])

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
    {
      required: true,
      message: '请选择地区',
      trigger: 'change',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入采购商品',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入采购商品',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '请输入描述',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入描述',
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

const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 2,
    size: 10,
  }
  const { status, body } = await overseasPage(data)
  loading.value = false
  if (status) {
    totle.value = body.total
    tableList.value = body.records
  }
}
getList()
const add = () => {
  addShow.value = true
}
//删除按钮
const deleteBt = (row: any) => {
  ElMessageBox.confirm('是否确认删除?', '操作提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const data = { id: row.id }
    const { status } = await overseasDel(data)
    status && getList()
  })
}
//添加确定按钮
const addSure = () => {
  formRef.value.validate((valid: any) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      formLoading.value = true
      formValue.value.updateFile ? upload.value.submit() : upSuccess()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

//去详情
const toDetail = (row: any) => {
  router.push({ path: '/seekAbroad/supplierDetail', query: { id: row.id } })
}
//查看拒绝原因
const reject = (row: any) => {
  ElMessageBox.alert(row.fail_reason || '暂没有驳回原因，请联系管理员', '驳回原因', {
    confirmButtonText: '确认',
  })
}
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
  console.log('uperr', err)
  formValue.value.updateFile = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  formLoading.value = false
  errMsg('上传失败')
}
const upSuccess = (path?: string) => {
  //上传成功再提交表单
  overseasIn({
    attachment: path || '', //附件地址
    demand_desc: formValue.value.desc, //描述
    product_name: formValue.value.name, //名称
    type: 2,
    country_id: formValue.value.country,
    industry_id: formValue.value.industryType.join(','),
  })
    .then((res: any) => {
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
</script>

<style scoped lang="scss">
.my_up2c_page {
  .btns {
    margin-right: 24px;
  }
  .my_form {
    .el-dialog .el-dialog__header {
      border: none;
    }
    .el-input {
      width: 370px;
    }
    .el-select--default {
      width: 370px;
    }

    :deep(.el-select) {
      width: 370px;
    }
  }
}
</style>
