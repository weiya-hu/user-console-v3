var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as o}from"./KzCascader.307bb50f.js";import{K as i}from"./KzTopBtns.caa46475.js";import{K as u}from"./KzEmpty.94037ae3.js";import{K as n}from"./KzPage.1c312f7c.js";import{_ as p,m as c,P as v,Q as m,R as f,e as y}from"./index.74b5253d.js";import{g as b,a as _,b as w,s as g}from"./findC.5623fc5f.js";import{H as h,g as k,u as x,o as V,I as j,J as z,a as O,w as C,P as K,aa as P,B as U,a3 as R,a2 as H,av as S,aw as B,r as D,c as I}from"./vue.a499711c.js";import"./KzDialog.920f19cd.js";import"./tinymce.275386ab.js";const L=e=>(S("data-v-18100a78"),e=e(),B(),e),T={class:"dmp_kz_data"},E={class:"kz_card"},M={class:"top_search"},N={class:"fcs"},F=H(" 查询 "),J=H(" 重置 "),Q={class:"kz_card"},q={class:"fsc f1"},A=L((()=>z("div",{class:"card_title"},"康州数据源",-1))),G=L((()=>z("div",{class:"tips"},[
H(" 为您找到 "),
z("span",null,"0"),
H(" 家符合条件的客户（*根据政策与监管法规要求，联系人手机号脱敏展示） ")],-1))),W={class:"mytable"},X=["innerHTML"],Y={style:{width:"100px"},class:"fcc"},Z={class:"els"},$={style:{width:"100px"},class:"fcc"},ee={class:"els"};var ae=p(h({name:"kzData",setup(e){k([]);const p=k(0),h=k(10),S=k(1),B=c(),L=x((()=>B.state.addressHash)),ae=x((()=>B.state.typeHash));k([]);const le=["","success","info","warning","danger"],te=k(0),de=k(!1),se=k([]),re=k({size:h.value,current:1,source:1}),oe=k([]);(async()=>{const e=await _();1===e.status&&(oe.value=e.body)})();const ie=[{id:0},{id:1,min:18,max:23},{id:2,min:24,max:30},{id:3,min:31,max:40},{id:4,min:41,max:49},{id:5,min:50}],ue=[{id:0,value:"不限"},{id:1,value:"男"},{id:2,value:"女"}],ne=k({keyword:"",industry_id:[],address:[],age:"",education:"",sex:""}),pe=k(),ce=()=>{pe.value.resetFields()},ve=()=>{re.value.current=1,me()},me=async()=>{var e,o;de.value=!0;const i=await w((u=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e})({},re.value),n={keyword:ne.value.keyword,industry_id:ne.value.industry_id.join(),province:ne.value.address[0]||null,city:ne.value.address[1]||null,district:ne.value.address[2]||null,start_age:(null==(e=ie.find((e=>e.id===Number(ne.value.age))))?void 0:e.min)||null,end_age:(null==(o=ie.find((e=>e.id===Number(ne.value.age))))?void 0:o.max)||null,education:ne.value.education,sex:ne.value.sex},a(u,l(n))));var u,n;de.value=!1,1===i.status?(te.value=i.body.total,se.value=i.body.records):y("查询失败")},fe=k([]),ye=e=>{fe.value=e.map((e=>e.id))},be=()=>{me()},_e=k(),we=k(),ge=x((()=>!fe.value.length)),he=async()=>{we.value.setLoading(!0);const e=await g({list:fe.value});we.value.close(e.message),fe.value=[],_e.value.clearSelection()};return(e,a)=>{const l=D("el-form-item"),t=D("el-input"),d=D("el-radio"),s=D("el-radio-group"),r=D("el-button"),c=D("el-form"),y=D("el-table-column"),_=D("el-tooltip"),w=D("el-tag"),g=D("el-table");return V(),j("div",T,[z("div",E,[z("div",M,[O(c,{ref_key:"formRef",ref:pe,model:ne.value},{default:C((()=>[z("div",N,[O(l,{label:"行业",prop:"industry_id"},{default:C((()=>[O(o,{ref:"typeCRef",modelValue:ne.value.industry_id,"onUpdate:modelValue":a[0]||(a[0]=e=>ne.value.industry_id=e),type:"type"},null,8,["modelValue"])])),_:1}),O(l,{label:"地区",prop:"address"},{default:C((()=>[O(o,{ref:"addrCRef",modelValue:ne.value.address,"onUpdate:modelValue":a[1]||(a[1]=e=>ne.value.address=e),type:"address"},null,8,["modelValue"])])),_:1}),O(l,{label:"关键字",prop:"keyword"},{default:C((()=>[O(t,{modelValue:ne.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>ne.value.keyword=e),placeholder:"请输入职业、兴趣等关键词",maxlength:"15"},null,8,["modelValue"])])),_:1})]),O(l,{label:"年龄",prop:"age"},{default:C((()=>[O(s,{modelValue:ne.value.age,"onUpdate:modelValue":a[3]||(a[3]=e=>ne.value.age=e)},{default:C((()=>[(V(),j(K,null,P(ie,(e=>O(d,{key:e.id,label:e.id},{default:C((()=>[H(R(e.min?e.max?e.min+"岁-"+e.max+"岁":e.min+"+岁":"不限"),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),O(l,{label:"学历",prop:"education"},{default:C((()=>[O(s,{modelValue:ne.value.education,"onUpdate:modelValue":a[4]||(a[4]=e=>ne.value.education=e)},{default:C((()=>[(V(!0),j(K,null,P(oe.value,(e=>(V(),I(d,{key:e.id,label:e.value},{default:C((()=>[H(R(e.id?e.name:"不限"),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),O(l,{label:"性别",prop:"sex"},{default:C((()=>[O(s,{modelValue:ne.value.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>ne.value.sex=e)},{default:C((()=>[(V(),j(K,null,P(ue,(e=>O(d,{key:e.id,label:e.id},{default:C((()=>[H(R(e.value),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),z("div",null,[O(r,{type:"primary",onClick:ve},{default:C((()=>[F])),_:1}),O(r,{onClick:ce},{default:C((()=>[J])),_:1})])])),_:1},8,["model"])])]),z("div",Q,[z("div",q,[A,O(i,{ref_key:"topBtnRef",ref:we,type:"sync",syncbtn:"","sync-api":U(b),"sync-disabled":U(ge),class:"topbtns mr20",onSync:he},null,8,["sync-api","sync-disabled"])]),G,z("div",W,[O(g,{ref_key:"tableRef",ref:_e,data:se.value,style:{width:"100%"},height:"100%",onSelectionChange:ye},{empty:C((()=>[O(u)])),default:C((()=>[O(y,{type:"selection",width:"50"}),O(y,{property:"name",label:"姓名",width:"70"}),O(y,{property:"sex",label:"性别",width:"60"},{default:C((e=>[z("div",null,R(0==e.row.sex?"未知":1==e.row.sex?"男":"女"),1)])),_:1}),O(y,{property:"age",label:"年龄",width:"70"}),O(y,{property:"education",label:"学历",width:"130"},{default:C((e=>[H(R(oe.value.find((a=>a.id===e.row.education)).name),1)])),_:1}),O(y,{property:"mobiles",label:"联系方式",width:"120"},{default:C((e=>[z("div",{innerHTML:e.row.mobiles},null,8,X)])),_:1}),O(y,{property:"email",label:"邮箱",width:"180"}),O(y,{property:"industry_id",label:"从事行业",width:"110"},{default:C((e=>[O(_,{effect:"dark",placement:"top"},{content:C((()=>[z("div",Y,R(U(v)(e.row.industry_id,U(ae))),1)])),default:C((()=>[z("div",Z,R(U(v)(e.row.industry_id,U(ae),"last")),1)])),_:2},1024)])),_:1}),O(y,{property:"job",label:"职业",width:"120"}),O(y,{property:"tags",label:"行为兴趣",width:"250"},{default:C((({row:e})=>[(V(!0),j(K,null,P(e.tags,((e,a)=>(V(),I(w,{key:a,class:"user_tag",type:le[a]},{default:C((()=>[H(R(e),1)])),_:2},1032,["type"])))),128))])),_:1}),O(y,{property:"address",label:"地区",width:"140"},{default:C((e=>[O(_,{effect:"dark",placement:"top"},{content:C((()=>[z("div",$,R(U(v)(U(m)(e.row.province,e.row.city,e.row.district),U(L))),1)])),default:C((()=>[z("div",ee,R(U(v)(U(m)(e.row.province,e.row.city,e.row.district),U(L))),1)])),_:2},1024)])),_:1}),O(y,{property:"source",label:"来源",width:"100"},{default:C((e=>[z("div",null,R(U(f)(e.row.source)),1)])),_:1})])),_:1},8,["data"])]),O(n,{page:S.value,"onUpdate:page":a[6]||(a[6]=e=>S.value=e),size:h.value,"onUpdate:size":a[7]||(a[7]=e=>h.value=e),total:p.value,onChange:be},null,8,["page","size","total"])])])}}}),[["__scopeId","data-v-18100a78"]]);export{ae as default};
