import{H as s,g as e,o as t,I as a,J as c,a2 as i,ay as n}from"./vue.fa004e33.js";import{c as o}from"./custom.c2b9c7c3.js";import{_ as r}from"./index.e8eb8543.js";import"./tinymce.50e98bcc.js";const l={class:"resource_details"},d={class:"content"},u={class:"title"},v=["innerHTML"];var m=r(s({setup(s){const r=n().query.id,m=e({title:"",content:""});return(async()=>{const s=await o({id:r},1);1==s.status&&(m.value=s.body)})(),(s,e)=>(t(),a("div",l,[c("div",d,[c("div",u,i(m.value.title),1),c("div",{class:"line_height_no",innerHTML:m.value.content},null,8,v)])]))}}),[["__scopeId","data-v-ec8e62e0"]]);export{m as default};
