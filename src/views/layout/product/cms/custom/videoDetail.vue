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
            <template #default>
              <div><el-link>删除</el-link></div>
            </template>
          </el-table-column>
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
      <KzPage v-model:page="current" v-model:size="size" :total="total" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzDataTable from '@/components/KzDataTable.vue'
import KzPage from '@/components/KzPage.vue'
import KzEmpty from '@/components/KzEmpty.vue'
const loading = ref(false)
const tableList = ref([])
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
const tableTitle = ref([
  { type: 'select', width: 80, prop: 'select' },
  { type: 'text', lable: 'ID', prop: 'id', width: 150 },
  { type: 'img', lable: '图片', prop: 'id', width: 150 },
  { type: 'text', lable: '名称', prop: 'title', width: 140 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 130 },
  { type: 'status_do', lable: '状态', prop: 'status', width: 100 },
])
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.detail_card {
  padding: 20px 24px;
}
</style>
