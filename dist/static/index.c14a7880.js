import{H as A,ax as a,g as s,u as e,o as n,I as l,J as i,P as t,aa as o,a2 as c,a0 as g,B as m,W as r,av as h,aw as d,a as u,w as v,T as p,c as f,r as w,b as B}from"./vue.a94c4214.js";import{_ as C,m as k,u as x}from"./index.00a686cf.js";import"./tinymce.a8dd01a6.js";const y=A=>(h("data-v-875a1976"),A=A(),d(),A),Q={class:"news_header"},D=y((()=>i("div",{class:"news_header_invite"},"你好，欢迎登录康洲数智官网！",-1))),E={class:"news_header_main flexb"},I={class:"flexl links"},_=["href"],R={key:0,class:"hot-txt"},U={class:"flexr"},b={key:0,class:"flexr news_userinfo"},M=y((()=>i("div",{class:"news_message"},"消息",-1))),j={class:"fleximg head_img"},z=["src"],N={class:"news_username"},Y={class:"fleximg exitimg"},S=["src"],K=y((()=>i("div",{class:"posi-more"},null,-1))),J={key:1,class:"login_item flexr"},F=y((()=>i("div",null,"登录",-1)));var W=C(A({setup(A){const h=a(),d=k(),u=s(),v=s(!1),p=s(!1),f=e((()=>d.state.userInfo));d.getYxtUrl().then((A=>{u.value=[{name:"首页",link:"//"+A.offical},{name:"药智器械",link:"https://qx.yaozh.com/login"},{name:"药智人才",link:"https://job.yaozh.com/"},{name:"专利通",link:"https://patent.yaozh.com/"},{name:"药智咨询",link:"https://report.yaozh.com/"},{name:"药智汇",link:"https://www.yaozh.com/zhihui/?yaozh"},{name:"药智通",link:"https://s.yaozh.com"},{name:"药智大讲堂",link:"https://edu.yaozh.com/"},{name:"产业大脑",link:"https://aiyun.yaozh.com/"},{name:"论坛交流",link:"https://bbs.yaozh.com"},{name:"俱乐部",link:"https://club.yaozh.com/"},{name:"海外智通",link:"https://www.yaohaiwai.com/"},{name:"药智谷",link:"https://gu.yaozh.com/"}]}));const w=e((()=>!!d.state.userInfo.id)),B=()=>{h.push("/login?url="+encodeURIComponent(window.location.href))},C=()=>{location.href="//"+d.state.yxtUrl.offical+"/app/user"};return(A,a)=>(n(),l("div",Q,[D,i("div",E,[i("div",I,[(n(!0),l(t,null,o(u.value,((A,a)=>(n(),l("div",{key:a},[i("a",{target:"_blank",href:A.link,class:"link-item"},c(A.name),9,_),1===a?(n(),l("span",R,"【热】")):g("",!0)])))),128))]),i("div",U,[m(w)?(n(),l("div",b,[M,i("div",{class:"news_userinfo_item flexr",onClick:C,onMouseenter:a[4]||(a[4]=A=>v.value=!0),onMouseleave:a[5]||(a[5]=A=>v.value=!1)},[i("div",j,[i("img",{src:m(f).head||"@/assets/images/news_header.png",onError:a[0]||(a[0]=A=>(A=>{A.target.src="/static/news_header.a2c9dc04.png"})(A))},null,40,z)]),i("div",N,c(m(f).name),1),v.value?(n(),l("div",{key:0,class:"fleximg exit",onClick:a[1]||(a[1]=A=>(async A=>{A.stopPropagation();const{status:a}=await x();a&&d.setUserinfo(!0)})(A)),onMouseenter:a[2]||(a[2]=A=>p.value=!0),onMouseleave:a[3]||(a[3]=A=>p.value=!1)},[i("div",Y,[i("img",{src:p.value?m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAAAtElEQVQoFWNgoAT8//9/CRCjg39AAXFc5jKCJEA6gJQdED8H8aHgPyMj410YBysNtUoGqyRQECjPhi7HhC6AzgdqCgaKnQPSouhyYKcCJbDaCBRnBuLVQHwBiIVgmllgDBgNlIwGss1hfCj9Bkj7AfF6ILYHiRF0KkgRTgC0BQRIcirYMIg+nBqDgfJXgJi0wAGZDNSEER3IgaMIVMCB5B94AgAmhF9I4ggmUAPJSQ6hm0QWAIMineGCcchbAAAAAElFTkSuQmCC"):m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAAA/0lEQVQoFWNgIBMwgvSZmZktAVLRaGb8Z2RklDx58uRLNHEwlwUqCNJkx8zM/BymCKjp/7Fjx7BqgqkB2fjf3NxcBi6AxggNDWVDE2JgQhdA5wMNDH748OE5W1tbUWQ5ghrl5OQ2AJ19/devX7stLS2FYJphfoTxGSwsLKL//ftnDhMA2gZivgFiv79//64H0vYgAYI2ghRhAxg2njhxYilQIQiDATBgmB89erQCyLnOxMQUCBUmbCNQU8D///812djYXI8fP/6OaI3ABLBWXl7e6PDhw69hmkA0LOX8B7KxJYC7yIqR2bDAAfnpEDDUbsPwnz9/bgPjUBxZMVXYAN8EWMb1U/vXAAAAAElFTkSuQmCC")},null,8,S)]),i("span",{class:r(p.value?"color":"")},"退出",2),K],32)):g("",!0)],32)])):(n(),l("div",J,[F,i("div",{onClick:B},"注册")]))])])]))}}),[["__scopeId","data-v-875a1976"]]);const q={class:"news"};var G=C(A({setup:A=>(A,a)=>{const s=B("router-view");return n(),l("div",q,[u(W),u(s,null,{default:v((({Component:A})=>[u(p,{name:"fade"},{default:v((()=>[(n(),f(w(A)))])),_:2},1024)])),_:1})])}}),[["__scopeId","data-v-83b671d0"]]);export{G as default};