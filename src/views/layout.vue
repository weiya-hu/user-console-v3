<template>
  <div class="layout_page">
    <template v-if="isLogin">
      <el-row class="layout_top fcs">
        <div class="layout_top_lt fcs">
          <div class="all_nav_btn">
            <KzIcon href="#icon-suoyouchanpin" />
          </div>
          <img :src="logo_i" alt="加载失败" class="logo" />
        </div>
        <div v-if="userCompanyList.user" class="layout_top_middle fcs">
          <div class="vline"></div>
          <KzIcon
            :href="
              nowIdentity.iconType === 'user'
                ? '#icon-banbenqiehuan-geren'
                : '#icon-banbenqiehuan-tuandui'
            "
            size="16px"
            color="#909399"
          />
          <el-dropdown>
            <div class="fcs icon_rotate">
              <span class="now_identity">{{ nowIdentity.name }}</span>
              <KzIcon href="#icon-xiala-shouqitianchong" size="16px" />
            </div>
            <template #dropdown>
              <div class="user_identity">
                <div class="user_self">
                  <div class="identity_title fcs">
                    <KzIcon href="#icon-banbenqiehuan-geren" size="12px" />
                    <div>个人版</div>
                  </div>
                  <div class="identity_item els" @click="changeIdentity(userCompanyList.user)">
                    {{ userCompanyList.user.name }}
                  </div>
                </div>
                <div class="company_self">
                  <div class="identity_title fsc">
                    <div class="fcs">
                      <KzIcon href="#icon-banbenqiehuan-tuandui" size="12px" />
                      <div>企业版</div>
                    </div>
                    <el-link
                      v-if="userCompanyList.company_list.length < 3"
                      type="primary"
                      @click="$router.push('/manage/user/authentication')"
                    >
                      <el-icon color="#2D68EB" size="14px"><Plus /></el-icon>添加企业</el-link
                    >
                  </div>
                  <div
                    v-for="v in userCompanyList.company_list"
                    :key="v.id"
                    class="identity_item els"
                    @click="changeIdentity(v)"
                  >
                    {{ v.name }}
                  </div>
                </div>
              </div>
            </template>
          </el-dropdown>
        </div>
        <div class="layout_top_rt fcs f1 fjend">
          <div class="top_links fcs">
            <!-- <el-button class="mr20" @click="showDemo">上传demo</el-button> -->
            <el-link class="mr20" @click="$router.push('/console')">控制台</el-link>
            <el-link :href="'//' + yxtUrl.offical" target="_blank">官网</el-link>
          </div>
          <div class="vline"></div>
          <div class="user_box fcs">
            <el-avatar :size="36" :src="userInfo.head || df_avatar_i" />
            <el-popover
              v-if="memberList.length && userInfo.level"
              :show-arrow="false"
              width="316px"
              popper-class="user_drop"
            >
              <template #reference>
                <div class="fcs pl16 icon_rotate">
                  <div class="user_name els">{{ userInfo.name }}</div>
                  <KzIcon href="#icon-shouqi02" size="16px" />
                </div>
              </template>
              <div class="user_drop_info fc">
                <div class="fcs fjend">
                  <div class="tags fcc">
                    <img
                      :src="memberList.find((v) => Number(v.id) === userInfo.level)?.icon"
                      alt=""
                    />
                  </div>
                  <div
                    class="tags fcc"
                    :class="!userInfo.real_name && 'real_name_btn'"
                    @click="!userInfo.real_name && $router.push('/manage/user/realname')"
                  >
                    <img v-if="userInfo.real_name" :src="real_name_i" alt="" />
                    <div v-else class="real_name_text">实名认证</div>
                  </div>
                </div>
                <div class="fcc fc user_avatar">
                  <el-avatar :size="64" :src="userInfo.head || df_avatar_i" />
                  <div class="user_name1 els">{{ userInfo.name }}</div>
                </div>
                <div class="user_btns f1 fc fjend">
                  <div
                    v-for="v in user_btns"
                    :key="v.url"
                    class="fsc user_btns_item"
                    @click="handUserBtn(v.url)"
                  >
                    <div class="fcc">
                      <KzIcon size="16px" :href="v.icon" />
                      <div class="btn_text">{{ v.text }}</div>
                    </div>
                    <el-icon v-if="v.url !== 'login_out'" size="16px"><ArrowRight /></el-icon>
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
      </el-row>
      <el-row class="layout_container">
        <el-col class="layout_nav" :class="isSmall && 'no_sec'">
          <KzLeftNav ref="leftNavRef" @change="onChangeLeftNav" />
        </el-col>
        <el-col
          v-if="
            $route.path.includes('/product/') && $route.meta.insPower && (!$route.query.insid || noInsPower || !cInsList.length ||cInsList.findIndex((v) => v.insid === Number($route.query.insid)) === -1)
          "
          class="layout_content"
        >
          <el-scrollbar :noresize="true">
            <KzIntroduction
              :product="nowProduct"
              :show-msg="noInsPower ? true : !switchShow"
              :type="noInsPower ? 3 : insList && insList.length ? 2 : 1"
              :show-change="cInsList.length > 1"
              @change-ins="switchIns"
            />
          </el-scrollbar>
        </el-col>
        <el-col
          v-else
          class="layout_content"
          :class="{ layout_details_page: $route.path !== '/console', layout_content_big: isSmall }"
        >
          <div v-if="$route.path !== '/console'" class="fsc layout_content_page_top">
            <KzDetailsHeader ref="detailsHeaderRef" />
            <div v-if="$route.path.includes('/product/') && cInsList.length" class="fcs">
              <div class="fcs">
                <img
                  :src="nowIdentity.iconType === 'user' ? no_company_i : is_company_i"
                  alt=""
                  style="width: 16px; height: 16px; margin-right: 4px"
                />
                <div>{{ nowIdentity.name }}</div>
              </div>
              <div class="vline"></div>
              <el-dropdown @command="changeEdition">
                <div class="fcs">
                  <div class="now_edition">
                    {{ cInsList.find((v) => v.insid === Number($route.query.insid))?.name }}
                  </div>
                  <el-icon size="14px"><arrow-down /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item v-for="v in cInsList" :key="v" :command="v">
                      <div
                        class="ins_edition_dot"
                        :class="Number($route.query.insid) === v.insid && 'active'"
                      ></div>
                      <div>{{ v.name }}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>

          <div v-if="$route.meta.scroll" class="layout_content_box" style="height: 100%">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
          <el-scrollbar v-else wrap-class="layout_content_box" :noresize="true">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </el-scrollbar>
        </el-col>
      </el-row>
      <div class="kz_copyright">
        Copyright © 2022-2023 康洲数智(科技)科技有限公司 | 渝ICP2021012132号-2 | 渝公网安备
        50010802004553号
      </div>
    </template>
    <el-skeleton v-else :rows="5" animated />

    <KzDialog
      v-model="editionChangeShow"
      title="切换企业版本数据"
      :msg="'切换后页面会重新加载，是否切换至“ ' + editionChangeItme.name + ' ”'"
      @sure="sureChangeEdition"
    />

    <el-dialog
      v-model="switchShow"
      title="选择版本"
      width="30%"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <el-radio-group v-model="changeInsid">
        <el-radio v-for="v in cInsList" :key="v.insid" :label="v.insid">{{ v.name }}</el-radio>
      </el-radio-group>
      <template #footer>
        <el-button type="primary" :disabled="!changeInsid" @click="selectIns">确定</el-button>
      </template>
    </el-dialog>

    <el-image-viewer
      v-if="imgShow"
      :url-list="showImgs"
      :initial-index="showImgIndex"
      @close="imgShow = false"
    />

    <el-dialog
      v-model="lookShow"
      title="查看视频"
      width="60%"
      custom-class="view_videobox"
      @close="lookVideo = ''"
    >
      <video :src="lookVideo" controls class="show_video"></video>
    </el-dialog>

    <el-dialog v-model="addCompanyShow" title="新建企业" width="500px" @close="closeAddCompany">
      <el-form
        ref="addCompanyFormRef"
        v-loading="addCompanyLoading"
        :model="addCompanyForm"
        :rules="addCompanyRules"
        hide-required-asterisk
        label-width="85px"
      >
        <el-form-item label="企业logo：" prop="logo">
          <KzImgUpload
            v-if="addCompanyShow"
            ref="addCompanyLogoUpRef"
            :max="1"
            @change="onAddCompanyLogoUpChange"
            @up-all-success="onAddCompanyLogoUpSuccess"
            @error="onAddCompanyLogoUpError"
          />
        </el-form-item>
        <el-form-item label="企业名称：" prop="name">
          <el-input v-model="addCompanyForm.name" placeholder="请输企业名称"></el-input>
        </el-form-item>
        <div class="fcs fjend pb20">
          <el-button @click="addCompanyShow = false">取消</el-button>
          <el-button type="primary" @click="onAddCompanySubmit">保存</el-button>
        </div>
      </el-form>
    </el-dialog>

    <el-dialog v-model="upDemoShow" title="上传demo" width="70%">
      <KzImgUpload
        v-if="upDemoShow"
        ref="upImgRef"
        :max="3"
        msg="上传demo"
        :img-list="imgsList"
        @up-all-success="upAll"
        @error="upImgError"
      />
      <el-button class="mb20" @click="upImg">上传</el-button>
      <el-button class="mb20" @click="clearImg">清除</el-button>
      <KzUpload ref="upRef" v-model="fileName" @error="upError" @success="upSuccess" />
      <el-button class="mt20" @click="upImg1">上传</el-button>
      <el-button class="mt20" @click="clearUp">清除</el-button>

      <KzUpAvatar ref="KzUpAvatarRef" v-model="demoAvatar" @success="onAvatarSuceess" />
      <el-button class="mt20" @click="upImg3">上传</el-button>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate, RouteLocationNormalizedLoaded } from 'vue-router'
import { mainStore } from '@/store/index'
import emiter from '@/utils/bus'
import logo_i from '@/assets/images/logo.png'
import df_avatar_i from '@/assets/images/dfavatar.svg'
import real_name_i from '@/assets/images/real_name.svg'
import { ArrowRight, Plus } from '@element-plus/icons-vue'
import KzLeftNav from '@/components/KzLeftNav.vue'
import KzDetailsHeader from '@/components/KzDetailsHeader.vue'
import { loginOut_api } from '@/api/login'
import { errMsg, warnMsg } from '@/utils'
import { changeIdentity_api } from '@/api/index'
import { ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import KzDialog from '@/components/KzDialog.vue'
import KzIntroduction from '@/components/KzIntroduction.vue'
import is_company_i from '@/assets/images/is_company.svg'
import no_company_i from '@/assets/images/no_company.svg'

// demo start
import KzImgUpload from '@/components/KzImgUpload.vue'
import KzUpload from '@/components/KzUpload.vue'
import KzUpAvatar from '@/components/KzUpAvatar.vue'
const upImgRef = ref()
const upDemoShow = ref(false)
const imgsList = ref<string[]>([])
const showDemo = () => {
  imgsList.value = [
    'https://res.kzszh.com/dev/web/index/image/f21b635833aaf9ef4f4179e415988102.png',
    'https://res.kzszh.com/dev/web/index/image/736612fc47abb31fbab2bfdf3d67ba1a.png',
  ]
  upDemoShow.value = true
}
const upAll = (files: string[]) => {
  // files 上传成功后的图片地址数组
  console.log(files)
}
const upImgError = (err: any) => {
  console.log(err)
}
const upImg = () => {
  upImgRef.value.submit()
}
const clearImg = () => {
  imgsList.value.length = 0 // 有默认上传图片的时候需要在父组件手动清空默认图片
  upImgRef.value.clear()
}

const fileName = ref('')
const upRef = ref()
const upImg1 = () => {
  upRef.value.submit()
}
const clearUp = () => {
  upRef.value.clear()
}
const upError = (err: any) => {
  console.log(err)
}
const upSuccess = (url: string) => {
  console.log(url)
}

const KzUpAvatarRef = ref()
const demoAvatar = ref('')
setTimeout(() => {
  demoAvatar.value =
    'https://res.kzszh.com/dev/web/index/image/736612fc47abb31fbab2bfdf3d67ba1a.png'
}, 2000)
const upImg3 = async () => {
  KzUpAvatarRef.value.upload()
}
const onAvatarSuceess = () => {
  // 头像上传成功
  console.log(demoAvatar.value)
}

// demo end

const leftNavRef = ref()
const detailsHeaderRef = ref()

const route = useRoute()
const router = useRouter()
const store = mainStore()

store.getTypeList()
store.getAddressList()

store.getCAndC()
store.getCountryList()

store.getYxtUrl()
const yxtUrl = computed(() => store.state.yxtUrl)

const userInfo = computed(() => store.state.userInfo)
const isLogin = computed(() => {
  if (store.state.userInfo.id) {
    return true
  }
  router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
  return false
})

store.getMemberList()
const memberList = computed(() => store.state.memberList)

store.setUserCompany()
const userCompanyList = computed(() => store.state.userCompany)
const nowIdentity = computed(() => store.state.nowUserIdentity)
const changeIdentity = (item: IKzObj) => {
  ElMessageBox.confirm(
    '切换版本后页面会重新加载，是否切换版本至“ ' + item.name + ' ”？',
    '版本切换',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'info',
    }
  )
    .then(async () => {
      const res = await changeIdentity_api({ cid: item.id })
      if (res.status === 1) {
        window.location.href = window.location.origin + '/console'
      }
    })
    .catch(() => {})
}

// 新增企业start
const addCompanyShow = ref(false)
const addCompanyLoading = ref(false)
emiter.on('addCompany', () => {
  addCompanyShow.value = true
})
const addCompanyFormRef = ref()
const addCompanyLogoUpRef = ref()
const addCompanyForm = ref({
  logo: '',
  name: '',
})
const closeAddCompany = () => {
  addCompanyFormRef.value.resetFields()
  addCompanyForm.value.logo = ''
  addCompanyForm.value.name = ''
}
const validateLogo = (rule: any, value: any, callback: any) => {
  if (addCompanyLogoUpRef.value.imgs.length) {
    callback()
  } else {
    callback(new Error('请添加企业logo！'))
  }
}
const addCompanyRules = ref({
  logo: [{ validator: validateLogo, trigger: 'change' }],
  name: [{ required: true, message: '请输入企业名称！', trigger: 'blur' }],
})
const onAddCompanySubmit = () => {
  // 点击保存时
  addCompanyFormRef.value!.validate((valid: boolean) => {
    if (valid) {
      addCompanyLoading.value = true
      addCompanyLogoUpRef.value.submit()
    }
  })
}
const onAddCompanyLogoUpChange = () => {
  // logo 改变时
  addCompanyFormRef.value.clearValidate('logo')
}
const onAddCompanyLogoUpSuccess = (urlArr: string[]) => {
  // logo 上传成功时
  addCompanyForm.value.logo = urlArr[0]
  console.log(addCompanyForm.value)
  addCompanyLoading.value = false
}
const onAddCompanyLogoUpError = (err: string) => {
  // logo 上传失败时
  addCompanyLoading.value = false
  errMsg(err)
}
// 新增企业end

const user_btns = [
  { text: '用户中心', icon: '#icon-banbenqiehuan-geren', url: '/manage/user' },
  { text: '反馈', icon: '#icon-pinglun', url: '/console' },
  { text: '退出登录', icon: '#icon-tuichu', url: 'login_out' },
]
const handUserBtn = (url: string) => {
  if (url === 'login_out') {
    loginOut_api().then(() => {
      store.setUserinfo(true)
      window.location.replace(
        '/login?url=' + encodeURIComponent(window.location.origin + '/console')
      )
    })
    return
  }
  router.push(url)
}

// 切换实例版本start
const editionChangeShow = ref(false)
const editionChangeItme = ref<Record<string, string | number>>({})
const changeEdition = (value: any) => {
  if (Number(route.query.insid) === value.insid) {
    return
  }
  editionChangeItme.value = value
  editionChangeShow.value = true
}
const sureChangeEdition = () => {
  window.location.replace(`/product/${nowProduct.value}?insid=` + editionChangeItme.value.insid)
}
const switchShow = ref(false)
const changeInsid = ref(0)
const selectIns = () => {
  if (changeInsid.value) {
    if (changeInsid.value === Number(route.query.insid)) {
      switchShow.value = false
      warnMsg('已经是当前版本')
    } else {
      window.location.replace(`/product/${nowProduct.value}?insid=` + changeInsid.value)
    }
  }
}
const switchIns = () => {
  changeInsid.value = Number(route.query.insid)
  switchShow.value = true
}

const hasInsPower = (nowRoute: RouteLocationNormalizedLoaded) => {
  if (nowRoute.meta.insPower && nowRoute.query.insid) {
    const nowInsPowerList = computed(
      () => store.state.insPowerListInfo[nowRoute.query.insid as string]
    )
    if (!nowInsPowerList.value) {
      noInsPower.value = false
      return
    }
    if (!nowInsPowerList.value.includes(nowRoute.meta.insPower)) {
      noInsPower.value = true
      // ElMessageBox.alert('当前身份/版本无此权限。', '温馨提示', {
      //   confirmButtonText: '关闭',
      //   type: 'error',
      //   callback: () => null,
      // })
      return
    }
    noInsPower.value = false
    return
  }
  noInsPower.value = false
}
store.setInstance().then(() => {
  if (route.path.includes('/product/')) {
    nowProduct.value = route.path.split('/')[2]
    const oneInsid = changeIns(route)
    if (oneInsid) {
      router.replace({
        replace: true,
        path: route.path,
        query: {
          ...route.query,
          insid: oneInsid,
        },
      })
    }
    hasInsPower(route)
  }
})
const nowProduct = ref('') // 当前产品 'dmp'/'cms'...
const insListInfo = computed(() => store.state.insListInfo)
const insList = computed(() => insListInfo.value[nowProduct.value])
const cInsList = computed(() =>
  insListInfo.value[nowProduct.value]
    ? insListInfo.value[nowProduct.value].filter((v) => v.valid === 1)
    : []
) // 没过期的实例列表
const insid = ref('')
const noInsPower = ref(false) // 实例没有权限

const changeIns = (nRoute: RouteLocationNormalizedLoaded) => {
  const setIns = () => {
    if (cInsList.value.length > 1) {
      switchShow.value = true
    } else {
      insid.value = nRoute.query.insid as string
      return cInsList.value[0].insid
    }
  }
  if (!nRoute.query.insid) {
    if (!cInsList.value || !cInsList.value.length) {
      // 没有实例的情况
      insid.value = ''
      return
    }
    return setIns()
  }
  if (!cInsList.value || !cInsList.value.length) {
    // 没有实例的情况
    insid.value = ''
    return
  }
  if (
    cInsList.value &&
    cInsList.value.findIndex((v) => v.insid === Number(nRoute.query.insid)) === -1
  ) {
    // 地址栏有insid但是insid错误的情况
    return setIns()
  }
  insid.value = nRoute.query.insid as string
}
// 切换实例版本end

// const routes = router.getRoutes()
onBeforeRouteUpdate((to, from) => {
  if (to.path.includes('/product/')) {
    const toPathArr = to.path.split('/')
    const fromPathArr = from.path.split('/')
    nowProduct.value = toPathArr[2]
    if (toPathArr[2] !== fromPathArr[2]) {
      // 即类似dmp切换到cms，清空insid
      insid.value = ''
    }
    if (!from.path.includes('/product/') || toPathArr[2] !== fromPathArr[2]) {
      const oneInsid = changeIns(to)
      if (oneInsid) {
        return {
          replace: true,
          path: to.path,
          query: {
            ...to.query,
            insid: oneInsid,
          },
        }
      }
    }
    if (insid.value && !to.query.insid) {
      return {
        replace: true,
        path: to.path,
        query: {
          ...to.query,
          insid: insid.value,
        },
      }
    }
    // hasInsPower(to)
  }

  leftNavRef.value.getSecNav(to.meta.father || to.path)
  leftNavRef.value.changeFlag(to.path === '/console' ? false : true)
  detailsHeaderRef.value && detailsHeaderRef.value.getCrumbs(to)

  if (from.meta.keepAlive && to.meta.father === from.path) {
    // 从列表进入详情 缓存列表
    store.setKeepList([from.name as string])
  } else if (to.meta.keepAlive && from.meta.father === to.path) {
    // 从详情返回上一级 什么都不做
  } else {
    // 兄弟列表切换 或者 详情进入非父级列表
    store.setKeepList([])
  }
})

router.afterEach((to) => {
  if (to.path.includes('/product/')) {
    hasInsPower(to)
  }
})

onMounted(() => {
  leftNavRef.value && leftNavRef.value.getSecNav(route.meta.father || route.path)
})
const isSmall = ref(false)
const onChangeLeftNav = (flag: boolean) => {
  isSmall.value = flag
}

const showImgs = ref<string[]>([]) //预览图片列表
const imgShow = ref(false) //预览是否显示
const showImgIndex = ref(0) //首张预览图片
emiter.on('lookImage', ({ imgs, index }: { imgs: string[]; index: number }) => {
  imgShow.value = true
  showImgs.value = imgs
  showImgIndex.value = index
})

const lookShow = ref(false)
const lookVideo = ref('')
emiter.on('lookVideo', (video: string) => {
  lookVideo.value = video
  lookShow.value = true
})
</script>

<style lang="scss" scoped>
:global(html) {
  min-width: 1440px;
  overflow-y: hidden;
}
:global(body) {
  min-width: 1440px;
  overflow-y: hidden;
}
.layout_page {
  height: 100%;
  .layout_top {
    height: 64px;
    border-bottom: 1px solid $colorddd;
    z-index: 3;
    padding-right: 32px;
    .layout_top_lt {
      width: 220px;
      padding-left: 27px;
      .all_nav_btn {
        margin-right: 24px;
        font-size: 32px;
        cursor: pointer;
      }
      .logo {
        width: 108px;
        height: 24px;
      }
    }
    .layout_top_middle {
      .vline {
        margin-left: 0;
        margin-right: 16px;
      }
      .now_identity {
        margin-left: 8px;
        margin-right: 4px;
        font-size: 16px;
        font-weight: bold;
        color: #303133;
      }
    }
    .layout_top_rt {
      .el-link {
        --el-link-font-size: 16px;
        --el-link-text-color: #333;
      }
      .user_name {
        font-size: 16px;
        color: $color333;
        margin-right: 4px;
        max-width: 100px;
      }
    }
  }
  .layout_container {
    height: calc(100% - 64px);
    z-index: 3;
    .layout_nav {
      height: 100%;
      width: 220px;
      flex: 0 0 220px;
      background-color: #fff;
      transition: width var(--el-transition-duration), flex-basis var(--el-transition-duration);
      &.no_sec {
        width: 64px;
        flex: 0 0 64px;
      }
    }
    .layout_content {
      height: 100%;
      flex: 1;
      max-width: calc(100% - 220px);
      background-color: $bgcolor;
      position: relative;
      transition: max-width var(--el-transition-duration);
      :deep(.layout_content_box) {
        padding: 16px;
      }
      :deep(.no_ins_box) {
        padding: 0;
      }
      &.layout_details_page {
        padding-top: 40px;
      }
      &.layout_content_big {
        max-width: calc(100% - 64px);
      }
      .layout_content_page_top {
        height: 40px;
        width: 100%;
        padding-left: 16px;
        padding-right: 32px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        border-left: 1px solid $coloreee;
        border-bottom: 1px solid $coloreee;
        .now_edition {
          color: $dfcolor;
          margin-right: 4px;
        }
      }
    }
  }
  .kz_copyright {
    position: fixed;
    left: 50%;
    bottom: 16px;
    transform: translate(-50%, 0);
    word-break: keep-all;
    white-space: nowrap;
    z-index: 0;
    font-size: 11px;
    color: #c0c4cc;
  }
}
:deep(.view_videobox) {
  .el-dialog__body {
    padding: 0;
    .show_video {
      width: 100%;
      height: 600px;
    }
  }
}

.user_drop_info {
  width: 316px;
  height: 336px;
  border-radius: 4px;
  overflow: hidden;
  background: url('@/assets/images/user_bg.jpg') no-repeat;
  background-size: 100% auto;
  background-position: 0 0;
  padding-top: 8px;
  line-height: 1;
  .tags {
    background-color: #fff;
    padding: 4px;
    border-radius: 12px;
    margin-right: 8px;
    img {
      width: auto;
      height: 16px;
    }
    .kzicon {
      margin-right: 1px;
    }
  }
  .real_name_btn {
    cursor: pointer;
    .real_name_text {
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      padding: 0 4px;
      color: $dfcolor;
    }
    &:hover {
      background-color: #f3f4f8;
    }
  }
  .user_avatar {
    margin-top: 34px;
    .user_name1 {
      font-size: 18px;
      font-weight: bold;
      margin-top: 12px;
      padding: 0 12px;
      max-width: 100%;
    }
  }
  .user_btns {
    padding: 0 16px 16px;
    color: #606266;
    .btn_text {
      margin-left: 8px;
    }
    .user_btns_item {
      height: 34px;
      padding: 9px 4px 9px 20px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #f3f4f8;
        color: $dfcolor;
      }
    }
  }
}
.user_identity {
  width: 316px;
  padding: 16px 0;
  line-height: 1;
  .identity_title {
    font-size: 12px;
    color: #909399;
    margin-bottom: 14px;
    .kzicon {
      margin-right: 5px;
    }
    .el-icon {
      margin-right: 4px;
    }
  }
  .identity_item {
    height: 34px;
    line-height: 34px;
    padding: 0 8px;
    color: #303133;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: $dfcolor;
      background-color: rgba(45, 105, 235, 0.1);
    }
  }
  .user_self {
    border-bottom: 1px solid #eeeeee;
    padding: 0 16px 8px;
  }
  .company_self {
    padding: 16px 16px 0;
  }
}
.ins_edition_dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  background: #ffffff;
  border: 1px solid #ddd;
  &.active {
    background-color: $dfcolor;
    border: none;
    position: relative;
    &::after {
      content: '';
      background-color: #fff;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      left: 5px;
      top: 5px;
    }
  }
}
</style>
