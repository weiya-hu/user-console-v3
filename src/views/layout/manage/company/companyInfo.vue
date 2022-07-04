<template>
  <div id="company_info_page_id" class="my_info_page">
    <KzStepTab
      v-model="active"
      :tabs="tabs"
      :item-el="itemEl"
      :view-height="viewHeight"
      :total-height="totalHeight"
    >
      <template #default="{ item }">
        {{ item.title }}
      </template>
      <template #content>
        <div id="company_item_id" class="info_content f1">
          <div class="conten_item conten_item1 kz_card">
            <div class="card_title">基本信息</div>
            <div class="card_cont">
              <div>
                <el-descriptions :column="2" size="large" border>
                  <!-- <el-descriptions-item label-align="right" label="企业logo">
                    <div v-loading="upLoading" class="user_avater">
                      <el-image
                        style="width: 220px; height: 110px"
                        :src="logoImg || icon_logo"
                        fit
                      ></el-image></div
                  ></el-descriptions-item>
                  <el-descriptions-item
                    ><el-link type="primary" @click="editLogo">修改</el-link></el-descriptions-item
                  > -->
                  <!-- <div v-if="showCom">
                    <el-descriptions-item label="企业名称" label-align="right"
                      >重庆康洲数智有限公司</el-descriptions-item
                    >
                    <el-descriptions-item
                      ><el-link type="primary" @click="showCom = false"
                        >修改</el-link
                      ></el-descriptions-item
                    >
                  </div>
                  <div v-else>
                    <el-descriptions-item label="企业名称" label-align="right"
                      ><el-input v-model="company_name"></el-input
                    ></el-descriptions-item>
                    <el-descriptions-item
                      ><el-button type="primary" size="large" @click="showCom = true"
                        >保存</el-button
                      ></el-descriptions-item
                    >
                  </div> -->
                  <div v-if="basic.status === 3">
                    <el-descriptions-item label="认证企业" label-align="right">{{
                      basic.name
                    }}</el-descriptions-item>
                    <el-descriptions-item
                      ><el-link type="primary" disabled>重新认证</el-link></el-descriptions-item
                    >
                  </div>
                  <div v-else>
                    <el-descriptions-item label="认证企业" label-align="right"
                      ><span class="certified">未认证</span
                      ><el-icon color="#FF4736 "><Warning /></el-icon
                    ></el-descriptions-item>
                    <el-descriptions-item
                      ><el-link type="primary">立即认证</el-link></el-descriptions-item
                    >
                  </div>

                  <el-descriptions-item label="企业编码" label-align="right">
                    <div :class="basic.invite_code ? '' : 'no_content'">
                      {{ basic.invite_code ? basic.invite_code : '未填写' }}
                    </div></el-descriptions-item
                  >
                  <el-descriptions-item
                    ><el-link type="primary" @click="copyCode(basic.invite_code)"
                      >复制</el-link
                    ></el-descriptions-item
                  >

                  <el-descriptions-item label="企业管理员" label-align="right">{{
                    basic.admin
                  }}</el-descriptions-item>
                  <el-descriptions-item
                    ><el-link type="primary" disabled>变更管理员</el-link></el-descriptions-item
                  >
                  <el-descriptions-item label="企业人数" label-align="right"
                    >{{ basic.size }}
                    <span class="certified">/人</span>
                    <img :src="icon_company" alt="" />
                  </el-descriptions-item>
                  <el-descriptions-item
                    ><el-link type="primary" @click="router.push('/manage/company/personnelmanage')"
                      >人员管理</el-link
                    ></el-descriptions-item
                  >
                </el-descriptions>
              </div>
            </div>
          </div>
          <div class="conten_item conten_item2 kz_card">
            <div class="card_title fsc">
              <div>联系信息</div>
              <el-button v-if="sub" class="bdc_btn" @click="sub = false">修改</el-button>
              <el-button v-else type="primary" @click="goEdit">保存</el-button>
            </div>
            <div v-if="sub" class="scard_two">
              <div>
                <el-descriptions :column="1" size="large" border>
                  <el-descriptions-item label-align="right" label="联系人"
                    >{{ contact.legal_person }}
                  </el-descriptions-item>
                  <el-descriptions-item label="联系人电话" label-align="right">{{
                    contact.contact
                  }}</el-descriptions-item>

                  <el-descriptions-item label="联系人邮箱" label-align="right">
                    <div :class="contact.email ? '' : 'no_content'">
                      {{ contact.email ? contact.email : '未填写' }}
                    </div></el-descriptions-item
                  >

                  <el-descriptions-item label="企业座机" label-align="right">
                    <div :class="contact.tel ? '' : 'no_content'">
                      {{ contact.tel ? contact.tel : '未填写' }}
                    </div></el-descriptions-item
                  >

                  <el-descriptions-item
                    v-if="contact.province"
                    label="所在区域"
                    label-align="right"
                  >
                    {{
                      getHashStr(
                        strToArr(contact.province, contact.city, contact.district),
                        addressHash
                      )
                    }}</el-descriptions-item
                  >

                  <el-descriptions-item label="详细地址" label-align="right">
                    <div :class="contact.address ? '' : 'no_content'">
                      {{ contact.address ? contact.address : '未填写' }}
                    </div>
                  </el-descriptions-item>
                  <el-descriptions-item label="官网地址" label-align="right"
                    ><span class="urlAdr">
                      <div :class="contact.url ? '' : 'no_content'">
                        {{ contact.url ? contact.url : '未填写' }}
                      </div></span
                    >
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <!-- <div class="content_ord">
              <img :src="icon_order" alt="" />
              <div>未添加联系信息</div>
              <div>添加联系信息，为您提供1对1的客户服务</div>
              <el-button type="primary" @click="showContent = false">立即添加</el-button>
            </div> -->
            <div v-if="!sub" class="content_two">
              <el-form ref="contactRule" :model="formInline" label-width="150px" :rules="telRules">
                <el-form-item label="联系人">
                  <el-input v-model="formInline.legal_person" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="联系人电话" prop="contact">
                  <el-input v-model="formInline.contact" placeholder="请输入" autocomplete="off" />
                </el-form-item>
                <el-form-item label="联系人邮箱">
                  <el-input v-model="formInline.email" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="企业座机">
                  <el-input v-model="formInline.tel" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="所在地区">
                  <KzCascader v-model="formInline.addr" type="address" placeholder="请选择" />
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="formInline.address" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="官网地址">
                  <el-input v-model="formInline.url" placeholder="请输入" />
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="conten_item conten_item2 kz_card conten_item3">
            <div class="flex">
              <div class="card_title">认证信息</div>
              <!-- <el-button
                v-show="audit.status === 3"
                class="bdc_btn"
                @click="$router.push(`authentication/?id=${basic.id}`)"
                >重新认证</el-button
              > -->
            </div>
            <!-- <div v-if="audit.status === 1" class="content_ord">
              <img :src="icon_ordertwo" alt="" />
              <div>企业未认证</div>
              <div>认证企业后才能使用完整的团队功能</div>
              <el-button type="primary" @click="$router.push(`authentication/?id=${basic.id}`)"
                >立即认证</el-button
              >
            </div> -->
            <!-- <div v-else-if="audit.status === 3" class="content_last">
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
            </div> -->
            <div class="scard_two">
              <div>
                <el-descriptions :column="1" size="large" border>
                  <el-descriptions-item label-align="right" label="企业证照"
                    ><img :src="audit.license" alt="" class="img" />
                  </el-descriptions-item>
                  <el-descriptions-item label="统一社会信用代码" label-align="right">{{
                    audit.code
                  }}</el-descriptions-item>

                  <el-descriptions-item label="行业分类" label-align="right">{{
                    getHashStr(audit.industry_id, typeHash)
                  }}</el-descriptions-item>

                  <el-descriptions-item label="证件有效期" label-align="right"
                    >{{ formatDate(new Date(Number(audit.left_time)), 'yyyy-MM-dd') }}
                    <img :src="icon_recertify" alt=""
                  /></el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <!-- <div v-else-if="audit.status === 2" class="content_ord last_img">
              <img :src="icon_submit" alt="" />
              <div>企业认证已提交，请等待后台审核</div>
              <div>审核结果会通过系统消息的方式进行通知，请注意查看</div>
            </div>
            <div v-else-if="audit.status === 4" class="content_ord last_img">
              <img :src="icon_fail" alt="" />
              <div>很遗憾，你的企业认证未通过！</div>
              <div>请检查输入的信息是否有误，更正后再试</div>
              <el-button type="primary" @click="$router.push('authentication')">重新认证</el-button>
            </div> -->
          </div>
        </div>
      </template>
    </KzStepTab>
    <!-- 修改头像 -->
    <el-dialog ref="editRef" v-model="editLogoShow" title="编辑用户头像" width="500px">
      <KzUpAvatar ref="KzUpLogoRef" v-model="logoImg" @success="upSuccess" />
      <template #footer>
        <el-button class="bdc_btn" @click="logoClose">取消</el-button>
        <el-button type="primary" @click="logoChanges">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import KzStepTab from '@/components/KzStepTab.vue'
import KzUpAvatar from '@/components/KzUpAvatar.vue'
import { ref, onMounted, reactive, computed, nextTick } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import icon_logo from '@/assets/images/df_com_logo.png'
import icon_company from '@/assets/images/company_num.png'
import icon_order from '@/assets/images/no_ordered.png'
import icon_recertify from '@/assets/images/recertify.png'
import icon_fail from '@/assets/images/fail_company.png'
import icon_submit from '@/assets/images/submit_company.png'
import icon_ordertwo from '@/assets/images/no_two.png'
import useClipboard from 'vue-clipboard3'
import KzCascader from '@/components/KzCascader.vue'
import { formatDate } from '@/utils/date'
import { getHashStr, strToArr, errMsg, okMsg, telReg } from '@/utils/index'
import { mainStore } from '@/store/index'
import { getCompany_api, reviseContact_api } from '@/api/manage/company/companyInfo'
import { useRoute, useRouter } from 'vue-router'

const tabs = ref([{ title: '基本信息' }, { title: '联系信息' }, { title: '认证信息' }])
const active = ref(0)
const itemEl = ref<NodeListOf<HTMLElement>>()
const viewHeight = ref(0)
const totalHeight = ref(0)
onMounted(() => {
  nextTick(() => {
    itemEl.value = document.querySelectorAll('.info_content .conten_item')
    viewHeight.value = document.getElementById('company_info_page_id')!.offsetHeight
    totalHeight.value = document.getElementById('company_item_id')!.offsetHeight
  })
})

const router = useRouter()
const route = useRoute()
const store = mainStore()
const addressHash = computed(() => store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)
const id = route.query.id

// 修改Logo
const imgUrl = ref('')
const sub = ref(true)
const contactRule = ref()
const editLogoShow = ref(false)
const upLoading = ref(false)
const KzUpLogoRef = ref()
const logoImg = ref('')
const editLogo = () => {
  editLogoShow.value = true
}
const logoClose = () => {
  editLogoShow.value = false
}
const logoChanges = () => {
  console.log(logoImg.value)
  editLogoShow.value = false
}
const upSuccess = () => {
  // 头像上传成功
  upLoading.value = true
  setTimeout(() => {
    // 发请求
    // editData({ head: imgUrl.value }).finally(() => {
    upLoading.value = false
    // })
  }, 1000)
}

const showCom = ref(true) //修改公司名字
const showContent = ref(true) //联系信息
const formInline = reactive({
  address: '',
  contact: '',
  email: '',
  legal_person: '',
  tel: '',
  url: '',
  addr: [] as (string | number)[],
})
const company_name = ref('')
//复制编码
const telPass = (rule: any, value: string, callback: any) => {
  if (telReg.test(value)) {
    callback()
  } else if (value === '') {
    callback(new Error('请输入手机号！'))
  } else {
    callback(new Error('请输入正确的手机号码!'))
  }
}
const telRules = reactive({
  contact: [{ validator: telPass, trigger: 'blur' }],
})
const { toClipboard } = useClipboard()
const copyCode = async (val: any) => {
  try {
    await toClipboard(val)
  } catch (e) {
    errMsg('该浏览器不支持自动复制')
  }
}

const audit = ref<any>({})
const basic = ref<any>({})
const contact = ref<any>({})
const goEdit = () => {
  const Data = {
    city: formInline.addr[1] || 0,
    province: formInline.addr[0] || 0,
    district: formInline.addr[2],
  }
  contactRule.value.validateField('contact', async (valid: boolean) => {
    if (valid) {
      const { status } = await reviseContact_api({
        ...formInline,
        ...Data,
      })
      status === 1 ? okMsg('联系信息修改成功') : errMsg('联系信息修改失败')
    }
    getInfo()
  })

  sub.value = true
}
const getInfo = async () => {
  const { body, status } = await getCompany_api()
  if (status === 1) {
    basic.value = body.basic
    contact.value = body.contact
    formInline.address = body.contact.address
    formInline.contact = body.contact.contact
    formInline.email = body.contact.email
    formInline.legal_person = body.contact.legal_person
    formInline.url = body.contact.url
    formInline.addr = [body.contact.province, body.contact.city, body.contact.district]

    audit.value = body.audit
  }
}
getInfo()
</script>

<style lang="scss" scoped>
.my_info_page {
  height: 100%;
  .info_content {
    height: 100%;
    .conten_item {
      min-height: 300px;
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 16px;
      :deep(.el-descriptions__label) {
        margin-right: 40px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #909399;
        background: white;
      }
      :deep(.el-descriptions) {
        --el-descriptions-table-border: 1px solid #fff;
      }
      :deep(.el-descriptions__cell) {
        padding-bottom: 24px;
        width: 565px;
        padding-right: 32px;
      }
      :deep(.el-descriptions__content) {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #303133;
        .no_content {
          color: #c0c4cc;
        }
      }
      .urlAdr {
        color: #2d68eb !important;
      }
      .scard_two {
        span {
          color: #2d68eb;
        }
        margin: 0 auto;
        padding-bottom: 30px;
        width: 674px;
        margin-left: 188px;
        .img {
          width: 160px;
          height: 120px;
        }
      }
    }
    .conten_item1 {
      // height: 486px;
      // display: flex;
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
        :deep(.el-image) {
          width: 220px;
          height: 110px;
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
        width: 610px;
        padding-bottom: 40px;
        margin: 0 auto;
        margin-left: 260px;
      }

      // .scard_two {
      //   span {
      //     color: #2d68eb;
      //   }
      //   margin: 0 auto;
      //   margin-right: 300px;
      // }
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
      .content_two {
        display: flex;
        justify-content: center;
        padding-bottom: 46px;
        // padding-left: 365px;
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
        width: 674px;
        margin: 0 auto;
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
