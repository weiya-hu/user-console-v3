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
          <el-table-column prop="mobile" label="会员剩余时间" align="center">{{
            day
          }}</el-table-column>
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
import { invitation_api } from '@/api/manage/user/myinfo'
import { formatDate } from '@/utils/date'
const tableData = ref([])
const invite = async () => {
  const res = await invitation_api()
  if (res.status === 1) {
    tableData.value = res.body
  }
}
invite()
const day = ref()
const showtime = () => {
  const nowtime = new Date() //获取当前时间
  const endtime = new Date('2022-8-18') //定义结束时间
  const gotime = endtime.getTime() - nowtime.getTime() //距离结束时间的毫秒数
  const god = Math.floor(gotime / (1000 * 60 * 60 * 24)) //计算天数

  day.value = god + '天'
}
showtime()
</script>

<style lang="scss" scoped></style>
