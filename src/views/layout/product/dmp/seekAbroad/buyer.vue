<template>
  <div class="kz_card my_up2c_page">
    <div class="fsc f1">
      <div class="card_title">采购商</div>
      <el-button type="primary" class="btns"
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
        <el-table-column property="product_name" label="供应商品" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHash, getHashStr, strToArr, getKzStatus } from '@/utils/index'
import { mainStore } from '@/store/index'
import { upRecordList } from '@/api/product/dmp/myData'

const store = mainStore()
const addressHash = ref(store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)
const tableList = ref([])
const totle = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)
const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 1,
    size: 10,
  }
  const { status, body } = await upRecordList(data)
  loading.value = false
  if (status) {
    totle.value = body.total
    tableList.value = body.records
  }
}
getList()
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
