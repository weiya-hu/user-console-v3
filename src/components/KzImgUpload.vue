<template>
  <div class="media_upload flex" :class="max == 1 ? 'one_up' : 'alls_up'">
    <el-upload
      ref="upload"
      drag
      action="#"
      :auto-upload="false"
      :limit="max"
      :multiple="max > 1"
      list-type="picture-card"
      :on-exceed="handleExceed"
      :on-change="upChange"
      :on-preview="lookimgs"
      :on-remove="upRemove"
      :accept="exnameList.join(',')"
      class="upbox"
      :file-list="imgList.map((v) => ({ name: '', url: v }))"
    >
      <slot>
        <div class="fc fcc">
          <el-icon>
            <Plus />
          </el-icon>
          <div class="file_name">拖拽/点击上传</div>
        </div>
      </slot>
    </el-upload>
    <div class="tips" v-html="msg"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * 图片上传组件
 * 上传时用了el-upload组件UploadFile内部的uid(时间戳)去判断了图片是否已上传，已上传的不会再次上传
 * @author chn
 */
import { ref, onMounted, nextTick } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import { getAliToken_api } from '@/api/login'
import { lookImage, errMsg } from '@/utils/index'
import axios from 'axios'

const props = withDefaults(
  defineProps<{
    exnameList?: string[] //支持的文件格式数组
    max?: number //最大上传数
    msg?: string //描述文字
    maxSize?: number //最大尺寸 单位M
    imgList?: string[] // 默认上传文件
    needDownload?: boolean // 图片是否需要下载
    site?: string // 上传接口参数
  }>(),
  {
    exnameList: () => ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG'],
    max: 1,
    msg: '',
    maxSize: 2,
    imgList: () => [],
    needDownload: false,
    site: 'official_img',
  }
)

onMounted(() => {
  nextTick(() => {
    if(props.imgList.length){
      props.imgList.forEach((v, i) => {
        imgs.value.push({
          url: v,
          name: '',
          status: 'success',
          uid: -i-1,
        })
        sucImgs.value.push({
          url: v,
          name: '',
          status: 'success',
          uid: -i-1,
          upUrl: v,
        })
      })
    }
    if (props.imgList.length >= props.max) {
      const el = document.querySelector('.el-upload--picture-card') as HTMLElement
      el.style.display = 'none'
    }
  })
})

// upOneSuccess：上传单个图片成功后，返回文件地址和添加图片的个数；upAllSuccess: 上传全部图片成功后，返回文件地址数组;
// error：上传发生错误，返回错误；change：图片改变时，返回图片名；del：删除图片时触发
const emit = defineEmits(['upOneSuccess', 'upAllSuccess', 'error', 'change', 'del'])

const imgs = ref<UploadFile[]>([])
const upload = ref() //上传组件ref

const upChange = (file: UploadFile, fileList: UploadFile[]) => {
  if (!file.name || file.status === 'fail') {
    return
  }
  const exname = file.name.substring(file.name.lastIndexOf('.'))
  if (props.exnameList.indexOf(exname) === -1) {
    upload.value.handleRemove(file)
    errMsg('图片格式错误！')
    return
  }
  if (file.size && file.size / 1024 / 1024 > props.maxSize) {
    upload.value.handleRemove(file)
    errMsg(`图片文件大小不能超过${props.maxSize}M`)
    return
  }
  imgs.value = fileList
  const el = document.querySelector('.el-upload--picture-card') as HTMLElement
  if (imgs.value.length >= props.max) {
    el.style.display = 'none'
  }

  const fxname = file.name.substring(0, file.name.indexOf('.'))
  emit('change', fxname)
}
const upRemove = (file: UploadFile, fileList: UploadFile[]) => {
  const i = sucImgs.value.findIndex((v) => {
    return v.upUrl === file.url || v.uid === file.uid
  })
  i > - 1 && sucImgs.value.splice(i, 1);
  imgs.value = fileList
  emit('del')
  ;(document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
}
const lookimgs = (file: UploadFile) => {
  const arr: string[] = []
  imgs.value.forEach((v) => {
    arr.push(v.url!)
  })
  lookImage(
    arr,
    arr.findIndex((v) => v === file.url)
  )
}

interface UploadFileSuccess extends UploadFile {
  upUrl?: string
}
const sucImgs = ref<UploadFileSuccess[]>([]) // 上传成功的图片
const isAllSuccess = () => {
  if (sucImgs.value.length === imgs.value.length && sucImgs.value.length) {
    emit(
      'upAllSuccess',
      sucImgs.value.map((v) => v.upUrl)
    )
  }
}
const upOneImg = async (file: UploadFile, downloadName?: string) => {
  if(file.status === 'success' || !file.raw){
    return
  }
  //上传单张图片
  const res: IRes = await getAliToken_api({ site: props.site })
  if (res.status == 1) {
    const exname = file.name.substring(file.name.lastIndexOf('.'))
    const fd = new FormData()
    const upData: { [propName: string]: string } = {
      key: res.body.dir + '/' + res.body.uuid + exname,
      OSSAccessKeyId: res.body.accessid,
      success_action_status: '200',
      policy: res.body.policy,
      signature: res.body.signature,
    }
    if (props.needDownload) {
      const download_name = downloadName ? downloadName + exname : file.name
      upData['Content-Disposition'] = 'attachment; filename=' + encodeURIComponent(download_name) //改变下载文件名
    }
    for (const [key, value] of Object.entries(upData)) {
      fd.append(key, value)
    }
    fd.append('file', file.raw as Blob)
    const response = await axios({
      url: res.body.host,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
      data: fd,
    })
    if (response.status == 200) {
      const url = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
      sucImgs.value.push({ ...file, upUrl: url })
      isAllSuccess()
      //父组件内部去判断是否全部上传完成，因为上传成功后再走提交接口是个异步操作
      emit('upOneSuccess', url, imgs.value.length)
      return Promise.resolve(url)
    }
    return Promise.reject(file.name + '上传失败')
  }
  return Promise.reject('获取上传配置失败')
}
const submit = async (downloadName?: string) => {
  // 一般一张图片才会改名，如果是多张，下载名就用文件名，不用传downloadName
  isAllSuccess()
  try {
    for (let i = 0; i < imgs.value.length; i++) {
      const v = imgs.value[i]
      const j = sucImgs.value.findIndex((k) => v.uid === k.uid)
      if (j > -1) {
        // 即此图片已上传
        continue
      }
      await upOneImg(v, downloadName).catch((err) => {
        throw new Error(err)
      })
    }
  } catch (error: any) {
    emit('error', error)
  }
}
const clear = () => {
  //直接调用clearFiles清空方法会导致再次添加直接走on-exceed，或许什么地方有bug，暂时在父组件用v-if解决
  // imgs.value.forEach(v=>{
  //   upload.value.handleRemove(v)
  // });
  // upload.value.clearFiles();
  // imgs 是引用的el-upload组件内传入的UploadFile[]，清空imgs即可清空图片
  imgs.value.length = 0
  sucImgs.value.length = 0
  // 有默认上传图片props.imgList的时候需要在父组件手动清空默认图片
  ;(document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
}
const handleExceed = (files: UploadFile[]) => {
  if (props.max == 1) {
    upload.value.clearFiles()
    upload.value.handleStart(files[0])
  }
}

defineExpose({
  submit, // 上传
  clear, // 清除
  imgs, // 图片数组 File
  sucImgs, // 上传成功的图片数组 { ...imgs, upUrl: 图片网络地址 }
})
</script>

<style scoped lang="scss">
.media_upload {
  :deep(.el-upload-dragger) {
    width: 100%;
    height: 100%;
    border: none;
    background-color: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
  }

  .upbox {
    height: 100%;

    :deep(.is-disabled) {
      .el-upload--picture-card {
        cursor: not-allowed !important;
      }
    }

    :deep(.el-upload-list--picture-card) {
      --el-upload-list-picture-card-size: 100px;

      .el-upload-list__item {
        border-radius: 3px;
        margin: 0 20px 20px 0;

        &:nth-child(3n) {
          margin: 0;
        }
      }
    }

    :deep(.el-upload--picture-card) {
      background-color: #fff;
      width: 100px;
      height: 100px;
      border: 1px dashed $colorddd;
      border-radius: 3px;

      // margin: 0 20px 20px 0;
      &:hover {
        border-color: $dfcolor;
        color: $dfcolor;

        .el-icon {
          color: $dfcolor;
        }
      }
    }

    :deep(.el-upload-list__item-status-label) {
      display: none;
    }

    .file_name {
      font-size: 12px;
      line-height: 12px;
      margin-top: 12px;
    }

    .el-icon {
      font-size: 28px;
      color: $colorddd;
    }
  }

  .tips {
    color: $color999;
    font-size: 12px;
    line-height: 20px;
    height: 100px;
    display: flex;
    align-items: flex-end;
  }
}

.one_up {
  .tips {
    padding-left: 12px;
  }

  .upbox {
    display: flex;
  }

  :deep(.el-upload-list__item) {
    margin: 0 !important;
  }
}
.alls_up {
  display: block;
  .tips {
    height: auto;
  }
  :deep(.el-upload--picture-card) {
    margin-bottom: 20px;
  }
}
</style>
