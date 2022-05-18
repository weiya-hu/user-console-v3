<template>
  <div class="my_info_page flex">
    <KzStepTab v-model="active" :tabs="tabs" @change="change">
      <template #default="{ item }">
        {{ item.title }}
      </template>
    </KzStepTab>
    <div class="info_content f1">
      <el-scrollbar ref="scrollbarRef" :noresize="true" @scroll="scroll">
        <div class="conten_item conten_item1 kz_card">
          <div class="card_title">基本信息</div>
          <div class="card_cont">
            <div>
              <el-descriptions :column="2" size="large" width="500">
                <el-descriptions-item>
                  <span class="item_avater">团队头像</span>
                  <div v-loading="upLoading" class="user_avater">
                    <KzImgUpload
                      v-if="!upLoading"
                      ref="KzImgUploadRef"
                      @change="changes"
                      @up-one-success="upSuccess"
                    >
                      <el-avatar :size="100" :src="imgUrl"></el-avatar>
                    </KzImgUpload>
                    <el-avatar v-else :size="100" :src="imgUrl" class="up_avatar"></el-avatar></div
                ></el-descriptions-item>
                <el-descriptions-item><el-link type="primary">修改</el-link></el-descriptions-item>
                <el-descriptions-item label="团队名称">重庆康洲数智有限公司</el-descriptions-item>
                <el-descriptions-item><el-link type="primary">修改</el-link></el-descriptions-item>
                <el-descriptions-item label="所属企业"
                  ><span class="certified">未认证</span
                  ><el-icon color="#FF4736 "><Warning /></el-icon
                ></el-descriptions-item>
                <el-descriptions-item
                  ><el-link type="primary">立即认证</el-link></el-descriptions-item
                >
                <el-descriptions-item label="团队编码">561245</el-descriptions-item>
                <el-descriptions-item></el-descriptions-item>

                <el-descriptions-item label="团队管理员">康洲</el-descriptions-item>
                <el-descriptions-item
                  ><el-link type="primary">转让团队</el-link></el-descriptions-item
                >
                <el-descriptions-item label="团队人数"
                  >1
                  <span class="certified">/人</span>
                  <img :src="icon_company" alt="" />
                </el-descriptions-item>
                <el-descriptions-item
                  ><el-link type="primary">人员管理</el-link></el-descriptions-item
                >
              </el-descriptions>
            </div>
          </div>
        </div>
        <div class="conten_item conten_item2 kz_card">
          <div class="card_title">联系信息</div>
          <div class="content_ord">
            <img :src="icon_order" alt="" />
            <div>未添加联系信息</div>
            <div>添加联系信息，为您提供1对1的客户服务</div>
            <el-button type="primary">立即添加</el-button>
          </div>
        </div>
        <div class="conten_item conten_item2 kz_card">
          <div class="card_title">认证消息</div>
          <div class="content_ord">
            <img :src="icon_ordertwo" alt="" />
            <div>企业未认证</div>
            <div>认证企业后才能使用完整的团队功能</div>
            <el-button type="primary" @click="$router.push('authentication')">立即认证</el-button>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import { ref, onMounted } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import icon_company from '@/assets/images/company_num.png'
import icon_order from '@/assets/images/no_ordered.png'
import icon_ordertwo from '@/assets/images/no_two.png'
import KzImgUpload from '@/components/KzImgUpload.vue'

const tabs = ref([{ title: '基本信息' }, { title: '联系信息' }, { title: '认证信息' }])
const active = ref(0)
let boxHeight: number
let el: NodeListOf<HTMLElement>
onMounted(() => {
  boxHeight = (document.querySelector('.layout_page') as HTMLElement).offsetHeight / 2
  el = document.querySelectorAll('.conten_item')
})
const change = (i: number) => {
  scrollbarRef.value!.setScrollTop(el[i].offsetTop)
}
const tab = ref(1)

const scrollbarRef = ref()
const scroll = ({ scrollTop }: { scrollTop: number }) => {
  if (el[1].getBoundingClientRect().y > boxHeight) {
    active.value = 0
  } else if (
    el[1].getBoundingClientRect().y < boxHeight &&
    el[2].getBoundingClientRect().y > boxHeight
  ) {
    active.value = 1
  } else if (el[2].getBoundingClientRect().y < boxHeight) {
    active.value = 2
  }
}
const upLoading = ref(false)
const imgUrl = ref('')
const KzImgUploadRef = ref() //头像
const changes = () => {
  imgUrl.value = KzImgUploadRef.value.imgs[0].url
  KzImgUploadRef.value.submit()
}
const upSuccess = (url: string, length: number) => {
  upLoading.value = true
  imgUrl.value = url
  console.log(url, length)
  setTimeout(() => {
    // 发请求
    // editData({ head: url }).finally(() => {
    //   upLoading.value = false
    // })
  }, 1000)
}
</script>

<style lang="scss" scoped>
.my_info_page {
  height: 100%;
  .info_content {
    margin-left: 16px;
    height: 100%;
    .conten_item {
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 16px;
      :deep(.el-descriptions__label) {
        margin-right: 40px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #909399;
      }
      :deep(.el-descriptions__cell) {
        padding-bottom: 35px;
        text-align: left;
      }
      :deep(.el-descriptions__content) {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #303133;
      }
    }
    .conten_item1 {
      // height: 486px;
      display: flex;
      .item_avater {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #909399;
        position: relative;
        top: 50px;
        right: 40px;
      }
      .user_avater {
        width: 96px;
        height: 96px;
        border: 1px solid #eeeeee;
        margin-left: 100px;

        border-radius: 50%;
        overflow: hidden;
        position: relative;
        .up_avatar {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        :deep(.el-upload) {
          border-radius: 50%;
          border: none;
          position: relative;
          &:hover::after {
            content: '修改头像';
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.44);
            color: #fff;
          }
        }
      }
      .card_cont {
        width: 600px;
        padding-top: 75px;
        padding-bottom: 40px;
        margin: 0 auto;
      }
      .certified {
        color: #909399;
        margin-right: 9px;
      }
      .el-icon {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
      }
    }
    .conten_item2 {
      .content_ord {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        div:nth-child(2) {
          font-family: PingFangSC-Medium, PingFang SC;
          font-size: 14px;
          color: #303133;
          margin-top: 8px;
        }
        div:nth-child(3) {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #909399;
          margin-top: 2px;
          margin-bottom: 32px;
        }
        .el-button {
          margin-bottom: 56px;
        }
      }
    }
    .conten_item3 {
      height: 308px;
    }
  }
}
</style>
