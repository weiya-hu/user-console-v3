import{m as a,n as e,o as t}from"./myinfo.baa3d56d.js";import{_ as l,m as s,B as o,R as i,S as c,a5 as r,o as d,e as p}from"./index.829e2404.js";import{K as n}from"./KzEmpty.ce78a8a2.js";import{H as u,u as y,g as v,o as _,I as b,J as f,c as m,w as k,B as h,a0 as w,a as C,W as x,a2 as g,av as j,aw as V,a1 as $,ax as z,b as B}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";const H={class:"kz_card my_company_page"},I={class:"card_title fsc"},K=(a=>(j("data-v-16274465"),a=a(),V(),a))((()=>f("div",null,"我的企业",-1))),U=$("添加企业"),E={class:"card_content"},J={class:"fsc"},N=$("已加入企业"),R=$("待审核企业"),S={key:0,class:"tab_box"},W={style:{width:"100px"}},q={style:{width:"100px"}},A={class:"els"},D={key:1,class:"tab_box"},F={style:{width:"100px"}},G={class:"fcs"},L={class:"fcs"},M=$("编辑"),O=$("删除"),P=$("查看"),Q=$("重新提交"),T={class:"fcs fjend pb20"},X=$("取消"),Y=$("保存");var Z=l(u({setup(l){const u=z(),j=s(),V=y((()=>j.state.addressHash)),$=v(1),Z=v([]);(async()=>{const e=await a();1===e.status&&(Z.value=e.body)})();const aa=v([]),ea=async()=>{const a=await e();1===a.status&&(aa.value=a.body)};ea();const ta=v(!1),la=v(""),sa=()=>{u.replace("/manage/company/authentication?name="+la.value)};return(a,e)=>{const l=B("el-button"),s=B("el-button-group"),u=B("el-table-column"),y=B("el-tooltip"),v=B("el-table"),j=B("el-link"),z=B("el-input"),oa=B("el-dialog");return _(),b("div",H,[f("div",I,[K,Z.value.length<3?(_(),m(l,{key:0,type:"primary",icon:h(o),onClick:e[0]||(e[0]=e=>a.$router.push("authentication"))},{default:k((()=>[U])),_:1},8,["icon"])):w("",!0)]),f("div",E,[f("div",J,[C(s,{class:"btn_tab"},{default:k((()=>[C(l,{class:x(1==$.value&&"btn_tab_active"),onClick:e[1]||(e[1]=a=>$.value=1)},{default:k((()=>[N])),_:1},8,["class"]),C(l,{class:x(2==$.value&&"btn_tab_active"),onClick:e[2]||(e[2]=a=>$.value=2)},{default:k((()=>[R])),_:1},8,["class"])])),_:1})]),1==$.value?(_(),b("div",S,[C(v,{data:Z.value,border:""},{empty:k((()=>[C(n)])),default:k((()=>[C(u,{property:"name",label:"企业名称"}),C(u,{property:"code",label:"统一社会信用代码"}),C(u,{property:"legal_person",label:"联系人"}),C(u,{property:"contact",label:"联系电话"}),C(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[C(y,{effect:"dark",placement:"top"},{content:k((()=>[f("div",W,g(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[f("div",null,g(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),C(u,{property:"address",label:"详细地址"},{default:k((({row:a})=>[C(y,{effect:"dark",placement:"top"},{content:k((()=>[f("div",q,g(a.address),1)])),default:k((()=>[f("div",A,g(a.address),1)])),_:2},1024)])),_:1}),C(u,{property:"business_scope",label:"经营范围"})])),_:1},8,["data"])])):w("",!0),2==$.value?(_(),b("div",D,[C(v,{data:aa.value,border:""},{empty:k((()=>[C(n)])),default:k((()=>[C(u,{property:"name",label:"企业名称"}),C(u,{property:"code",label:"统一社会信用代码"}),C(u,{property:"legal_person",label:"联系人"}),C(u,{property:"contact",label:"联系电话"}),C(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[C(y,{effect:"dark",placement:"top"},{content:k((()=>[f("div",F,g(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[f("div",null,g(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),C(u,{property:"address",label:"详细地址"}),C(u,{property:"business_scope",label:"经营范围"}),C(u,{property:"status",label:"状态"},{default:k((({row:a})=>[f("div",G,[f("div",{class:x(["status_dot",h(r)(a.status).className])},null,2),f("div",null,g(h(r)(a.status).text),1)])])),_:1}),C(u,{property:"fail_reason",label:"备注"}),C(u,{label:"操作"},{default:k((({row:e})=>[f("div",L,[1==e.status?(_(),m(j,{key:0,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[M])),_:2},1032,["onClick"])):w("",!0),1==e.status?(_(),m(j,{key:1,type:"primary",onClick:a=>(async a=>{1==(await t({id:a})).status?d("操作成功！"):p("操作失败！"),ea()})(e.id)},{default:k((()=>[O])),_:2},1032,["onClick"])):w("",!0),2==e.status?(_(),m(j,{key:2,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[P])),_:2},1032,["onClick"])):w("",!0),4==e.status?(_(),m(j,{key:3,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[Q])),_:2},1032,["onClick"])):w("",!0)])])),_:1})])),_:1},8,["data"])])):w("",!0),C(oa,{modelValue:ta.value,"onUpdate:modelValue":e[5]||(e[5]=a=>ta.value=a),title:"新建企业",width:"380px"},{default:k((()=>[C(z,{modelValue:la.value,"onUpdate:modelValue":e[3]||(e[3]=a=>la.value=a),class:"pb20",placeholder:"请输企业名称"},null,8,["modelValue"]),f("div",T,[C(l,{onClick:e[4]||(e[4]=a=>ta.value=!1)},{default:k((()=>[X])),_:1}),C(l,{type:"primary",onClick:sa},{default:k((()=>[Y])),_:1})])])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-16274465"]]);export{Z as default};
