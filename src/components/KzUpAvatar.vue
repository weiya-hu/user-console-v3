<template>
  <div class="kz_up_avatar_component">
    <div class="kz_cropper_box">
      <div :style="{ width: boxSize + 'px', height: boxSize + 'px' }">
        <VueCropper
          v-show="showImg"
          ref="cropperRef"
          auto-crop
          fixed-box
          :img="showImg"
          output-type="png"
          :can-move-box="false"
          :info="false"
          :auto-crop-width="boxSize + 'px'"
          :auto-crop-height="boxSize + 'px'"
          mode="contain"
          @real-time="onRealTime"
          @img-load="onImgLoad"
          @crop-moving="onCropMoving"
        />
        <div v-show="!showImg" ref="dragRef" class="no_img_box fc fcc" @click="onIptClick">
          <el-icon size="28px"><Plus /></el-icon>
          <div class="file_name">拖拽/点击上传</div>
        </div>
      </div>
      <div v-show="showImg" class="fsc kz_crop_btns">
        <el-link type="primary" @click="onIptClick">重新上传</el-link>
        <div class="flex">
          <el-icon size="14px" @click="onScaleImg(1)"><CirclePlus /></el-icon>
          <el-icon size="14px" @click="onScaleImg(-1)"><Remove /></el-icon>
          <el-icon size="14px" @click="onRotateImg(1)"><RefreshLeft /></el-icon>
          <el-icon size="14px" @click="onRotateImg(0)"><RefreshRight /></el-icon>
        </div>
      </div>
      <div v-show="!showImg" class="kz_crop_btns">*上传图片大小在4.0M以内</div>
    </div>
    <input
      ref="upInputRef"
      style="display: none"
      type="file"
      :accept="exnameList.join(',')"
      name="picture"
      @change="onChangeImg"
    />
    <div class="fc kz_up_avatar_preview">
      <div
        class="avatar_preview_box"
        :style="{
          'min-width': cropSize + 'px',
          'min-height': cropSize + 'px',
          transform: `scale(calc(${cropSize} / ${boxSize}))`,
        }"
      >
        <div class="avatar_preview" :style="{ width: boxSize + 'px', height: boxSize + 'px' }">
          <el-avatar :size="boxSize">
            <img :src="showImg" :style="previews.img" />
          </el-avatar>
        </div>
      </div>
      <div class="avatar_preview_text" :style="{ top: cropSize + 1 + 'px' }">头像预览</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 头像裁剪上传组件 （图片上传后，不改变、拖动、旋转图片和截图框的情况下，视为没有更改，再次直接调用上传将会直接触发emit事件success）
 * @author chn
 */
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { VueCropper } from 'vue-cropper'
import { errMsg, isObjectValueEqual } from '@/utils/index'
import { getAliToken_api } from '@/api/login'
import axios from 'axios'
import { Plus, CirclePlus, Remove, RefreshLeft, RefreshRight } from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{
    modelValue: string // 图片，支持网络图片、base64、import引入的图片，不支持URL.createObjectURL的地址
    boxSize?: number // 大盒子宽高 强制设定为正方形
    cropSize?: number // 预览头像宽高
    exnameList?: string[] //支持的文件格式数组
    maxSize?: number //最大尺寸 单位M
    site?: string // 上传接口参数
  }>(),
  {
    boxSize: 230,
    cropSize: 100,
    exnameList: () => ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG'],
    maxSize: 4,
    site: 'official_img',
  }
)

const convertImgToBlob = (url: string, callback: Function) => {
  // 非内存URL图片转blob
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const image = new Image()
  image.crossOrigin = 'Anonymous'
  image.onload = function () {
    canvas.height = image.height
    canvas.width = image.width
    ctx!.drawImage(image, 0, 0)
    // canvas.toBlob((blob) => {
    //   callback(blob)
    // })
    const imgBase64 = canvas.toDataURL('image/png')
    callback(imgBase64)
    canvas.remove()
    image.remove()
  }
  image.src = url
}

//可以改为在onMounted 和 上传成功去改showImg
watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue) {
      convertImgToBlob(newValue, (blob: Blob) => {
        // 无法转换的不会触发回调
        showImg.value = URL.createObjectURL(blob)
      })
    }
  }
)

//success 图片上传成功触发；error 图片上传失败触发
const emit = defineEmits(['update:modelValue', 'success', 'error'])

const showImg = ref('')

const cropperRef = ref() // VueCropper Ref

const imgAxis = ref<Record<string, number>>()
const onImgLoad = (isSuccess: string) => {
  // 图片加载事件
  if (isSuccess === 'success') {
    imgAxis.value = cropperRef.value.getImgAxis()
    // cropAxis.value = cropperRef.value.getCropAxis() // 获取到的值不对，是组件内部设置的初始值，和截图框初始显示的位置不一致
  }
}

const previews = ref<Record<string, any>>({})
const onRealTime = (data: Record<string, any>) => {
  // 实时预览事件
  previews.value = data
}
const onScaleImg = (number: 1 | -1) => {
  // 缩放图片
  cropperRef.value.changeScale(number)
}

const onRotateImg = (direction: 0 | 1) => {
  // 旋转图片90度
  direction ? cropperRef.value.rotateLeft() : cropperRef.value.rotateRight()
  isChange.value = true
}

const validate = (): boolean => {
  // 效验图片
  if (!imgFile.value) {
    errMsg('请添加图片！')
    return false
  }
  const exname = imgFile.value.name.substring(imgFile.value.name.lastIndexOf('.'))
  if (props.exnameList.indexOf(exname) === -1) {
    errMsg('图片格式错误！')
    return false
  }
  if (imgFile.value.size && imgFile.value.size / 1024 / 1024 > props.maxSize) {
    errMsg(`图片文件大小不能超过${props.maxSize}M`)
    return false
  }
  return true
}

const validateImg = () => {
  // 效验图片
  if (showImg.value) {
    return true
  }
  return validate()
}

const upInputRef = ref<HTMLInputElement>() // 触发选择图片的input框
const onIptClick = () => {
  upInputRef.value!.click()
}
const imgFile = ref<File>()
const onChangeImg = () => {
  // 上传input change事件
  if (upInputRef.value?.files?.length) {
    imgFile.value = upInputRef.value.files[0]
    const flag = validate()
    if (flag) {
      isChange.value = true
      showImg.value = URL.createObjectURL(imgFile.value)
    } else {
      imgFile.value = undefined
    }
  }
}

const getImg = () => {
  // 获取当前截图框内容，需要显示则用URL.createObjectURL(blob)方法获取本地url
  return new Promise<Blob>((resolve, reject) => {
    cropperRef.value.getCropBlob((blob: Blob) => {
      resolve(blob)
    })
  })
}

const onCropMoving = () => {
  // 截图框移动事件
  isChange.value = true
}

// 是否是网络图片
const httpReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/ // eslint-disable-line

const isChange = ref(false) // 是否改变图片状态
const upload = async () => {
  // 上传
  const newImgAxis = cropperRef.value.getImgAxis()
  const imgflag = isObjectValueEqual(newImgAxis, imgAxis.value) // 对比图片初始位置和现在获取到的位置是否相同，图片是否缩放、移动
  if (!imgFile.value && httpReg.test(props.modelValue) && imgflag && !isChange.value) {
    // 即没有添加图片，是网络图片，没有缩放、移动、旋转图片和截图框
    console.log('不需要上传')
    emit('success')
    return
  }
  const res = await getAliToken_api({ site: props.site })
  if (res.status === 1) {
    // const exname = imgFile.value.name.substring(imgFile.value.name.lastIndexOf('.'))
    const exname = '.png'
    const fd = new FormData()
    const upData: { [propName: string]: string } = {
      key: res.body.dir + '/' + res.body.uuid + exname,
      OSSAccessKeyId: res.body.accessid,
      success_action_status: '200',
      policy: res.body.policy,
      signature: res.body.signature,
    }
    for (const [key, value] of Object.entries(upData)) {
      fd.append(key, value)
    }
    cropperRef.value.getCropBlob(async (blob: Blob) => {
      fd.append('file', blob)
      const response = await axios({
        url: res.body.host,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        data: fd,
      })
      if (response.status == 200) {
        isChange.value = false // 初始化
        imgFile.value = undefined // 初始化
        imgAxis.value = cropperRef.value.getImgAxis() // 更新图片初始位置对象

        const url = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
        emit('update:modelValue', url)
        emit('success')
      } else {
        emit('error')
      }
    })
  } else {
    emit('error')
  }
}

const dragRef = ref<HTMLElement>() // 拖拽容器ref
onMounted(() => {
  dragRef.value?.addEventListener('dragenter', dragEnter, false)
  dragRef.value?.addEventListener('dragover', dragOver, false)
  dragRef.value?.addEventListener('drop', dragImg, false)
})
onBeforeUnmount(() => {
  URL.revokeObjectURL(showImg.value)
  try {
    dragRef.value?.removeEventListener('dragenter', dragEnter)
    dragRef.value?.removeEventListener('dragover', dragOver)
    dragRef.value?.removeEventListener('drop', dragImg)
  } catch (error) {
    return false
  }
})
const dragEnter = (e: DragEvent) => {
  e.stopPropagation()
  e.preventDefault()
}
const dragOver = (e: DragEvent) => {
  e.stopPropagation()
  e.preventDefault()
}
const dragImg = (e: DragEvent) => {
  e.stopPropagation()
  e.preventDefault()
  if (e.dataTransfer?.files.length) {
    imgFile.value = e.dataTransfer.files[0]
    const flag = validate()
    if (flag) {
      isChange.value = true
      showImg.value = URL.createObjectURL(imgFile.value)
    } else {
      imgFile.value = undefined
    }
  }
}

defineExpose({
  validateImg, // 效验图片
  getImg, // 获取当前截图框内容
  upload, // 上传
})
</script>

<style scoped lang="scss">
.kz_up_avatar_component {
  display: flex;
  user-select: none;
  :deep(.cropper-view-box) {
    border-radius: 50%;
  }
  .kz_cropper_box {
    margin-right: 75px;
    .no_img_box {
      height: 100%;
      border-radius: 4px;
      border: 1px dashed #dddddd;
      cursor: pointer;
      color: #606266;
      font-size: 12px;
      .el-icon {
        color: #dddddd;
        margin-bottom: 12px;
      }
      &:hover {
        border-color: $dfcolor;
        color: $dfcolor;
        .el-icon {
          color: $dfcolor;
        }
      }
    }
    .kz_crop_btns {
      margin-top: 8px;
      font-size: 12px;
      line-height: 14px;
      color: #909399;
      .el-link {
        --el-link-font-size: 12px;
      }
      .el-icon {
        cursor: pointer;
        margin-left: 16px;
        &:hover {
          color: $dfcolor;
        }
      }
    }
  }
  .avatar_preview_box {
    overflow: hidden;
    border: 1px dashed #dddddd;
    transform-origin: 0 0;
    .avatar_preview {
      border-radius: 4px;
    }
    .el-avatar {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .kz_up_avatar_preview {
    position: relative;
  }
  .avatar_preview_text {
    position: absolute;
    left: 0;
    text-align: center;
    color: #909399;
    font-size: 12px;
    padding-top: 24px;
    transform: translate(50%, 0);
  }
}
</style>
