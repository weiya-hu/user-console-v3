<template>
  <div id="order_page" class="order_page">
    <KzStepTab v-model="active" :tabs="tabs" :item-el="itemEl" :view-height="viewHeight">
      <template #default="{ item }">
        {{ item.title }}
      </template>
      <template #content>
        <div v-for="(v, i) in tabs" :key="i" class="kz_card order_conten_item">
          {{ v.title }}
        </div>
      </template>
    </KzStepTab>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import { ref, onMounted, nextTick } from 'vue'
const tabs = ref([
  { title: '基本信息' },
  { title: '账号安全' },
  { title: '会员信息' },
  { title: '我的团队' },
])
const active = ref(0)

const itemEl = ref<NodeListOf<HTMLElement>>()
const viewHeight = ref(0)
onMounted(() => {
  nextTick(() => {
    itemEl.value = document.querySelectorAll('.order_page .order_conten_item')
    viewHeight.value = document.getElementById('order_page')!.offsetHeight
  })
})
</script>

<style lang="scss" scoped>
.order_page {
  height: 100%;
  .kz_card {
    min-height: 300px;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
