import{K as a}from"./KzDataTable.cbfc5570.js";import{K as e}from"./KzPage.270569e7.js";import{K as t}from"./KzEmpty.d7f95ebf.js";import{_ as l}from"./index.fde176ed.js";import{H as s,g as p,o as d,I as o,J as i,$ as r,c as u,w as m,a as c,P as n,aa as b,a2 as v,r as y,ad as w}from"./vue.a499711c.js";import"./date.23847c74.js";import"./tinymce.275386ab.js";const f={class:"kz_card"},h={class:"detail_card"},_={class:"cms_table"},g=v("删除");var j=l(s({name:"posterDetail",setup(l){const s=p(!1),v=p([]),j=p(1),z=p(10),K=p(0),x=p([{type:"select",width:80,prop:"select"},{type:"text",lable:"ID",prop:"id",width:150},{type:"img",lable:"图片",prop:"id",width:150},{type:"text",lable:"名称",prop:"title",width:140},{type:"date",lable:"创建日期",prop:"create_time",width:130},{type:"status_do",lable:"状态",prop:"status",width:100}]);return(l,p)=>{const k=y("el-link"),D=y("el-table-column"),I=y("el-table"),P=w("loading");return d(),o("div",f,[i("div",h,[i("div",_,[r((d(),u(I,{data:v.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:m((()=>[c(t)])),default:m((()=>[(d(!0),o(n,null,b(x.value,((e,t)=>(d(),u(a,{key:t,type:e.type,width:e.width,lable:e.lable,prop:e.prop},null,8,["type","width","lable","prop"])))),128)),c(D,{width:"180",label:"操作"},{default:m((()=>[i("div",null,[c(k,null,{default:m((()=>[g])),_:1})])])),_:1})])),_:1},8,["data"])),[[P,s.value]])]),c(e,{page:j.value,"onUpdate:page":p[0]||(p[0]=a=>j.value=a),size:z.value,"onUpdate:size":p[1]||(p[1]=a=>z.value=a),total:K.value},null,8,["page","size","total"])])])}}}),[["__scopeId","data-v-eabd0538"]]);export{j as default};
