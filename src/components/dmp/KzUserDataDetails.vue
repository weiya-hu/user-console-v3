<template>
  <div v-loading="loading" class="user_data_details kz_card dmp_page">
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

    <KzUserTable ref="tableRef" :data="tableData" />
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
  </div>
</template>

<script setup lang="ts">
/**
 * 人群数据详情组件
 * @author chn
 */
import { ref, computed } from 'vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import KzPage from '@/components/KzPage.vue'
import KzUserTable from '@/components/dmp/KzUserTable.vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import { setSync_api, getSyncInfo_api } from '@/api/product/dmp/findC'
import { useRoute } from 'vue-router'

const props = withDefaults(
  defineProps<{
    getListApi: Function // 获取表格数据的api
  }>(),
  {}
)

interface IData {
  id: number
  name: string //姓名
  sex: number //性别
  tel: string //联系方式
  email: string //邮箱
  type: string //从事行业
  address: string //地区
  source: number //来源
  update_time: number //更新时间
}
const tableData = ref<IData[]>([])
const total = ref(0)
const page = ref(1)
const size = ref(50)
const loading = ref(false)
const route = useRoute()
const getList = () => {
  loading.value = true
  props
    .getListApi({
      size: size.value,
      current: page.value,
      did: route.query.id,
    })
    .then((res: any) => {
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
const changePage = () => {
  getList()
}

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
.user_data_details {
  height: 100%;
}
</style>
