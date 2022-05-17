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
  app.use(router).mount('#app')
})
