<template>
  <div class="kz_card dmp_page">
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

    <div class="dmp_table" style="height: calc(100% - 120px)">
      <el-table
        v-loading="loading"
        :data="tableList"
        style="width: 100%"
        height="100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" fixed="left" />
        <el-table-column property="num" label="序号" />
        <el-table-column property="name" label="企业名称" />
        <el-table-column property="contact" label="联系人" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="telephone" label="固定电话" />
        <el-table-column property="industry_id" label="行业分类" width="100">
          <template #default="scope">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px" class="fcc">
                  {{ getHashStr(scope.row.industry_id, typeHash) }}
                </div>
              </template>
              <div class="els2">{{ getHashStr(scope.row.industry_id, typeHash, 'last') }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="city" label="地区" width="120">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px">
                  {{
                    row.province > 0 &&
                    getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                  }}
                </div>
              </template>
              <div>
                {{
                  row.province > 0 &&
                  getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="address" label="详细地址" />
        <el-table-column property="company_type" label="企业类型" />
        <el-table-column property="code" label="统一社会信用代码" />
        <el-table-column property="url" label="企业官网" />
        <el-table-column property="business_scope" label="经营范围" />
        <el-table-column property="item_name" label="项目名称" />
        <el-table-column property="item_desc" label="项目介绍" />
        <el-table-column property="amount" label="招标金额（万元）" />
        <el-table-column property="left_time" label="截止日期" />
        <el-table-column property="attachment" label="项目附件" />
        <el-table-column property="create_time" label="更新日期">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
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
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'
import { channelDetailPage_api, setSync_api, getSyncInfo_api } from '@/api/product/dmp/seekPathPro'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'

const route = useRoute()
const store = mainStore()
const addressHash = ref(store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)
const tableList = ref([])
const total = ref(0)
const size = ref(50)
const page = ref(1)
const loading = ref(false)
const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    type: 2,
    size: size.value,
    id: route.query.id,
  }
  const { status, body } = await channelDetailPage_api(data)
  loading.value = false
  if (status) {
    total.value = body.total
    tableList.value = body.records
  }
}
getList()

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
    type: 1,
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
.dmp_page {
  height: 100%;
}
</style>
