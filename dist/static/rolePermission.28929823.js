var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,l)=>{for(var a in l||(l={}))u.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&s(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{_ as r,g as c,p as d,U as A,a as v,E as m,e as p,o as _}from"./index.a202d357.js";import{H as f,g,i as k,u as h,b as y,o as b,I as C,P as V,aa as w,J as x,a as E,w as U,a1 as I,a2 as B,c as S,B as N,a0 as O,X as Q,av as R,aw as z,ax as j,q as D,W as J}from"./vue.fa004e33.js";import{K}from"./KzDialog.8a40b047.js";import{f as M}from"./date.23847c74.js";import{K as P}from"./KzPage.0e73684e.js";import"./tinymce.50e98bcc.js";var T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAACCElEQVQoFYWSz2sTURDHZ17rJk3SaHcXAoJ4EosmpCVo8GRBkTZU/CMEMTXFH714EMnFQ4MgHhR78ebJgwq5hGqNeBCESiqIeFJ7sEp229Sk281m942zDSuJP+fwHrzvfOYN3xmE/8T4bPOQ69o3APA4AtWRxPzKPe0+/otL5RsZgM4LTv4oBuCKJDoARCVEcXbwb+CRGXNfW3ae8E9hEvSgdkdf5NzFdN7Uieic+BM4XqjvtUkuAeIbUHAaia6n8sa1bi5t8B35rdXsxVbCattVRPp0MKGfeVhEZ6xQn5AelAnEApDk30SpD8zMfdc7llMlgDUtoZ2uFtEOOkqfX58mkI8J8LMi1dGf4LHLm2pr2+H2oKEk9NxyEa0A2tFs5zmb1GzH1akPJWzugGOXNvZ4bfcpEtiq0Cerd7EVQL4mbfcZF7Qgqk++vYlbvibYIZRtryYAvaFdItcLZWfNuLS9CpvkDA9DLoB8EDMFY9Rx6b0Mxfa/uz206j/6MTFDMZPMCgCFlPjAieV5dbOrdE/hSkwzv9oLZYoUMcko87CjsbBy6lfIR/1W04hQC6qlrtJI55tZRkBNiYZOvrq1ez3Qem9M5o0lrrzFm7DGYzjKQJLY2YgSPjw1Eq0/+tpIo/D6NoxC8GVQACUloMX2GlxxgZBeawl9hWfobl8wsvz2UkroA9Gmyg+iyuOL+HQm4AAAAABJRU5ErkJggg==";const F={class:"check_group"},Y={class:"flexl permit_page_front els"},G={class:"flexl permit_page_operate"};var L=r(f({props:{item:null,ckeckedLists:null,allChecked:null,getcheckedListFlag:null},emits:["update:modelValue","allChecked","isIndeterminate"],setup(e,{emit:l}){const a=e,t=g(),u=g(),n=g(),s=g();k(t,(e=>{let a=!0,t=!0,n=!1;for(const l in e)!e[l]&&(a=!1),e[l]&&(t=!1);for(const l in u.value)u.value[l]&&(n=!0);l("allChecked",a),l("isIndeterminate",!a&&!t||n)})),k((()=>a.allChecked),(e=>{const a=e.split(",");"true"==a[1]&&(s.value=JSON.parse(JSON.stringify(n.value)),l("update:modelValue",s.value),t.value=r(t.value,!0),u.value=r(u.value,!1)),"false"==a[1]&&(s.value=r(s.value,[]),l("update:modelValue",s.value),t.value=r(t.value,!1),u.value=r(u.value,!1))})),k((()=>a.getcheckedListFlag),(e=>{v()}));const r=(e,l)=>{const a=JSON.parse(JSON.stringify(e));for(const t in a)a[t]=l;return a},c=(e,l)=>(e.forEach((a=>{if(a.checkAll.permit_id===l.pid)return a.children.push(l),e})),e),d=(e,l)=>{const a={},t={};return e.forEach((e=>{a[e.checkAll.permit_id]=e.children.length===l[e.checkAll.permit_id].length,t[e.checkAll.permit_id]=l[e.checkAll.permit_id].length>0&&l[e.checkAll.permit_id].length<e.children.length})),[a,t]},A=h((()=>{let e=[];return a.item.forEach((l=>{!l.pid&&e.push({checkAll:l,children:[]}),l.pid&&(e=c(e,l))})),e})),v=()=>{let e=[],i={},r={};a.item.forEach((l=>{!l.pid&&e.push({checkAll:l,children:[]}),l.pid&&(e=c(e,l),i[l.pid]=[],r[l.pid]=r[l.pid]?r[l.pid].concat(l.permit_id):[l.permit_id])})),n.value=r,s.value=o(o({},i),a.ckeckedLists),l("update:modelValue",s.value),t.value=d(e,s.value)[0],u.value=d(e,s.value)[1]};v();return(e,a)=>{const r=y("el-checkbox"),c=y("el-checkbox-group");return b(),C("div",F,[(b(!0),C(V,null,w(N(A),((e,a)=>(b(),C("div",{key:a,class:"flexl permit_page"},[x("div",Y,[E(r,{modelValue:t.value[e.checkAll.permit_id],"onUpdate:modelValue":l=>t.value[e.checkAll.permit_id]=l,indeterminate:u.value[e.checkAll.permit_id],onChange:a=>{return r=a,c=e.checkAll.permit_id,s.value=i(o({},s.value),{[c]:r?n.value[c]:[]}),l("update:modelValue",s.value),u.value=i(o({},u.value),{[c]:!1}),void(t.value=i(o({},t.value),{[c]:r}));var r,c}},{default:U((()=>[I(B(e.checkAll.permit_name),1)])),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),E(c,{modelValue:s.value[e.checkAll.permit_id],"onUpdate:modelValue":l=>s.value[e.checkAll.permit_id]=l,onChange:a=>((e,a)=>{const r=e.length;t.value=i(o({},t.value),{[a]:r===n.value[a].length}),u.value=i(o({},u.value),{[a]:r>0&&r<n.value[a].length}),s.value=i(o({},s.value),{[a]:e}),l("update:modelValue",s.value)})(a,e.checkAll.permit_id)},{default:U((()=>[x("div",G,[(b(!0),C(V,null,w(e.children,(e=>(b(),S(r,{key:e.permit_id,class:"permit_page_operate_check",label:e.permit_id},{default:U((()=>[I(B(e.permit_name),1)])),_:2},1032,["label"])))),128))])])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])))),128))])}}}),[["__scopeId","data-v-26d1626d"]]);const Z=()=>c("user ","/web/company/role.list");const q=e=>(R("data-v-7219045c"),e=e(),z(),e),W={class:"flexb role_permission"},X={class:"role_left"},H=q((()=>x("div",null,"全部角色",-1))),$=[q((()=>x("span",null,"+",-1))),I("添加")],ee={class:"role_all"},le=["onClick"],ae={class:"flexr role_operate"},te=[q((()=>x("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABP0lEQVQ4EZ1TvUrEQBCeWTXCwaEYAtY22uhVdlr4AtdF30A9SwvBzs7O0qjgA+h19wI2dlZ3NtpYCyGHcnBgxIz59rIQTXYFF7Kzu9/PzCxZpmK0DpKdLJMNYvHMWW0UTpXi+/65fwNcYWrtx2ci2TWT+Ni7BjjgQgMehyfiPb0mI2YJB1HQc4kNttaJ2yLcXVn0m+rlbZxnFW9mtvFgCH/FCVc8aHULNkF4K1P4bDjOp13g893wtMCPbDyngVA2ZxOa84oBSkZmiIVoE8TVTnzJpN6XtxaOu9v8ZcSIzjsoE23rSgVFBt0zMkP4GAV7iIMI889RMSjDKLu8r1s7DdAzRHWZjZnT4PeFGVE5qqX5RpL/0ennx3i9DLjWEy6n0DKI+jEx7ZJQT5hGLjELNYmpncer/kVwqA20yT+f8ze8UnaR+lSA+gAAAABJRU5ErkJggg=="},null,-1)))],ue=["onClick"],ne=[q((()=>x("img",{src:T},null,-1)))],se=[q((()=>x("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABUUlEQVQ4EcVSPUvDYBC+S2sDXcSqoCKIRXBSKeIPcPQHCI5uUqvQzbWrm+IgTjoK7vojpDo4CeIgIkLU4lKMNDnvTC+5xIij7/I873PPfSUvgjkr2+Q+9l6bAFQ1sqF4P1kc3rs4QF9FR4mgJCPBltUsl1jUIFGLCRVGVUI4vzkc3Ujr0W2u7h0xS02HC5veckiwBoAzBFQDgjIgdPMKaAwBr7nZnYNwGq/AyeMIUPo1WSpyYfGI90cDGa8/4ndstUUlNVme9cUTqFlwcedt8Pb5pSNoufUozy0Avlsm4G/BmOKaZTC/gDH8Rf+/QOYh9Qd2/S5+8FtgFMXy7Eq5K7R3K++zYyNDgpZnk+UeF0BynviRLKnprIWfeVw84tVYvEKh4JwEITXn694V/8JLNViMGuD0gIvHqrOWnFqjMxUE4TphOJGoCZPOktzerzyo+gUa1YAqfdUC3QAAAABJRU5ErkJggg=="},null,-1)))],oe={class:"role_right"},ie={class:"flexb role_right_top"},re={key:0,class:"flexl"},ce={class:"role_name els"},de=[q((()=>x("img",{src:T},null,-1)))],Ae={key:1,class:"flexl"},ve=I("保存"),me=I("取消"),pe=I("删除角色"),_e=I("添加人员"),fe={class:"role_right_down"},ge={class:"flexb"},ke={key:0},he=I("保存"),ye={class:"role_perm"},be={key:0},Ce={class:"check_group_pre"},Ve={key:1},we={class:"fleximg"},xe=I("变更角色"),Ee=I("删除"),Ue={class:"flexl person_change_role"},Ie=q((()=>x("div",null,"角色",-1))),Be={class:"add_person flex"},Se={class:"person_tree"},Ne={class:"person_tree_menu flexl"},Oe=["onClick"],Qe={class:"person_list"},Re={key:0},ze={class:"flexb search_box"},je=I("搜索"),De={key:1,class:"person_group_pre"},Je={class:"person_selected"},Ke={class:"flexb person_selected_top"},Me=q((()=>x("div",null,"已选择",-1))),Pe=q((()=>x("span",null,"/人",-1))),Te={class:"flexl person_checked_list"},Fe={class:"flexr"},Ye=I("取消"),Ge=I("添加");var Le=r(f({setup(e){const l=j(),a=g(),t=g(),u=g(),n=g(!1),s=g(!1),r=g(),f=g([]),k=g(["权限","人员"]),R=g(0),z=g(),T=g(!1),F=g(),Y=g(),G=g(),q=g([]),Le=g([]),Ze=g(!1),qe=g(["全部人员","分组"]),We=g(0),Xe=g(0),He=g(0),$e=g(),el=g();g([]);const ll=g(),al=g([]),tl=g(),ul={children:"list",label:"name"},nl=g(),sl=g(),ol=g(1),il=g(10),rl=g(0),cl=g(!1),dl=g([]),Al=g(),vl={},ml=async()=>{const{status:e,body:a}=await Z(),t=await c("user ","/web/permit/company.list");t.status&&(q.value=_l(t.body)),e&&(()=>{f.value=a;const e=v("roleId"),t=Object.keys(a);z.value=e||t[0],l.push("/manage/company/rolepermission?roleId="+z.value),R.value?gl(z.value):fl(z.value)})()};ml();const pl=h((()=>{const e={};return Le.value.length>0&&Le.value.forEach((l=>{e[l.instance]=i(o({},e[l.instance]),{[l.pid]:e[l.instance]&&e[l.instance][l.pid]?e[l.instance][l.pid].concat(l.permit_id):[l.permit_id]})})),G.value=(new Date).getTime(),e})),_l=e=>{const l={},a=[];return e.forEach((e=>{l[e.instance_id]={};const t=i(o({},e),{select:!1,indeterminate:!1,userSelect:!1});a.push(t)})),Y.value=JSON.parse(JSON.stringify(l)),a},fl=async e=>{const{status:l,body:a}=await(t={roleId:e||v("roleId")},c("user ","/web/permit/role.list",t));var t;l&&(Le.value=a)},gl=async e=>{const l={roleId:e||v("roleId"),current:ol.value,size:il.value},{status:a,body:t}=await(u=l,c("user ","/web/company/user/two.page",u));var u;a&&(sl.value=t.records,rl.value=t.total)},kl=async e=>{cl.value=!0,Al.value=e;const{status:l,body:a}=await(t={memberId:e},c("user ","/web/company/role/ids.get",t));var t;l&&(dl.value=a)},hl=async()=>{const e={role_ids:dl.value,member_id:Al.value},{status:l}=await(e=>d("user ","/web/company/role/ids.up",e,!0))(e);l&&(cl.value=!1,gl())},yl=e=>{m.confirm("是否确认从当前角色中删除此人员","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const l={role_id:Number(v("roleId")),member_id:e},{status:a}=await(e=>d("user ","/web/company/role/id.del",e,!0))(l);a&&gl()}))},bl=async()=>{if(F.value){const e={role_id:Number(z.value),role_name:F.value},{status:l}=await(e=>d("user ","/web/company/role/name.up",e))(e);l&&(f.value[z.value]=F.value,_("修改成功")),T.value=!1,n.value=!1}else p("请输入角色名")},Cl=async()=>{const{status:e}=await(l={role_name:r.value},d("user ","/web/company/role.in",l,!0));var l;s.value=!1,r.value="",e&&(async()=>{const e=await Z();e.status&&(f.value=e.body)})()},Vl=()=>{s.value=!0,D((()=>{u.value.focus()}))},wl=()=>{m.confirm("是否确认保存当前勾选","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const e={map:xl(Y.value),role_id:Number(v("roleId"))},{status:l,message:a}=await(e=>d("user ","/web/permit/role.add",e))(e);l&&(fl(),_(a?a.toString():"保存成功"))}))},xl=e=>{vl.vallue={};for(const l in e)for(const a in e[l])e[l][a].length>0&&(vl.vallue[l]=vl.vallue[l]?vl.vallue[l].concat(e[l][a]):e[l][a]);return vl.vallue},El=async()=>{m.confirm("是否确认删除当前角色","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const e={role_id:Number(v("roleId"))},{status:a,message:t}=await(e=>d("user ","/web/company/role.del",e))(e);a&&(l.push("/manage/company/rolepermission"),ml(),_(t?t.toString():"删除成功"))}))},Ul=()=>{D((()=>{const e=document.querySelector(".add_person_menu_active");e&&(He.value=e.offsetLeft,Xe.value=e.offsetWidth)}))},Il=()=>{Ze.value=!0,Bl(),Ol(),D((()=>{Ul()}))},Bl=async()=>{const{status:e,body:l}=await c("user ","/web/company/member.list");e&&(el.value=l,ll.value=l)},Sl=async()=>{if(!$e.value)return void p("请输入姓名或昵称搜索");const{status:e,body:l}=await(a={name:$e.value},c("user ","/web/company/member/name.get",a));var a;e&&(el.value=l)},Nl=e=>(e.forEach((l=>{!ll.value[l.toString()]&&e.splice(e.indexOf(l),1)})),e),Ol=async()=>{const{status:e,body:l}=await c("user ","/web/company/member.do");e&&(tl.value=l)},Ql=(e,l,a)=>{const t=JSON.parse(JSON.stringify(al.value));!e.list&&(l&&t.push(e.id),!l&&(()=>{const l=t.indexOf(e.id);t.splice(l,1)})()),al.value=t},Rl=async()=>{if(!al.value.length)return void p("请选择要添加的人员");const e={role_id:v("roleId"),member_ids:al.value},{status:l}=await(e=>d("user ","/web/company/member/role/list.up",e,!0))(e);l&&(Ze.value=!1,gl())};return(e,o)=>{const i=y("el-input"),c=y("el-button"),d=y("el-button-group"),v=y("el-checkbox"),m=y("el-table-column"),p=y("el-table"),_=y("el-option"),g=y("el-select"),h=y("el-empty"),j=y("el-checkbox-group"),Z=y("el-scrollbar"),Le=y("el-tree"),Al=y("el-dialog");return b(),C("div",W,[x("div",X,[x("div",{class:"flexb role_all_txt"},[H,x("div",{class:"fleximg",onClick:Vl},$)]),x("div",ee,[(b(!0),C(V,null,w(f.value,((e,a)=>(b(),C("div",{key:a,class:J(Number(z.value)===Number(a)?"role_item_active role_item els":"role_item els"),onClick:e=>(e=>{z.value=e,l.push("/manage/company/rolepermission?roleId="+e),R.value?gl(e):fl(e)})(a)},[I(B(e)+" ",1),x("div",ae,[x("div",{class:"fleximg",onClick:Il},te),x("div",{class:"fleximg",onClick:l=>{return a=e,l.stopPropagation(),n.value=!0,F.value=a,void D((()=>{t.value.focus()}));var a}},ne,8,ue),x("div",{class:"fleximg",onClick:El},se)])],10,le)))),128))])]),x("div",oe,[x("div",ie,[x("div",null,[T.value?(b(),C("div",Ae,[E(i,{ref_key:"RoleNameRef",ref:a,modelValue:F.value,"onUpdate:modelValue":o[1]||(o[1]=e=>F.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"]),E(c,{type:"primary",onClick:bl},{default:U((()=>[ve])),_:1}),E(c,{type:"info",plain:"",onClick:o[2]||(o[2]=e=>T.value=!1)},{default:U((()=>[me])),_:1})])):(b(),C("div",re,[x("div",ce,B(f.value[z.value]),1),x("div",{class:"fleximg edit_img",onClick:o[0]||(o[0]=e=>{return l=f.value[z.value],T.value=!0,F.value=l,void D((()=>{a.value.focus()}));var l})},de)]))]),x("div",null,[E(c,{type:"info",plain:"",onClick:El},{default:U((()=>[pe])),_:1}),E(c,{type:"primary",onClick:Il},{default:U((()=>[E(A,{href:"#icon-tianjia",size:"14px",color:"white"}),_e])),_:1})])]),x("div",fe,[x("div",ge,[E(d,{size:"middle",class:"btn_tab"},{default:U((()=>[(b(!0),C(V,null,w(k.value,((e,l)=>(b(),S(c,{key:e,class:J(R.value===l?"btn_tab_active role_toggle":"role_toggle"),onClick:e=>(e=>{R.value=e,e?gl():fl()})(l)},{default:U((()=>[I(B(e),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),R.value?O("",!0):(b(),C("div",ke,[E(c,{type:"primary",onClick:wl},{default:U((()=>[he])),_:1})]))]),x("div",ye,[R.value?(b(),C("div",Ve,[E(p,{ref:"multipleTableRef",data:sl.value,style:{width:"100%"}},{default:U((()=>[E(m,{type:"selection",width:"70",align:"center"}),E(m,{label:"姓名","min-width":"120"},{default:U((({row:e})=>[I(B(e.user_name),1)])),_:1}),E(m,{label:"分组","min-width":"120"},{default:U((({row:e})=>[I(B(e.group_name),1)])),_:1}),E(m,{label:"联系电话","min-width":"120"},{default:U((({row:e})=>[I(B(e.mobile),1)])),_:1}),E(m,{label:"添加时间","min-width":"150"},{default:U((({row:e})=>[I(B(N(M)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),E(m,{label:"操作","min-width":"120",align:"center"},{default:U((({row:e})=>[x("div",we,[E(c,{class:"person_table_operate",type:"text",onClick:l=>kl(e.id)},{default:U((()=>[xe])),_:2},1032,["onClick"]),E(c,{type:"text",onClick:l=>yl(e.id)},{default:U((()=>[Ee])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),E(P,{page:ol.value,"onUpdate:page":o[3]||(o[3]=e=>ol.value=e),size:il.value,"onUpdate:size":o[4]||(o[4]=e=>il.value=e),total:rl.value,onChange:o[5]||(o[5]=e=>gl())},null,8,["page","size","total"])])):(b(),C("div",be,[(b(!0),C(V,null,w(q.value,((e,l)=>(b(),C("div",{key:l},[E(v,{modelValue:e.select,"onUpdate:modelValue":l=>e.select=l,label:e.instance_name,size:"large",indeterminate:e.indeterminate,onChange:e=>((e,l)=>{q.value[l].select=e,q.value[l].userSelect=[(new Date).getTime(),e].join(","),q.value[l].indeterminate=!1})(e,l)},null,8,["modelValue","onUpdate:modelValue","label","indeterminate","onChange"]),x("div",Ce,[E(L,{modelValue:Y.value[e.instance_id],"onUpdate:modelValue":l=>Y.value[e.instance_id]=l,item:e.list,"ckecked-lists":N(pl)[e.instance_id],"all-checked":e.userSelect,"getchecked-list-flag":G.value,onAllChecked:e=>((e,l)=>{q.value[l].select=e})(e,l),onIsIndeterminate:e=>((e,l)=>{q.value[l].indeterminate=e})(e,l)},null,8,["modelValue","onUpdate:modelValue","item","ckecked-lists","all-checked","getchecked-list-flag","onAllChecked","onIsIndeterminate"])])])))),128))]))])])]),E(K,{modelValue:n.value,"onUpdate:modelValue":o[7]||(o[7]=e=>n.value=e),title:"修改角色名",onSure:bl},{default:U((()=>[x("div",null,[E(i,{ref_key:"RoleNameEditRef",ref:t,modelValue:F.value,"onUpdate:modelValue":o[6]||(o[6]=e=>F.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"])])])),_:1},8,["modelValue"]),E(K,{modelValue:s.value,"onUpdate:modelValue":o[9]||(o[9]=e=>s.value=e),title:"新增角色",onSure:Cl},{default:U((()=>[x("div",null,[E(i,{ref_key:"addRoleNameRef",ref:u,modelValue:r.value,"onUpdate:modelValue":o[8]||(o[8]=e=>r.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"])])])),_:1},8,["modelValue"]),E(K,{modelValue:cl.value,"onUpdate:modelValue":o[11]||(o[11]=e=>cl.value=e),title:"变更角色",onSure:hl},{default:U((()=>[x("div",Ue,[Ie,E(g,{modelValue:dl.value,"onUpdate:modelValue":o[10]||(o[10]=e=>dl.value=e),class:"person_change_role_select",multiple:"",placeholder:"请选择角色（可多选）"},{default:U((()=>[(b(!0),C(V,null,w(f.value,((e,l)=>(b(),S(_,{key:l,label:e,value:Number(l)},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"]),E(Al,{modelValue:Ze.value,"onUpdate:modelValue":o[16]||(o[16]=e=>Ze.value=e),title:"添加人员","custom-class":"add_person_dialogo_hwy",onClose:o[17]||(o[17]=e=>al.value=[])},{default:U((()=>[x("div",Be,[x("div",Se,[x("div",Ne,[(b(!0),C(V,null,w(qe.value,((e,l)=>(b(),C("div",{key:l,class:J(We.value===l?"add_person_menu_active add_person_menu_item":"add_person_menu_item"),onClick:e=>(e=>{We.value=e,Ul()})(l)},B(e),11,Oe)))),128)),x("div",{class:"person_tree_menu_line",style:Q("width:"+Xe.value+"px;left:"+He.value+"px")},null,4)]),x("div",Qe,[We.value?(b(),C("div",De,[E(Z,{class:"person_group_list"},{default:U((()=>[tl.value.length?(b(),S(Le,{key:0,ref_key:"checkTreeRef",ref:nl,data:tl.value,"show-checkbox":"","node-key":"id",props:ul,"default-expand-all":"","check-on-click-node":"","expand-on-click-node":!1,"default-checked-keys":al.value,onCheckChange:Ql},null,8,["data","default-checked-keys"])):(b(),S(h,{key:1,description:"暂无数据"}))])),_:1})])):(b(),C("div",Re,[x("div",ze,[E(i,{modelValue:$e.value,"onUpdate:modelValue":o[12]||(o[12]=e=>$e.value=e),class:"person_search_input",placeholder:"请输入姓名或昵称搜索",clearable:"",onInput:o[13]||(o[13]=e=>{!e&&Bl()})},null,8,["modelValue"]),E(c,{class:"bdc_btn",onClick:Sl},{default:U((()=>[je])),_:1})]),E(Z,{class:"person_list"},{default:U((()=>["{}"===JSON.stringify(el.value)?(b(),S(h,{key:0,description:"暂无数据"})):(b(),S(j,{key:1,modelValue:al.value,"onUpdate:modelValue":o[14]||(o[14]=e=>al.value=e)},{default:U((()=>[x("div",null,[(b(!0),C(V,null,w(el.value,((e,l)=>(b(),S(v,{key:l,class:"person_check_item",label:Number(l)},{default:U((()=>[I(B(e),1)])),_:2},1032,["label"])))),128))])])),_:1},8,["modelValue"]))])),_:1})]))])]),x("div",Je,[x("div",Ke,[Me,x("div",null,[I(B(al.value.length),1),Pe])]),x("div",Te,[(b(!0),C(V,null,w(al.value,(e=>(b(),C("div",{key:e,class:"person_checked flexb"},[I(B(ll.value[e])+" ",1),E(A,{href:"#icon-shibai",size:"14px",onClick:l=>(e=>{const l=JSON.parse(JSON.stringify(al.value)).indexOf(e);nl.value&&-1!=Nl(nl.value.getCheckedKeys()).indexOf(e)?nl.value.setChecked(e,!1,!1):al.value.splice(l,1)})(e)},null,8,["onClick"])])))),128))])])]),x("div",Fe,[E(c,{plain:"",onClick:o[15]||(o[15]=e=>Ze.value=!1)},{default:U((()=>[Ye])),_:1}),E(c,{type:"primary",onClick:Rl},{default:U((()=>[Ge])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-7219045c"]]);export{Le as default};