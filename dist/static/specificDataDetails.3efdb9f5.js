import{K as a}from"./KzPage.d586fb1f.js";import{_ as e}from"./KzCompanyTable.d7f9af38.js";import{K as s}from"./KzTopBtns.d8c0a7fe.js";import{K as t}from"./KzDmpTitle.5be6dd26.js";import{H as l,g as o,u as n,_ as r,o as i,I as u,J as d,a as p,B as c,ay as v,ae as m}from"./vue.fa004e33.js";import{g as f,j as b,b as y}from"./findB.3a176f48.js";import{_ as g}from"./index.81e0e33e.js";import"./KzEmpty.e30b69b6.js";import"./KzDialog.00bbba98.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const j={class:"dmp_page kz_card"},z={class:"fsc mb20"};var K=g(l({setup(l){const g=v().query.id,K=o([]),_=o(1),k=o(50),h=o(0),B=o(!1),I=()=>{L()},L=()=>{B.value=!0,b({current:_.value,size:k.value,id:g}).then((a=>{1==a.status&&(h.value=a.body.total,K.value=a.body.records),B.value=!1})).catch((()=>{B.value=!1}))};L();const T=o(),x=o(),C=n((()=>x.value&&!x.value.selIdList.length)),D=async()=>{T.value.setLoading(!0);const a=await y({list:x.value.selIdList});T.value.close(a.message),x.value.clear()};return(l,o)=>{const n=m("loading");return r((i(),u("div",j,[d("div",z,[p(t,{total:h.value},null,8,["total"]),p(s,{ref_key:"topBtnRef",ref:T,type:"sync",syncbtn:"","sync-api":c(f),"sync-disabled":c(C),onSync:D},null,8,["sync-api","sync-disabled"])]),p(e,{ref_key:"tableRef",ref:x,data:K.value},null,8,["data"]),p(a,{page:_.value,"onUpdate:page":o[0]||(o[0]=a=>_.value=a),size:k.value,"onUpdate:size":o[1]||(o[1]=a=>k.value=a),total:h.value,onChange:I},null,8,["page","size","total"])])),[[n,B.value]])}}}),[["__scopeId","data-v-e76464b4"]]);export{K as default};
