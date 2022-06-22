var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{H as o,u,g as i,$ as n,o as p,c,w as m,J as f,a as v,I as y,aa as b,P as _,ac as g,B as w,a3 as k,a2 as x,r as j,ad as V}from"./vue.a499711c.js";import{_ as z}from"./KzCascader.6a65f304.js";import{K as h}from"./KzTopBtns.baf6f18f.js";import{K}from"./KzEmpty.b11d49f7.js";import{K as O}from"./KzDmpTitle.75aa6a30.js";import{K as U}from"./KzPage.9c6d1927.js";import{_ as C,m as P,T as H,U as R,V as T,e as D}from"./index.561f5261.js";import{g as S,a as B,b as I,s as L}from"./findC.49cdeaf2.js";import"./KzDialog.9ecb6295.js";import"./kzkf.83b11867.js";import"./tinymce.275386ab.js";const E={class:"top_search kz_card dmp_page mb16"},M={class:"fcs"},N=x(" 查询 "),F=x(" 重置 "),J={class:"dmp_c_kzdata_content kz_card dmp_page"},$={class:"fsc mb20"},q={class:"dmp_table"},A=["innerHTML"],G={style:{width:"100px"},class:"fcc"},Q={class:"els"},W={style:{width:"100px"},class:"fcc"},X={class:"els"};var Y=C(o({name:"kzData",setup(e){const o=P(),C=u((()=>o.state.addressHash)),Y=u((()=>o.state.typeHash));i([]);const Z=["","success","info","warning","danger"],ee=i(0),ae=i(!1),le=i([]),te=i({size:50,current:1,source:1}),de=i([]);(async()=>{const e=await B();1===e.status&&(de.value=e.body)})();const se=[{id:0},{id:1,min:18,max:23},{id:2,min:24,max:30},{id:3,min:31,max:40},{id:4,min:41,max:49},{id:5,min:50}],re=[{id:0,value:"不限"},{id:1,value:"男"},{id:2,value:"女"}],oe=i({keyword:"",industry_id:[],address:[],age:"",education:"",sex:""}),ue=i(),ie=()=>{ue.value.resetFields()},ne=()=>{te.value.current=1,pe()},pe=async()=>{var e,o;ae.value=!0;const u=await I((i=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e})({},te.value),n={keyword:oe.value.keyword,industry_id:oe.value.industry_id.join(),province:oe.value.address[0]||null,city:oe.value.address[1]||null,district:oe.value.address[2]||null,start_age:(null==(e=se.find((e=>e.id===Number(oe.value.age))))?void 0:e.min)||null,end_age:(null==(o=se.find((e=>e.id===Number(oe.value.age))))?void 0:o.max)||null,education:oe.value.education,sex:oe.value.sex},a(i,l(n))));var i,n;ae.value=!1,1===u.status?(ee.value=u.body.total,le.value=u.body.records):D("查询失败")},ce=i([]),me=e=>{ce.value=e.map((e=>e.id))},fe=()=>{pe()},ve=i(),ye=i(),be=u((()=>!ce.value.length)),_e=async()=>{ye.value.setLoading(!0);const e=await L({list:ce.value});ye.value.close(e.message),ce.value=[],ve.value.clearSelection()};return(e,a)=>{const l=j("el-form-item"),t=j("el-input"),d=j("el-radio"),s=j("el-radio-group"),r=j("el-button"),o=j("el-form"),u=j("el-table-column"),i=j("el-tooltip"),P=j("el-tag"),D=j("el-table"),B=j("el-scrollbar"),I=V("loading");return n((p(),c(B,{class:"dmp_c_kzdata_page"},{default:m((()=>[f("div",E,[v(o,{ref_key:"formRef",ref:ue,model:oe.value,onKeyup:g(ne,["enter"])},{default:m((()=>[f("div",M,[v(l,{label:"行业",prop:"industry_id"},{default:m((()=>[v(z,{ref:"typeCRef",modelValue:oe.value.industry_id,"onUpdate:modelValue":a[0]||(a[0]=e=>oe.value.industry_id=e),type:"type"},null,8,["modelValue"])])),_:1}),v(l,{label:"地区",prop:"address"},{default:m((()=>[v(z,{ref:"addrCRef",modelValue:oe.value.address,"onUpdate:modelValue":a[1]||(a[1]=e=>oe.value.address=e),type:"address"},null,8,["modelValue"])])),_:1}),v(l,{label:"关键字",prop:"keyword"},{default:m((()=>[v(t,{modelValue:oe.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>oe.value.keyword=e),placeholder:"请输入职业、兴趣等关键词",maxlength:"15"},null,8,["modelValue"])])),_:1})]),v(l,{label:"年龄",prop:"age"},{default:m((()=>[v(s,{modelValue:oe.value.age,"onUpdate:modelValue":a[3]||(a[3]=e=>oe.value.age=e)},{default:m((()=>[(p(),y(_,null,b(se,(e=>v(d,{key:e.id,label:e.id},{default:m((()=>[x(k(e.min?e.max?e.min+"岁-"+e.max+"岁":e.min+"+岁":"不限"),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),v(l,{label:"学历",prop:"education"},{default:m((()=>[v(s,{modelValue:oe.value.education,"onUpdate:modelValue":a[4]||(a[4]=e=>oe.value.education=e)},{default:m((()=>[(p(!0),y(_,null,b(de.value,(e=>(p(),c(d,{key:e.id,label:e.value},{default:m((()=>[x(k(e.id?e.name:"不限"),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(l,{label:"性别",prop:"sex"},{default:m((()=>[v(s,{modelValue:oe.value.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>oe.value.sex=e)},{default:m((()=>[(p(),y(_,null,b(re,(e=>v(d,{key:e.id,label:e.id},{default:m((()=>[x(k(e.value),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),f("div",null,[v(r,{type:"primary",onClick:ne},{default:m((()=>[N])),_:1}),v(r,{onClick:ie},{default:m((()=>[F])),_:1})])])),_:1},8,["model","onKeyup"])]),f("div",J,[f("div",$,[v(O,{total:ee.value},null,8,["total"]),v(h,{ref_key:"topBtnRef",ref:ye,type:"sync",syncbtn:"","sync-api":w(S),"sync-disabled":w(be),onSync:_e},null,8,["sync-api","sync-disabled"])]),f("div",q,[v(D,{ref_key:"tableRef",ref:ve,data:le.value,style:{width:"100%"},height:"100%",onSelectionChange:me},{empty:m((()=>[v(K)])),default:m((()=>[v(u,{type:"selection",width:"50"}),v(u,{property:"name",label:"姓名"}),v(u,{property:"sex",label:"性别"},{default:m((e=>[f("div",null,k(0==e.row.sex?"未知":1==e.row.sex?"男":"女"),1)])),_:1}),v(u,{property:"age",label:"年龄"}),v(u,{property:"education",label:"学历"},{default:m((e=>[x(k(de.value.find((a=>a.id===e.row.education)).name),1)])),_:1}),v(u,{property:"mobiles",label:"联系方式"},{default:m((e=>[f("div",{innerHTML:e.row.mobiles},null,8,A)])),_:1}),v(u,{property:"email",label:"邮箱"}),v(u,{property:"industry_id",label:"从事行业"},{default:m((e=>[v(i,{effect:"dark",placement:"top"},{content:m((()=>[f("div",G,k(w(H)(e.row.industry_id,w(Y))),1)])),default:m((()=>[f("div",Q,k(w(H)(e.row.industry_id,w(Y),"last")),1)])),_:2},1024)])),_:1}),v(u,{property:"job",label:"职业"}),v(u,{property:"tags",label:"行为兴趣",width:"250"},{default:m((({row:e})=>[(p(!0),y(_,null,b(e.tags,((e,a)=>(p(),c(P,{key:a,class:"user_tag",type:Z[a]},{default:m((()=>[x(k(e),1)])),_:2},1032,["type"])))),128))])),_:1}),v(u,{property:"address",label:"地区"},{default:m((e=>[v(i,{effect:"dark",placement:"top"},{content:m((()=>[f("div",W,k(w(H)(w(R)(e.row.province,e.row.city,e.row.district),w(C))),1)])),default:m((()=>[f("div",X,k(w(H)(w(R)(e.row.province,e.row.city,e.row.district),w(C))),1)])),_:2},1024)])),_:1}),v(u,{property:"source",label:"来源"},{default:m((e=>[f("div",null,k(w(T)(e.row.source)),1)])),_:1})])),_:1},8,["data"])]),v(U,{page:te.value.current,"onUpdate:page":a[6]||(a[6]=e=>te.value.current=e),size:te.value.size,"onUpdate:size":a[7]||(a[7]=e=>te.value.size=e),total:ee.value,onChange:fe},null,8,["page","size","total"])])])),_:1})),[[I,ae.value]])}}}),[["__scopeId","data-v-351d1d3a"]]);export{Y as default};
