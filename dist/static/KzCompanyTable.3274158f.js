import{m as e,O as t,P as a,Q as l}from"./index.f91ef24c.js";import{K as s}from"./KzEmpty.a0bcbd2b.js";import{H as r,u as d,g as o,b as i,o as p,I as c,a as n,w as f,J as u,a2 as y,B as w,c as h,a0 as _,X as m}from"./vue.fa004e33.js";const b={style:{width:"200px"},class:"fcc"},v={class:"els2"},x=["innerHTML"],k={style:{width:"100px"},class:"fcc"},g={class:"els2"},H={style:{width:"100px"}},j={class:"els2"},L={style:{width:"200px"},class:"fcc"},T={class:"els2"},I={style:{width:"100px"}},K={class:"els2"},M={style:{width:"200px"}},S={class:"els2"},z=r({props:{data:null,oheight:{default:120}},setup(r,{expose:z}){const B=e(),C=d((()=>B.state.typeHash)),E=d((()=>B.state.addressHash)),J=d((()=>B.state.companyType)),O=o([]),P=e=>{O.value=e.map((e=>e.id))},Q=o();return z({selIdList:O,clear:()=>{O.value=[],Q.value.clearSelection()}}),(e,d)=>{const o=i("el-table-column"),z=i("el-tooltip"),B=i("el-link"),O=i("el-table");return p(),c("div",{class:"dmp_table company_table",style:m({height:`calc( 100% - ${r.oheight}px )`})},[n(O,{ref_key:"tableRef",ref:Q,data:r.data,style:{width:"100%"},height:"100%",onSelectionChange:P},{empty:f((()=>[n(s)])),default:f((()=>[n(o,{type:"selection",width:"50",fixed:"left"}),n(o,{type:"index",label:"序号",width:"60"}),n(o,{property:"name",label:"企业名称"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",b,y(e.row.name),1)])),default:f((()=>[u("div",v,y(e.row.name),1)])),_:2},1024)])),_:1}),n(o,{property:"contact",label:"联系人",width:"80"}),n(o,{property:"mobiles",label:"联系方式",width:"110"},{default:f((e=>[u("div",{innerHTML:e.row.mobiles},null,8,x)])),_:1}),n(o,{property:"telephone",label:"固定电话",width:"120"}),n(o,{property:"industry_id",label:"行业分类",width:"100"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",k,y(w(t)(e.row.industry_id,w(C))),1)])),default:f((()=>[u("div",g,y(w(t)(e.row.industry_id,w(C),"last")),1)])),_:2},1024)])),_:1}),n(o,{property:"city",label:"地区",width:"120"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",H,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(E))),1)])),default:f((()=>[u("div",j,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(E))),1)])),_:2},1024)])),_:1}),n(o,{property:"address",label:"详细地址"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",L,y(e.row.address),1)])),default:f((()=>[u("div",T,y(e.row.address),1)])),_:2},1024)])),_:1}),n(o,{property:"code",label:"统一社会信用代码",width:"165"}),n(o,{property:"url",label:"企业官网"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",I,y(e.row.url),1)])),default:f((()=>[n(B,{type:"primary",target:"_blank",href:e.row.url,underline:!1},{default:f((()=>[u("span",K,y(e.row.url),1)])),_:2},1032,["href"])])),_:2},1024)])),_:1}),n(o,{property:"business_scope",label:"经营范围",width:"200"},{default:f((e=>[n(z,{effect:"dark",placement:"top"},{content:f((()=>[u("div",M,y(e.row.business_scope),1)])),default:f((()=>[u("div",S,y(e.row.business_scope),1)])),_:2},1024)])),_:1}),w(J).length?(p(),h(o,{key:0,property:"company_type",label:"企业类型",width:"120"},{default:f((e=>{var t;return[u("div",null,y(null==(t=w(J).find((t=>t.id==e.row.company_type)))?void 0:t.name),1)]})),_:1})):_("",!0),n(o,{property:"source",label:"来源",width:"100"},{default:f((e=>[u("div",null,y(w(l)(e.row.source)),1)])),_:1})])),_:1},8,["data"])],4)}}});export{z as _};
