import{_ as e}from"./index.e45ab2da.js";import{H as a,u as t,b as s,o as p,I as n,a as u,B as o,k as r}from"./vue.fa004e33.js";const g={class:"mypage"};var l=e(a({props:{page:null,total:{default:0},size:{default:10},hideSizes:{type:Boolean,default:!1}},emits:["update:page","change","update:size"],setup(e,{emit:a}){const l=e,i=t({get:()=>l.page,set:e=>{a("update:page",e)}}),d=t({get:()=>l.size,set:e=>{a("update:size",e)}}),c=e=>{a("update:page",e),a("change")},z=e=>{a("update:size",e),a("change")};return(a,t)=>{const l=s("el-pagination");return p(),n("div",g,[u(l,{currentPage:o(i),"onUpdate:currentPage":t[0]||(t[0]=e=>r(i)?i.value=e:null),"page-size":o(d),"onUpdate:page-size":t[1]||(t[1]=e=>r(d)?d.value=e:null),background:"",layout:e.hideSizes?"total, prev, pager, next, jumper":"total, sizes, prev, pager, next, jumper",total:e.total,"pager-count":9,"page-sizes":[10,20,30,50],onCurrentChange:c,onSizeChange:z},null,8,["currentPage","page-size","layout","total"])])}}}),[["__scopeId","data-v-26c7fe6c"]]);export{l as K};
