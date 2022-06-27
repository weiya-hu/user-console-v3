<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>发送列表</div>
      <div class="flexr">
        <el-input v-model="searchModel" placeholder="请输入模板名称搜索" class="search_inpt" />
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
        <el-table-column property="code" label="发送编码" min-width="130" />
        <el-table-column property="type" label="短信类型" min-width="100" />
        <el-table-column property="message" label="模板名称" min-width="160">
          <template #default="{ row }">
            <div
              class="els2"
              @mouseenter="onShowToolTip($event, row.message)"
              @mouseleave="tooltipShow = false"
            >
              {{ row.message }}
            </div>
          </template>
        </el-table-column>
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
        <el-table-column property="user_name" label="创作人" min-width="120">
          <template #default="{ row }">
            <div class="els">{{ row.user_name }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                v-if="row.status == 1"
                type="primary"
                @click="$router.push('/product/cms/mywork/articleadd?id=' + row.id)"
                >编辑</el-link
              >
              <div class="line"></div>
              <el-link
                v-if="row.status == 2 || row.status == 3"
                type="primary"
                @click="$router.push('/product/cms/mywork/articledetails?id=' + row.id)"
                >详情</el-link
              >
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <el-tooltip
      v-model:visible="tooltipShow"
      :virtual-ref="msgRef"
      virtual-triggering
      trigger="hover"
      :placement="tooltipMsg.length > 300 ? 'left' : 'top'"
    >
      <template #content>
        <div
          style="max-width: 300px"
          @mouseenter="tooltipShow = true"
          @mouseleave="tooltipShow = false"
        >
          {{ tooltipMsg }}
        </div>
      </template>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { formatDate } from '@/utils/date'
import { getKzMessageStatus } from '@/utils/index'
const searchModel = ref()
const tableData = ref()

const msgRef = ref()
const tooltipShow = ref(false)
const tooltipMsg = ref('')
const onShowToolTip = (e: MouseEvent, msg: string) => {
  msgRef.value = e.currentTarget
  tooltipMsg.value = msg
  tooltipShow.value = true
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
  }
  .dmp_table {
    margin-top: 20px;
  }
}
</style>
