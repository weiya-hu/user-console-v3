import{K as e}from"./KzTopBtns.baf6f18f.js";import{K as a}from"./KzDmpTitle.75aa6a30.js";import{K as t}from"./KzEmpty.b11d49f7.js";import{K as s}from"./KzPage.9c6d1927.js";import{_ as l,m as o,T as p,U as r}from"./index.561f5261.js";import{H as i,u as d,g as n,$ as c,o as u,I as y,J as m,a as v,B as f,w as b,a3 as _,ay as g,r as h,ad as w}from"./vue.a499711c.js";import{g as z,b as j,s as K}from"./myData.86ad8934.js";import"./KzDialog.9ecb6295.js";import"./kzkf.83b11867.js";import"./tinymce.275386ab.js";const k={class:"kz_card my_up2b_page dmp_page"},x={class:"fsc mb20"},D={class:"dmp_table"},T={style:{width:"100px"}},B={style:{width:"100px"}},H={class:"els"},S={style:{width:"100px"}},U={class:"els"};var q=l(i({name:"up2bDetails",setup(l){const i=o(),q=d((()=>i.state.addressHash)),C=d((()=>i.state.typeHash)),I=d((()=>i.state.companyType)),R=g();R.query.id;const E=n([]),J=n(0),L=n(10),P=n(1),$=n(!1),A=async()=>{$.value=!0;const e={current:P.value,size:L.value,id:R.query.id},{status:a,body:t}=await j(e);$.value=!1,a&&(J.value=t.total,E.value=t.records)};A();const F=n([]),G=e=>{F.value=e.map((e=>e.id))},M=n(),N=n(),O=d((()=>!F.value.length)),Q=async()=>{N.value.setLoading(!0);const e=await K({list:F.value,type:1});N.value.close(e.message),F.value=[],M.value.clearSelection()};return(l,o)=>{const i=h("el-table-column"),d=h("el-tooltip"),n=h("el-table"),g=w("loading");return c((u(),y("div",k,[m("div",x,[v(a,{total:J.value},null,8,["total"]),v(e,{ref_key:"topBtnRef",ref:N,type:"sync",syncbtn:"","sync-api":f(z),"sync-disabled":f(O),onSync:Q},null,8,["sync-api","sync-disabled"])]),m("div",D,[v(n,{ref_key:"tableRef",ref:M,data:E.value,height:"100%",onSelectionChange:G},{empty:b((()=>[v(t)])),default:b((()=>[v(i,{type:"selection",width:"50"}),v(i,{property:"id",label:"序号"}),v(i,{property:"name",label:"企业名称"}),v(i,{property:"contact",label:"联系人"}),v(i,{property:"mobiles",label:"联系方式"}),v(i,{property:"telephone",label:"固定电话"}),v(i,{property:"industry_id",label:"行业"},{default:b((e=>[m("div",null,_(f(p)(e.row.industry_id.split(","),f(C),"last")),1)])),_:1}),v(i,{property:"city",label:"地区"},{default:b((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:b((()=>[m("div",T,_(f(p)(f(r)(e.province,e.city,e.district),f(q))),1)])),default:b((()=>[m("div",null,_(f(p)(f(r)(e.province,e.city,e.district),f(q))),1)])),_:2},1024)])),_:1}),v(i,{property:"address",label:"详细地址"},{default:b((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:b((()=>[m("div",B,_(e.address),1)])),default:b((()=>[m("div",H,_(e.address),1)])),_:2},1024)])),_:1}),v(i,{property:"company_type",label:"企业类型"},{default:b((e=>{var a;return[m("div",null,_(null==(a=f(I).find((a=>a.id===e.row.company_type)))?void 0:a.name),1)]})),_:1}),v(i,{property:"code",label:"统一社会信用代码"}),v(i,{property:"url",label:"企业官网"}),v(i,{property:"business_scope",label:"经营范围"},{default:b((({row:e})=>[v(d,{effect:"dark",placement:"top"},{content:b((()=>[m("div",S,_(e.business_scope),1)])),default:b((()=>[m("div",U,_(e.business_scope),1)])),_:2},1024)])),_:1})])),_:1},8,["data"])]),v(s,{page:P.value,"onUpdate:page":o[0]||(o[0]=e=>P.value=e),size:L.value,"onUpdate:size":o[1]||(o[1]=e=>L.value=e),total:J.value,onChange:A},null,8,["page","size","total"])])),[[g,$.value]])}}}),[["__scopeId","data-v-1b6bba15"]]);export{q as default};
