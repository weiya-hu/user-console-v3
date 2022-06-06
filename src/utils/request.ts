/*
  统一封装get post请求 拦截器 默认地址
*/
// 引入axios
import axios from 'axios'

//引入ui框架的弹窗组件
import { ElMessage } from 'element-plus'
import router from '@/router'

// 设置默认地址
axios.defaults.baseURL = '/api'

// 请求拦截器
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('firstToken')
  if (token) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json', //'application/x-www-form-urlencoded';
      Authorization: token,
    }
  }
  const insid = router.currentRoute.value.query.insid
  if (insid) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      'INSID': insid as string,
    }
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      const response = res.data
      if (response && response.errno >= 10200 && response.errno < 10300) {
        return res
      }
      if (response && response.status == 0 && response.errno) {
        ElMessage({
          showClose: true,
          message: response.message,
          type: 'error',
          grouping: true,
        })
        if (response.errno == 10620) {
          router.replace('/login?url=' + encodeURIComponent(window.location.origin + '/console'))
        }
      }
    }
    return res
  },
  (error) => {
    console.log(error, 'axios.error')
    ElMessage({
      showClose: true,
      message: '接口错误，请联系管理员',
      type: 'error',
      grouping: true,
    })
    return error
  }
)

// 封装get请求
export function get(module: string, url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .get(url, { headers: { MODULE: module }, params })
      .then((res) => {
        if (showmsg && res.data && res.data.status == 1) {
          ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'success',
            grouping: true,
          })
        }
        resolve(res.data)
      })
      .catch((error) => {
        console.log(error, 'geterror')
        reject(error)
      })
  })
}

// 封装post请求
export function post(module: string, url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .post(url, params, { headers: { MODULE: module } })
      .then((res) => {
        if (showmsg && res.data && res.data.status == 1) {
          ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'success',
            grouping: true,
          })
        }
        resolve(res.data)
      })
      .catch((error) => {
        console.log(error, 'posterror')
        reject(error)
      })
  })
}
