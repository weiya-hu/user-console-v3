<template>
  <div class="m_article">
    <div class="article_top flexb">
      <div>软文库</div>
      <div>
        <el-button
          type="primary"
          class="add_need_btn"
          @click="$router.push('/product/cms/mywork/articleadd')"
          ><KzIcon
            href="#icon-tianjia"
            size="14px"
            color="white"
            class="add_need_icon"
          />新建</el-button
        >
      </div>
    </div>
    <div class="dmp_table">
      <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" min-width="100" />
        <el-table-column property="thumb_url" label="封面图片" min-width="100">
          <template #default="{ row }">
            <img
              :src="row.thumb_url"
              alt=""
              class="firstimg lookhover"
              @click="look(row.thumb_url)"
            />
          </template>
        </el-table-column>
        <el-table-column property="title" label="标题" min-width="160">
          <template #default="{ row }">
            <el-link
              v-if="row.status != 4"
              type="primary"
              @click="
                $router.push(
                  row.status == 1
                    ? '/product/cms/mywork/articleadd?id=' + row.id
                    : '/product/cms/mywork/articledetails?id=' + row.id
                )
              "
              >{{ row.title }}</el-link
            >
            <span
              v-if="row.status == 4"
              @click="
                () => {
                  errorMsg = row.fail_reason
                  errorShow = true
                }
              "
              >{{ row.title }}
            </span>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" min-width="100">
          <template #default="{ row }">
            <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" min-width="100">
          <template #default="{ row }">
            <div class="fcs">
              <div class="status_dot" :class="getKzMyStatus(row.status).className"></div>
              <div>{{ getKzMyStatus(row.status).text }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="user_name" label="创作人" min-width="120">
          <template #default="{ row }">
            <div class="els">{{ row.user_name }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template #default="{ row }">
            <div class="fcs">
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link
                v-if="row.status == 1"
                type="primary"
                @click="$router.push('/product/cms/mywork/articleadd?id=' + row.id)"
                >编辑</el-link
              >
              <el-link
                v-if="row.status == 2 || row.status == 3"
                type="primary"
                @click="$router.push('/product/cms/mywork/articledetails?id=' + row.id)"
                >查看</el-link
              >
              <el-link v-if="row.status == 4" type="primary" @click="showError(row.fail_reason)"
                >驳回原因</el-link
              >
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <KzEmpty />
        </template>
      </el-table>
    </div>
    <KzPage v-model:page="page" v-model:size="size" :total="total" @change="changePage" />
    <KzDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel" />
    <KzDialog v-model="errorShow" :msg="errorMsg" :title="'拒绝原因'" :btn="1" />
    <el-image-viewer
      v-if="imgShow"
      :url-list="showImgs"
      :initial-index="showImgIndex"
      @close="imgShow = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import KzEmpty from '@/components/KzEmpty.vue'
import KzPage from '@/components/KzPage.vue'
import KzDialog from '@/components/KzDialog.vue'
import { articleList_api, articleDel_api } from '@/api/product/cms/myWork'
import { getKzMyStatus } from '@/utils/index'
interface SData {
  id: number | string
  thumb_url: string
  title: string
  create_time: number
  status: number
  fail_reason?: string
}
const page = ref(1)
const total = ref(0)
const size = ref(10)
const tableData = ref<SData[]>([])
const getList = async () => {
  const res = await articleList_api({
    size: size.value,
    current: page.value,
  })
  if (res.status === 1) {
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
const changePage = () => {
  getList()
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val: SData[]) => {
  //表格选择
  multipleSelection.value = val
}

const delId = ref('')
const delShow = ref(false)
const goDel = (id: string) => {
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = () => {
  //确认删除
  articleDel_api({ id: delId.value }).then((res: IRes) => {
    if (res.status == 1) {
      getList()
      delShow.value = false
    }
  })
}

const showError = (fail: string) => {
  errorMsg.value = fail
  errorShow.value = true
}

const errorShow = ref(false)
const errorMsg = ref('')

const showImgs = ref<string[]>([]) //预览图片列表
const imgShow = ref(false) //预览是否显示
const showImgIndex = ref(0) //首张预览图片
const look = (url: string) => {
  // window.open(url)
  const arr: string[] = []
  tableData.value.forEach((v) => {
    arr.push(v.thumb_url)
  })
  showImgs.value = arr
  showImgIndex.value = showImgs.value.findIndex((v) => v == url)
  imgShow.value = true
}
</script>

<script lang="ts">
export default { name: '我的作品库-软文' }
</script>

<style scoped lang="scss">
.m_article {
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 8px;
  .article_top {
    margin-bottom: 20px;
    & > div:nth-child(1) {
      height: 20px;
      font-size: 18px;
      font-weight: 600;
      color: #303133;
      line-height: 18px;
    }
    .add_need_btn {
      width: 88px;
      .add_need_icon {
        margin-right: 4px;
      }
    }
  }
  .firstimg {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
}
</style>
