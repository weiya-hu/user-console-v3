var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{H as s,u,g as i,j as p,o as n,I as c,J as v,a as m,w as f,B as y,a2 as b,W as w,c as _,a0 as g,_ as h,a1 as k,ax as V,b as j,ae as C}from"./vue.fa004e33.js";import{K as z}from"./KzDialog.d64f45a3.js";import{K as x}from"./KzPage.a22dbf56.js";import{K}from"./KzUpload.32a62374.js";import{_ as U}from"./KzCascader.371e5f18.js";import{K as O}from"./KzEmpty.01dcebe6.js";import{K as D}from"./KzDmpTitle.34b38ed1.js";import{m as P,B,O as E,P as S,R as q,e as N,E as F}from"./index.2739bd6f.js";import{f as H,h as I,i as M}from"./findB.3d235c1a.js";import{f as T}from"./date.23847c74.js";import"./kzkf.83b11867.js";import"./tinymce.50e98bcc.js";const R={class:"dmp_page kz_card"},J={class:"fsc mb20"},W=k("新增需求"),A={class:"dmp_table"},G={style:{width:"100px"},class:"fcc"},L={class:"els2"},Q={style:{width:"100px"},class:"fcc"},X={class:"els2"},Y={style:{width:"100px"},class:"fcc"},Z={class:"els2"},$={class:"fcs"},ee={key:0,class:"fcs"},ae=k("下载附件"),le={key:1,class:"line"},te=k("删除"),re={key:1,class:"fcs"},oe={key:2,class:"fcs"},de=k("拒绝原因"),se=v("div",{class:"line"},null,-1),ue=k("删除"),ie={key:3,class:"fcs"},pe=k("查看"),ne=v("div",{class:"line"},null,-1),ce=k("删除"),ve={class:"fcs fjend"},me=k("取消"),fe=k("提交"),ye=s((be=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&d(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&d(e,l,a[l]);return e})({},{name:"BSpecificData"}),a(be,l({setup(e){const a=P(),l=u((()=>a.state.typeHash)),t=u((()=>a.state.addressHash)),r=V(),o=i([]),d=i(1),s=i(10),k=i(0),ye=()=>{H({current:d.value,size:s.value}).then((e=>{1===e.status&&(o.value=e.body.records,k.value=e.body.total)}))};ye();const be=()=>{ye()},we=i([]),_e=e=>{we.value=e},ge=i(!1),he=i(""),ke=i({type:[],addr:[],people:"",desc:"",file:""}),Ve=i("none"),je=p({type:[{required:!0,message:"请选择行业",trigger:"change"}],addr:[{required:!0,message:"请选择地区",trigger:"change"}],people:[{required:!0,message:"请输入人群名称",trigger:"blur"}],desc:[{required:!0,message:"请输入人群描述",trigger:"blur"}],file:[{validator:(e,a,l)=>{switch(Ve.value){case"size":l(new Error("请添加大小不超过4M的文件"));break;case"type":l(new Error("请添加 .zip、.rar、.7z 格式的文件"));break;default:l()}},trigger:"change"}]}),Ce=i(!1),ze=i(),xe=e=>{e?(Ve.value=e,ke.value.file="",Ue.value.validateField("file",(()=>null))):(Ve.value="",Ue.value.clearValidate("file"))},Ke=i(!1),Ue=i(),Oe=e=>{I({attachment:e,province:Number(ke.value.addr[0])||"",city:Number(ke.value.addr[1])||"",district:Number(ke.value.addr[2])||"",group_desc:ke.value.desc,group_name:ke.value.people,industry_id:ke.value.type.join(",")}).then((e=>{1===e.status?(Pe(),ye()):(ke.value.file="",Ve.value="none",ze.value.clear(),Ke.value=!1)})).catch((()=>{De("")}))},De=e=>{ke.value.file="",Ve.value="none",ze.value.clear(),Ke.value=!1,N("上传失败")},Pe=()=>{Ce.value=!1,Ke.value=!1,Ve.value="none",ze.value.clear(),Ue.value.resetFields()},Be=e=>{Ke.value?F.confirm("正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{e()})).catch((()=>{})):e()},Ee=i(""),Se=i(!1),qe=e=>{Ee.value=e,Se.value=!0},Ne=()=>{M({id:Ee.value}).then((e=>{1===e.status&&(Se.value=!1,ye())}))};return(e,a)=>{const u=j("el-button"),i=j("el-table-column"),p=j("el-tooltip"),V=j("el-link"),P=j("el-table"),N=j("el-form-item"),F=j("el-input"),H=j("el-form"),I=j("el-dialog"),M=C("loading");return n(),c("div",R,[v("div",J,[m(D),m(u,{type:"primary",icon:y(B),onClick:a[0]||(a[0]=e=>Ce.value=!0)},{default:f((()=>[W])),_:1},8,["icon"])]),v("div",A,[m(P,{data:o.value,style:{width:"100%"},onSelectionChange:_e},{empty:f((()=>[m(O)])),default:f((()=>[m(i,{type:"selection",width:"50"}),m(i,{property:"id",label:"ID",width:"165"}),m(i,{property:"type",label:"行业分类",width:"150"},{default:f((e=>[v("div",null,b(y(E)(e.row.industry_id.split(","),y(l),"last")),1)])),_:1}),m(i,{property:"addr",label:"地区",width:"180"},{default:f((e=>[m(p,{effect:"dark",placement:"top"},{content:f((()=>[v("div",G,b(y(E)(y(S)(e.row.province,e.row.city,e.row.district),y(t))),1)])),default:f((()=>[v("div",L,b(y(E)(y(S)(e.row.province,e.row.city,e.row.district),y(t))),1)])),_:2},1024)])),_:1}),m(i,{property:"group_name",label:"人群名称",width:"200"},{default:f((({row:e})=>[m(p,{effect:"dark",placement:"top"},{content:f((()=>[v("div",Q,b(e.group_name),1)])),default:f((()=>[v("div",X,b(e.group_name),1)])),_:2},1024)])),_:1}),m(i,{property:"group_desc",label:"人群描述"},{default:f((({row:e})=>[m(p,{effect:"dark",placement:"top"},{content:f((()=>[v("div",Y,b(e.group_desc),1)])),default:f((()=>[v("div",Z,b(e.group_desc),1)])),_:2},1024)])),_:1}),m(i,{property:"create_time",label:"发起时间",width:"155"},{default:f((e=>[v("div",null,b(y(T)(new Date(e.row.create_time),"yyyy-MM-dd")),1)])),_:1}),m(i,{property:"status",label:"状态",width:"100"},{default:f((e=>[v("div",$,[v("div",{class:w(["status_dot",y(q)(e.row.status).className])},null,2),v("div",null,b(y(q)(e.row.status).text),1)])])),_:1}),m(i,{label:"操作",width:"150",fixed:"right"},{default:f((e=>[1==e.row.status?(n(),c("div",ee,[e.row.attachment?(n(),_(V,{key:0,type:"primary",href:e.row.attachment},{default:f((()=>[ae])),_:2},1032,["href"])):g("",!0),e.row.attachment?(n(),c("div",le)):g("",!0),m(V,{type:"primary",onClick:a=>qe(e.row.id)},{default:f((()=>[te])),_:2},1032,["onClick"])])):g("",!0),2==e.row.status?(n(),c("div",re,"---")):g("",!0),3==e.row.status?(n(),c("div",oe,[m(V,{type:"primary",onClick:a=>{return l=e.row.fail_reason,he.value=l,void(ge.value=!0);var l}},{default:f((()=>[de])),_:2},1032,["onClick"]),se,m(V,{type:"primary",onClick:a=>qe(e.row.id)},{default:f((()=>[ue])),_:2},1032,["onClick"])])):g("",!0),4==e.row.status?(n(),c("div",ie,[m(V,{type:"primary",onClick:a=>{return l=e.row.id,void r.push("/product/dmp/findb/specificDataDetails?id="+l);var l}},{default:f((()=>[pe])),_:2},1032,["onClick"]),ne,m(V,{type:"primary",onClick:a=>qe(e.row.id)},{default:f((()=>[ce])),_:2},1032,["onClick"])])):g("",!0)])),_:1})])),_:1},8,["data"])]),m(x,{page:d.value,"onUpdate:page":a[1]||(a[1]=e=>d.value=e),size:s.value,"onUpdate:size":a[2]||(a[2]=e=>s.value=e),total:k.value,onChange:be},null,8,["page","size","total"]),m(I,{modelValue:Ce.value,"onUpdate:modelValue":a[9]||(a[9]=e=>Ce.value=e),title:"新增需求",width:"500px","before-close":Be,onClose:Pe},{footer:f((()=>[v("div",ve,[m(u,{disabled:Ke.value,onClick:Pe},{default:f((()=>[me])),_:1},8,["disabled"]),m(u,{type:"primary",disabled:Ke.value,onClick:a[8]||(a[8]=e=>{var a;(a=Ue.value)&&(Ve.value="none",a.validate((e=>{if(!e)return!1;Ke.value=!0,ke.value.file?ze.value.submit():Oe("")})))})},{default:f((()=>[fe])),_:1},8,["disabled"])])])),default:f((()=>[h((n(),_(H,{ref_key:"addFormRef",ref:Ue,model:ke.value,rules:y(je),"label-width":"80px"},{default:f((()=>[m(N,{label:"行业分类",prop:"type"},{default:f((()=>[m(U,{modelValue:ke.value.type,"onUpdate:modelValue":a[3]||(a[3]=e=>ke.value.type=e),type:"type"},null,8,["modelValue"])])),_:1}),m(N,{label:"选择地区",prop:"addr"},{default:f((()=>[m(U,{modelValue:ke.value.addr,"onUpdate:modelValue":a[4]||(a[4]=e=>ke.value.addr=e),type:"address"},null,8,["modelValue"])])),_:1}),m(N,{label:"人群名称",prop:"people"},{default:f((()=>[m(F,{modelValue:ke.value.people,"onUpdate:modelValue":a[5]||(a[5]=e=>ke.value.people=e),placeholder:"请输入人群名称"},null,8,["modelValue"])])),_:1}),m(N,{label:"人群描述",prop:"desc"},{default:f((()=>[m(F,{modelValue:ke.value.desc,"onUpdate:modelValue":a[6]||(a[6]=e=>ke.value.desc=e),placeholder:"可对人群进行简单的描述",type:"textarea",maxlength:"150","show-word-limit":"",rows:"4"},null,8,["modelValue"])])),_:1}),m(N,{label:"上传附件",prop:"file",style:{"margin-bottom":"0"}},{default:f((()=>[m(K,{ref_key:"upload",ref:ze,modelValue:ke.value.file,"onUpdate:modelValue":a[7]||(a[7]=e=>ke.value.file=e),site:"dmp_attach",onChange:xe,onError:De,onSuccess:Oe},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[M,Ke.value]])])),_:1},8,["modelValue"]),m(z,{modelValue:ge.value,"onUpdate:modelValue":a[10]||(a[10]=e=>ge.value=e),title:"拒绝原因",msg:he.value,btn:1},null,8,["modelValue","msg"]),m(z,{modelValue:Se.value,"onUpdate:modelValue":a[11]||(a[11]=e=>Se.value=e),msg:"确认删除这条数据吗?",onSure:Ne},null,8,["modelValue"])])}}}))));var be;export{ye as default};