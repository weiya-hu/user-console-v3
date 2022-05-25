<template>
  <div>
    <div class="auth kz_card">
      <div class="card_title">人员管理</div>
      <div class="auth_no_page fcc fc">
        <img :src="icon_auth" alt="" />
        <span>当前功能需认证企业资质后才能访问</span>
        <el-button type="primary" class="btn_auth" @click="$router.push('authentication')"
          >立即认证</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import icon_auth from '@/assets/images/auth_company.png'
</script>

<style lang="scss" scoped>
.auth_no_page {
  height: 600px;
  background: #ffffff;
  border-radius: 8px;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    font-size: 14px;
    margin-top: 8px;
    font-weight: 400;
    color: #909399;
  }
  .btn_auth {
    margin-top: 32px;
  }
}
</style>
