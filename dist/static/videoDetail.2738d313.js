import{H as a,g as e,o as t,I as l,J as s,$ as o,c as d,w as i,a as p,P as r,aa as u,a2 as m,ay as n,r as c,ad as v}from"./vue.a499711c.js";import{K as y}from"./KzDataTable.240a2ba0.js";import{K as b}from"./KzPage.9c6d1927.js";import{K as w}from"./Kzdialog.ae854dae.js";import{K as f}from"./KzEmpty.b11d49f7.js";import{c as _,g as h}from"./custom.2a9d3645.js";import{_ as j}from"./index.561f5261.js";import"./date.23847c74.js";import"./kzkf.83b11867.js";import"./tinymce.275386ab.js";const g={class:"kz_card"},z={class:"detail_card"},K={class:"cms_table"},k=m("删除");var x=j(a({name:"videoDetail",setup(a){const m=e(!1),j=e([]),x=e(1),D=e(10),I=e(0),U=e(),V=n(),C=e(!1),P=V.query.id,q=e([{type:"select",width:80,prop:"select"},{type:"text",lable:"ID",prop:"id",width:150},{type:"video",lable:"视频",prop:"video_url",width:150},{type:"text",lable:"名称",prop:"name",width:160},{type:"date",lable:"创建日期",prop:"create_time",width:130}]),E=async()=>{const{status:a,body:e}=await _({id:P},4);1===a&&(j.value=e.id?[e]:[],e.id?I.value=1:I.value=0)};E();const H=async()=>{const{status:a}=await h({id:U.value});1===a&&(E(),C.value=!1)};return(a,e)=>{const n=c("el-link"),_=c("el-table-column"),h=c("el-table"),V=v("loading");return t(),l("div",g,[s("div",z,[s("div",K,[o((t(),d(h,{data:j.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:i((()=>[p(f)])),default:i((()=>[(t(!0),l(r,null,u(q.value,((a,e)=>(t(),d(y,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128)),p(_,{width:"180",label:"操作"},{default:i((({row:a})=>[s("div",null,[p(n,{type:"primary",onClick:e=>{return t=a.id,U.value=t,void(C.value=!0);var t}},{default:i((()=>[k])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])),[[V,m.value]])]),p(b,{page:x.value,"onUpdate:page":e[0]||(e[0]=a=>x.value=a),size:D.value,"onUpdate:size":e[1]||(e[1]=a=>D.value=a),total:I.value},null,8,["page","size","total"]),p(w,{modelValue:C.value,"onUpdate:modelValue":e[2]||(e[2]=a=>C.value=a),msg:"确认删除这条数据吗?",onSure:H},null,8,["modelValue"])])])}}}),[["__scopeId","data-v-ee0a4066"]]);export{x as default};