import{f as e}from"./date.23847c74.js";import{K as a}from"./KzEmpty.d7f95ebf.js";import{K as l}from"./KzPage.270569e7.js";import{K as t}from"./KzUpload.2bb38088.js";import{_ as r,m as u,A as s,P as d,S as o,e as i}from"./index.fde176ed.js";import{_ as p}from"./KzCascader.4e0226ed.js";import{H as n,u as c,g as m,j as v,o as y,I as f,J as _,a as g,w as b,B as h,$ as w,c as k,a3 as V,X as x,a1 as z,P as F,aa as j,av as q,aw as C,a2 as U,ax as K,r as T,ad as E}from"./vue.a499711c.js";import{o as D,a as I}from"./seekAbroad.1e258099.js";import"./tinymce.275386ab.js";const M={class:"kz_card my_buyer_page dmp_page"},P={class:"fsc f1"},A=(e=>(q("data-v-0dd45d72"),e=e(),C(),e))((()=>_("div",{class:"card_title"},"采购商",-1))),H=U("上传数据"),N={class:"dmp_table"},S={class:"fcs"},$={class:"fcs"},B=U("详情"),J=U("---"),L=U("驳回原因"),R=U("删除"),X={class:"flexr"},G=U("取消"),O=U("确认");var Q=r(n({name:"buyer",setup(r){const n=u(),q=c((()=>n.state.typeHash)),C=m(0),U=m(10),Q=m(1);K();const W=m(!1),Y=m(!1),Z=m(!1),ee=m(),ae=m(),le=m();n.getCountryList().then((e=>{le.value=e}));const te=m({industryType:[],country:"",name:"",desc:"",updateFile:""}),re=m(),ue=m([]),se=v({industryType:[{required:!0,message:"请选择行业分类",trigger:"blur"}],country:[{required:!0,message:"请选择地区",trigger:"blur"},{required:!0,message:"请选择地区",trigger:"change"}],name:[{required:!0,message:"请输入供应商品",trigger:"change"},{required:!0,message:"请输入供应商品",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"change"},{required:!0,message:"请输入描述",trigger:"blur"}],updateFile:[{validator:(e,a,l)=>{switch(re.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件"));break;case"none":l(new Error("请添加文件"));break;default:l()}},trigger:"change"}]}),de=async()=>{W.value=!0;const e={current:Q.value,type:1,size:U.value},{status:a,body:l}=await D(e);W.value=!1,a&&(C.value=l.total,ue.value=l.records)};de();const oe=()=>{Z.value=!0},ie=()=>{ee.value.validate((e=>{if(!e)return!1;Y.value=!0,te.value.updateFile?ae.value.submit():ce()}))},pe=e=>{e?(re.value=e,te.value.updateFile="",ee.value.validateField("updateFile",(()=>null))):(re.value="",ee.value.clearValidate("updateFile"))},ne=e=>{te.value.updateFile="",re.value="none",ae.value.clear(),Y.value=!1,i("上传失败")},ce=e=>{I({attachment:e||"",demand_desc:te.value.desc,product_name:te.value.name,type:1,country_id:te.value.country,industry_id:te.value.industryType.join(",")}).then((e=>{e.status?(Z.value=!1,ee.value.resetFields(),Q.value=1,de()):(te.value.updateFile="",ae.value.clear()),Y.value=!1})).catch((()=>{Y.value=!1,ne()}))};return(r,u)=>{const i=T("el-icon"),n=T("el-button"),c=T("el-table-column"),m=T("el-link"),v=T("el-table"),K=T("el-form-item"),D=T("el-option"),I=T("el-select"),re=T("el-input"),me=T("el-form"),ve=T("el-dialog"),ye=E("loading");return y(),f("div",M,[_("div",P,[A,g(n,{type:"primary",class:"btns",onClick:oe},{default:b((()=>[g(i,{size:"14px",style:{"margin-right":"4px"}},{default:b((()=>[g(h(s))])),_:1}),H])),_:1})]),_("div",N,[w((y(),k(v,{data:ue.value,size:"large","row-class-name":"my-data-table-row"},{empty:b((()=>[g(a)])),default:b((()=>[g(c,{type:"selection",width:"50"}),g(c,{property:"id",label:"ID"}),g(c,{property:"industry_id",label:"行业分类"},{default:b((e=>[_("div",null,V(h(d)(e.row.industry_id.split(","),h(q),"last")),1)])),_:1}),g(c,{property:"country_id",label:"地区"}),g(c,{property:"product_name",label:"供应商品"}),g(c,{property:"demand_desc",label:"描述"}),g(c,{property:"create_time",label:"发起时间"},{default:b((({row:a})=>[_("div",null,V(h(e)(new Date(Number(a.create_time)),"yyyy-MM-dd")),1)])),_:1}),g(c,{property:"status",label:"状态"},{default:b((({row:e})=>[_("div",S,[_("div",{class:x(["status_dot",h(o)(e.status).className])},null,2),_("div",null,V(h(o)(e.status).text),1)])])),_:1}),g(c,{property:"user_name",label:"创建人"}),g(c,{label:"操作",width:"300"},{default:b((({row:e})=>[_("div",$,[4===e.status?(y(),k(m,{key:0,type:"primary",onClick:a=>r.$router.push("/product/dmp/myData/buyerdetails?id="+e.id)},{default:b((()=>[B])),_:2},1032,["onClick"])):z("",!0),2===e.status?(y(),k(m,{key:1,type:"primary"},{default:b((()=>[J])),_:1})):z("",!0),3===e.status?(y(),k(m,{key:2,type:"primary"},{default:b((()=>[L])),_:1})):z("",!0),2!==e.status?(y(),k(m,{key:3,type:"primary"},{default:b((()=>[R])),_:1})):z("",!0)])])),_:1})])),_:1},8,["data"])),[[ye,W.value]])]),g(l,{page:Q.value,"onUpdate:page":u[0]||(u[0]=e=>Q.value=e),size:U.value,"onUpdate:size":u[1]||(u[1]=e=>U.value=e),total:C.value,onChange:de},null,8,["page","size","total"]),g(ve,{modelValue:Z.value,"onUpdate:modelValue":u[8]||(u[8]=e=>Z.value=e),width:500,draggable:"",title:"添加需求","close-on-click-modal":!1},{footer:b((()=>[_("div",X,[g(n,{onClick:u[7]||(u[7]=e=>Z.value=!1)},{default:b((()=>[G])),_:1}),g(n,{type:"primary",onClick:ie},{default:b((()=>[O])),_:1})])])),default:b((()=>[_("div",null,[w((y(),k(me,{ref_key:"formRef",ref:ee,model:te.value,rules:se,"label-position":"left","label-width":"80px",class:"my_form"},{default:b((()=>[g(K,{label:"行业分类",required:"",prop:"industryType"},{default:b((()=>[g(p,{modelValue:te.value.industryType,"onUpdate:modelValue":u[2]||(u[2]=e=>te.value.industryType=e),type:"type"},null,8,["modelValue"])])),_:1}),g(K,{label:"地区",prop:"country"},{default:b((()=>[g(I,{modelValue:te.value.country,"onUpdate:modelValue":u[3]||(u[3]=e=>te.value.country=e),class:"sele_add",placeholder:"请选择地区",size:"large",clearable:""},{default:b((()=>[(y(!0),f(F,null,j(le.value,(e=>(y(),k(D,{key:e.code,label:e.country_name,value:e.code,size:"large"},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(K,{label:"供应商品",required:"",prop:"name",size:"large"},{default:b((()=>[g(re,{modelValue:te.value.name,"onUpdate:modelValue":u[4]||(u[4]=e=>te.value.name=e),placeholder:"请输入产品名称",clearable:""},null,8,["modelValue"])])),_:1}),g(K,{label:"描述",required:"",prop:"desc"},{default:b((()=>[g(re,{modelValue:te.value.desc,"onUpdate:modelValue":u[5]||(u[5]=e=>te.value.desc=e),type:"textarea",maxlength:"150","show-word-limit":"",class:"input_textarea",placeholder:"可简要描述对寻找地区的采购服务商的要求。",rows:3},null,8,["modelValue"])])),_:1}),g(K,{label:"上传附件",prop:"updateFile"},{default:b((()=>[g(t,{ref_key:"upload",ref:ae,modelValue:te.value.updateFile,"onUpdate:modelValue":u[6]||(u[6]=e=>te.value.updateFile=e),site:"dmp_attach",onChange:pe,onError:ne,onSuccess:ce},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[ye,Y.value]])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-0dd45d72"]]);export{Q as default};
