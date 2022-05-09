<template>
  <div class="details_header fcs">
    <div class="fcs back" @click="$router.back()">
      <el-icon><arrow-left /></el-icon>
      <div>返回</div>
    </div>
    <div class="vline"></div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: v.path }" v-for="v in crumbs">{{v.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
/**
 * 详情顶部面包屑
 * @author chn 
*/
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const gf_path = '/' + route.path.split('/')[1]
const crumbs = ref<any[]>([])
for (let i = 0; i < route.matched.length; i++) {
  const v = route.matched[i];
  if(v.path == gf_path){
    // crumbs.value[0] = v
    crumbs.value.push(v)
    v.children.forEach(value => {
      if(value.path == route.meta.father && value.path != '/index'){
        // crumbs.value[1] = value
        crumbs.value.push(value)
      }
      if(value.children){
        // crumbs.value[1] = value
        const f_path = gf_path + '/' + route.path.split('/')[2]
        if(f_path == value.path){
          crumbs.value.push(value)
          value.children.forEach(r =>{
            if(r.path == route.meta.father){
              crumbs.value.push(r)
            }
          })
        }
      }
    })
    continue
  }
  if(v.path == route.path){
    // crumbs.value[2] = v
    crumbs.value.push(v)
    continue
  }
}
</script>

<style scoped lang="scss">
.details_header{
  height: 40px;
  background-color: #fff;
  padding-left: 16px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-left: 1px solid $coloreee;
  .back{
    color: $dfcolor;
    cursor: pointer;
  }
  :deep(.el-breadcrumb__inner.is-link) {
    font-weight: normal;
    --el-text-color-primary: #909399;
  }
  :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner){
    --el-text-color-regular: #2150EC;
  }
}
</style>