import{g as a,a as e}from"./personnelManage.c61cd55b.js";import{H as s,g as i,u as t,o as n,I as o,a as l,w as d,J as c,a2 as r,a3 as u,B as m,a1 as v,av as g,aw as p,ax as f,ay as b,r as w}from"./vue.a499711c.js";import{_ as y,m as _,o as h}from"./index.fde176ed.js";import"./tinymce.275386ab.js";const x=a=>(g("data-v-26c6f54a"),a=a(),p(),a),N={key:0,class:"rz_dialog_hll"},$={class:"mid"},j={class:"mr"},k={class:"fir"},q=r("， "),I=x((()=>c("div",null,"是否接受邀请？",-1))),U={class:"imgs"},B=["src"],C={class:"cc"},S=r("接受邀请");var V=y(s({name:"invite",setup(s){const g=f(),p=b(),y=_(),x=i(!1);"undefined"!=typeof window&&void 0!==window.navigator&&(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)&&y.getYxtUrl().then((a=>{window.location.href="https://"+a.mobile+`/app/login${location.search}`})),x.value=!0);const V=p.query.uid,A=p.query.sign,P=p.query.cid,z=p.query.left_time,H=t((()=>y.state.userInfo.id));t((()=>y.state.yxtUrl.mobile));const J=i(!0),M=i({});(async()=>{const{body:e,status:s}=await a({cid:Number(P),uid:Number(V),sign:A.toString(),left_time:Number(z)});s&&(M.value=e)})();const O=async()=>{if(H.value){const{body:a}=await e({cid:Number(P),uid:Number(V),sign:A.toString(),left_time:Number(z)});h(2===a?"已经加入该企业，无需再次申请":"申请加入中，等待企业管理员同意/拒绝")}else h("请登录后接受邀请"),g.replace("/login?url="+encodeURIComponent(window.location.origin+`/invite?uid=${V}&sign=${A}&left_time=${z}&cid=${P}`))},R=()=>{h("已拒绝邀请")};return(a,e)=>{const s=w("el-button"),i=w("el-dialog");return x.value?(n(),o("div",N,[l(i,{modelValue:J.value,"onUpdate:modelValue":e[0]||(e[0]=a=>J.value=a),width:"500px","custom-class":"invites_dialog","show-close":!1},{default:d((()=>[c("div",$,[c("div",j,[c("div",k,[c("div",null,[r(u(M.value.user_name)+"邀请你加入 ",1),c("span",null,u(M.value.company_name),1),q])]),I])]),c("div",U,[c("img",{src:m("/static/invite.07fbb278.png"),alt:""},null,8,B),c("div",C,[c("span",{onClick:R},"拒绝邀请"),l(s,{class:"accept",onClick:O},{default:d((()=>[S])),_:1})])])])),_:1},8,["modelValue"])])):v("",!0)}}}),[["__scopeId","data-v-26c6f54a"]]);export{V as default};
