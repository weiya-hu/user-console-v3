<template>
  <div class="register">
    <div class="register_main">
      <div class="fleximg logo_img">
        <img src="@/assets/images/logo-white.svg" />
      </div>
      <div class="register_content">
        <div class="register_content_title fleximg">找回密码</div>
        <div class="register_content_main">
          <el-form ref="registerFormRef" :model="formValue" :rules="nextRules">
            <LoginInput v-model="formValue" name="mobile" form-name="mobile" />
            <LoginInput v-model="formValue" name="mobileYZM" form-name="sms" type="reset" />
            <el-form-item>
              <button class="submit_button" type="submit" @click="onNext($event)">下一步</button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import LoginInput from '@/components/KzLoginInput.vue'
import { mobileCheck, okMsg, getUrlParam } from '@/utils/index'
import { doResetsmsCheck_api } from '@/api/login'
import { useRouter } from 'vue-router'
const router = useRouter()

const registerFormRef = ref()
const loginToUrl = getUrlParam('url')
const formValue = ref<ILoginForm>({
  acode: '86',
})
const nextRules = ref({
  mobile: [
    { required: true, message: '电话号码不能为空', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  sms: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
})

const onNext = (event: any) => {
  event.preventDefault()
  registerFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      const data: any = {
        ...formValue.value,
        acode: '+' + formValue.value.acode,
      }
      const { status } = await doResetsmsCheck_api(data)
      status &&
        (() => {
          okMsg('手机号码验证成功')
          setTimeout(() => {
            router.push(
              loginToUrl
                ? '/resetpass?acode=' + data.acode + '&mobile=' + data.mobile + '&url=' + loginToUrl
                : '/resetpass?acode=' + data.acode + '&mobile=' + data.mobile
            )
          }, 500)
        })()
    }
  })
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
        padding: 50px 0 50px 260px;
        background: rgba(255, 255, 255, 0.7);
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
