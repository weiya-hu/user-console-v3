import { createApp, computed } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus, { ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { mainStore } from '@/store/index'
import KzIcon from '@/components/KzIcon.vue'
import 'vue-cropper/dist/index.css'

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
    if (to.path !== '/login' && to.meta.lv !== '-1' && !userInfo.id) {
      router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
      return false
    }
    if (to.meta.power && !store.isCanDo(to.meta.power as string)) {
      ElMessageBox.alert('当前身份无此权限。', '温馨提示', {
        confirmButtonText: '关闭',
        type: 'error',
        callback: () => {
          router.replace(from.fullPath)
        },
      })
      return false
    }
  })
})
