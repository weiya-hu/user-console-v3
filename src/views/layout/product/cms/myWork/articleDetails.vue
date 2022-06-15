<template>
  <div class="article_details">
    <div class="content">
      <div class="title">{{ body.title }}</div>
      <div class="article_content" v-html="body.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetail_api } from '@/api/product/cms/myWork'
import { customDetails_api } from '@/api/product/cms/custom'
const route = useRoute()
const fatherUrl = route.meta.father as string
const path = fatherUrl.split('/')[3]
const id = route.query.id as string
const body = ref<{ title: string; content: string }>({
  title: '',
  content: '',
})
const getData = async () => {
  const res =
    path === 'mywork' ? await articleDetail_api({ id }) : await customDetails_api({ id }, 1)
  res.status && (body.value = res.body)
}
getData()
</script>

<style scoped lang="scss">
.article_details {
  
  .content {
    background: #FFFFFF;
    border-radius: 8px;
    padding: 32px 50px;
    .title {
      font-size: 24px;
      color: #303133;
      text-align: justify;
      line-height: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .article_content{
      :deep(p){
        font-size: 14px;
        color: #606266;
      }      
    }
  }
}
</style>
