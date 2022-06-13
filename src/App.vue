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
  --el-color-primary: #2150ec;
  --el-color-danger: #e40000;
  --el-color-success: #24bd13;
  --el-color-warning: #ffb700;
  // min-width: 1440px;
}
body {
  overflow: hidden;
  .el-button--primary {
    --el-button-bg-color: #2150ec;
    --el-button-border-color: #2150ec;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.85);
    --el-button-hover-border-color: rgba(45, 104, 235, 0.85);
    --el-button-active-bg-color: #245bd6;
    --el-button-active-border-color: #245bd6;
  }
  .bdc_btn {
    --el-button-text-color: #2150ec;
    --el-button-border-color: #2150ec;
    --el-button-hover-text-color: #245bd6;
    --el-button-hover-bg-color: #e8edfd;
    --el-button-hover-border-color: #245bd6;
    --el-button-active-bg-color: rgba(45, 104, 235, 0.2);
    --el-button-active-border-color: #245bd6;
    --el-button-disabled-bg-color: #fff;
    --el-button-disabled-border-color: rgba(45, 104, 235, 0.35);
    --el-disabled-text-color: rgba(45, 104, 235, 0.4);
  }
  .el-button--info.is-plain {
    --el-button-text-color: #666;
    --el-button-border-color: #666;
    --el-button-bg-color: #fff;
  }
  // .el-button{
  //   --el-button-border-color: #666
  // }
}

.el-popover.el-popper.user_drop {
  padding: 0;
}

.kzicon {
  width: 1em;
  height: 1em;
  // vertical-align: -0.15em;
  vertical-align: top;
  fill: currentColor;
  overflow: hidden;
}
.icon_rotate {
  .kzicon {
    transition: transform 0.5s;
  }
  &:hover {
    .kzicon {
      transform: rotate(-180deg);
    }
  }
}
.fz16 {
  font-size: 16px;
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
.fsc,
.flexb {
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
.flexll {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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

body .el-dialog {
  --el-dialog-border-radius: 8px;
  .el-dialog__header {
    border-bottom: 1px solid $coloreee;
    margin-right: 0;
    font-size: 16px;
    color: $color333;
    font-weight: 600;
    padding: 20px 24px 16px;
    .el-dialog__title {
      font-size: 16px;
      color: $color333;
      font-weight: 600;
      line-height: 1;
    }
  }
  .el-dialog__headerbtn {
    top: 3px;
  }
  .el-dialog__body {
    padding: 16px 24px 0;
  }
  .el-dialog__footer {
    padding: 20px 24px 24px;
  }
  &.no_header_dialog {
    .el-dialog__header {
      border-bottom: none;
      padding: 0;
    }
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
  cursor: url('@/assets/images/imagelook.cur'), zoom-in;
}

.status_dot {
  // 状态点
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
  &.sdot_c0 {
    background-color: #c0c4cc;
  }
  &.sdot_fe {
    background-color: #fe9b25;
  }
  &.sdot_ff {
    background-color: #ff4736;
  }
}

.vline {
  // 竖着的短线
  width: 1px;
  height: 14px;
  background-color: $bdcolor;
  margin: 0 20px;
}
.btn_tab {
  // tab按钮组
  .el-button {
    z-index: 1 !important;
    --el-button-border-color: #ddd;
    --el-button-hover-text-color: #2d68eb;
    --el-button-hover-border-color: #999999;
    --el-button-hover-bg-color: #fff;
    --el-button-active-border-color: #2d68eb;
    &:hover {
      z-index: 10 !important;
    }
  }
  .el-button.btn_tab_active {
    --el-button-text-color: #2d68eb;
    --el-button-border-color: #2d68eb;
    --el-button-bg-color: #e8edfd;
    --el-button-hover-border-color: #2d68eb;
    --el-button-hover-bg-color: #e8edfd;
    z-index: 11 !important;
  }
}
.kz_card {
  // 卡片
  background-color: #fff;
  border-radius: 8px;
  .card_title {
    box-sizing: content-box;
    padding: 22px 24px;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    font-weight: bold;
    color: $color333;
  }
}
.rz_dialog_hll {
  .el-dialog .el-dialog__header {
    border-bottom: none;
  }
}
.force_login {
  .el-button:hover {
    color: #304f97;
    border-color: #304f97;
    background-color: rgba($color: #304f97, $alpha: 0.05) !important;
  }
  .el-button--primary {
    background: #304f97 !important;
    &:hover {
      background: rgba($color: #304f97, $alpha: 0.85) !important;
      color: #ffffff;
    }
  }
}
.add_person_dialogo_hwy {
  width: 703px !important;
  .el-dialog__header {
    border-bottom: none;
  }
  .el-dialog__body {
    padding: 0 24px 24px;
  }
}
.dmp_page {
  padding: 20px 24px;
}
.dmp_table {
  thead {
    --el-table-header-bg-color: #f2f2f3;
    th.el-table__cell {
      color: $color333;
    }
  }
  .line {
    height: 14px;
    width: 1px;
    margin: 0 16px;
    background-color: $coloreee;
  }
}
.cms_table {
  .el-table {
    thead > tr > th {
      background: #f2f2f3;
      height: 40px;
      .cell {
        font-size: 14px;
        color: #333333;
        line-height: 14px;
        font-weight: 600;
      }
    }
    td.el-table__cell div {
      color: #666666;
    }
  }
}
@media screen and (min-width: 750px) {
  html,
  body {
    min-width: 1440px;
  }
}
@media screen and (max-width: 750px) {
  html,
  body {
    font-size: 0.1rem;
  }
  .el_message {
    width: 3rem !important;
    overflow: hidden;
    --el-message-min-width: 2rem !important;
  }
}
</style>
