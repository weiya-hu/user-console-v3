<template>
  <div class="kz_card my_up2c_page dmp_page">
    <div class="fsc f1">
      <div class="card_title">上传2C数据</div>
      <div class="btns fsc">
        <KzTopBtns
          ref="topBtnRef"
          type="sync"
          syncbtn
          :sync-api="getSyncInfo_api"
          :sync-disabled="syncDisabled"
          class="topbtns mr20"
          @sync="setSync"
        />
        <el-button type="primary" @click="dialogVisible = true"
          ><el-icon size="14px" style="margin-right: 4px"><Plus /></el-icon>上传数据</el-button
        >
      </div>
    </div>

    <div class="dmp_table">
      <el-table
        v-loading="loading"
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
      >
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
        <el-table-column property="count" label="种子用户数" />
        <el-table-column property="create_time" label="创建时间">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="user_name" label="创建人" />
        <el-table-column label="操作" width="300">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                type="primary"
                @click="$router.push('/product/dmp/myData/up2cdetails?id=' + row.id)"
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
import { ref,computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzDataUpUser from '@/components/dmp/KzDataUpUser.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getKzStatus, getSource } from '@/utils/index'
import { upRecordList,setSync_api, getSyncInfo_api  } from '@/api/product/dmp/myData'

const tableList = ref([])
const totle = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)

const dialogVisible = ref(false)
const topBtnRef = ref()
const tableRef = ref()
const syncDisabled = computed(() => tableRef.value && !tableRef.value.selIdList.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await setSync_api({
    list: tableRef.value.selIdList,
    type: 2,
  })
  topBtnRef.value.close(res.message)
  tableRef.value.clear()
}
const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 2,
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
.my_up2c_page {
  .btns {
    margin-right: 24px;
  }
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
}
</style>
