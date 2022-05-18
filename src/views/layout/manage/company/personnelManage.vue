<template>
  <div class="manager_tab flexll">
    <div class="manager_left_nav">
      <div class="manager_left_nav_top fc flexl">
        <div class="manager_logo_img flximg">
          <img src="" />
        </div>
        <div class="manager_name">康洲数智科技项目组</div>
        <el-button class="bdc_btn">添加分组</el-button>
      </div>
      <div></div>
    </div>
    <div class="mid">
      <div class="fsc f1">
        <span class="mid_title">管理员列表</span>
        <div>
          <el-button type="info" plain>删除分组</el-button>
          <el-button type="primary" @click="addPersonShow = !addPersonShow">添加人员</el-button>
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
          v-model="addPersonShow"
          width="500px"
          custom-class="add_dialog"
          title="添加人员"
          @close="close"
        >
          <div class="fcc">
            <el-button-group class="btn_tab">
              <el-button
                v-for="(item, index) in addPersonType"
                :key="index"
                :class="addPersonTab === index && 'btn_tab_active'"
                @click="addPersonTab = index"
                >{{ item }}</el-button
              >
            </el-button-group>
          </div>
          <div v-if="addPersonTab === 0" class="mid_dig">
            <div class="fleximg mare type_face">邀请员工微信扫描下方二维码注册</div>
            <img src="" alt="" class="fleximg" />
            <span class="fleximg fresh_code">刷新二维码</span>
            <div class="fcc">
              <el-button type="primary" @click="close">下载二维码</el-button>
            </div>
          </div>
          <div v-else-if="addPersonTab === 1" class="mid_dig">
            <div class="fleximg type_face">点击复制以下链接，发送给员工</div>
            <div class="link_code">
              <el-descriptions :column="1">
                <el-descriptions-item label="企业编码" class-name="fir"
                  ><span>kooriookami</span></el-descriptions-item
                >
                <el-descriptions-item label="邀请链接" class-name="two"
                  >18100000000</el-descriptions-item
                >
              </el-descriptions>
            </div>
            <div class="fcc">
              <el-button type="primary" @click="close">复制链接</el-button>
            </div>
          </div>
          <div v-else class="mid_dig">
            <div class="fleximg mare type_face">请填写受邀请人员信息</div>
            <div class="fleximg mes">系统将通过短信邀请对方注册</div>
            <el-form :model="numberForm" :rules="telRules">
              <div class="num">
                <el-input v-model="msg" placeholder="受邀人员姓名" class="mb16" />
                <el-form-item prop="tel">
                  <el-input v-model="numberForm.tel" placeholder="受邀人员手机号">
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
                </el-form-item>
              </div>
            </el-form>

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
import { telReg } from '@/utils/index'
const page = ref(1)
const size = ref(10)
const total = ref(0)
const tableData = ref()
const numberForm = reactive({
  tel: '',
})
const addPersonShow = ref(false)
const addPersonTab = ref(0)
const msg = ref('')
const acode = ref('86')
const addPersonType = ref(['二维码邀请', '链接邀请', '短信邀请'])

const close = () => {
  addPersonShow.value = false
}
const telPass = (rule: any, value: string, callback: any) => {
  if (telReg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号码!'))
  }
}
const telRules = reactive({
  tel: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: telPass, trigger: 'blur' },
  ],
})
</script>
<style lang="scss" scoped>
.manager_tab {
  width: 100%;
  overflow: auto;
  .manager_left_nav {
    width: 320px;
    border-radius: 8px;
    margin-right: 16px;
    background: #ffffff;
    .manager_left_nav_top {
      padding: 32px 0 15px;
      border-bottom: 1px solid rgba(238, 238, 238, 1);
      .manager_logo_img {
        width: 220px;
        height: 64px;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .manager_name {
        font-size: 16px;
        line-height: 16px;
        color: #333333;
        text-align: center;
        font-weight: 600;
        margin: 16px 0 24px;
      }
    }
  }
  .mid {
    width: calc(100% - 336px);
    border-radius: 8px;
    padding: 24px;
    padding-top: 16px;
    background: #ffffff;
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
  :deep(.add_dialog) {
    .el-dialog__body {
      padding-top: 15px;
    }
    .mid_dig {
      margin-top: 32px;
      .type_face {
        font-weight: bold;
        color: #303133;
        font-family: PingFangSC-Medium, PingFang SC;
      }
      img {
        width: 160px;
        height: 160px;
        margin: 0 auto;
      }
      .mare {
        margin-bottom: 8px;
      }
      .fresh_code {
        color: #2150ec;
        margin-top: 8px;
        font-size: 12px;
        padding-bottom: 24px;
      }
      .mes {
        color: #909399;
        font-size: 12px;
        font-weight: normal;
        margin-bottom: 24px;
      }
      .num {
        margin-bottom: 76px;
        display: flex;
        justify-content: center;
        // align-items: center;
        flex-wrap: wrap;
        .el-input {
          width: 240px;
          height: 40px;
        }
        .el-input--suffix {
          width: 80px;
        }
      }
      .el-descriptions__label {
        font-size: 14px;
        color: #909399;
        margin-right: 12px;
      }
      .link_code {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 72px;
        .el-descriptions__cell {
          width: 295px;
          display: flex;

          align-items: center;
        }
        .fir {
          display: block;
          z-index: 2100;
          width: 226px;
          height: 48px;
          text-align: center;
          color: #303133;
          line-height: 48px;
          background: #f2f3f3;
          font-size: 18px;
          font-weight: bold;
        }
        .two {
          color: #303133;
        }
      }
    }
  }
}
</style>
