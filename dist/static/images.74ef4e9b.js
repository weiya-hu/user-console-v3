var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as o}from"./date.23847c74.js";import{_ as n,V as d,B as r,o as c,e as m,H as v,I as p}from"./index.f91ef24c.js";import{K as f}from"./KzEmpty.a0bcbd2b.js";import{K as y}from"./KzPage.d24cd6e4.js";import{K as b}from"./KzDialog.32a9c724.js";import{i as _,f as h,g,h as w}from"./myWork.a3adf5ba.js";import{H as k,g as j,o as C,I as x,J as V,a as O,w as P,a2 as z,B as I,W as K,_ as E,c as S,a0 as U,av as G,aw as D,a1 as J,b as M,ae as N}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";import"./kzkf.83b11867.js";const q=e=>(G("data-v-b418bd56"),e=e(),D(),e),B={class:"m_images"},F={class:"article_top flexb"},H=q((()=>V("div",null,"图片库",-1))),R=J("新建"),W={class:"dmp_table"},A=["src","onClick"],T={class:"els"},L={class:"fcs"},Q={class:"els"},X={key:0,class:"fcs"},Y=J("修改名称"),Z=q((()=>V("div",{class:"line"},null,-1))),$=J("删除"),ee=q((()=>V("div",{class:"line"},null,-1))),ae=J("驳回原因"),le={key:1,class:"fcs"},te=J("修改名称"),se=q((()=>V("div",{class:"line"},null,-1))),ue=J("删除"),ie=q((()=>V("div",{class:"line"},null,-1))),oe=J("查看"),ne={class:"add_img_content"},de={class:"fc fcc"},re=q((()=>V("div",{class:"file_name"},"点击上传",-1))),ce=q((()=>V("div",{class:"tips"}," 图片尺寸16:9，建议尺寸：220*160≤尺寸≤1920*890；支持JPG、PNG 、JPEG等格式；一次最多上传9张 ",-1))),me={class:"fcs btns fjend"},ve=J("取消"),pe=J("提交"),fe={class:"flex fjend"},ye=J("确定"),be=k((_e=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&i(e,l,a[l]);return e})({},{name:"我的作品库-图片库"}),a(_e,l({setup(e){const a=j(1),l=j(0),t=j(10),s=j([]),u=async()=>{const e=await _({size:t.value,current:a.value});1==e.status&&(s.value=e.body.records,l.value=e.body.total)};u();const i=()=>{u()},n=j([]),k=e=>{n.value=e},G=j(""),D=j(!1),J=e=>{G.value=e,D.value=!0},q=async()=>{1==(await h({id:G.value})).status&&u(),D.value=!1},be=j([]),_e=j(!1),he=j(0),ge=e=>{const a=[];s.value.forEach((e=>{a.push(e.thumb_url)})),be.value=a,he.value=be.value.findIndex((a=>a==e)),_e.value=!0},we=j(!1),ke=j(""),je=j(!1),Ce=j(!1),xe=j([]),Ve=j();let Oe=[];const Pe=()=>{Ve.value.clearFiles(),je.value=!1,Ce.value=!1,xe.value=[],be.value=[],_e.value=!1,he.value=0,Oe=[]},ze=async e=>{const a=await v({site:"cms_image"});if(1==a.status){const l=e.name.substring(e.name.lastIndexOf(".")),t=e.name.substring(0,e.name.indexOf(".")),s=new FormData,u={key:a.body.dir+"/"+a.body.uuid+l,OSSAccessKeyId:a.body.accessid,success_action_status:200,policy:a.body.policy,signature:a.body.signature};for(const[e,a]of Object.entries(u))s.append(e,a);if(s.append("file",e.raw),200==(await p({url:a.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:s})).status){const e=a.body.host+"/"+a.body.dir+"/"+a.body.uuid+l;if(Oe.push(e),1==(await w({thumb_url:e,source_name:t.slice(0,30)})).status)return Promise.resolve(e)}return Promise.reject(e.name+"上传失败")}return Promise.reject("获取上传配置失败")},Ie=async()=>{Ce.value=!0;try{for(let e=0;e<xe.value.length;e++){const a=xe.value[e];if(await ze(a).catch((e=>{throw new Error(e)})),Oe.length==xe.value.length){c("上传成功"),Pe(),u();break}}}catch(e){m(e,0),Pe(),u()}},Ke=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],Ee=(e,a)=>{const l=e.name.substring(e.name.lastIndexOf("."));return-1==Ke.indexOf(l)?(Ve.value.handleRemove(e),void m("图片格式错误！")):e.size&&e.size/1024/1024>10?(Ve.value.handleRemove(e),void m("图片文件大小不能超过10M")):(xe.value=a,void(xe.value.length>=9&&(document.querySelector(".el-upload--picture-card").style.display="none")))},Se=(e,a)=>{xe.value=a,document.querySelector(".el-upload--picture-card").style.display="inline-flex"},Ue=e=>{const a=[];xe.value.forEach((e=>{a.push(e.url)})),be.value=a,he.value=be.value.findIndex((a=>a==e.url)),_e.value=!0},Ge=j(!1),De=j(""),Je=j(""),Me=(e,a)=>{De.value=e,Je.value=a,Ge.value=!0},Ne=async()=>{const{status:e}=await g({id:De.value,source_name:Je.value});1==e&&(Ge.value=!1,u())};return(e,u)=>{const n=M("KzIconVue"),c=M("el-button"),m=M("el-table-column"),v=M("el-link"),p=M("el-table"),_=M("el-icon"),h=M("el-upload"),g=M("el-dialog"),w=M("el-input"),j=M("el-form-item"),G=M("el-form"),Oe=M("el-image-viewer"),ze=N("loading");return C(),x("div",B,[V("div",F,[H,V("div",null,[O(c,{type:"primary",class:"add_need_btn",onClick:u[0]||(u[0]=e=>je.value=!0)},{default:P((()=>[O(n,{href:"#icon-tianjia",size:"14px",color:"white",class:"add_need_icon"}),R])),_:1})])]),V("div",W,[O(p,{data:s.value,style:{width:"100%"},onSelectionChange:k},{empty:P((()=>[O(f)])),default:P((()=>[O(m,{type:"selection",width:"50"}),O(m,{property:"id",label:"ID","min-width":"150"}),O(m,{property:"thumb_url",label:"图片","min-width":"150"},{default:P((({row:e})=>[V("img",{src:e.thumb_url,alt:"",class:"firstimg lookhover",onClick:a=>ge(e.thumb_url)},null,8,A)])),_:1}),O(m,{property:"source_name",label:"图片名","min-width":"150"},{default:P((({row:e})=>[V("div",T,z(e.source_name),1)])),_:1}),O(m,{property:"create_time",label:"创建日期","min-width":"150"},{default:P((({row:e})=>[V("div",null,z(I(o)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),O(m,{property:"status",label:"状态","min-width":"120"},{default:P((({row:e})=>[V("div",L,[V("div",{class:K(["status_dot",I(d)(e.status).className])},null,2),V("div",null,z(I(d)(e.status).text),1)])])),_:1}),O(m,{property:"user_name",label:"创作人","min-width":"120"},{default:P((({row:e})=>[V("div",Q,z(e.user_name),1)])),_:1}),O(m,{label:"操作",fixed:"right",width:"240"},{default:P((({row:e})=>[4==e.status?(C(),x("div",X,[O(v,{type:"primary",onClick:a=>Me(e.id,e.source_name)},{default:P((()=>[Y])),_:2},1032,["onClick"]),Z,O(v,{type:"primary",onClick:a=>J(e.id)},{default:P((()=>[$])),_:2},1032,["onClick"]),ee,O(v,{type:"primary",onClick:()=>{ke.value=e.fail_reason,we.value=!0}},{default:P((()=>[ae])),_:2},1032,["onClick"])])):(C(),x("div",le,[O(v,{type:"primary",onClick:a=>Me(e.id,e.source_name)},{default:P((()=>[te])),_:2},1032,["onClick"]),se,O(v,{type:"primary",onClick:a=>J(e.id)},{default:P((()=>[ue])),_:2},1032,["onClick"]),ie,O(v,{type:"primary",onClick:a=>ge(e.thumb_url)},{default:P((()=>[oe])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),O(y,{page:a.value,"onUpdate:page":u[1]||(u[1]=e=>a.value=e),size:t.value,"onUpdate:size":u[2]||(u[2]=e=>t.value=e),total:l.value,onChange:i},null,8,["page","size","total"]),O(b,{modelValue:D.value,"onUpdate:modelValue":u[3]||(u[3]=e=>D.value=e),msg:"确认删除这条数据吗?",onSure:q},null,8,["modelValue"]),O(b,{modelValue:we.value,"onUpdate:modelValue":u[4]||(u[4]=e=>we.value=e),msg:ke.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"]),O(g,{modelValue:je.value,"onUpdate:modelValue":u[5]||(u[5]=e=>je.value=e),title:"上传图片",width:"400px","custom-class":"upimgs",onClose:Pe},{default:P((()=>[E((C(),x("div",ne,[O(h,{ref_key:"upload",ref:Ve,action:"#","auto-upload":!1,limit:9,multiple:!0,"list-type":"picture-card","on-change":Ee,"on-preview":Ue,"on-remove":Se,accept:Ke.join(","),class:"upbox"},{default:P((()=>[V("div",de,[O(_,null,{default:P((()=>[O(I(r))])),_:1}),re])])),_:1},8,["accept"]),ce,V("div",me,[O(c,{onClick:Pe},{default:P((()=>[ve])),_:1}),O(c,{type:"primary",disabled:!xe.value.length,onClick:Ie},{default:P((()=>[pe])),_:1},8,["disabled"])])])),[[ze,Ce.value]])])),_:1},8,["modelValue"]),O(g,{modelValue:Ge.value,"onUpdate:modelValue":u[7]||(u[7]=e=>Ge.value=e),title:"修改名称",width:"380px"},{default:P((()=>[O(G,null,{default:P((()=>[O(j,{label:"输入名称"},{default:P((()=>[O(w,{modelValue:Je.value,"onUpdate:modelValue":u[6]||(u[6]=e=>Je.value=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1})])),_:1}),V("div",fe,[O(c,{type:"primary",disabled:!Je.value,onClick:Ne},{default:P((()=>[ye])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),_e.value?(C(),S(Oe,{key:0,"url-list":be.value,"initial-index":he.value,onClose:u[8]||(u[8]=e=>_e.value=!1)},null,8,["url-list","initial-index"])):U("",!0)])}}}))));var _e,he=n(be,[["__scopeId","data-v-b418bd56"]]);export{he as default};
