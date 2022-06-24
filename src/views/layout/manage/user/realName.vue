<template>
  <div>
    <div v-show="showUp === 1" class="real_name kz_card">
      <div class="card_title">实名认证</div>
      <div class="card_body fcc">
        <el-form
          ref="realRef"
          :model="realValue"
          label-position="right"
          size="large"
          label-width="100px"
          :rules="realRules"
        >
          <el-form-item label="真实姓名" prop="real_name">
            <el-input v-model="realValue.real_name" placeholder="请输入"> </el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="id_card">
            <el-input v-model="realValue.id_card" placeholder="请输入"> </el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="realValue.mobile" placeholder="请输入手机号">
              <template #prepend>
                <el-select v-model="realValue.acode" style="width: 80px">
                  <el-option
                    v-for="(v, i) in areaNum"
                    :key="i"
                    :label="'+' + v.value"
                    :value="v.value"
                    >{{ v.name + ' +' + v.value }}</el-option
                  >
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="sms">
            <div class="fcs f1">
              <el-input
                v-model="realValue.sms"
                placeholder="请输入验证码"
                class="sms_ipt"
              ></el-input>
              <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getSms">{{
                smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
              }}</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="f1 mt20" @click="sumbit">提交认证</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <KzAuthentication
      v-show="showUp === 2"
      v-model="userShow"
      u_type="user"
      :re-submit="showBtn"
      :img="img"
      :img_small="img_small"
      :msg="msg"
      :msg-two="msgTwo"
      @redo="$router.replace('/manage/user/myinfo')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { mobileCheck, idCardValidity } from '@/utils/index'
import areaNum from '@/utils/areaNum'
import { errMsg, okMsg } from '@/utils/index'
import { authenticate_api, sendSms_api } from '@/api/manage/user/myinfo'
import KzAuthentication from '@/components/KzAuthentication.vue'
import icon_user from '@/assets/images/user.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const userShow = ref(true)
const showBtn = ref(false)
const img = ref('')
const img_small = ref('')
const msg = ref('')
const msgTwo = ref('')
const showUp = ref(1)
const realRef = ref()
const realValue = ref<IUserForm>({
  mobile: '',
  acode: '86',
  sms: '',
  real_name: '',
  id_card: '',
})

const realRules = reactive({
  real_name: [{ required: true, message: '请输入真实姓名！', trigger: 'blur' }],
  id_card: [
    { required: true, message: '请输入个人身份证号', trigger: 'blur' },
    { validator: idCardValidity, trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  sms: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})
const smsTime = ref(0)
const changeTime = () => {
  const timer = setInterval(() => {
    if (smsTime.value > 0) {
      smsTime.value--
    } else {
      clearInterval(timer)
      smsTime.value = 0
      localStorage.removeItem('changeNameTime')
    }
  }, 1000)
}


const getSms = () => {
  realRef.value.validateField('mobile', async (valid: boolean) => {
    if (valid) {
      smsTime.value = 120
      changeTime()
      localStorage.setItem('changeNameTime', new Date().getTime().toString())
      const res = await sendSms_api({
        mobile: realValue.value.mobile,
        acode: '+' + realValue.value.acode,
      })
    }
  })
}

const sumbit = () => {
  realRef.value.validate(async (isValid: boolean) => {
    if (isValid) {
      const data: any = {
        ...realValue.value,
        acode: '+' + realValue.value.acode,
      }
      const res = await authenticate_api(data)
      if (res.status === 1) {
        router.replace('/manage/user/myinfo')
      } else {
        showUp.value = 2
        showBtn.value = true
        img.value = icon_user
        img_small.value = '#icon-renzhengshibai'
        msg.value = '很遗憾，你的实名认证未通过！'
        msgTwo.value = '请检查姓名与身份证号码是否有误，更正后再试'
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.real_name {
  .card_body {
    padding-bottom: 34px;
    .sms_ipt {
      width: 184px;
      margin-right: 8px;
    }
    .bdc_btn {
      width: 128px;
    }
    :deep(.el-form-item__label) {
      color: #909399;
    }
  }
}
</style>
