<template>
  <div v-loading="loading" class="kz_card my_wx_page dmp_page">
    <div class="fsc mb20">
      <KzDmpTitle />
      <el-button type="primary" :icon="Plus" @click="addShow = true">新增需求</el-button>
    </div>
    <div class="dmp_table">
      <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50" />
        <el-table-column property="wechat_id" label="好友微信号" />
        <el-table-column property="status" label="处理状态">
          <template #default="scope">
            <div class="fcs">
              <div class="status_dot" :class="getKzStatus(scope.row.status).className"></div>
              <div>{{ getKzStatus(scope.row.status).text }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="money" label="消耗金额">
          <template #default="scope">
            <div>{{ Number(scope.row.money).toFixed(2) }}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源">
          <template #default="scope">
            <div>{{ getSource(scope.row.source) }}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期">
          <template #default="scope">
            <div>{{ formatDate(new Date(scope.row.create_time), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <el-link v-if="scope.row.status == 4" type="primary" @click="goDetails(scope.row.id)"
              >查看</el-link
            >
            <el-link
              v-if="scope.row.status == 3"
              type="primary"
              @click="showFail(scope.row.fail_reason)"
              >拒绝原因</el-link
            >
            <div v-if="scope.row.status == 1 || scope.row.status == 2">---</div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
    <el-dialog v-model="addShow" title="新增需求" width="500px" @close="closeAdd">
      <div class="fcs tips">
        <el-icon color="#2150EC"><WarningFilled /></el-icon>
        <div>根据输入好友微信号，系统可获取好友更多信息。</div>
      </div>
      <el-form
        ref="addFormRef"
        v-loading="upLoading"
        class="myform no_margin"
        :model="Addform"
        :rules="addRules"
      >
        <el-form-item label="好友微信号" prop="acc">
          <el-input v-model="Addform.acc" placeholder="请输入好友微信号"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="flex fjend">
          <el-button :disabled="upLoading" @click="closeAdd">取消</el-button>
          <el-button type="primary" :disabled="!Addform.acc || upLoading" @click="goAdd"
            >提交</el-button
          >
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="errorShow" title="拒绝原因" width="400px">
      <div class="fcc msg">{{ errorMsg }}</div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="errorShow = false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Plus, WarningFilled } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import { useRouter } from 'vue-router'
import { getSource, getKzStatus } from '@/utils/index'
import { getWxList_api, addWx_api } from '@/api/product/dmp/findC'
import { ElForm } from 'element-plus'

const total = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)

interface SData {
  wechat_id: string
  status: number
  money: number
  create_time: number
  source: number
}
const tableData = ref([])
const getList = () => {
  loading.value = true
  getWxList_api({
    size: size.value,
    current: page.value,
  }).then((res) => {
    if (res.status == 1) {
      tableData.value = res.body.records
      total.value = res.body.total
    }
    loading.value = false
  })
}
getList()
const showFail = (fail: string) => {
  errorMsg.value = fail
  errorShow.value = true
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val: SData[]) => {
  //表格选择
  multipleSelection.value = val
}

const router = useRouter()
const goDetails = (id: string) => {
  router.push('/product/dmp/findc/wxdatadetails?id=' + id)
  console.log(id)
}

const addShow = ref(false)
const upLoading = ref(false)
const Addform = ref({
  acc: '',
})
type FormInstance = InstanceType<typeof ElForm>
const addFormRef = ref<FormInstance>()
const addRules = reactive({
  acc: [
    {
      required: true,
      message: '请输入好友微信号',
      trigger: 'blur',
    },
  ],
})
const closeAdd = () => {
  upLoading.value = false
  addShow.value = false
  addFormRef.value!.resetFields()
}
const goAdd = () => {
  //提交添加需求表单
  addFormRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upLoading.value = true
      addWx_api({ wechat_id: Addform.value.acc }).then((res) => {
        if (res.status == 1) {
          closeAdd()
          getList()
        }
        upLoading.value = false
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const errorShow = ref(false)
const errorMsg = ref('')
</script>

<script lang="ts">
export default { name: 'WxData' }
</script>

<style scoped lang="scss">
.tips {
  margin-bottom: 20px;
  height: 30px;
  border: 1px solid #b3caf9;
  background-color: #edf5ff;
  border-radius: 2px;
  padding-left: 12px;
  div {
    margin-left: 10px;
  }
}
</style>
