var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{K as s}from"./KzEmpty.3a93c72b.js";import{f as u}from"./date.23847c74.js";import{K as i}from"./KzDialog.19385062.js";import{H as p,u as n,g as c,ax as m,b as v,o as f,I as y,a as b,w,J as _,W as h,B as g,a2 as V,c as k,a0 as C,a1 as j,av as x,aw as O,j as K,ae as U,_ as E,k as z}from"./vue.fa004e33.js";import{_ as P,m as S,R as B,O as D,P as F,Q as I,e as q,E as M}from"./index.90bf26d2.js";import{_ as H}from"./KzCascader.e90aac0b.js";import{K as N}from"./KzUpload.8b77f043.js";const R=e=>(x("data-v-65ef7699"),e=e(),O(),e),T={class:"dmp_table people_table"},A={class:"fcs"},J={key:0,class:"fcs"},Q=j("下载附件"),W={key:1,class:"line"},G=j("删除"),L={key:1,class:"fcs"},X={key:2,class:"fcs"},Y=j("拒绝原因"),Z=R((()=>_("div",{class:"line"},null,-1))),$=j("删除"),ee={key:3,class:"fcs"},ae=j("查看"),le=R((()=>_("div",{class:"line"},null,-1))),te=j("删除"),re={class:"fcc msg"},oe={class:"fcc"},de=j("我知道了");var se=P(p({props:{data:Array,details:String},emits:["select","del"],setup(e,{emit:a}){const l=e,t=S(),r=n((()=>t.state.addressHash)),o=e=>{a("select",e)},d=c(!1),p=c(""),j=c(""),x=c(!1),O=e=>{j.value=e,x.value=!0},K=()=>{a("del",j.value),x.value=!1},U=m();return(a,t)=>{const n=v("el-table-column"),c=v("el-link"),m=v("el-table"),j=v("el-button"),E=v("el-dialog");return f(),y("div",T,[b(m,{data:e.data,style:{width:"100%"},height:"100%",onSelectionChange:o},{empty:w((()=>[b(s)])),default:w((()=>[b(n,{type:"selection",width:"50"}),b(n,{property:"id",label:"ID",width:"100"}),b(n,{property:"group_name",label:"人群名称",width:"150"}),b(n,{property:"group_desc",label:"人群描述"}),b(n,{property:"status",label:"状态",width:"130"},{default:w((e=>[_("div",A,[_("div",{class:h(["status_dot",g(B)(e.row.status).className])},null,2),_("div",null,V(g(B)(e.row.status).text),1)])])),_:1}),b(n,{property:"address",label:"地区"},{default:w((e=>[_("div",null,V(g(D)(g(F)(e.row.province,e.row.city,e.row.district),g(r))),1)])),_:1}),b(n,{property:"count",label:"覆盖用户人数",width:"140"},{default:w((e=>[_("div",null,V(e.row.count),1)])),_:1}),b(n,{property:"money",label:"消耗金额 (元)",width:"160"},{default:w((e=>[_("div",null,V(Number(e.row.money).toFixed(2)),1)])),_:1}),b(n,{property:"create_time",label:"创建日期",width:"130"},{default:w((e=>[_("div",null,V(g(u)(new Date(e.row.create_time),"yyyy-MM-dd")),1)])),_:1}),b(n,{property:"source",label:"来源",width:"130"},{default:w((e=>[_("div",null,V(g(I)(e.row.source)),1)])),_:1}),b(n,{property:"user_name",label:"创建人",width:"130"}),b(n,{property:"status",label:"操作",width:"150",fixed:"right"},{default:w((e=>[1==e.row.status?(f(),y("div",J,[e.row.attachment?(f(),k(c,{key:0,type:"primary",href:e.row.attachment},{default:w((()=>[Q])),_:2},1032,["href"])):C("",!0),e.row.attachment?(f(),y("div",W)):C("",!0),b(c,{type:"primary",onClick:a=>O(e.row.id)},{default:w((()=>[G])),_:2},1032,["onClick"])])):C("",!0),2==e.row.status?(f(),y("div",L,"---")):C("",!0),3==e.row.status?(f(),y("div",X,[b(c,{type:"primary",onClick:a=>{return l=e.row.fail_reason,p.value=l,void(d.value=!0);var l}},{default:w((()=>[Y])),_:2},1032,["onClick"]),Z,b(c,{type:"primary",onClick:a=>O(e.row.id)},{default:w((()=>[$])),_:2},1032,["onClick"])])):C("",!0),4==e.row.status?(f(),y("div",ee,[b(c,{type:"primary",onClick:a=>{return t=e.row.id,void U.push(l.details+"?id="+t);var t}},{default:w((()=>[ae])),_:2},1032,["onClick"]),le,b(c,{type:"primary",onClick:a=>O(e.row.id)},{default:w((()=>[te])),_:2},1032,["onClick"])])):C("",!0)])),_:1})])),_:1},8,["data"]),b(E,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e),title:"拒绝原因",width:"400px"},{footer:w((()=>[_("div",oe,[b(j,{type:"primary",onClick:t[0]||(t[0]=e=>d.value=!1)},{default:w((()=>[de])),_:1})])])),default:w((()=>[_("div",re,V(p.value),1)])),_:1},8,["modelValue"]),b(i,{modelValue:x.value,"onUpdate:modelValue":t[2]||(t[2]=e=>x.value=e),msg:"确认删除这条数据吗?",onSure:K},null,8,["modelValue"])])}}}),[["__scopeId","data-v-65ef7699"]]);const ue={class:"fcs fjend"},ie=j("取消"),pe=j("提交"),ne=p({props:{modelValue:Boolean},emits:["update:modelValue","success"],setup(e,{expose:s,emit:u}){const i=e,p=n({get:()=>i.modelValue,set:e=>{u("update:modelValue",e)}}),m=c({people:"",desc:"",addr:[],file:""}),y=c("none"),h=K({people:[{required:!0,message:"请输入人群名称",trigger:"blur"}],desc:[{required:!0,message:"请输入人群描述",trigger:"blur"}],addr:[{required:!0,message:"请选择地区",trigger:"change"}],file:[{validator:(e,a,l)=>{switch(y.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf 格式的文件"));break;default:l()}},trigger:"change"}]}),V=c(),C=c(),j=c(!1),x=e=>{e?(y.value=e,m.value.file="",V.value.validateField("file",(()=>null))):(y.value="",V.value.clearValidate("file"))},O=e=>{var s;u("success",(s=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&d(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&d(e,l,a[l]);return e})({},m.value),a(s,l({path:e}))))},P=()=>{y.value="none",V.value.validate((e=>{if(!e)return!1;j.value=!0,m.value.file?C.value.submit():O("")}))},S=e=>{m.value.file="",y.value="none",C.value.clear(),j.value=!1,q("上传失败")},B=e=>{j.value?M.confirm("正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{e()})).catch((()=>{})):e()},D=()=>{j.value=!1,y.value="none",C.value.clear(),V.value.resetFields(),u("update:modelValue",!1)};return s({addError:()=>{j.value=!1}}),(e,a)=>{const l=v("el-input"),t=v("el-form-item"),r=v("el-form"),o=v("el-button"),d=v("el-dialog"),s=U("loading");return f(),k(d,{modelValue:g(p),"onUpdate:modelValue":a[4]||(a[4]=e=>z(p)?p.value=e:null),title:"新增需求",width:"500px","before-close":B,onClose:D},{footer:w((()=>[_("div",ue,[b(o,{disabled:j.value,onClick:D},{default:w((()=>[ie])),_:1},8,["disabled"]),b(o,{type:"primary",disabled:j.value,onClick:P},{default:w((()=>[pe])),_:1},8,["disabled"])])])),default:w((()=>[E((f(),k(r,{ref_key:"addFormRef",ref:V,class:"myform",model:m.value,rules:g(h),"label-width":"80px"},{default:w((()=>[b(t,{label:"人群名称",prop:"people"},{default:w((()=>[b(l,{modelValue:m.value.people,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value.people=e),placeholder:"请输入人群名称"},null,8,["modelValue"])])),_:1}),b(t,{label:"选择地区",prop:"addr"},{default:w((()=>[b(H,{modelValue:m.value.addr,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value.addr=e),type:"address"},null,8,["modelValue"])])),_:1}),b(t,{label:"人群描述",prop:"desc"},{default:w((()=>[b(l,{modelValue:m.value.desc,"onUpdate:modelValue":a[2]||(a[2]=e=>m.value.desc=e),placeholder:"可对人群进行简单的描述",type:"textarea",maxlength:"150","show-word-limit":"",rows:"4",resize:"none"},null,8,["modelValue"])])),_:1}),b(t,{label:"上传附件",prop:"file"},{default:w((()=>[b(N,{ref_key:"upload",ref:C,modelValue:m.value.file,"onUpdate:modelValue":a[3]||(a[3]=e=>m.value.file=e),site:"dmp_attach",onChange:x,onError:S,onSuccess:O},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[s,j.value]])])),_:1},8,["modelValue"])}}});export{se as K,ne as _};
