<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>发送列表</div>
      <div class="flexr">
        <el-input placeholder="请输入模板名称搜索" class="search_inpt" />
        <el-button class="bdc_btn">查询一下</el-button>
        <el-button class="bdc_btn">签名管理</el-button>
        <el-button type="primary"
          ><KzIcon
            href="#icon-tianjia"
            size="14px"
            color="white"
            class="add_need_icon"
          />&nbsp;新建&nbsp;&nbsp;</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.send_list {
  background: #ffffff;
  padding: 20px 24px;
  .send_list_top {
    & > div:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      line-height: 18px;
    }
    .search_inpt {
      width: 180px;
      margin-right: 12px;
    }
  }
}
</style>
