import{K as e}from"./KzStepTab.31aa14bd.js";import{_ as t}from"./index.7f252a0e.js";import{H as a,g as o,C as l,q as i,o as d,I as r,a as s,w as m,a2 as n,a3 as u,J as c,P as _,aa as v}from"./vue.a499711c.js";import"./debounce.d23c09a7.js";import"./tinymce.275386ab.js";const p={id:"order_page",class:"order_page"},g={id:"order_conten_item_id"};var f=t(a({name:"order",setup(t){const a=o([{title:"基本信息"},{title:"账号安全"},{title:"会员信息"},{title:"我的团队"}]),f=o(0),h=o(),b=o(0),j=o(0);return l((()=>{i((()=>{h.value=document.querySelectorAll(".order_page .order_conten_item"),b.value=document.getElementById("order_page").offsetHeight,j.value=document.getElementById("order_conten_item_id").offsetHeight}))})),(t,o)=>(d(),r("div",p,[s(e,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),tabs:a.value,"item-el":h.value,"view-height":b.value,"total-height":j.value},{default:m((({item:e})=>[n(u(e.title),1)])),content:m((()=>[c("div",g,[(d(!0),r(_,null,v(a.value,((e,t)=>(d(),r("div",{key:t,class:"kz_card order_conten_item"},u(e.title),1)))),128))])])),_:1},8,["modelValue","tabs","item-el","view-height","total-height"])]))}}),[["__scopeId","data-v-af2e2456"]]);export{f as default};