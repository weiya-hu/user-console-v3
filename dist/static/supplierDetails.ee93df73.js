import{K as a}from"./KzEmpty.61a513e5.js";import{K as e}from"./KzPage.9312e74c.js";import{_ as t,m as l}from"./index.7f252a0e.js";import{H as s,g as r,o as p,I as o,J as d,a as u,w as i,$ as y,c as n,a3 as c,B as m,av as b,aw as v,a2 as f,ay as _,r as g,ad as w}from"./vue.a499711c.js";import{f as z}from"./date.23847c74.js";import{u as j}from"./myData.a96b2fbf.js";import"./tinymce.275386ab.js";const h={class:"kz_card my_up2b_page"},K={class:"fsc f1"},D=(a=>(b("data-v-0fb87e5c"),a=a(),v(),a))((()=>d("div",{class:"tips"},"供应商详情",-1))),H={class:"btns"},k=f("同步数据"),x={class:"mytable"};var I=t(s({name:"supplierDetails",setup(t){const s=l();r(s.state.addressHash);_().query.id;const b=r([]),v=r(0),f=r(10),I=r(1),M=r(!1),U=async()=>{M.value=!0;const a={current:I.value,type:1,size:10},{status:e,body:t}=await j(a);M.value=!1,e&&(v.value=t.total,b.value=t.records)};return U(),(t,l)=>{const s=g("el-button"),r=g("el-table-column"),_=g("el-table"),j=w("loading");return p(),o("div",h,[d("div",K,[D,d("div",H,[u(s,{type:"primary",plain:""},{default:i((()=>[k])),_:1})])]),d("div",x,[y((p(),n(_,{data:b.value,size:"large","row-class-name":"my-data-table-row"},{empty:i((()=>[u(a)])),default:i((()=>[u(r,{type:"selection",width:"50"}),u(r,{property:"num",label:"序号"}),u(r,{property:"name",label:"企业名称"}),u(r,{property:"contact",label:"联系人"}),u(r,{property:"mobiles",label:"联系方式"}),u(r,{property:"email",label:"邮箱"}),u(r,{property:"country_id",label:"地区"}),u(r,{property:"address",label:"公司地址"}),u(r,{property:"url",label:"企业官网"}),u(r,{property:"code",label:"HS编码"}),u(r,{property:"product_number",label:"数量"}),u(r,{property:"product_weight",label:"重量（kg）"}),u(r,{property:"shipment_port",label:"出货港口"}),u(r,{property:"unload_port",label:"卸货港口"}),u(r,{property:"industry_id",label:"更新日期"},{default:i((({row:a})=>[d("div",null,c(m(z)(new Date(Number(a.create_time)),"yyyy-MM-dd")),1)])),_:1})])),_:1},8,["data"])),[[j,M.value]])]),u(e,{page:I.value,"onUpdate:page":l[0]||(l[0]=a=>I.value=a),size:f.value,"onUpdate:size":l[1]||(l[1]=a=>f.value=a),total:v.value,onChange:U},null,8,["page","size","total"])])}}}),[["__scopeId","data-v-0fb87e5c"]]);export{I as default};