import{H as t,g as a,o as s,I as e,J as i,a2 as o,ay as c}from"./vue.fa004e33.js";import{c as r}from"./myWork.76487691.js";import{c as n}from"./custom.edbe711e.js";import{_ as l}from"./index.2739bd6f.js";import"./tinymce.50e98bcc.js";const d={class:"article_details"},m={class:"content"},u={class:"title"},v=["innerHTML"];var p=l(t({setup(t){const l=c(),p=l.meta.father.split("/")[3],f=l.query.id,y=a({title:"",content:""});return(async()=>{const t="mywork"===p?await r({id:f}):await n({id:f},1);t.status&&(y.value=t.body)})(),(t,a)=>(s(),e("div",d,[i("div",m,[i("div",u,o(y.value.title),1),i("div",{class:"article_content",innerHTML:y.value.content},null,8,v)])]))}}),[["__scopeId","data-v-2520d090"]]);export{p as default};
