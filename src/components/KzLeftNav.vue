<template>
  <div id="kz_left_nav_box" :class="flag&&'col_nav'">
    <div class="kz_left_nav">
      <div class="fold_btn fcs fjend">
        <div class="fold_icon chover" @click="flag = !flag">1</div>
      </div>
      <div class="nav_item_lv2" :class="'active'">
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
            <div class="nowrap" v-show="!flag">{{v.meta.title}}</div>
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
        <div class="nav_item_lv2"  v-for="j in v.children" :key="j.name">
          <div class="nav_icon">
            <img src="" alt="">
          </div>
          <transition name="el-fade-in-linear">
            <div class="nav_text nowrap" v-show="!flag">{{j.meta.title}}</div>
          </transition>
        </div>
      </div>
    </div>
    <div class="kz_sec_nav" v-show="flag" v-if="secNav">
      <div class="sec_title fcs">{{secNav.meta.title}}</div>
      <el-menu>

      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routes } from "@/router/index";
import { Menu as MyIconMenu } from '@element-plus/icons-vue'
const navRoutes = routes[1].children!.filter(v => v.name !== 'Console')
const flag = ref(false)

const route = useRoute()
const secNav = ref<typeof navRoutes[number]>()
const getSecNav = () => {
  const nowRoute = navRoutes.find(v => route.path.indexOf(v.path) > -1)
  nowRoute && (secNav.value = nowRoute)
}
getSecNav()
console.log(secNav.value);

</script>

<style lang="scss" scoped>
#kz_left_nav_box{
  padding-left: 16px;
  transition: padding-left var(--el-transition-duration-fast);
  height: 100%;
  display: flex;
  .kz_left_nav{
    font-size: 14px;
    overflow: hidden;
    padding-right: 16px;
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
      &.active{
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
    .kz_left_nav{
      width: 64px;
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
    .sec_title{
      height: 40px;
      color: #303133;
      font-weight: bold;
      padding-left: 16px;
    }
  }
}
</style>