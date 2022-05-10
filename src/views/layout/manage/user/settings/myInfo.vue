<template>
  <div class="my_info_page flex">
    <KzStepTab v-model="active" :tabs="tabs" @change="change">
      <template #default="{ item }">
        {{ item.title }}
      </template>
    </KzStepTab>
    <div class="info_content f1">
      <el-scrollbar ref="scrollbarRef" :noresize="true" @scroll="scroll">
        <div class="conten_item conten_item1 mb16">1</div>
        <div class="conten_item conten_item2 mb16">2</div>
        <div class="conten_item conten_item3">3</div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import { ref, onMounted } from 'vue'
const tabs = ref([{ title: '哈哈哈哈' }, { title: '嘻嘻嘻嘻' }, { title: '啊啊啊啊' }])
const active = ref(0)
let boxHeight: number
let el: NodeListOf<HTMLElement>
onMounted(() => {
  boxHeight = (document.querySelector('.layout_page') as HTMLElement).offsetHeight / 2
  el = document.querySelectorAll('.conten_item')
})
const change = (i: number) => {
  scrollbarRef.value!.setScrollTop(el[i].offsetTop)
}

const scrollbarRef = ref()
const scroll = ({ scrollTop }: { scrollTop: number }) => {
  if (el[1].getBoundingClientRect().y > boxHeight) {
    active.value = 0
  } else if (
    el[1].getBoundingClientRect().y < boxHeight &&
    el[2].getBoundingClientRect().y > boxHeight
  ) {
    active.value = 1
  } else if (el[2].getBoundingClientRect().y < boxHeight) {
    active.value = 2
  }
}
</script>

<style lang="scss" scoped>
.my_info_page {
  height: 100%;
  .info_content {
    margin-left: 16px;
    height: 100%;
    .conten_item {
      background-color: #fff;
      border-radius: 8px;
    }
    .conten_item1 {
      height: 600px;
    }
    .conten_item2 {
      height: 500px;
    }
    .conten_item3 {
      height: 800px;
    }
  }
}
</style>
