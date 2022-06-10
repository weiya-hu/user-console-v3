<template>
  <div class="kz_card">
    <div class="arl_card">
      <div class="arl_top">
        <div class="arl_title">软文库</div>
        <div>
          <el-button class="bdc_btn">同步数据</el-button>
          <el-button type="primary"><img :src="icon_add" alt="" />&nbsp;新建&nbsp;&nbsp;</el-button>
        </div>
      </div>
      <div>
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
            <el-table-column width="150" label="操作">
              <!-- <template #default="{ row }">
              <div class="fcs">
              <el-link type="primary" @click="goDel(row.id)" v-if="row.status != 2">删除</el-link>
              <div class="line" v-if="row.status != 1 && row.status != 2"></div>
              <el-link
                type="primary"
                @click="
                  errorMsg = row.fail_reason
                  errorShow = true
                "
                v-if="row.status == 3"
                >驳回原因</el-link
              >
              <el-link
                type="primary"
                v-if="row.status == 4"
                @click="$router.push('/custom/articleDetails?id=' + row.id)"
                >查看</el-link
              >
              <div v-if="row.status == 2">---</div>
            </div>
            </template> -->
            </el-table-column>
            <template #empty>
              <KzEmpty />
            </template>
          </el-table>
        </div>
        <KzPage v-model:page="current" v-model:size="size" :total="total" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icon_add from '@/assets/images/artile_add.png'
import KzDataTable from '@/components/KzDataTable.vue'
import KzPage from '@/components/KzPage.vue'
import KzEmpty from '@/components/KzEmpty.vue'
const tableList = ref([])
const tableTitle = ref([
  { type: 'select', width: 100, prop: 'select' },
  { type: 'text', lable: '需求ID', prop: 'id', width: 150 },
  { type: 'text', lable: '标题', prop: 'title', width: 200 },
  { type: 'text-tooltip', lable: '描述', prop: 'detail', width: 220 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 100 },
  { type: 'status_do', lable: '状态', prop: 'status', width: 100 },
  { type: 'text', lable: '创建人', prop: 'title', width: 200 },
])
const loading = ref(false)
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.arl_card {
  padding: 20px 24px;
  .arl_top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .arl_title {
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      font-weight: bold;
      color: $color333;
    }
  }
}
</style>
