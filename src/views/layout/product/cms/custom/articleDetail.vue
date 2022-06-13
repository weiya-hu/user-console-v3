<template>
  <div class="resource_details">
    <div class="content">
      <div class="title">{{ body.title }}</div>
      <div class="line_height_no" v-html="body.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { customDetails_api } from '@/api/product/cms/custom'
const route = useRoute()
const id = route.query.id as string
const body = ref<{ title: string; content: string }>({
  title: '',
  content: '',
})
const getData = async () => {
  const res = await customDetails_api({ id }, 1)
  console.log(res)
  res.status == 1 && (body.value = res.body)
}
getData()
</script>

<style scoped lang="scss">
.resource_details {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  .content {
    padding: 32px 50px;
    .title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 20px;
      color: $color333;
    }
  }
}
</style>
