import{H as e,g as a,u as l,b as t,o as s,I as u,J as o,a as n,w as i,B as d,P as v,aa as c,c as r,a1 as p,a2 as m,W as f,a6 as g,a0 as b,_ as h,$ as _,an as y,X as w,ac as k,q as x,C as V,p as T,ab as C,av as A,aw as z,ax as E,ay as q,ae as I}from"./vue.fa004e33.js";import{_ as M,a0 as S,t as U}from"./index.743440f4.js";import{d as j}from"./debounce.d07373a2.js";import{K}from"./KzIphonePreview.ea99fa03.js";import{c as N,a as B}from"./contact.003bb225.js";import{t as O,a as P,b as R,g as $}from"./message.d0315a76.js";import"./tinymce.50e98bcc.js";const D=["onKeydown"],W={class:"kz_tel_main w100"},Y={class:"tags"},F={class:"ipt_placeholder"},H={class:"total w100"};var L=M(e({props:{modelValue:null},emits:["update:modelValue","change"],setup(e,{emit:V}){const T=e,C=a(),A=a(""),z=l({get:()=>T.modelValue,set:e=>{V("update:modelValue",e)}}),E=new RegExp(/,|，/),q=j((()=>{if(E.test(A.value)){const e=A.value.split(E);e.some((e=>e))&&(e.forEach((e=>{const a=e.replace(S,"");if(a){const e=z.value.indexOf(a);-1!==e?(z.value.splice(e,1),z.value.push(a)):z.value.push(a),V("change")}})),A.value="")}else{const e=A.value.replace(S,""),a=z.value.indexOf(e);-1!==a?(z.value.splice(a,1),z.value.push(e)):z.value.push(e),V("change"),A.value="",le.value=!1}}),500),I=a(""),M=a(),K=a(!1),N=a(0),B=a({top:0,left:0,width:0}),O=()=>{if(I.value){const e=String(I.value).replace(S,"");if(e){const a=z.value.indexOf(e);z.value[N.value]=e,-1!==a&&z.value.splice(a,1),V("change"),K.value=!1,se()}}},P=()=>{K.value=!1,I.value=""},R=()=>{var e;X.value&&(null==(e=document.getSelection())||e.removeAllRanges(),X.value=!1,se())},$=a([]),L=()=>{$.value.length=0},G=()=>{if(!A.value){if($.value.length){const e=[];return z.value.forEach((a=>{-1===$.value.indexOf(a)&&e.push(a)})),z.value=e,V("change"),L(),void se()}var e;z.value.length&&(L(),e=z.value[z.value.length-1],$.value.push(e),se())}},J=a(),X=a(!1),Q=()=>{z.value.length&&(J.value=setTimeout((()=>{X.value=!0}),200))},Z=async()=>{if(clearTimeout(J.value),X.value)return X.value=!1,void se();se(),L()},ee=()=>{if(X.value&&z.value.length){const e=document.getSelection();if(null==e?void 0:e.toString()){const a=null==e?void 0:e.toString().replace(/\n/g,",");$.value=a.split(",").map((e=>e))}}},ae=a(),le=a(!1),te=a(""),se=()=>{x((()=>{C.value.blur(),C.value.focus(),K.value=!1,I.value=""}))};return(e,a)=>{const l=t("el-tag"),T=t("el-tooltip"),j=t("el-scrollbar");return s(),u("div",{class:"kz_tel_input fc fsc",onMousedown:Q,onMouseup:Z,onMousemove:ee,onKeydown:k(G,["backspace"])},[o("div",W,[n(j,{noresize:!0},{default:i((()=>[o("div",Y,[d(z).length?(s(!0),u(v,{key:0},c(d(z),((e,t)=>(s(),r(l,{key:t,closable:"",type:d(U).test(e)?"success":"danger",class:f(["tel_tag",[$.value.includes(e)?"tel_tag_sel":"","tel_tag_"+t]]),effect:"plain",onMouseenter:a=>{return l=a,t=e,void(U.test(t)||(ae.value=l.currentTarget,te.value="号码效验失败，请双击更改",le.value=!0));var l,t},onMouseleave:a[0]||(a[0]=e=>le.value=!1),onClose:g((e=>{return a=t,z.value.splice(a,1),V("change"),le.value=!1,void L();var a}),["stop"]),onDblclick:g((e=>(e=>{L(),N.value=e,I.value=z.value[N.value];const a=document.querySelector(".tel_tag_"+e);a&&(B.value.width=a.offsetWidth,B.value.left=a.offsetLeft,B.value.top=a.offsetTop,K.value=!0,x((()=>{M.value.blur(),M.value.focus()})))})(t)),["stop"]),onClick:g((a=>{return l=e,L(),void $.value.push(l);var l}),["stop"]),onMousedown:a[1]||(a[1]=g((()=>{}),["stop"])),onMouseup:g(R,["stop"])},{default:i((()=>[p(m(e),1)])),_:2},1032,["type","class","onMouseenter","onClose","onDblclick","onClick","onMouseup"])))),128)):b("",!0),h(o("div",F," 请输入手机号码，使用“ , ”隔开多个号码 ",512),[[_,!d(z).length&&!A.value]]),X.value?b("",!0):h((s(),u("input",{key:1,ref_key:"tagIpt",ref:C,"onUpdate:modelValue":a[2]||(a[2]=e=>A.value=e),type:"text",class:"tag_ipt",style:w({width:16*A.value.length+"px"}),onKeyup:a[3]||(a[3]=e=>(e=>{if(","===e.key){const e=A.value.split(E);e.some((e=>e))&&(e.forEach((e=>{const a=e.replace(S,"");if(a){const e=z.value.indexOf(a);-1!==e?(z.value.splice(e,1),z.value.push(a)):z.value.push(a),V("change")}})),A.value="")}$.value.length&&"Backspace"!==e.key&&L()})(e)),onChange:a[4]||(a[4]=(...e)=>d(q)&&d(q)(...e))},null,36)),[[y,A.value,void 0,{trim:!0}]]),K.value?h((s(),u("input",{key:2,ref_key:"editIpt",ref:M,"onUpdate:modelValue":a[5]||(a[5]=e=>I.value=e),type:"text",class:"edit_tag_ipt",style:w({top:B.value.top+"px",left:B.value.left+"px",width:B.value.width+"px"}),onChange:O,onBlur:P,onMousedown:a[6]||(a[6]=g((()=>{}),["stop"])),onMouseup:a[7]||(a[7]=g((()=>{}),["stop"])),onKeydown:a[8]||(a[8]=g((()=>{}),["stop"]))},null,36)),[[y,I.value,void 0,{number:!0}]]):b("",!0)]),n(T,{visible:le.value,"onUpdate:visible":a[9]||(a[9]=e=>le.value=e),"virtual-ref":ae.value,"virtual-triggering":"",trigger:"hover",placement:"top"},{content:i((()=>[o("div",null,m(te.value),1)])),_:1},8,["visible","virtual-ref"])])),_:1})]),o("div",H,"共输入号码："+m(d(z).length),1)],40,D)}}}),[["__scopeId","data-v-53053be4"]]);const G=e=>(A("data-v-181973d4"),e=e(),z(),e),J={class:"add_send flex"},X={class:"kz_card lt"},Q={class:"card_title fsc"},Z={class:"fcs"},ee=p(" 取消 "),ae=p("稍后编辑"),le=p("使用5G消息发送"),te=p(" 提交 "),se={class:"f1"},ue={class:"flex"},oe=p("新建模板"),ne={class:"template_content"},ie={class:"template_text"},de={class:"template_info"},ve=p("即时发送"),ce=p("定时发送"),re={class:"f1"},pe={class:"fcs mb16"},me={class:"add_contacts"},fe={class:"add_contacts_search fsc"},ge={class:"fcs fjend"},be=p("查询"),he={class:"contacts_total"},_e={class:"dmp_table mt16 fcs"},ye=G((()=>o("div",{class:"fcc",style:{color:"#c0c4cc"}},"没有更多了",-1))),we={style:{width:"30px"},class:"fcc f0"},ke={class:"is_sels f1"},xe={class:"fcs"},Ve={class:"is_sel_item_name els"},Te={class:"kz_card rt fs0"},Ce=G((()=>o("div",{class:"card_title"},"短信预览",-1)));var Ae=M(e({setup(e){const g=E(),b=q(),y=b.query.id?String(b.query.id):"",w=a({mobile:b.query.mobile?String(b.query.mobile):"",name:b.query.name?String(b.query.name):"",id:b.query.contactId?String(b.query.contactId):""}),k=a(""),x=a(),A=a({tid:"",sendType:1,sendTime:"",tels:[],contactsArr:[]}),z=l((()=>A.value.tels.filter((e=>U.test(e))))),M={tid:[{required:!0,message:"请选择短信模板！",trigger:"change"}],sendType:[{required:!0,message:"请选择短信发送方式！",trigger:"blur"},{validator:(e,a,l)=>{2!==A.value.sendType||A.value.sendTime?l():l(new Error("请选择发送时间!"))},trigger:"blur"}],tels:[{validator:(e,a,l)=>{if(1===H.value)return A.value.tels.length?z.value.length?void l():void l(new Error("请输入正确号码!")):void l(new Error("请输入号码!"));2!==H.value||A.value.contactsArr.length?l():l(new Error("请选择联系人!"))},trigger:"change"}]},S=async()=>{const{status:e,body:a}=await O({size:Y.value,current:W.value});e&&(F.value=a.total,D.value=a.records)},j=e=>{const a=D.value.find((a=>a.id===e));k.value=a?"【"+a.signature+"】"+a.content:""},D=a([]),W=a(1),Y=a(5),F=a(0),H=a(1),G=e=>{H.value=e,x.value.clearValidate("tels")},Ae=()=>{x.value.clearValidate("sendType")},ze=()=>{x.value.validateField("tels")},Ee=a([]);(async()=>{const{status:e,body:a}=await N();e&&(Ee.value=a.map((e=>({text:e.name,value:e.id}))))})();const qe=a(""),Ie=a(),Me=a(1),Se=a(0),Ue=a(!1),je=a([]),Ke=async()=>{Ue.value=!0;const{status:e,body:a}=await B({size:10,current:Me.value,str:qe.value});e&&(Se.value=a.total,Me.value++,je.value=je.value.concat(a.records),Ue.value=!1)};Ke();const Ne=()=>{je.value.length=0,Me.value=1,Ke()};V((()=>{Ie.value&&Ie.value.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")[0].addEventListener("scroll",Be)})),T((()=>{Ie.value&&Ie.value.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")[0].removeEventListener("scroll",Be)}));const Be=e=>{if(je.value.length>=Se.value)return;const{clientHeight:a,scrollTop:l,scrollHeight:t}=e.target;a+l===t&&Ke()},Oe=(e,a)=>Number(a.group_id)===Number(e),Pe=a(0),Re=e=>{const a=e.length>Pe.value?"add":"del";if("add"===a&&e.forEach((e=>{-1===A.value.contactsArr.findIndex((a=>a.mobile===e.mobile))&&A.value.contactsArr.push(e)})),"del"===a){je.value.filter((a=>!e.find((e=>a.id===e.id)))).forEach((e=>{const a=A.value.contactsArr.findIndex((a=>a.mobile===e.mobile));-1!==a&&A.value.contactsArr.splice(a,1)}))}Pe.value=e.length},$e=(e,a)=>{const l=e.find((e=>e.id===a.id))?"add":"del",t=A.value.contactsArr.findIndex((e=>e.mobile===a.mobile));"add"===l&&-1===t&&A.value.contactsArr.push(a),"del"===l&&-1!==t&&A.value.contactsArr.splice(t,1),Pe.value=e.length},De=a(0),We=e=>{De.value=e,e?x.value.validate((async e=>{if(e){const{status:e}=await P({tid:A.value.tid,type:A.value.sendType,send_time:2===A.value.sendType?Number(A.value.sendTime):0,contact_info:2===H.value?A.value.contactsArr.map((e=>({name:e.name,mobile:e.mobile}))):[],mobiles:1===H.value?z.value:[],task_id:y});e&&g.back()}})):x.value.validateField("tid",(async e=>{if(e){const{status:e}=await R({tid:A.value.tid,type:A.value.sendType,send_time:2===A.value.sendType?Number(A.value.sendTime):0,contact_info:2===H.value?A.value.contactsArr.map((e=>({name:e.name,mobile:e.mobile}))):[],mobiles:1===H.value?z.value:[],task_id:y});e&&g.back()}}))};return(async()=>{w.value.mobile&&(A.value.contactsArr.push(w.value),H.value=2),await S(),y&&$({taskId:y}).then((async e=>{A.value.tid=e.body.tid,A.value.sendType=e.body.type,A.value.sendTime=e.body.send_time,A.value.tels=e.body.mobiles||[],A.value.contactsArr=e.body.contact_info||[],H.value=e.body.contact_info&&e.body.contact_info.length?2:1;const a=async()=>{const l=D.value.find((a=>a.id===Number(e.body.tid)));k.value=l?"【"+l.signature+"】"+l.content:"",l||W.value*Y.value>=F.value||(W.value++,await S(),a())};await a()}))})(),(e,a)=>{const l=t("el-button"),g=t("el-option"),b=t("el-pagination"),w=t("el-select"),V=t("el-form-item"),T=t("el-radio"),z=t("el-radio-group"),E=t("el-date-picker"),q=t("KzIcon"),U=t("el-input"),N=t("el-table-column"),B=t("el-table"),O=t("el-scrollbar"),P=t("el-form"),R=I("loading");return s(),u("div",J,[o("div",X,[o("div",Q,[o("div",null,m(d(y)?"编辑":"新建")+"短信",1),o("div",Z,[n(l,{class:"bdc_btn",onClick:e.$router.back},{default:i((()=>[ee])),_:1},8,["onClick"]),n(l,{class:"bdc_btn",onClick:a[0]||(a[0]=e=>We(0))},{default:i((()=>[ae])),_:1}),n(l,{type:"primary",disabled:""},{default:i((()=>[le])),_:1}),n(l,{type:"primary",onClick:a[1]||(a[1]=e=>We(1))},{default:i((()=>[te])),_:1})])]),n(P,{ref_key:"addFormRef",ref:x,model:A.value,rules:M,"hide-required-asterisk":"",class:"add_form"},{default:i((()=>[n(V,{label:"短信模板",prop:"tid"},{default:i((()=>[o("div",se,[o("div",ue,[n(w,{modelValue:A.value.tid,"onUpdate:modelValue":a[3]||(a[3]=e=>A.value.tid=e),placeholder:"请选择短信模板",class:"f1",onChange:j},{default:i((()=>[(s(!0),u(v,null,c(D.value,(e=>(s(),r(g,{key:e.id,label:e.title,value:e.id,disabled:3!==e.template_status||0===e.status},null,8,["label","value","disabled"])))),128)),n(b,{currentPage:W.value,"onUpdate:currentPage":a[2]||(a[2]=e=>W.value=e),layout:"prev, pager, next",total:F.value,"page-size":Y.value,small:"",onCurrentChange:S},null,8,["currentPage","total","page-size"])])),_:1},8,["modelValue"]),n(l,{class:"bdc_btn",style:{"margin-left":"12px"},onClick:a[4]||(a[4]=a=>e.$router.push("/product/notification/sms/addtemplate"))},{default:i((()=>[oe])),_:1})]),h(o("div",ne,[o("div",ie,m(k.value),1),o("div",de,"本条短信共计"+m(k.value.length)+"个字，按1条计费",1)],512),[[_,A.value.tid]])])])),_:1}),n(V,{label:"发送方式",prop:"sendType"},{default:i((()=>[o("div",null,[n(z,{modelValue:A.value.sendType,"onUpdate:modelValue":a[5]||(a[5]=e=>A.value.sendType=e),onChange:Ae},{default:i((()=>[n(T,{label:1},{default:i((()=>[ve])),_:1}),n(T,{label:2},{default:i((()=>[ce])),_:1})])),_:1},8,["modelValue"]),h(o("div",null,[n(E,{modelValue:A.value.sendTime,"onUpdate:modelValue":a[6]||(a[6]=e=>A.value.sendTime=e),type:"datetime",placeholder:"请选择发送时间",format:"YYYY/MM/DD hh:mm","value-format":"x"},null,8,["modelValue"])],512),[[_,2===A.value.sendType]])])])),_:1}),n(V,{label:"发送号码",prop:"tels"},{default:i((()=>[o("div",re,[o("div",pe,[o("div",{class:f(["sedn_type",1===H.value&&"active"]),onClick:a[7]||(a[7]=e=>G(1))}," 手动输入 ",2),o("div",{class:f(["sedn_type",2===H.value&&"active"]),onClick:a[8]||(a[8]=e=>G(2))}," 从联系人选择 ",2)]),h(n(L,{modelValue:A.value.tels,"onUpdate:modelValue":a[9]||(a[9]=e=>A.value.tels=e),onChange:ze},null,8,["modelValue"]),[[_,1===H.value]]),h(o("div",me,[o("div",fe,[o("div",ge,[n(U,{modelValue:qe.value,"onUpdate:modelValue":a[10]||(a[10]=e=>qe.value=e),style:{width:"180px","margin-right":"12px"},placeholder:"请输入"},{prefix:i((()=>[n(q,{href:"#icon-sousuo"})])),_:1},8,["modelValue"]),n(l,{class:"bdc_btn",onClick:Ne},{default:i((()=>[be])),_:1})]),o("div",he,"共选择号码："+m(A.value.contactsArr.length)+"个",1)]),o("div",_e,[h((s(),r(B,{ref_key:"tableRef",ref:Ie,"row-key":"id",data:je.value,height:"250",style:{width:"310px"},onSelectAll:Re,onSelect:$e},C({default:i((()=>[n(N,{type:"selection",width:"50"}),n(N,{prop:"group_name",label:"分组",width:"80",filters:Ee.value,"filter-method":Oe,"filter-placement":"bottom-end","show-overflow-tooltip":""},{default:i((({row:e})=>[p(m(e.group_name||"-"),1)])),_:1},8,["filters"]),n(N,{prop:"name",label:"姓名",width:"70"}),n(N,{prop:"mobile",label:"电话号码",width:"110"})])),_:2},[je.value.length>=Se.value&&je.value.length?{name:"append",fn:i((()=>[ye]))}:void 0]),1032,["data"])),[[R,Ue.value]]),o("div",we,[n(q,{href:"#icon-tiaozhuan-youxiantiao"})]),o("div",ke,[n(O,{noresize:!0},{default:i((()=>[(s(!0),u(v,null,c(A.value.contactsArr,((e,a)=>(s(),u("div",{key:e.id,class:"is_sel_item fsc"},[o("div",xe,[o("div",Ve,m(e.name),1),o("div",null,m(e.mobile),1)]),n(q,{href:"#icon-suoxiao",size:"16px",onClick:l=>((e,a)=>{A.value.contactsArr.splice(a,1),Pe.value--,Ie.value.toggleRowSelection(je.value.find((a=>a.mobile===e)),!1)})(e.mobile,a)},null,8,["onClick"])])))),128))])),_:1})])])],512),[[_,2===H.value]])])])),_:1})])),_:1},8,["model"])]),o("div",Te,[Ce,n(K,{modelValue:k.value,"onUpdate:modelValue":a[11]||(a[11]=e=>k.value=e)},null,8,["modelValue"])])])}}}),[["__scopeId","data-v-181973d4"]]);export{Ae as default};