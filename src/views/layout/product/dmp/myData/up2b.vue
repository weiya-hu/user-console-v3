<template>
  <div class="kz_card dmp_page"  v-loading="loading">
    <div class="fsc mb20">
      <KzDmpTitle />
      <el-button type="primary" :icon="Plus" @click="dialogVisible = true">新增需求</el-button>
    </div>

    <div class="dmp_table">
      <el-table :data="tableList">
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="group_name" label="人群名称" />
        <el-table-column property="group_desc" label="人群描述" />
        <el-table-column property="status" label="状态">
          <template #default="{ row }">
            <div class="ss">
              <div
                class="point"
                :style="row.state == 1 ? 'background:#67C23A' : 'background:#2150ec'"
              ></div>
              <span>{{ row.state == 1 ? '已受理' : '已完结' }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="count" label="用户数" />
        <el-table-column property="create_time" label="创建时间">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                type="primary"
                @click="$router.push('/product/dmp/mydata/up2bdetails?id=' + row.id)"
                >详情</el-link
              >
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
    <KzDataUpUser v-model="dialogVisible" @submitSuccess="submitsuccess" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzDataUpUser from '@/components/dmp/KzDataUpUser.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { upRecordList } from '@/api/product/dmp/myData'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'

const tableList = ref([])
const totle = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)

const dialogVisible = ref(false)

const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 1,
    size: size.value,
  }
  const { status, body } = await upRecordList(data)
  loading.value = false
  if (status) {
    totle.value = body.total
    tableList.value = body.records
  }
}
getList()

const submitsuccess = () => {
  page.value = 1
  getList()
}
</script>

<style scoped lang="scss">
.ss {
  margin: 20px 0;
  font-size: 14px;
  .point {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #24bd13;
    border-radius: 50%;
    margin: 7px 15px 3px 0;
  }
}
</style>
