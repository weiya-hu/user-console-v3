<template>
  <div class="kz_card my_buyer_page dmp_page" v-loading="loading">
   <div class="fsc mb20">
      <KzDmpTitle :total="total"/>
      <KzTopBtns
        ref="topBtnRef"
        type="sync"
        syncbtn
        :sync-api="getSyncInfo_api"
        :sync-disabled="syncDisabled"
        @sync="setSync"
      />
    </div>

    <div class="dmp_table">
      <el-table
        ref="tableRef"
        :data="tableList"
        height="100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="序号" />
        <el-table-column property="name" label="企业名称" />
        <el-table-column property="contact" label="联系人" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="email" label="邮箱" />
        <el-table-column property="country_id" label="地区" />
        <el-table-column property="address" label="公司地址" >
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px">
                  {{ row.address }}
                </div>
              </template>
              <div class="els">
                {{ row.address }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="url" label="企业官网" />
        <el-table-column property="code" label="HS编码" />
        <el-table-column property="product_number" label="数量" />
        <el-table-column property="product_weight" label="重量（kg）" />
        <el-table-column property="shipment_port" label="出货港口" />
        <el-table-column property="unload_port" label="卸货港口" />
        <el-table-column property="industry_id" label="更新日期">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="getDetailList" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'
import { overseasDetailPage, setSync_api, getSyncInfo_api } from '@/api/product/dmp/seekAbroad'


const route = useRoute()
const tableList = ref([])
const total = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)

const getDetailList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    size: size.value,
    id: route.query.id,
  }
  const { status, body } = await overseasDetailPage(data)
  loading.value = false
  if (status) {
    total.value = body.total
    tableList.value = body.records
  }
}
getDetailList()

const multipleSelection = ref<(string | number)[]>([])
const handleSelectionChange = (val: any[]) => {
  multipleSelection.value = val.map((v) => v.id)
}

const tableRef = ref()
const clear = () => {
  multipleSelection.value = []
  tableRef.value.clearSelection()
}

const topBtnRef = ref()
const syncDisabled = computed(() => !multipleSelection.value.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await setSync_api({
    list: multipleSelection.value,
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
.my_buyer_page {
   height: 100%;
  .dmp_table {
    height: calc(100% - 120px);
  }
}
</style>
