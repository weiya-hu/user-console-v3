import{m as e,P as t,Q as a,R as l}from"./index.7f252a0e.js";import{K as s}from"./KzEmpty.61a513e5.js";import{H as r,u as d,g as o,r as i,o as p,I as n,a as c,w as u,J as f,a3 as y,B as w,c as h,a1 as m,Y as _}from"./vue.a499711c.js";const b={style:{width:"200px"},class:"fcc"},v={class:"els2"},x=["innerHTML"],k={style:{width:"100px"},class:"fcc"},g={class:"els2"},H={style:{width:"100px"}},T={class:"els2"},j={style:{width:"200px"},class:"fcc"},K={class:"els2"},L={style:{width:"100px"}},z={class:"els2"},C={style:{width:"200px"}},I={class:"els2"},M=r({name:"KzCompanyTable",props:{data:null,oheight:{default:120}},setup(r,{expose:M}){const R=e(),S=d((()=>R.state.typeHash)),B=d((()=>R.state.addressHash)),E=d((()=>R.state.companyType)),J=o([]),P=e=>{J.value=e.map((e=>e.id))},Q=o();return M({selIdList:J,clear:()=>{J.value=[],Q.value.clearSelection()}}),(e,d)=>{const o=i("el-table-column"),M=i("el-tooltip"),R=i("el-link"),J=i("el-table");return p(),n("div",{class:"dmp_table company_table",style:_({height:`calc( 100% - ${r.oheight}px )`})},[c(J,{ref_key:"tableRef",ref:Q,data:r.data,style:{width:"100%"},height:"100%",onSelectionChange:P},{empty:u((()=>[c(s)])),default:u((()=>[c(o,{type:"selection",width:"50"}),c(o,{type:"index",label:"序号",width:"60"}),c(o,{property:"name",label:"企业名称"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",b,y(e.row.name),1)])),default:u((()=>[f("div",v,y(e.row.name),1)])),_:2},1024)])),_:1}),c(o,{property:"contact",label:"联系人",width:"80"}),c(o,{property:"mobiles",label:"联系方式",width:"110"},{default:u((e=>[f("div",{innerHTML:e.row.mobiles},null,8,x)])),_:1}),c(o,{property:"telephone",label:"固定电话",width:"120"}),c(o,{property:"industry_id",label:"行业分类",width:"100"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",k,y(w(t)(e.row.industry_id,w(S))),1)])),default:u((()=>[f("div",g,y(w(t)(e.row.industry_id,w(S),"last")),1)])),_:2},1024)])),_:1}),c(o,{property:"city",label:"地区",width:"120"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",H,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(B))),1)])),default:u((()=>[f("div",T,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(B))),1)])),_:2},1024)])),_:1}),c(o,{property:"address",label:"详细地址"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",j,y(e.row.address),1)])),default:u((()=>[f("div",K,y(e.row.address),1)])),_:2},1024)])),_:1}),c(o,{property:"code",label:"统一社会信用代码",width:"165"}),c(o,{property:"url",label:"企业官网"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",L,y(e.row.url),1)])),default:u((()=>[c(R,{type:"primary",target:"_blank",href:e.row.url,underline:!1},{default:u((()=>[f("span",z,y(e.row.url),1)])),_:2},1032,["href"])])),_:2},1024)])),_:1}),c(o,{property:"business_scope",label:"经营范围",width:"200"},{default:u((e=>[c(M,{effect:"dark",placement:"top"},{content:u((()=>[f("div",C,y(e.row.business_scope),1)])),default:u((()=>[f("div",I,y(e.row.business_scope),1)])),_:2},1024)])),_:1}),w(E).length?(p(),h(o,{key:0,property:"company_type",label:"企业类型",width:"120"},{default:u((e=>{var t;return[f("div",null,y(null==(t=w(E).find((t=>t.id==e.row.company_type)))?void 0:t.name),1)]})),_:1})):m("",!0),c(o,{property:"source",label:"来源",width:"100"},{default:u((e=>[f("div",null,y(w(l)(e.row.source)),1)])),_:1})])),_:1},8,["data"])],4)}}});export{M as _};