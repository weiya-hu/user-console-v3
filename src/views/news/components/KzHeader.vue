<template>
  <div class="news_header">
    <div class="news_header_invite">你好，欢迎登录康洲数智官网！</div>
    <div class="news_header_main flexb">
      <div class="flexl links">
        <div v-for="(item, index) in links" :key="index">
          <a target="_blank" :href="item.link" class="link-item">{{ item.name }}</a>
          <span v-if="index === 1" class="hot-txt">【热】</span>
        </div>
      </div>
      <div class="flexr">
        <div v-if="isLogin" class="flexr news_userinfo">
          <div class="news_message">消息</div>
          <div
            class="news_userinfo_item flexr"
            @click="toUser"
            @mouseenter="exitNone = true"
            @mouseleave="exitNone = false"
          >
            <div class="fleximg head_img">
              <img
                :src="userInfo.head || '@/assets/images/news_header.png'"
                @error="errorImg($event)"
              />
            </div>
            <div class="news_username">{{ userInfo.name }}</div>
            <div
              v-if="exitNone"
              class="fleximg exit"
              @click="exitlogin($event)"
              @mouseenter="exitActive = true"
              @mouseleave="exitActive = false"
            >
              <div class="fleximg exitimg">
                <img :src="exitActive ? exitimg : exitactiveimg" />
              </div>
              <span :class="exitActive ? 'color' : ''">退出</span>
              <div class="posi-more"></div>
            </div>
          </div>
        </div>
        <div v-else class="login_item flexr">
          <div>登录</div>
          <div @click="toRegister">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { mainStore } from '@/store/index'
import { useRouter } from 'vue-router'
import errorimg from '@/assets/images/news_header.png'
import exitactiveimg from '@/assets/images/login_exitactive.png'
import exitimg from '@/assets/images/login_exit.png'
import { loginOut_api } from '@/api/login'

const router = useRouter()
const store = mainStore()
const links = ref()
const exitNone = ref(false)
const exitActive = ref(false)
const userInfo = computed(() => {
  return store.state.userInfo
})

store.getYxtUrl().then((res) => {
  links.value = [
    { name: '首页', link: '//' + res.offical },
    { name: '药智器械', link: 'https://qx.yaozh.com/login' },
    { name: '药智人才', link: 'https://job.yaozh.com/' },
    { name: '专利通', link: 'https://patent.yaozh.com/' },
    { name: '药智咨询', link: 'https://report.yaozh.com/' },
    { name: '药智汇', link: 'https://www.yaozh.com/zhihui/?yaozh' },
    { name: '药智通', link: 'https://s.yaozh.com' },
    { name: '药智大讲堂', link: 'https://edu.yaozh.com/' },
    { name: '产业大脑', link: 'https://aiyun.yaozh.com/' },
    { name: '论坛交流', link: 'https://bbs.yaozh.com' },
    { name: '俱乐部', link: 'https://club.yaozh.com/' },
    { name: '海外智通', link: 'https://www.yaohaiwai.com/' },
    { name: '药智谷', link: 'https://gu.yaozh.com/' },
  ]
})

const isLogin = computed(() => {
  return store.state.userInfo.id ? true : false
})
const errorImg = ($event: any) => {
  $event.target.src = errorimg
}
//退出登录
const exitlogin = async (e: any) => {
  e.stopPropagation()
  const { status } = await loginOut_api()
  status && store.setUserinfo(true)
}
const toRegister = () => {
  router.push('/login?url=' + encodeURIComponent(window.location.href))
}
const toUser = () => {
  location.href = '//' + store.state.yxtUrl.offical + '/app/user'
}
</script>
<style lang="scss" scoped>
.news_header {
  width: 100%;
  min-width: 1440px;
  height: 40px;
  background: #363636;
  position: fixed;
  top: 0;
  left: 0;
  .news_header_invite {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 36px;
    transform: translateY(-50%);
  }
  .news_header_main {
    width: 1200px;
    margin: 0 auto;
    .links {
      width: 1010px;
      overflow: hidden;
      .link-item {
        color: #ffffff;
        line-height: 40px;
        margin-right: 24px;
        text-decoration: none;
      }
      .hot-txt {
        color: red;
        position: relative;
        left: -22px;
      }
    }
    .news_userinfo {
      .news_message {
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        margin-right: 24px;
      }
      .news_userinfo_item {
        cursor: pointer;
        position: relative;
        .head_img {
          width: 24px;
          height: 24px;
          margin-right: 6px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .news_username {
          color: #fff;
          width: 70px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .exitimg {
          width: 14px;
          margin-right: 8px;
        }
        .exit {
          position: absolute;
          left: 0;
          bottom: -44px;
          width: 83px;
          height: 36px;
          border: 1px solid #dcdcdc;
          background: #ffffff;
          .color {
            color: #ffffff;
          }
          .posi-more {
            width: 83px;
            height: 20px;
            position: absolute;
            top: -10px;
            left: 0;
            // background: red;
          }
        }
        .exit:hover {
          background: #304f97;
          border: none;
        }
        .exitnone {
          display: none;
        }
      }
    }
    .login_item {
      > div {
        font-size: 14px;
        line-height: 40px;
        color: #ffffff;
        cursor: pointer;
      }
      > div:nth-child(1) {
        color: #f80;
        margin-right: 24px;
      }
    }
  }
}

@media screen and (max-width: 1692px) {
  .news_header_invite {
    display: none;
  }
}
</style>
