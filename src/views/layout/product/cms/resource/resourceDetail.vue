<template>
  <div class="resource_details">
    <div class="fjend dal_btns">
      <KzShare :share-id="id">
        <el-button class="bdc_btn">&emsp;分享&emsp;</el-button>
      </KzShare>
      <el-button type="primary" @click="getDown(id)">&emsp;下载&emsp;</el-button>
    </div>
    <div class="content">
      <div class="title">{{ body.title }}</div>
      <div class="line_height_no" v-html="body.content"></div>
    </div>
    <KzDown ref="myDownRef" v-model="kfShow" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import KzShare from '@/components/cms/KzShare.vue'
import KzDown from '@/components/cms/KzDown.vue'
import { getDetail_api } from '@/api/product/cms/resource'
const route = useRoute()
const id = route.query.id as string
const myDownRef = ref()
const body = ref<{ title: string; content: string }>({
  title: '',
  content: '',
})
const kfShow = ref(false)
const getData = async () => {
  const res = await getDetail_api({ id })
  res.status === 1 && (body.value = res.body)
}
getData()
const getDown = (id: string) => {
  kfShow.value = true
  myDownRef.value.getData(id)
}
</script>

<style scoped lang="scss">
.resource_details {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  .dal_btns {
    padding: 20px 20px 20px 0;
  }
  .content {
    padding: 0 20px 20px 20px;
    .title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 20px;
      color: $color333;
    }
  }
}
</style>
