<template>
  <div>
    <div class="kz_card">
      <div class="rce">
        <div class="top_first">
          <div class="pop_title">资源内容库</div>
          <div>
            <span class="fl">行业分类</span>
            <el-select v-model="value" class="m-2" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.industry_name"
                :value="item.id"
              />
            </el-select>

            <el-button class="bdc_btn" @click="getList">&emsp;查询&emsp;</el-button>
          </div>
        </div>
        <el-table v-loading="loading" :data="resourceList" style="width: 100%">
          <el-table-column type="selection" width="104" align="center" />
          <el-table-column label="ID">
            <template #default="{ row }">{{ row.id }}</template>
          </el-table-column>
          <el-table-column label="封面图片" width="200">
            <template #default="{ row }"
              ><img :src="row.thumb_url" alt="" @click="lookImage([row.thumb_url], 0)"
            /></template>
          </el-table-column>
          <el-table-column label="标题" :show-overflow-tooltip="true" width="250">
            <template #default="{ row }">{{ row.title }}</template>
          </el-table-column>
          <el-table-column label="来源" width="250"> 药智咨询 </el-table-column>
          <el-table-column label="时间">
            <template #default="{ row }">{{
              formatDate(new Date(row.create_time), 'yyyy-MM-dd')
            }}</template>
          </el-table-column>
          <el-table-column label="操作" min-width="120" align="center">
            <template #default="{ row }">
              <div class="fleximg">
                <el-button class="resource_btns" type="text"
                  ><KzShare :share-id="row.id"> 分享 </KzShare></el-button
                >
                <el-button type="text" class="resource_btns" @click="getDown(row.id)"
                  >下载</el-button
                >
                <el-button type="text" @click="$router.push(`resourcedetail?id=${row.id}`)"
                  >查看</el-button
                >
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
        <KzPage v-model:page="current" v-model:size="size" :total="total" @change="getList" />
      </div>
    </div>
    <KzDown ref="myDownRef" v-model="kfShow" type="down" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzPage from '@/components/KzPage.vue'
import { formatDate } from '@/utils/date'
import KzShare from '@/components/cms/KzShare.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import KzDown from '@/components//cms/KzDown.vue'
import { lookImage } from '@/utils/index'
import { geIndustry_api, getUserCompanyList_api } from '@/api/product/cms/resource'
const current = ref(1) //人员当前页数
const size = ref(10) //人员列表每页条数
const total = ref(0) //人员列表总条数
const value = ref('')
const kfShow = ref(false)
const myDownRef = ref()
const loading = ref(false)
const resourceList = ref()
const options = ref<any>({})
const getIndustry = async () => {
  const { status, body } = await geIndustry_api()
  status && (options.value = body)
}
getIndustry()
const getList = async () => {
  loading.value = true
  const { status, body } = await getUserCompanyList_api({
    size: size.value,
    industryId: value.value,
    current: current.value,
  })
  loading.value = false
  if (status === 1) {
    total.value = body.total
    resourceList.value = body.records
  }
}

getList()
const getDown = (id: string) => {
  kfShow.value = true
  myDownRef.value.getData(id)
}
</script>

<style lang="scss" scoped>
.rce {
  padding: 20px 18px 36px 24px;

  .top_first {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .pop_title {
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      font-weight: bold;
      color: $color333;
    }
    .fl {
      margin-right: 12px;
    }
    :deep(.el-input) {
      width: 180px;
      margin-right: 12px;
    }
    :deep(.el-button) {
      margin-bottom: 3px;
    }
  }
  :deep(.el-table) {
    thead > tr > th {
      background: #f2f2f3;
      height: 40px;
      .cell {
        font-size: 14px;
        color: #333333;
        line-height: 14px;
        font-weight: 600;
      }
    }
    td.el-table__cell div {
      color: #666666;
    }
    .person_table_operate {
      margin-right: 12px;
    }
    img {
      width: 75px;
      height: 42px;
    }
    .resource_btns {
      margin-right: 12px;
    }
  }
}
</style>
