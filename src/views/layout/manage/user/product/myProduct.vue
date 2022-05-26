<template>
  <div class="kz_card my_product_page">
    <div class="card_title">产品与服务</div>
    <div class="fcs fww card_content">
      <div v-for="v in 5" :key="v" class="item">
        <img :src="trial_i" alt="" class="trial_img" />
        <div class="img_box fcc">
          <img src="" alt="" />
        </div>
        <div class="name fcs">
          <div class="text">DMP精准数据</div>
          <div class="tag"><div>企业升级版</div></div>
        </div>
        <div class="time fsc">
          <div class="lt fcs">
            <KzIcon href="#icon-riqi" size="14px" />
            <div>剩余365天</div>
          </div>
          <div class="rt">有效期至：2023-04-29</div>
        </div>
        <div class="btns">
          <el-button type="danger" plain>购买</el-button>
          <el-button type="primary">进入系统</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import trial_i from '@/assets/images/trial.png'
import KzPage from '@/components/KzPage.vue'
const totle = ref(100)
const size = ref(10)
const page = ref(1)
const getList = () => {}
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
      }
      .btns {
        text-align: right;
      }
    }
  }
}
</style>
