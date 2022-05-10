<template>
  <div class="login_page">
    <div class="login_main">
      <div class="fleximg logo_img">
        <img src="@/assets/images/logo-white.svg" alt="">
      </div>
      <div class="login_main_content">
        <div class="fleximg login_main_img">
          <img src="@/assets/images/login-main.png" alt="">
        </div>
        <div class="login_content">
          <div class="login_top_nav fleximg">
            <div 
              v-for="(item,index) in topNav" 
              :key="index"
              @click="loginNavChange($event,index)" 
              :class="(topNavActive == index)?'login_top_nav_item login_top_nav_active':'login_top_nav_item'"
            >{{item}}</div>
            <div class="login_top_nav_line" :style="{transform:`translateX(${topNavLineLeft}px)`}"></div>
          </div> 
          <el-form :model="formValue" ref="loginFormRef" :rules="loginRules">
            <div v-if="topNavActive === 0">
              <LoginInput v-model="formValue" name="mobile" formName='mobile'/>
              <LoginInput v-if="chaptchaShow" v-model="formValue" name="captcha" formName='captcha'/>
              <LoginInput v-model="formValue" name="mobileYZM" formName='sms' type="login"/>
            </div>
            <div v-if="topNavActive === 1">
              <LoginInput v-model="formValue" name="mobile" formName='mobile'/>
              <LoginInput v-if="chaptchaShow" v-model="formValue" name="captcha" formName='captcha'/>
              <LoginInput v-model="formValue" name="password" formName='pass'/>
            </div>
            <el-form-item>
              <button class="submit_button" type="submit" @click="onSubmit($event)">登录</button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LoginInput from '@/components/LoginInput.vue'
import { telReg , okMsg, passReg } from '@/utils/index'
import { doLogin } from '@/api/login'
import  {useRouter} from "vue-router";
const router = useRouter(); 

interface ILoginForm{
  mobile?:number
  acode?:string
  sms?:string
  pass?:string
  captcha?:string
}

//表单自定义验证规则
const mobileCheck = (rule:any, value:string, callback:any) => {
  if(telReg.test(value)){
    callback()
  }else{
    callback(new Error('请输入正确的手机号码'))
  }
}
const passCheck = (rule:any, value:string, callback:any) => {
  if(passReg.test(value)){
    callback()
  }else{
    callback(new Error('密码长度在6~18之间,不能只是数字或字母'))
  }
}

const topNav=ref(['手机号登录','账号登录'])
const topNavLineLeft = ref(0) //登录方式选择下面那条线移动效果left距离
const topNavActive = ref(0) //登录方式：0/1
const chaptchaShow  = ref(false) //图形验证码是否显示
const formValue = ref<ILoginForm>({
  acode:'86',
})
const loginFormRef = ref()
const loginRules=ref({
  mobile: [
    { required: true, message: '电话号码不能为空', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  sms: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
  ],
  pass: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { validator: passCheck, trigger: 'blur' },
  ],
  captcha: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
  ]
})

//登录类型切换
const loginNavChange=(e: { target: any; },index:number)=>{
  topNavActive.value = index
  let nav= e.target
  topNavLineLeft.value = nav.offsetLeft
}

//登录
const onSubmit = (event:any) => {
  event.preventDefault()
  loginFormRef.value.validate(async (valid:boolean) => {
    if(valid){
      let data :any = {
        ...formValue.value,
        type : topNavActive.value +1,
        acode : '+' + formValue.value.acode
      }
      const { status, body,message } = await doLogin(data)
      status && (()=>{
        okMsg('登录成功')
        setTimeout(()=> {router.push("/")},800)
      })()
      !status && (()=>{
        (body >= 3 ||  message === 'captcha: 不能为空') && (chaptchaShow.value =true)
      })()
    }
  })
}
</script>

<style lang="scss" scoped>
.login_page {
  height: 100vh;
  background: url(@/assets/images/login-background.jpg) no-repeat;
  background-size: cover;
  overflow: auto;
  .login_main{
    width: 1200px;
    margin: 9.3vh auto 0;
    .logo_img{
      width: 200px;
      cursor: pointer;
    }
    .login_main_content{
      margin-top: 49px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .login_main_img{
        width: 520px;
        margin-right: 180px;
      }
      .login_content{
        width: 440px;
        background: #FFFFFF;
        margin-top: 11.1vh;
        padding: 0 30px 28px;
        .login_top_nav{
          border-bottom: 1px solid #EEEEEE;
          position: relative;
          cursor: pointer;
          margin-bottom: 20px;
          .login_top_nav_item{
            width: 190px;
            font-size: 18px;
            color: #363636;
            line-height: 18px;
            font-weight: 600;
            padding: 31px 0;
            text-align: center;
          }
          .login_top_nav_active{
            color: #304F97;
          }
          .login_top_nav_line{
            width: 190px;
            height: 3px;
            background: #304F97;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: all 0.2s linear;
          }
        }
        .submit_button{
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
      }
    }
    
  }
}
</style>
