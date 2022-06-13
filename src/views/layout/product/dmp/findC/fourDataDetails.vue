<template>
  <KzUserDataDetails :get-list-api="getFourUserList_api" />
</template>

<script setup lang="ts">
import { getFourUserList_api } from '@/api/product/dmp/findC'
import KzUserDataDetails from '@/components/dmp/KzUserDataDetails.vue'
</script>

<style scoped lang="scss"></style>
