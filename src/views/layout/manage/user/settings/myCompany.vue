<template>
  <div class="kz_card my_company_page">
    <div class="card_title fsc">
      <div>我的企业</div>
      <el-button type="primary" :icon="Plus" @click="$router.push('/manage/company/authentication')">添加企业</el-button>
    </div>

    <div class="card_content">
      <div class="fsc">
        <el-button-group class="btn_tab">
          <el-button :class="tab == 1 && 'btn_tab_active'" @click="tab = 1">已加入企业</el-button>

          <el-button :class="tab == 2 && 'btn_tab_active'" @click="tab = 2">待审核企业</el-button>
        </el-button-group>
      </div>

      <div v-if="tab == 1" class="tab_box">
        <el-table :data="companyDate" border>
          <el-table-column property="name" label="企业名称" />
          <el-table-column property="code" label="统一社会信用代码" />
          <el-table-column property="legal_person" label="联系人" />
          <el-table-column property="contact" label="联系电话" />
          <el-table-column property="city_id" label="地区">
            <template #default="{ row }">
              <el-tooltip effect="dark" placement="top">
                <template #content>
                  <div style="width: 100px">
                    {{
                      row.province > 0 &&
                      getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                    }}
                  </div>
                </template>
                <div>
                  {{
                    row.province > 0 &&
                    getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                  }}
                </div>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column property="address" label="详细地址" />
          <el-table-column property="business_scope" label="经营范围" />

          <!-- <el-table-column label="操作">
            <template #default="{ row }">
              <div class="fcs">
                <el-link
                  type="primary"
                  v-if="row.type == 1"
                  @click="$router.push('/manage/company/companyinfo?id=' + row.id)"
                  >企业管理</el-link
                >
              </div>
            </template>
          </el-table-column> -->
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
      <div v-if="tab == 2" class="tab_box">
        <el-table :data="comExamDate" border>
          <el-table-column property="name" label="企业名称" />
          <el-table-column property="code" label="统一社会信用代码" />
          <el-table-column property="legal_person" label="联系人" />
          <el-table-column property="contact" label="联系电话" />
          <el-table-column property="city_id" label="地区">
            <template #default="{ row }">
              <el-tooltip effect="dark" placement="top">
                <template #content>
                  <div style="width: 100px">
                    {{
                      row.province > 0 &&
                      getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                    }}
                  </div>
                </template>
                <div>
                  {{
                    row.province > 0 &&
                    getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                  }}
                </div>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column property="address" label="详细地址" />
          <el-table-column property="business_scope" label="经营范围" />
          <el-table-column property="status" label="状态">
            <template #default="{ row }">
              <div class="fcs">
                <div class="status_dot" :class="getKzComStatus(row.status).className"></div>
                <div>
                  {{ getKzComStatus(row.status).text }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column property="fail_reason" label="备注" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="fcs">
                <el-link
                  type="primary"
                  v-if="row.status == 1"
                  @click="$router.push('/manage/company/authentication?id=' + row.id)"
                  >编辑</el-link
                >
                <el-link
                  type="primary"
                  v-if="row.status == 2"
                  @click="$router.push('/manage/company/authentication?id=' + row.id)"
                  >查看</el-link
                >

                <el-link
                  type="primary"
                  v-if="row.status == 4"
                  @click="$router.push('/manage/company/authentication?id=' + row.id)"
                  >重新提交</el-link
                >
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <KzEmpty />
          </template>
        </el-table>
      </div>
      <el-dialog v-model="addCompanyShow" title="新建企业"  width="380px">
        <el-input class="pb20" v-model="companyName" placeholder="请输企业名称"/>
        <div class="fcs fjend pb20">
          <el-button @click="addCompanyShow = false">取消</el-button>
          <el-button type="primary" @click="onAddCompanySubmit">保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { companyAdd_api, companyExam_api } from '@/api/manage/user/steeings/myinfo'
import { getKzComStatus, getHash, getHashStr, strToArr } from '@/utils/index'
import { errMsg } from '@/utils'
import { mainStore } from '@/store/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = mainStore()
const addressHash = ref(store.state.addressHash)
const tab = ref(1)
const companyDate = ref([])
const cAddList = async () => {
  const res = await companyAdd_api()
  if (res.status === 1) {
    companyDate.value = res.body
  }
}
cAddList()
const comExamDate = ref([])
const cExamList = async () => {
  const res = await companyExam_api()
  if (res.status === 1) {
    comExamDate.value = res.body
  }
}
cExamList()

const addCompanyShow = ref(false)
const companyName = ref<any>('')

const addCompanyRules = ref({
  name: [{ required: true, message: '请输入企业名称！', trigger: 'blur' }],
})
const onAddCompanySubmit = () => {
  router.replace('/manage/company/authentication?name=' + companyName.value)
}
</script>

<style lang="scss" scoped>
.card_content {
  padding: 24px;
  .tab_box {
    margin-top: 24px;
  }
}
</style>
