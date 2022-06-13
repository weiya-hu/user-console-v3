<template>
  <KzUserDataDetails :get-list-api="getBaiduUserList_api" />
</template>

<script setup lang="ts">
import { getBaiduUserList_api } from '@/api/product/dmp/findC'
import KzUserDataDetails from '@/components/dmp/KzUserDataDetails.vue'
</script>

<style scoped lang="scss"></style>
