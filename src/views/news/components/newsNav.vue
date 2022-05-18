<template>
  <div>新闻导航</div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { newsType_api } from '@/api/news'
import { getUrlParam } from '@/utils/index'
import { mainStore } from '@/store';
import { useRouter } from 'vue-router';

const store = mainStore()
const router = useRouter()

// const newsType = ref()
// const newsTypeId = reactive()
// const getNewsType = async()=>{
//   const { status, body } = await newsType_api()
//   const newsTypeId = getUrlParam('newsTypeId')
//   const newsId = getUrlParam('newsId')
//   status && (()=>{
//     let id = newsTypeId || store.state.newsMayLikeId;
//     newsType.value = body;
//     newsTypeId = newsId?null:id;
//     if(!newsId) {
//         router.push('/news?newsTypeId='+id)
//         this.props.newsIndexChange()
//     }
//   })()
// }
// getNewsType()

</script>
<style lang="scss" scoped></style>
