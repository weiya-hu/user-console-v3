import{m as e,a as t,r as o,E as a,l as s}from"./index.a202d357.js";import{f as n}from"./date.23847c74.js";import{H as i,o as r,I as c,ax as d}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";const m=i({setup(i){const m=d(),l=e(),f=t("url"),u=t("code"),y=t("state"),p=t("url");return o({code:u,state:y}).then((e=>{if(e.status)window.location.href=p?decodeURIComponent(p):"//"+l.state.yxtUrl.offical;else if(10201===e.errno){const t="/bindphone?nickname="+e.body.nickname+"&headimgurl="+e.body.headimgurl;m.push(p?t+"&url="+p:t)}else 10200===e.errno&&a.confirm(`您的账户已于${n(new Date(e.body.time),"yyyy年MM月dd日 hh:mm:ss")}，在IP:${e.body.ip}登录，如非本人操作请尽快修改密码！`,"登录提醒",{confirmButtonText:"强制登录",cancelButtonText:"取消",customClass:"force_login"}).then((async()=>{(await s()).status&&setTimeout((()=>{window.location.href=f?decodeURIComponent(f):"//"+l.state.yxtUrl.offical}),500)}))})),(e,t)=>(r(),c("div"))}});export{m as default};
