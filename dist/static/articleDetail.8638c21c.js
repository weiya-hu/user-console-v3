import{H as s,g as t,o as e,I as a,J as i,a2 as c,ay as n}from"./vue.fa004e33.js";import{c as o}from"./custom.c7312366.js";import{_ as r}from"./index.743440f4.js";import"./tinymce.50e98bcc.js";const l={class:"resource_details"},d={class:"content"},u={class:"title"},v=["innerHTML"];var m=r(s({setup(s){const r=n().query.id,m=t({title:"",content:""});return(async()=>{const s=await o({id:r},1);1==s.status&&(m.value=s.body)})(),(s,t)=>(e(),a("div",l,[i("div",d,[i("div",u,c(m.value.title),1),i("div",{class:"line_height_no",innerHTML:m.value.content},null,8,v)])]))}}),[["__scopeId","data-v-ec8e62e0"]]);export{m as default};
