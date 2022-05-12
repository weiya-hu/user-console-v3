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
              <div class="user_avater" v-loading="upLoading">
                <KzMediaUpload
                  @change="changes"
                  ref="kzMediaUploadRef"
                  @up-one-success="upSuccess"
                  v-if="!upLoading"
                >
                  <el-avatar :size="100" :src="imgUrl"></el-avatar>
                </KzMediaUpload>
                <el-avatar :size="100" :src="imgUrl" class="up_avatar" v-else></el-avatar>
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
                  <div class="infoname_txt">未实名</div>
                  <el-icon color="#FF4736 "><Warning /></el-icon>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="">实名认证</el-link>
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
                  <div class="infoname_txt">重庆市南岸区</div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="goEdit('addr')">修改</el-link>
                </div>
              </div>
              <div class="info_txt fsc">
                <div class="infoname">
                  <span class="u_label">我的邀请码</span>
                  <div class="infoname_txt">{{ userInfoDate.invite_code }}</div>
                  <span class="u_tips">*不可修改</span>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="copyCode(userInfoDate.invite_code)">复制</el-link>

                  <el-popover placement="right" trigger="click" :teleported="false">
                    <template #reference>
                      <el-link type="primary" class="qc_handle" @click="goCode">生成二维码</el-link>
                    </template>
                    <div class="fcc" v-if="codeShow">
                      <qrcode-vue
                        :value="
                          'https://' +
                          loginUrl +
                          '/cms_resource.html?&invite_code=' +
                          userInfoDate.invite_code
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
                  <span class="u_label">邀请者</span>
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
                  <el-link type="primary" @click="">查看</el-link>
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
                  <span class="u_label">
                    <img class="active_c" :src="icon_company" alt="" />
                    企业名称</span
                  >
                  <div class="infoname_txt">123</div>
                </div>
                <div class="handle">
                  <el-link type="primary" @click="">管理</el-link>
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

        <el-button-group class="btn_tab">
          <el-button :class="tab == 1 && 'btn_tab_active'" @click="tab = 1">文章</el-button>
          <el-button :class="tab == 2 && 'btn_tab_active'" @click="tab = 2">视频</el-button>
          <el-button :class="tab == 3 && 'btn_tab_active'" @click="tab = 3">视频</el-button>
        </el-button-group>
        <div class="mt20">
          <el-button type="info" plain>kkkk</el-button>
          <el-button class="bdc_btn">kkkk</el-button>
          <el-button type="primary">kkkk</el-button>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import KzEditInfo from '@/components/KzEditInfo.vue'
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
import KzMediaUpload from '@/components/KzMediaUpload.vue'
import { mainStore } from '@/store/index'
const store = mainStore()
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
const kzMediaUploadRef = ref()
const changes = () => {
  imgUrl.value = kzMediaUploadRef.value.imgs[0].url
  kzMediaUploadRef.value.submit()
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
    alert('该浏览器不支持自动复制')
  }
}
const qcsize = 100
const codeShow = ref(false)
const goCode = () => {
  codeShow.value = true
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
        height: 650px;
        background: #ffffff;
        .card_content {
          width: 800px;
          margin: 0 auto;
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
          }
        }
      }
    }
    .conten_item1 {
      height: 672px;
    }
    .conten_item2 {
      height: 306px;
      .u_tag {
      }
    }
    .conten_item3 {
      height: 308px;
      .active_c {
        margin-right: 8px;
      }
    }
  }
}
</style>
