<template>
  <div class="my_dialog">
    <el-dialog
      v-model="modelValue"
      width="500px"
      @close="close"
      :show-close="true"
      custom-class="info_dialog"
      ref="editRef"
    >
      <template #title>
        <div class="my_title">
          {{
            info_type == 'name'
              ? '修改用户昵称'
              : info_type == 'sex'
              ? '修改性别'
              : info_type == 'birth'
              ? '修改出生日期'
              : '修改地区'
          }}
        </div>
      </template>
      <template #default>
        <div class="fcc fc" v-if="info_type == 'name'">
          <el-input v-model="userInfoTxt" placeholder="请输入昵称" />
        </div>
        <div class="fcc fc" v-if="info_type == 'sex'">
          <el-select v-model="userInfoTxt" placeholder="请选择">
            <el-option label="男" value="0" />
            <el-option label="女" value="1" />
          </el-select>
        </div>
        <div class="fcc fc date_picker_box" v-if="info_type == 'birth'">
          <el-date-picker
            v-model="userInfoTxt"
            placeholder="请选择你的出生日期"
            value-format="x"
            :clear-icon="userInfoTxt ? CircleCloseFilled : ''"
          />
          <el-icon size="14px" v-show="!userInfoTxt" class="date_icon"><calendar /></el-icon>
        </div>
        <div class="fcc fc" v-if="info_type === 'addr'">
          <MyCascader
            v-model="addArr"
            type="address"
            ref="addrCRef"
            @change="changeItemLables()"
          />
        </div>
      </template>
      <template #footer>
        <el-button class="bdc_btn" @click="close">取消</el-button>
        <el-button type="primary" @click="comfirm">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import MyCascader from '@/components/MyCascader.vue'
import { CircleCloseFilled, Calendar } from '@element-plus/icons-vue'
import { log } from 'console'

/**
 * 修改个人信息 弹窗
 * @author pr
 */

const userInfoTxt = ref<string | number>()
const addArr = ref<any[]>([])

const props = withDefaults(
  defineProps<{
    modelValue: boolean // 是否显示
    info_type: string //类别
  }>(),
  {}
)
const editRef = ref()
const addrCRef = ref()

const changeItemLables = () => {}
const emit = defineEmits(['update:modelValue', 'comfirm'])

const close = () => {
  userInfoTxt.value = ''
  addArr.value = []
  emit('update:modelValue', false)
}
const comfirm = () => {
  console.log(addArr.value);
  // return
  if(props.info_type === 'addr'){
    const addObj:Record<string, number | string> = {}
    const addHash:Record<number, string> = {
      0:'province',
      1:'city',
      2:'district',
    }
    addArr.value.forEach((v, i) => {
      v && (addObj[addHash[i]] = v)
    })
    emit('comfirm', addObj)
    return
  }
  emit('comfirm', { [props.info_type] : userInfoTxt.value})
}
</script>

<style scoped lang="scss">
.my_dialog {
  .info_dialog {
    .my_title {
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
  }
  :deep(.el-input, .el-date-picker) {
    width: 452px;
    height: 40px;
  }
  .date_picker_box{
    position: relative;
    :deep(.el-input__prefix){
      display: none;
    }
    .date_icon{
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}

</style>