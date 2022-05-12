<template>
  <div class="change_pass_page kz_card">
    <div class="card_title">修改密码</div>
    <div class="card_body fcc">
      <el-form
        v-show="setLv === 1"
        ref="telFormRef"
        :model="telForm"
        :rules="telRules"
        size="large"
        hide-required-asterisk
      >
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="telForm.tel" placeholder="请输入手机号">
            <template #prepend>
              <el-select v-model="acode" style="width: 80px">
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
        <el-form-item label="验证码" prop="yzm">
          <div class="fcs f1">
            <el-input v-model="telForm.yzm" placeholder="请输入验证码" class="yzm_ipt"></el-input>
            <el-button class="bdc_btn" :disabled="smsTime > 0" @click="getSms">{{
              smsTime === 0 ? '获取验证码' : smsTime + 'S后重新获取'
            }}</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="f1 mt20" @click="next">下一步</el-button>
        </el-form-item>
      </el-form>

      <el-form
        v-show="setLv === 2"
        ref="passFormRef"
        v-loading="loading"
        :model="passForm"
        :rules="rules"
        size="large"
        hide-required-asterisk
        label-width="70px"
      >
        <el-form-item label="原密码" prop="oldPass">
          <el-input
            v-model="passForm.oldPass"
            placeholder="请输入原密码"
            style="width: 320px"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input
            v-model="passForm.pass"
            placeholder="请输入新密码"
            style="width: 320px"
            show-password
          ></el-input>
        </el-form-item>
        <div class="tips">* 密码最小长度6个字，最大长度18个字；<br />必须包含: 小写字母、数字</div>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="passForm.checkPass"
            placeholder="请再次输入新密码"
            style="width: 320px"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="f1" type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { mobileCheck, passReg } from '@/utils/index'
import areaNum from '@/utils/areaNum'
import { sendSms } from '@/api/login'
import type { FormInstance } from 'element-plus'

const setLv = ref(1)

const telForm = reactive({
  tel: '',
  yzm: '',
})
const telFormRef = ref()
const telRules = reactive({
  tel: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: mobileCheck, trigger: 'blur' },
  ],
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})

const smsTime = ref(0)
const changeTime = () => {
  const timer = setInterval(() => {
    if (smsTime.value > 0) {
      smsTime.value--
    } else {
      clearInterval(timer)
      smsTime.value = 0
      localStorage.removeItem('changePsssTime')
    }
  }, 1000)
}

const acode = ref('86')
const getSms = () => {
  telFormRef.value.validateField('tel', async (valid: boolean) => {
    if (valid) {
      smsTime.value = 120
      changeTime()
      localStorage.setItem('changePsssTime', new Date().getTime().toString())
      const res = await sendSms({
        mobile: telForm.tel,
        acode: '+' + acode.value,
      })
    }
  })
}

const next = () => {
  telFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      setLv.value = 2
    }
  })
}

const oldtime = Number(localStorage.getItem('changePsssTime'))
if (oldtime) {
  const now = new Date().getTime()
  if (now - oldtime < 120000) {
    const stime = (120 - (now - oldtime) / 1000).toFixed(0)
    smsTime.value = Number(stime)
    changeTime()
  } else {
    localStorage.removeItem('changePsssTime')
  }
}

const passFormRef = ref<FormInstance>()
const passForm = reactive({
  oldPass: '',
  pass: '',
  checkPass: '',
})

const validatePass = (rule: any, value: any, callback: any) => {
  if (value && passForm.pass !== '') {
    if (!passFormRef.value) {
      return
    }
    passFormRef.value.validateField('pass', () => null)
  }
  callback()
}
const validatePass1 = (rule: any, value: any, callback: any) => {
  if (value === passForm.oldPass) {
    callback(new Error('新旧密码不能相同！'))
  } else if (!passReg.test(value)) {
    callback(new Error('密码长度在6~18之间，不能只是数字或字母'))
  } else {
    if (passForm.checkPass !== '') {
      if (!passFormRef.value) {
        return
      }
      passFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== passForm.pass) {
    callback(new Error('两次密码输入不一致！'))
  } else {
    callback()
  }
}

const rules = reactive({
  oldPass: [
    { required: true, message: '请输入原密码！', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' },
  ],
  pass: [
    { required: true, message: '请输入新密码！', trigger: 'blur' },
    { min: 6, max: 12, message: '密码长度须在6~12个字符！', trigger: 'blur' },
    { validator: validatePass1, trigger: 'blur' },
  ],
  checkPass: [
    { required: true, message: '请再次输入新密码！', trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' },
  ],
})

const loading = ref(false)
const onSubmit = () => {
  passFormRef.value!.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
    }
  })
}
</script>

<style lang="scss" scoped>
.change_pass_page {
  .card_body {
    padding-bottom: 34px;
    .yzm_ipt {
      width: 184px;
      margin-right: 8px;
    }
    .bdc_btn {
      width: 128px;
    }
    :deep(.el-form-item__label) {
      color: #909399;
    }
    .tips {
      padding-left: 70px;
      margin-bottom: 22px;
      font-size: 12px;
      color: #909399;
    }
  }
}
</style>
