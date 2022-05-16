<template>
  <div class="layout_page">
    <template v-if="isLogin">
      <el-row class="layout_top fcs">
        <div class="layout_top_lt fcs">
          <div class="all_nav_btn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-suoyouchanpin"></use>
            </svg>
          </div>
          <img :src="logo_i" alt="加载失败" class="logo" />
        </div>
        <div class="layout_top_middle fcs">
          <div class="vline"></div>
          <svg class="icon identity_icon" aria-hidden="true">
            <use xlink:href="#icon-banbenqiehuan-tuandui"></use>
          </svg>
          <el-dropdown>
            <div class="fcs">
              <div class="now_identity">康州数智科技</div>
              <svg class="icon fz16" aria-hidden="true">
                <use xlink:href="#icon-xiala-shouqitianchong"></use>
              </svg>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>1 1</el-dropdown-item>
                <el-dropdown-item>2 2</el-dropdown-item>
                <el-dropdown-item>3 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="layout_top_rt fcs f1 fjend">
          <div class="top_links fcs">
            <el-button class="mr20" @click="upDemoShow = true">上传demo</el-button>
            <el-link class="mr20" @click="$router.push('/console')">控制台</el-link>
            <el-link :href="'//' + urlInfo.offical" target="_blank">官网</el-link>
          </div>
          <div class="vline"></div>
          <div class="user_box fcs">
            <el-avatar :size="36" :src="df_avatar_i" />
            <el-popover :show-arrow="false" width="316px">
              <template #reference>
                <div class="fcs pl16">
                  <div class="user_name els">
                    康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州
                  </div>
                  <svg class="icon fz16" aria-hidden="true">
                    <use xlink:href="#icon-shouqi02"></use>
                  </svg>
                </div>
              </template>
              <div class="user_info" @click="loginOut">康州</div>
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

    <el-dialog v-model="upDemoShow" title="上传demo">
      <KzImgUpload
        v-if="upDemoShow"
        ref="upImgRef"
        :max="3"
        msg="上传demo"
        @up-all-success="upAll"
        @error="upImgError"
        :img-list="imgsList"
      />
      <el-button class="mb20" @click="upImg">上传</el-button>
      <el-button class="mb20" @click="clearImg">清除</el-button>
      <KzUpload ref="upRef" v-model="fileName" @error="upError" @success="upSuccess" />
      <el-button class="mt20" @click="upImg1">上传</el-button>
      <el-button class="mt20" @click="clearUp">清除</el-button>
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
import KzLeftNav from '@/components/KzLeftNav.vue'
import KzDetailsHeader from '@/components/KzDetailsHeader.vue'
import { loginOut_api } from '@/api/login'

import KzImgUpload from '@/components/KzImgUpload.vue'
import KzUpload from '@/components/KzUpload.vue'
const upImgRef = ref()
const upDemoShow = ref(false)
const imgsList = ref([
  'https://res.kzszh.com/dev/web/index/image/f21b635833aaf9ef4f4179e415988102.png', 
  'https://res.kzszh.com/dev/web/index/image/c942c61ac09d4a582a43d7a8a3d986c0.png'
])
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

const store = mainStore()
store.setTypeList()
store.setAddressList()

const isLogin = computed(() => {
  if (store.state.userInfo.id) {
    return true
  }
  router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
  return false
})

const loginOut = () => {
  loginOut_api().then(() => {
    sessionStorage.removeItem('islogin')
    router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
  })
}

const route = useRoute()
const router = useRouter()
const routers = router.getRoutes()
const leftNavRef = ref()
const detailsHeaderRef = ref()
onBeforeRouteUpdate((to, from) => {
  leftNavRef.value.getSecNav(to.meta.father || to.path)
  leftNavRef.value.changeFlag(to.path === '/console' ? false : true)
  detailsHeaderRef.value && detailsHeaderRef.value.getCrumbs(to)

  if (from.meta.keepAlive && to.meta.father == from.path) {
    // 从列表进入详情 缓存列表
    store.setKeepList([from.name as string])
  } else if (to.meta.keepAlive && from.meta.father == to.path) {
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
const urlInfo = ref<any>({})
store.getYxtUrl().then((url: any) => {
  urlInfo.value = url
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
      .identity_icon {
        font-size: 16px;
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
</style>
