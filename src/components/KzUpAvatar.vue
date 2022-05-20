<template>
  <div class="kz_up_avatar_component">
    <div class="kz_cropper_box">
      <div :style="{ 'width': boxSize + 'px', 'height': boxSize + 'px' }">
        <VueCropper 
          ref="cropperRef"
          autoCrop
          fixedBox
          :img="showImg"
          outputType="png"
          @realTime="onRealTime"
          @imgLoad="onImgLoad"
          @cropMoving="onCropMoving"
          :autoCropWidth="cropSize + 'px'"
          :autoCropHeight="cropSize + 'px'"
          mode="contain"
          v-show="showImg"
        />
        <div class="no_img_box fc fcc" v-show="!showImg" @click="onIptClick" ref="dragRef">
          <el-icon size="28px"><Plus /></el-icon>
          <div class="file_name">拖拽/点击上传</div>
        </div>
      </div>
      <div class="fsc kz_crop_btns" v-show="showImg">
        <el-link type="primary" @click="onIptClick">重新上传</el-link>
        <div>
          <KzIcon size="14px" href="#icon-suoxiao" @click="onScaleImg(-1)"/>
          <KzIcon size="14px" href="#icon-fangda" @click="onScaleImg(1)"/>
        </div>
      </div>
      <div class="kz_crop_btns" v-show="!showImg">*上传图片大小在4.0M以内</div>
    </div>
    <input style="display:none" type="file" accept="image/*" name="picture" ref="upInputRef" @change="onChangeImg"/>
    <div class="fc">
      <div class="avatar_preview_box" :style="{ 'min-width': cropSize + 'px', 'min-height': cropSize + 'px' }">
        <div class="avatar_preview" :style="previews.div">
          <el-avatar :size="cropSize">
            <img :src="showImg" :style="previews.img">
          </el-avatar>
        </div>
      </div>
      <div class="avatar_preview_text">头像预览</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 头像裁剪上传组件 （图片上传后，不改变拖动图片、截图框的情况下，视为没有更改，再次直接调用上传将会直接触发emit事件success）
 * @author chn
 */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { VueCropper }  from "vue-cropper";
import { Plus } from '@element-plus/icons-vue'
import { errMsg, isObjectValueEqual } from '@/utils/index'
import { getAliToken_api } from '@/api/login'
import axios from 'axios'

const props = withDefaults(
  defineProps<{
    modelValue: string // 图片
    boxSize?: number // 大盒子宽高 强制设定为正方形
    cropSize?: number // 截图框宽高 和 预览头像宽高
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

//success 图片上传成功触发；error 图片上传失败触发
const emit = defineEmits(['update:modelValue', 'success', 'error'])

const showImg = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const cropperRef = ref() // VueCropper Ref

const imgAxis = ref<Record<string, number>>()
const cropAxis = ref<Record<string, number>>()
const onImgLoad = (isSuccess: string) => {
  // 图片加载事件
  if(isSuccess === 'success'){
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

const validateImg = ():boolean => {
  // 效验图片
  if(!imgFile.value){
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

const upInputRef = ref<HTMLInputElement>() // 触发选择图片的input框
const onIptClick= () => {
  upInputRef.value!.click()
}
const imgFile = ref<File>()
const onChangeImg = () => {
  // 上传input change事件
  if(upInputRef.value?.files?.length){
    imgFile.value = upInputRef.value.files[0]
    const flag = validateImg()
    if(flag){
      isChange.value = true
      emit('update:modelValue', URL.createObjectURL(imgFile.value))
    }else {
      imgFile.value = undefined
    }
  }
}

const getImg = () => {
  // 获取当前截图框内容并更新modelValue
  cropperRef.value.getCropBlob((blob:Blob) => {
    emit('update:modelValue', URL.createObjectURL(blob))
  })
}

const onCropMoving = () => {
  isChange.value = true
}

const isChange = ref(false) // 是否改变图标状态
const upload = async () => {
  // 上传
  if(!imgFile.value){
    props.modelValue && emit('success')
    return
  }
  const newImgAxis = cropperRef.value.getImgAxis()
  const imgflag = isObjectValueEqual(newImgAxis, imgAxis.value)
  if(props.modelValue && imgflag && !isChange.value){
    // 即没有移动、缩放图片和截图框
    console.log('不需要上传');
    emit('success')
    return
  }
  const res: IRes = await getAliToken_api({ site: props.site })
  if (res.status == 1) {
    const exname = imgFile.value.name.substring(imgFile.value.name.lastIndexOf('.'))
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
    cropperRef.value.getCropBlob(async (blob:Blob) => {
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
        const url = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
        emit('update:modelValue', url)
        isChange.value = false
        emit('success')
      }else{
        emit('error')
      }
    })
  }else{
    emit('error')
  }
}

const dragRef = ref<HTMLElement>() // 拖拽容器ref
onMounted(() => {
  dragRef.value?.addEventListener("dragenter", dragEnter, false);
  dragRef.value?.addEventListener("dragover", dragOver, false);
  dragRef.value?.addEventListener("drop", dragImg, false);
  
})
onBeforeUnmount(() => {
  try {
    dragRef.value?.removeEventListener("dragenter", dragEnter);
    dragRef.value?.removeEventListener("dragover", dragOver);
    dragRef.value?.removeEventListener("drop", dragImg);
  } catch (error) {
    return
  }
})
const dragEnter = (e:DragEvent) => {
  e.stopPropagation();
	e.preventDefault();
}
const dragOver = (e:DragEvent) => {
  e.stopPropagation();
	e.preventDefault();
}
const dragImg = (e:DragEvent) => {
  e.stopPropagation();
  e.preventDefault();
  if(e.dataTransfer?.files.length){
    imgFile.value = e.dataTransfer.files[0]
    const flag = validateImg()
    if(flag){
      isChange.value = true
      emit('update:modelValue', URL.createObjectURL(imgFile.value))
    }else {
      imgFile.value = undefined
    }
  }
}

defineExpose({
  validateImg, // 效验图片
  getImg, // 获取当前截图框内容并更新modelValue
  upload // 上传
})
</script>

<style scoped lang="scss">
.kz_up_avatar_component{
  display: flex;
  .kz_cropper_box{
    margin-right: 75px;
    .no_img_box{
      height: 100%;
      border-radius: 4px;
      border: 1px dashed #DDDDDD;
      cursor: pointer;
      color: #606266;
      font-size: 12px;
      .el-icon{
        color: #DDDDDD;
        margin-bottom: 12px;
      }
      &:hover{
        border-color: $dfcolor;
        color: $dfcolor;
        .el-icon{
          color: $dfcolor;
        }
      }
    }
    .kz_crop_btns{
      margin-top: 8px;
      font-size: 12px;
      line-height: 14px;
      color: #909399;
      .el-link{
        --el-link-font-size: 12px;
      }
      .kzicon{
        margin-left: 16px;
        cursor: pointer;
      }
    }
  }
  .avatar_preview_box{
    overflow: hidden;
    .avatar_preview{
      border-radius: 4px;
      border: 1px dashed #DDDDDD;
    }
    .el-avatar{
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .avatar_preview_text{
    text-align: center;
    color: #909399;
    font-size: 12px;
    margin-top: 24px;
  }
}
</style>
