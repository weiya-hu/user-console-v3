import{K as a}from"./KzEmpty.61a513e5.js";import{K as e}from"./KzPage.9312e74c.js";import{_ as t,m as l}from"./index.7f252a0e.js";import{H as r,g as s,o,I as p,J as d,a as u,w as i,$ as y,c as n,a3 as m,B as c,av as b,aw as v,a2 as f,ay as _,r as g,ad as w}from"./vue.a499711c.js";import{f as z}from"./date.23847c74.js";import{u as j}from"./myData.a96b2fbf.js";import"./tinymce.275386ab.js";const h={class:"kz_card my_up2b_page"},K={class:"fsc f1"},D=(a=>(b("data-v-57e95f7e"),a=a(),v(),a))((()=>d("div",{class:"tips"},"采购商详情",-1))),H={class:"btns"},k=f("同步数据"),x={class:"mytable"};var I=t(r({name:"buyerDetails",setup(t){const r=l();s(r.state.addressHash);_().query.id;const b=s([]),v=s(0),f=s(10),I=s(1),M=s(!1),U=async()=>{M.value=!0;const a={current:I.value,type:1,size:10},{status:e,body:t}=await j(a);M.value=!1,e&&(v.value=t.total,b.value=t.records)};return U(),(t,l)=>{const r=g("el-button"),s=g("el-table-column"),_=g("el-table"),j=w("loading");return o(),p("div",h,[d("div",K,[D,d("div",H,[u(r,{type:"primary",plain:""},{default:i((()=>[k])),_:1})])]),d("div",x,[y((o(),n(_,{data:b.value,size:"large","row-class-name":"my-data-table-row"},{empty:i((()=>[u(a)])),default:i((()=>[u(s,{type:"selection",width:"50"}),u(s,{property:"num",label:"序号"}),u(s,{property:"name",label:"企业名称"}),u(s,{property:"contact",label:"联系人"}),u(s,{property:"mobiles",label:"联系方式"}),u(s,{property:"email",label:"邮箱"}),u(s,{property:"country_id",label:"地区"}),u(s,{property:"address",label:"公司地址"}),u(s,{property:"url",label:"企业官网"}),u(s,{property:"code",label:"HS编码"}),u(s,{property:"product_number",label:"数量"}),u(s,{property:"product_weight",label:"重量（kg）"}),u(s,{property:"shipment_port",label:"出货港口"}),u(s,{property:"unload_port",label:"卸货港口"}),u(s,{property:"industry_id",label:"更新日期"},{default:i((({row:a})=>[d("div",null,m(c(z)(new Date(Number(a.create_time)),"yyyy-MM-dd")),1)])),_:1})])),_:1},8,["data"])),[[j,M.value]])]),u(e,{page:I.value,"onUpdate:page":l[0]||(l[0]=a=>I.value=a),size:f.value,"onUpdate:size":l[1]||(l[1]=a=>f.value=a),total:v.value,onChange:U},null,8,["page","size","total"])])}}}),[["__scopeId","data-v-57e95f7e"]]);export{I as default};