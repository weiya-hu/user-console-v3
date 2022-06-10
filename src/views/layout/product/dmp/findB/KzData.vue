<template>
  <el-scrollbar v-loading="loading" height="100%" class="kzdata_page">
    <el-collapse-transition>
      <KzTopSearch v-show="topSearchShow" @search="heightSearch" @close="topSearchShow = false" />
    </el-collapse-transition>
    <div class="kz_card kzdata_page_content">
      <div class="fsc mb20">
        <KzDmpTitle :total="total" />
        <div class="fcs">
          <div class="fcs word_search">
            <el-input
              v-model.trim="word"
              placeholder="请输入企业名称、联系人、经营范围关键词"
              @keyup.enter="wordSearch"
            >
              <template #prefix>
                <el-icon class="searchicon"><Search /></el-icon>
              </template>
            </el-input>
            <el-button type="primary" class="ml16" @click="wordSearch">查询一下</el-button>
            <el-link class="heisearch ml16 fs0" type="primary" @click="topSearchShow = true"
              >高级查询</el-link
            >
          </div>
          <KzTopBtns
            ref="topBtnRef"
            type="sync"
            syncbtn
            :sync-api="getSyncInfo_api"
            :sync-disabled="syncDisabled"
            class="topbtns"
            @sync="setSync"
          />
        </div>
      </div>

      <KzCompanyTable ref="tableRef" :data="tableData" />

      <KzPage
        v-model:page="searchParams.current"
        v-model:size="searchParams.size"
        :total="total"
        @change="changePage"
      />
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import KzTopSearch from '@/components/dmp/KzTopSearch.vue'
import KzPage from '@/components/KzPage.vue'
import KzTopBtns from '@/components/dmp/KzTopBtns.vue'
import KzCompanyTable from '@/components/dmp/KzCompanyTable.vue'
import KzDmpTitle from '@/components/dmp/KzDmpTitle.vue'
import {
  searchByConditions_api,
  wordSearchList_api,
  getSearchWord_api,
  setSync_api,
  getSyncInfo_api,
} from '@/api/product/dmp/findB'
import { errMsg } from '@/utils/index'
import { Search } from '@element-plus/icons-vue'

const topSearchShow = ref(false)

const words = ref([])
const getWord = () => {
  getSearchWord_api().then((res) => {
    words.value = res.body
  })
}
getWord()

interface Params {
  size: number
  current: number
  source: number
}
const searchParams = ref<Params>({
  size: 50,
  current: 1,
  source: 1,
})
const total = ref(0)
const tableData = ref([])
const loading = ref(false)
const searchType = ref(1) //1 关键词，2 条件组
const word = ref('')
const wordSearch = async () => {
  if (word.value.trim().length < 1 || word.value.trim().length > 36) {
    errMsg('输入长度须在 1 ~ 36 之间')
    return
  }
  //关键词搜索
  searchType.value = 1
  loading.value = true
  searchParams.value.current = 1
  await goSearch()
  // okMsg('查询成功')
  getWord()
}
const goSearch = async () => {
  loading.value = true
  await wordSearchList_api({
    ...searchParams.value,
    keywords: word.value,
  })
    .then((res) => {
      if (res.status === 1) {
        total.value = res.body.total
        tableData.value = res.body.records
      }
      loading.value = false
    })
    .catch(() => {
      errMsg('查询失败')
      loading.value = false
    })
}
const heightParams = ref({})
const heightSearch = async (params: any) => {
  //高级搜索
  loading.value = true
  searchType.value = 2
  searchParams.value.current = 1
  heightParams.value = params
  await goHSearch()
  // okMsg('查询成功')
}

const goHSearch = async () => {
  loading.value = true
  await searchByConditions_api({
    ...searchParams.value,
    ...heightParams.value,
  })
    .then((res) => {
      if (res.status === 1) {
        total.value = res.body.total
        tableData.value = res.body.records
      }
      loading.value = false
    })
    .catch(() => {
      errMsg('查询失败')
      loading.value = false
    })
}
const changePage = () => {
  searchType.value == 1 ? goSearch() : goHSearch()
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
.kzdata_page {
  height: 100%;
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
  .kzdata_page_content {
    height: 100%;
    padding: 20px 24px;
  }
  .word_search {
    .el-input {
      width: 320px;
    }
  }
}
</style>
