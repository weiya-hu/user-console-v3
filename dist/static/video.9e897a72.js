import{i as a,K as e}from"./KzUpUser.3d19f9f5.js";import{K as t}from"./KzDataTable.c0012267.js";import{K as l}from"./KzPage.37ded4ad.js";import{K as s}from"./KzEmpty.5c4cf380.js";import{K as o}from"./KzDialog.e32b7bcd.js";import{a as u,b as d}from"./custom.c2b9c7c3.js";import{_ as i}from"./index.e8eb8543.js";import{H as p,g as r,o as c,I as m,J as n,a as v,w as b,B as y,_ as f,c as _,P as k,aa as w,a0 as h,av as g,aw as j,a1 as z,b as K,ae as V}from"./vue.fa004e33.js";import"./KzUpload.3a70b4b3.js";import"./date.23847c74.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const C={class:"kz_card"},U={class:"arl_card"},x={class:"arl_top"},D=(a=>(g("data-v-7b890fe3"),a=a(),j(),a))((()=>n("div",{class:"arl_title"},"视频库",-1))),I=z("同步数据"),S=["src"],P=z(" 新建  "),B={class:"cms_table"},E={class:"link_bts"},H=z("详情"),J=z("驳回原因"),T=z("删除"),$={key:3,class:"line"},q=z("- - -");var A=i(p({setup(i){const p=r([]),g=r([{type:"select",width:80,prop:"select"},{type:"text",lable:"需求ID",prop:"id",width:150},{type:"text",lable:"标题",prop:"title",width:140},{type:"text-tooltip",lable:"描述",prop:"detail",width:230},{type:"date",lable:"创建日期",prop:"create_time",width:130},{type:"status_do",lable:"状态",prop:"status",width:100},{type:"text",lable:"创建人",prop:"user_name",width:130}]),j=r(!1),z=r(1),A=r(10),F=r(0),G=r(!1),L=r(!1),M=r(""),N=r(!1),O=r(""),Q=async()=>{j.value=!0;const a=await u({size:A.value,current:z.value},4);j.value=!1,1===a.status&&(F.value=a.body.total,p.value=a.body.records)};Q();const R=()=>{d({id:M.value},4).then((a=>{1===a.status&&(Q(),L.value=!1)}))},W=()=>{G.value=!1,Q()};return(u,d)=>{const i=K("el-button"),r=K("el-link"),X=K("el-table-column"),Y=K("el-table"),Z=V("loading");return c(),m("div",C,[n("div",U,[n("div",x,[D,n("div",null,[v(i,{class:"bdc_btn"},{default:b((()=>[I])),_:1}),v(i,{type:"primary",onClick:d[0]||(d[0]=a=>G.value=!0)},{default:b((()=>[n("img",{src:y(a),alt:""},null,8,S),P])),_:1})])]),n("div",null,[n("div",B,[f((c(),_(Y,{data:p.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:b((()=>[v(s)])),default:b((()=>[(c(!0),m(k,null,w(g.value,((a,e)=>(c(),_(t,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128)),v(X,{width:"180",label:"操作"},{default:b((({row:a})=>[n("div",E,[4==a.status?(c(),_(r,{key:0,type:"primary",onClick:e=>u.$router.push("/product/cms/custom/videodetail?id="+a.id)},{default:b((()=>[H])),_:2},1032,["onClick"])):h("",!0),3==a.status?(c(),_(r,{key:1,type:"primary",onClick:e=>{O.value=a.fail_reason,N.value=!0}},{default:b((()=>[J])),_:2},1032,["onClick"])):h("",!0),2!=a.status?(c(),_(r,{key:2,type:"primary",onClick:e=>{return t=a.id,M.value=t,void(L.value=!0);var t}},{default:b((()=>[T])),_:2},1032,["onClick"])):h("",!0),1!=a.status&&2!=a.status?(c(),m("div",$)):h("",!0),2==a.status?(c(),_(r,{key:4,type:"primary",class:"t_btns"},{default:b((()=>[q])),_:1})):h("",!0)])])),_:1})])),_:1},8,["data"])),[[Z,j.value]])]),v(l,{page:z.value,"onUpdate:page":d[1]||(d[1]=a=>z.value=a),size:A.value,"onUpdate:size":d[2]||(d[2]=a=>A.value=a),total:F.value,onChange:Q},null,8,["page","size","total"])])]),v(e,{modelValue:G.value,"onUpdate:modelValue":d[3]||(d[3]=a=>G.value=a),type:4,onSubmitSuccess:W},null,8,["modelValue"]),v(o,{modelValue:L.value,"onUpdate:modelValue":d[4]||(d[4]=a=>L.value=a),msg:"确认删除这条数据吗?",onSure:R},null,8,["modelValue"]),v(o,{modelValue:N.value,"onUpdate:modelValue":d[5]||(d[5]=a=>N.value=a),msg:O.value,title:"驳回原因",btn:1},null,8,["modelValue","msg"])])}}}),[["__scopeId","data-v-7b890fe3"]]);export{A as default};
