<template>
  <div class="kz_card my_up2b_page">
    <div class="fsc f1">
      <div class="tips">采购商详情</div>
      <div class="btns">
        <KzTopBtns
          ref="topBtnRef"
          type="sync"
          syncbtn
          :sync-api="getSyncInfo_api"
          :sync-disabled="syncDisabled"
          class="topbtns mr20"
          @sync="setSync"
        />
      </div>
    </div>

    <div class="mytable">
      <el-table
        v-loading="loading"
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
      >
        <el-table-column type="selection" width="50" />

        <el-table-column property="num" label="序号" />
        <el-table-column property="name" label="企业名称" />
        <el-table-column property="contact" label="联系人" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="email" label="邮箱" />
        <el-table-column property="country_id" label="地区" />
        <el-table-column property="address" label="公司地址" />
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
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getDetailList" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'

import { overseasDetailPage, setSync_api, getSyncInfo_api } from '@/api/product/dmp/seekAbroad'

const store = mainStore()
const addressHash = ref(store.state.addressHash)
const route = useRoute()
const id = route.query.id

const tableList = ref([])
const totle = ref(0)
const size = ref(10)
const page = ref(1)
const loading = ref(false)

const getDetailList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    size: 50,
    id: route.query.id,
  }
  const { status, body } = await overseasDetailPage(data)
  loading.value = false
  if (status) {
    totle.value = body.total
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
.my_up2b_page {
  .btns {
    margin-right: 24px;
  }
}
</style>
