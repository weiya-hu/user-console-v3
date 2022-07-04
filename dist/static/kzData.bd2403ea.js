var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{H as o,u,g as i,_ as n,o as p,c,w as m,J as v,a as f,I as y,aa as b,P as _,ac as g,B as w,a2 as k,a1 as x,b as j,ae as V}from"./vue.fa004e33.js";import{_ as z}from"./KzCascader.2133cf09.js";import{K as h}from"./KzTopBtns.0ad3e18e.js";import{K}from"./KzEmpty.cf970ba3.js";import{K as O}from"./KzDmpTitle.c702cca0.js";import{K as U}from"./KzPage.dd3597d0.js";import{_ as C,m as P,S as H,T as R,U as S,e as T}from"./index.e45ab2da.js";import{g as B,a as D,b as I,s as L}from"./findC.4d8edfe3.js";import"./KzDialog.579e968a.js";import"./kzkf.70bb183f.js";import"./tinymce.50e98bcc.js";const E={class:"top_search kz_card dmp_page mb16"},M={class:"fcs"},N=x(" 查询 "),F=x(" 重置 "),J={class:"dmp_c_kzdata_content kz_card dmp_page"},q={class:"fsc mb20"},A={class:"dmp_table"},G=["innerHTML"],Q={style:{width:"100px"},class:"fcc"},W={class:"els"},X={style:{width:"100px"},class:"fcc"},Y={class:"els"};var Z=C(o({setup(e){const o=P(),C=u((()=>o.state.addressHash)),Z=u((()=>o.state.typeHash));i([]);const $=["","success","info","warning","danger"],ee=i(0),ae=i(!1),le=i([]),te=i({size:50,current:1,source:1}),de=i([]);(async()=>{const e=await D();1===e.status&&(de.value=e.body)})();const se=[{id:0},{id:1,min:18,max:23},{id:2,min:24,max:30},{id:3,min:31,max:40},{id:4,min:41,max:49},{id:5,min:50}],re=[{id:0,value:"不限"},{id:1,value:"男"},{id:2,value:"女"}],oe=i({keyword:"",industry_id:[],address:[],age:"",education:"",sex:""}),ue=i(),ie=()=>{ue.value.resetFields()},ne=()=>{te.value.current=1,pe()},pe=async()=>{var e,o;ae.value=!0;const u=await I((i=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e})({},te.value),n={keyword:oe.value.keyword,industry_id:oe.value.industry_id.join(),province:oe.value.address[0]||null,city:oe.value.address[1]||null,district:oe.value.address[2]||null,start_age:(null==(e=se.find((e=>e.id===Number(oe.value.age))))?void 0:e.min)||null,end_age:(null==(o=se.find((e=>e.id===Number(oe.value.age))))?void 0:o.max)||null,education:oe.value.education,sex:oe.value.sex},a(i,l(n))));var i,n;ae.value=!1,1===u.status?(ee.value=u.body.total,le.value=u.body.records):T("查询失败")},ce=i([]),me=e=>{ce.value=e.map((e=>e.id))},ve=()=>{pe()},fe=i(),ye=i(),be=u((()=>!ce.value.length)),_e=async()=>{ye.value.setLoading(!0);const e=await L({list:ce.value});ye.value.close(e.message),ce.value=[],fe.value.clearSelection()};return(e,a)=>{const l=j("el-form-item"),t=j("el-input"),d=j("el-radio"),s=j("el-radio-group"),r=j("el-button"),o=j("el-form"),u=j("el-table-column"),i=j("el-tooltip"),P=j("el-tag"),T=j("el-table"),D=j("el-scrollbar"),I=V("loading");return n((p(),c(D,{class:"dmp_c_kzdata_page"},{default:m((()=>[v("div",E,[f(o,{ref_key:"formRef",ref:ue,model:oe.value,onKeyup:g(ne,["enter"])},{default:m((()=>[v("div",M,[f(l,{label:"行业",prop:"industry_id"},{default:m((()=>[f(z,{ref:"typeCRef",modelValue:oe.value.industry_id,"onUpdate:modelValue":a[0]||(a[0]=e=>oe.value.industry_id=e),type:"type"},null,8,["modelValue"])])),_:1}),f(l,{label:"地区",prop:"address"},{default:m((()=>[f(z,{ref:"addrCRef",modelValue:oe.value.address,"onUpdate:modelValue":a[1]||(a[1]=e=>oe.value.address=e),type:"address"},null,8,["modelValue"])])),_:1}),f(l,{label:"关键字",prop:"keyword"},{default:m((()=>[f(t,{modelValue:oe.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>oe.value.keyword=e),placeholder:"请输入职业、兴趣等关键词",maxlength:"15"},null,8,["modelValue"])])),_:1})]),f(l,{label:"年龄",prop:"age"},{default:m((()=>[f(s,{modelValue:oe.value.age,"onUpdate:modelValue":a[3]||(a[3]=e=>oe.value.age=e)},{default:m((()=>[(p(),y(_,null,b(se,(e=>f(d,{key:e.id,label:e.id},{default:m((()=>[x(k(e.min?e.max?e.min+"岁-"+e.max+"岁":e.min+"+岁":"不限"),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),f(l,{label:"学历",prop:"education"},{default:m((()=>[f(s,{modelValue:oe.value.education,"onUpdate:modelValue":a[4]||(a[4]=e=>oe.value.education=e)},{default:m((()=>[(p(!0),y(_,null,b(de.value,(e=>(p(),c(d,{key:e.id,label:e.value},{default:m((()=>[x(k(e.id?e.name:"不限"),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(l,{label:"性别",prop:"sex"},{default:m((()=>[f(s,{modelValue:oe.value.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>oe.value.sex=e)},{default:m((()=>[(p(),y(_,null,b(re,(e=>f(d,{key:e.id,label:e.id},{default:m((()=>[x(k(e.value),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),v("div",null,[f(r,{type:"primary",onClick:ne},{default:m((()=>[N])),_:1}),f(r,{onClick:ie},{default:m((()=>[F])),_:1})])])),_:1},8,["model","onKeyup"])]),v("div",J,[v("div",q,[f(O,{total:ee.value},null,8,["total"]),f(h,{ref_key:"topBtnRef",ref:ye,type:"sync",syncbtn:"","sync-api":w(B),"sync-disabled":w(be),onSync:_e},null,8,["sync-api","sync-disabled"])]),v("div",A,[f(T,{ref_key:"tableRef",ref:fe,data:le.value,style:{width:"100%"},height:"100%",onSelectionChange:me},{empty:m((()=>[f(K)])),default:m((()=>[f(u,{type:"selection",width:"50"}),f(u,{property:"name",label:"姓名"}),f(u,{property:"sex",label:"性别"},{default:m((e=>[v("div",null,k(0==e.row.sex?"未知":1==e.row.sex?"男":"女"),1)])),_:1}),f(u,{property:"age",label:"年龄"}),f(u,{property:"education",label:"学历"},{default:m((e=>[x(k(de.value.find((a=>a.id===e.row.education)).name),1)])),_:1}),f(u,{property:"mobiles",label:"联系方式"},{default:m((e=>[v("div",{innerHTML:e.row.mobiles},null,8,G)])),_:1}),f(u,{property:"email",label:"邮箱"}),f(u,{property:"industry_id",label:"从事行业"},{default:m((e=>[f(i,{effect:"dark",placement:"top"},{content:m((()=>[v("div",Q,k(w(H)(e.row.industry_id,w(Z))),1)])),default:m((()=>[v("div",W,k(w(H)(e.row.industry_id,w(Z),"last")),1)])),_:2},1024)])),_:1}),f(u,{property:"job",label:"职业"}),f(u,{property:"tags",label:"行为兴趣",width:"250"},{default:m((({row:e})=>[(p(!0),y(_,null,b(e.tags,((e,a)=>(p(),c(P,{key:a,class:"user_tag",type:$[a]},{default:m((()=>[x(k(e),1)])),_:2},1032,["type"])))),128))])),_:1}),f(u,{property:"address",label:"地区"},{default:m((e=>[f(i,{effect:"dark",placement:"top"},{content:m((()=>[v("div",X,k(w(H)(w(R)(e.row.province,e.row.city,e.row.district),w(C))),1)])),default:m((()=>[v("div",Y,k(w(H)(w(R)(e.row.province,e.row.city,e.row.district),w(C))),1)])),_:2},1024)])),_:1}),f(u,{property:"source",label:"来源"},{default:m((e=>[v("div",null,k(w(S)(e.row.source)),1)])),_:1})])),_:1},8,["data"])]),f(U,{page:te.value.current,"onUpdate:page":a[6]||(a[6]=e=>te.value.current=e),size:te.value.size,"onUpdate:size":a[7]||(a[7]=e=>te.value.size=e),total:ee.value,onChange:ve},null,8,["page","size","total"])])])),_:1})),[[I,ae.value]])}}}),[["__scopeId","data-v-351d1d3a"]]);export{Z as default};
