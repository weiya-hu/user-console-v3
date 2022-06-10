<template>
  <div class="kz_top_btns">
    <el-button
      v-if="type === 'all' || type === 'sync'"
      class="bdc_btn"
      :disabled="syncDisabled"
      @click="showSync"
      >同步数据</el-button
    >
    <el-button v-if="type === 'all' || type === 'add'" type="primary" @click="emit('add')">{{
      btnText
    }}</el-button>

    <el-dialog
      v-model="show"
      title="同步数据"
      width="480px"
      custom-class="sync_dialog"
      @close="close"
    >
      <div v-loading="loading">
        <div class="fsc">
          <div class="lt">选择同步系统</div>
          <div class="rt fcs">
            每天同步上限<span>{{ syncInfo.surplus }}/{{ syncInfo.total }}</span
            >条数据
          </div>
        </div>
        <div class="btn_list flex">
          <el-button
            v-for="v in list"
            :key="v.id"
            class="btn_item"
            :type="v.id == active ? 'primary' : ''"
            :disabled="v.disabled"
            :class="v.disabled && 'btn_disabled'"
            @click="active = v.id"
            >{{ v.btns }}</el-button
          >
        </div>
      </div>
      <template #footer>
        <span class="flex fjend">
          <el-button :disabled="loading" @click="show = false">取消</el-button>
          <el-button type="primary" :disabled="!active || loading" @click="$emit('sync')"
            >同步</el-button
          >
        </span>
      </template>
    </el-dialog>
    <KzDialog v-model="rShow" title="同步结果" :btn="1" :msg="rMsg" />
  </div>
</template>

<script setup lang="ts">
/**
 * 顶部按钮组
 * @author chn
 */
import { ref } from 'vue'
import KzDialog from '@/components/KzDialog.vue'
const props = withDefaults(
  defineProps<{
    type?: 'all' | 'sync' | 'add'
    syncbtn?: boolean // 是否显示同步按钮
    syncDisabled?: boolean // 同步按钮是否禁用
    syncApi?: Function // 同步条数接口
    btnText?: string // 新增按钮名称
  }>(),
  {
    type: 'all',
    syncbtn: false,
    syncDisabled: true,
    btnText: '新增需求',
  }
)

// add：点击新增时触发；sync：点击同步时触发
const emit = defineEmits(['add', 'sync'])

const syncInfo = ref<any>({})
const showSync = async () => {
  const res = props.syncApi && (await props.syncApi())
  if (res && res.status == 1) {
    syncInfo.value = res.body
    show.value = true
  }
}

const loading = ref(false)
const setLoading = (val?: boolean) => {
  loading.value = Boolean(val)
}

const rMsg = ref('')
const rShow = ref(false)
const close = (msg?: string) => {
  active.value = 0
  show.value = false
  loading.value = false
  if (msg) {
    rMsg.value = msg
    rShow.value = true
  }
}
const show = ref(false)
const list = ref([
  { id: 1, btns: '同步APP营销矩阵', disabled: false },
  { id: 2, btns: '同步SCRM系统', disabled: true },
  { id: 3, btns: '同步DSP系统', disabled: true },
  { id: 4, btns: '同步SMS系统', disabled: true },
])
const active = ref(0)

defineExpose({
  close, // 关闭同步弹窗
  setLoading, // 设置加载中
})
</script>

<style scoped lang="scss">
.kz_top_btns {
  padding-left: 20px;
  .find_number {
    font-size: 14px;
    color: #363636;
    display: inline-block;
    span {
      color: #e40000;
    }
  }
}
.sync_dialog {
  .lt {
    color: $color333;
  }
  .rt {
    font-size: 12px;
    color: $color999;
    line-height: 1;
    span {
      color: $colorred;
    }
  }
  .btn_list {
    flex-wrap: wrap;
    .btn_item {
      margin-top: 16px;
      line-height: 1;
      margin-right: 16px;
    }
    .el-button + .el-button {
      margin-left: 0px;
    }
    .btn_item:nth-child(3n) {
      margin-right: 0;
    }
    .btn_disabled {
      background-color: #d2d5db;
      border-color: #d2d5db;
      color: #fff;
    }
  }
}
</style>
