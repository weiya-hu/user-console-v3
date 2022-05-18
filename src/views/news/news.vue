<template>
  <div class="flexb news_main">
    <div>
      <NewsNav />
    </div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import NewsNav from '@/views/news/components/newsNav.vue'
</script>
<style lang="scss" scoped>
.news_main {
  width: 1200px;
  margin: 0 auto;
  padding-top: 10px;
  align-items: flex-start;
  > div:nth-child(1) {
    width: 890px;
    background: #ffffff;
    padding: 0 30px;
    border-radius: 4px;
  }
  > div:nth-child(2) {
    width: 300px;
    background: #ffffff;
    border-radius: 4px;
    padding: 24px 20px;
  }
}
</style>
