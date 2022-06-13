<template>
  <div v-loading="loading" class="dmp_page kz_card">
    <div class="fsc mb20">
      <KzDmpTitle :total="total" />
      <KzTopBtns
        ref="topBtnRef"
        type="sync"
        syncbtn
        :sync-api="getSyncInfo_api"
        :sync-disabled="syncDisabled"
        @sync="setSync"
      />
    </div>

    <KzCompanyTable ref="tableRef" :data="tableData" />

    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="changePage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzPage from '@/components/KzPage.vue'
import KzCompanyTable from '@/components/dmp/KzCompanyTable.vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import { useRoute } from 'vue-router'
import { demandDetail_api, setSync_api, getSyncInfo_api } from '@/api/product/dmp/findB'

const route = useRoute()
const cid = route.query.id

const tableData = ref([])
const page = ref(1)
const size = ref(50)
const total = ref(0)
const loading = ref(false)
const changePage = () => {
  getList()
}

const getList = () => {
  loading.value = true
  demandDetail_api({
    current: page.value,
    size: size.value,
    id: cid,
  })
    .then((res) => {
      if (res.status == 1) {
        total.value = res.body.total
        tableData.value = res.body.records
      }
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}
getList()

const topBtnRef = ref()
const tableRef = ref()
const syncDisabled = computed(() => tableRef.value && !tableRef.value.selIdList.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await setSync_api({
    list: tableRef.value.selIdList,
  })
  topBtnRef.value.close(res.message)
  tableRef.value.clear()
}
</script>

<style scoped lang="scss">
.dmp_page {
  height: 100%;
}
</style>
