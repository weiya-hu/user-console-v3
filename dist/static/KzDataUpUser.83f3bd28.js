import{K as e}from"./KzUpload.2bb38088.js";import{_ as a,C as l,e as s}from"./index.fde176ed.js";import{a as r}from"./myData.5e61016f.js";import{H as u,u as t,ay as o,j as d,g as p,C as n,r as m,ad as i,o as c,I as v,a as g,w as f,J as b,$ as h,c as V,B as x,k as y,av as _,aw as w,a2 as F}from"./vue.a499711c.js";const U={class:"upload-users"},k=(e=>(_("data-v-1c4eca75"),e=e(),w(),e))((()=>b("div",{class:"up-user-title"},"上传客户",-1))),D={class:"dialog-footer"},q=F("取消"),j=F("上传");var C=a(u({name:"KzDataUpUser",props:{modelValue:{type:Boolean}},emits:["update:modelValue","submitSuccess"],setup(a,{emit:u}){const _=a,w=t({get:()=>_.modelValue,set:e=>{u("update:modelValue",e)}}),F=o(),C=d({personsName:[{required:!0,message:"请输入人群名称",trigger:"change"},{required:!0,message:"请输入人群名称",trigger:"blur"}],personsDesc:[{required:!0,message:"请输入人群描述",trigger:"change"},{required:!0,message:"请输入人群描述",trigger:"blur"}],updateFile:[{required:!0,message:"请添加文件",trigger:"blur"},{validator:(e,a,l)=>{switch(N.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]}),N=p("none"),E=p(),K=p(),z=p({personsName:"",personsDesc:"",updateFile:""}),L=p(!1),M=p("");n((()=>{const e="/product/dmp/mydata/up2b"===F.path?"/dmp/source/template/download.do?type=1":"/dmp/source/template/download.do?type=2";l({url:e,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8",MODULE:"dmp"},responseType:"blob"}).then((e=>{M.value=URL.createObjectURL(e.data)}))}));const R=()=>{u("update:modelValue",!1)},S=()=>{E.value.validate((e=>{if(!e)return!1;L.value=!0,K.value.submit()}))},T=e=>{e?(N.value=e,z.value.updateFile="",E.value.validateField("file",(()=>null))):(N.value="",E.value.clearValidate("updateFile"))},B=e=>{z.value.updateFile="",N.value="none",K.value.clear(),L.value=!1,s("上传失败")},I=e=>{L.value=!1,r({attachment:e,group_desc:z.value.personsDesc,group_name:z.value.personsName,type:"/product/dmp/mydata/up2b"===F.path?1:2}).then((e=>{e.status?(R(),E.value.resetFields(),u("submitSuccess",1)):(z.value.updateFile="",N.value="none",K.value.clear()),L.value=!1})).catch((()=>{B()}))};return(a,l)=>{const s=m("el-input"),r=m("el-form-item"),u=m("el-form"),t=m("el-button"),o=m("el-dialog"),d=i("loading");return c(),v("div",U,[g(o,{modelValue:x(w),"onUpdate:modelValue":l[3]||(l[3]=e=>y(w)?w.value=e:null),width:500,draggable:"",onClose:R},{title:f((()=>[k])),footer:f((()=>[b("span",D,[g(t,{onClick:R},{default:f((()=>[q])),_:1}),g(t,{type:"primary",onClick:S},{default:f((()=>[j])),_:1})])])),default:f((()=>[b("div",null,[h((c(),V(u,{ref_key:"formRef",ref:E,model:z.value,rules:C},{default:f((()=>[g(r,{label:"人群名称",required:"",prop:"personsName"},{default:f((()=>[g(s,{modelValue:z.value.personsName,"onUpdate:modelValue":l[0]||(l[0]=e=>z.value.personsName=e),placeholder:"请输入人群名称",clearable:""},null,8,["modelValue"])])),_:1}),g(r,{label:"人群描述",required:"",prop:"personsDesc"},{default:f((()=>[g(s,{modelValue:z.value.personsDesc,"onUpdate:modelValue":l[1]||(l[1]=e=>z.value.personsDesc=e),type:"textarea",maxlength:"150","show-word-limit":"",class:"input-textarea",placeholder:"请对人群进行简单的描述"},null,8,["modelValue"])])),_:1}),g(r,{label:"文件上传",prop:"updateFile",required:""},{default:f((()=>[g(e,{ref_key:"upload",ref:K,modelValue:z.value.updateFile,"onUpdate:modelValue":l[2]||(l[2]=e=>z.value.updateFile=e),site:"dmp_excel","down-link":M.value,"exname-list":[".doc",".docx",".pdf",".xls",".xlsx"],msg:"数据文件大小不超过2M",onChange:T,onError:B,onSuccess:I},null,8,["modelValue","down-link","exname-list"])])),_:1})])),_:1},8,["model","rules"])),[[d,L.value]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-1c4eca75"]]);export{C as K};
