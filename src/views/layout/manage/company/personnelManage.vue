<template>
  <div class="manager_tab flex">
    <div class="left_1">
      <div class="img_logo" @click="$router.push('companyinfo')">
        <img
          src="https://res.yxtong.com/dev/web/userinfo/company/9d61aed80e6b96234c26c8b17693b784.png"
          alt=""
        />
      </div>
      <div class="sel">康洲数智科技项目组</div>
      <el-button class="bdc_btn" @click="dialogVisible = true"
        ><el-icon color="#2150ec"><Plus /></el-icon>添加分组</el-button
      >
      <div class="tree_sector">
        <div class="pople_box" @click="getList()">
          <div class="left_line"></div>
          <div>全部人员</div>
        </div>

        <div
          v-for="(item, index) in group"
          :key="index"
          class="pople_box"
          @click="getList(index, item)"
        >
          <div class="left_line"></div>
          <div>{{ item }}</div>
          <el-popover
            trigger="hover"
            placement="right"
            :width="180"
            popper-class="show_tags user_drop"
            :teleported="false"
          >
            <div @click="openEdit(index, item)"><span>修改名称</span></div>
            <div @click="deleteGroup(index)"><span>删除分组</span></div>
            <template #reference>
              <el-icon><MoreFilled /></el-icon>
            </template>
          </el-popover>
          <el-dialog
            v-model="edit_show"
            title="修改名称"
            width="500px"
            custom-class="add_group"
            @close="closeEdit"
          >
            <el-input
              v-model="edit_input"
              placeholder="请输入名称"
              maxlength="10"
              type="text"
              show-word-limit
            ></el-input>
            <template #footer>
              <span class="dialog-footer">
                <el-button class="bdc_btn" @click="closeEdit">取消</el-button>
                <el-button type="primary" @click="modifyGroup">保存</el-button>
              </span>
            </template>
          </el-dialog>
        </div>
      </div>
      <el-dialog
        v-model="dialogVisible"
        title="添加分组"
        width="500px"
        custom-class="add_group"
        @close="closeAdd"
      >
        <el-input
          v-model="group_input"
          placeholder="请输入分组名称"
          maxlength="10"
          type="text"
          show-word-limit
        ></el-input>
        <template #footer>
          <span class="dialog-footer">
            <el-button class="bdc_btn" @click="closeAdd">取消</el-button>
            <el-button type="primary" @click="addGroup(group_input)">保存</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="mid">
      <div class="fsc f1">
        <div v-show="!comAll">
          <div v-if="showDep">
            <span class="mid_title">{{ department }}</span>
            <KzIcon href="#icon-bianji" size="16px" class="bj" @click="showDep = false"></KzIcon>
          </div>
          <div v-else class="flex">
            <el-input v-model="department" show-word-limit maxlength="30"></el-input>
            <el-button type="primary" @click="editName">保存</el-button>
          </div>
        </div>

        <div>
          <el-button v-show="!comAll" type="info" plain @click="deleteData">删除分组</el-button>
          <el-button type="primary" @click="show = true"
            ><KzIcon href="#icon-tianjia" size="14px" />添加人员</el-button
          >
        </div>
      </div>
      <div>
        <div class="mana_tab">
          <el-table :data="tableData">
            <el-table-column prop="user_name" label="姓名" align="center" />
            <el-table-column prop="group_name" label="部门" align="center" />

            <el-table-column prop="mobile" label="电话" align="center" />
            <el-table-column property="user_status" label="账号状态" align="center">
              <template #default="{ row }">
                <el-switch
                  v-model="row.user_status"
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeStatus(row.id)"
                />
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template #default="{ row }">
                <div class="fcs line_last">
                  <el-button type="text" @click="editPop(row)">编辑</el-button>
                  <span class="line"></span>
                  <el-button type="text" @click="delEdit(row.id)">删除</el-button>
                </div>
              </template>
            </el-table-column>
            <template #empty>
              <KzEmpty />
            </template>
          </el-table>
          <KzPage v-model:page="page" v-model:size="size" :total="total" />
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
              <!-- <el-button :class="tab == 3 && 'btn_tab_active'" @click="tab = 3">短信邀请</el-button> -->
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
        <el-dialog
          v-model="showEdit"
          width="500px"
          custom-class="del_dialog"
          title="编辑人员"
          @close="closeDate"
        >
          <div class="fir_name">
            <div>{{ popName }}</div>
            <div>{{ popNum }}</div>
            <img :src="icon_del" alt="" @click="delEdata" />
          </div>
          <div class="sel_two">
            <span class="grouping">分组</span>
            <el-select v-model="sel_value" multiple placeholder="请选择分组（可多选）">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.group_name"
                :value="item.group_id"
              />
            </el-select>
          </div>
          <div class="sel_two">
            <span class="grouping">角色</span>
            <el-select v-model="sel_two" multiple placeholder="请选择角色（可多选）">
              <el-option
                v-for="(item, index) in option_roles"
                :key="index"
                :label="item"
                :value="Number(index)"
              />
            </el-select>
          </div>
          <div class="sel_two">
            <span class="grouping">状态</span>
            <el-switch v-model="user_status" :active-value="1" :inactive-value="0" />
          </div>
          <div class="fjend">
            <el-button class="bdc_btn" @click="closeDate">取消</el-button>
            <el-button type="primary" @click="submitEdit">保存</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzPage from '@/components/KzPage.vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { reactive, ref } from 'vue'
import icon_del from '@/assets/images/del_pople.png'
import areaNum from '@/utils/areaNum'
import { Plus } from '@element-plus/icons-vue'
import { errMsg, okMsg, getUrlParam } from '@/utils/index'
import { MoreFilled } from '@element-plus/icons-vue'
import { telReg } from '@/utils/index'
import {
  getGroup_api,
  modifyName_api,
  addGroup_api,
  deleteGroup_api,
  groupList_api,
  statusUser_api,
  getMember_api,
  getRole_api,
  getUser_api,
  reviseUser_api,
  deleteMember_api,
} from '@/api/manage/company/personnelManage'
import { mainStore } from '@/store/index'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const store = mainStore()
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
const department = ref('') //编辑部门名字
const showDep = ref(true) //编辑部门是否显示
const group = ref({}) //全部部门
const dialogVisible = ref(false) //添加分组弹窗
const edit_show = ref(false) //编辑部门名称
const showEdit = ref(false) //编辑员工是否显示
const user_status = ref(0) //编辑员工状态
const comAll = ref(true) //是否显示操作框
const editId = ref() //表格名字编辑
const active = ref('')
const numPoples = ref()
const edit_input = ref('')
const group_input = ref('')
const sel_value = ref([])
const options = ref()
const popNum = ref('')
const popName = ref('')
const acode = ref('86')
const closeAdd = () => {
  group_input.value = ''
  dialogVisible.value = false
}
const closeEdit = () => {
  edit_input.value = ''
  edit_show.value = false
}
const addGroup = async (name: string) => {
  const { status } = await addGroup_api({ name })
  status === 1 ? okMsg('分组添加成功') : errMsg('分组添加失败')
  closeAdd()
  getGroup()
  getList()
}
//删除分组
const deleteGroup = async (group_id: number) => {
  const { status } = await deleteGroup_api({ group_id })
  status === 1 ? okMsg('删除分组成功') : errMsg('删除分组失败')
  getGroup()
  getList()
}
const openEdit = (id: number, name: string) => {
  edit_show.value = true
  numPoples.value = id
  edit_input.value = name
}
//修改名称
const modifyGroup = async (group_id: number, name: string) => {
  const { status } = await modifyName_api({
    group_id: numPoples.value,
    name: edit_input.value,
  })
  status === 1 ? okMsg('修改名称成功') : errMsg('修改名称失败')
  closeEdit()
  getGroup()
}
//表格修改名称
const editName = async (group_id: number, name: string) => {
  const { status } = await modifyName_api({
    group_id: editId.value,
    name: department.value,
  })
  status === 1 ? okMsg('修改名称成功') : errMsg('修改名称失败')
  showDep.value = true
  closeEdit()
  getGroup()
}
//删除表格分组
const deleteData = async (group_id: number) => {
  const { status } = await deleteGroup_api({ group_id: editId.value })
  // status === 1 ? okMsg('删除分组成功') : errMsg('删除分组失败')
  // getGroup()
  // getList()
  if (status === 1) {
    okMsg('删除分组成功')
    getGroup()
    getList()
  } else {
    errMsg('删除分组失败')
  }
}
//修改状态
const changeStatus = async (id: number) => {
  const { status } = await statusUser_api({ member_id: id })
  status === 1 ? okMsg('状态修改成功') : errMsg('状态修改失败')
}
//编辑人员
const option_roles = ref()
const sel_two = ref([])
const member_id = ref()
const editPop = async (row: any) => {
  getUser_api({ memberId: row.id }).then((res) => {
    console.log(res)
    if (res.status === 1) {
      sel_value.value = res.body.group_ids
      sel_two.value = res.body.role_ids
      popName.value = res.body.user_name
      popNum.value = res.body.mobile
      user_status.value = res.body.user_status
      member_id.value = res.body.member_id
    }
  })
  showEdit.value = true

  const { status, body } = await getMember_api()
  if (status === 1) {
    options.value = body
  }
  const res = await getRole_api()
  if (res.status === 1) {
    option_roles.value = res.body
  }
}
const submitEdit = async () => {
  const { status } = await reviseUser_api({
    group_ids: sel_value.value,
    role_ids: sel_two.value,
    user_status: user_status.value,
    member_id: member_id.value,
  })
  if (status == 1) {
    closeDate()
    getList(editId.value)
  }
}
const delEdit = async (id?: any) => {
  const { status } = await deleteMember_api({ member_id: id })
  status === 1 ? okMsg('删除人员成功') : errMsg('删除人员失败')
  getList(editId.value)
}
const delEdata = async () => {
  const { status } = await deleteMember_api({ member_id: member_id.value })
  status === 1 ? okMsg('删除人员成功') : errMsg('删除人员失败')
  closeDate()
  getList(editId.value)
}
const closeDate = () => {
  sel_value.value = []
  sel_two.value = []
  popName.value = ''
  popNum.value = ''
  user_status.value = 0
  showEdit.value = false
}
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
  const { body, status } = await getGroup_api()
  if (status) {
    group.value = body
    const id = getUrlParam('id') || null
    router.push(`/manage/company/personnelmanage?id=${id}`)
    editId.value = id
    id ? getList(Number(id), body[Object.keys(body)[0]]) : getList()
  }
}
getGroup()
const getList = async (id?: number, name?: any) => {
  name && (department.value = name)
  editId.value = id
  const { body, status } = await groupList_api({
    size: size.value,
    current: page.value,
    groupId: id,
  })
  console.log(body)

  if (status) {
    tableData.value = body.records
    total.value = body.total
    store.setKeepList([])
    router.push(`/manage/company/personnelmanage?id=${id}`)
  }
  id ? (comAll.value = false) : (comAll.value = true)
}
</script>
<script lang="ts">
export default { name: 'PersonnelManage' }
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
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    .sel {
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
      margin-bottom: 40px;
      .active {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
        height: 32px;
        margin-bottom: 0;
        cursor: pointer;
        background-color: #e8edfd;
      }
      .pople_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
        height: 32px;
        margin-bottom: 0;
        cursor: pointer;
        &:hover {
          background-color: #e8edfd;
          .left_line {
            background: #2d68eb;
          }
          div:nth-child(2) {
            color: #2150ec;
          }
        }

        .left_line {
          width: 2px;
          height: 12px;
          margin-right: 8px;
          background: #909399;
          border-radius: 1px;
        }
        div:nth-child(2) {
          font-size: 14px;
          flex: 1;
          font-weight: 550;
          color: #303133;
        }
      }

      :deep(.el-icon) {
        transform: rotate(90deg);
        width: 14px;
        height: 14px;
        color: #808080;
        // position: relative;
        // right: 0;
      }
    }
    :deep(.add_group) {
      .el-input {
        height: 40px;
        margin: 16px 0;
      }
    }
  }
  .show_tags {
    width: 180px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 !important;
    div {
      width: 100%;
      height: 50%;
      cursor: pointer;
      &:hover {
        background-color: #e8edfd;
      }
      span {
        margin-left: 16px;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 40px;
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
    :deep(.el-button) {
      width: 110px;
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
  :deep(.del_dialog) {
    padding-bottom: 24px;
    .fir_name {
      margin-top: 10px;
      height: 50px;
      background-color: #f3f4f8;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-child(1) {
        margin-left: 16px;
        margin-right: 16px;
        font-size: 18px;
        font-weight: 545;
        color: black;
      }
      div:nth-child(2) {
        flex: 1;
      }
      img {
        margin-right: 16px;
      }
    }
    .sel_two {
      margin: 20px 0;

      .grouping {
        color: #333333;
        margin-right: 16px;
      }
      .el-input {
        width: 278px;
        min-height: 40px;
      }
    }
  }
}
</style>
