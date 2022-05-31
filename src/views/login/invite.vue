<template>
  <div class="rz_dialog_hll">
    <el-dialog v-model="show" width="500px" custom-class="invites_dialog" :show-close="false">
      <div class="mid">
        <div class="mr">
          <div class="fir">
            <div>
              康州邀请你加入
              <span>康洲大数据（重庆）有限公司</span>，
            </div>
          </div>
          <div>是否接受邀请？</div>
          <el-form :model="nameForm">
            <el-form-item
              label="真实姓名"
              prop="name"
              :rules="[{ required: true, message: '请填写真实姓名' }]"
            >
              <el-input v-model="nameForm.name" placeholder="请输入真实姓名" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="imgs">
        <img :src="invite_i" alt="" />
        <div class="cc">
          <span>拒绝邀请</span>
          <el-button class="accept" @click="submit">接受邀请</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import invite_i from '@/assets/images/invite.png'
import { ref, reactive } from 'vue'
const show = ref(true)
const nameForm = reactive({
  name: '',
})
const submit = () => {
  console.log(nameForm.name)
}
</script>
<style lang="scss" scoped>
:deep(.invites_dialog) {
  border-radius: 16px;
  background: #9fc0ff;
  height: 315px;
  .mid {
    display: flex;
    border-radius: 8px;
    width: 452px;
    height: 241px;
    background: white;
    font-size: 16px;
    font-weight: bold;
    color: #303133;
    .mr {
      margin: 32px 0 20px 32px;
    }
    .fir {
      margin-bottom: 10px;
    }
    span {
      font-family: PingFangSC-Medium, PingFang SC;
      color: #2d68eb;
    }
    .el-form {
      margin-top: 25px;
      .el-input {
        width: 300px;
        height: 36px;
      }
      .el-form-item__label {
        padding-right: 20px;
      }
    }
  }
  .el-dialog__header {
    padding: 0;
    padding-bottom: 8px;
  }
  img {
    position: absolute;
    bottom: 0px;
    left: 0;
  }
  .cc {
    position: absolute;
    right: 24px;
    bottom: 24px;
    .el-button {
      margin-left: 24px;
      span {
        color: #2d68eb;
      }
    }
    span {
      color: white;
      cursor: pointer;
    }
  }
}
</style>
