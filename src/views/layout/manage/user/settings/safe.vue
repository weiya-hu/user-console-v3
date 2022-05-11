<template>
  <div class="safe_page kz_card">
    <div class="card_title">账号安全</div>
    <div class="card_body fc fcc">
      <div class="item">
        <div class="item_title">绑定手机</div>
        <div class="item_content">213213213</div>
        <el-link type="primary">修改</el-link>
      </div>
      <div class="item">
        <div class="item_title">绑定邮箱</div>
        <div class="item_content">213213213</div>
        <el-link type="primary">修改</el-link>
      </div>
      <div class="item">
        <div class="item_title">登录密码</div>
        <div class="item_content"></div>
        <el-link type="primary" @click="$router.push('changepass')">修改</el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.safe_page {
  .card_body {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      .item_title {
        color: #909399;
        margin-right: 40px;
      }
      .item_content {
        color: #303133;
        width: 360px;
      }
    }
  }
}
</style>
