import{K as a}from"./KzDialog.9ecb6295.js";import{_ as e,C as l}from"./index.561f5261.js";import{H as s,g as d,r as t,ad as i,o as n,I as o,c as u,w as c,a1 as b,a2 as p,a3 as v,B as y,a as m,J as r,$ as f,P as _,aa as k,X as C,av as g,aw as x}from"./vue.a499711c.js";const V=a=>(g("data-v-ea6a812a"),a=a(),x(),a),B={class:"kz_top_btns"},j=p("同步数据"),D=V((()=>r("div",{class:"fsc"},[
r("div",{class:"lt"},"选择同步系统")],-1))),K={class:"btn_list flex"},P={class:"flex fjend"},S=p("取消"),w=p("同步");var z=e(s({name:"KzTopBtns",props:{type:{default:"all"},syncbtn:{type:Boolean,default:!1},syncDisabled:{type:Boolean,default:!0},syncApi:null,btnText:{default:"新增需求"}},emits:["add","sync"],setup(e,{expose:s,emit:g}){d({});const x=async()=>{I.value=!0},V=d(!1),z=d(""),T=d(!1),A=a=>{U.value=0,I.value=!1,V.value=!1,a&&(z.value=a,T.value=!0)},I=d(!1),M=d([{id:1,btns:"同步APP营销矩阵",disabled:!1},{id:2,btns:"同步SCRM系统",disabled:!0},{id:3,btns:"同步DSP系统",disabled:!0},{id:4,btns:"同步SMS系统",disabled:!0}]),U=d(0);return s({close:A,setLoading:a=>{V.value=Boolean(a)}}),(s,d)=>{const $=t("el-button"),h=t("el-dialog"),H=i("loading");return n(),o("div",B,["all"===e.type||"sync"===e.type?(n(),u($,{key:0,class:"bdc_btn",disabled:e.syncDisabled,onClick:x},{default:c((()=>[j])),_:1},8,["disabled"])):b("",!0),"all"===e.type||"add"===e.type?(n(),u($,{key:1,type:"primary",icon:y(l),onClick:d[0]||(d[0]=a=>g("add"))},{default:c((()=>[p(v(e.btnText),1)])),_:1},8,["icon"])):b("",!0),m(h,{modelValue:I.value,"onUpdate:modelValue":d[3]||(d[3]=a=>I.value=a),title:"同步数据",width:"480px","custom-class":"sync_dialog",onClose:A},{footer:c((()=>[r("span",P,[m($,{disabled:V.value,onClick:d[1]||(d[1]=a=>I.value=!1)},{default:c((()=>[S])),_:1},8,["disabled"]),m($,{type:"primary",disabled:!U.value||V.value,onClick:d[2]||(d[2]=a=>s.$emit("sync"))},{default:c((()=>[w])),_:1},8,["disabled"])])])),default:c((()=>[f((n(),o("div",null,[D,r("div",K,[(n(!0),o(_,null,k(M.value,(a=>(n(),u($,{key:a.id,class:C(["btn_item",a.disabled&&"btn_disabled"]),type:a.id==U.value?"primary":"",disabled:a.disabled,onClick:e=>U.value=a.id},{default:c((()=>[p(v(a.btns),1)])),_:2},1032,["type","disabled","class","onClick"])))),128))])])),[[H,V.value]])])),_:1},8,["modelValue"]),m(a,{modelValue:T.value,"onUpdate:modelValue":d[4]||(d[4]=a=>T.value=a),title:"同步结果",btn:1,msg:z.value},null,8,["modelValue","msg"])])}}}),[["__scopeId","data-v-ea6a812a"]]);export{z as K};
