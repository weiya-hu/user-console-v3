var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as r}from"./KzCascader.598b8622.js";import{K as u}from"./KzTopBtns.840b738a.js";import{K as i}from"./KzEmpty.640dfbae.js";import{K as n}from"./KzPage.0e73684e.js";import{K as p}from"./KzDmpTitle.9b0cc381.js";import{_ as c,m,O as v,P as f,Q as y,e as b}from"./index.a202d357.js";import{g as _,a as w,b as g,s as h}from"./findC.41817a0b.js";import{H as x,g as k,u as j,o as V,I as z,J as K,a as O,w as C,P,aa as U,B as H,a2 as R,a1 as S,b as T,c as B}from"./vue.fa004e33.js";import"./KzDialog.8a40b047.js";import"./tinymce.50e98bcc.js";const D={class:"dmp_other_data"},I={class:"kz_card"},L={class:"top_search"},E={class:"fcs"},M=S(" 查询 "),N=S(" 重置 "),F={class:"kz_card"},J={class:"fsc f1"},Q={class:"dmp_table"},q=["innerHTML"],A={style:{width:"100px"},class:"fcc"},G={class:"els"},W={style:{width:"100px"},class:"fcc"},X={class:"els"};var Y=c(x({setup(e){const c=k(0),x=k(10),Y=k(1),Z=m(),$=j((()=>Z.state.addressHash)),ee=j((()=>Z.state.typeHash));k([]);const ae=["","success","info","warning","danger"],le=k(!1),te=k([]),de=k({size:x.value,current:1,source:1}),se=k([]);(async()=>{const e=await w();1===e.status&&(se.value=e.body)})();const oe=[{id:0},{id:1,min:18,max:23},{id:2,min:24,max:30},{id:3,min:31,max:40},{id:4,min:41,max:49},{id:5,min:50}],re=[{id:0,value:"不限"},{id:1,value:"男"},{id:2,value:"女"}],ue=k({keyword:"",industry_id:[],address:[],age:"",education:"",sex:""}),ie=k(),ne=()=>{ie.value.resetFields()},pe=()=>{de.value.current=1,ce()},ce=async()=>{var e,r;le.value=!0;const u=await g((i=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&o(e,l,a[l]);return e})({},de.value),n={keyword:ue.value.keyword,industry_id:ue.value.industry_id.join(),province:ue.value.address[0]||null,city:ue.value.address[1]||null,district:ue.value.address[2]||null,start_age:(null==(e=oe.find((e=>e.id===Number(ue.value.age))))?void 0:e.min)||null,end_age:(null==(r=oe.find((e=>e.id===Number(ue.value.age))))?void 0:r.max)||null,education:ue.value.education,sex:ue.value.sex},a(i,l(n))));var i,n;le.value=!1,1===u.status?(c.value=u.body.total,te.value=u.body.records):b("查询失败")},me=k([]),ve=e=>{me.value=e.map((e=>e.id))},fe=()=>{ce()},ye=k(),be=k(),_e=j((()=>!me.value.length)),we=async()=>{be.value.setLoading(!0);const e=await h({list:me.value});be.value.close(e.message),me.value=[],ye.value.clearSelection()};return(e,a)=>{const l=T("el-form-item"),t=T("el-input"),d=T("el-radio"),s=T("el-radio-group"),o=T("el-button"),m=T("el-form"),b=T("el-table-column"),w=T("el-tooltip"),g=T("el-tag"),h=T("el-table");return V(),z("div",D,[K("div",I,[K("div",L,[O(m,{ref_key:"formRef",ref:ie,model:ue.value},{default:C((()=>[K("div",E,[O(l,{label:"行业",prop:"industry_id"},{default:C((()=>[O(r,{ref:"typeCRef",modelValue:ue.value.industry_id,"onUpdate:modelValue":a[0]||(a[0]=e=>ue.value.industry_id=e),type:"type"},null,8,["modelValue"])])),_:1}),O(l,{label:"地区",prop:"address"},{default:C((()=>[O(r,{ref:"addrCRef",modelValue:ue.value.address,"onUpdate:modelValue":a[1]||(a[1]=e=>ue.value.address=e),type:"address"},null,8,["modelValue"])])),_:1}),O(l,{label:"关键字",prop:"keyword"},{default:C((()=>[O(t,{modelValue:ue.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>ue.value.keyword=e),placeholder:"请输入职业、兴趣等关键词",maxlength:"15"},null,8,["modelValue"])])),_:1})]),O(l,{label:"年龄",prop:"age"},{default:C((()=>[O(s,{modelValue:ue.value.age,"onUpdate:modelValue":a[3]||(a[3]=e=>ue.value.age=e)},{default:C((()=>[(V(),z(P,null,U(oe,(e=>O(d,{key:e.id,label:e.id},{default:C((()=>[S(R(e.min?e.max?e.min+"岁-"+e.max+"岁":e.min+"+岁":"不限"),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),O(l,{label:"学历",prop:"education"},{default:C((()=>[O(s,{modelValue:ue.value.education,"onUpdate:modelValue":a[4]||(a[4]=e=>ue.value.education=e)},{default:C((()=>[(V(!0),z(P,null,U(se.value,(e=>(V(),B(d,{key:e.id,label:e.value},{default:C((()=>[S(R(e.id?e.name:"不限"),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),O(l,{label:"性别",prop:"sex"},{default:C((()=>[O(s,{modelValue:ue.value.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>ue.value.sex=e)},{default:C((()=>[(V(),z(P,null,U(re,(e=>O(d,{key:e.id,label:e.id},{default:C((()=>[S(R(e.value),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1}),K("div",null,[O(o,{type:"primary",onClick:pe},{default:C((()=>[M])),_:1}),O(o,{onClick:ne},{default:C((()=>[N])),_:1})])])),_:1},8,["model"])])]),K("div",F,[K("div",J,[O(p,{total:c.value,class:"pt20 pb20 ml16"},null,8,["total"]),O(u,{ref_key:"topBtnRef",ref:be,type:"sync",syncbtn:"","sync-api":H(_),"sync-disabled":H(_e),class:"topbtns mr20",onSync:we},null,8,["sync-api","sync-disabled"])]),K("div",Q,[O(h,{ref_key:"tableRef",ref:ye,data:te.value,style:{width:"100%"},height:"100%",onSelectionChange:ve},{empty:C((()=>[O(i)])),default:C((()=>[O(b,{type:"selection",width:"50"}),O(b,{property:"name",label:"姓名",width:"70"}),O(b,{property:"sex",label:"性别",width:"60"},{default:C((e=>[K("div",null,R(0==e.row.sex?"未知":1==e.row.sex?"男":"女"),1)])),_:1}),O(b,{property:"age",label:"年龄",width:"70"}),O(b,{property:"education",label:"学历",width:"130"},{default:C((e=>[S(R(se.value.find((a=>a.id===e.row.education)).name),1)])),_:1}),O(b,{property:"mobiles",label:"联系方式",width:"120"},{default:C((e=>[K("div",{innerHTML:e.row.mobiles},null,8,q)])),_:1}),O(b,{property:"email",label:"邮箱",width:"180"}),O(b,{property:"industry_id",label:"从事行业",width:"110"},{default:C((e=>[O(w,{effect:"dark",placement:"top"},{content:C((()=>[K("div",A,R(H(v)(e.row.industry_id,H(ee))),1)])),default:C((()=>[K("div",G,R(H(v)(e.row.industry_id,H(ee),"last")),1)])),_:2},1024)])),_:1}),O(b,{property:"job",label:"职业",width:"120"}),O(b,{property:"tags",label:"行为兴趣",width:"250"},{default:C((({row:e})=>[(V(!0),z(P,null,U(e.tags,((e,a)=>(V(),B(g,{key:a,class:"user_tag",type:ae[a]},{default:C((()=>[S(R(e),1)])),_:2},1032,["type"])))),128))])),_:1}),O(b,{property:"address",label:"地区",width:"140"},{default:C((e=>[O(w,{effect:"dark",placement:"top"},{content:C((()=>[K("div",W,R(H(v)(H(f)(e.row.province,e.row.city,e.row.district),H($))),1)])),default:C((()=>[K("div",X,R(H(v)(H(f)(e.row.province,e.row.city,e.row.district),H($))),1)])),_:2},1024)])),_:1}),O(b,{property:"source",label:"来源",width:"100"},{default:C((e=>[K("div",null,R(H(y)(e.row.source)),1)])),_:1})])),_:1},8,["data"])]),O(n,{page:Y.value,"onUpdate:page":a[6]||(a[6]=e=>Y.value=e),size:x.value,"onUpdate:size":a[7]||(a[7]=e=>x.value=e),total:c.value,onChange:fe},null,8,["page","size","total"])])])}}}),[["__scopeId","data-v-4b0bd3a9"]]);export{Y as default};