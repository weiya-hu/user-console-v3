<template>
  <div class="news">
    <KzHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import KzHeader from '@/views/news/components/KzHeader.vue'
</script>
<style lang="scss" scoped>
.news {
  padding-top: 40px;
  height: 100vh;
  background: #f4f4f4;
  overflow: auto;
}
</style>
