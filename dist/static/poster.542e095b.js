var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{f as o}from"./date.23847c74.js";import{K as d}from"./KzEmpty.a0bcbd2b.js";import{K as n}from"./KzPage.d24cd6e4.js";import{K as r}from"./KzDialog.32a9c724.js";import{K as c}from"./KzImgUpload.aed285a6.js";import{_ as m,V as v,o as p,e as f}from"./index.f91ef24c.js";import{p as y,j as _,k as b,l as g}from"./myWork.a3adf5ba.js";import{H as k,g as w,o as h,I as j,J as C,a as x,w as V,a2 as z,B as O,W as K,_ as P,c as U,a0 as I,av as E,aw as D,a1 as S,b as G,ae as J}from"./vue.fa004e33.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const M=e=>(E("data-v-61f8bc5d"),e=e(),D(),e),N={class:"m_poster"},W={class:"article_top flexb"},B=M((()=>C("div",null,"海报库",-1))),H=S("新建"),L={class:"dmp_table"},q=["src","onClick"],A={class:"els"},F={class:"fcs"},Q={class:"els"},R={key:0,class:"fcs"},T=S("修改名称"),X=M((()=>C("div",{class:"line"},null,-1))),Y=S("删除"),Z=M((()=>C("div",{class:"line"},null,-1))),$=S("拒绝原因"),ee={key:1,class:"fcs"},ae=S("修改名称"),le=M((()=>C("div",{class:"line"},null,-1))),te=S("删除"),se=M((()=>C("div",{class:"line"},null,-1))),ue=S("查看"),ie={class:"add_img_content"},oe={class:"fcs btns fjend"},de=S("取消"),ne=S("提交"),re={class:"flex fjend"},ce=S("确定"),me=k((ve=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))u.call(a,l)&&i(e,l,a[l]);return e})({},{name:"我的作品库-海报库"}),a(ve,l({setup(e){const a=w(1),l=w(0),t=w(10),s=w(),u=w([]),i=async()=>{const e=await y({size:t.value,current:a.value});1==e.status&&(u.value=e.body.records,l.value=e.body.total)};i();const m=()=>{i()},k=w([]),E=e=>{k.value=e},D=w(""),S=w(!1),M=e=>{D.value=e,S.value=!0},me=async()=>{1==(await _({id:D.value})).status&&i(),S.value=!1},ve=w([]),pe=w(!1),fe=w(0),ye=e=>{const a=[];u.value.forEach((e=>{a.push(e.thumb_url)})),ve.value=a,fe.value=ve.value.findIndex((a=>a==e)),pe.value=!0},_e=w(!1),be=w(""),ge=w(!1),ke=w(!1),we=[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"],he=w(),je=()=>{ke.value=!1,ge.value=!1,pe.value=!1,ve.value=[],fe.value=0},Ce=()=>{he.value.submit()},xe=w(0),Ve=async(e,a)=>{1==(await b({thumb_url:e,source_name:s.value})).status&&xe.value++,xe.value===a&&ze()},ze=()=>{p("上传成功"),xe.value=0,je(),i()},Oe=e=>{f(e,0),je(),i()},Ke=(e,a)=>{ve.value=e,fe.value=a,pe.value=!0},Pe=w(!1),Ue=w(""),Ie=w(""),Ee=(e,a)=>{Ue.value=e,Ie.value=a,Pe.value=!0},De=async()=>{const{status:e}=await g({id:Ue.value,source_name:Ie.value});1==e&&(Pe.value=!1,i())};return(e,i)=>{const p=G("KzIconVue"),f=G("el-button"),y=G("el-table-column"),_=G("el-link"),b=G("el-table"),g=G("el-dialog"),k=G("el-input"),w=G("el-form-item"),D=G("el-form"),xe=G("el-image-viewer"),ze=J("loading");return h(),j("div",N,[C("div",W,[B,C("div",null,[x(f,{type:"primary",class:"add_need_btn",onClick:i[0]||(i[0]=e=>ge.value=!0)},{default:V((()=>[x(p,{href:"#icon-tianjia",size:"14px",color:"white",class:"add_need_icon"}),H])),_:1})])]),C("div",L,[x(b,{data:u.value,style:{width:"100%"},onSelectionChange:E},{empty:V((()=>[x(d)])),default:V((()=>[x(y,{type:"selection",width:"50"}),x(y,{property:"id",label:"ID","min-width":"120"}),x(y,{property:"thumb_url",label:"海报","min-width":"100"},{default:V((({row:e})=>[C("img",{src:e.thumb_url,alt:"",class:"firstimg lookhover",onClick:a=>ye(e.thumb_url)},null,8,q)])),_:1}),x(y,{property:"source_name",label:"海报名","min-width":"160"},{default:V((({row:e})=>[C("div",A,z(e.source_name),1)])),_:1}),x(y,{property:"create_time",label:"创建日期","min-width":"110"},{default:V((({row:e})=>[C("div",null,z(O(o)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),x(y,{property:"status",label:"状态","min-width":"100"},{default:V((({row:e})=>[C("div",F,[C("div",{class:K(["status_dot",O(v)(e.status).className])},null,2),C("div",null,z(O(v)(e.status).text),1)])])),_:1}),x(y,{property:"user_name",label:"创作人","min-width":"120"},{default:V((({row:e})=>[C("div",Q,z(e.user_name),1)])),_:1}),x(y,{label:"操作",fixed:"right",width:"240"},{default:V((({row:e})=>[4==e.status?(h(),j("div",R,[x(_,{type:"primary",onClick:a=>Ee(e.id,e.source_name)},{default:V((()=>[T])),_:2},1032,["onClick"]),X,x(_,{type:"primary",onClick:a=>M(e.id)},{default:V((()=>[Y])),_:2},1032,["onClick"]),Z,x(_,{type:"primary",onClick:()=>{be.value=e.fail_reason,_e.value=!0}},{default:V((()=>[$])),_:2},1032,["onClick"])])):(h(),j("div",ee,[x(_,{type:"primary",onClick:a=>Ee(e.id,e.source_name)},{default:V((()=>[ae])),_:2},1032,["onClick"]),le,x(_,{type:"primary",onClick:a=>M(e.id)},{default:V((()=>[te])),_:2},1032,["onClick"]),se,x(_,{type:"primary",onClick:a=>ye(e.thumb_url)},{default:V((()=>[ue])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])]),x(n,{page:a.value,"onUpdate:page":i[1]||(i[1]=e=>a.value=e),size:t.value,"onUpdate:size":i[2]||(i[2]=e=>t.value=e),total:l.value,onChange:m},null,8,["page","size","total"]),x(r,{modelValue:S.value,"onUpdate:modelValue":i[3]||(i[3]=e=>S.value=e),msg:"确认删除这条数据吗?",onSure:me},null,8,["modelValue"]),x(r,{modelValue:_e.value,"onUpdate:modelValue":i[4]||(i[4]=e=>_e.value=e),msg:be.value,title:"拒绝原因",btn:1},null,8,["modelValue","msg"]),x(g,{modelValue:ge.value,"onUpdate:modelValue":i[6]||(i[6]=e=>ge.value=e),title:"上传海报",width:"400px","custom-class":"upimgs",onClose:je},{default:V((()=>[P((h(),j("div",ie,[ge.value?(h(),U(c,{key:0,ref_key:"upload",ref:he,max:1,site:"cms_image","exname-list":we,msg:"宽高比：16:9，建议尺寸：640x1136px、800*2000px、1242px*1242px，支持"+we.join("、")+"等图片格式",onUpOneSuccess:Ve,onError:Oe,onLook:Ke,onChange:i[5]||(i[5]=e=>s.value=e)},null,8,["msg"])):I("",!0),C("div",oe,[x(f,{onClick:je},{default:V((()=>[de])),_:1}),he.value?(h(),U(f,{key:0,type:"primary",disabled:!he.value.imgs.length,onClick:Ce},{default:V((()=>[ne])),_:1},8,["disabled"])):I("",!0)])])),[[ze,ke.value]])])),_:1},8,["modelValue"]),x(g,{modelValue:Pe.value,"onUpdate:modelValue":i[8]||(i[8]=e=>Pe.value=e),title:"修改名称",width:"380px"},{default:V((()=>[x(D,null,{default:V((()=>[x(w,{label:"输入名称"},{default:V((()=>[x(k,{modelValue:Ie.value,"onUpdate:modelValue":i[7]||(i[7]=e=>Ie.value=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1})])),_:1}),C("div",re,[x(f,{type:"primary",disabled:!Ie.value,onClick:De},{default:V((()=>[ce])),_:1},8,["disabled"])])])),_:1},8,["modelValue"]),pe.value?(h(),U(xe,{key:0,"url-list":ve.value,"initial-index":fe.value,onClose:i[9]||(i[9]=e=>pe.value=!1)},null,8,["url-list","initial-index"])):I("",!0)])}}}))));var ve,pe=m(me,[["__scopeId","data-v-61f8bc5d"]]);export{pe as default};
