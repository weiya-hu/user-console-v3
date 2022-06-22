<template>
  <div class="flexb news_main">
    <div>
      <div class="nav_pre">
        <NewsNav @navChange="navChange" />
      </div>
      <el-scrollbar class="news_list">
        <div v-infinite-scroll="load" class="newses">
          <!-- <div v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</div> -->
          <NewsItem v-for="(item, i) in newsList" :key="i" :item="item" />
        </div>
      </el-scrollbar>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import NewsNav from '@/views/news/components/newsNav.vue'
import { newsList_api } from '@/api/news'
import { getUrlParam } from '@/utils'
import NewsItem from '@/views/news/components/newsItem.vue'

const count = ref(12)
const newsCurrent = ref(1)
const newsSize = ref(10)
const newsList = ref()
const load = () => {
  getNewslist(getUrlParam('newsTypeId'))
}
const navChange = (val: any) => {
  newsList.value = []
  getNewslist(val)
}
//获取新闻列表
const getNewslist = async (id: any) => {
  const data = {
    current: newsCurrent.value,
    size: newsSize.value,
    typeId: id,
  }
  const { status, body } = await newsList_api(data)
  if (status) {
    newsList.value = newsList.value.concat(body.records)
    // hasMore:body.total>newsCurrent.value*newsSize.value,
    newsCurrent.value += 1
  }
}
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
    border-radius: 4px;
    .nav_pre {
      padding: 0 30px;
    }
    .news_list {
      height: calc(100vh - 127px);
      .newses {
        padding: 0 30px;
      }
    }
    .infinite-list .infinite-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: var(--el-color-primary-light-9);
      margin: 10px;
      color: var(--el-color-primary);
    }
    .infinite-list .infinite-list-item + .list-item {
      margin-top: 10px;
    }
  }
  > div:nth-child(2) {
    width: 300px;
    background: #ffffff;
    border-radius: 4px;
    padding: 24px 20px;
  }
}
</style>
