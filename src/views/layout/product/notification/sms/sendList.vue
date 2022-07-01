<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>发送列表</div>
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
          @keydown="getList(searchModel)"
        />
        <el-button class="bdc_btn">查询一下</el-button>
        <el-button class="bdc_btn" @click="$router.push('/product/notification/sms/signature')"
          >签名管理</el-button
        >
        <el-button type="primary" @click="$router.push('/product/notification/sms/addsend')"
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
        <el-table-column property="id" label="发送编码" min-width="120" />
        <el-table-column property="type" label="短信类型" min-width="130">
          <template #default="{ row }">
            <div>{{ row.type === 1 ? '事务类' : row.type === 2 ? '通用/运营类' : '---' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="template_name" label="模板名称" min-width="140" />
        <el-table-column property="send_type" label="发送方式" min-width="100">
          <template #default="{ row }">
            <div>{{ row.send_type ? '定时发送' : '即时发送' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" min-width="120">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="send_count" label="发送数量" min-width="100" />
        <el-table-column property="success_count" label="成功数量" min-width="100" />
        <el-table-column property="status" label="状态" min-width="100">
          <template #default="{ row }">
            <div class="fcs">
              <div class="status_dot" :class="getKzMessageStatus(row.status).className"></div>
              <div>{{ getKzMessageStatus(row.status).text }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                v-if="row.status === 1"
                type="primary"
                @click="$router.push('/product/notification/sms/addsend?id=' + +row.id)"
                >编辑</el-link
              >
              <div class="line"></div>
              <el-link type="primary">详情</el-link>
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
import { formatDate } from '@/utils/date'
import { getKzMessageStatus } from '@/utils/index'
import { sendPage_api } from '@/api/product/sms/message'
import KzPage from '@/components/KzPage.vue'

const current = ref(1)
const size = ref(10)
const total = ref(0)
const searchModel = ref()
const tableData = ref()

const getList = async (name?: string) => {
  const data = {
    current: current.value,
    size: size.value,
    name,
  }
  const { status, body } = await sendPage_api(data)
  status &&
    (() => {
      ;(tableData.value = body.records), (total.value = body.total)
    })()
}
getList()
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
  }
  .dmp_table {
    margin-top: 20px;
  }
}
</style>
