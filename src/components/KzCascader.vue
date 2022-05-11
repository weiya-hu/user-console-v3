<template>
  <el-cascader
    v-if="type == 'type'"
    ref="cRef"
    v-model="modelValue"
    :options="typeList"
    :props="typeProps"
    placeholder="请选择行业"
    class="w100"
    @change="change"
  ></el-cascader>
  <el-cascader
    v-else
    ref="cRef"
    v-model="modelValue"
    :options="addressList"
    :props="addrProps"
    placeholder="请选择地区"
    class="w100"
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
import { get_Str } from '@/utils/index'
const props = withDefaults(
  defineProps<{
    modelValue: any[]
    type: string
  }>(),
  {
    type: 'type',
  }
)
const emit = defineEmits(['update:modelValue', 'change'])

const store = mainStore()
const typeList = computed(() => store.state.typeList)
const addressList = computed(() => store.state.addressList)
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
const getText = (arr: (string | number)[]) => {
  const str =
    props.type == 'type'
      ? get_Str(arr, typeList.value, 'industry_id')
      : get_Str(arr, addressList.value, 'code')
  return str
}
defineExpose({
  getText,
})
</script>

<style scoped lang="scss"></style>
