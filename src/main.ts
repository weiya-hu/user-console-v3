import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { mainStore } from '@/store/index'
import KzIcon from '@/components/KzIcon.vue'

const app = createApp(App)

app
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .directive('error', ErrorDirective)
  .component('KzIcon', KzIcon)

const store = mainStore()
store.setUserinfo().finally(() => {
  app.use(router).mount('#app') // 获取到用户信息再挂载
  router.beforeEach((to, from) => {
    const userInfo = store.state.userInfo
    if (to.meta.lv !== '-1' && !userInfo.id) {
      router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
      return false
    }
  })
})
