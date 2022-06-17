<template>
  <div id="kz_left_nav_box" :class="flag && 'col_nav'" @mouseleave="changeFlag(true)">
    <div class="kz_left_nav" @mouseenter="changeFlag(false)">
      <div class="is_show_icon">
        <KzIcon size="14px" :href="flag ? '#icon-zhankai' : '#icon-shouqi'" />
      </div>

      <el-scrollbar :noresize="true">
        <div class="kz_left_nav_scroll">
          <div
            ref="leftLine"
            class="left_vline"
            :style="{ transform: `translate(0, ${top}px)` }"
          ></div>
          <div
            class="nav_item_lv2"
            :class="nowPath === '/console' && 'kz_active'"
            @click="goRoute('/console', true)"
          >
            <div class="nav_icon">
              <KzIcon href="#icon-lanmu-kongzhitai" />
            </div>
            <transition name="el-fade-in-linear">
              <div v-show="!flag" class="nav_text nowrap">控制台</div>
            </transition>
          </div>

          <div v-for="v in navRoutes" :key="v.name" class="nav_item_lv1">
            <div class="nav_item_lv1_title">
              <transition name="el-fade-in-linear">
                <div v-show="!flag" class="nowrap">{{v.meta!.title}}</div>
              </transition>
              <transition name="el-fade-in-linear">
                <div v-show="flag" v-if="v.name !== 'Product'" class="hline"></div>
              </transition>
              <div v-if="v.name === 'Product'" class="fcs chover all_btn">
                <transition name="el-fade-in-linear">
                  <div v-show="!flag" class="nowrap all_text">全部</div>
                </transition>
                <el-icon size="16px" class="fs0"><my-icon-menu /></el-icon>
              </div>
            </div>
            <template v-for="j in v.children" :key="j.name">
              <div
                v-if="j.meta?.power ? store.isCanDo(j.meta.power as string) : true"
                class="nav_item_lv2"
                :class="nowPath.indexOf(j.path) > -1 && 'kz_active'"
                @click="goRoute(j.path, false)"
              >
                <div class="nav_icon">
                  <KzIcon :href="j.meta!.icon" />
                </div>
                <transition name="el-fade-in-linear">
                  <div v-show="!flag" class="nav_text nowrap">{{j.meta!.title}}</div>
                </transition>
              </div>
            </template>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div v-show="flag" v-if="secNav" class="kz_sec_nav">
      <div class="sec_title fcs">{{ secNav.meta!.title }}</div>
      <el-scrollbar :noresize="true" style="height: calc(100% - 40px)">
        <el-menu v-if="secNav.children" router :default-active="nowPath">
          <template v-for="v in secNav.children" :key="v.path">
            <el-sub-menu v-if="v.children" :index="v.path">
              <template #title>{{v.meta!.title}}</template>
              <template v-for="j in v.children" :key="j.path">
                <el-menu-item
                  v-if="!j.meta!.father"
                  :index="j.path"
                  >{{j.meta!.title}}</el-menu-item
                >
              </template>
            </el-sub-menu>
            <el-menu-item
              v-if="!v.children && !v.meta!.father"
              :index="v.path"
              >{{v.meta!.title}}</el-menu-item
            >
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 左侧导航
 * @author chn
 */
import { ref, onMounted, nextTick } from 'vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/index'
import { Menu as MyIconMenu } from '@element-plus/icons-vue'
import { mainStore } from '@/store/index'

const route = useRoute()
const navRoutes = routes
  .find((v) => v.name === 'Layout')!
  .children!.filter((v) => v.name !== 'Console')
const flag = ref(false) // 次级导航是否展示 true 展示
flag.value = route.path === '/console' ? false : true
const changeFlag = (show?: boolean) => {
  flag.value = typeof show === 'undefined' ? !flag.value : show
  emit('change', secNav.value ? false : flag.value)
}
// 收缩导航时触发，返回是否需要改变左侧导航的宽
const emit = defineEmits(['change'])

const secNav = ref<RouteRecordRaw>()
const nowPath = ref('')
const getSecNav = (path?: string) => {
  nowPath.value = path ? path : route.path
  changeLeft()
  const fPath = '/' + nowPath.value.split('/')[1]
  const fRoute = navRoutes.find((v) => v.path === fPath)
  if (fRoute) {
    for (let i = 0; i < fRoute.children!.length; i++) {
      if (nowPath.value.indexOf(fRoute.children![i].path) > -1) {
        secNav.value = fRoute.children![i]
        break
      } else {
        secNav.value = undefined
      }
    }
    return
  }
  secNav.value = undefined
}

const router = useRouter()
const store = mainStore()
const goRoute = (path: string, isSmall: boolean) => {
  if (flag.value) {
    emit('change', isSmall)
  }
  router.push(path).then(() => {
    !isSmall && (flag.value = true)
  })
}

const leftLine = ref()
const top = ref(0)
let activeDom
onMounted(() => {
  setTimeout(() => {
    leftLine.value && (leftLine.value.style.transition = 'transform 0.2s')
  }, 500)
  changeLeft()
})
const changeLeft = () => {
  nextTick(() => {
    activeDom = document.querySelector('.kz_active') as HTMLElement
    activeDom && (top.value = activeDom.offsetTop + (activeDom.offsetHeight - 30) / 2)
  })
}

defineExpose({
  getSecNav, // 改变次级导航，在监听路由变化的地方调用
  changeFlag, // 改变是否收缩次级导航
})
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar__bar.is-horizontal) {
  display: none !important;
}
#kz_left_nav_box {
  flex: 1;
  // min-height: calc(100vh - 64px);
  display: flex;
  position: relative;
  height: 100%;
  .is_show_icon {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 25px;
    .text {
      color: #909399;
      margin-right: 9px;
    }
  }
  .kz_left_nav {
    height: 100%;
    font-size: 14px;
    overflow: hidden;
    transition: width var(--el-transition-duration);
    width: 100%;
    flex-shrink: 0;
    position: relative;
    .fold_btn {
      height: 40px;
    }
    .nav_item_lv1 {
      margin-top: 10px;
      .nav_item_lv1_title {
        height: 40px;
        color: #909399;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: default;
        box-sizing: border-box;
      }
      .all_btn {
        padding-left: 16px;
      }
    }
    .nav_item_lv2 {
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      border-radius: 8px;
      background-color: #fff;
      transition: color var(--el-transition-duration),
        background-color var(--el-transition-duration);
      cursor: pointer;
      .nav_icon {
        font-size: 16px;
        margin-right: 8px;
        color: #303133;
      }
      .nav_text {
        color: #606266;
      }
      &:hover {
        background-color: #e8edfd;
        .nav_text {
          color: #303133;
        }
      }
      &.kz_active {
        background-color: $dfcolor;
        .nav_text {
          color: #fff;
        }
        .nav_icon {
          color: #fff;
        }
      }
    }
    .nowrap {
      word-break: keep-all;
    }
    .all_text {
      margin-right: 9px;
      transition: margin-right var(--el-transition-duration-fast);
    }
  }
  .kz_left_nav_scroll {
    transition: padding var(--el-transition-duration-fast);
    padding: 20px 16px 50px;
    position: relative;
  }
  &.col_nav {
    .kz_left_nav {
      width: 64px;
      .kz_left_nav_scroll {
        padding: 20px 8px 50px;
      }
      .nav_item_lv1 {
        .all_text {
          margin-right: 0;
        }
      }
    }
  }
  .hline {
    width: 16px;
    height: 1px;
    background-color: $bdcolor;
    margin-left: 16px;
  }
  .kz_sec_nav {
    flex: 1;
    border-left: 1px solid $bdcolor;
    word-break: keep-all;
    padding: 0 8px;
    padding-bottom: 20px;
    .sec_title {
      height: 40px;
      color: #303133;
      font-weight: bold;
      padding-left: 16px;
    }
    .el-sub-menu .el-menu-item {
      height: 40px;
      line-height: 40px;
      min-width: 100%;
      padding: 0;
      padding-left: 16px !important;
    }
    :deep(.el-sub-menu__title) {
      padding-left: 8px !important;
    }
    .el-menu {
      border-right: none;
      --el-menu-item-height: 40px;
      --el-menu-text-color: #606266;
      --el-menu-active-color: #2150ec;
      --el-menu-hover-bg-color: #e8edfd;
      .el-menu-item {
        border-radius: 8px;
        --el-menu-hover-bg-color: #e8edfd;
        &:hover {
          color: #303133;
          --el-menu-hover-bg-color: #e8edfd;
        }
        &.is-active {
          background-color: #e8edfd;
          font-weight: bold;
          &:hover {
            color: $dfcolor;
          }
        }
      }
      :deep(.el-sub-menu__title:hover) {
        background-color: #fff;
      }
    }
  }
  .left_vline {
    position: absolute;
    width: 4px;
    height: 30px;
    top: 0;
    left: 0;
    background-color: $dfcolor;
    border-radius: 0px 2px 2px 0px;
  }
}
</style>
