<template>
  <div>
    <div class="auth kz_card">
      <div class="title_box fsc f1">
        <div class="card_title">加入申请</div>
        <div class="btns_box">
          <el-button type="primary" class="bdc_btn" plain @click="alldo(0)">批量拒绝</el-button>
          <el-button type="primary" @click="alldo(1)">批量同意</el-button>
        </div>
      </div>
      <div class="mytable" v-loading="loading">
        <el-table :data="inviteData" ref="tableRef">
          <el-table-column type="selection" width="50" />
          <el-table-column property="name" label="申请人姓名" />
          <el-table-column property="mobile" label="联系电话" />
          <el-table-column property="create_time" label="申请时间">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="200">
            <template #default="{ row }">
              <div class="fcs">
                <el-link type="primary" @click="reject(row.id)">拒绝</el-link>
                <el-link type="primary" class="ml20" @click="agree(row.id)">同意</el-link>
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="inviteList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { inviteCompany_api, invitePass_api } from '@/api/manage/company/application'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { log } from 'console'
const totle = ref(10)
const size = ref(10)
const page = ref(1)
const loading = ref(false)
const inviteData = ref([])
const inviteList = async () => {
  loading.value = true
  const res = await inviteCompany_api({ current: page.value, size: 10 })
  inviteData.value = res.body.records
  loading.value = false
}
inviteList()
const examArr = ref<number[]>([])

const reject =(id:number)=>{
  examArr.value.push(id)
   examArr.value.length && Passlist(0)
  
}
const agree=(id:number)=>{
   examArr.value.push(id)
   examArr.value.length && Passlist(1)
}

const tableRef = ref()
const alldo = (isAgree: 0 | 1) => {
  const nowAgree = tableRef.value.getSelectionRows()
  examArr.value = nowAgree.map((v:any) => v.id)
  examArr.value.length && Passlist(isAgree)
}

const Passlist = async (isAgree: 0 | 1) => {
  const data = {
    invite_ids: examArr.value,
    status:isAgree
  }
  const res = await invitePass_api(data)
  inviteList()
}
</script>

<style lang="scss" scoped>
.btns_box {
  margin-right: 100px;
}
</style>
