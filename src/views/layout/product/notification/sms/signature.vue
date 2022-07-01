<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>签名管理</div>
      <div class="flexr">
        <el-button type="primary" @click="dialogShow = true"
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
        <el-table-column label="签名" min-width="130">
          <template #default="{ row }">
            <div class="fcs">【{{ row.name }}】</div>
          </template>
        </el-table-column>
        <el-table-column property="applicant" label="申请人" min-width="120"> </el-table-column>
        <el-table-column property="create_time" label="申请日期" min-width="120">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link type="primary" @click="cancel(row)">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
      <KzPage v-model:page="current" v-model:size="size" :total="total" @change="getList()" />
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
import { ref } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { formatDate } from '@/utils/date'
import KzDialog from '@/components/KzDialog.vue'
import { signatureIn_api, signaturePage_api, signatureDel_api } from '@/api/product/sms/message'
import { ElMessageBox } from 'element-plus'
import KzPage from '@/components/KzPage.vue'

const tableData = ref()
const dialogShow = ref(false)
const formRef = ref()
const current = ref(1)
const size = ref(10)
const total = ref(0)
const formValue = ref({
  name: '',
})

const nameCheck = (rule: any, value: string, callback: any) => {
  console.log(value.length)
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

//获取签名列表
const getList = async () => {
  const data = {
    current: current.value,
    size: size.value,
  }
  const { status, body } = await signaturePage_api(data)
  status &&
    (() => {
      tableData.value = body.records
      total.value = body.total
    })()
}
getList()
const sureBtn = () => {
  formRef.value.validate(async (valid: boolean, invalidFields: any) => {
    console.log(valid, invalidFields)
    if (valid) {
      const { status } = await signatureIn_api(formValue.value)
      status &&
        (() => {
          dialogShow.value = false
          getList()
        })()
    }
  })
}

//删除签名
const cancel = (row: any) => {
  ElMessageBox.confirm('是否确认删除签名：' + row.name, '操作提示', {
    showCancelButton: true,
    cancelButtonText: '取消',
    confirmButtonText: '确认',
  })
    .then(async () => {
      const { status } = await signatureDel_api({ id: row.id })
      status && getList()
    })
    .catch(() => {})
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
  }
  .dmp_table {
    margin-top: 20px;
  }
}
</style>
