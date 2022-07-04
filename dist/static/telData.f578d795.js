var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{H as u,u as s,g as p,j as i,_ as n,o as c,I as v,J as m,a as f,w as b,B as y,W as _,a2 as g,c as w,P as h,aa as V,a1 as j,ax as k,b as C,ae as z}from"./vue.fa004e33.js";import{f as x}from"./date.23847c74.js";import{K as O}from"./KzPage.dd3597d0.js";import{_ as U}from"./KzCascader.2133cf09.js";import{K as D}from"./KzEmpty.cf970ba3.js";import{K}from"./KzDmpTitle.c702cca0.js";import{m as P,C as I,V as S,S as T,T as E,U as F}from"./index.e45ab2da.js";import{c as H,d as M,e as q}from"./findC.4d8edfe3.js";import"./tinymce.50e98bcc.js";const B={class:"kz_card teldata_page_c dmp_page"},J={class:"fsc mb20"},N=j("新增需求"),R={class:"dmp_table"},W={class:"fcs"},A=j("查看"),G={key:1},L={class:"fcs fjend"},Q=j("取消"),X=j("提交"),Y=u((Z=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))d.call(a,l)&&r(e,l,a[l]);return e})({},{name:"TelData"}),a(Z,l({setup(e){const a=P(),l=s((()=>a.state.addressHash)),t=k(),o=p(0),d=p(10),r=p(1),u=p(!1),Y=()=>{u.value=!0,H({current:r.value,size:d.value}).then((e=>{1==e.status&&(Z.value=e.body.records,o.value=e.body.total),u.value=!1}))};Y();const Z=p([]),$=p([]),ee=e=>{$.value=e},ae=p([]),le=p({});M().then((e=>{le.value=e.body}));const te=e=>{ae.value=le.value[e].segments},oe=p(!1),de=()=>{ae.value=[],oe.value=!1,se.value=!1,pe.value.resetFields()},re=p({people:"",desc:"",addr:[],operator:"",tels:[]}),ue=i({people:[{required:!0,message:"请输入人群名称",trigger:"blur"}]}),se=p(!1),pe=p(),ie=()=>{pe.value.validate((e=>{if(!e)return!1;se.value=!0,q({city:re.value.addr[1]||0,district:re.value.addr[2]||0,group_desc:re.value.desc,group_name:re.value.people,province:re.value.addr[0]||0,segment:re.value.tels.join()}).then((e=>{1==e.status&&(de(),Y()),se.value=!1}))}))};return(e,a)=>{const s=C("el-button"),p=C("el-table-column"),i=C("el-link"),k=C("el-table"),P=C("el-input"),H=C("el-form-item"),M=C("el-radio"),q=C("el-radio-group"),$=C("el-option"),ne=C("el-select"),ce=C("el-form"),ve=C("el-dialog"),me=z("loading");return n((c(),v("div",B,[m("div",J,[f(K),f(s,{type:"primary",icon:y(I),onClick:a[0]||(a[0]=e=>oe.value=!0)},{default:b((()=>[N])),_:1},8,["icon"])]),m("div",R,[f(k,{data:Z.value,style:{width:"100%"},onSelectionChange:ee},{empty:b((()=>[f(D)])),default:b((()=>[f(p,{type:"selection",width:"50"}),f(p,{property:"id",label:"ID"}),f(p,{property:"group_name",label:"人群名称"}),f(p,{property:"group_desc",label:"人群描述"}),f(p,{property:"status",label:"状态"},{default:b((e=>[m("div",W,[m("div",{class:_(["status_dot",y(S)(e.row.status).className])},null,2),m("div",null,g(y(S)(e.row.status).text),1)])])),_:1}),f(p,{label:"地区"},{default:b((e=>[m("div",null,g(y(T)(y(E)(e.row.province,e.row.city,e.row.district),y(l))),1)])),_:1}),f(p,{property:"count",label:"覆盖用户人数"},{default:b((e=>[m("div",null,g(e.row.count),1)])),_:1}),f(p,{property:"source",label:"来源"},{default:b((e=>[m("div",null,g(y(F)(e.row.source)),1)])),_:1}),f(p,{property:"user_name",label:"创建人"}),f(p,{property:"create_time",label:"创建日期"},{default:b((e=>[m("div",null,g(y(x)(new Date(e.row.create_time),"yyyy-MM-dd")),1)])),_:1}),f(p,{label:"操作",fixed:"right"},{default:b((e=>[4==e.row.status?(c(),w(i,{key:0,type:"primary",onClick:a=>{return l=e.row.id,void t.push("/product/dmp/findc/telDataDetails?id="+l);var l}},{default:b((()=>[A])),_:2},1032,["onClick"])):(c(),v("div",G,"---"))])),_:1})])),_:1},8,["data"])]),f(O,{page:r.value,"onUpdate:page":a[1]||(a[1]=e=>r.value=e),size:d.value,"onUpdate:size":a[2]||(a[2]=e=>d.value=e),total:o.value,onChange:Y},null,8,["page","size","total"]),f(ve,{modelValue:oe.value,"onUpdate:modelValue":a[8]||(a[8]=e=>oe.value=e),title:"新增需求",width:"500px",onClose:de},{footer:b((()=>[m("div",L,[f(s,{disabled:se.value,onClick:de},{default:b((()=>[Q])),_:1},8,["disabled"]),f(s,{type:"primary",disabled:se.value,onClick:ie},{default:b((()=>[X])),_:1},8,["disabled"])])])),default:b((()=>[n((c(),w(ce,{ref_key:"addFormRef",ref:pe,class:"myform",model:re.value,"label-width":"80px",rules:y(ue)},{default:b((()=>[f(H,{label:"人群名称",prop:"people"},{default:b((()=>[f(P,{modelValue:re.value.people,"onUpdate:modelValue":a[3]||(a[3]=e=>re.value.people=e),placeholder:"请输入人群名称"},null,8,["modelValue"])])),_:1}),f(H,{label:"选择地区",prop:"addr"},{default:b((()=>[f(U,{modelValue:re.value.addr,"onUpdate:modelValue":a[4]||(a[4]=e=>re.value.addr=e),type:"address"},null,8,["modelValue"])])),_:1}),f(H,{label:"人群描述",prop:"desc"},{default:b((()=>[f(P,{modelValue:re.value.desc,"onUpdate:modelValue":a[5]||(a[5]=e=>re.value.desc=e),placeholder:"可对人群进行简单的描述",type:"textarea",maxlength:"150","show-word-limit":"",rows:"4",resize:"none"},null,8,["modelValue"])])),_:1}),f(H,{label:"运营商",prop:"operator"},{default:b((()=>[f(q,{modelValue:re.value.operator,"onUpdate:modelValue":a[6]||(a[6]=e=>re.value.operator=e),onChange:te},{default:b((()=>[(c(!0),v(h,null,V(le.value,(e=>(c(),w(M,{key:e.id,label:e.id},{default:b((()=>[j(g(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(H,{label:"号码段",prop:"tels"},{default:b((()=>[f(ne,{modelValue:re.value.tels,"onUpdate:modelValue":a[7]||(a[7]=e=>re.value.tels=e),multiple:"",placeholder:"请选择号码段",class:"w100",disabled:0==ae.value.length},{default:b((()=>[(c(!0),v(h,null,V(ae.value,((e,a)=>(c(),w($,{key:a,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1},8,["model","rules"])),[[me,se.value]])])),_:1},8,["modelValue"])])),[[me,u.value]])}}}))));var Z;export{Y as default};
