var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{t as l}from"./trial.06120260.js";import{K as r}from"./KzEmpty.cf970ba3.js";import{g as o,p as c,_ as n,m as u,a3 as d,e as p}from"./index.e45ab2da.js";import{f as v}from"./date.23847c74.js";import{K as m}from"./KzDialog.579e968a.js";import{H as y,g as f,o as _,I as b,P as k,aa as g,c as w,a as j,av as h,aw as z,b as x,B as D,a0 as C,J as O,a2 as K,W as F,w as I,a1 as P}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";import"./kzkf.70bb183f.js";const T=e=>(h("data-v-6da666ce"),e=e(),z(),e),E={class:"kz_card my_product_page"},M=T((()=>O("div",{class:"card_title"},"产品与服务",-1))),V={key:0,class:"fcs fww card_content"},B=["src"],U={class:"img_box fcc"},q=["src"],H={class:"name fcs"},J={class:"text"},N={key:1,class:"time fsc"},S={class:"lt fcs"},W={class:"rt"},$={key:2,class:"time fcs"},A=T((()=>O("div",{class:"time_tips"},"当前版本已过期，请联系客服续期",-1))),G={key:3,class:"btns"},L=P("购买"),Q=P("升级"),R=P("进入系统"),X=P(" 联系客服 ");var Y=n(y({setup(e){const n=u(),y=f({});(async()=>{const{body:e,status:a}=await o("user","/web/user/product.list");y.value=e})();const h=f(),z=e=>{const a=new Date,t=new Date(e).getTime()-a.getTime(),s=Math.floor(t/864e5);return h.value=s+"天",s},P=f(0),T=f(0),Y=f(0),Z=async()=>{const e={id:P.value,version_type:T.value},l=await(e=>c("user","/web/user/instance/switch.do",e))(((e,l)=>{for(var r in l||(l={}))t.call(l,r)&&i(e,r,l[r]);if(a)for(var r of a(l))s.call(l,r)&&i(e,r,l[r]);return e})({},e));1===l.status?Y.value&&d(Y.value)&&window.location.replace(`/product/${d(Y.value)}?insid=`+P.value):p("操作失败!")},ee=f(!1);return(e,a)=>{const t=x("KzIcon"),s=x("el-button");return _(),b("div",E,[M,y.value.length?(_(),b("div",V,[(_(!0),b(k,null,g(y.value,(e=>(_(),b("div",{key:e,class:"item"},[1===e.version_type?(_(),b("img",{key:0,src:D(l),alt:"",class:"trial_img"},null,8,B)):C("",!0),O("div",U,[O("img",{src:e.thumb_url,alt:""},null,8,q)]),O("div",H,[O("div",J,K(e.product_name),1),O("div",{class:F(["tag",1===e.version_type?1===e.type?"try":"u_paid":1===e.type?"try":"c_paid"])},[O("div",{class:F(["tag_box",1===e.version_type?1===e.type?"try":"u_paid":1===e.type?"try":"c_paid"])},K(e.version_name),3)],2)]),(new Date).getTime()<e.left_time?(_(),b("div",N,[O("div",S,[j(t,{href:"#icon-riqi",size:"14px",color:z(e.left_time)<=5?"#FF4736":"#000"},null,8,["color"]),O("div",{class:F(z(e.left_time)<=5&&"time_tips")}," 剩余"+K(z(e.left_time))+"天 ",3)]),O("div",W," 有效期至： "+K(D(v)(new Date(Number(e.left_time)),"yyyy-MM-dd")),1)])):(_(),b("div",$,[j(t,{href:"#icon-zhuyi-biankuang",size:"14px",color:"#FF4736"}),A])),(new Date).getTime()<e.left_time?(_(),b("div",G,[1===e.version_type?(_(),w(s,{key:0,type:"danger",plain:"",onClick:a[0]||(a[0]=e=>ee.value=!0)},{default:I((()=>[L])),_:1})):(_(),w(s,{key:1,type:"warning",plain:"",onClick:a[1]||(a[1]=e=>ee.value=!0)},{default:I((()=>[Q])),_:1})),j(s,{type:"primary",onClick:a=>{return t=e.id,s=e.product_id,i=e.version_type,T.value=i,P.value=t,Y.value=s,Z(),void n.setUserCompany();var t,s,i}},{default:I((()=>[R])),_:2},1032,["onClick"])])):(_(),b("div",{key:4,class:"btns kf",onClick:a[2]||(a[2]=e=>ee.value=!0)},[j(t,{href:"#icon-lanmu-kefu",size:"14px",color:"#2D68EB"}),X]))])))),128))])):(_(),w(r,{key:1})),j(m,{modelValue:ee.value,"onUpdate:modelValue":a[3]||(a[3]=e=>ee.value=e),type:"kf"},null,8,["modelValue"])])}}}),[["__scopeId","data-v-6da666ce"]]);export{Y as default};
