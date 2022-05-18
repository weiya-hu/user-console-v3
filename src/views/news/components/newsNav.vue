<template>
  <div>新闻导航</div>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { newsType_api } from '@/api/news'
import { getUrlParam } from '@/utils/index'

// const { status, body } = await newsType_api()
// const newsTypeId = getUrlParam('newsTypeId')
// const newsId = getUrlParam('newsId')
// if (status) {
//     let id = newsTypeId || store.getState().newsMayLikeId
//     this.setState({
//         newsType: body,
//         newsTypeId: newsId?null:id
//     })
//     if(!newsId) {
//         this.props.history.push('/app/news?newsTypeId='+id)
//         this.props.newsIndexChange()
//     }
// }
</script>
<style lang="scss" scoped></style>
