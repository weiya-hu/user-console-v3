<template>
  <div class="article_add">
    <div class="addform">
      <div class="fjend btns">
        <el-button @click="submit(1)">&ensp;保存&ensp;</el-button>
        <el-button type="primary" @click="submit(2)">&ensp;提交&ensp;</el-button>
      </div>
      <div v-loading="upLoading" class="form_content">
        <el-form ref="aFormRef" :model="aForm" :rules="aRules" size="large" @submit.prevent>
          <el-form-item prop="thumb_url" class="up_cover">
            <div class="up_cover_txt">上传封面</div>
            <div class="upload fcs">
              <el-upload
                ref="upload"
                :action="hostUrl"
                :auto-upload="false"
                :limit="1"
                :multiple="false"
                :show-file-list="false"
                :data="upData"
                list-type="picture"
                :on-change="upChange"
                :on-exceed="handleExceed"
                :on-success="upSuccess"
                :on-error="upError"
                accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG"
                class="flex"
                drag
              >
                <div class="upbox">
                  <img
                    v-if="titleImg || aForm.thumb_url"
                    :src="titleImg || aForm.thumb_url"
                    class="title_img"
                    alt=""
                  />
                  <div v-else class="fleximg fc upbox_noimg">
                    <KzIcon href="#icon-shangchuan" size="32px" />
                    <div>把文件拖到此处，或<span>点击上传</span></div>
                  </div>
                </div>
              </el-upload>
              <div class="img_tip flex">仅支持 JPG、PNG 、JPEG等图片格式，大小不超过2M</div>
            </div>
          </el-form-item>
          <el-form-item prop="title" class="up_cover">
            <div class="up_cover_txt">文章标题</div>
            <el-input v-model="aForm.title" placeholder="请输入文章标题（5~30个字）"></el-input>
          </el-form-item>
          <el-form-item prop="content" class="up_cover">
            <div class="up_cover_txt flexl">
              文章内容
              <div class="fcs content_tip">
                <KzIcon href="#icon-zhuyi" size="14px" />
                <span
                  >请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。</span
                >
              </div>
            </div>
            <KzEdit ref="editRef" v-model="aForm.content" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { UploadFile, UploadProgressEvent } from 'element-plus'
import KzEdit from '@/components/KzEdit.vue'
import { errMsg } from '@/utils/index'
import { getAliToken_api } from '@/api/index'
import { articleAdd_api, articleDetail_api, articleUpdate_api } from '@/api/product/cms/myWork'
import { mainStore } from '@/store/index'
const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id //有id就是编辑
if (id) {
  articleDetail_api({ id: id as string }).then((res: IRes) => {
    aForm.value = res.body
    if (res.body.thumb_url) {
      // titleImg.value = res.body.thumb_url
      imgErrorType.value = ''
    }
  })
}

interface AForm {
  thumb_url: string
  title: string
  content: string
  status: number
}
const aForm = ref<AForm>({
  thumb_url: '',
  title: '',
  content: '',
  status: 1, // 1:草稿(保存),2:待审核(提交)
})
const aFormRef = ref()
const imgErrorType = ref('none') //封面图片错误类型
const filePass = (rule: any, value: any, callback: Function) => {
  switch (imgErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过2M的图片'))
      break
    case 'type':
      callback(new Error('请添加 .JPG、.PNG 、.JPEG 格式的图片'))
      break
    case 'none':
      callback(new Error('请添加文章封面图片'))
      break
    default:
      callback()
      break
  }
}
const aRules = {
  thumb_url: [{ validator: filePass, trigger: 'change' }],
  title: [
    { required: true, message: '请输入文章标题（5~30个字）', trigger: 'blur' },
    { min: 5, max: 30, message: '长度需要在 5 ~ 30 字之间', trigger: 'blur' },
  ],
  content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }],
}
const upLoading = ref(false)
const upload = ref() //上传组件ref
const titleImg = ref<string>() //封面图片blob路径
const imgType = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const timg_exname = ref('') //封面图片后缀名
const upChange = (file: UploadFile, list: UploadFile[]) => {
  //封面图片改变时
  timg_exname.value = file.name.substring(file.name.lastIndexOf('.'))
  if (imgType.indexOf(timg_exname.value) < 0) {
    imgErrorType.value = 'type'
    aFormRef.value!.validateField('thumb_url', () => null)
  } else if (file.size && file.size / 1024 / 1024 > 2) {
    imgErrorType.value = 'size'
    aFormRef.value!.validateField('thumb_url', () => null)
  } else {
    imgErrorType.value = ''
    titleImg.value = file.url
    aFormRef.value!.clearValidate('thumb_url')
  }
}
const handleExceed = (files: UploadFile[]) => {
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}

const upSuccess = (res: UploadProgressEvent, file: UploadFile) => {
  //封面图片上传成功
  titleImg.value = ''
  submitAddForm()
}
const upError = (err: any, file: UploadFile, fileList: UploadFile[]) => {
  titleImg.value = ''
  aForm.value.thumb_url = ''
  upload.value.clearFiles()
  errMsg('封面图片上传失败')
}

const submitAddForm = async () => {
  //提交表单
  console.log(aForm.value)
  const res = id
    ? await articleUpdate_api({ ...aForm.value, id })
    : await articleAdd_api(aForm.value)
  upLoading.value = false
  if (res.status == 1) {
    store.setKeepList([])
    router.back()
  }
}
const hostUrl = ref('') //封面图片上传路径
const upData = ref({}) //封面图片上传参数
const editRef = ref() // 富文本组件ref
const submit = async (type: number) => {
  //点击提交

  aForm.value.status = type
  aFormRef.value.validate(async (valid: any, fields: any) => {
    console.log(valid, fields)
    if (valid) {
      console.log('submit!', titleImg.value)
      upLoading.value = true
      await editRef.value.upImages()
      editRef.value.clearImgs()
      if (!titleImg.value) {
        submitAddForm()
        return
      }
      getAliToken_api({ site: 'cms_article' }).then((res: IRes) => {
        if (res.status === 1) {
          hostUrl.value = res.body.host
          upData.value = {
            key: res.body.dir + '/' + res.body.uuid + timg_exname.value,
            OSSAccessKeyId: res.body.accessid,
            success_action_status: 200,
            policy: res.body.policy,
            signature: res.body.signature,
          }
          aForm.value.thumb_url =
            res.body.host + '/' + res.body.dir + '/' + res.body.uuid + timg_exname.value
          upload.value!.submit()
        } else {
          errMsg('上传参数获取失败')
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.article_add {
  .el-breadcrumb {
    font-size: 12px;
  }
  .addform {
    border-radius: 6px;
    .title {
      padding: 21px 50px;
      font-size: 18px;
      font-weight: 600;
      color: $color333;
      border-bottom: 1px solid $coloreee;
      span {
        font-size: 12px;
        font-weight: 400;
        color: $color999;
        margin-left: 22px;
      }
    }
    .form_content {
      .up_cover {
        padding: 20px 24px;
        background: #ffffff;
        margin-bottom: 16px;
        border-radius: 8px;
        :deep(.el-form-item__content) {
          display: block;
          .up_cover_txt {
            font-size: 16px;
            color: #303133;
            line-height: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }
        }
        .content_tip {
          font-size: 12px;
          color: #909399;
          line-height: 12px;
          font-weight: 400;
          margin-left: 20px;
          & > span {
            margin-left: 8px;
          }
        }
      }
    }
    .tip {
      background-color: #fff8e5;
      color: $color666;
      border: 1px solid rgba(255, 191, 0, 1);
      border-radius: 2px;
      font-size: 12px;
      height: 30px;
      line-height: 14px;
      padding-left: 12px;
      margin-bottom: 30px;
      img {
        width: 14px;
        height: 14px;
        margin-right: 8px;
      }
    }
    :deep(.el-form-item__label) {
      font-size: 18px;
      font-weight: 600;
      color: $color333;
      padding-right: 30px;
      &::before {
        display: none;
      }
    }

    :deep(.el-upload-dragger) {
      width: 250px;
      height: 140px;
      box-sizing: border-box;
    }
    .upbox {
      width: 250px;
      height: 140px;
      border-radius: 4px;
      // border: 1px dashed rgba(221, 221, 221, 1);
      position: relative;
      // left: -10px;
      // top: -40px;
      img {
        background-color: #dddddd;
        width: 50px;
        height: 50px;
      }
      .title_img {
        background-color: #fff;
        width: 100%;
        height: 100%;
      }
      &:hover {
        border-color: $dfcolor;
      }
      .upbox_noimg {
        padding-top: 36px;
        & > div {
          font-size: 12px;
          color: #909399;
          line-height: 12px;
          font-weight: 400;
          margin-top: 8px;
          & > span {
            color: #2d68eb;
          }
        }
      }
    }
    .is-error {
      .upbox {
        border-color: $colorred;
      }
    }
    .img_tip {
      height: 140px;
      font-size: 12px;
      color: $color999;
      align-items: flex-end;
      margin-left: 20px;
    }
  }
  .btns {
    padding: 20px 24px;
    background: #ffffff;
    margin-bottom: 16px;
    border-radius: 8px;
  }
}
</style>
