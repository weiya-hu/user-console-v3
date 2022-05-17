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
          <div class="card_container">
            <div class="card_content">
              <div v-loading="upLoading" class="user_avater">
                <KzImgUpload
                  v-if="!upLoading"
                  ref="KzImgUploadRef"
                  @change="changes"
                  @up-one-success="upSuccess"
                >
                  <el-avatar :size="100" :src="imgUrl"></el-avatar>
                </KzImgUpload>
                <el-avatar v-else :size="100" :src="imgUrl" class="up_avatar"></el-avatar>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">用户昵称</span>
                  <div class="infoname_txt">{{ userInfoDate.nickname }}</div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="goEdit('name')">修改</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">真实姓名</span>
                  <div v-if="userInfoDate.real_name != ''" class="infoname_txt">
                    {{ userInfoDate.real_name }}
                  </div>
                  <div v-else class="infoname_txt">未实名</div>
                  <el-icon v-if="userInfoDate.real_name == ''" color="#FF4736 "
                    ><Warning
                  /></el-icon>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="$router.push('/manage/user/settings/realname')">{{
                    userInfoDate.real_name ? '重新认证' : '实名认证'
                  }}</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">性别</span>
                  <div class="infoname_txt">
                    {{ userInfoDate.sex === 0 ? '未知' : userInfoDate.sex === 1 ? '男' : '女' }}
                  </div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="goEdit('sex')">修改</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">出生日期</span>
                  <div class="infoname_txt">
                    {{ formatDate(new Date(Number(userInfoDate.birth)), 'yyyy-MM-dd') }}
                  </div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="goEdit('birth')">修改</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">地区</span>
                  <div class="infoname_txt">
                    {{
                      userInfoDate.province > 0 &&
                      getHashStr(
                        strToArr(userInfoDate.province, userInfoDate.city, userInfoDate.district),
                        addressHash
                      )
                    }}
                  </div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="goEdit('addr')">修改</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label"
                    >我的邀请码 <KzIcon href="#icon-bangzhu" class="icon"
                  /></span>

                  <div class="infoname_txt">{{ userInfoDate.invite_code }}</div>
                  <span class="u_tips">*不可修改</span>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="copyCode(userInfoDate.invite_code)">复制</el-link>

                  <el-popover placement="right" trigger="click" :teleported="false">
                    <template #reference>
                      <el-link type="primary" class="qc_handle" @click="goCode">生成二维码</el-link>
                    </template>
                    <div v-if="codeShow" class="fcc">
                      <qrcode-vue
                        :value="
                          'https://' +
                          loginUrl +
                          `/app/login?invite_code=${userInfoDate.invite_code}`
                        "
                        :size="qcsize"
                        level="H"
                      />
                    </div>
                  </el-popover>
                </div>
              </div>

              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">注册时间</span>
                  <div class="infoname_txt">
                    {{ formatDate(new Date(Number(userInfoDate.create_time)), 'yyyy-MM-dd') }}
                  </div>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">邀请者<KzIcon href="#icon-bangzhu" class="icon" /></span>
                  <div class="infoname_txt">{{ userInfoDate.invitee }}</div>
                </div>
              </div>
            </div>
          </div>
          <KzEditInfo v-model="userShow" :info_type="changeUp" @comfirm="sure" />
        </div>
        <div class="conten_item conten_item2 mb16 kz_card">
          <div class="card_title">会员信息</div>
          <div class="card_container">
            <div class="card_content">
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">会员等级</span>
                  <img :src="changeMemberImg[userInfoDate.level]" alt="" />
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">会员积分</span>
                  <div class="infoname_txt">{{ userInfoDate.integral }}</div>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">会员特权</span>
                  <div class="infoname_txt">无</div>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">邀请用户数</span>
                  <div class="infoname_txt">{{ userInfoDate.invite_users }}</div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="$router.push('/manage/user/settings/invitation')"
                    >查看</el-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="conten_item conten_item3 mb16 kz_card">
          <div class="card_title">我的团队</div>
          <div class="card_container">
            <div class="card_content">
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label"> 企业名称</span>
                  <div class="infoname_txt">123</div>
                  <img class="active_c" :src="icon_company" alt="" />
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">部门</span>
                  <div class="infoname_txt">无</div>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">企业名称</span>
                  <div class="infoname_txt">无</div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="quitCompany">退出企业</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">部门</span>
                  <div class="infoname_txt">无</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <KzDialog v-model="quitShow" :msg="quitMsg" :title="'确定退出企业吗？'" :btn="2" />
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import KzEditInfo from '@/components/KzEditInfo.vue'
import KzDialog from '@/components/KzDialog.vue'
import KzIcon from '@/components/KzIcon.vue'
import { formatDate } from '@/utils/date'
import { ref, onMounted } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import { userMember_api, userInfo_api, userInfoEdit_api } from '@/api/manage/user/steeings/myinfo'
import icon_general from '@/assets/images/user_general.png'
import icon_silver from '@/assets/images/user_silver.png'
import icon_gold from '@/assets/images/user_gold.png'
import icon_star from '@/assets/images/user_star.png'
import icon_company from '@/assets/images/my_company.png'
import useClipboard from 'vue-clipboard3'
import QrcodeVue from 'qrcode.vue'
import KzImgUpload from '@/components/KzImgUpload.vue'
import { mainStore } from '@/store/index'
import { errMsg } from '@/utils/index'
import { getHash, getHashStr, strToArr } from '@/utils/index'
const store = mainStore()
const addressHash = ref(store.state.addressHash)
const loginUrl = store.state.yxtUrl.mobile
console.log(loginUrl)

const tabs = ref([{ title: '基本信息' }, { title: '会员信息' }, { title: '我的团队' }])
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
  }
}
userInfoList()
// 修改信息

const userData = ref<IUserDate[]>([])
interface IUserDate {
  birth?: number
  head?: string
  name?: string
  sex?: 0 | 1 | 2
  addr?: (number | string)[]
}
const sure = async (val: IUserDate) => {
  editData(val)
}
const editData = async (parms: IUserDate) => {
  const res = await userInfoEdit_api({ ...parms })
  if (res.status == 1) {
    userInfoList()
    userShow.value = false
  }
}

const userShow = ref(false)
const changeUp = ref('')

const goEdit = (key: string) => {
  changeUp.value = key
  userShow.value = true
}

// 修改头像
const KzImgUploadRef = ref()
const changes = () => {
  imgUrl.value = KzImgUploadRef.value.imgs[0].url
  KzImgUploadRef.value.submit()
}
const upLoading = ref(false)
const imgUrl = ref('')
const upSuccess = (url: string, length: number) => {
  upLoading.value = true
  imgUrl.value = url
  console.log(url, length)
  setTimeout(() => {
    // 发请求
    editData({ head: url }).finally(() => {
      upLoading.value = false
    })
  }, 1000)
}
// 会员信息
const uMember = ref<any>('')
const memberimg = ref('')
const userMember = async () => {
  const res = await userMember_api()
  if (res.status === 1) {
    uMember.value = res.body
    console.log(uMember.value[1])
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
// 退出企业
const quitShow = ref(false)
const quitMsg = ref(
  '退出企业后将不再能够使用该企业所有的产品与服务，请务必谨慎操作建议与企业管理员确认后再退出'
)
const quitCompany = () => {
  quitShow.value = true
}
</script>

<style lang="scss" scoped>
.my_info_page {
  height: 100%;
  .info_content {
    margin-left: 16px;
    height: 100%;
    .conten_item {
      background-color: #fff;
      border-radius: 8px;
      .card_container {
        width: 1012px;
        background: #ffffff;
        .card_content {
          width: 800px;
          margin: 0 auto;
          padding-bottom: 56px;
          .user_avater {
            width: 96px;
            height: 96px;
            border: 1px solid #eeeeee;
            margin: 30px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            .up_avatar {
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 1;
            }
            :deep(.el-upload) {
              border-radius: 50%;
              border: none;
              position: relative;
              &:hover::after {
                content: '修改头像';
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
          .info_txt {
            display: flex;
            flex-direction: row;
            margin-bottom: 36px;
            .infoname {
              width: 500px;
              display: flex;
              flex-direction: row;
              .u_label {
                width: 270px;
                margin-right: 40px;
                font-size: 14px;
                font-weight: 500;
                color: #909399;
                display: flex;
                justify-content: flex-end;
              }
              .infoname_txt {
                margin-right: 12px;
                font-size: 14px;
                font-weight: 500;
                color: #303133;
              }
              .u_tips {
                font-size: 12px;
                color: #909399;
                height: 15px;
                line-height: 15px;
              }
            }
            .handle {
              width: 260px;
              font-size: 14px;
              display: flex;
              flex-direction: row;
              // font-weight: 400;
              // color: #2150EC;
              .el-link {
                margin-right: 16px;
              }
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }

    .conten_item3 {
      .active_c {
        margin-right: 8px;
      }
    }
  }
}
.icon {
  margin-left: 8px;
}
</style>
