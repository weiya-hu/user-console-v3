import{H as a,g as t,o as s,I as e,J as i,a2 as o,ay as c}from"./vue.fa004e33.js";import{c as r}from"./myWork.3323fe83.js";import{c as n}from"./custom.a53bd29c.js";import{_ as l}from"./index.e45ab2da.js";import"./tinymce.50e98bcc.js";const d={class:"article_details"},m={class:"content"},u={class:"title"},v=["innerHTML"];var p=l(a({setup(a){const l=c(),p=l.meta.father.split("/")[3],f=l.query.id,y=t({title:"",content:""});return(async()=>{const a="mywork"===p?await r({id:f}):await n({id:f},1);a.status&&(y.value=a.body)})(),(a,t)=>(s(),e("div",d,[i("div",m,[i("div",u,o(y.value.title),1),i("div",{class:"article_content",innerHTML:y.value.content},null,8,v)])]))}}),[["__scopeId","data-v-2520d090"]]);export{p as default};