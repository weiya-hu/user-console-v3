import{H as a,g as t,o as e,I as s,a as r,w as o,B as i,a2 as l,a3 as c,J as d,ay as n,r as m}from"./vue.a499711c.js";import{c as u}from"./myWork.c03d67ca.js";import{c as f}from"./custom.9ab95a7d.js";import{_ as p}from"./index.fde176ed.js";import"./tinymce.275386ab.js";const v={class:"article_details"},b=l("软文"),y=l("软文详情"),_={class:"content"},j={class:"title"},h=["innerHTML"];var k=p(a({name:"articleDetails",setup(a){const p=n(),k=p.meta.father.split("/")[1],w=p.query.id,H=t({title:"",content:""});return(async()=>{const a="myWork"==k?await u({id:w}):await f({id:w},1);1==a.status&&(H.value=a.body)})(),(a,t)=>{const n=m("el-breadcrumb-item"),u=m("el-breadcrumb");return e(),s("div",v,[r(u,{separator:"/"},{default:o((()=>[r(n,{to:{path:"/"+i(k)}},{default:o((()=>[l(c("myWork"==i(k)?"我的作品库":"个性化内容库"),1)])),_:1},8,["to"]),r(n,{to:{path:"/"+i(k)+"/article"}},{default:o((()=>[b])),_:1},8,["to"]),r(n,null,{default:o((()=>[y])),_:1})])),_:1}),d("div",_,[d("div",j,c(H.value.title),1),d("div",{innerHTML:H.value.content},null,8,h)])])}}}),[["__scopeId","data-v-f02e34b8"]]);export{k as default};