var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(e,l)=>{for(var a in l||(l={}))u.call(l,a)&&o(e,a,l[a]);if(t)for(var a of t(l))s.call(l,a)&&o(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{_ as r,g as c,p as d,a6 as A,a as v,E as m,e as p,o as f}from"./index.e45ab2da.js";import{H as _,g,i as k,u as h,b as y,o as b,I as C,P as V,aa as w,J as x,a as E,w as U,a1 as I,a2 as B,c as S,B as N,a0 as O,X as Q,av as j,aw as R,ax as z,q as D,W as K}from"./vue.fa004e33.js";import{K as J}from"./KzEmpty.cf970ba3.js";import{K as M}from"./KzDialog.579e968a.js";import{f as P}from"./date.23847c74.js";import{K as T}from"./KzPage.dd3597d0.js";import"./tinymce.50e98bcc.js";import"./kzkf.70bb183f.js";var F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAACCElEQVQoFYWSz2sTURDHZ17rJk3SaHcXAoJ4EosmpCVo8GRBkTZU/CMEMTXFH714EMnFQ4MgHhR78ebJgwq5hGqNeBCESiqIeFJ7sEp229Sk281m942zDSuJP+fwHrzvfOYN3xmE/8T4bPOQ69o3APA4AtWRxPzKPe0+/otL5RsZgM4LTv4oBuCKJDoARCVEcXbwb+CRGXNfW3ae8E9hEvSgdkdf5NzFdN7Uieic+BM4XqjvtUkuAeIbUHAaia6n8sa1bi5t8B35rdXsxVbCattVRPp0MKGfeVhEZ6xQn5AelAnEApDk30SpD8zMfdc7llMlgDUtoZ2uFtEOOkqfX58mkI8J8LMi1dGf4LHLm2pr2+H2oKEk9NxyEa0A2tFs5zmb1GzH1akPJWzugGOXNvZ4bfcpEtiq0Cerd7EVQL4mbfcZF7Qgqk++vYlbvibYIZRtryYAvaFdItcLZWfNuLS9CpvkDA9DLoB8EDMFY9Rx6b0Mxfa/uz206j/6MTFDMZPMCgCFlPjAieV5dbOrdE/hSkwzv9oLZYoUMcko87CjsbBy6lfIR/1W04hQC6qlrtJI55tZRkBNiYZOvrq1ez3Qem9M5o0lrrzFm7DGYzjKQJLY2YgSPjw1Eq0/+tpIo/D6NoxC8GVQACUloMX2GlxxgZBeawl9hWfobl8wsvz2UkroA9Gmyg+iyuOL+HQm4AAAAABJRU5ErkJggg==";const Y={class:"check_group"},G={class:"flexl permit_page_front els"},L={class:"flexl permit_page_operate"};var Z=r(_({props:{item:null,ckeckedLists:null,allChecked:null,getcheckedListFlag:null},emits:["update:modelValue","allChecked","isIndeterminate"],setup(e,{emit:l}){const a=e,t=g(),u=g(),s=g(),o=g();k(t,(e=>{let a=!0,t=!0,s=!1;for(const l in e)!e[l]&&(a=!1),e[l]&&(t=!1);for(const l in u.value)u.value[l]&&(s=!0);l("allChecked",a),l("isIndeterminate",!a&&!t||s)})),k((()=>a.allChecked),(e=>{const a=e.split(",");"true"==a[1]&&(o.value=JSON.parse(JSON.stringify(s.value)),l("update:modelValue",o.value),t.value=r(t.value,!0),u.value=r(u.value,!1)),"false"==a[1]&&(o.value=r(o.value,[]),l("update:modelValue",o.value),t.value=r(t.value,!1),u.value=r(u.value,!1))})),k((()=>a.getcheckedListFlag),(e=>{v()}));const r=(e,l)=>{const a=JSON.parse(JSON.stringify(e));for(const t in a)a[t]=l;return a},c=(e,l)=>(e.forEach((a=>{if(a.checkAll.permit_id===l.pid)return a.children.push(l),e})),e),d=(e,l)=>{const a={},t={};return e.forEach((e=>{a[e.checkAll.permit_id]=e.children.length===l[e.checkAll.permit_id].length,t[e.checkAll.permit_id]=l[e.checkAll.permit_id].length>0&&l[e.checkAll.permit_id].length<e.children.length})),[a,t]},A=h((()=>{let e=[];return a.item.forEach((l=>{!l.pid&&e.push({checkAll:l,children:[]}),l.pid&&(e=c(e,l))})),e})),v=()=>{let e=[],i={},r={};a.item.forEach((l=>{!l.pid&&e.push({checkAll:l,children:[]}),l.pid&&(e=c(e,l),i[l.pid]=[],r[l.pid]=r[l.pid]?r[l.pid].concat(l.permit_id):[l.permit_id])})),s.value=r,o.value=n(n({},i),a.ckeckedLists),l("update:modelValue",o.value),t.value=d(e,o.value)[0],u.value=d(e,o.value)[1]};v();return(e,a)=>{const r=y("el-checkbox"),c=y("el-checkbox-group");return b(),C("div",Y,[(b(!0),C(V,null,w(N(A),((e,a)=>(b(),C("div",{key:a,class:"flexl permit_page"},[x("div",G,[E(r,{modelValue:t.value[e.checkAll.permit_id],"onUpdate:modelValue":l=>t.value[e.checkAll.permit_id]=l,indeterminate:u.value[e.checkAll.permit_id],onChange:a=>{return r=a,c=e.checkAll.permit_id,o.value=i(n({},o.value),{[c]:r?s.value[c]:[]}),l("update:modelValue",o.value),u.value=i(n({},u.value),{[c]:!1}),void(t.value=i(n({},t.value),{[c]:r}));var r,c}},{default:U((()=>[I(B(e.checkAll.permit_name),1)])),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),E(c,{modelValue:o.value[e.checkAll.permit_id],"onUpdate:modelValue":l=>o.value[e.checkAll.permit_id]=l,onChange:a=>((e,a)=>{const r=e.length;t.value=i(n({},t.value),{[a]:r===s.value[a].length}),u.value=i(n({},u.value),{[a]:r>0&&r<s.value[a].length}),o.value=i(n({},o.value),{[a]:e}),l("update:modelValue",o.value)})(a,e.checkAll.permit_id)},{default:U((()=>[x("div",L,[(b(!0),C(V,null,w(e.children,(e=>(b(),S(r,{key:e.permit_id,class:"permit_page_operate_check",label:e.permit_id},{default:U((()=>[I(B(e.permit_name),1)])),_:2},1032,["label"])))),128))])])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])))),128))])}}}),[["__scopeId","data-v-26d1626d"]]);const q=()=>c("user ","/web/company/role.list");const W=e=>(j("data-v-083728e0"),e=e(),R(),e),X={class:"flexb role_permission"},H={class:"role_left"},$=W((()=>x("div",null,"全部角色",-1))),ee=[W((()=>x("span",null,"+",-1))),I("添加")],le={class:"role_all"},ae={key:0},te=["onClick"],ue={class:"flexr role_operate"},se=[W((()=>x("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABP0lEQVQ4EZ1TvUrEQBCeWTXCwaEYAtY22uhVdlr4AtdF30A9SwvBzs7O0qjgA+h19wI2dlZ3NtpYCyGHcnBgxIz59rIQTXYFF7Kzu9/PzCxZpmK0DpKdLJMNYvHMWW0UTpXi+/65fwNcYWrtx2ci2TWT+Ni7BjjgQgMehyfiPb0mI2YJB1HQc4kNttaJ2yLcXVn0m+rlbZxnFW9mtvFgCH/FCVc8aHULNkF4K1P4bDjOp13g893wtMCPbDyngVA2ZxOa84oBSkZmiIVoE8TVTnzJpN6XtxaOu9v8ZcSIzjsoE23rSgVFBt0zMkP4GAV7iIMI889RMSjDKLu8r1s7DdAzRHWZjZnT4PeFGVE5qqX5RpL/0ennx3i9DLjWEy6n0DKI+jEx7ZJQT5hGLjELNYmpncer/kVwqA20yT+f8ze8UnaR+lSA+gAAAABJRU5ErkJggg=="},null,-1)))],oe=["onClick"],ne=[W((()=>x("img",{src:F},null,-1)))],ie=[W((()=>x("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABUUlEQVQ4EcVSPUvDYBC+S2sDXcSqoCKIRXBSKeIPcPQHCI5uUqvQzbWrm+IgTjoK7vojpDo4CeIgIkLU4lKMNDnvTC+5xIij7/I873PPfSUvgjkr2+Q+9l6bAFQ1sqF4P1kc3rs4QF9FR4mgJCPBltUsl1jUIFGLCRVGVUI4vzkc3Ujr0W2u7h0xS02HC5veckiwBoAzBFQDgjIgdPMKaAwBr7nZnYNwGq/AyeMIUPo1WSpyYfGI90cDGa8/4ndstUUlNVme9cUTqFlwcedt8Pb5pSNoufUozy0Avlsm4G/BmOKaZTC/gDH8Rf+/QOYh9Qd2/S5+8FtgFMXy7Eq5K7R3K++zYyNDgpZnk+UeF0BynviRLKnprIWfeVw84tVYvEKh4JwEITXn694V/8JLNViMGuD0gIvHqrOWnFqjMxUE4TphOJGoCZPOktzerzyo+gUa1YAqfdUC3QAAAABJRU5ErkJggg=="},null,-1)))],re={class:"role_right"},ce={key:0},de={class:"flexb role_right_top"},Ae={key:0,class:"flexl"},ve={class:"role_name els"},me=[W((()=>x("img",{src:F},null,-1)))],pe={key:1,class:"flexl"},fe=I("保存"),_e=I("取消"),ge=I("删除角色"),ke=I("添加人员"),he={class:"role_right_down"},ye={class:"flexb"},be={key:0},Ce=I("保存"),Ve={class:"role_perm"},we={key:0},xe={class:"check_group_pre"},Ee={key:1},Ue={class:"fleximg"},Ie=I("变更角色"),Be=I("删除"),Se={class:"flexl person_change_role"},Ne=W((()=>x("div",null,"角色",-1))),Oe={class:"add_person flex"},Qe={class:"person_tree"},je={class:"person_tree_menu flexl"},Re=["onClick"],ze={class:"person_list"},De={key:0},Ke={class:"flexb search_box"},Je=I("搜索"),Me={key:1,class:"person_group_pre"},Pe={class:"person_selected"},Te={class:"flexb person_selected_top"},Fe=W((()=>x("div",null,"已选择",-1))),Ye=W((()=>x("span",null,"/人",-1))),Ge={class:"flexl person_checked_list"},Le={class:"flexr"},Ze=I("取消"),qe=I("添加");var We=r(_({setup(e){const l=z(),a=g(),t=g(),u=g(),s=g(!1),o=g(!1),r=g(),_=g([]),k=g(["权限","人员"]),j=g(0),R=g(),F=g(!1),Y=g(),G=g(),L=g(),W=g([]),We=g([]),Xe=g(!1),He=g(["全部人员","分组"]),$e=g(0),el=g(0),ll=g(0),al=g(),tl=g();g([]);const ul=g(),sl=g([]),ol=g(),nl={children:"list",label:"name"},il=g(),rl=g(),cl=g(1),dl=g(10),Al=g(0),vl=g(!1),ml=g([]),pl=g(),fl={},_l=async()=>{const{status:e,body:a}=await q(),t=await c("user ","/web/permit/company.list");t.status&&(W.value=kl(t.body)),e&&(()=>{_.value=a;const e=v("roleId"),t=Object.keys(a);R.value=e||t[0],l.push("/manage/company/rolepermission?roleId="+R.value),j.value?yl(R.value):hl(R.value)})()};_l();const gl=h((()=>{const e={};return We.value.length>0&&We.value.forEach((l=>{e[l.instance]=i(n({},e[l.instance]),{[l.pid]:e[l.instance]&&e[l.instance][l.pid]?e[l.instance][l.pid].concat(l.permit_id):[l.permit_id]})})),L.value=(new Date).getTime(),e})),kl=e=>{const l={},a=[];return e.forEach((e=>{l[e.instance_id]={};const t=i(n({},e),{select:!1,indeterminate:!1,userSelect:!1});a.push(t)})),G.value=JSON.parse(JSON.stringify(l)),a},hl=async e=>{const{status:l,body:a}=await(t={roleId:e||v("roleId")},c("user ","/web/permit/role.list",t));var t;l&&(We.value=a)},yl=async e=>{const l={roleId:e||v("roleId"),current:cl.value,size:dl.value},{status:a,body:t}=await(u=l,c("user ","/web/company/user/two.page",u));var u;a&&(rl.value=t.records,Al.value=t.total)},bl=async e=>{vl.value=!0,pl.value=e;const{status:l,body:a}=await(t={memberId:e},c("user ","/web/company/role/ids.get",t));var t;l&&(ml.value=a)},Cl=async()=>{const e={role_ids:ml.value,member_id:pl.value},{status:l}=await(e=>d("user ","/web/company/role/ids.up",e,!0))(e);l&&(vl.value=!1,yl())},Vl=e=>{m.confirm("是否确认从当前角色中删除此人员","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const l={role_id:Number(v("roleId")),member_id:e},{status:a}=await(e=>d("user ","/web/company/role/id.del",e,!0))(l);a&&yl()}))},wl=async()=>{if(Y.value){const e={role_id:Number(R.value),role_name:Y.value},{status:l}=await(e=>d("user ","/web/company/role/name.up",e))(e);l&&(_.value[R.value]=Y.value,f("修改成功")),F.value=!1,s.value=!1}else p("请输入角色名")},xl=async()=>{const{status:e}=await(l={role_name:r.value},d("user ","/web/company/role.in",l,!0));var l;o.value=!1,r.value="",e&&(async()=>{const e=await q();e.status&&(_.value=e.body)})()},El=()=>{o.value=!0,D((()=>{u.value.focus()}))},Ul=()=>{m.confirm("是否确认保存当前勾选","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const e={map:Il(G.value),role_id:Number(v("roleId"))},{status:l,message:a}=await(e=>d("user ","/web/permit/role.add",e))(e);l&&(hl(),f(a?a.toString():"保存成功"))}))},Il=e=>{fl.vallue={};for(const l in e)for(const a in e[l])e[l][a].length>0&&(fl.vallue[l]=fl.vallue[l]?fl.vallue[l].concat(e[l][a]):e[l][a]);return fl.vallue},Bl=async()=>{m.confirm("是否确认删除当前角色","操作提示",{confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{const e={role_id:Number(v("roleId"))},{status:a,message:t}=await(e=>d("user ","/web/company/role.del",e))(e);a&&(l.push("/manage/company/rolepermission"),_l(),f(t?t.toString():"删除成功"))}))},Sl=()=>{D((()=>{const e=document.querySelector(".add_person_menu_active");e&&(ll.value=e.offsetLeft,el.value=e.offsetWidth)}))},Nl=()=>{Xe.value=!0,Ol(),Rl(),D((()=>{Sl()}))},Ol=async()=>{const{status:e,body:l}=await c("user ","/web/company/member.list");e&&(tl.value=l,ul.value=l)},Ql=async()=>{if(!al.value)return void p("请输入姓名或昵称搜索");const{status:e,body:l}=await(a={name:al.value},c("user ","/web/company/member/name.get",a));var a;e&&(tl.value=l)},jl=e=>(e.forEach((l=>{!ul.value[l.toString()]&&e.splice(e.indexOf(l),1)})),e),Rl=async()=>{const{status:e,body:l}=await c("user ","/web/company/member.do");e&&(ol.value=l)},zl=(e,l,a)=>{const t=JSON.parse(JSON.stringify(sl.value));!e.list&&(l&&t.push(e.id),!l&&(()=>{const l=t.indexOf(e.id);t.splice(l,1)})()),sl.value=t},Dl=async()=>{if(!sl.value.length)return void p("请选择要添加的人员");const e={role_id:v("roleId"),member_ids:sl.value},{status:l}=await(e=>d("user ","/web/company/member/role/list.up",e,!0))(e);l&&(Xe.value=!1,yl())};return(e,n)=>{const i=y("el-input"),c=y("el-button"),d=y("el-button-group"),v=y("el-checkbox"),m=y("el-table-column"),p=y("el-table"),f=y("el-option"),g=y("el-select"),h=y("el-empty"),z=y("el-checkbox-group"),q=y("el-scrollbar"),We=y("el-tree"),pl=y("el-dialog");return b(),C("div",X,[x("div",H,[x("div",{class:"flexb role_all_txt"},[$,x("div",{class:"fleximg",onClick:El},ee)]),x("div",le,[Object.keys(_.value)[0]?(b(),C("div",ae,[(b(!0),C(V,null,w(_.value,((e,a)=>(b(),C("div",{key:a,class:K(Number(R.value)===Number(a)?"role_item_active role_item els":"role_item els"),onClick:e=>(e=>{R.value=e,l.push("/manage/company/rolepermission?roleId="+e),j.value?yl(e):hl(e)})(a)},[I(B(e)+" ",1),x("div",ue,[x("div",{class:"fleximg",onClick:Nl},se),x("div",{class:"fleximg",onClick:l=>{return a=e,l.stopPropagation(),s.value=!0,Y.value=a,void D((()=>{t.value.focus()}));var a}},ne,8,oe),x("div",{class:"fleximg",onClick:Bl},ie)])],10,te)))),128))])):(b(),S(J,{key:1}))])]),x("div",re,[Object.keys(_.value)[0]?(b(),C("div",ce,[x("div",de,[x("div",null,[F.value?(b(),C("div",pe,[E(i,{ref_key:"RoleNameRef",ref:a,modelValue:Y.value,"onUpdate:modelValue":n[1]||(n[1]=e=>Y.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"]),E(c,{type:"primary",onClick:wl},{default:U((()=>[fe])),_:1}),E(c,{type:"info",plain:"",onClick:n[2]||(n[2]=e=>F.value=!1)},{default:U((()=>[_e])),_:1})])):(b(),C("div",Ae,[x("div",ve,B(_.value[R.value]),1),x("div",{class:"fleximg edit_img",onClick:n[0]||(n[0]=e=>{return l=_.value[R.value],F.value=!0,Y.value=l,void D((()=>{a.value.focus()}));var l})},me)]))]),x("div",null,[E(c,{type:"info",plain:"",onClick:Bl},{default:U((()=>[ge])),_:1}),E(c,{type:"primary",onClick:Nl},{default:U((()=>[E(A,{href:"#icon-tianjia",size:"14px",color:"white"}),ke])),_:1})])]),x("div",he,[x("div",ye,[E(d,{class:"btn_tab"},{default:U((()=>[(b(!0),C(V,null,w(k.value,((e,l)=>(b(),S(c,{key:e,class:K(j.value===l?"btn_tab_active role_toggle":"role_toggle"),onClick:e=>(e=>{j.value=e,e?yl():hl()})(l)},{default:U((()=>[I(B(e),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),j.value?O("",!0):(b(),C("div",be,[E(c,{type:"primary",onClick:Ul},{default:U((()=>[Ce])),_:1})]))]),x("div",Ve,[j.value?(b(),C("div",Ee,[E(p,{ref:"multipleTableRef",data:rl.value,style:{width:"100%"}},{default:U((()=>[E(m,{type:"selection",width:"70",align:"center"}),E(m,{label:"姓名","min-width":"120"},{default:U((({row:e})=>[I(B(e.user_name),1)])),_:1}),E(m,{label:"分组","min-width":"120"},{default:U((({row:e})=>[I(B(e.group_name),1)])),_:1}),E(m,{label:"联系电话","min-width":"120"},{default:U((({row:e})=>[I(B(e.mobile),1)])),_:1}),E(m,{label:"添加时间","min-width":"150"},{default:U((({row:e})=>[I(B(N(P)(new Date(e.create_time),"yyyy-MM-dd")),1)])),_:1}),E(m,{label:"操作","min-width":"120",align:"center"},{default:U((({row:e})=>[x("div",Ue,[E(c,{class:"person_table_operate",type:"text",onClick:l=>bl(e.id)},{default:U((()=>[Ie])),_:2},1032,["onClick"]),E(c,{type:"text",onClick:l=>Vl(e.id)},{default:U((()=>[Be])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),E(T,{page:cl.value,"onUpdate:page":n[3]||(n[3]=e=>cl.value=e),size:dl.value,"onUpdate:size":n[4]||(n[4]=e=>dl.value=e),total:Al.value,onChange:n[5]||(n[5]=e=>yl())},null,8,["page","size","total"])])):(b(),C("div",we,[(b(!0),C(V,null,w(W.value,((e,l)=>(b(),C("div",{key:l},[E(v,{modelValue:e.select,"onUpdate:modelValue":l=>e.select=l,label:e.instance_name,size:"large",indeterminate:e.indeterminate,onChange:e=>((e,l)=>{W.value[l].select=e,W.value[l].userSelect=[(new Date).getTime(),e].join(","),W.value[l].indeterminate=!1})(e,l)},null,8,["modelValue","onUpdate:modelValue","label","indeterminate","onChange"]),x("div",xe,[E(Z,{modelValue:G.value[e.instance_id],"onUpdate:modelValue":l=>G.value[e.instance_id]=l,item:e.list,"ckecked-lists":N(gl)[e.instance_id],"all-checked":e.userSelect,"getchecked-list-flag":L.value,onAllChecked:e=>((e,l)=>{W.value[l].select=e})(e,l),onIsIndeterminate:e=>((e,l)=>{W.value[l].indeterminate=e})(e,l)},null,8,["modelValue","onUpdate:modelValue","item","ckecked-lists","all-checked","getchecked-list-flag","onAllChecked","onIsIndeterminate"])])])))),128))]))])])])):(b(),S(J,{key:1}))]),E(M,{modelValue:s.value,"onUpdate:modelValue":n[7]||(n[7]=e=>s.value=e),title:"修改角色名",onSure:wl},{default:U((()=>[x("div",null,[E(i,{ref_key:"RoleNameEditRef",ref:t,modelValue:Y.value,"onUpdate:modelValue":n[6]||(n[6]=e=>Y.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"])])])),_:1},8,["modelValue"]),E(M,{modelValue:o.value,"onUpdate:modelValue":n[9]||(n[9]=e=>o.value=e),title:"新增角色",onSure:xl},{default:U((()=>[x("div",null,[E(i,{ref_key:"addRoleNameRef",ref:u,modelValue:r.value,"onUpdate:modelValue":n[8]||(n[8]=e=>r.value=e),class:"role_name_input",placeholder:"请输入角色名"},null,8,["modelValue"])])])),_:1},8,["modelValue"]),E(M,{modelValue:vl.value,"onUpdate:modelValue":n[11]||(n[11]=e=>vl.value=e),title:"变更角色",onSure:Cl},{default:U((()=>[x("div",Se,[Ne,E(g,{modelValue:ml.value,"onUpdate:modelValue":n[10]||(n[10]=e=>ml.value=e),class:"person_change_role_select",multiple:"",placeholder:"请选择角色（可多选）"},{default:U((()=>[(b(!0),C(V,null,w(_.value,((e,l)=>(b(),S(f,{key:l,label:e,value:Number(l)},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"]),E(pl,{modelValue:Xe.value,"onUpdate:modelValue":n[16]||(n[16]=e=>Xe.value=e),title:"添加人员","custom-class":"add_person_dialogo_hwy",onClose:n[17]||(n[17]=e=>sl.value=[])},{default:U((()=>[x("div",Oe,[x("div",Qe,[x("div",je,[(b(!0),C(V,null,w(He.value,((e,l)=>(b(),C("div",{key:l,class:K($e.value===l?"add_person_menu_active add_person_menu_item":"add_person_menu_item"),onClick:e=>(e=>{$e.value=e,Sl()})(l)},B(e),11,Re)))),128)),x("div",{class:"person_tree_menu_line",style:Q("width:"+el.value+"px;left:"+ll.value+"px")},null,4)]),x("div",ze,[$e.value?(b(),C("div",Me,[E(q,{class:"person_group_list"},{default:U((()=>[ol.value.length?(b(),S(We,{key:0,ref_key:"checkTreeRef",ref:il,data:ol.value,"show-checkbox":"","node-key":"id",props:nl,"default-expand-all":"","check-on-click-node":"","expand-on-click-node":!1,"default-checked-keys":sl.value,onCheckChange:zl},null,8,["data","default-checked-keys"])):(b(),S(h,{key:1,description:"暂无数据"}))])),_:1})])):(b(),C("div",De,[x("div",Ke,[E(i,{modelValue:al.value,"onUpdate:modelValue":n[12]||(n[12]=e=>al.value=e),class:"person_search_input",placeholder:"请输入姓名或昵称搜索",clearable:"",onInput:n[13]||(n[13]=e=>{!e&&Ol()})},null,8,["modelValue"]),E(c,{class:"bdc_btn",onClick:Ql},{default:U((()=>[Je])),_:1})]),E(q,{class:"person_list"},{default:U((()=>["{}"===JSON.stringify(tl.value)?(b(),S(h,{key:0,description:"暂无数据"})):(b(),S(z,{key:1,modelValue:sl.value,"onUpdate:modelValue":n[14]||(n[14]=e=>sl.value=e)},{default:U((()=>[x("div",null,[(b(!0),C(V,null,w(tl.value,((e,l)=>(b(),S(v,{key:l,class:"person_check_item",label:Number(l)},{default:U((()=>[I(B(e),1)])),_:2},1032,["label"])))),128))])])),_:1},8,["modelValue"]))])),_:1})]))])]),x("div",Pe,[x("div",Te,[Fe,x("div",null,[I(B(sl.value.length),1),Ye])]),x("div",Ge,[(b(!0),C(V,null,w(sl.value,(e=>(b(),C("div",{key:e,class:"person_checked flexb"},[I(B(ul.value[e])+" ",1),E(A,{href:"#icon-shibai",size:"14px",onClick:l=>(e=>{const l=JSON.parse(JSON.stringify(sl.value)).indexOf(e);il.value&&-1!=jl(il.value.getCheckedKeys()).indexOf(e)?il.value.setChecked(e,!1,!1):sl.value.splice(l,1)})(e)},null,8,["onClick"])])))),128))])])]),x("div",Le,[E(c,{plain:"",onClick:n[15]||(n[15]=e=>Xe.value=!1)},{default:U((()=>[Ze])),_:1}),E(c,{type:"primary",onClick:Dl},{default:U((()=>[qe])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-083728e0"]]);export{We as default};
