import{H as a,g as s,o as t,I as e,J as i,a3 as n,ay as o}from"./vue.a499711c.js";import{c}from"./custom.2a9d3645.js";import{_ as l}from"./index.561f5261.js";import"./tinymce.275386ab.js";const r={class:"resource_details"},d={class:"content"},u={class:"title"},m=["innerHTML"];var v=l(a({name:"articleDetail",setup(a){const l=o().query.id,v=s({title:"",content:""});return(async()=>{const a=await c({id:l},1);1==a.status&&(v.value=a.body)})(),(a,s)=>(t(),e("div",r,[i("div",d,[i("div",u,n(v.value.title),1),i("div",{class:"line_height_no",innerHTML:v.value.content},null,8,m)])]))}}),[["__scopeId","data-v-ec8e62e0"]]);export{v as default};
