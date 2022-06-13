<template>
  <div class="kz_card">
    <div class="arl_card">
      <div class="arl_top">
        <div class="arl_title">图片库</div>
        <div>
          <el-button class="bdc_btn">同步数据</el-button>
          <el-button type="primary" @click="dialogVisible = true"
            ><img :src="icon_add" alt="" />&nbsp;新建&nbsp;&nbsp;</el-button
          >
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
            <el-table-column width="180" label="操作">
              <template #default="{ row }">
                <div class="link_bts">
                  <el-link
                    v-if="row.status == 4"
                    type="primary"
                    @click="$router.push('/product/cms/custom/imagesdetail?id=' + row.id)"
                    >详情</el-link
                  >
                  <el-link
                    v-if="row.status == 3"
                    type="primary"
                    @click=";(errorMsg = row.fail_reason), (errorShow = true)"
                    >驳回原因</el-link
                  >
                  <el-link v-if="row.status != 2" type="primary" @click="goDel(row.id)"
                    >删除</el-link
                  >
                  <div v-if="row.status != 1 && row.status != 2" class="line"></div>

                  <el-link v-if="row.status == 2" type="primary" class="t_btns">- - -</el-link>
                </div>
              </template>
            </el-table-column>
            <template #empty>
              <KzEmpty />
            </template>
          </el-table>
        </div>
        <KzPage v-model:page="current" v-model:size="size" :total="total" @change="getList" />
      </div>
    </div>
    <KzUpUser v-model="dialogVisible" :type="2" @submitSuccess="submitsuccess" />
    <KzDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel" />
    <KzDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icon_add from '@/assets/images/artile_add.png'
import KzDataTable from '@/components/KzDataTable.vue'
import KzPage from '@/components/KzPage.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzUpUser from '@/components/KzUpUser.vue'
import KzDialog from '@/components/KzDialog.vue'
import { customList_api, customDel_api } from '@/api/product/cms/custom'
const tableList = ref([])
const tableTitle = ref([
  { type: 'select', width: 80, prop: 'select' },
  { type: 'text', lable: '需求ID', prop: 'id', width: 150 },
  { type: 'text', lable: '标题', prop: 'title', width: 140 },
  { type: 'text-tooltip', lable: '描述', prop: 'detail', width: 230 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 130 },
  { type: 'status_do', lable: '状态', prop: 'status', width: 100 },
  { type: 'text', lable: '创建人', prop: 'user_name', width: 130 },
])
const loading = ref(false)
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
const dialogVisible = ref(false)
const delShow = ref(false)
const delId = ref('')
const errorShow = ref(false)
const errorMsg = ref('')
const getList = async () => {
  loading.value = true
  const res = await customList_api(
    {
      size: size.value,
      current: current.value,
    },
    2
  )
  loading.value = false
  console.log(res)

  if (res.status === 1) {
    total.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()
const goDel = (id: string) => {
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = () => {
  //确认删除
  customDel_api({ id: delId.value }, 2).then((res) => {
    if (res.status === 1) {
      getList()
      delShow.value = false
    }
  })
}
const submitsuccess = () => {
  dialogVisible.value = false
  getList()
}
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
  .link_bts {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    :deep(.el-link) {
      margin-right: 24px;
    }
  }
  .link_bts > :deep(.el-link):last-child {
    margin-right: 0;
  }
  .t_btns {
    margin-right: 62px;
  }
}
</style>
