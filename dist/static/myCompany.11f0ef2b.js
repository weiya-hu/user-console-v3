import{m as a,n as e,o as t}from"./myinfo.82e88a3c.js";import{_ as l,m as s,A as o,O as i,P as c,a2 as r,o as d,e as p}from"./index.a202d357.js";import{K as n}from"./KzEmpty.640dfbae.js";import{H as u,u as y,g as v,o as b,I as _,J as m,a as f,w as k,B as h,W as C,a2 as w,a0 as x,c as g,av as j,aw as V,a1 as $,ax as z,b as H}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";const I={class:"kz_card my_company_page"},K={class:"card_title fsc"},U=(a=>(j("data-v-70397ea2"),a=a(),V(),a))((()=>m("div",null,"我的企业",-1))),A=$("添加企业"),B={class:"card_content"},E={class:"fsc"},J=$("已加入企业"),N=$("待审核企业"),O={key:0,class:"tab_box"},P={style:{width:"100px"}},W={key:1,class:"tab_box"},q={style:{width:"100px"}},D={class:"fcs"},F={class:"fcs"},G=$("编辑"),L=$("删除"),M=$("查看"),Q=$("重新提交"),R={class:"fcs fjend pb20"},S=$("取消"),T=$("保存");var X=l(u({setup(l){const u=z(),j=s(),V=y((()=>j.state.addressHash)),$=v(1),X=v([]);(async()=>{const e=await a();1===e.status&&(X.value=e.body)})();const Y=v([]),Z=async()=>{const a=await e();1===a.status&&(Y.value=a.body)};Z();const aa=v(!1),ea=v(""),ta=()=>{u.replace("/manage/company/authentication?name="+ea.value)};return(a,e)=>{const l=H("el-button"),s=H("el-button-group"),u=H("el-table-column"),y=H("el-tooltip"),v=H("el-table"),j=H("el-link"),z=H("el-input"),la=H("el-dialog");return b(),_("div",I,[m("div",K,[U,f(l,{type:"primary",icon:h(o),onClick:e[0]||(e[0]=e=>a.$router.push("authentication"))},{default:k((()=>[A])),_:1},8,["icon"])]),m("div",B,[m("div",E,[f(s,{class:"btn_tab"},{default:k((()=>[f(l,{class:C(1==$.value&&"btn_tab_active"),onClick:e[1]||(e[1]=a=>$.value=1)},{default:k((()=>[J])),_:1},8,["class"]),f(l,{class:C(2==$.value&&"btn_tab_active"),onClick:e[2]||(e[2]=a=>$.value=2)},{default:k((()=>[N])),_:1},8,["class"])])),_:1})]),1==$.value?(b(),_("div",O,[f(v,{data:X.value,border:""},{empty:k((()=>[f(n)])),default:k((()=>[f(u,{property:"name",label:"企业名称"}),f(u,{property:"code",label:"统一社会信用代码"}),f(u,{property:"legal_person",label:"联系人"}),f(u,{property:"contact",label:"联系电话"}),f(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[f(y,{effect:"dark",placement:"top"},{content:k((()=>[m("div",P,w(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[m("div",null,w(a.province>0&&h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),f(u,{property:"address",label:"详细地址"}),f(u,{property:"business_scope",label:"经营范围"})])),_:1},8,["data"])])):x("",!0),2==$.value?(b(),_("div",W,[f(v,{data:Y.value,border:""},{empty:k((()=>[f(n)])),default:k((()=>[f(u,{property:"name",label:"企业名称"}),f(u,{property:"code",label:"统一社会信用代码"}),f(u,{property:"legal_person",label:"联系人"}),f(u,{property:"contact",label:"联系电话"}),f(u,{property:"city_id",label:"地区"},{default:k((({row:a})=>[f(y,{effect:"dark",placement:"top"},{content:k((()=>[m("div",q,w(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),default:k((()=>[m("div",null,w(h(i)(h(c)(a.province,a.city,a.district),h(V))),1)])),_:2},1024)])),_:1}),f(u,{property:"address",label:"详细地址"}),f(u,{property:"business_scope",label:"经营范围"}),f(u,{property:"status",label:"状态"},{default:k((({row:a})=>[m("div",D,[m("div",{class:C(["status_dot",h(r)(a.status).className])},null,2),m("div",null,w(h(r)(a.status).text),1)])])),_:1}),f(u,{property:"fail_reason",label:"备注"}),f(u,{label:"操作"},{default:k((({row:e})=>[m("div",F,[1==e.status?(b(),g(j,{key:0,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[G])),_:2},1032,["onClick"])):x("",!0),1==e.status?(b(),g(j,{key:1,type:"primary",onClick:a=>(async a=>{1==(await t({id:a})).status?d("操作成功！"):p("操作失败！"),Z()})(e.id)},{default:k((()=>[L])),_:2},1032,["onClick"])):x("",!0),2==e.status?(b(),g(j,{key:2,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[M])),_:2},1032,["onClick"])):x("",!0),4==e.status?(b(),g(j,{key:3,type:"primary",onClick:t=>a.$router.push("authentication?id="+e.id)},{default:k((()=>[Q])),_:2},1032,["onClick"])):x("",!0)])])),_:1})])),_:1},8,["data"])])):x("",!0),f(la,{modelValue:aa.value,"onUpdate:modelValue":e[5]||(e[5]=a=>aa.value=a),title:"新建企业",width:"380px"},{default:k((()=>[f(z,{modelValue:ea.value,"onUpdate:modelValue":e[3]||(e[3]=a=>ea.value=a),class:"pb20",placeholder:"请输企业名称"},null,8,["modelValue"]),m("div",R,[f(l,{onClick:e[4]||(e[4]=a=>aa.value=!1)},{default:k((()=>[S])),_:1}),f(l,{type:"primary",onClick:ta},{default:k((()=>[T])),_:1})])])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-70397ea2"]]);export{X as default};
