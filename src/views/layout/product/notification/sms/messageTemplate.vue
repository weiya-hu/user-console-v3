<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>短信模板</div>
      <div class="flexr">
        <el-input
          v-model="searchModel"
          placeholder="请输入模板名称搜索"
          class="search_inpt"
          clearable
          @input="
            () => {
              !searchModel && getList()
            }
          "
          @keydown.enter="getList(searchModel)"
        />
        <el-button class="bdc_btn" @click="getList()">查询</el-button>
        <el-button type="primary" @click="$router.push('/product/notification/sms/addtemplate')"
          ><KzIcon
            href="#icon-tianjia"
            size="14px"
            color="white"
            class="add_need_icon"
          />&nbsp;新建&nbsp;&nbsp;</el-button
        >
      </div>
    </div>
    <div class="dmp_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column property="title" label="模板名称" min-width="120" />
        <!-- <el-table-column property="type" label="所属系统" min-width="100" /> -->
        <!-- <el-table-column property="message" label="业务方" min-width="130"> </el-table-column> -->
        <el-table-column property="type" label="短信类型" min-width="110">
          <template #default="{ row }">
            <div>{{ row.type === 1 ? '事务类' : row.type === 2 ? '通用/运营类' : '---' }}</div>
          </template>
        </el-table-column>
        <el-table-column
          property="content"
          label="模板内容"
          min-width="160"
          show-overflow-tooltip
        />
        <el-table-column property="status" label="状态" min-width="130">
          <template #default="{ row }">
            <div class="flexl">
              <el-switch
                v-model="row.status"
                :active-value="1"
                :inactive-value="0"
                :disabled="row.template_status === 1 || row.template_status === 4"
                @change="statusChange($event, row)"
              />
              <div class="template_status">{{ templateStatus[row.template_status] }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                type="primary"
                @click="$router.push('/product/notification/sms/addtemplate?id=' + row.id)"
                >编辑</el-link
              >
              <div class="line"></div>
              <el-link type="primary" @click="cancel(row)">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
      <KzPage
        v-model:page="current"
        v-model:size="size"
        :total="total"
        @change="getList(searchModel)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import {
  templateSearchPage_api,
  templateEnableDo_api,
  templatedisableDo_api,
  templateDel_api,
} from '@/api/product/sms/message'
import { ElMessageBox } from 'element-plus'
import KzPage from '@/components/KzPage.vue'

const current = ref(1)
const size = ref(10)
const total = ref(0)
const searchModel = ref()
const tableData = ref()
const templateStatus = ref<Record<number, string>>({
  1: '未提交审核',
  2: '审核中',
  3: '审核通过',
  4: '未通过审核',
})

const getList = async (keyword?: string) => {
  const data = {
    current: current.value,
    size: size.value,
    keyword,
  }
  const { status, body } = await templateSearchPage_api(data)
  status &&
    (() => {
      ;(tableData.value = body.records), (total.value = body.total)
    })()
}
getList()

const statusChange = async (val: any, row: any) => {
  val ? await templateEnableDo_api({ id: row.id }) : await templatedisableDo_api({ id: row.id })
  getList()
}

const cancel = (row: any) => {
  ElMessageBox.confirm('是否确认删除短信模板：' + row.title, '操作提示', {
    showCancelButton: true,
    cancelButtonText: '取消',
    confirmButtonText: '确认',
  })
    .then(async () => {
      const { status } = await templateDel_api({ id: row.id })
      status && getList()
    })
    .catch(() => {})
}
</script>

<style lang="scss" scoped>
.send_list {
  background: #ffffff;
  padding: 20px 24px;
  .send_list_top {
    & > div:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      line-height: 18px;
    }
    .search_inpt {
      width: 180px;
      margin-right: 12px;
    }
    .bdc_btn {
      width: 88px;
    }
  }
  .dmp_table {
    margin-top: 20px;
  }
  .template_status {
    font-size: 14px;
    color: #606266;
    line-height: 14px;
    margin-left: 12px;
  }
}
</style>
