import{f as a}from"./date.23847c74.js";import{K as e}from"./KzDataUpUser.d8f531c4.js";import{K as t}from"./KzEmpty.61a513e5.js";import{K as l}from"./KzPage.9312e74c.js";import{u as s}from"./myData.a96b2fbf.js";import{_ as r,A as o}from"./index.7f252a0e.js";import{H as u,g as p,o as d,I as i,J as c,a as n,w as m,B as v,$ as y,c as b,Y as f,a3 as _,av as g,aw as w,a2 as z,r as j,ad as k}from"./vue.a499711c.js";import"./KzUpload.7b5bb174.js";import"./tinymce.275386ab.js";const K={class:"kz_card my_up2c_page"},C={class:"fsc f1"},U=(a=>(g("data-v-9a0b2884"),a=a(),w(),a))((()=>c("div",{class:"card_title"},"上传2C数据",-1))),h={class:"btns"},D=z("同步数据"),x=z("上传数据"),I={class:"mytable"},V={class:"ss"},A={class:"fcs"},M=z("详情");var S=r(u({name:"up2c",setup(r){const u=p([]),g=p(0),w=p(10),z=p(1),S=p(!1),$=p(!1),B=async()=>{S.value=!0;const a={current:z.value,type:2,size:w.value},{status:e,body:t}=await s(a);S.value=!1,e&&(g.value=t.total,u.value=t.records)};B();const E=()=>{z.value=1,B()};return(s,r)=>{const p=j("el-button"),H=j("el-icon"),J=j("el-table-column"),N=j("el-link"),P=j("el-table"),Y=k("loading");return d(),i("div",K,[c("div",C,[U,c("div",h,[n(p,{type:"primary",plain:""},{default:m((()=>[D])),_:1}),n(p,{type:"primary",onClick:r[0]||(r[0]=a=>$.value=!0)},{default:m((()=>[n(H,{size:"14px",style:{"margin-right":"4px"}},{default:m((()=>[n(v(o))])),_:1}),x])),_:1})])]),c("div",I,[y((d(),b(P,{data:u.value,size:"large","row-class-name":"my-data-table-row"},{empty:m((()=>[n(t)])),default:m((()=>[n(J,{type:"selection",width:"50"}),n(J,{property:"id",label:"ID"}),n(J,{property:"group_name",label:"人群名称"}),n(J,{property:"group_desc",label:"人群描述"}),n(J,{property:"status",label:"状态"},{default:m((({row:a})=>[c("div",V,[c("div",{class:"point",style:f(1==a.state?"background:#67C23A":"background:#2150ec")},null,4),c("span",null,_(1==a.state?"已受理":"已完结"),1)])])),_:1}),n(J,{property:"count",label:"种子用户数"}),n(J,{property:"create_time",label:"创建时间"},{default:m((({row:e})=>[c("div",null,_(v(a)(new Date(Number(e.create_time)),"yyyy-MM-dd")),1)])),_:1}),n(J,{property:"user_name",label:"创建人"}),n(J,{label:"操作",width:"300"},{default:m((({row:a})=>[c("div",A,[n(N,{type:"primary",onClick:e=>s.$router.push("/product/dmp/myData/up2cdetails?id="+a.id)},{default:m((()=>[M])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])),[[Y,S.value]])]),n(l,{page:z.value,"onUpdate:page":r[1]||(r[1]=a=>z.value=a),size:w.value,"onUpdate:size":r[2]||(r[2]=a=>w.value=a),total:g.value,onChange:B},null,8,["page","size","total"]),n(e,{modelValue:$.value,"onUpdate:modelValue":r[3]||(r[3]=a=>$.value=a),onSubmitSuccess:E},null,8,["modelValue"])])}}}),[["__scopeId","data-v-9a0b2884"]]);export{S as default};