<template>
  <div class="salon_login">
    <div class="fleximg logo_img" @click="toIndex">
      <img src="@/assets/images/logo-white.svg" />
    </div>
    <div class="register_txt">注册康洲数智科技</div>
    <div class="login_content">
      <el-form ref="loginFormRef" :model="formValue" :rules="loginRules" :show-message="false">
        <div class="flexl form_item">
          <div class="phoneselectpre">
            <el-form-item prop="acode">
              <el-select v-model="formValue.acode">
                <el-option
                  v-for="(item, i) in areaNum"
                  :key="i"
                  :label="'+' + item.value"
                  :value="item.value"
                  >{{ item.name + ' +' + item.value }}</el-option
                >
              </el-select>
            </el-form-item>
          </div>
          <div class="login_mobile flexl">
            <div class="flexl login_label">
              <div class="countrycodetxt">+{{ formValue.acode }}</div>
              <div class="fleximg login_down_img"><img src="@/assets/images/login_down.png" /></div>
              <div class="acode_line"></div>
            </div>
            <el-form-item prop="mobile">
              <el-input
                v-model="formValue.mobile"
                placeholder="请输入手机号"
                auto-complete="new-password"
                @input="isSubmit"
              />
            </el-form-item>
          </div>
        </div>
        <div class="yzm_input_pre_pre form_item flexb">
          <!-- <div class="login_label">验证码</div> -->
          <el-form-item prop="sms" class="yzm_input_pre">
            <el-input
              v-model="formValue.sms"
              placeholder="请输入验证码"
              auto-complete="new-password"
              :maxlength="6"
              @input="isSubmit"
            />
          </el-form-item>
          <div v-if="getYZMflag" class="getyzmTXTtime getyzmTXT fleximg">
            {{ mobileYZMnum }}'后重新获取
          </div>
          <div v-if="!getYZMflag" class="getyzmTXT fleximg" @click="getYZm()">{{ YZMtxt }}</div>
        </div>
      </el-form>
      <div v-if="errorMessage" class="flexl error_message_box">
        <div class="fleximg login_warn_img"><img src="@/assets/images/salon/login_warn.png" /></div>
        <div class="error_message">{{ errorMessage }}</div>
      </div>
      <div
        :class="submitFlag ? 'login_btn login_btn_submit fleximg' : 'login_btn fleximg'"
        @click="submit"
      >
        注册并登录
      </div>
      <div class="fleximg user_permision" @click="userAgree = !userAgree">
        <div class="fleximg agree_img">
          <img v-if="userAgree" src="@/assets/images/salon/user_agreed.png" />
          <img v-else src="@/assets/images/salon/user_agree.png" />
        </div>
        <div class="user_permision_txt">
          我已阅读并同意 <span @click="toUseragreement($event)">《康洲数智用户须知》</span>
        </div>
      </div>
    </div>
    <MessageVue v-model="errorShow" :message="messageTxt" :send="messageSendFlag" />
    <!-- <div class="web_logo" @click="toIndex"></div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import areaNum from '@/utils/areaNum'
import { mobileCheck, getUrlParam } from '@/utils/index'
import { sendSms, doLogin, loginForceDo_api } from '@/api/login'
import debounce from 'lodash/debounce'
import MessageVue from './message.vue'
import { useRouter } from 'vue-router'
import '@/utils/rem.js'

const router = useRouter()
const formValue = ref<ILoginForm>({
  acode: getUrlParam('acode') || '86',
  mobile: getUrlParam('mobile') || '',
  sms: getUrlParam('sms') || '',
})
const loginFormRef = ref()
const loginRules = ref({
  mobile: [
    { required: true, message: '请输入电话号码', trigger: 'change' },
    { validator: mobileCheck, trigger: 'change' },
  ],
  sms: [{ required: true, message: '请输入验证码', trigger: 'change' }],
})
const getYZMflag = ref(false) //获取验证码的开关，为true后才能获取验证码，到时候后为false关闭
const mobileYZMnum = ref(120)
const YZMtxt = ref('获取验证码')
const submitFlag = ref(false)
const errorMessage = ref('')
const messageTxt = ref('')
const errorShow = ref(false)
const messageSendFlag = ref()
const userAgree = ref(getUrlParam('agree') ? true : false)

const message = (str: any) => {
  errorShow.value = true
  messageTxt.value = str
  messageSendFlag.value = new Date().getTime()
}
//获取验证码按钮
const getYZm = debounce(async () => {
  const { mobile, acode } = formValue.value
  loginFormRef.value.validateField('mobile', async (valid: boolean, invalidFields: any) => {
    console.log(valid, invalidFields)
    if (!valid) {
      errorMessage.value = invalidFields.mobile[0].message
    } else {
      errorMessage.value = ''
      const data = {
        acode: '+' + acode,
        mobile,
      }
      const { status } = await sendSms(data)
      status &&
        (() => {
          message('验证码发送成功')
          localStorage.setItem('sendSmsTime', new Date().getTime().toString())
          changeTime()
        })()
    }
  })
}, 300)

//修改时间
const changeTime = () => {
  getYZMflag.value = true
  const timer = setInterval(() => {
    if (mobileYZMnum.value > 1) {
      mobileYZMnum.value = mobileYZMnum.value - 1
    } else {
      getYZMflag.value = false
      localStorage.removeItem('sendSmsTime')
      mobileYZMnum.value = 120
      YZMtxt.value = '重获验证码'
      clearInterval(timer)
    }
  }, 1000)
}

//刷新页面后发送验证码时间获取
const getSmsTime = () => {
  const lastTime = Number(localStorage.getItem('sendSmsTime'))
  lastTime &&
    (() => {
      const nowTime = new Date().getTime()
      if (nowTime - lastTime < 120000) {
        const stime = (120 - (nowTime - lastTime) / 1000).toFixed(0)
        mobileYZMnum.value = Number(stime)
        changeTime()
      } else {
        localStorage.removeItem('sendSmsTime')
      }
    })()
}
getSmsTime()

const isSubmit = () => {
  loginFormRef.value.validate(async (valid: boolean, invalidFields: any) => {
    submitFlag.value = valid
  })
}

const submit = debounce(() => {
  loginFormRef.value.validate(async (valid: boolean, invalidFields: any) => {
    if (!valid) {
      errorMessage.value = invalidFields[Object.keys(invalidFields)[0]][0].message
      console.log(invalidFields[Object.keys(invalidFields)[0]][0].message)
    } else {
      errorMessage.value = ''
      if (!userAgree.value) {
        message('请阅读并同意《康洲数智用户须知》')
        return
      }
      const data = {
        ...formValue.value,
        type: 1,
        acode: '+' + formValue.value.acode,
      }
      const res = await doLogin(data)
      res.status &&
        (() => {
          message(res.message)
          router.push('/salon')
        })()
      !res.status &&
        (async () => {
          if (res.errno === 10200) {
            const forceRes = await loginForceDo_api()
            forceRes.status && router.push('/salon')
          }
        })()
    }
  })
}, 300)
const toUseragreement = (event: any) => {
  event.stopPropagation()
  formValue.value.mobile
    ? router.push(
        '/useragreementh5?mobile=' +
          formValue.value.mobile +
          '&sms=' +
          formValue.value.sms +
          '&acode=' +
          formValue.value.acode
      )
    : router.push('/useragreementh5')
}

const toIndex = () => {
  location.href = 'https://m.kzszh.com/'
}

const setMiddle = (e: any) => {
  e.target.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.salon_login {
  max-width: 750px !important;
  width: 3.75rem;
  height: 100vh;
  padding-top: 0.46rem;
  background: url(@/assets/images/salon/login_background.jpg) no-repeat;
  background-size: cover;
  position: relative;
  .logo_img {
    width: 1rem;
    margin: 0 auto;
  }
  .register_txt {
    font-size: 0.38rem;
    color: #ffffff;
    line-height: 0.38rem;
    font-weight: 600;
    text-align: center;
    margin: 0.36rem auto 0;
  }
  .login_content {
    width: 100%;
    height: 2.68rem;
    padding: 0 0.28rem 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    .form_item {
      width: 3.19rem;
      height: 0.48rem;
      background: #f4f4f4;
      padding: 0 0.2rem;
      position: relative;
      border-radius: 6px;
      :deep(.el-form-item) {
        margin-bottom: 0;
        .el-input__wrapper {
          background: #f4f4f4;
          box-shadow: none;
          padding: 0;
          input {
            color: #333333;
            font-size: 0.14rem;
            font-weight: 600;
            background: #f4f4f4;
            &::-webkit-input-placeholder {
              font-weight: 400;
            }
          }
        }
        // .el-form-item__error {
        //   top: 138%;
        //   left: -89px;
        //   padding-left: 20px;
        //   color: #FF3E3E;
        // }
        // .el-form-item__error::before {
        //   content: '';
        //   background: url('@/assets/images/salon/login_warn.png') no-repeat;
        //   background-size: 12px 12px;
        //   width: 12px;
        //   height: 12px;
        //   position: absolute;
        //   left: 0;
        //   top: 15%;
        // }
      }
      .phoneselectpre {
        width: 0.6rem;
        height: 0.2rem;
        position: absolute;
        top: 0.16rem;
        left: 0.16rem;
        opacity: 0;
      }
      .login_label {
        width: 0.7rem;
        font-size: 0.14rem;
        color: #333333;
        line-height: 0.14rem;
        font-weight: 400;
      }
      .login_mobile {
        .countrycodetxt {
          width: 0.36rem;
          text-align: left;
          height: 0.14rem;
          line-height: 0.14rem;
          font-weight: 400;
          font-size: 0.14rem;
          color: #333333;
          font-weight: 600;
        }
        .login_down_img {
          width: 0.12rem;
        }
        .acode_line {
          width: 1px;
          height: 0.14rem;
          background: #333333;
          margin-left: 0.08rem;
        }
      }

      .invite_code_end {
        color: #bbbbbb;
      }
      .login_pass_img {
        width: 0.16rem;
        position: absolute;
        top: 50%;
        right: 0.16rem;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .yzm_input_pre_pre {
      width: 3.19rem;
      background: rgba($color: #000000, $alpha: 0);
      padding: 0;
      margin-top: 0.16rem;
      // :deep(.el-form-item) {
      //   .el-form-item__error {
      //     top: 107%;
      //     left: -19px;
      //     padding-left: 20px;
      //     color: #FF3E3E;
      //   }
      // }
      .yzm_input_pre {
        width: 1.93rem;
        background: #f4f4f4;
        border-radius: 6px;
        padding-left: 0.2rem;
        height: 0.48rem;
      }
      .getyzmTXT {
        width: 1.1rem;
        height: 0.48rem;
        background-image: linear-gradient(180deg, #fff1a8 0%, #ffa921 100%);
        box-shadow: 0px 2px 4px 0px rgba(14, 31, 99, 1);
        border-radius: 6px;
        font-size: 0.14rem;
        color: #12084d;
        text-align: center;
        line-height: 0.14rem;
        font-weight: 600;
      }
      .getyzmTXTtime {
        color: #c29241;
      }
    }
  }
  .error_message_box {
    margin-top: 0.12rem;
    .login_warn_img {
      width: 0.12rem;
      margin-right: 0.08rem;
    }
    .error_message {
      font-size: 0.12rem;
      color: #ff3e3e;
    }
  }

  .login_btn {
    width: 3.19rem;
    height: 0.48rem;
    background-image: linear-gradient(180deg, #0371ff 0%, #4c25fc 100%);
    border-radius: 6px;
    font-size: 0.18rem;
    color: #ffffff;
    font-weight: 600;
    margin-top: 0.16rem;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background: #000000;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .login_btn_submit {
    &::before {
      content: none;
    }
  }
  .user_permision {
    margin-top: 0.24rem;
    .agree_img {
      width: 0.14rem;
      margin-right: 0.08rem;
    }
    .user_permision_txt {
      font-size: 12px;
      color: #ffffff;
      line-height: 14px;
      & > span {
        color: #2685ff;
      }
    }
  }
  .web_logo {
    width: 1rem;
    height: 0.24rem;
    position: absolute;
    top: 0.5rem;
    left: 1.38rem;
    cursor: pointer;
  }
}
</style>
