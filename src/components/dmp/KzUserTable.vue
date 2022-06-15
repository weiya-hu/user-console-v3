<template>
  <div class="dmp_table user_table" :style="{ height: `calc( 100% - ${oheight}px )` }">
    <el-table
      ref="tableRef"
      :data="data"
      style="width: 100%"
      height="100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="sex" label="性别">
        <template #default="scope">
          <div>{{ scope.row.sex == 0 ? '未知' : scope.row.sex == 1 ? '男' : '女' }}</div>
        </template>
      </el-table-column>
      <el-table-column property="mobiles" label="联系方式">
        <template #default="scope">
          <div v-html="scope.row.mobiles"></div>
        </template>
      </el-table-column>
      <el-table-column property="email" label="邮箱" />
      <el-table-column property="type" label="从事行业">
        <template #default="scope">
          <div>{{ getHashStr(scope.row.industry_id.split(','), typeHash, 'last') }}</div>
        </template>
      </el-table-column>
      <el-table-column label="地区">
        <template #default="scope">
          <div>
            {{
              getHashStr(
                strToArr(scope.row.province, scope.row.city, scope.row.district),
                addressHash
              )
            }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源">
        <template #default="scope">
          <div>{{ getSource(scope.row.source) }}</div>
        </template>
      </el-table-column>
      <el-table-column property="update_time" label="创建时间">
        <template #default="scope">
          <div>{{ formatDate(new Date(Number(scope.row.update_time)), 'yyyy-MM-dd') }}</div>
        </template>
      </el-table-column>
      <template #empty>
        <KzEmpty />
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
/**
 * 客户表格
 * @author chn
 */
import { ref, computed } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, getSource } from '@/utils/index'
const store = mainStore()
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)
const props = withDefaults(
  defineProps<{
    data: any[]
    oheight?: number
  }>(),
  {
    oheight: 120,
  }
)
const emit = defineEmits(['select'])
// select 选择时触发，返回选择数据

interface IData {
  city: number
  create_time: number
  district: number
  email: string
  id: number
  industry_id: string
  mobiles: string
  name: string
  province: number
  sex: number
  source: number
  update_time: number
}

const multipleSelection = ref<(string | number)[]>([])
const handleSelectionChange = (val: IData[]) => {
  multipleSelection.value = val.map((v) => v.id)
}

const tableRef = ref()
const clear = () => {
  multipleSelection.value = []
  tableRef.value.clearSelection()
}

defineExpose({
  selIdList: multipleSelection, // 选中的id数组
  clear, // 清空选中及id数组
})
</script>

<style scoped lang="scss"></style>
