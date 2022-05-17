<template>
  <div>
    <div class="invitation kz_card">
      <div class="card_title">邀请用户详情</div>
      <div class="mana_tab">
        <el-table :data="tableData">
          <el-table-column prop="id" label="id" align="center" />
          <el-table-column prop="name" label="用户名" align="center" />
          <el-table-column prop="head" label="头像" align="center" />
          <el-table-column prop="mobile" label="号码" align="center" />

          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { invitation_api } from '@/api/manage/user/steeings/myinfo'
import { formatDate } from '@/utils/date'
const tableData = ref([])
const invite = async () => {
  const res = await invitation_api()
  if (res.status == 1) {
    tableData.value = res.body
  }
}
invite()
</script>

<style lang="scss" scoped>
.invitation {
}
</style>
