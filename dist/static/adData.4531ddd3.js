var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;import{K as d}from"./KzPage.b6fb8392.js";import{K as p,_ as i}from"./KzAddPeople.b147958d.js";import{K as n}from"./KzDmpTitle.cf8522d8.js";import{k as u,l as c,m}from"./findC.b214be40.js";import{B as v}from"./index.829e2404.js";import{H as f,g as b,_ as j,o as y,I as g,J as z,a as K,w as _,B as O,a1 as h,b as P,ae as k}from"./vue.fa004e33.js";import"./KzEmpty.ce78a8a2.js";import"./date.23847c74.js";import"./KzDialog.a2da6fcd.js";import"./kzkf.83b11867.js";import"./KzCascader.99526248.js";import"./KzUpload.381afc79.js";import"./tinymce.50e98bcc.js";const w={class:"kz_card addata_page_c dmp_page"},D={class:"fsc mb20"},C=h("新增需求"),U=f((E=((a,e)=>{for(var t in e||(e={}))o.call(e,t)&&l(a,t,e[t]);if(r)for(var t of r(e))s.call(e,t)&&l(a,t,e[t]);return a})({},{name:"AdData"}),e(E,t({setup(a){const e=b(1),t=b(10),r=b(0),o=b(!1),s=()=>{o.value=!0,u({size:t.value,current:e.value}).then((a=>{1===a.status&&(r.value=a.body.total,l.value=a.body.records),o.value=!1}))};s();const l=b([]),f=b([]),h=a=>{f.value=a},U=a=>{c({id:a}).then((a=>{1==a.status&&s()}))},E=b(!1),S=b(),V=a=>{m({attachment:a.path,city:a.addr[1]||0,district:a.addr[2]||0,group_desc:a.desc,group_name:a.people,province:a.addr[0]||0}).then((a=>{1==a.status?(E.value=!1,s()):S.value.addError()}))};return(a,u)=>{const c=P("el-button"),m=k("loading");return j((y(),g("div",w,[z("div",D,[K(n),K(c,{type:"primary",icon:O(v),onClick:u[0]||(u[0]=a=>E.value=!0)},{default:_((()=>[C])),_:1},8,["icon"])]),K(p,{data:l.value,details:"/product/dmp/findc/addatadetails",onSelect:h,onDel:U},null,8,["data"]),K(d,{page:e.value,"onUpdate:page":u[1]||(u[1]=a=>e.value=a),size:t.value,"onUpdate:size":u[2]||(u[2]=a=>t.value=a),total:r.value,onChange:s},null,8,["page","size","total"]),K(i,{ref_key:"addref",ref:S,modelValue:E.value,"onUpdate:modelValue":u[3]||(u[3]=a=>E.value=a),onSuccess:V},null,8,["modelValue"])])),[[m,o.value]])}}}))));var E;export{U as default};
