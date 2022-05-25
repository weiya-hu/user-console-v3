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
              <el-descriptions :column="2" size="large">
                <el-descriptions-item>
                  <span class="item_avater">企业logo</span>
                  <div v-loading="upLoading" class="user_avater">
                    <KzImgUpload
                      v-if="!upLoading"
                      ref="KzImgUploadRef"
                      @change="changes"
                      @up-one-success="upSuccess"
                    >
                      <el-image style="width: 220px; height: 110px" :src="imgUrl" fit></el-image>
                    </KzImgUpload>
                    <el-image
                      v-else
                      style="width: 220px; height: 110px"
                      :src="imgUrl"
                      fit
                      class="up_avatar"
                    ></el-image></div
                ></el-descriptions-item>
                <el-descriptions-item><el-link type="primary">修改</el-link></el-descriptions-item>
                <div v-if="showCom">
                  <el-descriptions-item label="企业名称">重庆康洲数智有限公司</el-descriptions-item>
                  <el-descriptions-item
                    ><el-link type="primary" @click="showCom = false"
                      >修改</el-link
                    ></el-descriptions-item
                  >
                </div>
                <div v-else>
                  <el-descriptions-item label="企业名称"
                    ><el-input v-model="company_name"></el-input
                  ></el-descriptions-item>
                  <el-descriptions-item
                    ><el-button type="primary" size="large" @click="showCom = true"
                      >保存</el-button
                    ></el-descriptions-item
                  >
                </div>

                <el-descriptions-item label="认证企业"
                  ><span class="certified">未认证</span
                  ><el-icon color="#FF4736 "><Warning /></el-icon
                ></el-descriptions-item>
                <el-descriptions-item
                  ><el-link type="primary">立即认证</el-link></el-descriptions-item
                >
                <el-descriptions-item label="企业编码">561245</el-descriptions-item>
                <el-descriptions-item><el-link type="primary">复制</el-link></el-descriptions-item>

                <el-descriptions-item
                  ><span class="item_avater comp_one">企业管理员</span>康洲</el-descriptions-item
                >
                <el-descriptions-item
                  ><el-link type="primary">变更管理员</el-link></el-descriptions-item
                >
                <el-descriptions-item label="企业人数"
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
          <div class="flex">
            <div class="card_title">联系信息</div>
            <el-button v-if="!showContent" type="primary">保存</el-button>
          </div>

          <div v-if="showContent" class="content_ord">
            <img :src="icon_order" alt="" />
            <div>未添加联系信息</div>
            <div>添加联系信息，为您提供1对1的客户服务</div>
            <el-button type="primary" @click="showContent = false">立即添加</el-button>
          </div>
          <div v-else class="content_two">
            <el-form :model="formInline" label-width="150px">
              <el-form-item label="联系人">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="联系人电话">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="联系人邮箱">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="企业座机">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="所在地区">
                <KzCascader v-model="formInline.addr" type="address" placeholder="请选择" />
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="官网地址">
                <el-input v-model="formInline.user" placeholder="请输入" />
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="conten_item conten_item2 kz_card conten_item3">
          <div class="flex">
            <div class="card_title">认证消息</div>
            <el-button class="bdc_btn" @click="showContent = false">重新认证</el-button>
          </div>
          <div class="content_ord">
            <img :src="icon_ordertwo" alt="" />
            <div>企业未认证</div>
            <div>认证企业后才能使用完整的团队功能</div>
            <el-button type="primary" @click="$router.push('authentication')">立即认证</el-button>
          </div>
          <div class="content_last">
            <div class="items">
              <div class="item_title">企业证照</div>
              <img src="" alt="" />
            </div>
            <div class="items">
              <div class="item_title">统一社会信用代码</div>
              <div class="item_content">asdsfdgdg</div>
            </div>
            <div class="items">
              <div class="item_title">行业分类</div>
              <div class="item_content">asdsfdgdg</div>
            </div>
            <div class="items">
              <div class="item_title">证件有效期</div>
              <div class="item_content">2018-4-20到2020-9-30</div>
              <img :src="icon_recertify" alt="" />
            </div>
          </div>
          <div class="content_ord last_img">
            <img :src="icon_submit" alt="" />
            <div>企业认证已提交，请等待后台审核</div>
            <div>审核结果会通过系统消息的方式进行通知，请注意查看</div>
          </div>
          <div class="content_ord last_img">
            <img :src="icon_fail" alt="" />
            <div>很遗憾，你的企业认证未通过！</div>
            <div>请检查输入的信息是否有误，更正后再试</div>
            <el-button type="primary" @click="$router.push('authentication')">重新认证</el-button>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import { ref, onMounted, reactive } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import icon_company from '@/assets/images/company_num.png'
import icon_order from '@/assets/images/no_ordered.png'
import icon_recertify from '@/assets/images/recertify.png'
import icon_fail from '@/assets/images/fail_company.png'
import icon_submit from '@/assets/images/submit_company.png'
import icon_ordertwo from '@/assets/images/no_two.png'
import KzImgUpload from '@/components/KzImgUpload.vue'
import KzCascader from '@/components/KzCascader.vue'
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
const showCom = ref(true) //修改公司名字
const showContent = ref(true) //联系信息
const formInline = reactive({
  user: '',
  region: '',
  addr: [],
})
const company_name = ref('')
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
        // width: 400px;
        padding-bottom: 32px;
        // text-align: right;
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
      .comp_one {
        position: relative;
        top: 0;
        right: 53px;
      }
      .user_avater {
        width: 220px;
        height: 110px;
        border: 1px solid #eeeeee;
        margin-left: 100px;
        overflow: hidden;
        position: relative;
        .up_avatar {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        :deep(.el-upload) {
          width: 220px;
          height: 110px;
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
            background-color: rgba(0, 0, 0, 0.44);
            color: #fff;
          }
        }
      }
      .card_cont {
        width: 650px;
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
      .el-input {
        width: 344px;
        height: 40px;
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
          margin-top: 4px;
          margin-bottom: 32px;
        }
        .el-button {
          margin-bottom: 56px;
        }
      }
      .flex {
        display: flex;
        justify-content: space-between;
        .el-button {
          margin-top: 22px;
          margin-right: 24px;
        }
      }
      .content_two {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 46px;
        :deep(.el-form-item__label) {
          color: #909399;
          padding-right: 40px;
        }
        :deep(.el-input) {
          width: 524px;
          height: 40px;
        }
      }
    }
    .conten_item3 {
      .content_last {
        margin-left: 27%;
        padding-bottom: 60px;
        img:nth(1) {
          width: 160px;
          height: 120px;
        }
        .items {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          .item_title {
            width: 115px;
            display: flex;
            justify-content: flex-end;
            color: #909399;
            margin-right: 40px;
          }
          .item_content {
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #303133;
            font-size: 14px;
            width: 158px;
          }
        }
      }
      .last_img {
        img {
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
