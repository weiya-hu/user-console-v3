<template>
  <div class="send_list">
    <div class="flexb send_list_top">
      <div>签名管理</div>
      <div class="flexr">
        <el-button type="primary" @click="dialogShow = true"
          ><KzIcon
            href="#icon-tianjia"
            size="14px"
            color="white"
            class="add_need_icon"
          />&nbsp;新建&nbsp;&nbsp;</el-button
        >
      </div>
    </div>
    <div class="dmp_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column property="code" label="签名" min-width="130" />
        <el-table-column property="type" label="使用场景" min-width="100" />
        <el-table-column property="message" label="申请人" min-width="160"> </el-table-column>
        <el-table-column property="create_time" label="申请日期" min-width="120">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link
                v-if="row.status == 2 || row.status == 3"
                type="primary"
                @click="$router.push('/product/cms/mywork/articledetails?id=' + row.id)"
                >删除</el-link
              >
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
  </div>
  <KzDialog v-model="dialogShow" width="470px" title="新建签名" @sure="sureBtn">
    <el-form ref="formRef" :model="formValue" :rules="formRule">
      <el-form-item label="签名标题" prop="title">
        <el-input v-model="formValue.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="&nbsp&nbsp&nbsp使用场景">
        <el-radio-group v-model="formValue.scene" class="ml-4 flexl">
          <el-radio label="1" size="large">验证码</el-radio>
          <el-radio label="2" size="large">通知短信</el-radio>
          <el-radio label="3" size="large">营销短信</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </KzDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KzEmpty from '@/components/KzEmpty.vue'
import { formatDate } from '@/utils/date'
import KzDialog from '@/components/KzDialog.vue'
const tableData = ref()
const dialogShow = ref(false)
const formRef = ref()
const formValue = ref({
  title: '',
  scene: null,
})
const formRule = ref({
  title: [{ required: true, message: '请输入签名', trigger: 'change' }],
})

const sureBtn = () => {
  console.log(formValue.value)
  formRef.value.validate(async (valid: boolean, invalidFields: any) => {
    console.log(valid, invalidFields)
  })
}
</script>

<style lang="scss" scoped>
.send_list {
  background: #ffffff;
  padding: 20px 24px;
  .send_list_top {
    & > div:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      line-height: 18px;
    }
  }
  .dmp_table {
    margin-top: 20px;
  }
}
</style>
