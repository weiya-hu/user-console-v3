import { createApp, DirectiveBinding } from 'vue'
import { addClass, removeClass } from '@/utils/dom.js'
import KzError from '@/components/KzError.vue'
/**
 * 自定义指令v-error
 * <div v-error:[myEventName]="flag"></div> 或者
 * <div v-error:myEvent="flag"></div>
 * const flag = ref(true)
 * const myEventName = ref('myEvent')
 * emiter.on(myEventName.value, () => {
 *  console.log('事件触发了')
 * })
 * @author chn
 */

const classList = ['p-relative'] // 一个全局的 position: reactive 的样式类

function createErrorDirective() {
  // 自定义指令hook
  const name = KzError.name
  return {
    mounted(el: any, binding: DirectiveBinding) {
      const app = createApp(KzError)
      const instance = app.mount(document.createElement('div'))
      // 将 instance 存到el对象中，方面使用
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance
      if (binding.arg) {
        el[name].instance.setEmitEvent(binding.arg) //调用组件的设置全局事件名函数，error组件上通过全局事件实现重试回调
      }
      if (binding.value) {
        append(el)
      }
    },
    updated(el: any, binding: DirectiveBinding) {
      if (binding.oldValue !== binding.value) {
        binding.value ? append(el) : remove(el)
      }
    },
  }

  function append(el: any) {
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, classList)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el: any) {
    removeClass(el, classList)
    el.removeChild(el[name].instance.$el)
  }
}

export default createErrorDirective()
