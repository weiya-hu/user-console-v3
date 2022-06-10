<template>
  <div v-loading="loading" class="kz_card my_up2b_page">
    <div class="fsc f1">
      <div class="tips">
        为您找到 0 家符合条件的客户（*根据政策与监管法规要求，联系人手机号脱敏展示）
      </div>
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
        <el-table-column property="telephone" label="固定电话" />
        <el-table-column property="industry_id" label="行业" />
        <el-table-column property="city" label="地区">
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
        <el-table-column property="address" label="地址" />
        <el-table-column property="company_type" label="企业类型" />
        <el-table-column property="code" label="统一社会信用代码" />
        <el-table-column property="url" label="企业官网" />
        <el-table-column property="business_scope" label="经营范围" />

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
import { Plus } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { useRoute } from 'vue-router'
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
