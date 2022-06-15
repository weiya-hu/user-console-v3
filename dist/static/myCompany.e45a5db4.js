import{m as a,n as e,o as t}from"./myinfo.98db473e.js";import{_ as l,m as s,B as o,O as i,P as c,a2 as d,o as r,e as p}from"./index.f91ef24c.js";import{K as n}from"./KzEmpty.a0bcbd2b.js";import{H as u,u as y,g as f,o as v,I as b,J as _,a as m,w as k,B as h,W as w,a2 as C,a0 as x,c as g,av as j,aw as V,a1 as $,ax as z,b as B}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";const H={class:"kz_card my_company_page"},I={class:"card_title fsc"},K=(a=>(j("data-v-721dff4e"),a=a(),V(),a))((()=>_("div",null,"我的企业",-1))),U=$("添加企业"),E={class:"card_content"},J={class:"fsc"},N=$("已加入企业"),O=$("待审核企业"),P={key:0,class:"tab_box"},W={style:{width:"100px"}},q={style:{width:"100px"}},A={class:"els"},D={key:1,class:"tab_box"},F={style:{width:"100px"}},G={class:"fcs"},L={class:"fcs"},M=$("编辑"),Q=$("删除"),R=$("查看"),S=$("重新提交"),T={class:"fcs fjend pb20"},X=$("取消"),Y=$("保存");var Z=l(u({setup(l){const u=z(),j=s(),V=y((()=>j.state.addressHash)),$=f(1),Z=f([]);(async()=>{const e=await a();1===e.status&&(Z.value=e.body)})();const aa=f([]),ea=async()=>{const a=await e();1===a.status&&(aa.value=a.body)};ea();const ta=f(!1),la=f(""),sa=()=>{u.replace("/manage/company/authentication?name="+la.value)};return(a,e)=>{const l=B("el-button"),s=B("el-button-group"),u=B("el-table-column"),y=B("el-tooltip"),f=B("el-table"),j=B("el-link"),z=B("el-input"),oa=B("el-dialog");return v(),b("div",H,[_("div",I,[K,m(l,{type:"primary",icon:h(o),onClick:e[0]||(e[0]=e=>a.$router.push("authentication"))},{default:k((()=>[U])),_:1},8,["icon"])]),_("div",E,[_("div",J,[m(s,{class:"btn_tab"},{default:k((()=>[m(l,{class:w(1==$.value&&"btn_tab_active"),onClick:e[1]||(e[1]=a=>$.value=1)},{default:k((()=>[N])),_:1},8,["class"]),m(l,{class:w(2==$.value&&"btn_tab_active"),onClick:e[2]||(e[2]=a=>$.value=2)},{default:k((()=>[O])),_:1},8,["class"])])),_:1})]),1==$.value?(v(),b("div",P,[m(f,{data:Z.value,border:""},{empty:k((()=>[m(n)])),default:k((()=>[m(u,{property:"name",label:"企业名称"}),m(u,{property:"code",label:"统一社会信用代码"}),m(u,{property:"legal_person",label:"联系人"}),m(u,{property:"contact",label:"联系电话"}),m(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[m(y,{effect:"dark",placement:"top"},{content:k((()=>[_("div",W,C(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[_("div",null,C(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),m(u,{property:"address",label:"详细地址"},{default:k((({row:a})=>[m(y,{effect:"dark",placement:"top"},{content:k((()=>[_("div",q,C(a.address),1)])),default:k((()=>[_("div",A,C(a.address),1)])),_:2},1024)])),_:1}),m(u,{property:"business_scope",label:"经营范围"})])),_:1},8,["data"])])):x("",!0),2==$.value?(v(),b("div",D,[m(f,{data:aa.value,border:""},{empty:k((()=>[m(n)])),default:k((()=>[m(u,{property:"name",label:"企业名称"}),m(u,{property:"code",label:"统一社会信用代码"}),m(u,{property:"legal_person",label:"联系人"}),m(u,{property:"contact",label:"联系电话"}),m(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[m(y,{effect:"dark",placement:"top"},{content:k((()=>[_("div",F,C(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[_("div",null,C(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),m(u,{property:"address",label:"详细地址"}),m(u,{property:"business_scope",label:"经营范围"}),m(u,{property:"status",label:"状态"},{default:k((({row:a})=>[_("div",G,[_("div",{class:w(["status_dot",h(d)(a.status).className])},null,2),_("div",null,C(h(d)(a.status).text),1)])])),_:1}),m(u,{property:"fail_reason",label:"备注"}),m(u,{label:"操作"},{default:k((({row:e})=>[_("div",L,[1==e.status?(v(),g(j,{key:0,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[M])),_:2},1032,["onClick"])):x("",!0),1==e.status?(v(),g(j,{key:1,type:"primary",onClick:a=>(async a=>{1==(await t({id:a})).status?r("操作成功！"):p("操作失败！"),ea()})(e.id)},{default:k((()=>[Q])),_:2},1032,["onClick"])):x("",!0),2==e.status?(v(),g(j,{key:2,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[R])),_:2},1032,["onClick"])):x("",!0),4==e.status?(v(),g(j,{key:3,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[S])),_:2},1032,["onClick"])):x("",!0)])])),_:1})])),_:1},8,["data"])])):x("",!0),m(oa,{modelValue:ta.value,"onUpdate:modelValue":e[5]||(e[5]=a=>ta.value=a),title:"新建企业",width:"380px"},{default:k((()=>[m(z,{modelValue:la.value,"onUpdate:modelValue":e[3]||(e[3]=a=>la.value=a),class:"pb20",placeholder:"请输企业名称"},null,8,["modelValue"]),_("div",T,[m(l,{onClick:e[4]||(e[4]=a=>ta.value=!1)},{default:k((()=>[X])),_:1}),m(l,{type:"primary",onClick:sa},{default:k((()=>[Y])),_:1})])])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-721dff4e"]]);export{Z as default};
