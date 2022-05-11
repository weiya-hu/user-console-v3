<template>
  <div class="manager_tab">
    <div class="mid">
      <div class="fsc f1">
        <span class="mid_title">管理员列表</span>
        <div>
          <el-button type="info" plain>删除分组</el-button>
          <el-button type="primary">添加人员</el-button>
        </div>
      </div>
      <div>
        <div class="mana_tab">
          <el-table :data="tableData">
            <el-table-column prop="user_name" label="姓名" align="center" />
            <el-table-column prop="dept_name" label="部门" align="center" />
            <el-table-column property="log_time" label="加入时间" align="center">
              <template #default>
                <!-- <div>{{ formatDate(new Date(row.log_time), 'yyyy-MM-dd') }}</div> -->
              </template>
            </el-table-column>
            <el-table-column prop="mobile" label="电话" align="center" />
            <el-table-column property="user_status" label="账号状态" align="center">
              <template #default> <el-switch :active-value="1" :inactive-value="0" /> </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template #default>
                <div class="fcs">
                  <el-link type="primary">编辑</el-link>
                  <span class="line"></span>
                  <el-link type="primary">删除</el-link>
                </div>
              </template>
            </el-table-column>
            <template #empty>
              <KzEmpty />
            </template>
          </el-table>
        </div>
        <el-dialog
          v-model="show"
          width="500px"
          custom-class="add_dialog"
          title="添加人员"
          append-to-body
          @close="close"
        >
          <div class="fcc">
            <el-button-group class="btn_tab">
              <el-button :class="tab == 1 && 'btn_tab_active'" @click="tab = 1"
                >二维码邀请</el-button
              >
              <el-button :class="tab == 2 && 'btn_tab_active'" @click="tab = 2">链接邀请</el-button>
              <el-button :class="tab == 3 && 'btn_tab_active'" @click="tab = 3">短信邀请</el-button>
            </el-button-group>
          </div>
          <div v-if="tab == 1" class="mid_dig">
            <div class="fleximg">邀请员工微信扫描下方二维码注册</div>
            <img src="" alt="" class="fleximg" />
            <span class="fleximg fresh_code">刷新二维码</span>
            <div class="fcc">
              <el-button type="primary" @click="close">下载二维码</el-button>
            </div>
          </div>
          <div v-else-if="tab == 2" class="mid_dig">
            <div class="fleximg">点击复制以下链接，发送给员工</div>

            <div class="fcc">
              <el-button type="primary" @click="close">复制链接</el-button>
            </div>
          </div>
          <div v-else class="mid_dig">
            <div class="fleximg">请填写受邀请人员信息</div>
            <div class="fleximg mes">系统将通过短信邀请对方注册</div>
            <el-input v-model="msg" placeholder="受邀人员姓名" />
            <el-input v-model="tel" placeholder="受邀人员手机号">
              <template #prepend>
                <el-select v-model="acode">
                  <el-option
                    v-for="(v, i) in areaNum"
                    :key="i"
                    :label="'+' + v.value"
                    :value="v.value"
                    >{{ v.name + ' +' + v.value }}</el-option
                  >
                </el-select>
              </template>
            </el-input>
            <div class="fcc">
              <el-button type="primary" @click="close">发送短信</el-button>
            </div>
          </div>
        </el-dialog>
        <KzPage v-model:page="page" v-model:size="size" :total="total" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzPage from '@/components/KzPage.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { reactive, ref } from 'vue'
import areaNum from '@/utils/areaNum'
import { formatDate } from '@/utils/date'
const page = ref(1)
const size = ref(20)
const total = ref(50)
const tableData = ref([])
const loading = ref(false)
const show = ref(true)
const tab = ref(1)
const msg = ref('')
const tel = ref('')
const acode = ref('86')
const close = () => {
  show.value = false
}
</script>

<style lang="scss" scoped>
.manager_tab {
  width: 60%;
  background: #ffffff;
  border-radius: 8px;
  .mid {
    margin: 0 auto;
    padding: 24px;
    padding-top: 16px;
    .fsc {
      margin-bottom: 16px;
    }
    .mid_title {
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      font-weight: bold;
      color: $color333;
    }
  }
  :deep(.el-table thead) {
    background: #f2f2f3;
    color: #333333;
    font-size: 14px;
  }
  .mana_tab {
    :deep(.el-table) {
      thead {
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        color: $color333;
        .el-table__cell {
          background-color: #f2f2f3;
        }
        .cell {
          font-weight: 600;
        }
      }
    }
  }
  .add_dialog {
    .mid_dig {
      :deep(.el-input__wrapper) {
        width: 240px;
        height: 40px;
      }
    }
  }
}
</style>
