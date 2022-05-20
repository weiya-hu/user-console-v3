<template>
  <div class="manager_tab flex">
    <div class="left_1">
      <div class="img_logo" @click="$router.push('companyinfo')">
        <img
          src="https://res.yxtong.com/dev/web/userinfo/company/9d61aed80e6b96234c26c8b17693b784.png"
          alt=""
        />
      </div>
      <div>康洲数智科技项目组</div>
      <el-button class="bdc_btn"
        ><el-icon color="#2150ec"><Plus /></el-icon>添加分组</el-button
      >
      <div class="tree_sector">
        <div class="pople_box">
          <div></div>
          <div>全部人员</div>
          <el-icon><MoreFilled /></el-icon>
        </div>
        <div class="pople_box">
          <div></div>
          <div>全部人员</div>
          <el-icon><MoreFilled /></el-icon>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="fsc f1">
        <div>
          <div v-if="showDep">
            <span class="mid_title">管理员列表</span>
            <KzIcon href="#icon-bianji" size="16px" class="bj" @click="showDep = false"></KzIcon>
          </div>
          <div v-else class="flex">
            <el-input v-model="department" show-word-limit maxlength="30"></el-input>
            <el-button type="primary" @click="showDep = true">保存</el-button>
          </div>
        </div>

        <div>
          <el-button type="info" plain>删除分组</el-button>
          <el-button type="primary" @click="show = true"
            ><KzIcon href="#icon-tianjia" size="14px" />添加人员</el-button
          >
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
            <div class="fleximg mare type_face">邀请员工微信扫描下方二维码注册</div>
            <img src="" alt="" class="fleximg" />

            <span class="fleximg fresh_code">
              <KzIcon href="#icon-shuaxin" size="14px" />刷新二维码</span
            >
            <div class="fcc">
              <el-button type="primary" @click="close">下载二维码</el-button>
            </div>
          </div>
          <div v-else-if="tab == 2" class="mid_dig">
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
            <el-form ref="num" :model="numberForm" :rules="telRules">
              <div class="num">
                <el-input v-model="numberForm.msg" placeholder="受邀人员姓名" class="mb16" />
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
import { Plus } from '@element-plus/icons-vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { formatDate } from '@/utils/date'
import { telReg } from '@/utils/index'
import {
  getgroup_api,
  modifyname_api,
  addgroup_api,
  deletegroup_api,
} from '@/api/manage/company/personnelManage'
const page = ref(1)
const size = ref(20)
const total = ref(50)
const tableData = ref([]) //表格
const num = ref()
const numberForm = reactive({
  tel: '', //受邀人电话
  msg: '', //受邀人姓名
})
const show = ref(false)
const tab = ref(1)
const menuList = ref<any[]>([])
const defaultProps = {
  children: 'children',
  label: 'name',
}
const department = ref('') //编辑部门名字
const showDep = ref(true) //编辑部门是否显示
const acode = ref('86')
const close = () => {
  numberForm.msg = ''
  if (tab.value == 3) {
    num.value.resetFields()
  }
  show.value = false
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
const getGroup = async () => {
  const res = await getgroup_api()
  console.log(res)
}
getGroup()
</script>
<style lang="scss" scoped>
.manager_tab {
  .left_1 {
    box-sizing: border-box;
    width: 320px;
    border-radius: 8px;
    margin-right: 16px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    .img_logo {
      margin: 32px 50px 12px;
      width: 220px;
      height: 110px;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      &:hover::before {
        content: '点击查看企业信息';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 4px;
        z-index: 1;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #1c4296;
        color: #fff;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    div {
      width: 144px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 22px;
      margin-bottom: 16px;
    }
    .tree_sector {
      margin-top: 40px;
      width: 280px;
      height: 100px;
      .pople_box {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 20px;
        div:nth-child(1) {
          width: 2px;
          height: 12px;
          margin-right: 4px;
          background: #909399;
          border-radius: 1px;
        }
        div:nth-child(2) {
          font-size: 14px;
          font-weight: 550;
          color: #303133;
        }
        :deep(.el-icon) {
          transform: rotate(90deg);
          width: 14px;
          height: 14px;
          color: #808080;
          margin-top: -14px;
          margin-left: 121px;
        }
      }
    }
  }
  .mid {
    width: calc(100% - 336px);
    box-sizing: border-box;
    border-radius: 8px;
    // margin: 0 auto;
    padding: 24px;
    padding-top: 16px;
    background: #ffffff;
    .fsc {
      margin-bottom: 16px;
      .el-input {
        width: 300px;
        height: 32px;
        margin-right: 12px;
        border-radius: 2px;
      }
    }
    .mid_title {
      padding-right: 12px;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      font-weight: bold;
      color: $color333;
    }
    .bj {
      padding-top: 4px;
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
      padding-bottom: 32px;
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
        cursor: pointer;

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
