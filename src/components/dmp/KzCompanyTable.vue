<template>
  <div class="dmp_table company_table" :style="{ height: `calc( 100% - ${oheight}px )` }">
    <el-table
      ref="tableRef"
      :data="data"
      style="width: 100%"
      height="100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" fixed="left" />
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column property="name" label="企业名称">
        <template #default="scope">
          <div
            class="els2"
            @mouseenter="onShowToolTip($event, scope.row.name)"
            @mouseleave="tooltipShow = false"
          >
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="contact" label="联系人" width="80" />
      <el-table-column property="mobiles" label="联系方式" width="110">
        <template #default="scope">
          <div v-html="scope.row.mobiles"></div>
        </template>
      </el-table-column>
      <el-table-column property="telephone" label="固定电话" width="120" />
      <el-table-column property="industry_id" label="行业分类" width="100">
        <template #default="scope">
          <div
            class="els2"
            @mouseenter="onShowToolTip($event, getHashStr(scope.row.industry_id, typeHash, 'last') as string)"
            @mouseleave="tooltipShow = false"
          >
            {{ getHashStr(scope.row.industry_id, typeHash, 'last') }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="city" label="地区" width="120">
        <template #default="scope">
          <div
            class="els2"
            @mouseenter="onShowToolTip($event, getHashStr(strToArr(scope.row.province, scope.row.city, scope.row.district), addressHash) as string)"
            @mouseleave="tooltipShow = false"
          >
            {{
              getHashStr(
                strToArr(scope.row.province, scope.row.city, scope.row.district),
                addressHash
              )
            }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="address" label="详细地址">
        <template #default="scope">
          <div
            class="els2"
            @mouseenter="onShowToolTip($event, scope.row.address)"
            @mouseleave="tooltipShow = false"
          >
            {{ scope.row.address }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="code" label="统一社会信用代码" width="165" />
      <el-table-column property="url" label="企业官网">
        <template #default="scope">
          <el-link type="primary" target="_blank" :href="scope.row.url" :underline="false"
            ><span
              class="els2"
              @mouseenter="onShowToolTip($event, scope.row.url)"
              @mouseleave="tooltipShow = false"
              >{{ scope.row.url }}</span
            ></el-link
          >
        </template>
      </el-table-column>
      <el-table-column property="business_scope" label="经营范围" width="200">
        <template #default="scope">
          <div
            class="els2"
            @mouseenter="onShowToolTip($event, scope.row.business_scope)"
            @mouseleave="tooltipShow = false"
          >
            {{ scope.row.business_scope }}
          </div>
        </template>
      </el-table-column>
      <el-table-column v-if="ctypeArr.length" property="company_type" label="企业类型" width="120">
        <template #default="scope">
          <div>{{ ctypeArr.find((v) => v.id == scope.row.company_type)?.name }}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" width="100">
        <template #default="scope">
          <div>{{ getSource(scope.row.source) }}</div>
        </template>
      </el-table-column>
      <template #empty>
        <KzEmpty />
      </template>
    </el-table>

    <el-tooltip
      v-model:visible="tooltipShow"
      :virtual-ref="msgRef"
      virtual-triggering
      trigger="hover"
      placement="top"
    >
      <template #content>
        <div style="max-width: 200px">{{ tooltipMsg }}</div>
      </template>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
/**
 * 公司表格
 * @author chn
 */
import { ref, computed } from 'vue'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, getSource } from '@/utils/index'
import KzEmpty from '@/components/KzEmpty.vue'
const store = mainStore()
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)
const ctypeArr = computed(() => store.state.companyType)

const props = withDefaults(
  defineProps<{
    data: any[]
    oheight?: number
  }>(),
  {
    oheight: 120,
  }
)

interface IData {
  [propName: string]: any
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

const msgRef = ref()
const tooltipShow = ref(false)
const tooltipMsg = ref('')
const onShowToolTip = (e: MouseEvent, msg: string) => {
  msgRef.value = e.currentTarget
  tooltipMsg.value = msg
  tooltipShow.value = true
}

defineExpose({
  selIdList: multipleSelection, // 选中的id数组
  clear, // 清空选中及id数组
})
</script>

<style scoped lang="scss"></style>
