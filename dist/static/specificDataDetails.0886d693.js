import{K as a}from"./KzPage.9c6d1927.js";import{_ as e}from"./KzCompanyTable.f39efbd3.js";import{K as s}from"./KzTopBtns.baf6f18f.js";import{K as t}from"./KzDmpTitle.75aa6a30.js";import{H as l,g as o,u as i,$ as n,o as r,I as u,J as d,a as c,B as p,ay as m,ad as v}from"./vue.a499711c.js";import{g as f,j as y,b}from"./findB.e68a3db7.js";import{_ as g}from"./index.561f5261.js";import"./KzEmpty.b11d49f7.js";import"./KzDialog.9ecb6295.js";import"./kzkf.83b11867.js";import"./tinymce.275386ab.js";const j={class:"dmp_page kz_card"},z={class:"fsc mb20"};var K=g(l({name:"specificDataDetails",setup(l){const g=m().query.id,K=o([]),_=o(1),k=o(50),h=o(0),B=o(!1),D=()=>{I()},I=()=>{B.value=!0,y({current:_.value,size:k.value,id:g}).then((a=>{1==a.status&&(h.value=a.body.total,K.value=a.body.records),B.value=!1})).catch((()=>{B.value=!1}))};I();const L=o(),T=o(),x=i((()=>T.value&&!T.value.selIdList.length)),C=async()=>{L.value.setLoading(!0);const a=await b({list:T.value.selIdList});L.value.close(a.message),T.value.clear()};return(l,o)=>{const i=v("loading");return n((r(),u("div",j,[d("div",z,[c(t,{total:h.value},null,8,["total"]),c(s,{ref_key:"topBtnRef",ref:L,type:"sync",syncbtn:"","sync-api":p(f),"sync-disabled":p(x),onSync:C},null,8,["sync-api","sync-disabled"])]),c(e,{ref_key:"tableRef",ref:T,data:K.value},null,8,["data"]),c(a,{page:_.value,"onUpdate:page":o[0]||(o[0]=a=>_.value=a),size:k.value,"onUpdate:size":o[1]||(o[1]=a=>k.value=a),total:h.value,onChange:D},null,8,["page","size","total"])])),[[i,B.value]])}}}),[["__scopeId","data-v-e76464b4"]]);export{K as default};