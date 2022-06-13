var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,d=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&n(e,l,a[l]);if(s)for(var l of s(a))o.call(a,l)&&n(e,l,a[l]);return e};import{H as u,o as c,I as r,J as i,g as p,j as v,r as m,a as f,w as y,B as _,P as b,aa as h,c as g,a2 as k,a3 as C,a6 as w,$ as V,a0 as z,a1 as j,av as x,aw as K,u as E,ac as O,ad as U}from"./vue.a499711c.js";import{s as L,c as T,d as P,g as R,a as B,w as I,b as N,e as D}from"./findB.446b4b56.js";import{_ as S}from"./KzCascader.6fd21cdd.js";import{v as F,_ as M,m as q,F as A,O as H,e as J}from"./index.7f252a0e.js";import{K as $}from"./KzPage.9312e74c.js";import{K as G}from"./KzTopBtns.407cc13e.js";import{_ as Q}from"./KzCompanyTable.0a638a7d.js";import{K as W}from"./KzDmpTitle.1b8d0ed8.js";import"./tinymce.275386ab.js";import"./KzDialog.afc18edb.js";import"./KzEmpty.61a513e5.js";const X=u({name:"CloseBold"}),Y={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Z=[i("path",{fill:"currentColor",d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"},null,-1)];var ee=F(X,[["render",function(e,a,l,s,t,o){return c(),r("svg",Y,Z)}]]);const ae=e=>(x("data-v-9a273b76"),e=e(),K(),e),le={class:"search_components kz_card mb16"},se={class:"height_searchbox"},te={class:"topitems fcs"},oe={class:"contact_mode fcs"},ne={class:"fcs btns"},de=k("查询条件"),ue=k("保存条件"),ce=k("重置条件"),re={class:"fcs"},ie={class:"fsc ditems"},pe={class:"dname els"},ve={class:"dbtns fcs"},me=["onClick"],fe=ae((()=>i("div",{class:"dline"},null,-1))),ye=ae((()=>i("div",null,"选择",-1))),_e={key:1,class:"empty_drop"},be={class:"now_condition fcs"},he=ae((()=>i("div",{class:"fs0"},"筛选条件：",-1))),ge={class:"list flex"},ke={class:"flex fjend"},Ce=k("取消"),we=k("确认");var Ve=M(u({name:"KzTopSearch",emits:["close","search"],setup(e,{emit:a}){const l=q(),s=()=>{a("close")},t=p([]),o=p([]);l.getCAndC().then((e=>{t.value=e.c_type,o.value=e.contact}));const n=v({ctype:[],industry_id:[],addr:[],business_scope:"",contact:[]}),d=p(),u=e=>{e&&e.resetFields()},x=()=>{N.value="条件组",u(d.value),$.business_scope="",$.industry_id="",$.addr="",$.contact="",$.ctype="",G.value=!1},K=p(!1),E=v({title:""}),O=p(),U=v({title:[{required:!0,message:"请输入条件组名称",trigger:"change"}]}),R=()=>{K.value=!1,E.title="",u(O.value)},B=()=>{let e={},a=0,l=0;n.ctype.forEach((e=>{a|=Number(e)})),n.contact.forEach((e=>{l|=Number(e)}));const s=n.industry_id.join(",");return e={province:Number(n.addr[0])||"",city:Number(n.addr[1])||"",district:Number(n.addr[2])||"",business_scope:n.business_scope,industry_id:s,contact:l,company_type:a,conditions_name:E.title},e},I=()=>{L(B()).then((e=>{1==e.status&&(N.value=E.title,K.value=!1,F())}))},N=p("条件组"),D=p([]),F=async()=>{const e=await T({current:1,size:10});1==e.status&&(D.value=e.body)};F();const M=p(),H=e=>{x(),N.value=e.conditions_name,o.value.forEach((a=>{e.contact&a.value&&n.contact.push(a.value)}));[e.province,e.city,e.district].forEach((e=>{e&&n.addr.push(Number(e))})),n.industry_id=e.industry_id.split(","),n.business_scope=e.business_scope,t.value.forEach((a=>{e.company_type&a.value&&n.ctype.push(a.value)})),Q()},J={business_scope:"经营范围",industry_id:"行业分类",addr:"省份地区",contact:"联系方式",ctype:"企业类型"},$=v({business_scope:"",industry_id:"",addr:"",contact:"",ctype:""}),G=p(!1),Q=()=>{$.business_scope=n.business_scope;let e="",a="";n.contact.forEach((a=>{var l;e+=(null==(l=o.value.find((e=>e.value==a)))?void 0:l.name)+"，"})),$.contact=e.substring(0,e.length-1),n.ctype.forEach((e=>{var l;a+=(null==(l=t.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),$.ctype=a.substring(0,a.length-1),$.industry_id=Y.value.getText(n.industry_id),$.addr=X.value.getText(n.addr),G.value=!0},W=e=>{switch(e){case"contact":let a="";n.contact.forEach((e=>{var l;a+=(null==(l=o.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),$.contact=a.substring(0,a.length-1);break;case"ctype":let l="";n.ctype.forEach((e=>{var a;l+=(null==(a=t.value.find((a=>a.value==e)))?void 0:a.name)+"，"})),$.ctype=l.substring(0,l.length-1);break;case"industry_id":$.industry_id=Y.value.getText(n.industry_id);break;case"addr":$.addr=X.value.getText(n.addr);break;default:$[e]=n[e]}G.value=!0},X=p(),Y=p(),Z=()=>{a("search",B())};return(e,a)=>{const l=m("el-icon"),u=m("el-input"),p=m("el-form-item"),v=m("el-checkbox"),L=m("el-checkbox-group"),T=m("el-button"),B=m("el-dropdown-item"),F=m("el-dropdown-menu"),q=m("el-dropdown"),Q=m("el-form"),ae=m("el-tag"),Ve=m("el-collapse-transition"),ze=m("el-dialog");return c(),r("div",le,[i("div",se,[f(l,{class:"closebtn rotate",size:"18px",onClick:s},{default:y((()=>[f(_(ee))])),_:1}),f(Q,{ref_key:"formRef",ref:d,class:"myform",model:n},{default:y((()=>[i("div",te,[f(p,{label:"经营范围",prop:"business_scope"},{default:y((()=>[f(u,{modelValue:n.business_scope,"onUpdate:modelValue":a[0]||(a[0]=e=>n.business_scope=e),placeholder:"请输入经营范围",maxlength:"36",onChange:a[1]||(a[1]=e=>W("business_scope"))},null,8,["modelValue"])])),_:1}),f(p,{label:"行业分类",prop:"industry_id"},{default:y((()=>[f(S,{ref_key:"typeCRef",ref:Y,modelValue:n.industry_id,"onUpdate:modelValue":a[2]||(a[2]=e=>n.industry_id=e),type:"type",onChange:a[3]||(a[3]=e=>W("industry_id"))},null,8,["modelValue"])])),_:1}),f(p,{label:"省份地区",prop:"addr"},{default:y((()=>[f(S,{ref_key:"addrCRef",ref:X,modelValue:n.addr,"onUpdate:modelValue":a[4]||(a[4]=e=>n.addr=e),type:"address",onChange:a[5]||(a[5]=e=>W("addr"))},null,8,["modelValue"])])),_:1})]),i("div",oe,[f(p,{label:"联系方式",prop:"contact"},{default:y((()=>[f(L,{modelValue:n.contact,"onUpdate:modelValue":a[6]||(a[6]=e=>n.contact=e),onChange:a[7]||(a[7]=e=>W("contact"))},{default:y((()=>[(c(!0),r(b,null,h(o.value,(e=>(c(),g(v,{key:e.id,label:e.value},{default:y((()=>[k(C(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})]),f(p,{label:"企业类型",prop:"ctype"},{default:y((()=>[f(L,{modelValue:n.ctype,"onUpdate:modelValue":a[8]||(a[8]=e=>n.ctype=e),onChange:a[9]||(a[9]=e=>W("ctype"))},{default:y((()=>[(c(!0),r(b,null,h(t.value,(e=>(c(),g(v,{key:e.id,label:e.value},{default:y((()=>[k(C(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i("div",ne,[f(T,{type:"primary",onClick:Z},{default:y((()=>[de])),_:1}),f(T,{class:"bdc_btn",onClick:a[10]||(a[10]=e=>K.value=!0)},{default:y((()=>[ue])),_:1}),f(T,{class:"bdc_btn",onClick:x},{default:y((()=>[ce])),_:1}),f(q,{ref_key:"dropRef",ref:M,onCommand:H},{dropdown:y((()=>[D.value.length?(c(),g(F,{key:0},{default:y((()=>[(c(!0),r(b,null,h(D.value,((e,a)=>(c(),g(B,{key:e.id,command:e},{default:y((()=>[i("div",ie,[i("div",pe,C(e.conditions_name),1),i("div",ve,[i("div",{onClick:w((l=>((e,a)=>{P({id:e.id}).then((l=>{1==l.status&&(D.value.splice(a,1),M.value.handleClose(),e.conditions_name==N.value&&(N.value="条件组"))}))})(e,a)),["stop"])},"删除",8,me),fe,ye])])])),_:2},1032,["command"])))),128))])),_:1})):(c(),r("div",_e,"暂无数据"))])),default:y((()=>[i("div",re,[i("div",null,C(N.value),1),f(l,{class:"right_icon"},{default:y((()=>[f(_(A))])),_:1})])])),_:1},512)])])),_:1},8,["model"]),f(Ve,null,{default:y((()=>[V(i("div",be,[he,i("div",ge,[(c(!0),r(b,null,h($,((e,a)=>(c(),r(b,null,[e?(c(),g(ae,{key:a,closable:"",class:"mytag",onClose:e=>(e=>{$[e]="","business_scope"==e?n.business_scope="":n[e]=[]})(a)},{default:y((()=>[k(C(J[a])+"："+C(e),1)])),_:2},1032,["onClose"])):j("",!0)],64)))),256))])],512),[[z,G.value]])])),_:1})]),f(ze,{modelValue:K.value,"onUpdate:modelValue":a[12]||(a[12]=e=>K.value=e),title:"新建筛选",width:"500px",onClose:R},{footer:y((()=>[i("span",ke,[f(T,{onClick:R},{default:y((()=>[Ce])),_:1}),f(T,{type:"primary",disabled:!E.title,onClick:I},{default:y((()=>[we])),_:1},8,["disabled"])])])),default:y((()=>[f(Q,{ref_key:"addFormRef",ref:O,class:"myform no_margin",model:E,rules:U},{default:y((()=>[f(p,{label:"条件组名称",prop:"title"},{default:y((()=>[f(u,{modelValue:E.title,"onUpdate:modelValue":a[11]||(a[11]=e=>E.title=e),placeholder:"请输入条件组名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-9a273b76"]]);const ze={class:"kz_card kzdata_page_content"},je={class:"fsc mb20"},xe={class:"fcs"},Ke={class:"fcs word_search"},Ee=k("查询一下"),Oe=k("高级查询");var Ue=M(u({name:"kzData",setup(e){const s=p(!1),t=p([]),o=()=>{B().then((e=>{t.value=e.body}))};o();const n=(e,a)=>{a(e?t.value.filter(u(e)):t.value)},u=e=>a=>0===a.keyword.toLowerCase().indexOf(e.toLowerCase()),r=p({size:50,current:1,source:1}),v=p(0),b=p([]),h=p(!1),k=p(1),C=p(""),w=async()=>{C.value.trim().length<1||C.value.trim().length>36?J("输入长度须在 1 ~ 36 之间"):(k.value=1,h.value=!0,r.value.current=1,await j(),o())},j=async()=>{var e,s;h.value=!0,await I((e=d({},r.value),s={keywords:C.value},a(e,l(s)))).then((e=>{1===e.status&&(v.value=e.body.total,b.value=e.body.records),h.value=!1})).catch((()=>{J("查询失败"),h.value=!1}))},x=p({}),K=async e=>{h.value=!0,k.value=2,r.value.current=1,x.value=e,await L()},L=async()=>{h.value=!0,await N(d(d({},r.value),x.value)).then((e=>{1===e.status&&(v.value=e.body.total,b.value=e.body.records),h.value=!1})).catch((()=>{J("查询失败"),h.value=!1}))},T=()=>{1==k.value?j():L()},P=p(),S=p(),F=E((()=>S.value&&!S.value.selIdList.length)),M=async()=>{P.value.setLoading(!0);const e=await D({list:S.value.selIdList});P.value.close(e.message),S.value.clear()};return(e,a)=>{const l=m("el-collapse-transition"),t=m("el-icon"),o=m("el-autocomplete"),d=m("el-button"),u=m("el-link"),p=m("el-scrollbar"),k=U("loading");return V((c(),g(p,{height:"100%",class:"kzdata_page"},{default:y((()=>[f(l,null,{default:y((()=>[V(f(Ve,{onSearch:K,onClose:a[0]||(a[0]=e=>s.value=!1)},null,512),[[z,s.value]])])),_:1}),i("div",ze,[i("div",je,[f(W,{total:v.value},null,8,["total"]),i("div",xe,[i("div",Ke,[f(o,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e),modelModifiers:{trim:!0},placeholder:"请输入企业名称、联系人、经营范围关键词","fetch-suggestions":n,"value-key":"keyword",onKeyup:O(w,["enter"])},{prefix:y((()=>[f(t,{class:"searchicon"},{default:y((()=>[f(_(H))])),_:1})])),_:1},8,["modelValue","onKeyup"]),f(d,{type:"primary",class:"ml16",onClick:w},{default:y((()=>[Ee])),_:1}),f(u,{class:"heisearch ml16 fs0",type:"primary",onClick:a[2]||(a[2]=e=>s.value=!0)},{default:y((()=>[Oe])),_:1})]),f(G,{ref_key:"topBtnRef",ref:P,type:"sync",syncbtn:"","sync-api":_(R),"sync-disabled":_(F),onSync:M},null,8,["sync-api","sync-disabled"])])]),f(Q,{ref_key:"tableRef",ref:S,data:b.value},null,8,["data"]),f($,{page:r.value.current,"onUpdate:page":a[3]||(a[3]=e=>r.value.current=e),size:r.value.size,"onUpdate:size":a[4]||(a[4]=e=>r.value.size=e),total:v.value,onChange:T},null,8,["page","size","total"])])])),_:1})),[[k,h.value]])}}}),[["__scopeId","data-v-8f1f3a06"]]);export{Ue as default};
