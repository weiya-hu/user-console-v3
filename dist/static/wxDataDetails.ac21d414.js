import{f as a}from"./date.23847c74.js";import{d as e}from"./dfavatar.b7e0a12f.js";import{K as t}from"./KzPage.0e73684e.js";import{K as r}from"./KzEmpty.640dfbae.js";import{j as l}from"./findC.41817a0b.js";import{H as s,u as o,g as d,_ as u,o as i,I as p,J as n,a as c,w as m,B as v,a2 as f,ay as y,b,ae as _}from"./vue.fa004e33.js";import{_ as g,m as w,O as h,P as j}from"./index.a202d357.js";import"./tinymce.50e98bcc.js";const z={class:"kz_card wxdata_details_c"},K={class:"dmp_table"},k=["src"];var x=g(s({setup(s){const g=w(),x=o((()=>g.state.addressHash)),C=d([]),H=y(),I=d(1),M=d(10),P=d(1),U=d(!1),q=()=>{U.value=!0,l({did:H.query.id,size:M.value,current:I.value}).then((a=>{1==a.status&&(C.value=a.body.records,P.value=a.body.total),U.value=!1})).catch((()=>{U.value=!1}))};q();const B=d([]),D=a=>{B.value=a.map((a=>a.id))},E=d();return d(),o((()=>!B.value.length)),(l,s)=>{const o=b("el-table-column"),d=b("el-table"),y=_("loading");return u((i(),p("div",z,[n("div",K,[c(d,{ref_key:"tableRef",ref:E,data:C.value,onSelectionChange:D},{empty:m((()=>[c(r)])),default:m((()=>[c(o,{type:"selection",width:"50"}),c(o,{property:"wechat_id",label:"好友微信号"}),c(o,{property:"avatar_url",label:"头像"},{default:m((a=>[n("img",{src:a.row.avatar_url||v(e),alt:"",class:"firstimg"},null,8,k)])),_:1}),c(o,{property:"nick_name",label:"昵称"}),c(o,{property:"gender",label:"性别"},{default:m((a=>[n("div",null,f(0==a.row.gender?"未知":1==a.row.gender?"男":"女"),1)])),_:1}),c(o,{property:"phone_number",label:"联系方式"}),c(o,{property:"address",label:"地区"},{default:m((a=>[n("div",null,f(v(h)(v(j)(a.row.province,a.row.city,a.row.district),v(x))),1)])),_:1}),c(o,{property:"signature",label:"个性签名"}),c(o,{property:"create_time",label:"更新时间"},{default:m((e=>[n("div",null,f(v(a)(new Date(e.row.update_time),"yyyy-MM-dd hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])]),c(t,{page:I.value,"onUpdate:page":s[0]||(s[0]=a=>I.value=a),size:M.value,"onUpdate:size":s[1]||(s[1]=a=>M.value=a),total:P.value,onChange:q},null,8,["page","size","total"])])),[[y,U.value]])}}}),[["__scopeId","data-v-5c60e9fb"]]);export{x as default};
