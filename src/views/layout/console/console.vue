<template>
  <div class="console_page">
    <div class="flex">
      <div class="kz_card f1 mr16">
        <div class="card_title fsc">
          <div>热门推荐</div>
          <el-button type="info" plain size="small">全部</el-button>
        </div>
        <div class="card_body hot_list fsc">
          <div v-for="v in 4" :key="v" class="item">
            <div class="item_img"></div>
            <div class="item_title">213</div>
            <div class="item_msg">123</div>
            <div class="item_icon"></div>
            <div class="item_bg"></div>
          </div>
        </div>
      </div>
      <div class="kz_card user_card fc">
        <div class="fcs fjend user_top">
          <img :src="user_general_i" alt="" />
          <img :src="real_name_i" alt="" />
        </div>
        <div class="user_avatar fc fcc">
          <el-avatar :size="64" :src="df_avatar_i" />
          <div class="mt12 els">
            康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州康州
          </div>
        </div>
        <div class="user_bottom f1 fc fjend">
          <div class="user_company fcs">
            <img :src="no_company_i" alt="" />
            <!-- <div class="user_company_name els">康洲大数据（集团）有限公司康洲大数据（集团）有限公司康洲大数据（集团）有限公司康洲大数据（集团）有限公司</div> -->
            <div class="user_no_company fcs">
              <div class="mr16">暂无企业信息</div>
              <el-link type="primary" @click="$router.push('/manage/company')"
                >企业认证<el-icon size="16px" class="right_icon"><SortDown /></el-icon
              ></el-link>
            </div>
          </div>
          <div class="mt12">上次登录：2022-04-22 12:3</div>
        </div>
      </div>
    </div>
    <div class="kz_card mt16">
      <div class="card_title">已订购产品与服务</div>
      <div class="card_body">
        <KzEmpty>
          <el-button type="primary" size="large" @click="$router.push('/manage/user/product/order')"
            >订购产品与服务</el-button
          >
        </KzEmpty>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KzEmpty from '@/components/KzEmpty.vue'
import { ref } from 'vue'
import user_general_i from '@/assets/images/user_general.png'
import real_name_i from '@/assets/images/real_name.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import is_company_i from '@/assets/images/is_company.png'
import no_company_i from '@/assets/images/no_company.png'
import { SortDown } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.console_page {
  .card_body {
    padding: 0 24px 24px;
  }
  .user_card {
    width: 372px;
    .mt12 {
      margin-top: 12px;
      max-width: 100%;
    }
    .user_top {
      margin-bottom: 20px;
      padding-top: 12px;
      img {
        width: auto;
        height: 16px;
        margin-right: 12px;
      }
    }
    .user_avatar {
      color: #303133;
      font-weight: bold;
      font-size: 18px;
      padding: 0 16px;
    }
    .user_bottom {
      padding: 10px 24px 16px 24px;
      .mt12 {
        color: #909399;
        font-size: 12px;
      }
      .user_company {
        color: #303133;
        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        .user_company_name {
          border-radius: 4px;
          padding: 0px 8px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
          &:hover {
            background-color: rgba(33, 80, 236, 0.1);
            color: $dfcolor;
          }
        }
        .user_no_company {
          color: #606266;
          .mr16 {
            padding-left: 8px;
            height: 30px;
            line-height: 30px;
          }
          .right_icon {
            transform: rotate(-90deg) rotateY(180deg);
            margin-left: 4px;
          }
        }
      }
    }
  }
  .hot_list {
    .item {
      padding: 0 16px 12px;
      position: relative;
      height: 162px;
      margin-right: 16px;
      background-color: aqua;
      &:last-child {
        margin-right: 0;
      }
    }
    .item_img {
      width: 60px;
      height: 60px;
      margin-bottom: 24px;
    }
    .item_title {
      font-size: 16px;
      color: #303133;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .item_msg {
      font-size: 14px;
      color: #606266;
      margin-bottom: 4px;
    }
    .item_bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-color: brown;
      border-radius: 16px;
      transform: perspective(8px) scale(0.75, 1) rotateY(-1deg);
      transform-origin: bottom left;
    }
  }
}
</style>
