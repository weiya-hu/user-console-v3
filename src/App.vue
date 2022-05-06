<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  --el-color-primary: #2d68eb;
  --el-color-danger: #e40000;
  --el-color-success: #24bd13;
  --el-color-warning: #ffb700;
  min-width: 1440px;
}
body {
  .el-button--primary {
    --el-button-bg-color: #2d68eb;
    --el-button-border-color: #2d68eb;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.85);
    --el-button-hover-border-color: rgba(45, 104, 235, 0.85);
    --el-button-active-bg-color: #245bd6;
    --el-button-active-border-color: #245bd6;
  }
  .bdc_btn {
    --el-button-text-color: #2d68eb;
    --el-button-border-color: #2d68eb;
    --el-button-hover-text-color: #245bd6;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.1);
    --el-button-hover-border-color: #245bd6;
    --el-button-active-bg-color: rgba(45, 104, 235, 0.2);
    --el-button-active-border-color: #245bd6;
    --el-button-disabled-bg-color: #fff;
    --el-button-disabled-border-color: rgba(45, 104, 235, 0.35);
    --el-disabled-text-color: rgba(45, 104, 235, 0.4);
  }
}

#app {
  height: 100%;
}
.p-relative {
  position: relative;
}

.flex {
  display: flex;
}
.f1 {
  flex: 1;
}
.fww {
  flex-wrap: wrap;
}
.fc {
  display: flex;
  flex-direction: column;
}
.fcc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fsc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fcs,
.flexl {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.fjend {
  display: flex;
  justify-content: flex-end;
}
.fs0 {
  flex-shrink: 0;
}
.faend {
  display: flex;
  align-items: flex-end;
}
.flexr {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.fleximg {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
.els {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.els2 {
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
img {
  vertical-align: middle;
}
.dfcolor {
  color: $dfcolor !important;
}
.w100 {
  width: 100%;
}
.rotate {
  transition: all 0.5s;
  &:hover {
    transform: rotate(180deg);
    cursor: pointer;
    color: $dfcolor;
  }
}

.el-dialog {
  .el-dialog__header {
    border-bottom: 1px solid $coloreee;
    margin-right: 0;
    .el-dialog__title {
      font-size: 16px;
      color: $color333;
      font-weight: 600;
    }
  }
}
.kf_dialog {
  .el-dialog__header {
    border-bottom: none;
  }
}

.fade-leave-from {
  display: none; //解决页面过渡抖动
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fw600 {
  font-weight: 600;
}
.chover {
  &:hover {
    color: $dfcolor;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}

.mt20 {
  margin-top: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.ml20 {
  margin-left: 20px;
}
.mr20 {
  margin-right: 20px;
}
.pt20 {
  padding-top: 20px;
}
.pb20 {
  padding-bottom: 20px;
}
.pl20 {
  padding-left: 20px;
}
.pr20 {
  padding-right: 20px;
}
.mt16 {
  margin-top: 16px;
}
.mb16 {
  margin-bottom: 16px;
}
.ml16 {
  margin-left: 16px;
}
.mr16 {
  margin-right: 16px;
}
.pt16 {
  padding-top: 16px;
}
.pb16 {
  padding-bottom: 16px;
}
.pl16 {
  padding-left: 16px;
}
.pr16 {
  padding-right: 16px;
}

.lookhover {
  cursor: url('@/assets/images/imagelook.cur'), pointer;
}

.status_dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;
  &.sdot_g {
    background-color: #2bd34e;
  }
  &.sdot_y {
    background-color: $coloryellow;
  }
  &.sdot_b {
    background-color: $dfcolor;
  }
  &.sdot_r {
    background-color: $colorred;
  }
  &.sdot_9 {
    background-color: $color999;
  }
}
</style>
