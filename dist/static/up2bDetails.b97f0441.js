import{K as a}from"./KzTopBtns.840b738a.js";import{K as e}from"./KzDmpTitle.9b0cc381.js";import{K as t}from"./KzEmpty.640dfbae.js";import{K as s}from"./KzPage.0e73684e.js";import{_ as l,m as o,O as r,P as p}from"./index.a202d357.js";import{H as i,u as c,g as n,_ as d,o as u,I as y,J as b,a as m,B as v,c as f,w as _,a2 as g,ay as z,b as j,ae as w}from"./vue.fa004e33.js";import{g as K,b as h,s as k}from"./myData.c30a8b4b.js";import"./KzDialog.8a40b047.js";import"./tinymce.50e98bcc.js";const x={class:"kz_card my_up2b_page"},B={class:"fsc f1"},D={class:"dmp_table"},H={style:{width:"100px"}};var q=l(i({setup(l){const i=o(),q=c((()=>i.state.addressHash)),I=c((()=>i.state.typeHash)),P=z();P.query.id;const S=n([]),T=n(0),U=n(10),C=n(1),E=n(!1),J=async()=>{E.value=!0;const a={current:C.value,size:U.value,id:P.query.id},{status:e,body:t}=await h(a);E.value=!1,e&&(T.value=t.total,S.value=t.records)};J();const L=n([]),O=n(),R=n(),A=c((()=>!L.value.length)),F=async()=>{R.value.setLoading(!0);const a=await k({list:L.value,type:1});R.value.close(a.message),L.value=[],O.value.clearSelection()};return(l,o)=>{const i=j("el-table-column"),c=j("el-tooltip"),n=j("el-table"),z=w("loading");return d((u(),y("div",x,[b("div",B,[m(e,{total:T.value,class:"pt20 pb20 ml16"},null,8,["total"]),m(a,{ref_key:"topBtnRef",ref:R,type:"sync",syncbtn:"","sync-api":v(K),"sync-disabled":v(A),class:"topbtns mr20",onSync:F},null,8,["sync-api","sync-disabled"])]),b("div",D,[d((u(),f(n,{data:S.value,size:"large","row-class-name":"my-data-table-row"},{empty:_((()=>[m(t)])),default:_((()=>[m(i,{type:"selection",width:"50"}),m(i,{property:"id",label:"序号"}),m(i,{property:"name",label:"企业名称"}),m(i,{property:"contact",label:"联系人"}),m(i,{property:"mobiles",label:"联系方式"}),m(i,{property:"telephone",label:"固定电话"}),m(i,{property:"industry_id",label:"行业"},{default:_((a=>[b("div",null,g(v(r)(a.row.industry_id.split(","),v(I),"last")),1)])),_:1}),m(i,{property:"city",label:"地区"},{default:_((({row:a})=>[m(c,{effect:"dark",placement:"top"},{content:_((()=>[b("div",H,g(v(r)(v(p)(a.province,a.city,a.district),v(q))),1)])),default:_((()=>[b("div",null,g(v(r)(v(p)(a.province,a.city,a.district),v(q))),1)])),_:2},1024)])),_:1}),m(i,{property:"address",label:"地址"}),m(i,{property:"company_type",label:"企业类型"}),m(i,{property:"code",label:"统一社会信用代码"}),m(i,{property:"url",label:"企业官网"}),m(i,{property:"business_scope",label:"经营范围"})])),_:1},8,["data"])),[[z,E.value]])]),m(s,{page:C.value,"onUpdate:page":o[0]||(o[0]=a=>C.value=a),size:U.value,"onUpdate:size":o[1]||(o[1]=a=>U.value=a),total:T.value,onChange:J},null,8,["page","size","total"])])),[[z,E.value]])}}}),[["__scopeId","data-v-6ee12c5f"]]);export{q as default};
