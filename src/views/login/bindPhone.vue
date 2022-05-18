<template>
  <div class="register">
    <div class="register_main">
      <div class="fleximg logo_img">
        <img src="@/assets/images/logo-white.svg" />
      </div>
      <div class="register_content">
        <div class="register_content_title fleximg">手机号绑定</div>

        <div class="register_content_main">
          <div class="login_userinfo">
            <div class="fleximg header_img">
              <img :src="headerImg" />
            </div>
            <div class="nickname">{{ nickname }}</div>
          </div>
          <el-form ref="loginFormRef" :model="formValue" :rules="registerRules">
            <LoginInput v-model="formValue" name="mobile" form-name="mobile" />
            <LoginInput
              v-if="chaptchaShow"
              v-model="formValue"
              name="captcha"
              form-name="captcha"
            />
            <LoginInput v-model="formValue" name="mobileYZM" form-name="sms" type="login" />
            <LoginInput v-model="formValue" name="invite_code" form-name="invite_code" />
            <el-form-item>
              <button class="submit_button" type="submit" @click="onRegister($event)">
                免费注册
              </button>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import LoginInput from '@/components/KzLoginInput.vue'
import { mobileCheck, okMsg, errMsg, getUrlParam } from '@/utils/index'
import { doWechatBind_api } from '@/api/login'
import { mainStore } from '@/store'
const store = mainStore()

const userAgreeCheck = ref(false)
const loginFormRef = ref()
const loginToUrl = getUrlParam('url')
const headerImg = getUrlParam('headimgurl') || '@/assets/images/login_header.png'
const nickname = getUrlParam('nickname')
const chaptchaShow = ref(false) //图形验证码是否显示
const formValue = ref<ILoginForm>({
  acode: '86',
  invite_code: sessionStorage.getItem('inviteCode') || undefined,
})
const registerRules = ref({
  mobile: [
    { required: true, message: '电话号码不能为空', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  sms: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
  captcha: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
})

const onRegister = (event: any) => {
  event.preventDefault()
  loginFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      if (!userAgreeCheck.value) {
        errMsg('请阅读并同意《康洲数智用户须知》')
        return
      }
      const data: any = {
        ...formValue.value,
        acode: '+' + formValue.value.acode,
        type: 3,
      }
      const { status, body, message } = await doWechatBind_api(data)
      status &&
        (() => {
          okMsg('绑定成功')
          sessionStorage.setItem('islogin', '1')
          setTimeout(() => {
            window.location.href = loginToUrl
              ? decodeURIComponent(loginToUrl)
              : '//' + store.state.yxtUrl.offical
          }, 500)
        })()
      !status &&
        (() => {
          ;(body >= 3 || message === 'captcha: 不能为空') && (chaptchaShow.value = true)
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
.register {
  height: 100vh;
  overflow: auto;
  background: url('@/assets/images/register-background.jpg') no-repeat;
  background-size: cover;
  .register_main {
    width: 900px;
    margin: 9.3vh auto 0;
    .logo_img {
      width: 200px;
      cursor: pointer;
    }
    .register_content {
      margin-top: 80px;
      .register_content_title {
        width: 900px;
        height: 90px;
        background: #304f97;
        font-size: 26px;
        color: #ffffff;
        text-align: center;
        line-height: 26px;
        font-weight: 600;
      }

      .register_content_main {
        width: 900px;
        padding: 35px 0 50px 260px;
        background: rgba(255, 255, 255, 0.7);
        .login_userinfo {
          width: 380px;
          .header_img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.7);
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .nickname {
            color: #363636;
            font-size: 14px;
            line-height: 14px;
            text-align: center;
            margin: 21px 0 35px;
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
      }
    }
  }
}
</style>
