<template>
  <div class="rz_dialog_hll">
    <el-dialog v-model="show" width="500px" custom-class="invites_dialog" :show-close="false">
      <div class="mid">
        <div class="mr">
          <div class="fir">
            <div>
              {{ names.user_name }}邀请你加入 <span>{{ names.company_name }}</span
              >，
            </div>
          </div>
          <div>是否接受邀请？</div>
          <!-- <el-form :model="nameForm">
            <el-form-item
              label="真实姓名"
              prop="name"
              :rules="[{ required: true, message: '请填写真实姓名' }]"
            >
              <el-input v-model="nameForm.name" placeholder="请输入真实姓名" />
            </el-form-item>
          </el-form> -->
        </div>
      </div>
      <div class="imgs">
        <img :src="invite_i" alt="" />
        <div class="cc">
          <span @click="closeWin">拒绝邀请</span>
          <el-button class="accept" @click="submit">接受邀请</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import invite_i from '@/assets/images/invite.png'
import { ref, reactive, computed, onMounted } from 'vue'
import { getSignname_api, addSign_api } from '@/api/manage/company/personnelManage'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import { okMsg } from '@/utils/index'
import { nextTick } from 'process'
const router = useRouter()
const route = useRoute()
const store = mainStore()
const uid = route.query.uid
const sign = route.query.sign as string
const cid = route.query.cid
const left_time = route.query.left_time
const userId = computed(() => store.state.userInfo.id)
const codeUrl = computed(() => store.state.yxtUrl.mobile)

const show = ref(true)
const nameForm = reactive({
  name: '',
})
const names = ref<any>({})
const getName = async () => {
  const { body, status } = await getSignname_api({
    cid: Number(cid),
    uid: Number(uid),
    sign: sign.toString(),
    left_time: Number(left_time),
  })
  status && (names.value = body)
  console.log(userId.value)
}
getName()
const submit = async () => {
  if (userId.value) {
    const { body } = await addSign_api({
      cid: Number(cid),
      uid: Number(uid),
      sign: sign.toString(),
      left_time: Number(left_time),
    })
    body === 2
      ? okMsg('已经加入该企业，无需再次申请')
      : okMsg('申请加入中，等待企业管理员同意/拒绝')
  } else {
    okMsg('请登录后接受邀请')
    router.replace(
      '/login?url=' +
        encodeURIComponent(
          window.location.origin +
            `/invite?uid=${uid}&sign=${sign}&left_time=${left_time}&cid=${cid}`
        )
    )
  }
}
const closeWin = () => {
  okMsg('已拒绝邀请')
  //   window.opener = null
  //   window.open('', '_self')
  //   window.close()
}
</script>
<style lang="scss" scoped>
:deep(.invites_dialog) {
  border-radius: 16px;
  background: #9fc0ff;
  height: 255px;
  .mid {
    display: flex;
    border-radius: 8px;
    width: 452px;
    height: 220px;
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
