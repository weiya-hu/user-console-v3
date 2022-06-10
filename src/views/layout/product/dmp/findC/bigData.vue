<template>
  <div class="kz_card baidudata_page_c">
    <div class="fsc f1">
      <div class="card_title">大数据获客</div>
      <div class="btns">
        <el-button type="primary" plain>同步数据</el-button>
        <el-button type="primary" @click="addShow = true"
          ><el-icon size="14px" margin-right="4px"><Plus /></el-icon>新增数据</el-button
        >
      </div>
    </div>
    <KzPeopleTable
      :data="tableData"
      details="/product/dmp/findc/bigDataDetails"
      @select="selectTable"
      @del="sureDel"
    />

    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
    <KzAddPeople ref="addref" v-model="addShow" @success="submitAddForm" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import KzPage from '@/components/KzPage.vue'
import KzPeopleTable from '@/components/dmp/KzPeopleTable.vue'
import KzAddPeople from '@/components/dmp/KzAddPeople.vue'
import { addBig_api, getBigList_api, delBig_api } from '@/api/product/dmp/findC'

const page = ref(1)
const size = ref(10)
const totle = ref(0)

const getList = () => {
  getBigList_api({
    size: size.value,
    current: page.value,
  }).then((res: any) => {
    if (res.status == 1) {
      totle.value = res.body.total
      tableData.value = res.body.records
    }
  })
}
getList()

interface IData {
  id: number
  group_name: string //人群名称
  group_desc: string //人群描述
  status: number //状态
  address: string //地区
  count: number //覆盖用户人数
  money: number //消耗金额 (元)
  create_time: number //创建日期
  source: number //来源
  error?: string //拒绝原因
  plan_url?: string //附件地址
}

const tableData = ref<IData[]>([])

const multipleSelection = ref<IData[]>([])
const selectTable = (data: IData[]) => {
  multipleSelection.value = data
  console.log(multipleSelection.value)
}
const sureDel = (id: string) => {
  delBig_api({ id }).then((res: any) => {
    res.status == 1 && getList()
  })
}

const addShow = ref(false)
const addref = ref()
const submitAddForm = (val: any) => {
  console.log('add submit', val)
  addBig_api({
    attachment: val.path,
    city: val.addr[1] || 0,
    district: val.addr[2] || 0,
    group_desc: val.desc,
    group_name: val.people,
    province: val.addr[0] || 0,
  }).then((res: any) => {
    if (res.status == 1) {
      addShow.value = false
      getList()
    } else {
      addref.value.addError()
    }
  })
}
</script>

<style scoped lang="scss">
:deep(.el-dialog) {
  padding: 20px;
}
</style>
