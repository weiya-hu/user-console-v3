<template>
  <el-table-column v-if="type === 'text'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div class="facc">
        <div>{{ prop && row[prop] ? row[prop] : '---' }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'text-tooltip'"
    :property="prop"
    :label="lable"
    :min-width="width"
  >
    <template #default="{ row }">
      <div class="facc">
        <el-tooltip v-if="prop && row[prop]" class="box-item" effect="dark" placement="top-start">
          <template #content
            ><div class="text-tooltip-style">{{ prop && row[prop] }}</div></template
          >
          <div class="text-style facc">{{ prop && row[prop] }}</div>
        </el-tooltip>
        <div v-else class="facc">---</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'num'" :label="lable" :min-width="width">
    <template #default="{ row, $index }">
      <div class="facc">
        <div v-if="row">{{ $index + 1 }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'link'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <el-link type="primary" :href="prop && row[prop]">{{ (prop && row[prop]) || '---' }}</el-link>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'select'" type="selection" :width="width" />
  <el-table-column v-if="type === 'status'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div class="facc">
        <div :class="getStatus(row.status).className"></div>
        <div>{{ getStatus(row.status).text }}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'status_do'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div class="dfc">
        <div class="status_dot" :class="getKzStatus(row.status).className"></div>
        <div>
          {{ getKzStatus(row.status).text }}
        </div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'date'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ Format('yyyy-MM-dd', new Date(prop && row[prop])) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'city'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ row.province }}{{ row.city }}{{ row.district }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'operateLook'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div
        v-for="(item, index) in operatButton"
        :key="index"
        class="operate-button"
        @click="operate(index, row)"
      >
        {{ row.status === 2 ? item : row.status === 0 ? '????????????' : '---' }}
      </div>
      <el-dialog v-model="errorShow" title="????????????" width="400px">
        <div class="fcc msg">{{ row.fail_reason }}</div>
        <template #footer>
          <div class="fcc">
            <el-button type="primary" @click="errorShow = false">????????????</el-button>
          </div>
        </template>
      </el-dialog>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'industry_id'" :property="prop" :label="lable" :min-width="width">
    <template #default="scope">
      <div>{{ getHashStr(scope.row.industry_id, store.state.typeHash, 'last') || '---' }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'city_id'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <el-tooltip v-if="row.province > 0" effect="dark" placement="top">
        <template #content>
          <div style="width: 100px">
            {{
              row.province > 0 &&
              getHashStr(strToArr(row.province, row.city, row.district), store.state.addressHash)
            }}
          </div>
        </template>
        <div class="text-style">
          {{
            row.province > 0 &&
            getHashStr(strToArr(row.province, row.city, row.district), store.state.addressHash)
          }}
        </div>
      </el-tooltip>
      <div v-if="row.province == 0" class="text-style">---</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'source'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ prop && getSource(row[prop]) }}</div>
    </template>
  </el-table-column>
  <el-table-column
    v-if="type === 'company_type'"
    :property="prop"
    :label="lable"
    :min-width="width"
  >
    <template #default="{ row }">
      <div>{{ getCompanyType(row.company_type) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'country'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <div>{{ getCountry(row.country_id) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'img'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <img :src="row.thumb_url" alt="" @click="lookImage([row.thumb_url], 0)" />
    </template>
  </el-table-column>
  <el-table-column v-if="type === 'video'" :property="prop" :label="lable" :min-width="width">
    <template #default="{ row }">
      <video :src="row.video_url" alt="" class="firstimg" @click="lookVideo(row.video_url)" />
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue'
import { Format } from '@/utils/date'
import { getHashStr, strToArr, getSource, getKzStatus, lookImage, lookVideo } from '@/utils/index'
import { mainStore } from '@/store/index'
// import { businessCompanyType, overseasCountry } from '@/api/dmp/findb'
const store = mainStore()
const props = withDefaults(
  defineProps<{
    type: string
    lable?: string
    prop?: string
    width: number
    operatButton?: string[]
  }>(),
  {}
)

const errorShow = ref(false)
const emit = defineEmits(['click'])
const operate = (index: number, row: any) => {
  row.status === 2 && emit('click', index, row)
  row.status === 0 && (errorShow.value = true)
}
const { type, lable, prop, width, operatButton } = toRefs(props)

const getStatus = (type: number) => {
  const obj = ref<{ text: string; className: string }>()
  switch (type) {
    case 2:
      obj.value = {
        text: '?????????',
        className: 'calculating',
      }
      break
    case 3:
      obj.value = {
        text: '?????????',
        className: 'calculat-false',
      }
      break
    case 4:
      obj.value = {
        text: '?????????',
        className: 'calculated',
      }
      break
    default:
      obj.value = {
        text: '?????????',
        className: 'calcula_yellow',
      }
      break
  }
  return obj.value
}
const statuses = {
  1: { text: '?????????', className: 'calcula_yellow' },
  2: { text: '?????????', className: 'calculating' },
  3: { text: '?????????', className: 'calculat-false' },
  4: { text: '?????????', className: 'calculated' },
}
const companyType = ref()
const country = ref([])
// props.type === 'company_type' &&
//   businessCompanyType().then((res) => {
//     companyType.value = res.body.c_type
//     console.log(companyType.value)
//   })
// props.type === 'country' &&
//   overseasCountry().then((res) => {
//     country.value = res.body
//   })
const getCompanyType = (val: any) => {
  if (val && companyType.value.length) {
    let name = '---'
    companyType.value.forEach((m: any) => {
      m.id == val && (name = m.name)
    })
    return name
  }
  return '---'
}

const getCountry = (val: any) => {
  if (val && country.value) {
    let name = '---'
    country.value.forEach((m: any) => {
      m.code == val && (name = m.country_name)
    })
    return name
  }
  return '---'
}
</script>

<style scoped lang="scss">
.text-style {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.text-tooltip-style {
  width: 150px !important;
  white-space: wrap;
}
.calcula_yellow,
.before-deal {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ffbf00;
  margin-right: 8px;
}
.calculating,
.dealing {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #2bd34e;
  margin-right: 8px;
}
.calculated,
.dealed {
  width: 8px;
  height: 8px;
  background-color: $dfcolor;
  border-radius: 50%;
  margin-right: 8px;
}
.calculat-false,
.deal-refuse {
  width: 8px;
  height: 8px;
  background-color: #e40000;
  border-radius: 50%;
  margin-right: 8px;
}
.operate-button {
  font-size: 14px;
  color: #2d68eb;
  cursor: pointer;
}
.msg {
  font-size: 14px;
  color: #333;
}
.el-overlay {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.text-alyn {
  text-align: center;
}
img {
  width: 75px;
  height: 42px;
}
video {
  width: 75px;
  height: 42px;
}
.dfc {
  display: flex;
  align-items: center;
}
</style>
