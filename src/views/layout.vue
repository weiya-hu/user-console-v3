<template>
  <div class="layout_page">
    <el-row class="layout_top fsc">
      <div class="lt fcs">
        <div class="all_nav_btn"></div>
        <img :src="logo_i" alt="加载失败" class="logo">
      </div>
      <div class="rt fcs">
        <div class="top_links fcs">
          <el-link class="mr20">控制台</el-link>
          <el-link>官网</el-link>
        </div>
        <div class="vline"></div>
        <div class="user_box fcs">
          <el-avatar :size="36" :src="df_avatar_i"/>
          <el-popover :show-arrow="false" width="316px">
            <template #reference>
              <div class="fcs pl16">
                <div class="user_name els">康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州</div>
                <el-icon size="16px"><arrow-down-bold /></el-icon>
              </div>
            </template>
            <div class="user_info">
              康州
            </div>
          </el-popover>
        </div>
      </div>
    </el-row>
    <el-row class="layout_container">
      <el-col class="layout_nav">
        <KzLeftNav/>
      </el-col>
      <el-col class="layout_content">
        <el-scrollbar wrap-class="layout_content_box" :noresize="true">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-scrollbar>
        <div class="kz_copyright">Copyright © 2022-2023 康洲数智(科技)科技有限公司 | 渝ICP2021012132号-2 | 渝公网安备 50010802004553号</div>
      </el-col>
    </el-row>

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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { mainStore } from '@/store/index'
import emiter from '@/utils/bus'
import logo_i from '@/assets/images/logo.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import { ArrowDownBold } from '@element-plus/icons-vue'
import KzLeftNav from '@/components/KzLeftNav.vue';

const store = mainStore()
store.setTypeList()
store.setAddressList()

const route = useRoute()
const router = useRouter()
const routers = router.getRoutes()

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
  .layout_top{
    height: 64px;
    border-bottom: 1px solid $colorddd;
    z-index: 3;
    padding: 0 32px 0 27px;
    .lt{
      .all_nav_btn{
        width: 32px;
        height: 32px;
        background-color: rgba(45,104,235,0.10);
        border-radius: 4px;
        margin-right: 24px;
      }
      .logo{
        width: 126px;
        height: 28px;
      }
    }
    .rt{
      .el-link{
        --el-link-font-size:16px;
        --el-link-text-color:#333;
      }
      .user_name{
        font-size: 16px;
        color: $color333;
        margin-right: 4px;
        max-width: 100px;
      }
    }
  }
  .layout_container{
    height: calc(100% - 64px);
    .layout_nav{
      width: 220px;
      flex: 0 0 220px;
    }
    .layout_content{
      height: 100%;
      flex:1;
      background-color: #F3F4F8;
      position: relative;
      :deep(.layout_content_box){
        padding: 16px;
        position: relative;
        z-index: 1;
      }
      .kz_copyright{
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translate(-50%, 0);
        word-break: keep-all;
        white-space: nowrap;
        z-index: 0;
        font-size: 11px;
        color: #C0C4CC;
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
