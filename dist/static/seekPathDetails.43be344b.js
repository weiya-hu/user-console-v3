import{K as e}from"./KzEmpty.d7f95ebf.js";import{K as a}from"./KzPage.270569e7.js";import{_ as t,m as l,P as s,Q as r}from"./index.fde176ed.js";import{H as o,g as p,u as i,o as d,I as n,J as c,a as u,B as y,$ as m,c as b,w as v,a3 as f,ay as _,r as g,ad as h}from"./vue.a499711c.js";import{f as j}from"./date.23847c74.js";import{g as w,d as z,s as K}from"./seekPathPro.ba24cdc6.js";import{K as k}from"./KzDmpTitle.bdbf5a2d.js";import{K as x}from"./KzTopBtns.cf198609.js";import"./tinymce.275386ab.js";import"./KzDialog.552d8a23.js";const P={class:"kz_card dmp_page"},D={class:"fsc mb20"},B={class:"dmp_table",style:{height:"calc(100% - 120px)"}},H={style:{width:"100px"}};var S=t(o({name:"seekPathDetails",setup(t){const o=_(),S=l(),C=p(S.state.addressHash),I=i((()=>S.state.typeHash)),M=p([]),R=p(0),T=p(50),U=p(1),q=p(!1),E=async()=>{q.value=!0;const e={current:U.value,type:1,size:T.value,id:o.query.id},{status:a,body:t}=await z(e);q.value=!1,a&&(R.value=t.total,M.value=t.records)};E();const J=p([]),L=e=>{J.value=e.map((e=>e.id))},N=p(),Q=p(),$=i((()=>!J.value.length)),A=async()=>{Q.value.setLoading(!0);const e=await K({list:J.value,type:1});Q.value.close(e.message),J.value=[],N.value.clearSelection()};return(t,l)=>{const o=g("el-table-column"),p=g("el-tooltip"),i=g("el-table"),_=h("loading");return d(),n("div",P,[c("div",D,[u(k,{total:R.value},null,8,["total"]),u(x,{ref_key:"topBtnRef",ref:Q,type:"sync",syncbtn:"","sync-api":y(w),"sync-disabled":y($),onSync:A},null,8,["sync-api","sync-disabled"])]),c("div",B,[m((d(),b(i,{ref_key:"tableRef",ref:N,data:M.value,style:{width:"100%"},height:"100%",onSelectionChange:L},{empty:v((()=>[u(e)])),default:v((()=>[u(o,{type:"selection",width:"50",fixed:"left"}),u(o,{property:"num",label:"序号"}),u(o,{property:"name",label:"企业名称"}),u(o,{property:"contact",label:"联系人"}),u(o,{property:"mobiles",label:"联系方式"}),u(o,{property:"telephone",label:"固定电话"}),u(o,{property:"industry_id",label:"行业分类"},{default:v((e=>[c("div",null,f(y(s)(e.row.industry_id.split(","),y(I),"last")),1)])),_:1}),u(o,{property:"city",label:"地区"},{default:v((({row:e})=>[u(p,{effect:"dark",placement:"top"},{content:v((()=>[c("div",H,f(e.province>0&&y(s)(y(r)(e.province,e.city,e.district),C.value)),1)])),default:v((()=>[c("div",null,f(e.province>0&&y(s)(y(r)(e.province,e.city,e.district),C.value)),1)])),_:2},1024)])),_:1}),u(o,{property:"address",label:"详细地址"}),u(o,{property:"company_type",label:"企业类型"}),u(o,{property:"code",label:"统一社会信用代码"}),u(o,{property:"url",label:"企业官网"}),u(o,{property:"business_scope",label:"经营范围"}),u(o,{property:"sell_product",label:"主管产品"}),u(o,{property:"agent_product",label:"代理产品"}),u(o,{property:"business_countries",label:"销售国家"}),u(o,{property:"business_city",label:"销售城市"}),u(o,{property:"source",label:"来源"}),u(o,{property:"create_time",label:"更新日期"},{default:v((({row:e})=>[c("div",null,f(y(j)(new Date(Number(e.create_time)),"yyyy-MM-dd")),1)])),_:1})])),_:1},8,["data"])),[[_,q.value]])]),u(a,{page:U.value,"onUpdate:page":l[0]||(l[0]=e=>U.value=e),size:T.value,"onUpdate:size":l[1]||(l[1]=e=>T.value=e),total:R.value,onChange:E},null,8,["page","size","total"])])}}}),[["__scopeId","data-v-512f1667"]]);export{S as default};