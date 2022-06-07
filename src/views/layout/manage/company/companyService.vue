<template>
  <div class="kz_card my_product_page">
    <div class="card_title">产品与服务</div>
    <div v-if="list.length" class="fcs fww card_content">
      <div v-for="v in list" :key="v" class="item">
        <img v-if="v.version_type === 1" :src="trial_i" alt="" class="trial_img" />
        <div class="img_box fcc">
          <img :src="v.thumb_url" alt="" />
        </div>
        <div class="name fcs">
          <div class="text">{{ v.product_name }}</div>
          <div class="tag">
            <div>{{ v.version_name }}</div>
          </div>
        </div>
        <div class="time fsc">
          <div v-if="showtime(v.left_time) > 0" class="lt fcs">
            <KzIcon href="#icon-riqi" size="14px" />
            <div>剩余{{ showtime(v.left_time) }}天</div>
          </div>
          <div v-else class="lt fcs">
            <el-icon class="kzicon" color="#FF4736 " size="14px"><Clock /></el-icon>
            <div class="time_tips">当前版本已过期，请联系客服续期</div>
          </div>
          <div v-if="showtime(v.left_time) > 0" class="rt">
            有效期至： {{ formatDate(new Date(Number(v.left_time)), 'yyyy-MM-dd') }}
          </div>
        </div>
        <div v-if="showtime(v.left_time) > 0" class="btns">
          <el-button type="danger" plain>购买</el-button>
          <el-button type="primary" @click="goSystem(v.id, v.product_id, v.version_type)"
            >进入系统</el-button
          >
        </div>
        <div v-else class="btns kf cont">
          <KzIcon href="#icon-lanmu-kefu" size="14px" color="#2D68EB" />
          联系客服
        </div>
      </div>
    </div>
    <KzEmpty v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import trial_i from '@/assets/images/trial.png'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import { formatDate } from '@/utils/date'
import { companyInstance_api, companySwitch_api } from '@/api/manage/company/companyService'
import { Clock } from '@element-plus/icons-vue'
import { okMsg } from '@/utils'
import { mainStore } from '@/store/index'
const totle = ref(100)
const size = ref(10)
const page = ref(1)
const list = ref<any>({})
const day = ref()
const store = mainStore()
const cmsUrl = store.state.yxtUrl.cms
const dmpUrl = store.state.yxtUrl.dmp
const showtime = (val: number) => {
  const nowtime = new Date() //获取当前时间
  const endtime = new Date(val) //定义结束时间
  const gotime = endtime.getTime() - nowtime.getTime() //距离结束时间的毫秒数
  const god = Math.floor(gotime / (1000 * 60 * 60 * 24)) //计算天数
  day.value = god + '天'
  return god
}
const getList = async () => {
  const { body } = await companyInstance_api()
  list.value = body
  console.log(list.value)
}
getList()
// const goSystem = async (id: number, version_type: number) => {
//   const res = await companySwitch_api({
//     id: id,
//     version_type: version_type,
//   })
//   console.log(res)
// }
const sysId = ref(0) //系统ID
const sysType = ref(0) //1：个人 2：企业
const proId = ref(0) //1:cms 2:dmp
const goSystem = (id: number, pid: number, type: number) => {
  sysType.value = type
  sysId.value = id
  proId.value = pid
  userSystem()
}
const userSystem = async () => {
  const data = {
    id: sysId.value,
    version_type: sysType.value,
  }
  const res = await companySwitch_api({ ...data })
  if (res.status === 1) {
    if (proId.value === 1) {
      window.open('https://' + cmsUrl, '_blank')
    }
    window.open('https://' + dmpUrl, '_blank')
  }
}
</script>

<script lang="ts">
export default { name: 'CompanyService' }
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
          background-image: linear-gradient(270deg, rgba(252, 87, 72, 1), rgba(255, 149, 0, 1));
          height: 16px;
          line-height: 16px;
          padding: 0 5px;
          position: relative;
          margin-left: 4px;
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
          div {
            font-size: 12px;
            position: relative;
            z-index: 1;
            transform: scale(0.9);
            background: linear-gradient(270deg, #ff4736 0%, #ff9500 100%);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -ms-background-clip: text;
            -o-background-clip: text;
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
          color: #ff4736;
        }
      }
      .btns {
        text-align: right;
      }
    }
  }
  .cont {
    color: #2d68eb;
  }
}
</style>
