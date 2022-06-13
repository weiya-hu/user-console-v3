<template>
  <div class="salon_activity">
    <div class="flexl top_logo" @click="toIndex">
      <div class="fleximg"><img src="@/assets/images/logo-white.svg" /></div>
    </div>
    <div class="fleximg salon_txt_img"><img src="@/assets/images/salon/salon_top.png" /></div>
    <div class="video_pre">
      <video ref="videoRef" controls>
        <source
          src="https://res.kzszh.com/web/index/video/6849e3c8e355648c3b61c189478fab15.mp4"
          type="video/mp4"
        />
        您的浏览器不支持Video标签。
      </video>
      <div v-if="!videoPlaying" class="video_cover fleximg">
        <div class="fleximg" @click="videoPlay">
          <img src="@/assets/images/salon/video_button.png" />
        </div>
      </div>
    </div>
    <div class="salon_form">
      <el-form ref="formRef" :model="formValue" :rules="salonRules" :show-message="false">
        <el-form-item prop="aname">
          <div class="flexl name_label">
            <div class="fleximg"><img src="@/assets/images/salon/star.png" /></div>
            <span class="name_txt">您的姓名&nbsp;</span>
            <span class="name_english">/ NAME</span>
          </div>
          <el-input
            v-model="formValue.aname"
            class="name_input"
            autocomplete="password"
            placeholder="请输入您的姓名"
          />
        </el-form-item>
        <el-form-item prop="benterprise">
          <div class="flexl name_label">
            <div class="fleximg"><img src="@/assets/images/salon/star.png" /></div>
            <span class="name_txt">您的企业&nbsp;</span>
            <span class="name_english">/ ENTERPRISE</span>
          </div>
          <el-input
            v-model="formValue.benterprise"
            class="name_input"
            placeholder="请输入您的企业"
          />
        </el-form-item>

        <div class="flexl name_label">
          <div class="fleximg"><img src="@/assets/images/salon/star.png" /></div>
          <span class="name_txt">您希望在哪一方面获得帮助&nbsp;</span>
          <span class="name_english">/ HELP</span>
        </div>
        <div class="select_pre">
          <div class="service_top">
            <div class="fleximg service_top_title">
              <img src="@/assets/images/salon/salon_title1.png" />
            </div>
            <div class="select_more_txt fleximg"><span>*</span>&nbsp;&nbsp;内容可多选</div>
          </div>
          <div class="checks_pre">
            <el-form-item prop="cyxtService">
              <el-checkbox-group
                v-if="services"
                v-model="formValue.cyxtService"
                class="check_groups"
              >
                <el-checkbox
                  v-for="(v, i) in services[Object.keys(services)[0]]"
                  :key="i"
                  :label="Number(i)"
                  :autopostback="false"
                  >{{ v }}</el-checkbox
                >
                <el-checkbox :label="0" disabled>其他</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <el-form-item prop="yxtServiceOther" class="yxtServiceOther">
            <el-input
              v-model="formValue.yxtServiceOther"
              class="yxtServiceOther_input"
              type="textarea"
              autocomplete="new-password"
              placeholder="请具体描述您的需求，我们会在适合的时候与您联系，为您提供1对1的服务支持"
              @input="textareaChange($event, 0)"
            />
          </el-form-item>
        </div>
        <div class="select_pre">
          <div class="service_top">
            <div class="fleximg service_top_title">
              <img src="@/assets/images/salon/salon_title2.png" />
            </div>
            <div class="select_more_txt fleximg"><span>*</span>&nbsp;&nbsp;内容可多选</div>
          </div>
          <div class="checks_pre">
            <el-form-item prop="dbigDataService">
              <el-checkbox-group
                v-if="services"
                v-model="formValue.dbigDataService"
                class="check_groups"
              >
                <el-checkbox
                  v-for="(v, i) in services[Object.keys(services)[1]]"
                  :key="i"
                  :label="Number(i)"
                  :autopostback="false"
                  >{{ v }}</el-checkbox
                >
                <el-checkbox :label="0" disabled>其他</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <el-form-item prop="bigDataServiceOther" class="yxtServiceOther">
            <el-input
              v-model="formValue.bigDataServiceOther"
              class="yxtServiceOther_input"
              type="textarea"
              autocomplete="new-password"
              placeholder="请具体描述您的需求，我们会在适合的时候与您联系，为您提供1对1的服务支持"
              @input="textareaChange($event, 1)"
            />
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="fleximg salon_submit" @click="submit">
      <img src="@/assets/images/salon/submit.png" />
    </div>
    <div class="salon_bottom">
      <p>本服务由康洲数智科技（重庆）有限公司提供</p>
      <p><span>Copyright 2022-2023 康洲数智(科技)科技有限公司 | 渝ICP2021012132号-2</span></p>
    </div>
    <MessageVue v-model="errorShow" :message="messageTxt" :send="messageSendFlag" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { slServiceList_api, slRrecordIn_api } from '@/api/salon'
import MessageVue from './message.vue'
import '@/utils/rem.js'
const messageTxt = ref('')
const errorShow = ref(false)
const messageSendFlag = ref()
const videoRef = ref()
const videoPlaying = ref(false)
const formRef = ref()
const formValue = ref({
  aname: '',
  benterprise: '',
  cyxtService: [],
  yxtServiceOther: '',
  dbigDataService: [],
  bigDataServiceOther: '',
})
const salonRules = ref({
  aname: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
  benterprise: [{ required: true, message: '请输入您的企业', trigger: 'blur' }],
  cyxtService: [{ required: true, message: '请选择数智化营销服务', trigger: 'blur' }],
  dbigDataService: [{ required: true, message: '请选择医械大健康数据服务', trigger: 'blur' }],
})
const services = ref()

const videoPlay = () => {
  videoRef.value.play()
  videoPlaying.value = true
}
const getSalonList = async () => {
  const { status, body } = await slServiceList_api()
  status && (services.value = body)
}
getSalonList()

const submit = async () => {
  formRef.value.validate(async (valid: boolean, invalidFields: any) => {
    if (!valid) {
      message(invalidFields[Object.keys(invalidFields)[0]][0].message)
    } else {
      const {
        aname,
        benterprise,
        cyxtService,
        yxtServiceOther,
        dbigDataService,
        bigDataServiceOther,
      } = formValue.value
      const data = {
        user_name: aname,
        company_name: benterprise,
        list: [
          {
            describe: yxtServiceOther,
            service_ids: addItemToArr(JSON.parse(JSON.stringify(cyxtService)), 0, false),
            service_type: Number(Object.keys(services.value)[0]),
          },
          {
            describe: bigDataServiceOther,
            service_ids: addItemToArr(JSON.parse(JSON.stringify(dbigDataService)), 0, false),
            service_type: Number(Object.keys(services.value)[1]),
          },
        ],
      }
      const res = await slRrecordIn_api(data)
      res.status && message(res.message)
    }
  })
}
const message = (str: any) => {
  errorShow.value = true
  messageTxt.value = str
  messageSendFlag.value = new Date().getTime()
}

const setMiddle = (e: any) => {
  e.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
//如果文字有输入就给其他赋值
const textareaChange = (value: any, type: any) => {
  if (value) {
    type
      ? addItemToArr(formValue.value.dbigDataService, 0, true)
      : addItemToArr(formValue.value.cyxtService, 0, true)
  } else {
    type
      ? addItemToArr(formValue.value.dbigDataService, 0, false)
      : addItemToArr(formValue.value.cyxtService, 0, false)
  }
}

//type:true=>检查当前数组中中是否有参数元素，有就不管没有就添加,type:false=>检查当前数组中是否有参数元素，有就删除没有就不管
const addItemToArr = (arr: any, item: any, type: boolean) => {
  const i = arr.indexOf(item)
  type
    ? (() => {
        if (i === -1) {
          arr.push(item)
        }
      })()
    : (() => {
        if (i > -1) {
          arr.splice(i, 1)
        }
      })()
  return arr
}

const toIndex = () => {
  location.href = 'https://m.kzszh.com/'
}
</script>

<script lang="ts"></script>

<style scoped lang="scss">
.salon_activity {
  max-width: 750px !important;
  width: 3.75rem;
  padding: 0.14rem 0.2rem 0.12rem;
  background: url(@/assets/images/salon/salon_background.jpg) no-repeat;
  background-size: cover;
  background-position-y: -0.46rem;
  position: relative;
  .top_logo {
    & > div {
      width: 1rem;
    }
  }
  .salon_txt_img {
    width: 3.35rem;
    margin: 0.4rem 0 0.6rem;
  }
  .video_pre {
    position: relative;
    margin-bottom: 0.28rem;
    video {
      width: 3.35rem;
      height: 1.9rem;
    }
    .video_cover {
      width: 100%;
      height: 100%;
      background: url(@/assets/images/salon/video_cover.png) no-repeat;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      > div {
        width: 0.48rem;
      }
    }
  }
  .salon_form {
    :deep(.el-form-item) {
      margin-bottom: 0.2rem;
    }
    :deep(.is-error) {
      .el-input__wrapper {
        box-shadow: none;
      }
    }
    .name_label {
      margin-bottom: 0.08rem;
      & > div:first-child {
        width: 0.13rem;
        margin-right: 0.06rem;
      }
      .name_txt {
        font-size: 0.16rem;
        color: #ffffff;
        font-weight: 600;
        background-image: -webkit-linear-gradient(bottom, #feb437, #ffffff);
        line-height: 0.32rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .name_english {
        font-size: 0.14rem;
        color: #044bb5;
        line-height: 0.14rem;
        font-weight: 700;
      }
    }
    .name_input {
      height: 0.46rem;
      :deep(.el-input__wrapper) {
        padding: 0 0.16rem;
        input {
          font-size: 0.16rem;
          color: #333e53;
          font-weight: 600;
          &::-webkit-input-placeholder {
            font-size: 0.16rem;
            color: #6fa4e5;
            text-align: left;
            font-weight: 400;
          }
        }
      }
    }
    .select_pre {
      width: 100%;
      background-image: linear-gradient(180deg, #2d5ad8 0%, #254ea6 98%);
      border-radius: 4px;
      .service_top {
        width: 100%;
        height: 0.46rem;
        position: relative;
        .service_top_title {
          width: 2.1rem;
          position: absolute;
          left: -0.13rem;
          bottom: -0.08rem;
        }
        .select_more_txt {
          font-size: 0.12rem;
          color: #7fa0f9;
          line-height: 0.12rem;
          position: absolute;
          top: 0.23rem;
          right: 0.16rem;
          & > span {
            font-size: 0.14rem;
            position: relative;
            top: 0.03rem;
          }
        }
      }
      .checks_pre {
        .check_groups {
          display: flex;
          flex-direction: column;
          :deep(.el-checkbox) {
            padding: 0 0.16rem;
            height: 0.48rem;
            width: 3.35rem;
            box-sizing: border-box;
            position: relative;
            margin-right: 0;
            .el-checkbox__input {
              position: absolute;
              right: 0.16rem;
            }
            .el-checkbox__label {
              font-size: 0.14rem;
              color: #ffffff;
              line-height: 0.14rem;
              font-weight: 400;
            }
            .el-checkbox__inner {
              background: url('@/assets/images/salon/salon_select.png');
              background-size: contain;
              display: inline-block;
              width: 0.16rem;
              height: 0.16rem;
              border: none;
              &::after {
                content: none;
              }
            }
            & > .is-checked {
              .el-checkbox__inner {
                background: url('@/assets/images/salon/salon_selected.png');
                background-size: contain;
                display: inline-block;
                width: 0.16rem;
                height: 0.16rem;
                &::after {
                  content: none;
                }
              }
            }
          }
          :deep(.el-checkbox:nth-child(2n)) {
            background: rgba(#14367e, 0.16);
          }
          :deep(.el-checkbox:last-child) {
            //  background: red;
            .el-checkbox__input {
              display: none;
            }
          }
        }
      }
      .yxtServiceOther {
        position: relative;
        top: -0.2rem;
        width: 3.03rem;
        background: #d5e8ff;
        margin-left: 0.16rem;
        border-radius: 4px;
        overflow: hidden;
        height: 1rem;
        .yxtServiceOther_input {
          height: 100%;
          :deep(.el-textarea__inner) {
            height: 100%;
            background: #d5e8ff;
            padding: 0.12rem;
            font-size: 0.14rem;
            color: #333e53;
            text-align: justify;
            line-height: 0.22rem;
            font-weight: 600;
            &::-webkit-input-placeholder {
              font-size: 0.14rem;
              color: #6fa4e5;
              text-align: justify;
              line-height: 0.22rem;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  .salon_submit {
    width: 3.35rem;
    margin-top: 0.22rem;
  }
  .salon_bottom {
    width: 100%;
    height: 0.61rem;
    padding-top: 0.16rem;
    background: #00194c;
    position: absolute;
    bottom: -0.61rem;
    left: 0;
    overflow: hidden;
    > p:nth-child(1) {
      margin: 0;
      font-size: 0.12rem;
      color: #6b8bc9;
      text-align: center;
      line-height: 0.12rem;
      font-weight: 400;
      margin-bottom: 0.04rem;
    }
    > p:nth-child(2) {
      width: 200%;
      margin: 0;
      span {
        display: inline-block;
        font-size: 0.12rem;
        color: #6b8bc9;
        text-align: center;
        font-weight: 400;
        transform: scale(0.75);
        position: relative;
        left: -0.12rem;
      }
    }
  }
}
</style>
