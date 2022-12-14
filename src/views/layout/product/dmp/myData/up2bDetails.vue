<template>
  <div v-loading="loading" class="kz_card my_up2b_page dmp_page">
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
        :data="tableList"
        height="100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="序号" />
        <el-table-column property="name" label="企业名称" />
        <el-table-column property="contact" label="联系人" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="telephone" label="固定电话" />
        <el-table-column property="industry_id" label="行业">
          <template #default="scope">
            <div>{{ getHashStr(scope.row.industry_id.split(','), typeHash, 'last') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="city" label="地区">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px">
                  {{ getHashStr(strToArr(row.province, row.city, row.district), addressHash) }}
                </div>
              </template>
              <div>
                {{ getHashStr(strToArr(row.province, row.city, row.district), addressHash) }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="address" label="详细地址">
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
        <el-table-column property="company_type" label="企业类型">
          <template #default="scope">
            <div>{{ ctypeArr.find((v) => v.id === scope.row.company_type)?.name }}</div>
          </template>
        </el-table-column>
        <el-table-column property="code" label="统一社会信用代码" />
        <el-table-column property="url" label="企业官网" />
        <el-table-column property="business_scope" label="经营范围">
          <template #default="{ row }">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width: 100px">
                  {{ row.business_scope }}
                </div>
              </template>
              <div class="els">
                {{ row.business_scope }}
              </div>
            </el-tooltip>
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
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { upRecordDetail, setSync_api, getSyncInfo_api } from '@/api/product/dmp/myData'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)
const ctypeArr = computed(() => store.state.companyType)

const route = useRoute()
const id = route.query.id
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
  const { status, body } = await upRecordDetail(data)
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
    type: 1,
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
.my_up2b_page {
  height: 100%;
  .dmp_table {
    height: calc(100% - 120px);
  }
}
</style>
