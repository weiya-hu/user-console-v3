var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,t=(a,r,o)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o;import{_ as i}from"./logo-white.2ea4ed8e.js";import{_ as n,a as m}from"./login_unselect.c17c67f8.js";import{L as u}from"./KzLoginInput.16b48a8e.js";import{_ as d,m as c,a as g,b as v,c as p,e as f,j as b,o as _}from"./index.561f5261.js";import{H as y,g as j,o as w,I as V,J as O,a as x,w as k,av as I,aw as P,a2 as U,r as C}from"./vue.a499711c.js";import"./login_down.c04ab7d4.js";import"./areaNum.1f3b05a6.js";import"./debounce.d23c09a7.js";import"./tinymce.275386ab.js";const h=e=>(I("data-v-6eaba596"),e=e(),P(),e),q={class:"register"},S={class:"register_main"},D=h((()=>O("div",{class:"fleximg logo_img"},[
O("img",{src:i})],-1))),L={class:"register_content"},R=h((()=>O("div",{class:"register_content_title fleximg"},"新用户注册",-1))),z={class:"register_content_main"},E={class:"fleximg user_agree_img"},F={key:0,src:n},H={key:1,src:m},J={class:"user_agree_txt"},K=U(" 我已阅读并同意");var M=d(y({name:"register",setup(e){const i=c(),n=j(!1),m=j(),d=g("url"),y=j({acode:"86",invite_code:sessionStorage.getItem("inviteCode")||void 0}),I=j({mobile:[{required:!0,message:"电话号码不能为空",trigger:"blur"},{validator:v,trigger:"blur"}],sms:[{required:!0,message:"验证码不能为空",trigger:"blur"}],pass:[{required:!0,message:"密码不能为空",trigger:"blur"},{validator:p,trigger:"blur"}],captcha:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}),P=e=>{e.preventDefault(),m.value.validate((async e=>{if(e){if(!n.value)return void f("请阅读并同意《康洲数智用户须知》");const e=(m=((e,a)=>{for(var r in a||(a={}))s.call(a,r)&&t(e,r,a[r]);if(o)for(var r of o(a))l.call(a,r)&&t(e,r,a[r]);return e})({},y.value),u={acode:"+"+y.value.acode},a(m,r(u))),{status:c,body:g,message:v}=await b(e);c&&(_("注册成功"),sessionStorage.setItem("islogin","1"),setTimeout((()=>{window.location.href=d?decodeURIComponent(d):"//"+i.state.yxtUrl.offical}),500))}var m,u}))};return(e,a)=>{const r=C("el-form-item"),o=C("el-form");return w(),V("div",q,[O("div",S,[D,O("div",L,[R,O("div",z,[x(o,{ref_key:"registerFormRef",ref:m,model:y.value,rules:I.value},{default:k((()=>[x(u,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),name:"mobile","form-name":"mobile"},null,8,["modelValue"]),x(u,{modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),name:"mobileYZM","form-name":"sms",type:"register"},null,8,["modelValue"]),x(u,{modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=e=>y.value=e),name:"password","form-name":"pass",label:"登录密码"},null,8,["modelValue"]),x(u,{modelValue:y.value,"onUpdate:modelValue":a[3]||(a[3]=e=>y.value=e),name:"invite_code","form-name":"invite_code"},null,8,["modelValue"]),x(r,null,{default:k((()=>[O("button",{class:"submit_button",type:"submit",onClick:a[4]||(a[4]=e=>P(e))}," 免费注册 ")])),_:1}),O("div",{class:"flexl user_agree",onClick:a[6]||(a[6]=e=>n.value=!n.value)},[O("div",E,[n.value?(w(),V("img",F)):(w(),V("img",H))]),O("div",J,[K,O("span",{onClick:a[5]||(a[5]=e=>(e.stopPropagation(),void window.open(window.location.origin+"/useragreement","_blank")))},"《康洲数智用户须知》")])])])),_:1},8,["model","rules"])])])])])}}}),[["__scopeId","data-v-6eaba596"]]);export{M as default};
