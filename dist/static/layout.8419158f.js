var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&i(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{H as r,o as c,I as d,J as v,ay as p,g as f,ax as m,C as h,q as _,r as y,a as g,w as k,Y as b,X as w,T as x,$ as C,a0 as z,P as V,aa as q,a3 as I,a1 as U,B as j,c as $,a2 as K,av as L,aw as N,u as P,az as O,b as S,ad as T}from"./vue.a499711c.js";import{x as A,_ as E,y as H,m as R,z as B,A as M,B as D,C as F,D as Y,E as G,F as J,e as X,G as Q,H as W,u as Z}from"./index.561f5261.js";import{d as ee}from"./dfavatar.b7e0a12f.js";import{r as ae,n as le,i as te}from"./no_company.ef704c89.js";import{K as se}from"./KzDialog.9ecb6295.js";import{K as ne}from"./KzImgUpload.626b9804.js";import{K as ie}from"./KzUpload.e32ad148.js";import{K as oe}from"./KzUpAvatar.0f9545ab.js";import"./tinymce.275386ab.js";import"./kzkf.83b11867.js";const ue=r({name:"Menu"}),re={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ce=[v("path",{fill:"currentColor",d:"M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"},null,-1)];var de=A(ue,[["render",function(e,a,l,t,s,n){return c(),d("svg",re,ce)}]]);const ve={class:"is_show_icon"},pe={class:"kz_left_nav_scroll"},fe={class:"nav_icon"},me={class:"nav_text nowrap"},he={class:"nav_item_lv1_title"},_e={key:0,class:"hline"},ye={key:0,class:"fcs chover all_btn"},ge={class:"nowrap all_text"},ke=["onClick"],be={class:"nav_icon"},we={key:0,class:"kz_sec_nav"},xe={class:"sec_title fcs"};var Ce=E(r({name:"KzLeftNav",emits:["change"],setup(e,{expose:a,emit:l}){const t=p(),s=H.find((e=>"Layout"===e.name)).children.filter((e=>"Console"!==e.name)),n=f(!1);n.value="/console"!==t.path;const i=e=>{n.value=void 0===e?!n.value:e,l("change",!o.value&&n.value)},o=f(),u=f(""),r=m(),L=R(),N=(e,a)=>{n.value&&l("change",a),r.push(e).then((()=>{!a&&(n.value=!0)}))},P=f(),O=f(0);let S;h((()=>{setTimeout((()=>{P.value&&(P.value.style.transition="transform 0.2s")}),500),T()}));const T=()=>{_((()=>{S=document.querySelector(".kz_active"),S&&(O.value=S.offsetTop+(S.offsetHeight-30)/2)}))};return a({getSecNav:e=>{u.value=e||t.path,T();const a="/"+u.value.split("/")[1],l=s.find((e=>e.path===a));if(l)for(let t=0;t<l.children.length;t++){if(u.value.indexOf(l.children[t].path)>-1){o.value=l.children[t];break}o.value=void 0}else o.value=void 0},changeFlag:i}),(e,a)=>{const l=y("KzIcon"),t=y("el-icon"),r=y("el-scrollbar"),p=y("el-menu-item"),f=y("el-sub-menu"),m=y("el-menu");return c(),d("div",{id:"kz_left_nav_box",class:w(n.value&&"col_nav"),onMouseleave:a[2]||(a[2]=e=>i(!0))},[v("div",{class:"kz_left_nav",onMouseenter:a[1]||(a[1]=e=>i(!1))},[v("div",ve,[g(l,{size:"14px",href:n.value?"#icon-zhankai":"#icon-shouqi"},null,8,["href"])]),g(r,{noresize:!0},{default:k((()=>[v("div",pe,[v("div",{ref_key:"leftLine",ref:P,class:"left_vline",style:b({transform:`translate(0, ${O.value}px)`})},null,4),v("div",{class:w(["nav_item_lv2","/console"===u.value&&"kz_active"]),onClick:a[0]||(a[0]=e=>N("/console",!0))},[v("div",fe,[g(l,{href:"#icon-lanmu-kongzhitai"})]),g(x,{name:"el-fade-in-linear"},{default:k((()=>[C(v("div",me,"控制台",512),[[z,!n.value]])])),_:1})],2),(c(!0),d(V,null,q(j(s),(e=>(c(),d("div",{key:e.name,class:"nav_item_lv1"},[v("div",he,[g(x,{name:"el-fade-in-linear"},{default:k((()=>[C(v("div",{class:"nowrap"},I(e.meta.title),513),[[z,!n.value]])])),_:2},1024),g(x,{name:"el-fade-in-linear"},{default:k((()=>["Product"!==e.name?C((c(),d("div",_e,null,512)),[[z,n.value]]):U("",!0)])),_:2},1024),"Product"===e.name?(c(),d("div",ye,[g(x,{name:"el-fade-in-linear"},{default:k((()=>[C(v("div",ge,"全部",512),[[z,!n.value]])])),_:1}),g(t,{size:"16px",class:"fs0"},{default:k((()=>[g(j(de))])),_:1})])):U("",!0)]),(c(!0),d(V,null,q(e.children,(e=>{var a;return c(),d(V,{key:e.name},[!(null==(a=e.meta)?void 0:a.power)||j(L).isCanDo(e.meta.power)?(c(),d("div",{key:0,class:w(["nav_item_lv2",u.value.indexOf(e.path)>-1&&"kz_active"]),onClick:a=>N(e.path,!1)},[v("div",be,[g(l,{href:e.meta.icon},null,8,["href"])]),g(x,{name:"el-fade-in-linear"},{default:k((()=>[C(v("div",{class:"nav_text nowrap"},I(e.meta.title),513),[[z,!n.value]])])),_:2},1024)],10,ke)):U("",!0)],64)})),128))])))),128))])])),_:1})],32),o.value?C((c(),d("div",we,[v("div",xe,I(o.value.meta.title),1),g(r,{noresize:!0,style:{height:"calc(100% - 40px)"}},{default:k((()=>[o.value.children?(c(),$(m,{key:0,router:"","default-active":u.value},{default:k((()=>[(c(!0),d(V,null,q(o.value.children,(e=>(c(),d(V,{key:e.path},[e.children?(c(),$(f,{key:0,index:e.path},{title:k((()=>[K(I(e.meta.title),1)])),default:k((()=>[(c(!0),d(V,null,q(e.children,(e=>(c(),d(V,{key:e.path},[e.meta.father?U("",!0):(c(),$(p,{key:0,index:e.path},{default:k((()=>[K(I(e.meta.title),1)])),_:2},1032,["index"]))],64)))),128))])),_:2},1032,["index"])):U("",!0),e.children||e.meta.father?U("",!0):(c(),$(p,{key:1,index:e.path},{default:k((()=>[K(I(e.meta.title),1)])),_:2},1032,["index"]))],64)))),128))])),_:1},8,["default-active"])):U("",!0)])),_:1})],512)),[[z,n.value]]):U("",!0)],34)}}}),[["__scopeId","data-v-13bacc00"]]);const ze=e=>(L("data-v-823a9f8a"),e=e(),N(),e),Ve={class:"details_header fcs"},qe=ze((()=>v("div",null,"返回",-1))),Ie=ze((()=>v("div",{class:"vline"},null,-1)));var Ue=E(r({name:"KzDetailsHeader",setup(e,{expose:a}){const l=p(),t=f([]),s=e=>{const a=e.path.split("/"),l="/"+a[1],s=l+"/"+a[2],n=s+"/"+a[3];t.value=[];for(let i=0;i<e.matched.length;i++){const a=e.matched[i];if(a.path!==l){if(a.path!==s)if(a.path!==n){if(a.path===e.path){t.value.push(a);break}}else{if(t.value.push(a),a.path===e.path)break;if(a.children){const l=a.children.find((a=>a.path===e.meta.father));l&&t.value.push(l)}}else if(t.value.push(a),a.children){const l=a.children.find((a=>a.path===e.meta.father));l&&t.value.push(l)}}else t.value.push(a)}};return s(l),a({getCrumbs:s}),(e,a)=>{const l=y("el-icon"),s=y("el-breadcrumb-item"),n=y("el-breadcrumb");return c(),d("div",Ve,[v("div",{class:"fcs back",onClick:a[0]||(a[0]=a=>e.$router.back())},[g(l,null,{default:k((()=>[g(j(B))])),_:1}),qe]),Ie,g(n,{separator:"/"},{default:k((()=>[(c(!0),d(V,null,q(t.value,(e=>(c(),$(s,{key:e.path,to:{path:e.path}},{default:k((()=>[K(I(e.meta.title),1)])),_:2},1032,["to"])))),128))])),_:1})])}}}),[["__scopeId","data-v-823a9f8a"]]);const je={class:"kz_introduction"},$e={key:0,class:"fcc tip_msg"},Ke={class:"tip_content"},Le=K("切换版本"),Ne=["src"];var Pe=E(r({name:"KzIntroduction",props:{product:null,showMsg:{type:Boolean,default:!1},type:{default:1},showChange:{type:Boolean,default:!1}},emits:["changeIns"],setup(e,{emit:a}){const l=e,t=f({dmp:"https://res.kzszh.com/dev/web/index/image/5850940396c41a72c181eaa202d02123.jpg",cms:"https://res.kzszh.com/dev/web/index/image/966cdce67688806609fb0826a9303134.jpg"}),s=f(!1),n=R(),i=P((()=>n.state.nowUserIdentity.iconType)),o=f({1:{msg:"暂未订购该产品与服务。",link:"联系客服订购产品"},2:{msg:"该产品已到期，请联系客服续订。",link:"联系客服续订产品"},3:{msg:"当前身份/版本无此权限，请联系"+("user"===i.value?"客服升级。":"企业管理员设置权限。"),link:"user"===i.value?"联系客服升级产品":""}}),u=()=>{a("changeIns")};return(a,n)=>{const i=y("el-icon"),r=y("el-link");return c(),d("div",je,[e.showMsg?(c(),d("div",$e,[g(i,{color:"#2150EC"},{default:k((()=>[g(j(M))])),_:1}),v("div",Ke,"亲爱的用户，"+I(o.value[l.type].msg),1),g(r,{type:"primary",onClick:n[0]||(n[0]=e=>s.value=!0)},{default:k((()=>[K(I(o.value[l.type].link),1)])),_:1}),e.showChange&&3===e.type?(c(),$(r,{key:0,type:"primary",onClick:u},{default:k((()=>[Le])),_:1})):U("",!0)])):U("",!0),v("img",{src:e.product?t.value[e.product]:"",alt:""},null,8,Ne),g(se,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=e=>s.value=e),type:"kf"},null,8,["modelValue"])])}}}),[["__scopeId","data-v-61cbfe62"]]);const Oe=e=>(L("data-v-f42bd9c8"),e=e(),N(),e),Se={class:"layout_page"},Te={class:"layout_top_lt fcs"},Ae={class:"all_nav_btn"},Ee=["src"],He={key:0,class:"layout_top_middle fcs"},Re=Oe((()=>v("div",{class:"vline"},null,-1))),Be={class:"fcs icon_rotate"},Me={class:"now_identity"},De={class:"user_identity"},Fe={class:"user_self"},Ye={class:"identity_title fcs"},Ge=Oe((()=>v("div",null,"个人版",-1))),Je={class:"company_self"},Xe={class:"identity_title fsc"},Qe={class:"fcs"},We=Oe((()=>v("div",null,"企业版",-1))),Ze=K("添加企业"),ea=["onClick"],aa={class:"layout_top_rt fcs f1 fjend"},la={class:"top_links fcs"},ta=K("控制台"),sa=K("官网"),na=Oe((()=>v("div",{class:"vline"},null,-1))),ia={class:"user_box fcs"},oa={class:"fcs pl16 icon_rotate"},ua={class:"user_name els"},ra={class:"user_drop_info fc"},ca={class:"fcs fjend"},da={class:"tags fcc"},va=["src"],pa=["src"],fa={key:1,class:"real_name_text"},ma={class:"fcc fc user_avatar"},ha={class:"user_name1 els"},_a={class:"user_btns f1 fc fjend"},ya=["onClick"],ga={class:"fcc"},ka={class:"btn_text"},ba={key:0,class:"fsc layout_content_page_top"},wa={key:0,class:"fcs"},xa={class:"fcs"},Ca=["src"],za=Oe((()=>v("div",{class:"vline"},null,-1))),Va={class:"fcs"},qa={class:"now_edition"},Ia={key:1,class:"layout_content_box",style:{height:"100%"}},Ua=Oe((()=>v("div",{class:"kz_copyright"}," Copyright © 2022-2023 康洲数智(科技)科技有限公司 | 渝ICP2021012132号-2 | 渝公网安备 50010802004553号 ",-1))),ja=K("确定"),$a=["src"],Ka={class:"fcs fjend pb20"},La=K("取消"),Na=K("保存"),Pa=K("上传"),Oa=K("清除"),Sa=K("上传"),Ta=K("清除"),Aa=K("上传");var Ea=E(r({name:"layout",setup(e){const a=f(),l=f(!1),t=f([]),s=e=>{},n=e=>{},i=()=>{a.value.submit()},r=()=>{t.value.length=0,a.value.clear()},_=f(""),b=f(),z=()=>{b.value.submit()},L=()=>{b.value.clear()},N=e=>{},A=e=>{},E=f(),H=f("");setTimeout((()=>{H.value="https://res.kzszh.com/dev/web/index/image/736612fc47abb31fbab2bfdf3d67ba1a.png"}),2e3);const B=async()=>{E.value.upload()},M=()=>{},ue=f(),re=f(),ce=p(),de=m(),ve=R();ve.getTypeList(),ve.getAddressList(),ve.getCAndC(),ve.getCountryList(),ve.getYxtUrl();const pe=P((()=>ve.state.yxtUrl)),fe=P((()=>ve.state.userInfo)),me=P((()=>!!ve.state.userInfo.id||(de.replace("/login?url="+encodeURIComponent(window.location.origin+"/console")),!1)));ve.getMemberList();const he=P((()=>ve.state.memberList));ve.setUserCompany();const _e=P((()=>ve.state.userCompany)),ye=P((()=>ve.state.nowUserIdentity)),ge=e=>{G.confirm("切换版本后页面会重新加载，是否切换版本至“ "+e.name+" ”？","版本切换",{confirmButtonText:"确认",cancelButtonText:"取消",type:"info"}).then((async()=>{1===(await J({cid:e.id})).status&&(window.location.href=window.location.origin+"/console")})).catch((()=>{}))},ke=f(!1),be=f(!1);D.on("addCompany",(()=>{ke.value=!0}));const we=f(),xe=f(),ze=f({logo:"",name:""}),Ve=()=>{we.value.resetFields(),ze.value.logo="",ze.value.name=""},qe=f({logo:[{validator:(e,a,l)=>{xe.value.imgs.length?l():l(new Error("请添加企业logo！"))},trigger:"change"}],name:[{required:!0,message:"请输入企业名称！",trigger:"blur"}]}),Ie=()=>{we.value.validate((e=>{e&&(be.value=!0,xe.value.submit())}))},je=()=>{we.value.clearValidate("logo")},$e=e=>{ze.value.logo=e[0],be.value=!1},Ke=e=>{be.value=!1,X(e)},Le=[{text:"用户中心",icon:"#icon-banbenqiehuan-geren",url:"/manage/user"},{text:"反馈",icon:"#icon-pinglun",url:"/console"},{text:"退出登录",icon:"#icon-tuichu",url:"login_out"}],Ne=f(!1),Oe=f({}),Ea=e=>{Number(ce.query.insid)!==e.insid&&(Oe.value=e,Ne.value=!0)},Ha=()=>{window.location.replace(`/product/${Ya.value}?insid=`+Oe.value.insid)},Ra=f(!1),Ba=f(0),Ma=()=>{Ba.value&&(Ba.value===Number(ce.query.insid)?Q("已经是当前版本"):window.location.replace(`/product/${Ya.value}?insid=`+Ba.value))},Da=()=>{Ba.value=Number(ce.query.insid),Ra.value=!0},Fa=e=>{if(e.meta.insPower&&e.query.insid){const a=P((()=>ve.state.insPowerListInfo[e.query.insid]));return a.value?a.value.includes(e.meta.insPower)?void(Wa.value=!1):void(Wa.value=!0):void(Wa.value=!1)}Wa.value=!1};ve.setInstance().then((()=>{if(ce.path.includes("/product/")){Ya.value=ce.path.split("/")[2];const e=Za(ce);e&&de.replace({replace:!0,path:ce.path,query:u(o({},ce.query),{insid:e})}),Fa(ce)}}));const Ya=f(""),Ga=P((()=>ve.state.insListInfo)),Ja=P((()=>Ga.value[Ya.value])),Xa=P((()=>Ga.value[Ya.value]?Ga.value[Ya.value].filter((e=>1===e.valid)):[])),Qa=f(""),Wa=f(!1),Za=e=>{const a=()=>{if(!(Xa.value.length>1))return Qa.value=e.query.insid,Xa.value[0].insid;Ra.value=!0};return e.query.insid?Xa.value&&Xa.value.length?Xa.value&&-1===Xa.value.findIndex((a=>a.insid===Number(e.query.insid)))?a():void(Qa.value=e.query.insid):void(Qa.value=""):Xa.value&&Xa.value.length?a():void(Qa.value="")};O(((e,a)=>{if(e.path.includes("/product/")){const l=e.path.split("/"),t=a.path.split("/");if(Ya.value=l[2],l[2]!==t[2]&&(Qa.value=""),!a.path.includes("/product/")||l[2]!==t[2]){const a=Za(e);if(a)return{replace:!0,path:e.path,query:u(o({},e.query),{insid:a})}}if(Qa.value&&!e.query.insid)return{replace:!0,path:e.path,query:u(o({},e.query),{insid:Qa.value})}}ue.value.getSecNav(e.meta.father||e.path),ue.value.changeFlag("/console"!==e.path),re.value&&re.value.getCrumbs(e),a.meta.keepAlive&&e.meta.father===a.path?ve.setKeepList([a.name]):e.meta.keepAlive&&a.meta.father===e.path||ve.setKeepList([])})),de.afterEach((e=>{e.path.includes("/product/")&&Fa(e)})),h((()=>{ue.value&&ue.value.getSecNav(ce.meta.father||ce.path)}));const el=f(!1),al=e=>{el.value=e},ll=f([]),tl=f(!1),sl=f(0);D.on("lookImage",(({imgs:e,index:a})=>{tl.value=!0,ll.value=e,sl.value=a}));const nl=f(!1),il=f("");return D.on("lookVideo",(e=>{il.value=e,nl.value=!0})),(e,o)=>{const u=y("KzIcon"),p=y("el-icon"),f=y("el-link"),m=y("el-dropdown"),h=y("el-avatar"),P=y("el-popover"),O=y("el-row"),R=y("el-col"),D=y("el-scrollbar"),G=y("el-dropdown-item"),J=y("el-dropdown-menu"),X=y("router-view"),Q=y("el-skeleton"),ce=y("el-radio"),Fa=y("el-radio-group"),Ga=y("el-button"),Qa=y("el-dialog"),Za=y("el-image-viewer"),ol=y("el-form-item"),ul=y("el-input"),rl=y("el-form"),cl=T("loading");return c(),d("div",Se,[j(me)?(c(),d(V,{key:0},[g(O,{class:"layout_top fcs"},{default:k((()=>[v("div",Te,[v("div",Ae,[g(u,{href:"#icon-suoyouchanpin"})]),v("img",{src:j("/static/logo.fba63c5f.png"),alt:"加载失败",class:"logo"},null,8,Ee)]),j(_e).user?(c(),d("div",He,[Re,g(u,{href:"user"===j(ye).iconType?"#icon-banbenqiehuan-geren":"#icon-banbenqiehuan-tuandui",size:"16px",color:"#909399"},null,8,["href"]),g(m,null,{dropdown:k((()=>[v("div",De,[v("div",Fe,[v("div",Ye,[g(u,{href:"#icon-banbenqiehuan-geren",size:"12px"}),Ge]),v("div",{class:"identity_item els",onClick:o[0]||(o[0]=e=>ge(j(_e).user))},I(j(_e).user.name),1)]),v("div",Je,[v("div",Xe,[v("div",Qe,[g(u,{href:"#icon-banbenqiehuan-tuandui",size:"12px"}),We]),j(_e).company_list.length<3?(c(),$(f,{key:0,type:"primary",onClick:o[1]||(o[1]=a=>e.$router.push("/manage/user/authentication"))},{default:k((()=>[g(p,{color:"#2D68EB",size:"14px"},{default:k((()=>[g(j(F))])),_:1}),Ze])),_:1})):U("",!0)]),(c(!0),d(V,null,q(j(_e).company_list,(e=>(c(),d("div",{key:e.id,class:"identity_item els",onClick:a=>ge(e)},I(e.name),9,ea)))),128))])])])),default:k((()=>[v("div",Be,[v("span",Me,I(j(ye).name),1),g(u,{href:"#icon-xiala-shouqitianchong",size:"16px"})])])),_:1})])):U("",!0),v("div",aa,[v("div",la,[g(f,{class:"mr20",onClick:o[2]||(o[2]=a=>e.$router.push("/console"))},{default:k((()=>[ta])),_:1}),g(f,{href:"//"+j(pe).offical,target:"_blank"},{default:k((()=>[sa])),_:1},8,["href"])]),na,v("div",ia,[g(h,{size:36,src:j(fe).head||j(ee)},null,8,["src"]),j(he).length&&j(fe).level?(c(),$(P,{key:0,"show-arrow":!1,width:"316px","popper-class":"user_drop"},{reference:k((()=>[v("div",oa,[v("div",ua,I(j(fe).name),1),g(u,{href:"#icon-shouqi02",size:"16px"})])])),default:k((()=>{var a;return[v("div",ra,[v("div",ca,[v("div",da,[v("img",{src:null==(a=j(he).find((e=>Number(e.id)===j(fe).level)))?void 0:a.icon,alt:""},null,8,va)]),v("div",{class:w(["tags fcc",!j(fe).real_name&&"real_name_btn"]),onClick:o[3]||(o[3]=a=>!j(fe).real_name&&e.$router.push("/manage/user/realname"))},[j(fe).real_name?(c(),d("img",{key:0,src:j(ae),alt:""},null,8,pa)):(c(),d("div",fa,"实名认证"))],2)]),v("div",ma,[g(h,{size:64,src:j(fe).head||j(ee)},null,8,["src"]),v("div",ha,I(j(fe).name),1)]),v("div",_a,[(c(),d(V,null,q(Le,(e=>v("div",{key:e.url,class:"fsc user_btns_item",onClick:a=>{var l;"login_out"!==(l=e.url)?de.push(l):Z().then((()=>{ve.setUserinfo(!0),window.location.replace("/login?url="+encodeURIComponent(window.location.origin+"/console"))}))}},[v("div",ga,[g(u,{size:"16px",href:e.icon},null,8,["href"]),v("div",ka,I(e.text),1)]),"login_out"!==e.url?(c(),$(p,{key:0,size:"16px"},{default:k((()=>[g(j(W))])),_:1})):U("",!0)],8,ya))),64))])])]})),_:1})):U("",!0)])])])),_:1}),g(O,{class:"layout_container"},{default:k((()=>[g(R,{class:w(["layout_nav",el.value&&"no_sec"])},{default:k((()=>[g(Ce,{ref_key:"leftNavRef",ref:ue,onChange:al},null,512)])),_:1},8,["class"]),!e.$route.path.includes("/product/")||e.$route.query.insid&&!Wa.value&&j(Xa).length&&-1!==j(Xa).findIndex((a=>a.insid===Number(e.$route.query.insid)))?(c(),$(R,{key:1,class:w(["layout_content",{layout_details_page:"/console"!==e.$route.path,layout_content_big:el.value}])},{default:k((()=>["/console"!==e.$route.path?(c(),d("div",ba,[g(Ue,{ref_key:"detailsHeaderRef",ref:re},null,512),e.$route.path.includes("/product/")&&j(Xa).length?(c(),d("div",wa,[v("div",xa,[v("img",{src:"user"===j(ye).iconType?j(le):j(te),alt:"",style:{width:"16px",height:"16px","margin-right":"4px"}},null,8,Ca),v("div",null,I(j(ye).name),1)]),za,g(m,{onCommand:Ea},{dropdown:k((()=>[g(J,null,{default:k((()=>[(c(!0),d(V,null,q(j(Xa),(a=>(c(),$(G,{key:a,command:a},{default:k((()=>[v("div",{class:w(["ins_edition_dot",Number(e.$route.query.insid)===a.insid&&"active"])},null,2),v("div",null,I(a.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:k((()=>{var a;return[v("div",Va,[v("div",qa,I(null==(a=j(Xa).find((a=>a.insid===Number(e.$route.query.insid))))?void 0:a.name),1),g(p,{size:"14px"},{default:k((()=>[g(j(Y))])),_:1})])]})),_:1})])):U("",!0)])):U("",!0),e.$route.meta.scroll?(c(),d("div",Ia,[g(X,null,{default:k((({Component:e})=>[g(x,{name:"fade"},{default:k((()=>[(c(),$(S(e)))])),_:2},1024)])),_:1})])):(c(),$(D,{key:2,"wrap-class":"layout_content_box",noresize:!0},{default:k((()=>[g(X,null,{default:k((({Component:e})=>[g(x,{name:"fade"},{default:k((()=>[(c(),$(S(e)))])),_:2},1024)])),_:1})])),_:1}))])),_:1},8,["class"])):(c(),$(R,{key:0,class:"layout_content"},{default:k((()=>[g(D,{noresize:!0},{default:k((()=>[g(Pe,{product:Ya.value,"show-msg":!!Wa.value||!Ra.value,type:Wa.value?3:j(Ja)&&j(Ja).length?2:1,"show-change":j(Xa).length>1,onChangeIns:Da},null,8,["product","show-msg","type","show-change"])])),_:1})])),_:1}))])),_:1}),Ua],64)):(c(),$(Q,{key:1,rows:5,animated:""})),g(se,{modelValue:Ne.value,"onUpdate:modelValue":o[4]||(o[4]=e=>Ne.value=e),title:"切换企业版本数据",msg:"切换后页面会重新加载，是否切换至“ "+Oe.value.name+" ”",onSure:Ha},null,8,["modelValue","msg"]),g(Qa,{modelValue:Ra.value,"onUpdate:modelValue":o[6]||(o[6]=e=>Ra.value=e),title:"选择版本",width:"30%","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:k((()=>[g(Ga,{type:"primary",disabled:!Ba.value,onClick:Ma},{default:k((()=>[ja])),_:1},8,["disabled"])])),default:k((()=>[g(Fa,{modelValue:Ba.value,"onUpdate:modelValue":o[5]||(o[5]=e=>Ba.value=e)},{default:k((()=>[(c(!0),d(V,null,q(j(Xa),(e=>(c(),$(ce,{key:e.insid,label:e.insid},{default:k((()=>[K(I(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),tl.value?(c(),$(Za,{key:2,"url-list":ll.value,"initial-index":sl.value,onClose:o[7]||(o[7]=e=>tl.value=!1)},null,8,["url-list","initial-index"])):U("",!0),g(Qa,{modelValue:nl.value,"onUpdate:modelValue":o[8]||(o[8]=e=>nl.value=e),title:"查看视频",width:"60%","custom-class":"view_videobox",onClose:o[9]||(o[9]=e=>il.value="")},{default:k((()=>[v("video",{src:il.value,controls:"",class:"show_video"},null,8,$a)])),_:1},8,["modelValue"]),g(Qa,{modelValue:ke.value,"onUpdate:modelValue":o[12]||(o[12]=e=>ke.value=e),title:"新建企业",width:"500px",onClose:Ve},{default:k((()=>[C((c(),$(rl,{ref_key:"addCompanyFormRef",ref:we,model:ze.value,rules:qe.value,"hide-required-asterisk":"","label-width":"85px"},{default:k((()=>[g(ol,{label:"企业logo：",prop:"logo"},{default:k((()=>[ke.value?(c(),$(ne,{key:0,ref_key:"addCompanyLogoUpRef",ref:xe,max:1,onChange:je,onUpAllSuccess:$e,onError:Ke},null,512)):U("",!0)])),_:1}),g(ol,{label:"企业名称：",prop:"name"},{default:k((()=>[g(ul,{modelValue:ze.value.name,"onUpdate:modelValue":o[10]||(o[10]=e=>ze.value.name=e),placeholder:"请输企业名称"},null,8,["modelValue"])])),_:1}),v("div",Ka,[g(Ga,{onClick:o[11]||(o[11]=e=>ke.value=!1)},{default:k((()=>[La])),_:1}),g(Ga,{type:"primary",onClick:Ie},{default:k((()=>[Na])),_:1})])])),_:1},8,["model","rules"])),[[cl,be.value]])])),_:1},8,["modelValue"]),g(Qa,{modelValue:l.value,"onUpdate:modelValue":o[15]||(o[15]=e=>l.value=e),title:"上传demo",width:"70%"},{default:k((()=>[l.value?(c(),$(ne,{key:0,ref_key:"upImgRef",ref:a,max:3,msg:"上传demo","img-list":t.value,onUpAllSuccess:s,onError:n},null,8,["img-list"])):U("",!0),g(Ga,{class:"mb20",onClick:i},{default:k((()=>[Pa])),_:1}),g(Ga,{class:"mb20",onClick:r},{default:k((()=>[Oa])),_:1}),g(ie,{ref_key:"upRef",ref:b,modelValue:_.value,"onUpdate:modelValue":o[13]||(o[13]=e=>_.value=e),onError:N,onSuccess:A},null,8,["modelValue"]),g(Ga,{class:"mt20",onClick:z},{default:k((()=>[Sa])),_:1}),g(Ga,{class:"mt20",onClick:L},{default:k((()=>[Ta])),_:1}),g(oe,{ref_key:"KzUpAvatarRef",ref:E,modelValue:H.value,"onUpdate:modelValue":o[14]||(o[14]=e=>H.value=e),onSuccess:M},null,8,["modelValue"]),g(Ga,{class:"mt20",onClick:B},{default:k((()=>[Aa])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-f42bd9c8"]]);export{Ea as default};
