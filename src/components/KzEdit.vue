<template>
  <Editor id="tinymce" v-model="editvalue" :init="init"> </Editor>
</template>

<script lang="ts" setup>
/**
 * 富文本编辑器组件
 * @author chn
 */
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme' //编辑器主题
import 'tinymce/icons/default' //引入编辑器图标icon
import 'tinymce/models/dom'
import 'tinymce/plugins/link' //超链接
import 'tinymce/plugins/image' //插入编辑图片
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/charmap' //特殊字符
// import 'tinymce/plugins/media' //插入编辑媒体
// import 'tinymce/plugins/wordcount' // 字数统计
import 'tinymce/plugins/table'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/preview'
import { ref, onUpdated, watch, computed } from 'vue'
import { getAliToken_api } from '@/api/index'
import axios from 'axios'
const props = withDefaults(
  defineProps<{
    modelValue: string //富文本的值
    max?: number //图片最大尺寸 单位M
  }>(),
  {
    modelValue: '',
    max: 2,
  }
)

interface imgsObj {
  blobUrl: string //图片blob地址
  fileObj: any // 图片File/Blob对象
  fileName: string // 图片文件名
}
interface IblobInfo {
  base64: Function
  blob: Function
  blobUri: Function
  filename: Function
  id: Function
  name: Function
  uri: Function
}
const contentImgs = ref<imgsObj[]>([]) // 内容图片对象数组 blobUrl  fileObj 图片File/Blob对象

const upload = (blobInfo: IblobInfo, progress: number | string) => {
  return new Promise<string>((resolve, reject) => {
    const imgBlob = blobInfo.blob()
    if (imgBlob) {
      if (imgBlob.size / 1024 / 1024 > props.max) {
        reject(`图片最大不能超过${props.max}M`)
        return
      }
      const imgBlobUrl = URL.createObjectURL(imgBlob) // 创建URL对象，会在浏览器关闭当前页面时销毁，也可以调用URL.revokeObjectURL()销毁
      contentImgs.value.push({
        // 先添加进一个数组，上传时findIndex寻找是否在数组中，这里tinymce有个机制是，只要添加了图片没有点保存也会触发upload函数，会导致contentImgs数组长度和真实内容图片数量不一致，会有一些多余的图片
        blobUrl: imgBlobUrl,
        fileObj: imgBlob,
        fileName: blobInfo.filename(),
      })
      resolve(imgBlobUrl) // 先用本地图片当做内容图片，用户提交时再调用upImages上传并替换img标签的src为线上地址
      return
    }
    reject('获取图片失败，请重新添加图片')
  })
}

// window.tinymce.baseURL = `${window.location.origin}/public/tinymce`;
;(window as any).tinymce.baseURL = '/tinymce'

const init = {
  selector: '#tinymce',
  height: 500,
  width: '100%',
  language_url: '/tinymce/langs/zh_CN.js', //汉化路径是自定义的，一般放在public或static里面
  language: 'zh_CN',
  skin_url: '/tinymce/skins/ui/oxide', //皮肤
  plugins: 'advlist autolink link image lists charmap table fullscreen preview', //插件
  // plugins: 'preview searchreplace autolink directionality visualblocks visualchars fullscreen image link template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  textpattern help emoticons autosave autoresize ',
  menubar: false, //最顶部菜单
  //工具栏
  // toolbar: 'fontselect | undo redo |  formatselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent lists image | fullscreen | preview',
  toolbar:
    '| styleselect | fontsizeselect | forecolor backcolor bold italic underline strikethrough link image | code undo redo restoredraft | fontselect | cut copy paste pastetext | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat | table media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight axupimgs',
  fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px', //字体大小
  font_formats:
    "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
  placeholder: '请输入文章内容',
  statusbar: false, // 底部的状态栏
  images_upload_handler: upload,
  // image_title: true,
  // automatic_uploads: true, // 自动上传
  // file_picker_types: 'image',
  // file_picker_callback: (cb:Function, value:any, meta:any) => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.addEventListener('change', (e) => {
  //     const file = (e.target as any).files[0];
  //     const reader = new FileReader();
  //     reader.addEventListener('load', () => {
  //       const id = 'blobid' + (new Date()).getTime();
  //       const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
  //       const base64 = (reader.result as any).split(',')[1];
  //       const blobInfo = blobCache.create(id, file, base64);
  //       blobCache.add(blobInfo);
  //       cb(blobInfo.blobUri(), { title: file.name });
  //     });
  //     reader.readAsDataURL(file);
  //   });
  //   input.click();
  //   input.remove()
  // },
}
tinymce.init({})

const emit = defineEmits(['update:modelValue'])

// const editvalue = ref('') // 打包到线上绑定值会失效 所以用了这个蠢办法
// onUpdated(() => {
//   editvalue.value = props.modelValue
// })
// watch(editvalue, (newValue) => {
//   emit('update:modelValue', newValue)
// })

const editvalue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const upImages = async () => {
  // const content = props.modelValue
  const content = editvalue.value
  const imgReg = /<img [^>]*src=['"]blob:([^'"]+)[^>]*>/gi
  const srcReg = /src=[\'\"]?(blob:[^\'\"]*)[\'\"]?/gi // eslint-disable-line
  const imgArr = content.match(imgReg)
  let t = content
  if (imgArr) {
    let i = 0
    const upFn = async (imgItem: string) => {
      let url = 'scr=""'
      let oneImgBlobUrl = ''
      imgItem.replace(srcReg, function (match: string, capture: any) {
        //match匹配的子串 capture 代表第n个括号匹配的字符串 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        oneImgBlobUrl = capture
        return match
      })
      const j = contentImgs.value.findIndex((v) => v.blobUrl == oneImgBlobUrl)
      if (j > -1) {
        const res = await getAliToken_api({ site: 'official_img' })
        if (res.status == 1) {
          const fileObj = contentImgs.value[j]
          const exname = fileObj.fileName.substring(fileObj.fileName.lastIndexOf('.'))
          const fd = new FormData()
          const upData = {
            key: res.body.dir + '/' + res.body.uuid + exname,
            OSSAccessKeyId: res.body.accessid,
            success_action_status: '200',
            policy: res.body.policy,
            signature: res.body.signature,
          }
          for (const [key, value] of Object.entries(upData)) {
            fd.append(key, value)
          }
          fd.append('file', fileObj.fileObj)
          const response = await axios({
            url: res.body.host,
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data;',
            },
            data: fd,
          })
          if (response.status == 200) {
            url = 'src="' + res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname + '"'
          }
        }
      }
      const newImg = imgItem.replace(srcReg, url) // 替换当前blob地址为上传后地址
      t = t.replace(imgItem, newImg) // 整个内容中替换当前这张图片

      if (i < imgArr.length - 1) {
        i++
        if (imgArr[i]) {
          await upFn(imgArr[i])
        }
      }
    }
    if (imgArr[i]) {
      await upFn(imgArr[i])
    }
    // emit('update:modelValue',t)
    editvalue.value = t
  }
}

const clearImgs = () => {
  contentImgs.value.forEach((v) => {
    URL.revokeObjectURL(v.blobUrl)
  })
}

defineExpose({
  clearImgs, // 清除contentImgs
  upImages, // 上传图片并替换图片blob地址为上传后的地址，然后更新整个内容
})
</script>
