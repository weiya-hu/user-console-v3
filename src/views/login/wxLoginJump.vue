<template>
  <div></div>
</template>
<script lang="ts" setup>
import { doWechat_api, loginForceDo_api } from '@/api/login'
import { ElMessageBox } from 'element-plus'
import { formatDate } from '@/utils/date'
import { getUrlParam } from '@/utils/index'
import { mainStore } from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = mainStore()

const loginToUrl = getUrlParam('url')
const code = getUrlParam('code'),
  state = getUrlParam('state'),
  url = getUrlParam('url')
  doWechat_api({ code, state }).then((res) => {
    if (res.status) {
      window.location.href = url ? decodeURIComponent(url) : '//' + store.state.yxtUrl.offical
    } else if (res.errno === 10201) {
      const toUrl = '/bindphone?nickname=' + res.body.nickname + '&headimgurl=' + res.body.headimgurl
      router.push(url ? toUrl + '&url=' + url : toUrl)
    }else if(res.errno === 10200){
      ElMessageBox.confirm(`您的账户已于${formatDate(new Date(res.body.time),'yyyy年MM月dd日 hh:mm:ss')}，在IP:${res.body.ip}登录，如非本人操作请尽快修改密码！`, '登录提醒', {
        confirmButtonText: '强制登录',
        cancelButtonText: '取消',
        customClass:'force_login'
      }).then(async()=>{
        const forceRes = await loginForceDo_api()
        forceRes.status && (()=>{
          setTimeout(() => {
            window.location.href = loginToUrl
              ? decodeURIComponent(loginToUrl)
              : '//' + store.state.yxtUrl.offical
          }, 500)
        })()
      })
    }
})
</script>
<style lang="scss" scoped></style>
