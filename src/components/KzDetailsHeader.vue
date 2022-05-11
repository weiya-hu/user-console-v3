<template>
  <div class="details_header fcs">
    <div v-show="crumbs.length > 2" class="fcs back" @click="$router.back()">
      <el-icon><arrow-left /></el-icon>
      <div>返回</div>
    </div>
    <div v-show="crumbs.length > 2" class="vline"></div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="v in crumbs"
        :key="v.path"
        :to="{ path: v.path }"
        >{{v.meta!.title}}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
/**
 * 详情顶部面包屑
 * @author chn
 */
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { ref } from 'vue'
const crumbs = ref<RouteRecordRaw[]>([])
const getCrumbs = (route: RouteLocationNormalized) => {
  const pathArr = route.path.split('/')
  const path1 = '/' + pathArr[1]
  const path2 = path1 + '/' + pathArr[2]
  const path3 = path2 + '/' + pathArr[3]
  crumbs.value = []
  for (let i = 0; i < route.matched.length; i++) {
    const v = route.matched[i]
    if (v.path === path1) {
      crumbs.value.push(v)
      continue
    }
    if (v.path === path2) {
      crumbs.value.push(v)
      if (v.children) {
        const r3 = v.children.find((j) => j.path === route.meta.father)
        r3 && crumbs.value.push(r3)
      }
      continue
    }
    if (v.path === path3) {
      crumbs.value.push(v)
      if (v.path === route.path) {
        break
      }
      if (v.children) {
        const r3 = v.children.find((j) => j.path === route.meta.father)
        r3 && crumbs.value.push(r3)
      }
      continue
    }
    if (v.path === route.path) {
      crumbs.value.push(v)
      break
    }
  }
}
getCrumbs(useRoute())

defineExpose({
  getCrumbs, // 获取面包屑导航
})
</script>

<style scoped lang="scss">
.details_header {
  height: 40px;
  background-color: #fff;
  padding-left: 16px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-left: 1px solid $coloreee;
  .back {
    color: $dfcolor;
    cursor: pointer;
  }
  :deep(.el-breadcrumb__inner.is-link) {
    font-weight: normal;
    --el-text-color-primary: #909399;
  }
  :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
    --el-text-color-regular: #2150ec;
  }
}
</style>
