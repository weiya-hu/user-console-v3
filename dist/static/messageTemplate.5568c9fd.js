import{H as a,g as e,o as t,I as l,J as s,a as i,ac as o,w as d,a2 as n,av as u,aw as c,a1 as r,b as p}from"./vue.fa004e33.js";import{K as m}from"./KzEmpty.21ade687.js";import{t as v,f,h as y,i as _}from"./message.d0315a76.js";import{K as h}from"./KzPage.4cc4cb8e.js";import{_ as w,E as b}from"./index.743440f4.js";import"./tinymce.50e98bcc.js";const g=a=>(u("data-v-627bd78e"),a=a(),c(),a),C={class:"send_list"},x={class:"flexb send_list_top"},k=g((()=>s("div",null,"短信模板",-1))),z={class:"flexr"},j=r("查询"),V=r(" 新建  "),K={class:"dmp_table"},U={class:"flexl"},I={class:"template_status"},B={class:"fcs"},E=r("编辑"),T=g((()=>s("div",{class:"line"},null,-1))),$=r("删除");var H=w(a({setup(a){const u=e(1),c=e(10),r=e(0),w=e(),g=e(),H=e({1:"未提交审核",2:"审核中",3:"审核通过",4:"未通过审核"}),J=async a=>{const e={current:u.value,size:c.value,keyword:a},{status:t,body:l}=await v(e);t&&(g.value=l.records,r.value=l.total)};J();return(a,e)=>{const v=p("el-input"),P=p("el-button"),q=p("KzIcon"),A=p("el-table-column"),D=p("el-switch"),F=p("el-link"),G=p("el-table");return t(),l("div",C,[s("div",x,[k,s("div",z,[i(v,{modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=a=>w.value=a),placeholder:"请输入模板名称搜索",class:"search_inpt",clearable:"",onInput:e[1]||(e[1]=()=>{!w.value&&J()}),onKeydown:e[2]||(e[2]=o((a=>J(w.value)),["enter"]))},null,8,["modelValue"]),i(P,{class:"bdc_btn",onClick:e[3]||(e[3]=a=>J())},{default:d((()=>[j])),_:1}),i(P,{type:"primary",onClick:e[4]||(e[4]=e=>a.$router.push("/product/notification/sms/addtemplate"))},{default:d((()=>[i(q,{href:"#icon-tianjia",size:"14px",color:"white",class:"add_need_icon"}),V])),_:1})])]),s("div",K,[i(G,{data:g.value,style:{width:"100%"}},{empty:d((()=>[i(m)])),default:d((()=>[i(A,{property:"title",label:"模板名称","min-width":"120"}),i(A,{property:"type",label:"短信类型","min-width":"110"},{default:d((({row:a})=>[s("div",null,n(1===a.type?"事务类":2===a.type?"通用/运营类":"---"),1)])),_:1}),i(A,{property:"content",label:"模板内容","min-width":"160","show-overflow-tooltip":""}),i(A,{property:"status",label:"状态","min-width":"130"},{default:d((({row:a})=>[s("div",U,[i(D,{modelValue:a.status,"onUpdate:modelValue":e=>a.status=e,"active-value":1,"inactive-value":0,disabled:1===a.template_status||4===a.template_status,onChange:e=>(async(a,e)=>{a?await f({id:e.id}):await y({id:e.id}),J()})(e,a)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"]),s("div",I,n(H.value[a.template_status]),1)])])),_:1}),i(A,{label:"操作",fixed:"right",width:"150"},{default:d((({row:e})=>[s("div",B,[i(F,{type:"primary",onClick:t=>a.$router.push("/product/notification/sms/addtemplate?id="+e.id)},{default:d((()=>[E])),_:2},1032,["onClick"]),T,i(F,{type:"primary",onClick:a=>(a=>{b.confirm("是否确认删除短信模板："+a.title,"操作提示",{showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"确认"}).then((async()=>{const{status:e}=await _({id:a.id});e&&J()})).catch((()=>{}))})(e)},{default:d((()=>[$])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),i(h,{page:u.value,"onUpdate:page":e[5]||(e[5]=a=>u.value=a),size:c.value,"onUpdate:size":e[6]||(e[6]=a=>c.value=a),total:r.value,onChange:e[7]||(e[7]=a=>J(w.value))},null,8,["page","size","total"])])])}}}),[["__scopeId","data-v-627bd78e"]]);export{H as default};