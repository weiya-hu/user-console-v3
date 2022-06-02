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
        <div class="layout_top_middle fcs">
          <div class="vline"></div>
          <KzIcon href="#icon-banbenqiehuan-tuandui" size="16px" />
          <el-dropdown>
            <div class="fcs icon_rotate">
              <span class="now_identity">康州数智科技</span>
              <KzIcon href="#icon-xiala-shouqitianchong" size="16px" />
            </div>
            <template #dropdown>
              <div class="user_identity">
                <div class="user_self">
                  <div class="identity_title fcs">
                    <KzIcon href="#icon-banbenqiehuan-geren" size="12px" />
                    <div>个人版</div>
                  </div>
                  <div class="identity_item els">
                    康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技
                  </div>
                </div>
                <div class="company_self">
                  <div class="identity_title fsc">
                    <div class="fcs">
                      <KzIcon href="#icon-banbenqiehuan-tuandui" size="12px" />
                      <div>企业版</div>
                    </div>
                    <el-link type="primary" @click="addCompanyShow = true"
                      ><el-icon color="#2D68EB" size="14px"><Plus /></el-icon>新建企业</el-link
                    >
                  </div>
                  <div class="identity_item els">
                    康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技
                  </div>
                  <div class="identity_item els">
                    康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技
                  </div>
                  <div class="identity_item els">
                    康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技康州数智科技
                  </div>
                </div>
              </div>
            </template>
          </el-dropdown>
        </div>
        <div class="layout_top_rt fcs f1 fjend">
          <div class="top_links fcs">
            <el-button class="mr20" @click="showDemo">上传demo</el-button>
            <el-link class="mr20" @click="$router.push('/console')">控制台</el-link>
            <el-link :href="'//' + yxtUrl.offical" target="_blank">官网</el-link>
          </div>
          <div class="vline"></div>
          <div class="user_box fcs">
            <el-avatar :size="36" :src="df_avatar_i" />
            <el-popover :show-arrow="false" width="316px" popper-class="user_drop">
              <template #reference>
                <div class="fcs pl16 icon_rotate">
                  <div class="user_name els">
                    康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州
                  </div>
                  <KzIcon href="#icon-shouqi02" size="16px" />
                </div>
              </template>
              <div class="user_drop_info fc">
                <div class="fcs fjend">
                  <div class="tags fcc">
                    <img :src="user_general_i" alt="" />
                  </div>
                  <div class="tags fcc">
                    <img :src="real_name_i" alt="" />
                  </div>
                </div>
                <div class="fcc fc user_avatar">
                  <el-avatar :size="64" :src="df_avatar_i" />
                  <div class="user_name1 els">
                    康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州
                  </div>
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
          class="layout_content"
          :class="{ layout_details_page: $route.path !== '/console', layout_content_big: isSmall }"
        >
          <KzDetailsHeader v-if="$route.path !== '/console'" ref="detailsHeaderRef" />
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
          <div class="kz_copyright">
            Copyright © 2022-2023 康洲数智(科技)科技有限公司 | 渝ICP2021012132号-2 | 渝公网安备
            50010802004553号
          </div>
        </el-col>
      </el-row>
    </template>
    <el-skeleton v-else :rows="5" animated />

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

    <el-dialog v-model="addCompanyShow" title="新建企业" width="500px">
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
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { mainStore } from '@/store/index'
import emiter from '@/utils/bus'
import logo_i from '@/assets/images/logo.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import user_general_i from '@/assets/images/user_general.png'
import real_name_i from '@/assets/images/real_name.png'
import { ArrowRight, Plus } from '@element-plus/icons-vue'
import KzLeftNav from '@/components/KzLeftNav.vue'
import KzDetailsHeader from '@/components/KzDetailsHeader.vue'
import { loginOut_api } from '@/api/login'
import { errMsg } from '@/utils'

// demo start

import KzImgUpload from '@/components/KzImgUpload.vue'
import KzUpload from '@/components/KzUpload.vue'
import KzUpAvatar from '@/components/KzUpAvatar.vue'
const upImgRef = ref()
const upDemoShow = ref(false)
const imgsList = ref<string[]>([])
const showDemo = () => {
  imgsList.value = [
    // 'https://res.kzszh.com/dev/web/index/image/f21b635833aaf9ef4f4179e415988102.png',
    // 'https://res.kzszh.com/dev/web/index/image/736612fc47abb31fbab2bfdf3d67ba1a.png',
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

const addCompanyShow = ref(false)
const addCompanyLoading = ref(false)
const addCompanyFormRef = ref()
const addCompanyLogoUpRef = ref()
const addCompanyForm = ref({
  logo: '',
  name: '',
})
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

const user_btns = [
  { text: '用户中心', icon: '#icon-banbenqiehuan-geren', url: '/manage/user' },
  { text: '反馈', icon: '#icon-pinglun', url: '/console' },
  { text: '退出登录', icon: '#icon-tuichu', url: 'login_out' },
]
const handUserBtn = (url: string) => {
  if (url === 'login_out') {
    loginOut_api().then(() => {
      store.setUserinfo(true)
      router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
    })
    return
  }
  router.push(url)
}

const store = mainStore()
store.getTypeList()
store.getAddressList()

const isLogin = computed(() => {
  if (store.state.userInfo.id) {
    return true
  }
  router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
  return false
})

const route = useRoute()
const router = useRouter()
const routers = router.getRoutes()
const leftNavRef = ref()
const detailsHeaderRef = ref()
onBeforeRouteUpdate((to, from) => {
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
onMounted(() => {
  leftNavRef.value && leftNavRef.value.getSecNav(route.meta.father || route.path)
})
const isSmall = ref(false)
const onChangeLeftNav = (flag: boolean) => {
  isSmall.value = flag
}

//获取跳转地址
const yxtUrl = ref<Record<string, string>>({})
store.getYxtUrl().then((url: Record<string, string>) => {
  yxtUrl.value = url
})

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
        position: relative;
        z-index: 11;
      }
      .kz_copyright {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translate(-50%, 0);
        word-break: keep-all;
        white-space: nowrap;
        z-index: 0;
        font-size: 11px;
        color: #c0c4cc;
      }
      &.layout_details_page {
        padding-top: 40px;
      }
      &.layout_content_big {
        max-width: calc(100% - 64px);
      }
    }
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
</style>
