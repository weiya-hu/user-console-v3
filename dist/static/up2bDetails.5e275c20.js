import{K as e}from"./KzTopBtns.06261704.js";import{K as a}from"./KzDmpTitle.4e45e537.js";import{K as t}from"./KzEmpty.9242962f.js";import{K as s}from"./KzPage.6eaab198.js";import{_ as l,m as o,S as p,T as r}from"./index.3ae4cc0f.js";import{H as i,u as d,g as n,_ as c,o as u,I as y,J as m,a as v,B as b,w as f,a2 as _,ay as g,b as h,ae as w}from"./vue.fa004e33.js";import{g as z,b as j,s as K}from"./myData.163ed039.js";import"./KzDialog.1b049ca4.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const k={class:"kz_card my_up2b_page dmp_page"},x={class:"fsc mb20"},S={class:"dmp_table"},T={style:{width:"100px"}},B={style:{width:"100px"}},D={class:"els"},H={style:{width:"100px"}},q={class:"els"};var C=l(i({setup(l){const i=o(),C=d((()=>i.state.addressHash)),I=d((()=>i.state.typeHash)),R=d((()=>i.state.companyType)),U=g();U.query.id;const E=n([]),J=n(0),L=n(10),P=n(1),A=n(!1),F=async()=>{A.value=!0;const e={current:P.value,size:L.value,id:U.query.id},{status:a,body:t}=await j(e);A.value=!1,a&&(J.value=t.total,E.value=t.records)};F();const G=n([]),M=e=>{G.value=e.map((e=>e.id))},N=n(),O=n(),Q=d((()=>!G.value.length)),V=async()=>{O.value.setLoading(!0);const e=await K({list:G.value,type:1});O.value.close(e.message),G.value=[],N.value.clearSelection()};return(l,o)=>{const i=h("el-table-column"),d=h("el-tooltip"),n=h("el-table"),g=w("loading");return c((u(),y("div",k,[m("div",x,[v(a,{total:J.value},null,8,["total"]),v(e,{ref_key:"topBtnRef",ref:O,type:"sync",syncbtn:"","sync-api":b(z),"sync-disabled":b(Q),onSync:V},null,8,["sync-api","sync-disabled"])]),m("div",S,[v(n,{ref_key:"tableRef",ref:N,data:E.value,height:"100%",onSelectionChange:M},{empty:f((()=>[v(t)])),default:f((()=>[v(i,{type:"selection",width:"50"}),v(i,{property:"id",label:"序号"}),v(i,{property:"name",label:"企业名称"}),v(i,{property:"contact",label:"联系人"}),v(i,{property:"mobiles",label:"联系方式"}),v(i,{property:"telephone",label:"固定电话"}),v(i,{property:"industry_id",label:"行业"},{default:f((e=>[m("div",null,_(b(p)(e.row.industry_id.split(","),b(I),"last")),1)])),_:1}),v(i,{property:"city",label:"地区"},{default:f((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:f((()=>[m("div",T,_(b(p)(b(r)(e.province,e.city,e.district),b(C))),1)])),default:f((()=>[m("div",null,_(b(p)(b(r)(e.province,e.city,e.district),b(C))),1)])),_:2},1024)])),_:1}),v(i,{property:"address",label:"详细地址"},{default:f((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:f((()=>[m("div",B,_(e.address),1)])),default:f((()=>[m("div",D,_(e.address),1)])),_:2},1024)])),_:1}),v(i,{property:"company_type",label:"企业类型"},{default:f((e=>{var a;return[m("div",null,_(null==(a=b(R).find((a=>a.id===e.row.company_type)))?void 0:a.name),1)]})),_:1}),v(i,{property:"code",label:"统一社会信用代码"}),v(i,{property:"url",label:"企业官网"}),v(i,{property:"business_scope",label:"经营范围"},{default:f((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:f((()=>[m("div",H,_(e.business_scope),1)])),default:f((()=>[m("div",q,_(e.business_scope),1)])),_:2},1024)])),_:1})])),_:1},8,["data"])]),v(s,{page:P.value,"onUpdate:page":o[0]||(o[0]=e=>P.value=e),size:L.value,"onUpdate:size":o[1]||(o[1]=e=>L.value=e),total:J.value,onChange:F},null,8,["page","size","total"])])),[[g,A.value]])}}}),[["__scopeId","data-v-1b6bba15"]]);export{C as default};
