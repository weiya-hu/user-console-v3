import{K as a}from"./KzDialog.552d8a23.js";import{_ as l,A as e}from"./index.fde176ed.js";import{H as s,g as d,r as t,ad as i,o as n,I as o,c as u,w as c,a1 as b,a2 as p,a3 as v,B as y,a as m,J as r,$ as f,P as _,aa as k,X as g,av as x,aw as C}from"./vue.a499711c.js";const V=a=>(x("data-v-04a95497"),a=a(),C(),a),A={class:"kz_top_btns"},B=p("同步数据"),j={class:"fsc"},w=V((()=>r("div",{class:"lt"},"选择同步系统",-1))),D={class:"rt fcs"},K=p(" 每天同步上限"),P=p("条数据 "),S={class:"btn_list flex"},z={class:"flex fjend"},T=p("取消"),I=p("同步");var M=l(s({name:"KzTopBtns",props:{type:{default:"all"},syncbtn:{type:Boolean,default:!1},syncDisabled:{type:Boolean,default:!0},syncApi:null,btnText:{default:"新增需求"}},emits:["add","sync"],setup(l,{expose:s,emit:x}){const C=l,V=d({}),M=async()=>{const a=C.syncApi&&await C.syncApi();a&&1==a.status&&(V.value=a.body,J.value=!0)},U=d(!1),$=d(""),h=d(!1),H=a=>{R.value=0,J.value=!1,U.value=!1,a&&($.value=a,h.value=!0)},J=d(!1),L=d([{id:1,btns:"同步APP营销矩阵",disabled:!1},{id:2,btns:"同步SCRM系统",disabled:!0},{id:3,btns:"同步DSP系统",disabled:!0},{id:4,btns:"同步SMS系统",disabled:!0}]),R=d(0);return s({close:H,setLoading:a=>{U.value=Boolean(a)}}),(s,d)=>{const C=t("el-button"),X=t("el-dialog"),q=i("loading");return n(),o("div",A,["all"===l.type||"sync"===l.type?(n(),u(C,{key:0,class:"bdc_btn",disabled:l.syncDisabled,onClick:M},{default:c((()=>[B])),_:1},8,["disabled"])):b("",!0),"all"===l.type||"add"===l.type?(n(),u(C,{key:1,type:"primary",icon:y(e),onClick:d[0]||(d[0]=a=>x("add"))},{default:c((()=>[p(v(l.btnText),1)])),_:1},8,["icon"])):b("",!0),m(X,{modelValue:J.value,"onUpdate:modelValue":d[3]||(d[3]=a=>J.value=a),title:"同步数据",width:"480px","custom-class":"sync_dialog",onClose:H},{footer:c((()=>[r("span",z,[m(C,{disabled:U.value,onClick:d[1]||(d[1]=a=>J.value=!1)},{default:c((()=>[T])),_:1},8,["disabled"]),m(C,{type:"primary",disabled:!R.value||U.value,onClick:d[2]||(d[2]=a=>s.$emit("sync"))},{default:c((()=>[I])),_:1},8,["disabled"])])])),default:c((()=>[f((n(),o("div",null,[r("div",j,[w,r("div",D,[K,r("span",null,v(V.value.surplus)+"/"+v(V.value.total),1),P])]),r("div",S,[(n(!0),o(_,null,k(L.value,(a=>(n(),u(C,{key:a.id,class:g(["btn_item",a.disabled&&"btn_disabled"]),type:a.id==R.value?"primary":"",disabled:a.disabled,onClick:l=>R.value=a.id},{default:c((()=>[p(v(a.btns),1)])),_:2},1032,["type","disabled","class","onClick"])))),128))])])),[[q,U.value]])])),_:1},8,["modelValue"]),m(a,{modelValue:h.value,"onUpdate:modelValue":d[4]||(d[4]=a=>h.value=a),title:"同步结果",btn:1,msg:$.value},null,8,["modelValue","msg"])])}}}),[["__scopeId","data-v-04a95497"]]);export{M as K};
