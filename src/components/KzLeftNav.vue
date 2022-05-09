<template>
  <div id="kz_left_nav_box" :class="flag&&'col_nav'">
    <div class="left_vline" ref="leftLine" :style="{transform:`translate(0, ${top}px)`}"></div>
    <div class="kz_left_nav">
      <div class="fold_btn fcs fjend">
        <div class="fold_icon chover" @click="changeFlag">1</div>
      </div>
      <div class="nav_item_lv2" @click="goRoute('/console', true)" :class="nowPath === '/console' && 'kz_active'">
        <div class="nav_icon">
          <img src="" alt="">
        </div>
        <transition name="el-fade-in-linear">
          <div class="nav_text nowrap" v-show="!flag">控制台</div>
        </transition>
      </div>
      <div class="nav_item_lv1" v-for="v in navRoutes" :key="v.name">
        <div class="nav_item_lv1_title">
          <transition name="el-fade-in-linear">
            <div class="nowrap" v-show="!flag">{{v.meta!.title}}</div>
          </transition>
          <transition name="el-fade-in-linear">
            <div class="hline" v-show="flag" v-if="v.name !== 'Product'"></div>
          </transition>
          <div class="fcs chover all_btn" v-if="v.name === 'Product'">
            <transition name="el-fade-in-linear">
              <div class="nowrap all_text" v-show="!flag">全部</div>
            </transition>
            <el-icon><my-icon-menu /></el-icon>
          </div>
        </div>
        <div class="nav_item_lv2"  v-for="j in v.children" :key="j.name" @click="goRoute(j.path, false)" :class="nowPath.indexOf(j.path) > -1 && 'kz_active'">
          <div class="nav_icon">
            <img src="" alt="">
          </div>
          <transition name="el-fade-in-linear">
            <div class="nav_text nowrap" v-show="!flag">{{j.meta!.title}}</div>
          </transition>
        </div>
      </div>
    </div>
    <div class="kz_sec_nav" v-show="flag" v-if="secNav">
      <div class="sec_title fcs">{{secNav.meta.title}}</div>
      <el-menu router :default-active="nowPath" v-if="secNav.children">
        <template v-for="v in secNav.children" :key="v.path">
          <el-sub-menu :index="v.path" v-if="v.children">
            <template #title>{{v.meta!.title}}</template>
            <el-menu-item v-for="j in v.children" :index="j.path" :key="j.path">{{j.meta!.title}}</el-menu-item>
          </el-sub-menu>
          <el-menu-item :index="v.path" v-if="!v.children && !v.meta!.father">{{v.meta!.title}}</el-menu-item>
        </template>
      </el-menu>
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
import { routes } from "@/router/index";
import { Menu as MyIconMenu } from '@element-plus/icons-vue'

const navRoutes = routes[1].children!.filter(v => v.name !== 'Console')
const flag = ref(false)
const changeFlag = () => {
  flag.value = !flag.value
  emit('change', secNav.value ? false : flag.value)
}
// 收缩导航时触发，返回是否需要改变左侧导航的宽
const emit = defineEmits(['change'])

const route = useRoute()
const secNav = ref<RouteRecordRaw>()
const nowPath = ref('')
const getSecNav = (path?: string) => {
  nowPath.value = path ? path : route.path
  changeLeft()
  const fPath = '/' + nowPath.value.split('/')[1]
  const fRoute = navRoutes.find(v => v.path === fPath)
  if(fRoute){
    for (let i = 0; i < fRoute.children!.length; i++) {
      if(nowPath.value.indexOf(fRoute.children![i].path) > -1 ){
        secNav.value = fRoute.children![i]
        break
      }else{
        secNav.value = undefined
      }
    }
    return
  }
  secNav.value = undefined
}

const router = useRouter()
const goRoute = (path: string, hasSec: boolean) => {
  router.push(path)
  if(flag.value){
    emit('change', hasSec)
  }
}

const leftLine = ref()
const top = ref(0)
let activeDom
onMounted (() => {
  setTimeout(() => {
    try {
      leftLine.value && (leftLine.value.style.transition = 'transform 0.2s')
    } catch (error) {
      return
    }
  }, 500);
  changeLeft()
});
const changeLeft = () => {
  nextTick(()=>{
    activeDom = document.querySelector('.kz_active') as HTMLElement
    activeDom && (top.value = activeDom.offsetTop + (activeDom.offsetHeight - 30)/2);
  })
}

defineExpose({
  getSecNav, // 改变次级导航，在监听路由变化的地方调用
})

</script>

<style lang="scss" scoped>
#kz_left_nav_box{
  padding-left: 16px;
  padding-right: 8px;
  transition: padding var(--el-transition-duration-fast);
  height: 100%;
  display: flex;
  position: relative;
  .kz_left_nav{
    font-size: 14px;
    overflow: hidden;
    padding-right: 8px;
    transition: width var(--el-transition-duration);
    width: 100%;
    flex-shrink: 0;
    .fold_btn{
      height: 40px;
      .fold_icon{
        width: 16px;
        height: 16px;
        background: #ddd;
      }
    }
    .nav_item_lv1{
      margin-top: 10px;
      .nav_item_lv1_title{
        height: 40px;
        color: #909399;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: default;
        box-sizing: border-box;
      }
      .all_btn{
        padding-left: 17px;
      }
    }
    .nav_item_lv2{
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      border-radius: 8px;
      background-color: #fff;
      transition: color var(--el-transition-duration),background-color var(--el-transition-duration);
      cursor: pointer;
      img{
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
      .nav_text{
        color: #606266;
      }
      &:hover{
        background-color: #E8EDFD;
        .nav_text{
          color: #303133;
        }
      }
      &.kz_active{
        background-color: $dfcolor;
        .nav_text{
          color: #fff;
        }
      }
    }
    .nowrap{
      word-break: keep-all;
    }
    .all_text{
      margin-right: 9px;
      transition: margin-right var(--el-transition-duration-fast);
    }
  }
  &.col_nav{
    padding-left: 8px;
    padding-right: 0;
    .kz_left_nav{
      width: 56px;
      .nav_item_lv1{
        .all_text{
          margin-right: 0;
        }
      }
    }
  }
  .hline{
    width: 16px;
    height: 1px;
    background-color: $bdcolor;
    margin-left: 16px;
  }
  .kz_sec_nav{
    height: 100%;
    flex: 1;
    border-left: 1px solid $bdcolor;
    word-break: keep-all;
    padding: 0 8px;
    .sec_title{
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
    :deep(.el-sub-menu__title){
      padding-left: 8px !important;
    }
    .el-menu{
      border-right: none;
      --el-menu-item-height: 40px;
      --el-menu-text-color: #606266;
      --el-menu-active-color: #2150EC;
      --el-menu-hover-bg-color: #E8EDFD;
      .el-menu-item{
        border-radius: 8px;
        --el-menu-hover-bg-color: #E8EDFD;
        &:hover{
          color: #303133;
          --el-menu-hover-bg-color: #E8EDFD;
        }
        &.is-active{
          background-color: #E8EDFD;
          font-weight: bold;
          &:hover{
            color: $dfcolor;
          }
        }
      }
      :deep(.el-sub-menu__title:hover){
        background-color: #fff;
      }
    }
  }
  .left_vline{
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