import{g as a,p as e,_ as t,o as l,e as s}from"./index.7f252a0e.js";import{f as i}from"./date.23847c74.js";import{K as o}from"./KzEmpty.61a513e5.js";import{K as r}from"./KzPage.9312e74c.js";import{H as n,g as d,o as u,I as c,J as p,a as v,w as m,$ as y,a3 as b,B as f,av as _,aw as g,a2 as w,r as h,ad as k}from"./vue.a499711c.js";import"./tinymce.275386ab.js";const z={class:"auth kz_card"},C={class:"title_box fsc f1"},j=(a=>(_("data-v-d0502b2a"),a=a(),g(),a))((()=>p("div",{class:"card_title"},"加入申请",-1))),x={class:"btns_box"},K=w("批量拒绝"),I=w("批量同意"),M={class:"mytable"},R={class:"fcs"},U=w("拒绝"),B=w("同意");var D=t(n({name:"application",setup(t){const n=d(10),_=d(10),g=d(1),w=d(!1),D=d([]),E=async()=>{w.value=!0;const e=await(t={current:g.value,size:10},a("user ","/company/user/invite.page",t));var t;D.value=e.body.records,w.value=!1};E();const H=d([]),J=d(),P=a=>{const e=J.value.getSelectionRows();H.value=e.map((a=>a.id)),H.value.length&&S(a)},S=async a=>{const t={invite_ids:H.value,status:a},i=await(a=>e("user ","/web/company/member/add.do",a))(t);1===i.status?l("操作成功！"):s("操作失败！"),E()};return(a,e)=>{const t=h("el-button"),l=h("el-table-column"),s=h("el-link"),d=h("el-table"),$=k("loading");return u(),c("div",null,[p("div",z,[p("div",C,[j,p("div",x,[v(t,{type:"primary",class:"bdc_btn",plain:"",onClick:e[0]||(e[0]=a=>P(0))},{default:m((()=>[K])),_:1}),v(t,{type:"primary",onClick:e[1]||(e[1]=a=>P(1))},{default:m((()=>[I])),_:1})])]),y((u(),c("div",M,[v(d,{ref_key:"tableRef",ref:J,data:D.value},{empty:m((()=>[v(o)])),default:m((()=>[v(l,{type:"selection",width:"50"}),v(l,{property:"name",label:"申请人姓名"}),v(l,{property:"mobile",label:"联系电话"}),v(l,{property:"create_time",label:"申请时间"},{default:m((({row:a})=>[p("div",null,b(f(i)(new Date(a.create_time),"yyyy-MM-dd")),1)])),_:1}),v(l,{label:"操作",width:"200"},{default:m((({row:a})=>[p("div",R,[v(s,{type:"primary",onClick:e=>{return t=a.id,H.value.push(t),void(H.value.length&&S(0));var t}},{default:m((()=>[U])),_:2},1032,["onClick"]),v(s,{type:"primary",class:"ml20",onClick:e=>{return t=a.id,H.value.push(t),void(H.value.length&&S(1));var t}},{default:m((()=>[B])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])),[[$,w.value]])]),v(r,{page:g.value,"onUpdate:page":e[2]||(e[2]=a=>g.value=a),size:_.value,"onUpdate:size":e[3]||(e[3]=a=>_.value=a),total:n.value,onChange:E},null,8,["page","size","total"])])}}}),[["__scopeId","data-v-d0502b2a"]]);export{D as default};