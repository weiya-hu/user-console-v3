import{H as a,g as e,o as t,I as l,J as s,_ as o,c as d,w as p,a as i,P as r,aa as u,a1 as c,ay as m,b as n,ae as v}from"./vue.fa004e33.js";import{K as b}from"./KzDataTable.c326e3bd.js";import{K as y}from"./KzPage.d24cd6e4.js";import{K as f}from"./Kzdialog.36df6b19.js";import{K as w}from"./KzEmpty.a0bcbd2b.js";import{c as h,f as _}from"./custom.4c8615f2.js";import{_ as g}from"./index.f91ef24c.js";import"./date.23847c74.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const j={class:"kz_card"},z={class:"detail_card"},K={class:"cms_table"},k=c("删除");var x=g(a({setup(a){const c=e(!1),g=e([]),x=e(1),I=e(10),U=e(0),V=e(),C=m(),D=e(!1),P=C.query.id,q=e([{type:"select",width:80,prop:"select"},{type:"text",lable:"ID",prop:"id",width:150},{type:"img",lable:"海报",prop:"thumb_url",width:150},{type:"text",lable:"名称",prop:"name",width:160},{type:"date",lable:"创建日期",prop:"create_time",width:130}]),E=async()=>{const{status:a,body:e}=await h({id:P},3);a&&(g.value=e,U.value=e.length)};E();const H=async()=>{const{status:a}=await _({id:V.value});1===a&&(E(),D.value=!1)};return(a,e)=>{const m=n("el-link"),h=n("el-table-column"),_=n("el-table"),C=v("loading");return t(),l("div",j,[s("div",z,[s("div",K,[o((t(),d(_,{data:g.value,style:{width:"100%"},"row-class-name":"my-data-table-row"},{empty:p((()=>[i(w)])),default:p((()=>[(t(!0),l(r,null,u(q.value,((a,e)=>(t(),d(b,{key:e,type:a.type,width:a.width,lable:a.lable,prop:a.prop},null,8,["type","width","lable","prop"])))),128)),i(h,{width:"180",label:"操作"},{default:p((({row:a})=>[s("div",null,[i(m,{type:"primary",onClick:e=>{return t=a.id,V.value=t,void(D.value=!0);var t}},{default:p((()=>[k])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])),[[C,c.value]])]),i(y,{page:x.value,"onUpdate:page":e[0]||(e[0]=a=>x.value=a),size:I.value,"onUpdate:size":e[1]||(e[1]=a=>I.value=a),total:U.value},null,8,["page","size","total"]),i(f,{modelValue:D.value,"onUpdate:modelValue":e[2]||(e[2]=a=>D.value=a),msg:"确认删除这条数据吗?",onSure:H},null,8,["modelValue"])])])}}}),[["__scopeId","data-v-96df0680"]]);export{x as default};
