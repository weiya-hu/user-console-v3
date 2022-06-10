<template>
  <div class="kz_card my_up2b_page">
    <div class="fsc f1">
      <div class="tips">采购商详情</div>
      <div class="btns">
        <el-button type="primary" plain>同步数据</el-button>
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
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'

import { upRecordList } from '@/api/product/dmp/myData'

const store = mainStore()
const addressHash = ref(store.state.addressHash)
const route = useRoute()
const id = route.query.id

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
.my_up2b_page {
  .btns {
    margin-right: 24px;
  }
}
</style>
