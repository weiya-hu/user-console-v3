import{_ as e}from"./index.fde176ed.js";import{H as a,u as t,r as s,o as l,c as d,w as o,J as i,a3 as c,X as u,W as f,I as p,a as r,B as n,k as m,a2 as y,av as k,aw as v}from"./vue.a499711c.js";const _={key:0,class:"fcc fc"},g=["src"],w=(e=>(k("data-v-2f3f5aba"),e=e(),v(),e))((()=>i("div",{class:"tip"},"请扫描上方二维码，联系客服人员",-1))),h={key:1,class:"fcs msg"},V={key:0,class:"fcc long_btn"},b=y("我知道了"),C={key:1},j={key:0,class:"fjend"},x=y("取消"),z=y("确定"),B={key:1,class:"fjend"},I=y("我知道了");var K=e(a({name:"KzDialog",props:{modelValue:{type:Boolean},title:{default:"提示"},msg:{default:""},type:{default:void 0},btn:{default:2},width:{default:""}},emits:["update:modelValue","sure"],setup(e,{emit:a}){const y=e,k=t({get:()=>y.modelValue,set:e=>{a("update:modelValue",e)}}),v=()=>{a("update:modelValue",!1)},K=()=>{a("sure")};return(a,t)=>{const y=s("el-button"),D=s("el-dialog");return l(),d(D,{modelValue:n(k),"onUpdate:modelValue":t[0]||(t[0]=e=>m(k)?k.value=e:null),width:e.width?e.width:"kf"===e.type?"280px":"430px","show-close":!e.type,"custom-class":e.type?"no_header_dialog":"kz_dialog",onClose:v},{title:o((()=>[i("div",{class:u("kf"===e.type&&"fcc kf_title")},c("kf"===e.type?"联系客服":e.title),3)])),default:o((()=>[f(a.$slots,"default",{},(()=>["kf"===e.type?(l(),p("div",_,[i("img",{src:n("/static/kf_code.d5aa67b2.png"),alt:""},null,8,g),w])):(l(),p("div",h,c(e.msg),1))]),!0)])),footer:o((()=>["kf"===e.type?(l(),p("div",V,[r(y,{type:"primary",size:"large",onClick:v},{default:o((()=>[b])),_:1})])):(l(),p("div",C,[2===e.btn?(l(),p("div",j,[r(y,{onClick:v},{default:o((()=>[x])),_:1}),r(y,{type:"primary",onClick:K},{default:o((()=>[z])),_:1})])):(l(),p("div",B,[r(y,{type:"primary",size:"large",onClick:v},{default:o((()=>[I])),_:1})]))]))])),_:3},8,["modelValue","width","show-close","custom-class"])}}}),[["__scopeId","data-v-2f3f5aba"]]);export{K};