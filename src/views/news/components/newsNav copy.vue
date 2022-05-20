<template>
  <div class="news_nav">
    <div v-if="newsType.length > 12" class="flexb news_nav_pre">
      <div class="flexb news_nav_pre_son" @selectstart="() => false">
        <div
          v-for="(item, index) in navList(true)"
          :key="index"
          :class="newsTypeId == item.id ? 'news_nav_item news_nav_item_active' : 'news_nav_item'"
          @click="topNavChange(item.id)"
        >
          {{ item.name }}
        </div>
      </div>

      <div
        class="news_nav_more fleximg"
        @mouseenter="moreNavShow = true"
        @mouseleave="moreNavShow = false"
      >
        更多
        <div v-if="moreNavShow" class="news_nav_more_model">
          <div class="news_nav_more_model_more"></div>
          <div
            :class="
              navList(false).length > 4
                ? 'news_nav_more_content flexl flex_wrap_width'
                : 'news_nav_more_content flexl'
            "
          >
            <div
              v-for="(item, index) in navList(false)"
              :key="index"
              class="news_nav_more_item fleximg"
              @click="moreNavChange(item, index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="newsTypeId" class="news_line" :style="'left:' + newsNavLineLeft + 'px'"></div>
    </div>
    <div
      v-else
      :class="
        newsType.length <= 10 ? 'flexl news_nav_pre news_nav_pre_mright' : 'flexb news_nav_pre'
      "
    >
      <div
        v-for="(item, index) in newsType"
        :key="index"
        :class="newsTypeId == item.id ? 'news_nav_item news_nav_item_active' : 'news_nav_item'"
        @click="topNavChange(item.id)"
      >
        {{ item.name }}
      </div>
      <div v-if="newsTypeId" class="news_line" :style="'left:' + newsNavLineLeft + 'px'"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import { newsType_api } from '@/api/news'
import { getUrlParam } from '@/utils/index'
import { mainStore } from '@/store'
import { useRouter } from 'vue-router'

const store = mainStore()
const router = useRouter()
const emit = defineEmits(['navChange'])

const newsType = ref<any[]>([])
const newsTypeId = ref()
const newsNavLineLeft = ref()
const moreNavShow = ref(false)
const getNewsType = async () => {
  const { status, body } = await newsType_api()
  const newsTypeIdUrl = getUrlParam('newsTypeId')
  const newsId = getUrlParam('newsId')
  status &&
    (() => {
      const id = newsTypeIdUrl || store.state.newsMayLikeId
      // newsType.value = body.splice(0,12)
      newsType.value = body
      // newsType.value = body.concat([{id: 1, name: "关注", sort: 1, top: 1},{id: 1, name: "关注", sort: 1, top: 1},{id: 1, name: "关注", sort: 1, top: 1}])
      newsTypeId.value = newsId ? null : id
      getNavLeft()
      if (!newsId) {
        router.push('/news?newsTypeId=' + id)
        emit('navChange', id)
      }
    })()
}
getNewsType()
const navList = computed(() => (front: boolean) => {
  const newsTypeCopy = JSON.parse(JSON.stringify(newsType.value))
  return front ? newsTypeCopy.splice(0, 11) : newsTypeCopy.splice(11, newsTypeCopy.length)
})
const getNavLeft = () => {
  nextTick(() => {
    const activeDom = document.querySelector('.news_nav_item_active') as HTMLElement
    activeDom && (newsNavLineLeft.value = activeDom.offsetLeft + activeDom.offsetWidth / 2 - 16)
  })
}
const topNavChange = (id: any) => {
  const newsId = getUrlParam('newsId')
  newsTypeId.value = id
  router.push('/news?newsTypeId=' + id)
  !newsId &&
    (() => {
      emit('navChange', id)
      getNavLeft()
    })()
}
const moreNavChange = (item: any, index: number) => {
  const newsTypeCopy = JSON.parse(JSON.stringify(newsType.value))
  newsTypeCopy.splice(11 + index, 1)
  newsTypeCopy.splice(10, 0, item)
  moreNavShow.value = false
  newsType.value = newsTypeCopy
  topNavChange(item.id)
}
</script>
<style lang="scss" scoped>
.news_nav {
  .news_nav_pre {
    padding: 16px 0 8px;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    .news_nav_pre_son {
      width: 752px;
    }
    .news_nav_item {
      font-size: 16px;
      color: #333333;
      line-height: 32px;
      font-weight: 500;
      cursor: pointer;
      height: 32px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    .news_nav_item_active {
      color: #304f97;
      font-weight: 600;
    }
    .news_nav_item:hover {
      color: #304f97;
    }
    .news_line {
      width: 32px;
      height: 4px;
      background: #304f97;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      transition: all 0.3s ease-in-out;
    }
    .news_nav_more {
      width: 50px;
      height: 32px;
      background: rgba(48, 79, 151, 0.04);
      border-radius: 4px;
      font-size: 16px;
      color: #333333;
      line-height: 16px;
      cursor: pointer;
      position: relative;
      .news_nav_more_model {
        background: #ffffff;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        padding: 24px 20px 12px 20px;
        position: absolute;
        top: 41px;
        right: 0;
        z-index: 2;
        .news_nav_more_model_more {
          width: 208px;
          height: 28px;
          opacity: 0;
          position: absolute;
          top: -18px;
          right: 0;
        }
        .news_nav_more_content {
          > div:nth-child(4n) {
            margin-right: 0;
          }
          .news_nav_more_item {
            width: 80px;
            height: 32px;
            border-radius: 4px;
            margin-right: 4px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #333333;
            line-height: 16px;
            font-weight: 400;
            margin-bottom: 12px;
          }
          .news_nav_more_item:hover {
            background: rgba(48, 79, 151, 0.04);
            font-weight: 500;
          }
        }
        .flex_wrap_width {
          width: 332px;
          flex-wrap: wrap;
        }
      }
    }
  }
  .news_nav_pre_mright {
    flex-wrap: wrap;
    height: 32px;
    overflow: hidden;
    > div {
      margin-right: 40px;
    }
    > div:last-child {
      margin-right: 0;
    }
  }
}
</style>
