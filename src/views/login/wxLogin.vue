<template>
  <div id='wxLogin' className='fleximg'></div>
</template>
<script lang="ts" setup>
import { nextTick } from 'vue'
const props = withDefaults(
  defineProps<{
    url?: string
    state?: string
    appid: string
  }>(),
  {}
)
nextTick(()=>{
  var obj = new window.WxLogin({
    self_redirect: false,
    id: "wxLogin",
    appid: props.appid,
    scope: "snsapi_login",
    redirect_uri: props.url,
    state: props.state,
    style: "",
    href: ""
  });
})

</script>
<style lang="scss" scoped>
</style>