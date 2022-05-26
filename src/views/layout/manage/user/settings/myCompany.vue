<template>
  <div class="kz_card my_company_page">
    <div class="card_title fsc">
      <div>我的企业</div>
      <el-button type="primary" :icon="Plus">添加企业</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
