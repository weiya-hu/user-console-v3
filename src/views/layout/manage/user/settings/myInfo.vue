<template>
  <div class="my_info_page flex">
    <KzStepTab v-model="active" :tabs="tabs" @change="change">
      <template #default="{ item }">
        {{ item.title }}
      </template>
    </KzStepTab>
    <div class="info_content f1">
      <el-scrollbar ref="scrollbarRef" :noresize="true" @scroll="scroll">
        <div class="conten_item conten_item1 mb16 kz_card">
          <div class="card_title">用户信息</div>
          <div class="card_body fc">
            <div class="avator_box fcc">
              <div v-loading="upLoading" class="user_avater">
                <el-avatar :size="100" :src="imgUrl || df_avatar_i" @click="cc"></el-avatar>
              </div>
            </div>
            <div v-show="editName" class="item_box">
              <div class="item">
                <div class="item_title">用户昵称</div>
                <div class="item_content">
                  {{ userInfoDate.nickname }}
                </div>
                <el-link type="primary" @click="goEditName">修改</el-link>
              </div>
              <div class="item">
                <div class="item_title">性别</div>
                <div class="item_content">
                  {{ userInfoDate.sex === 0 ? '未知' : userInfoDate.sex === 1 ? '男' : '女' }}
                </div>
                <el-link type="primary" @click="goEditName">修改</el-link>
              </div>
              <div class="item">
                <div class="item_title">出生日期</div>
                <div class="item_content">
                  {{ formatDate(new Date(Number(userInfoDate.birth)), 'yyyy-MM-dd') }}
                </div>
                <el-link type="primary" @click="goEditName">修改</el-link>
              </div>
              <div class="item">
                <div class="item_title">地区</div>
                <div v-if="userInfoDate.invite_code" class="item_content els">
                  {{
                    getHashStr(
                      strToArr(userInfoDate.province, userInfoDate.city, userInfoDate.district),
                      addressHash
                    )
                  }}
                </div>
                <el-link type="primary" @click="goEditName">修改</el-link>
              </div>
            </div>

            <div v-show="!editName" class="item_box edit_box">
              <div class="item">
                <div class="item_title">用户昵称</div>
                <el-input v-model="eidtForm.userName" placeholder="请输入用户昵称" size="large" />
              </div>
              <div class="item">
                <div class="item_title">性别</div>
                <el-radio-group v-model="eidtForm.userSex">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
              </div>
              <div class="item">
                <div class="item_title">出生日期</div>
                <div class="date_picker_box">
                  <el-date-picker
                    v-model="eidtForm.userBirth"
                    placeholder="请选择出生日期"
                    value-format="x"
                    :clear-icon="eidtForm.userBirth ? CircleCloseFilled : ''"
                    class="edit_picker"
                    size="large"
                  />
                  <el-icon v-show="!eidtForm.userBirth" size="14px" color="#666" class="date_icon"
                    ><calendar
                  /></el-icon>
                </div>
              </div>
              <div class="item">
                <div class="item_title">地区</div>
                <KzCascader
                  v-model="eidtForm.addArr"
                  type="address"
                  class="edit_picker"
                  size="large"
                />
              </div>
              <div class="item fjend">
                <el-button class="bdc_btn" @click="editCancel">取消</el-button>
                <el-button type="primary" @click="editData">确认</el-button>
              </div>
            </div>

            <div class="item">
              <div class="item_title">真实姓名</div>
              <div class="item_content">
                {{ userInfoDate.real_name == '' ? '未实名' : userInfoDate.real_name }}
                <el-icon v-if="userInfoDate.real_name == ''" color="#FF4736 " class="n_icon"
                  ><Warning
                /></el-icon>
              </div>
              <el-link type="primary" @click="$router.push('/manage/user/settings/realname')">{{
                userInfoDate.real_name ? '重新认证' : '实名认证'
              }}</el-link>
            </div>
            <div class="item">
              <div class="item_title">
                我的邀请码 <KzIcon href="#icon-bangzhu" class="n_icon" />
              </div>
              <div class="item_content">
                {{ userInfoDate.invite_code }}<span class="u_tips">*不可修改</span>
              </div>
              <div class="fsc item_links">
                <el-link type="primary" @click="copyCode(userInfoDate.invite_code)"
                  >复制邀请码</el-link
                >
                <el-popover placement="right" trigger="click" :teleported="false">
                  <template #reference>
                    <el-link type="primary" class="qc_handle" @click="goCode">生成二维码</el-link>
                  </template>
                  <div v-if="codeShow" class="fcc">
                    <qrcode-vue
                      :value="
                        'https://' + loginUrl + `/app/login?invite_code=${userInfoDate.invite_code}`
                      "
                      :size="qcsize"
                      level="H"
                    />
                  </div>
                </el-popover>
              </div>
            </div>
            <div class="item">
              <div class="item_title">注册时间</div>
              <div class="item_content">
                {{ formatDate(new Date(Number(userInfoDate.create_time)), 'yyyy-MM-dd') }}
              </div>
            </div>
            <div class="item">
              <div class="item_title">邀请者<KzIcon href="#icon-bangzhu" class="n_icon" /></div>
              <div class="item_content">
                {{ userInfoDate.invitee }}
              </div>
            </div>
          </div>
        </div>

        <div class="conten_item conten_item2 mb16 kz_card">
          <div class="card_title">账户安全</div>
          <div class="card_body fc">
            <div class="item_box">
              <div class="item">
                <div class="item_title">绑定手机</div>
                <div class="item_content fcs">
                  {{ userInfoDate.mobile }}
                </div>
                <el-link type="primary" @click="goChangoTel">修改</el-link>
              </div>
              <div class="item">
                <div class="item_title">绑定邮箱</div>
                <div class="item_content fcs">
                  {{ userInfoDate.email === '' ? '未绑定邮箱' : userInfoDate.email }}
                </div>
                <el-link type="primary" @click="goChangoEmail">{{
                  userInfoDate.email ? '修改' : '绑定'
                }}</el-link>
              </div>
              <div class="item">
                <div class="item_title">登录密码</div>
                <div class="item_content fcs"></div>
                <el-link type="primary" @click="goChangoMm">修改</el-link>
              </div>
            </div>
          </div>
        </div>
        <div class="conten_item conten_item3 mb16 kz_card">
          <div class="card_title">会员信息</div>
          <div class="card_body fc">
            <div class="item_box">
              <div class="item">
                <div class="item_title">会员等级</div>
                <div class="item_content fcs">
                  <img :src="changeMemberImg[userInfoDate.level]" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="item_title">会员积分</div>
                <div class="item_content fcs">{{ userInfoDate.integral }}</div>
              </div>
              <div class="item">
                <div class="item_title">会员特权</div>
                <div class="item_content fcs">
                  <div class="benefits fcs"><img :src="icon_benefits" alt="" />权益一</div>
                </div>
              </div>
              <div class="item">
                <div class="item_title">邀请用户数</div>
                <div class="item_content fcs">
                  {{ userInfoDate.invite_users }}
                </div>
                <el-link type="primary" @click="$router.push('invitation')">查看</el-link>
              </div>
            </div>
          </div>
        </div>
        <div class="conten_item conten_item4 mb16 kz_card">
          <div class="card_title">我的企业</div>

          <div v-show="!showCompany" class="card_body fc">
            <div v-for="v in userCompany" :key="v.id" class="item_box">
              <div class="item">
                <div class="item_title">企业名称</div>
                <div class="item_content fcs">
                  <el-tooltip effect="dark" :content="v.name" placement="top">
                    <div class="els">{{ v.name }}</div>
                  </el-tooltip>
                  <img v-if="v.selected == 1" class="active_c" :src="icon_company" alt="" />
                </div>
                <el-link v-if="v.selected == 0" type="primary" @click="quitCompany(v.id, v.name)"
                  >退出企业</el-link
                >
              </div>
              <div class="item">
                <div class="item_title">分组</div>
                <div class="item_content fcs">{{ v.group_name }}</div>
              </div>
            </div>
          </div>
          <div class="user_com_box">
            <div v-show="showCompany" class="fcc user_com_empty">
              <img :src="icon_user_company" alt="" />
              <span>暂无企业信息</span>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <!-- 修改头像 -->
      <el-dialog ref="editRef" v-model="editAvatershow" title="编辑用户头像" width="500px">
        <KzUpAvatar ref="KzUpAvatarRef" v-model="imgUrl" @success="upSuccess" />
        <template #footer>
          <el-button class="bdc_btn" @click="avatorClose">取消</el-button>
          <el-button type="primary" @click="avatorChanges">确认</el-button>
        </template>
      </el-dialog>
      <!-- 删除企业 -->
      <el-dialog v-model="quitShow" custom-class="info_dialog" width="500px" title="删除提示">
        <template #default>
          <div class="del_tips">
            确定退出：<span class="c_tips">{{ delComName }}</span>
          </div>
          <span class="del_tip_info"
            >退出企业后将不再能够使用该企业所有的产品与服务，请务必谨慎操作建议与企业管理员确认后再退出</span
          >
        </template>
        <template #footer>
          <el-button @click="closeCom">取消</el-button>
          <el-button type="primary" @click="quitCom">确定</el-button>
        </template>
      </el-dialog>
      <!-- <KzDialog v-model="quitShow"  :title="'确定退出企业吗？'" @sure="quitCom" /> -->
      <!-- 修改账户 -->
      <el-dialog
        v-model="telChange"
        custom-class="info_dialog"
        width="500px"
        title="修改绑定手机号码"
      >
        <template #default>
          <div v-show="editTel === 1" class="fcc">
            <el-form
              ref="oTelFormRef"
              label-position="right"
              label-width="80px"
              :model="oTelForm"
              :rules="otelRules"
              size="large"
              hide-required-asterisk
            >
              <el-form-item label="原手机号" prop="tel">
                <el-input v-model="userInfoDate.mobile" disabled />
              </el-form-item>
              <el-form-item label="验证码" prop="yzm">
                <div class="fcs f1">
                  <el-input
                    v-model="oTelForm.yzm"
                    placeholder="请输入验证码"
                    class="yzm_ipt"
                  ></el-input>
                  <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getOldSms">{{
                    smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
                  }}</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div v-show="editTel === 2">
            <el-form
              ref="nTelFormRef"
              label-position="right"
              label-width="80px"
              :model="nTelForm"
              :rules="ntelRules"
              size="large"
              hide-required-asterisk
            >
              <el-form-item label="新手机号" prop="tel">
                <el-input v-model="nTelForm.tel" placeholder="请输入手机号">
                  <template #prepend>
                    <el-select v-model="acode" style="width: 80px">
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
              <el-form-item label="验证码" prop="yzm">
                <div class="fcs f1">
                  <el-input
                    v-model="nTelForm.yzm"
                    placeholder="请输入验证码"
                    class="yzm_ipt"
                  ></el-input>
                  <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getNewSms">{{
                    smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
                  }}</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </template>
        <template #footer>
          <div v-show="editTel === 1">
            <el-button @click="closeEdit">取消</el-button>
            <el-button type="primary" @click="telNext">下一步</el-button>
          </div>
          <div v-show="editTel === 2">
            <el-button @click="closeEdit">取消</el-button>
            <el-button type="primary" @click="telComfirm">确定</el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 修改邮箱 -->
      <el-dialog
        v-model="emailChange"
        custom-class="info_dialog"
        width="500px"
        title="编辑绑定邮箱"
      >
        <template #default>
          <div class="fcc">
            <el-form
              ref="emailFormRef"
              label-position="right"
              label-width="80px"
              :model="emailForm"
              :rules="emailRules"
              size="large"
              hide-required-asterisk
            >
              <el-form-item label="邮箱地址" prop="email">
                <el-input v-model="emailForm.email" placeholder="请输入邮箱地址" />
              </el-form-item>
              <el-form-item label="验证码" prop="yzm">
                <div class="fcs f1">
                  <el-input
                    v-model="emailForm.yzm"
                    placeholder="请输入验证码"
                    class="yzm_ipt"
                  ></el-input>
                  <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getOldSms">{{
                    smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
                  }}</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </template>
        <template #footer>
          <el-button @click="closeEdit">取消</el-button>
          <el-button type="primary" @click="emailComfirm">确定</el-button>
        </template>
      </el-dialog>
      <!-- 修改密码 -->
      <el-dialog v-model="mmChange" custom-class="info_dialog" width="500px" title="修改密码">
        <template #default>
          <div v-show="editMm === 1" class="fcc">
            <el-form
              ref="mmFormRef"
              label-position="right"
              label-width="90px"
              :model="mTelForm"
              :rules="mTelRules"
              size="large"
              hide-required-asterisk
            >
              <el-form-item label="手机号码" prop="tel">
                <el-input v-model="userInfoDate.mobile" disabled />
                <!-- <el-input v-model="mTelForm.tel" placeholder="请输入手机号">
                  <template #prepend>
                    <el-select v-model="acode" style="width: 80px">
                      <el-option
                        v-for="(v, i) in areaNum"
                        :key="i"
                        :label="'+' + v.value"
                        :value="v.value"
                        >{{ v.name + ' +' + v.value }}</el-option
                      >
                    </el-select>
                  </template>
                </el-input> -->
              </el-form-item>
              <el-form-item label="验证码" prop="yzm">
                <div class="fcs f1">
                  <el-input
                    v-model="mTelForm.yzm"
                    placeholder="请输入验证码"
                    class="yzm_ipt"
                  ></el-input>
                  <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getMmSms">{{
                    smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
                  }}</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div v-show="editMm === 2">
            <el-form
              ref="passFormRef"
              label-position="right"
              label-width="90px"
              :model="passForm"
              :rules="passRules"
              size="large"
              hide-required-asterisk
            >
              <el-form-item label="设置新密码" prop="pass">
                <el-input
                  v-model="passForm.pass"
                  placeholder="请输入新密码"
                  style="width: 320px"
                  show-password
                ></el-input>
              </el-form-item>
              <div class="tips">
                * 密码最小长度6个字，最大长度16个字；<br />必须包含: 小写字母、数字
              </div>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  v-model="passForm.checkPass"
                  placeholder="请再次输入新密码"
                  style="width: 320px"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div v-show="editMm === 3">
            <div class="mm_tip">密码修改成功！</div>
            <div class="mm_tip_cc">请重新登录系统。</div>
          </div>
        </template>
        <template #footer>
          <div v-show="editMm === 1">
            <el-button @click="closeEdit">取消</el-button>
            <el-button type="primary" @click="mmNext">下一步</el-button>
          </div>
          <div v-show="editMm === 2">
            <el-button @click="closeEdit">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </div>
          <div v-show="editMm === 3">
            <el-button type="primary" @click="goLogin">重新登录</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import KzUpAvatar from '@/components/KzUpAvatar.vue'
import KzDialog from '@/components/KzDialog.vue'
import KzIcon from '@/components/KzIcon.vue'
import { formatDate } from '@/utils/date'
import { ref, computed, onMounted, reactive } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import {
  userMember_api,
  userInfo_api,
  userInfoEdit_api,
  userCompany_api,
  quitCompany_api,
  editOldTel_api,
  editNewTel_api,
  editOldTelSms_api,
  editNewTelSms_api,
  editMmSms_api,
  editMmTel_api,
  editMm_api,
} from '@/api/manage/user/steeings/myinfo'
import icon_general from '@/assets/images/user_general.png'
import icon_silver from '@/assets/images/user_silver.png'
import icon_gold from '@/assets/images/user_gold.png'
import icon_star from '@/assets/images/user_star.png'
import icon_company from '@/assets/images/my_company.png'
import icon_benefits from '@/assets/images/user_member.png'
import icon_user_company from '@/assets/images/user_company_empty.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import useClipboard from 'vue-clipboard3'
import QrcodeVue from 'qrcode.vue'
import { mainStore } from '@/store/index'
import { errMsg, okMsg } from '@/utils/index'
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mobileCheck, passReg, emailCheck } from '@/utils/index'
import areaNum from '@/utils/areaNum'
import { CircleCloseFilled, Calendar } from '@element-plus/icons-vue'
import KzCascader from '@/components/KzCascader.vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'

const router = useRouter()
const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const loginUrl = store.state.yxtUrl.mobile
// console.log(loginUrl)

const editName = ref(true)

const goEditName = () => {
  editName.value = false
}
const tabs = ref([
  { title: '基本信息' },
  { title: '账号安全' },
  { title: '会员信息' },
  { title: '我的团队' },
])
const active = ref(0)
let boxHeight: number
let el: NodeListOf<HTMLElement>
onMounted(() => {
  boxHeight = (document.querySelector('.layout_page') as HTMLElement).offsetHeight / 2
  el = document.querySelectorAll('.conten_item')
})
const change = (i: number) => {
  scrollbarRef.value!.setScrollTop(el[i].offsetTop)
}
const tab = ref(1)

const scrollbarRef = ref()
const scroll = ({ scrollTop }: { scrollTop: number }) => {
  if (el[1].getBoundingClientRect().y > boxHeight) {
    active.value = 0
  } else if (
    el[1].getBoundingClientRect().y < boxHeight &&
    el[2].getBoundingClientRect().y > boxHeight
  ) {
    active.value = 1
  } else if (el[2].getBoundingClientRect().y < boxHeight) {
    active.value = 2
  }
}
// 信息列表
const userInfoDate = ref<Record<string, string | number>>({})
const userInfoList = async () => {
  const res = await userInfo_api()
  if (res.status === 1) {
    userInfoDate.value = res.body
    imgUrl.value = res.body.head
    eidtForm.value.addArr = [res.body.province, res.body.city, res.body.district]
    eidtForm.value.userName = res.body.nickname
    eidtForm.value.userSex = res.body.sex
    eidtForm.value.userBirth = res.body.birth
  }
}
userInfoList()
// 修改信息
const eidtForm = ref({
  userName: '',
  userSex: 0 as 0 | 1 | 2,
  userBirth: 0,
  addArr: [] as (string | number)[],
})

const userData = ref<IUserDate[]>([])
interface IUserDate {
  birth?: number
  head?: string
  name?: string
  sex?: 0 | 1 | 2
  addr?: (number | string)[]
}

const editData = async (parms: IUserDate) => {
  const data = {
    name: eidtForm.value.userName,
    sex: eidtForm.value.userSex,
    birth: eidtForm.value.userBirth,
    province: eidtForm.value.addArr[0],
    city: eidtForm.value.addArr[1],
    district: eidtForm.value.addArr[2],
    head: imgUrl.value,
  }
  const res = await userInfoEdit_api({ ...data })
  if (res.status === 1) {
    userInfoList()
    editName.value = true
    okMsg('用户信息修改成功!')
  }
}
const editCancel = () => {
  editName.value = true
}

const userShow = ref(false)
const changeUp = ref('')

const goEdit = (key: string) => {
  changeUp.value = key
  userShow.value = true
}

// 修改头像
const editAvatershow = ref(false)
const upLoading = ref(false)
const imgUrl = ref('')
const cc = () => {
  editAvatershow.value = true
}

const KzUpAvatarRef = ref()
const avatorChanges = () => {
  KzUpAvatarRef.value.upload()
  editAvatershow.value = false
}
const avatorClose = () => {
  editAvatershow.value = false
}
const upSuccess = () => {
  // 头像上传成功
  upLoading.value = true
  setTimeout(() => {
    // 发请求
    editData({ head: imgUrl.value }).finally(() => {
      upLoading.value = false
    })
  }, 1000)
}
//账号安全
const goChange = ref(false)
const u_type = ref<string>('')
const goSafe = (type: string) => {
  u_type.value = type
  goChange.value = true
}
//修改手机号
const telChange = ref(false)
const editTel = ref(1)
// 点击弹窗
const goChangoTel = () => {
  telChange.value = true
}

// 会员信息
const uMember = ref<any>('')
const memberimg = ref('')
const userMember = async () => {
  const res = await userMember_api()
  if (res.status === 1) {
    uMember.value = res.body
    // console.log(uMember.value[1])
  }
}
userMember()
// userInfoDate.level
const changeMemberImg: Record<string, string> = {
  '1': icon_general,
  '2': icon_silver,
  '3': icon_gold,
  '4': icon_star,
}
// 复制邀请码
const { toClipboard } = useClipboard()
const copyCode = async (val: any) => {
  try {
    await toClipboard(val)
  } catch (e) {
    errMsg('该浏览器不支持自动复制')
  }
}
const qcsize = 100
const codeShow = ref(false)
const goCode = () => {
  codeShow.value = true
}
//企业信息
const showCompany = ref(false)
const userCompany = ref<any>({})
const myCompany = async () => {
  const res = await userCompany_api()
  userCompany.value = res.body
}
myCompany()

// 退出企业
const quitShow = ref(false)
const delComId = ref<number>(0)
const delComName = ref('')

const quitCompany = (id: number, name: string) => {
  quitShow.value = true
  delComId.value = id
  delComName.value = name
}
const quitCom = async () => {
  const res = await quitCompany_api({ cid: delComId.value })
  if (res.status === 1) {
    myCompany()
    quitShow.value = false
    okMsg('')
  }
}
const closeCom = () => {
  quitShow.value = false
}

//修改手机号

const oTelForm = reactive({
  yzm: '',
})
const oTelFormRef = ref()
const otelRules = reactive({
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})
const smsTime = ref(0)
const changeTime = () => {
  const timer = setInterval(() => {
    if (smsTime.value > 0) {
      smsTime.value--
    } else {
      clearInterval(timer)
      smsTime.value = 0
      localStorage.removeItem('changePsssTime')
    }
  }, 1000)
}

const acode = ref('86')

const getOldSms = async () => {
  smsTime.value = 120
  changeTime()
  localStorage.setItem('changePsssTime', new Date().getTime().toString())
  //发送短信
  const res = await editOldTelSms_api()
}
//下一步
const telNext = () => {
  oTelFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      editTel.value = 2
      smsTime.value = 0
      const res = await editOldTel_api({
        sms: oTelForm.yzm,
      })
    }
  })
}

const nTelForm = reactive({
  tel: '',
  yzm: '',
})
const nTelFormRef = ref()

const ntelRules = reactive({
  tel: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})

const getNewSms = () => {
  nTelFormRef.value.validateField('tel', async (valid: boolean) => {
    if (valid) {
      smsTime.value = 120
      changeTime()
      localStorage.setItem('changePsssTime', new Date().getTime().toString())
      //发送短信
      const res = await editNewTelSms_api({
        mobile: nTelForm.tel,
        acode: '+' + acode.value,
      })
    }
  })
}

const telComfirm = async () => {
  nTelFormRef.value!.validate(async (valid: boolean) => {
    if (valid) {
      const data = { mobile: nTelForm.tel, acode: '+' + acode.value, sms: nTelForm.yzm }
      const res = await editNewTel_api({ ...data })
      if (res.status === 1) {
        okMsg('手机号修改成功！')
        telChange.value = false
      }
    }
  })
}

//修改密码
const mmChange = ref(false)
const editMm = ref(1)
const goChangoMm = () => {
  mmChange.value = true
}
const mTelForm = reactive({
  yzm: '',
})
const mmFormRef = ref()
const mTelRules = reactive({
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})

const getMmSms = () => {
  mmFormRef.value.validateField('tel', async (valid: boolean) => {
    if (valid) {
      smsTime.value = 120
      changeTime()
      localStorage.setItem('changePsssTime', new Date().getTime().toString())
      const res = await editMmSms_api()
    }
  })
}

const mmNext = () => {
  mmFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      editMm.value = 2
      smsTime.value = 0
      const res = await editMmTel_api({ sms: mTelForm.yzm })
    }
  })
}

const oldtime = Number(localStorage.getItem('changePsssTime'))
if (oldtime) {
  const now = new Date().getTime()
  if (now - oldtime < 120000) {
    const stime = (120 - (now - oldtime) / 1000).toFixed(0)
    smsTime.value = Number(stime)
    changeTime()
  } else {
    localStorage.removeItem('changePsssTime')
  }
}

const passFormRef = ref<FormInstance>()
const passForm = reactive({
  pass: '',
  checkPass: '',
})

const validatePass1 = (rule: any, value: any, callback: any) => {
  if (!passReg.test(value)) {
    callback(new Error('密码长度在6~16之间，不能只是数字或字母'))
  } else {
    if (passForm.checkPass !== '') {
      if (!passFormRef.value) {
        return
      }
      passFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== passForm.pass) {
    callback(new Error('两次密码输入不一致！'))
  } else {
    callback()
  }
}

const passRules = reactive({
  pass: [
    { required: true, message: '请输入新密码！', trigger: 'blur' },
    { min: 6, max: 12, message: '密码长度须在6~16个字符！', trigger: 'blur' },
    { validator: validatePass1, trigger: 'blur' },
  ],
  checkPass: [
    { required: true, message: '请再次输入新密码！', trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' },
  ],
})

const loading = ref(false)
const onSubmit = () => {
  passFormRef.value!.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      const data = { confirm_pass: passForm.checkPass, new_pass: passForm.pass }
      const res = await editMm_api({ ...data })
      if (res.status === 1) {
        okMsg('密码修改成功！')
        editMm.value = 3
      }
    }
  })
}
const goLogin = () => {
  router.replace('/login')
}

//修改邮箱
const emailChange = ref(false)
const goChangoEmail = () => {
  emailChange.value = true
}
const emailForm = reactive({
  email: '',
  yzm: '',
})
const emailFormRef = ref()
const emailRules = reactive({
  email: [
    { required: true, message: '请输入邮箱地址！', trigger: 'blur' },
    { validator: emailCheck, trigger: 'blur' },
  ],
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})
const emailComfirm = () => {
  emailFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      errMsg('未开通此服务！')
      emailChange.value = false
    }
  })
}
//取消按钮
const closeEdit = () => {
  smsTime.value = 0
  editTel.value = 1
  telChange.value = false
  editMm.value = 1
  mmChange.value = false
  emailChange.value = false
  emailForm.email = ''
  emailForm.yzm = ''
  oTelForm.yzm = ''
  nTelForm.tel = ''
  nTelForm.yzm = ''
  mTelForm.yzm = ''
  passForm.pass = ''
  passForm.checkPass = ''
}
</script>

<style lang="scss" scoped>
.my_info_page {
  height: 100%;
  .info_content {
    margin-left: 16px;
    height: 100%;
    .conten_item {
      .card_body {
        padding-left: 202px;
        padding-bottom: 56px;
        display: inline-flex;
        .avator_box {
          display: flex;
          width: 600px;
          padding-bottom: 56px;
        }
        .user_avater {
          border: 1px solid #eeeeee;
          border-radius: 50%;
          :deep(.el-avatar) {
            cursor: pointer;
            border: none;
            position: relative;
            vertical-align: middle;
            &:hover::after {
              content: '点击修改头像';
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0.44);
              color: #fff;
            }
          }
        }
        .item_box {
          margin-top: 16px;
          &:first-child {
            margin-top: 0;
          }
        }
        .item {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          .item_title {
            color: #909399;
            margin-right: 40px;
            width: 100px;
            text-align: right;
          }
          .item_content {
            color: #303133;
            width: 360px;
          }
          .item_links {
            width: 164px;
          }
        }
        .edit_box {
          .item {
            margin-bottom: 12px;
          }
          .fjend {
            margin-bottom: 64px;
            margin-top: 22px;
          }
          .el-input {
            width: 524px;
          }
          :deep(.edit_picker) {
            width: 524px;
          }
          .date_picker_box {
            position: relative;
            :deep(.el-input__prefix) {
              display: none;
            }
            .date_icon {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translate(0, -50%);
            }
          }
        }
      }
    }

    .conten_item1 {
      .u_tips {
        font-size: 12px;
        color: #909399;
        height: 15px;
        line-height: 15px;
        margin-left: 8px;
      }
      .n_icon {
        margin-left: 8px;
        vertical-align: middle;
      }
    }

    .conten_item3 {
      .benefits {
        width: 68px;
        height: 20px;
        background: #f2f3f3;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 400;
        color: #606266;
        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
      }
    }
    .conten_item4 {
      .user_com_box {
        padding-right: 402px;
        .user_com_empty {
          height: 254px;
          background: #ffffff;
          border-radius: 8px;
          img {
            width: 100px;
            height: 100px;
          }
          span {
            font-size: 14px;
            margin-top: 5px;
            font-weight: 400;
            color: #909399;
          }
        }
      }
      .active_c {
        margin-left: 10px;
      }
    }
    .tips {
      padding-left: 90px;
      margin-bottom: 22px;
      font-size: 12px;
      color: #909399;
    }
    .mm_tip {
      font-size: 16px;
      font-weight: 500;
      color: #303133;
    }
    .mm_tip_cc {
      font-size: 14px;
      font-weight: 400;
      color: #303133;
    }
    .del_tips {
      font-size: 16px;
      font-weight: 500;
      color: #303133;
      margin-bottom: 8px;
      .c_tips {
        color: #2d68eb;
      }
    }
    .del_tip_info {
      font-size: 14px;
      font-weight: 400;
      color: #303133;
    }
  }
}
</style>
