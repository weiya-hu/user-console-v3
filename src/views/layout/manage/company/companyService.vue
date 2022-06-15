<template>
  <div class="kz_card my_product_page">
    <div class="card_title">产品与服务</div>
    <div v-if="proList.length" class="fcs fww card_content">
      <div v-for="v in proList" :key="v" class="item">
        <img v-if="v.version_type === 1" :src="trial_i" alt="" class="trial_img" />
        <div class="img_box fcc">
          <img :src="v.thumb_url" alt="" />
        </div>
        <div class="name fcs">
          <div class="text">{{ v.product_name }}</div>
          <div
            class="tag"
            :class="
              v.version_type === 1
                ? v.type === 1
                  ? 'try'
                  : 'u_paid'
                : v.type === 1
                ? 'try'
                : 'c_paid'
            "
          >
            <div
              class="tag_box"
              :class="
                v.version_type === 1
                  ? v.type === 1
                    ? 'try'
                    : 'u_paid'
                  : v.type === 1
                  ? 'try'
                  : 'c_paid'
              "
            >
              {{ v.version_name }}
            </div>
          </div>
        </div>
        <div v-if="showtime(v.left_time) > 0" class="time fsc">
          <div class="lt fcs">
            <KzIcon
              href="#icon-riqi"
              size="14px"
              :color="showtime(v.left_time) <= 5 ? '#FF4736' : '#000'"
            />
            <div :class="showtime(v.left_time) <= 5 && 'time_tips'">
              剩余{{ showtime(v.left_time) }}天
            </div>
          </div>
          <div class="rt">
            有效期至： {{ formatDate(new Date(Number(v.left_time)), 'yyyy-MM-dd') }}
          </div>
        </div>
        <div v-else class="time fcs">
          <KzIcon href="#icon-zhuyi-biankuang" size="14px" color="#FF4736" />
          <div class="time_tips">当前版本已过期，请联系客服续期</div>
        </div>
        <div v-if="showtime(v.left_time) > 0" class="btns">
          <el-button v-if="v.version_type === 1" type="danger" plain>购买</el-button>
          <el-button v-else type="warning" plain>升级</el-button>
          <el-button type="primary" @click="goSystem(v.id, v.product_id, v.version_type)"
            >进入系统</el-button
          >
        </div>
        <div v-else class="btns kf">
          <KzIcon href="#icon-lanmu-kefu" size="14px" color="#2D68EB" />
          联系客服
        </div>
      </div>
    </div>
    <KzEmpty v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import trial_i from '@/assets/images/trial.png'
import KzEmpty from '@/components/KzEmpty.vue'
import { companyInstance_api, companySwitch_api } from '@/api/manage/company/companyService'
import { formatDate } from '@/utils/date'
import { KzProduct } from '@/utils/config'
import { errMsg, getProduct } from '@/utils/index'
import { Clock } from '@element-plus/icons-vue'
import { mainStore } from '@/store/index'
import { useRouter } from 'vue-router'
import { okMsg } from '@/utils'
const router = useRouter()
const totle = ref(100)
const size = ref(10)
const page = ref(1)
const store = mainStore()
const cmsUrl = computed(() => store.state.yxtUrl.cms)
const dmpUrl = store.state.yxtUrl.dmp

const proList = ref<any>({})
const productList = async () => {
  const { body, status } = await companyInstance_api()
  proList.value = body
}
productList()

const day = ref()
const showtime = (time: any) => {
  const nowtime = new Date() //获取当前时间
  const endtime = new Date(time) //定义结束时间
  const gotime = endtime.getTime() - nowtime.getTime() //距离结束时间的毫秒数
  const god = Math.floor(gotime / (1000 * 60 * 60 * 24)) //计算天数
  day.value = god + '天'
  return god
}
const sysId = ref(0) //系统ID
const sysType = ref(0) //1：个人 2：企业
const proId = ref(0)
const goSystem = (id: number, pid: number, type: number) => {
  sysType.value = type
  sysId.value = id
  proId.value = pid
  userSystem()
  store.setUserCompany()
}
const userSystem = async () => {
  const data = {
    id: sysId.value,
    version_type: sysType.value,
  }
  const res = await companySwitch_api({ ...data })
  if (res.status === 1) {
    if (proId.value) {
      getProduct(proId.value) &&
        window.location.replace(`/product/${getProduct(proId.value)}?insid=` + sysId.value)
    }
  } else {
    errMsg('操作失败!')
  }
}
</script>

<script lang="ts">
export default { name: 'MyProduct' }
</script>

<style lang="scss" scoped>
.my_product_page {
  .card_content {
    padding: 0 24px 12px;
    .item {
      width: calc((100% - 48px) / 4);
      padding: 21px 16px 16px;
      margin-right: 16px;
      margin-bottom: 16px;
      border-radius: 8px;
      border: 1px solid #dddddd;
      position: relative;
      &:nth-child(4n) {
        margin-right: 0;
      }

      .trial_img {
        position: absolute;
        right: -4px;
        top: 0;
        width: 36px;
        height: 20px;
      }
      .img_box {
        margin-bottom: 7px;
        img {
          width: 72px;
          height: 72px;
        }
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        .text {
          line-height: 18px;
          color: #303133;
        }
        .tag {
          border-radius: 8px;
          border: 2px;
          height: 16px;
          line-height: 16px;
          padding: 0 5px;
          position: relative;
          margin-left: 4px;
          &.c_paid {
            background-image: linear-gradient(270deg, rgba(252, 87, 72, 1), rgba(255, 149, 0, 1));
          }
          &.u_paid {
            background-image: linear-gradient(270deg, rgba(55, 151, 249, 1), rgba(45, 104, 235, 1));
          }
          &.try {
            background: #909399;
          }
          &::after {
            content: '';
            position: absolute;
            background-color: #fff;
            height: 14px;
            border-radius: 7px;
            width: calc(100% - 2px);
            left: 1px;
            top: 1px;
            z-index: 0;
          }

          .tag_box {
            font-size: 12px;
            position: relative;
            z-index: 1;
            transform: scale(0.9);
            &.c_paid {
              background: linear-gradient(270deg, #ff4736 0%, #ff9500 100%);
              color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -ms-background-clip: text;
              -o-background-clip: text;
            }
            &.u_paid {
              background: linear-gradient(90deg, #3893fa 0%, #2d68eb 100%);
              color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -ms-background-clip: text;
              -o-background-clip: text;
            }
            &.try {
              background: #909399;
              color: transparent;
              background-clip: text;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -ms-background-clip: text;
              -o-background-clip: text;
            }
          }
        }
      }
      .time {
        margin: 4px 0 12px 0;
        height: 24px;
        font-size: 12px;
        color: #606266;
        .kzicon {
          margin-right: 5px;
        }
        .rt {
          color: #c0c4cc;
        }
        .time_tips {
          font-size: 12px;
          font-weight: 400;
          color: #ff4736;
        }
      }
      .btns {
        text-align: right;
      }
      .kf {
        font-size: 14px;
        font-weight: 400;
        color: #2d68eb;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        .kzicon {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
