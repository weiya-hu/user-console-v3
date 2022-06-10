<template>
  <div class="tips">
    为您找到 <span>0</span> 家符合条件的客户（*根据政策与监管法规要求，联系人手机号脱敏展示）
  </div>
  <KzUserDataDetails :get-list-api="getAdUserList_api" />
</template>

<script setup lang="ts">
import { getAdUserList_api } from '@/api/product/dmp/findC'
import KzUserDataDetails from '@/components/dmp/KzUserDataDetails.vue'
</script>

<style scoped lang="scss">
.tips {
  margin: 0px 0 24px 24px;
  font-size: 14px;
  color: #363636;
  display: inline-block;
  span {
    color: #e40000;
  }
}
</style>
