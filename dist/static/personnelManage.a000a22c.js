var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s;import{H as i,g as d,j as n,u as c,o as v,I as r,J as m,a2 as p,a as _,w as f,B as g,W as b,P as y,aa as V,_ as w,$ as k,a1 as h,av as C,aw as x,ax as j,b as U,c as $}from"./vue.a94c4214.js";import{K as z}from"./KzPage.dc9f08c7.js";import{K as I}from"./KzEmpty.dff626fc.js";import{a as O}from"./areaNum.1f3b05a6.js";import{Q as P}from"./qrcode.vue.esm.919c0f63.js";import{u as K}from"./index.e4086819.js";import{_ as E,m as q,A as N,o as B,e as D,g as H,$ as L,t as M}from"./index.0bf61828.js";import{b as A,c as F,m as J,d as Q,s as R,e as S,f as W,h as G,r as T,i as X,j as Y,k as Z}from"./personnelManage.05a88174.js";import"./tinymce.a8dd01a6.js";const ee=e=>(C("data-v-4e4ba6ca"),e=e(),x(),e),ae={class:"manager_tab flex"},le={class:"left_1"},se={class:"sel"},ue=h("添加分组"),te={class:"tree_sector"},oe=[ee((()=>m("div",{class:"left_line"},null,-1))),ee((()=>m("div",null,"全部人员",-1)))],ie=["onClick"],de=ee((()=>m("div",{class:"left_line"},null,-1))),ne=["onClick"],ce=[ee((()=>m("span",null,"修改名称",-1)))],ve=["onClick"],re=[ee((()=>m("span",null,"删除分组",-1)))],me={class:"dialog-footer"},pe=h("取消"),_e=h("保存"),fe={class:"dialog-footer"},ge=h("取消"),be=h("保存"),ye={class:"mid"},Ve={class:"fsc f1"},we={key:0},ke={class:"mid_title"},he={key:1,class:"flex"},Ce=h("保存"),xe=h("删除分组"),je=h("添加人员"),Ue={class:"mana_tab"},$e={class:"fcs line_last"},ze=h("编辑"),Ie=ee((()=>m("span",{class:"line"},null,-1))),Oe=h("删除"),Pe={class:"fcc"},Ke=h("二维码邀请"),Ee=h("链接邀请"),qe={key:0,class:"mid_dig"},Ne=ee((()=>m("div",{class:"fleximg mare type_face"},"邀请员工微信扫描下方二维码注册",-1))),Be={class:"img"},De=h("刷新二维码"),He={class:"fcc"},Le=h("下载二维码"),Me={key:1,class:"mid_dig"},Ae=ee((()=>m("div",{class:"fleximg type_face"},"点击复制以下链接，发送给员工",-1))),Fe={class:"link_code"},Je={class:"fcc"},Qe=h("复制链接"),Re={key:2,class:"mid_dig"},Se=ee((()=>m("div",{class:"fleximg mare type_face"},"请填写受邀请人员信息",-1))),We=ee((()=>m("div",{class:"fleximg mes"},"系统将通过短信邀请对方注册",-1))),Ge={class:"num"},Te={class:"fcc"},Xe=h("发送短信"),Ye={class:"sel_two"},Ze=ee((()=>m("span",{class:"grouping"},"名字",-1))),ea={class:"sel_two"},aa=ee((()=>m("span",{class:"grouping"},"电话",-1))),la={class:"sel_two"},sa=ee((()=>m("span",{class:"grouping"},"分组",-1))),ua={class:"sel_two"},ta=ee((()=>m("span",{class:"grouping"},"角色",-1))),oa={class:"sel_two"},ia=ee((()=>m("span",{class:"grouping"},"状态",-1))),da={class:"fjend"},na=h("取消"),ca=h("保存"),va=i((ra=((e,a)=>{for(var l in a||(a={}))u.call(a,l)&&o(e,l,a[l]);if(s)for(var l of s(a))t.call(a,l)&&o(e,l,a[l]);return e})({},{name:"PersonnelManage"}),ma={setup(e){const a=j(),l=q(),s=d(1),u=d(20),t=d(50),o=d([]),i=d(),C=n({tel:"",msg:""}),x=d(!1),E=d(1),ee=d(""),va=d(!0),ra=d({}),ma=d(!1),pa=d(!1),_a=d(!1),fa=d(0),ga=d(!0),ba=d(),ya=d(),Va=d(!0),wa=d(),ka=d(""),ha=d(""),Ca=d([]),xa=d(),ja=d(""),Ua=d(""),$a=d("86"),za=d(),Ia=d(),Oa=d(""),Pa=d(),Ka=c((()=>l.state.yxtUrl.mobile)),Ea=d(""),qa=async()=>{const{body:e}=await A();za.value=e.cid,Ia.value=e.left_time,Oa.value=e.sign,Pa.value=e.uid,Ea.value="https://"+Ka.value+`/app/login?uid=${Pa.value}&sign=${Oa.value}&left_time=${Ia.value}&cid=${za.value}`,Ma()},Na=async()=>{x.value=!0,qa()},Ba=d(),Da=()=>{const e=document.getElementById("qrImg"),a=document.createElement("a");a.href=e.toDataURL("image/png"),a.download="邀请二维码",a.click(),B("下载完成"),Za()},Ha=d(""),La=d(""),Ma=()=>{Ha.value=window.location.origin+"/invite",La.value=window.location.origin+`/invite?uid=${Pa.value}&sign=${Oa.value}&left_time=${Ia.value}&cid=${za.value}`},{toClipboard:Aa}=K(),Fa=()=>{ha.value="",ma.value=!1},Ja=()=>{ka.value="",pa.value=!1},Qa=async(e,a)=>{const{status:l}=await J({group_id:wa.value,name:ka.value});1===l?B("修改名称成功"):D("修改名称失败"),Ja(),al()},Ra=async(e,a)=>{const{status:l}=await J({group_id:ba.value,name:ee.value});1===l?B("修改名称成功"):D("修改名称失败"),va.value=!0,Ja(),al()},Sa=async e=>{const{status:a}=await Q({group_id:ba.value});1===a?(B("删除分组成功"),al(),ll()):D("删除分组失败")},Wa=d(),Ga=d([]),Ta=d(),Xa=async()=>{const{status:e}=await T({group_ids:Ca.value,role_ids:Ga.value,user_status:fa.value,member_id:Ta.value,name:Ua.value});1==e&&(Ya(),ll(ba.value))},Ya=()=>{Ca.value=[],Ga.value=[],Ua.value="",ja.value="",fa.value=0,_a.value=!1},Za=()=>{C.msg="",3==E.value&&i.value.resetFields(),x.value=!1,E.value=1},el=n({tel:[{required:!0,message:"请输入手机号！",trigger:"blur"},{validator:(e,a,l)=>{M.test(a)?l():l(new Error("请输入正确的手机号码!"))},trigger:"blur"}]}),al=async()=>{const{body:e,status:l}=await W();if(l){ra.value=e;const l=H("id")||null;a.push(`/manage/company/personnelmanage?id=${l}`),ba.value=l,l?ll(Number(l),e[l]):ll()}(async()=>{const{status:e,message:a}=await Z();e&&(Ba.value=a)})()};al();const ll=async(e,i)=>{i&&(ee.value=i),ba.value=e;const{body:d,status:n}=await Y({size:u.value,current:s.value,groupId:e});n&&(o.value=d.records,t.value=d.total,l.setKeepList([]),a.push(`/manage/company/personnelmanage?id=${e}`)),ga.value=!e,Va.value=!e,ya.value=e};return(e,a)=>{const l=U("el-icon"),d=U("el-button"),n=U("el-popover"),c=U("el-input"),j=U("el-dialog"),K=U("KzIcon"),q=U("el-table-column"),H=U("el-switch"),M=U("el-table"),A=U("el-button-group"),J=U("el-descriptions-item"),T=U("el-descriptions"),Y=U("el-option"),Z=U("el-select"),za=U("el-form-item"),Ia=U("el-form");return v(),r("div",ae,[m("div",le,[m("div",se,p(Ba.value),1),_(d,{class:"bdc_btn",onClick:a[0]||(a[0]=e=>ma.value=!0)},{default:f((()=>[_(l,{color:"#2150ec"},{default:f((()=>[_(g(N))])),_:1}),ue])),_:1}),m("div",te,[m("div",{class:b(Va.value?"pople_box box_active":"pople_box"),onClick:a[1]||(a[1]=e=>ll())},oe,2),(v(!0),r(y,null,V(ra.value,((e,s)=>(v(),r("div",{key:s,class:b(ya.value==s?"pople_box box_active":"pople_box"),onClick:a=>ll(s,e)},[de,m("div",null,p(e),1),_(n,{trigger:"hover",placement:"right",width:180,"popper-class":"show_tags user_drop",teleported:!1},{reference:f((()=>[_(l,null,{default:f((()=>[_(g(L))])),_:1})])),default:f((()=>[m("div",{onClick:a=>{return l=s,u=e,pa.value=!0,wa.value=l,void(ka.value=u);var l,u}},ce,8,ne),m("div",{onClick:e=>(async e=>{const{status:a}=await Q({group_id:e});1===a?B("删除分组成功"):D("删除分组失败"),al(),ll()})(s)},re,8,ve)])),_:2},1024),_(j,{modelValue:pa.value,"onUpdate:modelValue":a[3]||(a[3]=e=>pa.value=e),title:"修改名称",width:"500px","custom-class":"add_group",onClose:Ja},{footer:f((()=>[m("span",me,[_(d,{class:"bdc_btn",onClick:Ja},{default:f((()=>[pe])),_:1}),_(d,{type:"primary",onClick:Qa},{default:f((()=>[_e])),_:1})])])),default:f((()=>[_(c,{modelValue:ka.value,"onUpdate:modelValue":a[2]||(a[2]=e=>ka.value=e),placeholder:"请输入名称",maxlength:"10",type:"text","show-word-limit":""},null,8,["modelValue"])])),_:1},8,["modelValue"])],10,ie)))),128))]),_(j,{modelValue:ma.value,"onUpdate:modelValue":a[6]||(a[6]=e=>ma.value=e),title:"添加分组",width:"500px","custom-class":"add_group",onClose:Fa},{footer:f((()=>[m("span",fe,[_(d,{class:"bdc_btn",onClick:Fa},{default:f((()=>[ge])),_:1}),_(d,{type:"primary",onClick:a[5]||(a[5]=e=>(async e=>{const{status:a}=await F({name:e});1===a?B("分组添加成功"):D("分组添加失败"),Fa(),al(),ll()})(ha.value))},{default:f((()=>[be])),_:1})])])),default:f((()=>[_(c,{modelValue:ha.value,"onUpdate:modelValue":a[4]||(a[4]=e=>ha.value=e),placeholder:"请输入分组名称",maxlength:"10",type:"text","show-word-limit":""},null,8,["modelValue"])])),_:1},8,["modelValue"])]),m("div",ye,[m("div",Ve,[w(m("div",null,[va.value?(v(),r("div",we,[m("span",ke,p(ee.value),1),_(K,{href:"#icon-bianji",size:"16px",class:"bj",onClick:a[7]||(a[7]=e=>va.value=!1)})])):(v(),r("div",he,[_(c,{modelValue:ee.value,"onUpdate:modelValue":a[8]||(a[8]=e=>ee.value=e),"show-word-limit":"",maxlength:"30"},null,8,["modelValue"]),_(d,{type:"primary",onClick:Ra},{default:f((()=>[Ce])),_:1})]))],512),[[k,!ga.value]]),m("div",null,[w(_(d,{type:"info",plain:"",onClick:Sa},{default:f((()=>[xe])),_:1},512),[[k,!ga.value]]),_(d,{type:"primary",onClick:Na},{default:f((()=>[_(K,{href:"#icon-tianjia",size:"14px"}),je])),_:1})])]),m("div",null,[m("div",Ue,[_(M,{data:o.value},{empty:f((()=>[_(I)])),default:f((()=>[_(q,{prop:"user_name",label:"姓名",align:"center"}),_(q,{prop:"group_name",label:"部门",align:"center"}),_(q,{prop:"mobile",label:"电话",align:"center"}),_(q,{property:"user_status",label:"账号状态",align:"center"},{default:f((({row:e})=>[_(H,{modelValue:e.user_status,"onUpdate:modelValue":a=>e.user_status=a,"active-value":1,"inactive-value":0,onChange:a=>(async e=>{const{status:a}=await R({member_id:e});1===a?B("状态修改成功"):D("状态修改失败")})(e.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(q,{label:"操作",align:"center"},{default:f((({row:e})=>[m("div",$e,[_(d,{type:"text",onClick:a=>(async e=>{S({memberId:e.id}).then((e=>{1===e.status&&(Ca.value=e.body.group_ids,Ga.value=e.body.role_ids,Ua.value=e.body.user_name,ja.value=e.body.mobile,fa.value=e.body.user_status,Ta.value=e.body.member_id)})),_a.value=!0;const{status:a,body:l}=await W();1===a&&(xa.value=l);const s=await G();1===s.status&&(Wa.value=s.body)})(e)},{default:f((()=>[ze])),_:2},1032,["onClick"]),Ie,_(d,{type:"text",onClick:a=>(async e=>{const{status:a}=await X({member_id:e});1===a?B("删除人员成功"):D("删除人员失败"),ll(ba.value)})(e.id)},{default:f((()=>[Oe])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),_(z,{page:s.value,"onUpdate:page":a[9]||(a[9]=e=>s.value=e),size:u.value,"onUpdate:size":a[10]||(a[10]=e=>u.value=e),total:t.value},null,8,["page","size","total"])]),_(j,{modelValue:x.value,"onUpdate:modelValue":a[17]||(a[17]=e=>x.value=e),width:"500px","custom-class":"add_dialog",title:"添加人员",onClose:Za},{default:f((()=>[m("div",Pe,[_(A,{class:"btn_tab"},{default:f((()=>[_(d,{class:b(1==E.value&&"btn_tab_active"),onClick:a[11]||(a[11]=e=>E.value=1)},{default:f((()=>[Ke])),_:1},8,["class"]),_(d,{class:b(2==E.value&&"btn_tab_active"),onClick:a[12]||(a[12]=e=>E.value=2)},{default:f((()=>[Ee])),_:1},8,["class"])])),_:1})]),1==E.value?(v(),r("div",qe,[Ne,m("div",Be,[_(P,{id:"qrImg",value:Ea.value,size:160,level:"H"},null,8,["value"])]),m("span",{class:"fleximg fresh_code",onClick:qa},[_(K,{href:"#icon-shuaxin",size:"14px"}),De]),m("div",He,[_(d,{type:"primary",onClick:Da},{default:f((()=>[Le])),_:1})])])):2==E.value?(v(),r("div",Me,[Ae,m("div",Fe,[_(T,{column:1},{default:f((()=>[_(J,{label:"邀请链接","class-name":"two"},{default:f((()=>[h(p(La.value),1)])),_:1})])),_:1})]),m("div",Je,[_(d,{type:"primary",onClick:a[13]||(a[13]=e=>(async e=>{try{await Aa(e),B("复制成功")}catch(a){D("该浏览器不支持自动复制")}Za()})(La.value))},{default:f((()=>[Qe])),_:1})])])):(v(),r("div",Re,[Se,We,_(Ia,{ref_key:"num",ref:i,model:g(C),rules:g(el)},{default:f((()=>[m("div",Ge,[_(c,{modelValue:g(C).msg,"onUpdate:modelValue":a[14]||(a[14]=e=>g(C).msg=e),placeholder:"受邀人员姓名",class:"mb16"},null,8,["modelValue"]),_(za,{prop:"tel"},{default:f((()=>[_(c,{modelValue:g(C).tel,"onUpdate:modelValue":a[16]||(a[16]=e=>g(C).tel=e),placeholder:"受邀人员手机号"},{prepend:f((()=>[_(Z,{modelValue:$a.value,"onUpdate:modelValue":a[15]||(a[15]=e=>$a.value=e)},{default:f((()=>[(v(!0),r(y,null,V(g(O),((e,a)=>(v(),$(Y,{key:a,label:"+"+e.value,value:e.value},{default:f((()=>[h(p(e.name+" +"+e.value),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["model","rules"]),m("div",Te,[_(d,{type:"primary",onClick:Za},{default:f((()=>[Xe])),_:1})])]))])),_:1},8,["modelValue"]),_(j,{modelValue:_a.value,"onUpdate:modelValue":a[23]||(a[23]=e=>_a.value=e),width:"500px","custom-class":"del_dialog",title:"编辑人员",onClose:Ya},{default:f((()=>[m("div",Ye,[Ze,_(c,{modelValue:Ua.value,"onUpdate:modelValue":a[18]||(a[18]=e=>Ua.value=e)},null,8,["modelValue"])]),m("div",ea,[aa,_(c,{modelValue:ja.value,"onUpdate:modelValue":a[19]||(a[19]=e=>ja.value=e),disabled:""},null,8,["modelValue"])]),m("div",la,[sa,_(Z,{modelValue:Ca.value,"onUpdate:modelValue":a[20]||(a[20]=e=>Ca.value=e),multiple:"",placeholder:"请选择分组（可多选）"},{default:f((()=>[(v(!0),r(y,null,V(xa.value,((e,a)=>(v(),$(Y,{key:a,label:e,value:Number(a)},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),m("div",ua,[ta,_(Z,{modelValue:Ga.value,"onUpdate:modelValue":a[21]||(a[21]=e=>Ga.value=e),multiple:"",placeholder:"请选择角色（可多选）"},{default:f((()=>[(v(!0),r(y,null,V(Wa.value,((e,a)=>(v(),$(Y,{key:a,label:e,value:Number(a)},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),m("div",oa,[ia,_(H,{modelValue:fa.value,"onUpdate:modelValue":a[22]||(a[22]=e=>fa.value=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),m("div",da,[_(d,{class:"bdc_btn",onClick:Ya},{default:f((()=>[na])),_:1}),_(d,{type:"primary",onClick:Xa},{default:f((()=>[ca])),_:1})])])),_:1},8,["modelValue"])])])])}}},a(ra,l(ma))));var ra,ma,pa=E(va,[["__scopeId","data-v-4e4ba6ca"]]);export{pa as default};
