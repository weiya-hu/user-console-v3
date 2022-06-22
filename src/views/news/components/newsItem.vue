<template>
  <div className="news-list-item flexb">
    <div className="fleximg coverimg">
      <img
        :src="props.item.thumb_url ? props.item.thumb_url : defaultCover()"
        alt="cover"
        @error="coverImgError($event)"
      />
    </div>
    <div
      :className="
        props.size === 'big'
          ? 'flexcbl news-list-item-right  news-list-item-right-big'
          : 'flexcbl news-list-item-right'
      "
    >
      <div>
        <div className="title">{{ props.item.title }}</div>
        <div className="item-content">{{ props.item.content }}</div>
      </div>
      <div className="flexb news-list-item-bottom">
        <div className="color3">{{ props.item.creator_name }}</div>
        <div className="flexr">
          <div className="color3">
            {{ formatDate(new Date(props.item.update_time), 'yyyy年MM月dd日') }}
          </div>
          <div className="flexl share">
            <!-- <Share css='justify' item={item}/> -->
          </div>
          <div className="flexl star">
            <!-- <Collect css='justify' item={item}/> -->
          </div>
          <div className="flexl">
            <!-- <div className='fleximg readimg'><img src={readimg} alt="read" /></div> -->
            <span className="color3">{{ props.item.readed }}</span>
          </div>
          <div>
            <!-- {!(size==='big') && <FollowButton key={item.is_attention} item={item} change={(val)=>{this.props.followChange(val)}}/>}                 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { nextTick } from 'vue'
import { formatDate } from '@/utils/date'
import { defaultCover } from '@/utils/index'

console.log(defaultCover())
const props = withDefaults(
  defineProps<{
    item: any
    size?: string
  }>(),
  { size: 'small' }
)

const coverImgError = (e: any) => {
  e.target.src = defaultCover()
}
</script>
<style lang="scss" scoped>
.news-list-item {
  padding: 24px 0;
  border-bottom: 1px solid #f4f4f4;
  .coverimg {
    width: 220px;
    height: 140px;
    overflow: hidden;
  }
  .news-list-item-right {
    width: 606px;
    height: 140px;
    overflow: hidden;
    .news-list-item-bottom {
      width: 100%;

      .share {
        margin: 0 16px;
      }
      .star {
        margin: 0 16px 0 0;
      }
      .readimg {
        width: 14px;
        margin-right: 4px;
      }
    }
  }
  .news-list-item-right-big {
    width: 900px;
  }
  .title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .item-content {
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    font-size: 14px !important;
    a {
      color: #363636;
      font-size: 14px !important;
    }
    span {
      font-size: 14px !important;
    }
    p {
      font-size: 14px !important;
    }
    img {
      display: none;
    }
    .kline {
      display: none;
    }
  }
  .interest-button {
    width: 70px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #304f97;
    margin-left: 20px;
    > span {
      font-size: 12px;
      color: #304f97;
    }
    .followimg {
      width: 8px;
      margin-right: 4px;
    }
  }
  .interest-button-gray {
    width: 70px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    margin-left: 20px;
    .followimg {
      width: 14px;
      margin-right: 4px;
    }
    > span {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
