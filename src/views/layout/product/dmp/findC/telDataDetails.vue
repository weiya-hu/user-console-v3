<template>
  <div v-loading="loading" class="kz_card teldata_details_c dmp_page">
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

    <div class="dmp_table">
      <el-table
        ref="tableRef"
        :data="tableData"
        height="100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" fixed="left" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="address" label="归属地">
          <template #default="scope">
            <div>
              {{
                getHashStr(
                  strToArr(scope.row.province, scope.row.city, scope.row.district),
                  addressHash
                )
              }}
            </div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="发送时间">
          <template #default="scope">
            <div>{{ formatDate(new Date(scope.row.create_time), 'yyyy-MM-dd hh:mm:ss') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源">
          <template #default="scope">
            <div>{{ getSource(scope.row.source) }}</div>
          </template>
        </el-table-column>

        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import { getHashStr, strToArr, getSource } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { getInsetUserList_api, setSync_api, getSyncInfo_api } from '@/api/product/dmp/findC'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const total = ref(0)
const size = ref(50)

interface IData {
  city: number
  create_time: number
  district: number
  id: number
  mobiles: string
  province: number
  status: number
}
const tableData = ref<IData[]>([])

const route = useRoute()

const page = ref(1)
const loading = ref(false)
const getList = () => {
  loading.value = true
  getInsetUserList_api({
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

const multipleSelection = ref<(string | number)[]>([])
const handleSelectionChange = (val: IData[]) => {
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
.teldata_details_c {
  height: 100%;
  .dmp_table {
    height: calc(100% - 120px);
  }
}
</style>
