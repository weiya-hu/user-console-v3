<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import { mainStore } from '@/store'

const store = mainStore()
store.getYxtUrl()
</script>
<style lang="scss" scoped></style>
