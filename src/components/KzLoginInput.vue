<template>
  <div>
    <div v-if="name === 'mobile'" class="flexl form_item">
      <div class="phoneselectpre">
        <el-form-item prop="acode">
          <el-select v-model="acode">
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
          <div class="countrycodetxt">+{{ modelValue.acode }}</div>
          <div class="fleximg login_down_img"><img src="@/assets/images/login_down.png" /></div>
          <div class="acode_line"></div>
        </div>
        <el-form-item :prop="props.formName">
          <el-input v-model="mobile" placeholder="请输入手机号" autocomplete="off" />
        </el-form-item>
      </div>
    </div>
    <div v-if="name === 'mobileYZM'" class="flexl form_item">
      <div class="login_label">验证码</div>
      <el-form-item :prop="props.formName">
        <el-input v-model="sms" placeholder="请输入验证码" autocomplete="off" />
      </el-form-item>
      <div v-if="getYZMflag" className="getyzmTXTtime getyzmTXT">{{ mobileYZMnum }}'后重新获取</div>
      <div v-if="!getYZMflag" className="getyzmTXT" @click="getYZm()">{{ YZMtxt }}</div>
    </div>
    <div v-if="name === 'password'" class="flexl form_item">
      <div class="login_label">{{ props.label }}</div>
      <el-form-item :prop="props.formName">
        <el-input
          v-if="ispassword"
          v-model="pass"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        />
        <el-input v-else v-model="pass" type="text" placeholder="请输入密码" autocomplete="off" />
      </el-form-item>
      <div class="login_pass_img fleximg" @click="ispassword = !ispassword">
        <img v-if="ispassword" src="@/assets/images/login_close.png" />
        <img v-else src="@/assets/images/login_open.png" />
      </div>
    </div>
    <div v-if="name === 'surePassword'" class="flexl form_item">
      <div class="login_label">{{ props.label }}</div>
      <el-form-item :prop="props.formName">
        <el-input
          v-if="ispassword"
          v-model="surePass"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        />
        <el-input
          v-else
          v-model="surePass"
          type="text"
          placeholder="请输入密码"
          autocomplete="off"
        />
      </el-form-item>
      <div class="login_pass_img fleximg" @click="ispassword = !ispassword">
        <img v-if="ispassword" src="@/assets/images/login_close.png" />
        <img v-else src="@/assets/images/login_open.png" />
      </div>
    </div>
    <div v-if="name === 'captcha'" class="fsc login_captcha">
      <div class="form_item login_captcha_item flexl">
        <el-form-item :prop="props.formName">
          <el-input v-model="captchaV" placeholder="请输入验证码" autocomplete="off" />
        </el-form-item>
      </div>
      <div class="chaptcha_img fleximg" @click="getCaptcha"><img :src="captcha" /></div>
    </div>
    <div v-if="name === 'invite_code'" class="flexl form_item">
      <div class="login_label">邀请码</div>
      <el-form-item :prop="props.formName">
        <el-input v-model="invite_code" placeholder="请输入邀请码" autocomplete="off" />
      </el-form-item>
      <div className="getyzmTXT invite_code_end">选填</div>
    </div>
  </div>
</template>
<script setup lang="ts">
/**
 * 登录注册页面的输入框封装
 * @author hwy
 */
import { ref, computed } from 'vue'
import areaNum from '@/utils/areaNum'
import { telReg, okMsg, errMsg } from '@/utils/index'
import { sendSms, sendRegsms, sendResetsms, captchaGet } from '@/api/login'
import _ from 'lodash'

const props = withDefaults(
  defineProps<{
    name: string //类型
    formName: string //接口上传的名称
    label?: string
    modelValue: any
    type?: string //发送验证码的类型，'register','reset','login'
  }>(),
  {}
)
const emit = defineEmits(['update:modelValue'])
const getYZMflag = ref(false) //获取验证码的开关，为true后才能获取验证码，到时候后为false关闭
const mobileYZMnum = ref(120)
const YZMtxt = ref('获取验证码')

const ispassword = ref(true) //用于切换密码框的input为password或者text

const captcha = ref()

const vModel = (key: string) => {
  return {
    get: () => props.modelValue[key],
    set: (val: any) => {
      emit('update:modelValue', { ...props.modelValue, [key]: val })
    },
  }
}
const invite_code = computed(vModel('invite_code'))
const pass = computed(vModel('pass'))
const mobile = computed(vModel('mobile'))
const acode = computed(vModel('acode'))
const sms = computed(vModel('sms'))
const captchaV = computed(vModel('captcha'))
const surePass = computed(vModel('surePass'))

//获取验证码按钮
const getYZm = _.debounce(async () => {
  console.log(props.modelValue)
  const { mobile, acode } = props.modelValue
  const { type } = props
  if (!mobile) {
    errMsg('请输入手机号码')
    return
  }
  if (telReg.test(mobile)) {
    const data = {
      acode: '+' + acode,
      mobile,
    }
    const { status } =
      type === 'register'
        ? await sendRegsms(data)
        : type === 'reset'
        ? await sendResetsms(data)
        : await sendSms(data)
    status &&
      (() => {
        okMsg('验证码发送成功')
        localStorage.setItem('sendSmsTime', new Date().getTime().toString())
        changeTime()
      })()
  }
}, 300)

//修改发送时间
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

props.name === 'mobileYZM' && getSmsTime()

//获取图形验证码
const getCaptcha = _.debounce(async () => {
  const { status, body } = await captchaGet()
  status && (captcha.value = body)
}, 300)
props.name === 'captcha' && getCaptcha()
</script>
<style lang="scss" scoped>
.form_item {
  width: 380px;
  height: 52px;
  background: #f4f4f4;
  padding: 0 16px;
  margin-bottom: 20px;
  position: relative;
  :deep(.el-form-item) {
    margin-bottom: 0;
    .el-input__wrapper {
      background: #f4f4f4;
      box-shadow: none;
      padding: 0;
      input {
        color: #363636;
        font-size: 14px;
      }
    }
    .el-form-item__error {
      top: 134%;
      left: -85px;
      padding-left: 20px;
    }
    .el-form-item__error::before {
      content: '';
      background: url('@/assets/images/login_warn.png') no-repeat;
      background-size: 12px 12px;
      width: 12px;
      height: 12px;
      position: absolute;
      left: 0;
      top: 15%;
    }
  }
  .phoneselectpre {
    width: 60px;
    height: 20px;
    position: absolute;
    top: 16px;
    left: 16px;
    opacity: 0;
  }
  .login_label {
    width: 70px;
    font-size: 14px;
    color: #363636;
    line-height: 14px;
    font-weight: 400;
  }
  .login_mobile {
    .countrycodetxt {
      width: 36px;
      text-align: left;
      height: 14px;
      line-height: 14px;
      font-weight: 400;
      font-size: 14px;
      color: #363636;
    }
    .login_down_img {
      width: 12px;
    }
    .acode_line {
      width: 1px;
      height: 14px;
      background: #363636;
      margin-left: 8px;
    }
  }
  .getyzmTXT {
    font-size: 14px;
    color: #304f97;
    font-weight: 500;
    line-height: 14px;
    height: 14px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
  .getyzmTXTtime {
    color: #999999;
  }
  .invite_code_end {
    color: #bbbbbb;
  }
  .login_pass_img {
    width: 16px;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
.login_captcha {
  width: 380px;
  height: 52px;
  background: #ffffff;
  margin-bottom: 20px;
  .login_captcha_item {
    width: 250px;
    margin-bottom: 0;
    :deep(.el-form-item) {
      .el-form-item__error {
        top: 134%;
        left: -15px;
        padding-left: 20px;
      }
    }
  }
  .chaptcha_img {
    width: 120px;
    background: #c7c7c7;
    cursor: pointer;
  }
}
</style>
>
