import{K as e}from"./KzDmpTitle.df12656c.js";import{K as a}from"./KzPage.d24cd6e4.js";import{K as t}from"./KzEmpty.a0bcbd2b.js";import{f as l}from"./date.23847c74.js";import{m as s,O as r,P as o,Q as i,_ as d}from"./index.f91ef24c.js";import{H as u,u as n,g as p,b as c,o as v,I as y,a as m,w as f,J as b,a2 as _,B as g,X as h,ay as w,ae as z,_ as K}from"./vue.fa004e33.js";import{K as j}from"./KzTopBtns.a4b21265.js";import{g as L,s as x}from"./findC.371a6001.js";const H=["innerHTML"],I=u({props:{data:null,oheight:{default:120}},emits:["select"],setup(e,{expose:a,emit:d}){const u=s(),w=n((()=>u.state.typeHash)),z=n((()=>u.state.addressHash)),K=p([]),j=e=>{K.value=e.map((e=>e.id))},L=p();return a({selIdList:K,clear:()=>{K.value=[],L.value.clearSelection()}}),(a,s)=>{const d=c("el-table-column"),u=c("el-table");return v(),y("div",{class:"dmp_table user_table",style:h({height:`calc( 100% - ${e.oheight}px )`})},[m(u,{ref_key:"tableRef",ref:L,data:e.data,style:{width:"100%"},height:"100%",onSelectionChange:j},{empty:f((()=>[m(t)])),default:f((()=>[m(d,{type:"selection",width:"50"}),m(d,{property:"name",label:"姓名"}),m(d,{property:"sex",label:"性别"},{default:f((e=>[b("div",null,_(0==e.row.sex?"未知":1==e.row.sex?"男":"女"),1)])),_:1}),m(d,{property:"mobiles",label:"联系方式"},{default:f((e=>[b("div",{innerHTML:e.row.mobiles},null,8,H)])),_:1}),m(d,{property:"email",label:"邮箱"}),m(d,{property:"type",label:"从事行业"},{default:f((e=>[b("div",null,_(g(r)(e.row.industry_id.split(","),g(w),"last")),1)])),_:1}),m(d,{label:"地区"},{default:f((e=>[b("div",null,_(g(r)(g(o)(e.row.province,e.row.city,e.row.district),g(z))),1)])),_:1}),m(d,{property:"source",label:"来源"},{default:f((e=>[b("div",null,_(g(i)(e.row.source)),1)])),_:1}),m(d,{property:"update_time",label:"创建时间"},{default:f((e=>[b("div",null,_(g(l)(new Date(Number(e.row.update_time)),"yyyy-MM-dd")),1)])),_:1})])),_:1},8,["data"])],4)}}});const k={class:"user_data_details kz_card dmp_page"},M={class:"fsc mb20"};var T=d(u({props:{getListApi:null},setup(t){const l=t,s=p([]),r=p(0),o=p(1),i=p(50),d=p(!1),u=w(),c=()=>{d.value=!0,l.getListApi({size:i.value,current:o.value,did:u.query.id}).then((e=>{1==e.status&&(r.value=e.body.total,s.value=e.body.records),d.value=!1})).catch((()=>{d.value=!1}))};c();const f=p(),_=p(),h=n((()=>_.value&&!_.value.selIdList.length)),H=async()=>{f.value.setLoading(!0);const e=await x({list:_.value.selIdList});f.value.close(e.message),_.value.clear()};return(t,l)=>{const u=z("loading");return K((v(),y("div",k,[b("div",M,[m(e,{total:r.value},null,8,["total"]),m(j,{ref_key:"topBtnRef",ref:f,type:"sync",syncbtn:"","sync-api":g(L),"sync-disabled":g(h),onSync:H},null,8,["sync-api","sync-disabled"])]),m(I,{ref_key:"tableRef",ref:_,data:s.value},null,8,["data"]),m(a,{page:o.value,"onUpdate:page":l[0]||(l[0]=e=>o.value=e),size:i.value,"onUpdate:size":l[1]||(l[1]=e=>i.value=e),total:r.value,onChange:c},null,8,["page","size","total"])])),[[u,d.value]])}}}),[["__scopeId","data-v-7b1901e4"]]);export{T as K};
