import{K as e}from"./KzIphonePreview.55b89a92.js";import{H as a,g as l,u as t,o as s,I as n,J as u,a as d,w as i,P as o,aa as r,B as c,a2 as v,k as m,av as p,aw as g,a1 as f,ax as b,ay as y,b as _,c as h}from"./vue.fa004e33.js";import{j as k,k as V,l as w,c as x}from"./message.05333019.js";import{_ as C}from"./index.e45ab2da.js";import{w as T}from"./warning.2de8c327.js";import"./tinymce.50e98bcc.js";const j=e=>(p("data-v-5c488078"),e=e(),g(),e),q={class:"add_template flex"},z={class:"kz_card lt"},U={class:"card_title fsc"},P=j((()=>u("div",null,"新建模板",-1))),F={class:"fcs"},I=f(" 取消 "),B=f("稍后编辑"),K=f(" 提交 "),$=f("新建签名"),E={class:"f1"},H={class:"tip fcs mb16"},J=f("“付款”、“现金”为敏感词，容易导致模板审核失败，或被运营商拦截，请注意修改 "),N={class:"flex"},R={style:{"margin-left":"12px"}},S=f("插入变量"),A={class:"mt16"},D=f("插入短链"),G={class:"content_info"},L={class:"kz_card rt fs0"},M=j((()=>u("div",{class:"card_title"},"短信预览",-1)));var O=C(a({setup(a){const p=b(),g=y(),C=g.query.id?String(g.query.id):"",j=l(""),O=t((()=>(W.value.sign?"【"+j.value+"】":"")+W.value.content)),Q=l(),W=l({smsType:1,name:"",sign:"",content:""}),X={smsType:[{required:!0,message:"请选择短信类型！",trigger:"change"}],name:[{required:!0,message:"请输入模板名称！",trigger:"change"}],sign:[{required:!0,message:"请选择签名！",trigger:"change"}],content:[{required:!0,message:"请输入模板内容！",trigger:"change"}]},Y=[{label:"事务类",value:1},{label:"通用/运营类",value:2}],Z=l(1),ee=l(5),ae=l(0),le=l([]),te=async()=>{const{status:e,body:a}=await x({size:ee.value,current:Z.value});e&&(ae.value=a.total,le.value=a.records)},se=e=>{var a;j.value=null==(a=le.value.find((a=>a.id===e)))?void 0:a.name},ne=()=>{te()},ue=l(0),de=e=>{ue.value=e,e?Q.value.validate((async e=>{if(e){const{status:e}=await k({content:W.value.content,signature_id:W.value.sign,title:W.value.name,type:W.value.smsType});e&&p.back()}})):Q.value.validateField("name",(async e=>{if(e){const{status:e}=await V({content:W.value.content,signature_id:W.value.sign,title:W.value.name,type:W.value.smsType});e&&p.back()}}))};return(async()=>{await te(),C&&w({id:C}).then((async e=>{W.value.smsType=e.body.type,W.value.name=e.body.title,W.value.sign=e.body.signature_id,W.value.content=e.body.content;const a=async()=>{const l=le.value.find((a=>a.id===Number(e.body.signature_id)));j.value=l?l.name:"",l||Z.value*ee.value>=ae.value||(Z.value++,await te(),a())};await a()}))})(),(a,l)=>{const t=_("el-button"),p=_("el-radio"),g=_("el-radio-group"),b=_("el-form-item"),y=_("el-input"),k=_("el-option"),V=_("el-pagination"),w=_("el-select"),x=_("el-icon"),C=_("el-form");return s(),n("div",q,[u("div",z,[u("div",U,[P,u("div",F,[d(t,{class:"bdc_btn",onClick:a.$router.back},{default:i((()=>[I])),_:1},8,["onClick"]),d(t,{class:"bdc_btn",onClick:l[0]||(l[0]=e=>de(0))},{default:i((()=>[B])),_:1}),d(t,{type:"primary",onClick:l[1]||(l[1]=e=>de(1))},{default:i((()=>[K])),_:1})])]),d(C,{ref_key:"addFormRef",ref:Q,model:W.value,rules:X,"hide-required-asterisk":"",class:"add_form"},{default:i((()=>[d(b,{label:"短信类型",prop:"smsType"},{default:i((()=>[d(g,{modelValue:W.value.smsType,"onUpdate:modelValue":l[2]||(l[2]=e=>W.value.smsType=e)},{default:i((()=>[(s(),n(o,null,r(Y,(e=>d(p,{key:e.label,label:e.value},{default:i((()=>[f(v(e.label),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),d(b,{label:"模板名称",prop:"name"},{default:i((()=>[d(y,{modelValue:W.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>W.value.name=e),placeholder:"请输入模板名称"},null,8,["modelValue"])])),_:1}),d(b,{label:"插入签名",prop:"sign"},{default:i((()=>[d(w,{modelValue:W.value.sign,"onUpdate:modelValue":l[5]||(l[5]=e=>W.value.sign=e),placeholder:"请选择签名",class:"f1",onChange:se},{default:i((()=>[(s(!0),n(o,null,r(le.value,(e=>(s(),h(k,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128)),d(V,{currentPage:Z.value,"onUpdate:currentPage":l[4]||(l[4]=e=>Z.value=e),layout:"prev, pager, next",total:ae.value,"page-size":ee.value,small:"",onCurrentChange:ne},null,8,["currentPage","total","page-size"])])),_:1},8,["modelValue"]),d(t,{class:"bdc_btn",style:{"margin-left":"12px"},onClick:l[6]||(l[6]=e=>a.$router.push("/product/notification/sms/signature"))},{default:i((()=>[$])),_:1})])),_:1}),d(b,{label:"模板内容",prop:"content"},{default:i((()=>[u("div",E,[u("div",H,[d(x,{color:"#FE9B25",size:"14px",style:{"margin-right":"8px"}},{default:i((()=>[d(c(T))])),_:1}),J]),u("div",N,[d(y,{modelValue:W.value.content,"onUpdate:modelValue":l[7]||(l[7]=e=>W.value.content=e),rows:6,type:"textarea",placeholder:"请输入模板内容",maxlength:500,class:"f1"},null,8,["modelValue"]),u("div",R,[u("div",null,[d(t,{class:"bdc_btn",disabled:""},{default:i((()=>[S])),_:1})]),u("div",A,[d(t,{class:"bdc_btn",disabled:""},{default:i((()=>[D])),_:1})])])]),u("div",G,"已输入 "+v(W.value.content.length)+" 字符，按 1 条计费",1)])])),_:1})])),_:1},8,["model"])]),u("div",L,[M,d(e,{modelValue:c(O),"onUpdate:modelValue":l[8]||(l[8]=e=>m(O)?O.value=e:null)},null,8,["modelValue"])])])}}}),[["__scopeId","data-v-5c488078"]]);export{O as default};