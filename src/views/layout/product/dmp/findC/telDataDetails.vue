<template>
  <div v-loading="loading" class="kz_card teldata_details_c">
    <div class="fsc f1">
      <div class="tips">
        为您找到<span>0</span> 家符合条件的客户（*根据政策与监管法规要求，联系人手机号脱敏展示）
      </div>
      <div class="btns">
        <el-button type="primary" plain>同步数据</el-button>
      </div>
    </div>

    <div class="mytable">
      <el-table
        v-loading="loading"
        :data="tableData"
        size="large"
        row-class-name="my-data-table-row"
      >
        <el-table-column type="selection" width="50" />

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
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHashStr, strToArr, getSource } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'

import { getInsetUserList_api, setSync_api } from '@/api/product/dmp/findC'

const store = mainStore()
const addressHash = ref(store.state.addressHash)
const totle = ref(0)
const size = ref(10)

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
        totle.value = res.body.total
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
  .tips {
    margin: 0px 0 24px 24px;
    font-size: 14px;
    color: #363636;
    display: inline-block;
    span {
      color: #e40000;
    }
  }
  .btns {
    margin-right: 24px;
  }
  .mytable {
    height: calc(100% - 126px);
  }
}
</style>
