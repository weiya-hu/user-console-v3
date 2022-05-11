<template>
  <div class="register">
    <div class="register_main">
      <div class="fleximg logo_img">
        <img src="@/assets/images/logo-white.svg" />
      </div>
      <div class="register_content">
        <div class="register_content_title fleximg">找回密码</div>
        <div class="register_content_main"></div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

</script>
<style lang="scss" scoped>
.register{
  height: 100vh;
  overflow: auto;
  background: url('@/assets/images/register-background.jpg') no-repeat;
  background-size: cover;
  .register_main{
    width: 900px;
    margin: 9.3vh auto 0;
    .logo_img {
      width: 200px;
      cursor: pointer;
    }
    .register_content{
      margin-top: 80px;
      .register_content_title{
        width: 900px;
        height: 90px;
        background: #304F97;
        font-size: 26px;
        color: #FFFFFF;
        text-align: center;
        line-height: 26px;
        font-weight: 600;
      }
      .register_content_main{
        width: 900px;
        padding: 50px 0 50px 260px;
       background: rgba(255,255,255,0.7);
      }
    }
  }
}
</style>