<template>
  <div class="kz_card">
    <div class="detail_card">
      <div class="cms_table">
        <el-table
          v-loading="loading"
          :data="tableList"
          style="width: 100%"
          row-class-name="my-data-table-row"
        >
          <KzDataTable
            v-for="(item, index) in tableTitle"
            :key="index"
            :type="item.type"
            :width="item.width"
            :lable="item.lable"
            :prop="item.prop"
          />
          <el-table-column width="180" label="操作">
            <template #default="{ row }">
              <div><el-link type="primary" @click="del(row.id)">删除</el-link></div>
            </template>
          </el-table-column>
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
      <KzPage v-model:page="current" v-model:size="size" :total="total" />
      <KzDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="delImags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import KzDataTable from '@/components/cms/KzDataTable.vue'
import KzPage from '@/components/KzPage.vue'
import KzDialog from '@/components/Kzdialog.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { customDetails_api, customImgDel_api } from '@/api/product/cms/custom'
const loading = ref(false)
const tableList = ref([])
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
const delId = ref()
const route = useRoute()
const delShow = ref(false)
const id = route.query.id as string
const tableTitle = ref([
  { type: 'select', width: 80, prop: 'select' },
  { type: 'text', lable: 'ID', prop: 'id', width: 150 },
  { type: 'img', lable: '图片', prop: 'thumb_url', width: 150 },
  { type: 'text', lable: '名称', prop: 'name', width: 160 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 130 },
])
const getList = async () => {
  const { status, body } = await customDetails_api(
    {
      id,
    },
    2
  )
  console.log(body)

  status && ((tableList.value = body), (total.value = body.length))
}
getList()
const del = (id: string) => {
  delId.value = id
  delShow.value = true
}
const delImags = async () => {
  const { status } = await customImgDel_api({ id: delId.value })
  console.log(delId.value)

  if (status === 1) {
    getList()
    delShow.value = false
  }
}
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.detail_card {
  padding: 20px 24px;
}
</style>
