<template>
  <div class="console_page">
    <div class="flex">
      <div class="kz_card">
        <div class="card_title fsc">
          <div>热门推荐</div>
          <el-button type="info" plain size="small">全部</el-button>
        </div>
        <div class="card_body hot_list fsc">
          <div v-for="v in 4" :key="v" class="item">
            <div class="item_img"></div>
            <div class="item_title">213</div>
            <div class="item_msg">123</div>
            <div class="item_icon"></div>
            <div class="item_bg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="kz_card mt16">
      <div class="card_title">已订购产品与服务</div>
      <div class="card_body">
        <KzEmpty>
          <el-button type="primary" size="large" @click="$router.push('/manage/user/product/order')"
            >订购产品与服务</el-button
          >
        </KzEmpty>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzEmpty from '@/components/KzEmpty.vue'
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.console_page {
  .card_body {
    padding: 0 24px 24px;
  }
  .hot_list {
    .item {
      padding: 0 16px 12px;
      position: relative;
      height: 162px;
      margin-right: 16px;
      background-color: aqua;
      &:last-child {
        margin-right: 0;
      }
    }
    .item_img {
      width: 60px;
      height: 60px;
      margin-bottom: 24px;
    }
    .item_title {
      font-size: 16px;
      color: #303133;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .item_msg {
      font-size: 14px;
      color: #606266;
      margin-bottom: 4px;
    }
    .item_bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-color: brown;
      border-radius: 16px;
      transform: perspective(8px) scale(0.75, 1) rotateY(-1deg);
      transform-origin: bottom left;
    }
  }
}
</style>
