var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{K as d}from"./KzPage.52d967b9.js";import{K as i,_ as p}from"./KzAddPeople.25db88bf.js";import{K as n}from"./KzDmpTitle.ae40899f.js";import{B as u,C as c,D as m}from"./findC.aa1b2320.js";import{B as b}from"./index.90bf26d2.js";import{H as f,g as v,o as j,I as g,J as y,a as z,w as K,B as O,a1 as _,b as D}from"./vue.fa004e33.js";import"./KzEmpty.3a93c72b.js";import"./date.23847c74.js";import"./KzDialog.19385062.js";import"./kzkf.83b11867.js";import"./KzCascader.e90aac0b.js";import"./KzUpload.8b77f043.js";import"./tinymce.50e98bcc.js";const h={class:"kz_card baidudata_page_c dmp_page"},P={class:"fsc mb20"},k=_("新增需求"),w=f((C=((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))s.call(a,t)&&l(e,t,a[t]);return e})({},{name:"BiddingData"}),a(C,t({setup(e){const a=v(1),t=v(10),r=v(0),o=()=>{u({size:t.value,current:a.value}).then((e=>{1==e.status&&(r.value=e.body.total,s.value=e.body.records)}))};o();const s=v([]),l=v([]),f=e=>{l.value=e},_=e=>{c({id:e}).then((e=>{1==e.status&&o()}))},w=v(!1),C=v(),B=e=>{m({attachment:e.path,city:e.addr[1]||0,district:e.addr[2]||0,group_desc:e.desc,group_name:e.people,province:e.addr[0]||0}).then((e=>{1==e.status?(w.value=!1,o()):C.value.addError()}))};return(e,l)=>{const u=D("el-button");return j(),g("div",h,[y("div",P,[z(n),z(u,{type:"primary",icon:O(b),onClick:l[0]||(l[0]=e=>w.value=!0)},{default:K((()=>[k])),_:1},8,["icon"])]),z(i,{data:s.value,details:"/product/dmp/findc/biddingDataDetails",onSelect:f,onDel:_},null,8,["data"]),z(d,{page:a.value,"onUpdate:page":l[1]||(l[1]=e=>a.value=e),size:t.value,"onUpdate:size":l[2]||(l[2]=e=>t.value=e),total:r.value,onChange:o},null,8,["page","size","total"]),z(p,{ref_key:"addref",ref:C,modelValue:w.value,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value=e),onSuccess:B},null,8,["modelValue"])])}}}))));var C;export{w as default};
