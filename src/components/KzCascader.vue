<template>
  <el-cascader
    v-if="type === 'type'"
    ref="cRef"
    v-model="valueArr"
    :options="typeList"
    :props="typeProps"
    placeholder="请选择行业"
    class="w100"
    :size="size"
    @change="change"
  ></el-cascader>
  <el-cascader
    v-else
    ref="cRef"
    v-model="valueArr"
    :options="addressList"
    :props="addrProps"
    placeholder="请选择地区"
    class="w100"
    :size="size"
    @change="change"
  ></el-cascader>
</template>

<script setup lang="ts">
/**
 * 行业、地区级联选择组件
 * @author chn
 */
import { mainStore } from '@/store/index'
import { ref, computed } from 'vue'
import { getHashStr } from '@/utils/index'
const props = withDefaults(
  defineProps<{
    modelValue: any[]
    type?: string
    size?: 'large' | 'default' | 'small'
  }>(),
  {
    type: 'type',
    size: 'default',
  }
)

const valueArr = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const store = mainStore()
const typeList = computed(() => store.state.typeList)
const addressList = computed(() => store.state.addressList)
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)
const typeProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value: 'industry_id',
  label: 'name',
}
const addrProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value: 'code',
  label: 'name',
}

const change = (value: any) => {
  emit('update:modelValue', value)
  emit('change', value)
}

const cRef = ref()
const getText = (arr: (string | number)[], type?: 'arr' | 'last') => {
  const str = getHashStr(arr, props.type === 'type' ? typeHash.value : addressHash.value, type)
  return str
}
defineExpose({
  getText,
})
</script>

<style scoped lang="scss"></style>
