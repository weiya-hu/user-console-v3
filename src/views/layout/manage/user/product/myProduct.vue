<template>
  <div>
    <div @click="$router.push('productdetails')">我的服务</div>
    <KzPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzPage from '@/components/KzPage.vue'
const totle = ref(100)
const size = ref(10)
const page = ref(1)
const getList = () => {}
</script>

<script lang="ts">
export default { name: 'MyProduct' }
</script>

<style lang="scss" scoped></style>
