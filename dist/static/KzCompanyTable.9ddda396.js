import{m as e,R as t,S as a,T as l}from"./index.829e2404.js";import{K as s}from"./KzEmpty.ce78a8a2.js";import{H as r,u as d,g as o,b as i,o as p,I as c,a as n,w as u,J as f,a2 as y,B as w,c as h,a0 as _,X as m}from"./vue.fa004e33.js";const b={style:{width:"200px"},class:"fcc"},v={class:"els2"},x=["innerHTML"],k={style:{width:"100px"},class:"fcc"},g={class:"els2"},H={style:{width:"100px"}},T={class:"els2"},j={style:{width:"200px"},class:"fcc"},L={class:"els2"},S={style:{width:"100px"}},I={class:"els2"},K={style:{width:"200px"}},M={class:"els2"},R=r({props:{data:null,oheight:{default:120}},setup(r,{expose:R}){const z=e(),B=d((()=>z.state.typeHash)),C=d((()=>z.state.addressHash)),E=d((()=>z.state.companyType)),J=o([]),X=e=>{J.value=e.map((e=>e.id))},$=o();return R({selIdList:J,clear:()=>{J.value=[],$.value.clearSelection()}}),(e,d)=>{const o=i("el-table-column"),R=i("el-tooltip"),z=i("el-link"),J=i("el-table");return p(),c("div",{class:"dmp_table company_table",style:m({height:`calc( 100% - ${r.oheight}px )`})},[n(J,{ref_key:"tableRef",ref:$,data:r.data,style:{width:"100%"},height:"100%",onSelectionChange:X},{empty:u((()=>[n(s)])),default:u((()=>[n(o,{type:"selection",width:"50",fixed:"left"}),n(o,{type:"index",label:"序号",width:"60"}),n(o,{property:"name",label:"企业名称"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",b,y(e.row.name),1)])),default:u((()=>[f("div",v,y(e.row.name),1)])),_:2},1024)])),_:1}),n(o,{property:"contact",label:"联系人",width:"80"}),n(o,{property:"mobiles",label:"联系方式",width:"110"},{default:u((e=>[f("div",{innerHTML:e.row.mobiles},null,8,x)])),_:1}),n(o,{property:"telephone",label:"固定电话",width:"120"}),n(o,{property:"industry_id",label:"行业分类",width:"100"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",k,y(w(t)(e.row.industry_id,w(B))),1)])),default:u((()=>[f("div",g,y(w(t)(e.row.industry_id,w(B),"last")),1)])),_:2},1024)])),_:1}),n(o,{property:"city",label:"地区",width:"120"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",H,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(C))),1)])),default:u((()=>[f("div",T,y(w(t)(w(a)(e.row.province,e.row.city,e.row.district),w(C))),1)])),_:2},1024)])),_:1}),n(o,{property:"address",label:"详细地址"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",j,y(e.row.address),1)])),default:u((()=>[f("div",L,y(e.row.address),1)])),_:2},1024)])),_:1}),n(o,{property:"code",label:"统一社会信用代码",width:"165"}),n(o,{property:"url",label:"企业官网"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",S,y(e.row.url),1)])),default:u((()=>[n(z,{type:"primary",target:"_blank",href:e.row.url,underline:!1},{default:u((()=>[f("span",I,y(e.row.url),1)])),_:2},1032,["href"])])),_:2},1024)])),_:1}),n(o,{property:"business_scope",label:"经营范围",width:"200"},{default:u((e=>[n(R,{effect:"dark",placement:"top"},{content:u((()=>[f("div",K,y(e.row.business_scope),1)])),default:u((()=>[f("div",M,y(e.row.business_scope),1)])),_:2},1024)])),_:1}),w(E).length?(p(),h(o,{key:0,property:"company_type",label:"企业类型",width:"120"},{default:u((e=>{var t;return[f("div",null,y(null==(t=w(E).find((t=>t.id==e.row.company_type)))?void 0:t.name),1)]})),_:1})):_("",!0),n(o,{property:"source",label:"来源",width:"100"},{default:u((e=>[f("div",null,y(w(l)(e.row.source)),1)])),_:1})])),_:1},8,["data"])],4)}}});export{R as _};
