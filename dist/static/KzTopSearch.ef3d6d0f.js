import{H as e,o as a,I as l,J as s,u as t,j as d,g as o,b as n,a as c,w as u,B as i,P as r,aa as p,c as m,a1 as f,a2 as _,a6 as v,_ as y,$ as b,a0 as h,av as g,aw as k}from"./vue.fa004e33.js";import{c as C,d as V,e as x}from"./findB.3d235c1a.js";import{_ as w}from"./KzCascader.371e5f18.js";import{v as E,_ as j,m as U,C as N}from"./index.2739bd6f.js";const z=e({name:"CloseBold"}),L={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},R=[s("path",{fill:"currentColor",d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"},null,-1)];var T=E(z,[["render",function(e,s,t,d,o,n){return a(),l("svg",L,R)}]]);const B=e=>(g("data-v-4ff0b30c"),e=e(),k(),e),F={class:"search_components kz_card mb16"},I={class:"height_searchbox"},K={class:"topitems fcs"},q={class:"contact_mode fcs"},H={class:"fcs btns"},J=f("查询条件"),M=f("保存条件"),P=f("重置条件"),$={class:"fcs"},A={class:"fsc ditems"},D={class:"dname els"},G={class:"dbtns fcs"},O=["onClick"],Q=B((()=>s("div",{class:"dline"},null,-1))),S=B((()=>s("div",null,"选择",-1))),W={key:1,class:"empty_drop"},X={class:"now_condition fcs"},Y=B((()=>s("div",{class:"fs0"},"筛选条件：",-1))),Z={class:"list flex"},ee={class:"flex fjend"},ae=f("取消"),le=f("确认");var se=j(e({emits:["close","search"],setup(e,{emit:g}){const k=U(),E=()=>{g("close")},j=t((()=>k.state.companyType)),z=t((()=>k.state.contactList)),L=d({ctype:[],industry_id:[],addr:[],business_scope:"",contact:[]}),R=o(),B=e=>{e&&e.resetFields()},se=()=>{re.value="条件组",B(R.value),ye.business_scope="",ye.industry_id="",ye.addr="",ye.contact="",ye.ctype="",be.value=!1},te=o(!1),de=d({title:""}),oe=o(),ne=d({title:[{required:!0,message:"请输入条件组名称",trigger:"change"}]}),ce=()=>{te.value=!1,de.title="",B(oe.value)},ue=()=>{let e={},a=0,l=0;L.ctype.forEach((e=>{a|=Number(e)})),L.contact.forEach((e=>{l|=Number(e)}));const s=L.industry_id.join(",");return e={province:Number(L.addr[0])||"",city:Number(L.addr[1])||"",district:Number(L.addr[2])||"",business_scope:L.business_scope,industry_id:s,contact:l,company_type:a,conditions_name:de.title},e},ie=()=>{C(ue()).then((e=>{1==e.status&&(re.value=de.title,te.value=!1,me())}))},re=o("条件组"),pe=o([]),me=async()=>{const e=await V({current:1,size:10});1==e.status&&(pe.value=e.body)};me();const fe=o(),_e=e=>{se(),re.value=e.conditions_name,z.value.forEach((a=>{e.contact&a.value&&L.contact.push(a.value)}));[e.province,e.city,e.district].forEach((e=>{e&&L.addr.push(Number(e))})),L.industry_id=e.industry_id.split(","),L.business_scope=e.business_scope,j.value.forEach((a=>{e.company_type&a.value&&L.ctype.push(a.value)})),he()},ve={business_scope:"经营范围",industry_id:"行业分类",addr:"省份地区",contact:"联系方式",ctype:"企业类型"},ye=d({business_scope:"",industry_id:"",addr:"",contact:"",ctype:""}),be=o(!1),he=()=>{ye.business_scope=L.business_scope;let e="",a="";L.contact.forEach((a=>{var l;e+=(null==(l=z.value.find((e=>e.value==a)))?void 0:l.name)+"，"})),ye.contact=e.substring(0,e.length-1),L.ctype.forEach((e=>{var l;a+=(null==(l=j.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),ye.ctype=a.substring(0,a.length-1),ye.industry_id=Ce.value.getText(L.industry_id),ye.addr=ke.value.getText(L.addr),be.value=!0},ge=e=>{switch(e){case"contact":let a="";L.contact.forEach((e=>{var l;a+=(null==(l=z.value.find((a=>a.value==e)))?void 0:l.name)+"，"})),ye.contact=a.substring(0,a.length-1);break;case"ctype":let l="";L.ctype.forEach((e=>{var a;l+=(null==(a=j.value.find((a=>a.value==e)))?void 0:a.name)+"，"})),ye.ctype=l.substring(0,l.length-1);break;case"industry_id":ye.industry_id=Ce.value.getText(L.industry_id);break;case"addr":ye.addr=ke.value.getText(L.addr);break;default:ye[e]=L[e]}be.value=!0},ke=o(),Ce=o(),Ve=()=>{g("search",ue())};return(e,t)=>{const d=n("el-icon"),o=n("el-input"),g=n("el-form-item"),k=n("el-checkbox"),C=n("el-checkbox-group"),V=n("el-button"),U=n("el-dropdown-item"),B=n("el-dropdown-menu"),ue=n("el-dropdown"),me=n("el-form"),he=n("el-tag"),xe=n("el-collapse-transition"),we=n("el-dialog");return a(),l("div",F,[s("div",I,[c(d,{class:"closebtn rotate",size:"18px",onClick:E},{default:u((()=>[c(i(T))])),_:1}),c(me,{ref_key:"formRef",ref:R,class:"myform",model:i(L)},{default:u((()=>[s("div",K,[c(g,{label:"经营范围",prop:"business_scope"},{default:u((()=>[c(o,{modelValue:i(L).business_scope,"onUpdate:modelValue":t[0]||(t[0]=e=>i(L).business_scope=e),placeholder:"请输入经营范围",maxlength:"36",onChange:t[1]||(t[1]=e=>ge("business_scope"))},null,8,["modelValue"])])),_:1}),c(g,{label:"行业分类",prop:"industry_id"},{default:u((()=>[c(w,{ref_key:"typeCRef",ref:Ce,modelValue:i(L).industry_id,"onUpdate:modelValue":t[2]||(t[2]=e=>i(L).industry_id=e),type:"type",onChange:t[3]||(t[3]=e=>ge("industry_id"))},null,8,["modelValue"])])),_:1}),c(g,{label:"省份地区",prop:"addr"},{default:u((()=>[c(w,{ref_key:"addrCRef",ref:ke,modelValue:i(L).addr,"onUpdate:modelValue":t[4]||(t[4]=e=>i(L).addr=e),type:"address",onChange:t[5]||(t[5]=e=>ge("addr"))},null,8,["modelValue"])])),_:1})]),s("div",q,[c(g,{label:"联系方式",prop:"contact"},{default:u((()=>[c(C,{modelValue:i(L).contact,"onUpdate:modelValue":t[6]||(t[6]=e=>i(L).contact=e),onChange:t[7]||(t[7]=e=>ge("contact"))},{default:u((()=>[(a(!0),l(r,null,p(i(z),(e=>(a(),m(k,{key:e.id,label:e.value},{default:u((()=>[f(_(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})]),c(g,{label:"企业类型",prop:"ctype"},{default:u((()=>[c(C,{modelValue:i(L).ctype,"onUpdate:modelValue":t[8]||(t[8]=e=>i(L).ctype=e),onChange:t[9]||(t[9]=e=>ge("ctype"))},{default:u((()=>[(a(!0),l(r,null,p(i(j),(e=>(a(),m(k,{key:e.id,label:e.value},{default:u((()=>[f(_(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),s("div",H,[c(V,{type:"primary",onClick:Ve},{default:u((()=>[J])),_:1}),c(V,{class:"bdc_btn",onClick:t[10]||(t[10]=e=>te.value=!0)},{default:u((()=>[M])),_:1}),c(V,{class:"bdc_btn",onClick:se},{default:u((()=>[P])),_:1}),c(ue,{ref_key:"dropRef",ref:fe,onCommand:_e},{dropdown:u((()=>[pe.value.length?(a(),m(B,{key:0},{default:u((()=>[(a(!0),l(r,null,p(pe.value,((e,l)=>(a(),m(U,{key:e.id,command:e},{default:u((()=>[s("div",A,[s("div",D,_(e.conditions_name),1),s("div",G,[s("div",{onClick:v((a=>((e,a)=>{x({id:e.id}).then((l=>{1==l.status&&(pe.value.splice(a,1),fe.value.handleClose(),e.conditions_name==re.value&&(re.value="条件组"))}))})(e,l)),["stop"])},"删除",8,O),Q,S])])])),_:2},1032,["command"])))),128))])),_:1})):(a(),l("div",W,"暂无数据"))])),default:u((()=>[s("div",$,[s("div",null,_(re.value),1),c(d,{class:"right_icon"},{default:u((()=>[c(i(N))])),_:1})])])),_:1},512)])])),_:1},8,["model"]),c(xe,null,{default:u((()=>[y(s("div",X,[Y,s("div",Z,[(a(!0),l(r,null,p(i(ye),((e,s)=>(a(),l(r,null,[e?(a(),m(he,{key:s,closable:"",class:"mytag",onClose:e=>(e=>{ye[e]="","business_scope"==e?L.business_scope="":L[e]=[]})(s)},{default:u((()=>[f(_(ve[s])+"："+_(e),1)])),_:2},1032,["onClose"])):h("",!0)],64)))),256))])],512),[[b,be.value]])])),_:1})]),c(we,{modelValue:te.value,"onUpdate:modelValue":t[12]||(t[12]=e=>te.value=e),title:"新建筛选",width:"500px",onClose:ce},{footer:u((()=>[s("span",ee,[c(V,{onClick:ce},{default:u((()=>[ae])),_:1}),c(V,{type:"primary",disabled:!i(de).title,onClick:ie},{default:u((()=>[le])),_:1},8,["disabled"])])])),default:u((()=>[c(me,{ref_key:"addFormRef",ref:oe,class:"myform no_margin",model:i(de),rules:i(ne)},{default:u((()=>[c(g,{label:"条件组名称",prop:"title"},{default:u((()=>[c(o,{modelValue:i(de).title,"onUpdate:modelValue":t[11]||(t[11]=e=>i(de).title=e),placeholder:"请输入条件组名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-4ff0b30c"]]);export{se as K};