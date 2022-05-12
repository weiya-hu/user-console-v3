<template>
  <div></div>
</template>
<script lang="ts" setup>
import { doWechat_api } from '@/api/login'
import { getUrlParam } from '@/utils/index'
import { useRouter } from 'vue-router'
const router = useRouter()

let code = getUrlParam('code'),state= getUrlParam('state'),url=getUrlParam('url');
doWechat_api({code,state}).then(res=>{
  if(res.status){
    window.location.href= url?decodeURIComponent(url):'http://www.kzszh.com'
  }else{
    if(res.errno === 10200 ){
      let toUrl = '/bindphone?nickname='+res.body.nickname+'&headimgurl='+res.body.headimgurl
      router.push(url?toUrl+'&url='+url:toUrl);
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
