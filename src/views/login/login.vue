<template>
  <div class="login_page">
    <div class="login_main">
      <div class="fleximg logo_img">
        <img src="@/assets/images/logo-white.svg" />
      </div>
      <div class="login_main_content">
        <div class="fleximg login_main_img">
          <img src="@/assets/images/login-main.png" />
        </div>
        <div class="login_content">
          <div class="login_top_nav fleximg">
            <div
              v-for="(item, index) in topNav"
              :key="index"
              :class="
                topNavActive == index
                  ? 'login_top_nav_item login_top_nav_active'
                  : 'login_top_nav_item'
              "
              @click="loginNavChange($event, index)"
            >
              {{ item }}
            </div>
            <div
              class="login_top_nav_line"
              :style="{ transform: `translateX(${topNavLineLeft}px)` }"
            ></div>
          </div>
          <el-form ref="loginFormRef" :model="formValue" :rules="loginRules">
            <div v-if="topNavActive === 0">
              <LoginInput v-model="formValue" name="mobile" form-name="mobile" />
              <LoginInput
                v-if="chaptchaShow"
                v-model="formValue"
                name="captcha"
                form-name="captcha"
              />
              <LoginInput v-model="formValue" name="mobileYZM" form-name="sms" type="login" />
            </div>
            <div v-if="topNavActive === 1">
              <LoginInput v-model="formValue" name="mobile" form-name="mobile" />
              <LoginInput
                v-if="chaptchaShow"
                v-model="formValue"
                name="captcha"
                form-name="captcha"
              />
              <LoginInput v-model="formValue" name="password" form-name="pass" label="密码" />
            </div>
            <el-form-item>
              <button class="submit_button" type="submit" @click="onSubmit($event)">登录</button>
            </el-form-item>
            <div class="flexl user_agree" @click="userAgreeCheck = !userAgreeCheck">
              <div class="fleximg user_agree_img">
                <img v-if="userAgreeCheck" src="@/assets/images/login_select.png" />
                <img v-else src="@/assets/images/login_unselect.png" />
              </div>
              <div class="user_agree_txt">
                我已阅读并同意<span @click="toUseragreement($event)">《康洲数智用户须知》</span>
              </div>
            </div>
          </el-form>
          <div class="fsc to_register">
            <div>
              <div
                v-if="topNavActive === 1"
                @click="router.push(loginToUrl ? '/forget?url=' + loginToUrl : '/forget')"
              >
                忘记密码？
              </div>
            </div>
            <div @click="router.push(loginToUrl ? '/register?url=' + loginToUrl : '/register')">
              免费注册
            </div>
          </div>
          <div class="fleximg other_login">
            <div class="fleximg other_login_item" @click="wechartShow = !wechartShow">
              <img src="@/assets/images/wechart.png" />
            </div>
            <div class="fleximg other_login_item"><img src="@/assets/images/QQ.png" /></div>
            <div class="fleximg other_login_item"><img src="@/assets/images/weibo.png" /></div>
          </div>
          <el-dialog v-model="wechartShow" title="微信登录" width="400px" destroy-on-close center>
            <WxLogin
              :url="wechartParam.url"
              :state="wechartParam.state"
              :appid="wechartParam.appid"
            />
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import LoginInput from '@/components/KzLoginInput.vue'
import { mobileCheck, passCheck, okMsg, errMsg, getUrlParam } from '@/utils/index'
import { ElMessageBox } from 'element-plus'
import { formatDate } from '@/utils/date'
import { doLogin, wechatQrinfoGet_api, loginForceDo_api } from '@/api/login'
import WxLogin from '@/views/login/wxLogin.vue'
import { mainStore } from '@/store'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = mainStore()

const topNav = ref(['手机号登录', '账号登录'])
const topNavLineLeft = ref(0) //登录方式选择下面那条线移动效果left距离
const topNavActive = ref(0) //登录方式：0/1
const chaptchaShow = ref(false) //图形验证码是否显示
const userAgreeCheck = ref(false)
const loginToUrl = getUrlParam('url')
const wechartShow = ref(false)
const wechartParam = ref()
const formValue = ref<ILoginForm>({
  acode: '86',
})
const loginFormRef = ref()
const loginRules = ref({
  mobile: [
    { required: true, message: '电话号码不能为空', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  sms: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
  pass: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { validator: passCheck, trigger: 'blur' },
  ],
  captcha: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
})

//登录类型切换
const loginNavChange = (e: { target: any }, index: number) => {
  topNavActive.value = index
  const nav = e.target
  topNavLineLeft.value = nav.offsetLeft
}

//微信登录初始化
const wechartInit = async () => {
  const { status, body } = await wechatQrinfoGet_api({ url: loginToUrl })
  status &&
    (wechartParam.value = {
      url: body.callback_url,
      state: body.state,
      appid: body.app_id,
    })
}
wechartInit()

//登录
const onSubmit = (event: any) => {
  event.preventDefault()
  loginFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      if (!userAgreeCheck.value) {
        errMsg('请阅读并同意《康洲数智用户须知》')
        return
      }
      const data: any = {
        ...formValue.value,
        type: topNavActive.value + 1,
        acode: '+' + formValue.value.acode,
      }
      const { status, body, message, errno } = await doLogin(data)
      status &&
        (() => {
          okMsg('登录成功')
          sessionStorage.setItem('islogin', '1')
          setTimeout(() => {
            window.location.href = loginToUrl
              ? decodeURIComponent(loginToUrl)
              : '//' + store.state.yxtUrl.offical
          }, 500)
        })()
      !status &&
        (() => {
          if (errno === 10200) {
            ElMessageBox.confirm(
              `您的账户已于${formatDate(new Date(body.time), 'yyyy年MM月dd日 hh:mm:ss')}，在IP:${
                body.ip
              }登录，如非本人操作请尽快修改密码！`,
              '登录提醒',
              {
                confirmButtonText: '强制登录',
                cancelButtonText: '取消',
                customClass: 'force_login',
              }
            ).then(async () => {
              const forceRes = await loginForceDo_api()
              forceRes.status &&
                (() => {
                  setTimeout(() => {
                    window.location.href = loginToUrl
                      ? decodeURIComponent(loginToUrl)
                      : '//' + store.state.yxtUrl.offical
                  }, 500)
                })()
            })
          }
          if (body >= 3 || message === 'captcha: 不能为空') {
            chaptchaShow.value = true
          }
        })()
    }
  })
}

const toUseragreement = (event: any) => {
  event.stopPropagation()
  window.open(window.location.origin + '/useragreement', '_blank')
}
</script>

<style lang="scss" scoped>
.login_page {
  height: 100vh;
  background: url(@/assets/images/login-background.jpg) no-repeat;
  background-size: cover;
  overflow: auto;
  .login_main {
    width: 1200px;
    margin: 9.3vh auto 0;
    .logo_img {
      width: 200px;
      cursor: pointer;
    }
    .login_main_content {
      margin-top: 49px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .login_main_img {
        width: 520px;
        margin-right: 180px;
      }
      .login_content {
        width: 440px;
        background: #ffffff;
        margin-top: 11.1vh;
        padding: 0 30px 28px;
        .login_top_nav {
          border-bottom: 1px solid #eeeeee;
          position: relative;
          cursor: pointer;
          margin-bottom: 20px;
          .login_top_nav_item {
            width: 190px;
            font-size: 18px;
            color: #363636;
            line-height: 18px;
            font-weight: 600;
            padding: 31px 0;
            text-align: center;
          }
          .login_top_nav_active {
            color: #304f97;
          }
          .login_top_nav_line {
            width: 190px;
            height: 3px;
            background: #304f97;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: all 0.2s linear;
          }
        }
        .submit_button {
          width: 380px;
          height: 52px;
          background: #304f97;
          text-align: center;
          line-height: 16px;
          font-weight: 600;
          border: none;
          outline: none;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
        .user_agree {
          cursor: pointer;
          .user_agree_img {
            width: 14px;
            margin-right: 9px;
          }
          .user_agree_txt {
            font-size: 12px;
            color: #363636;
            line-height: 12px;
            font-weight: 400;
            span {
              color: #304f97;
            }
          }
        }
        .to_register {
          margin-top: 16px;
          div {
            font-size: 12px;
            color: #363636;
            line-height: 12px;
            cursor: pointer;
          }
        }
        .other_login {
          margin-top: 28px;
          .other_login_item {
            width: 42px;
            height: 42px;
            overflow: hidden;
            margin: 0 20px;
            cursor: pointer;
          }
        }
        :deep(.el-overlay) {
          .el-dialog .el-dialog__header {
            display: none;
          }
        }
      }
    }
  }
  .svg_test {
    width: 100px;
    svg {
      width: 100%;
    }
  }
}
</style>
