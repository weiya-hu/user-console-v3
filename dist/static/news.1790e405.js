import{g as e,_ as a,m as s,a as l}from"./index.f91ef24c.js";import{H as n,ax as t,g as i,u as v,o as c,I as o,J as m,P as u,aa as d,W as r,a2 as _,B as f,a0 as w,X as p,a1 as y,av as b,aw as g,q as x,a as h,w as N,_ as k,b as I,ae as C,c as S}from"./vue.fa004e33.js";import"./tinymce.50e98bcc.js";const J=e=>(b("data-v-569fa668"),e=e(),g(),e),M={class:"news_nav"},O={key:0,class:"flexb news_nav_pre"},T=["onClick"],Y=y(" 更多 "),j={key:0,class:"news_nav_more_model"},z=J((()=>m("div",{class:"news_nav_more_model_more"},null,-1))),q=["onClick"],D=["onClick"];var L=a(n({emits:["navChange"],setup(a,{emit:n}){const y=s(),b=t(),g=i([]),h=i(),N=i(),k=i(!1);(async()=>{const{status:a,body:s}=await e("official ","/public/type.list"),t=l("newsTypeId"),i=l("newsId");a&&(()=>{const e=t||y.state.newsMayLikeId;g.value=s,h.value=i?null:e,C(),i||(b.push("/news?newsTypeId="+e),n("navChange",e))})()})();const I=v((()=>e=>{const a=JSON.parse(JSON.stringify(g.value));return e?a.splice(0,11):a.splice(11,a.length)})),C=()=>{x((()=>{const e=document.querySelector(".news_nav_item_active");e&&(N.value=e.offsetLeft+e.offsetWidth/2-16)}))},S=e=>{const a=l("newsId");h.value=e,b.push("/news?newsTypeId="+e),!a&&(n("navChange",e),C())};return(e,a)=>(c(),o("div",M,[g.value.length>12?(c(),o("div",O,[m("div",{class:"flexb news_nav_pre_son",onSelectstart:a[0]||(a[0]=()=>!1)},[(c(!0),o(u,null,d(f(I)(!0),((e,a)=>(c(),o("div",{key:a,class:r(h.value==e.id?"news_nav_item news_nav_item_active":"news_nav_item"),onClick:a=>S(e.id)},_(e.name),11,T)))),128))],32),m("div",{class:"news_nav_more fleximg",onMouseenter:a[1]||(a[1]=e=>k.value=!0),onMouseleave:a[2]||(a[2]=e=>k.value=!1)},[Y,k.value?(c(),o("div",j,[z,m("div",{class:r(f(I)(!1).length>4?"news_nav_more_content flexl flex_wrap_width":"news_nav_more_content flexl")},[(c(!0),o(u,null,d(f(I)(!1),((e,a)=>(c(),o("div",{key:a,class:"news_nav_more_item fleximg",onClick:s=>((e,a)=>{const s=JSON.parse(JSON.stringify(g.value));s.splice(11+a,1),s.splice(10,0,e),k.value=!1,g.value=s,S(e.id)})(e,a)},_(e.name),9,q)))),128))],2)])):w("",!0)],32),h.value?(c(),o("div",{key:0,class:"news_line",style:p("left:"+N.value+"px")},null,4)):w("",!0)])):(c(),o("div",{key:1,class:r(g.value.length<=10?"flexl news_nav_pre news_nav_pre_mright":"flexb news_nav_pre")},[(c(!0),o(u,null,d(g.value,((e,a)=>(c(),o("div",{key:a,class:r(h.value==e.id?"news_nav_item news_nav_item_active":"news_nav_item"),onClick:a=>S(e.id)},_(e.name),11,D)))),128)),h.value?(c(),o("div",{key:0,class:"news_line",style:p("left:"+N.value+"px")},null,4)):w("",!0)],2))]))}}),[["__scopeId","data-v-569fa668"]]);const W=e=>(b("data-v-37d52b5e"),e=e(),g(),e),B={className:"news-list-item flexb"},H={className:"fleximg coverimg"},P=["src"],X=["className"],A={className:"title"},E={className:"item-content"},F={className:"flexb news-list-item-bottom"},G={className:"color3"},K={className:"flexr"},Q=W((()=>m("div",{className:"color3"},"{moment(props.item.update_time).format('YYYY年MM月DD日')}",-1))),R=W((()=>m("div",{className:"flexl share"},null,-1))),U=W((()=>m("div",{className:"flexl star"},null,-1))),V={className:"flexl"},Z={className:"color3"},$=W((()=>m("div",null,null,-1)));var ee=a(n({props:{item:null,size:{default:"small"}},setup(e){const a=e;return(e,s)=>(c(),o("div",B,[m("div",H,[m("img",{src:a.item.thumb_url?a.item.thumb_url:f("/static/news_false.91c6f0eb.png"),alt:"cover"},null,8,P)]),m("div",{className:"big"===a.size?"flexcbl news-list-item-right  news-list-item-right-big":"flexcbl news-list-item-right"},[m("div",null,[m("div",A,_(a.item.title),1),m("div",E,_(a.item.content),1)]),m("div",F,[m("div",G,_(a.item.creator_name),1),m("div",K,[Q,R,U,m("div",V,[m("span",Z,_(a.item.readed),1)]),$])])],8,X)]))}}),[["__scopeId","data-v-37d52b5e"]]);const ae={class:"flexb news_main"},se=(e=>(b("data-v-4804ba8e"),e=e(),g(),e))((()=>m("div",null,null,-1)));var le=a(n({setup(a){i(12);const s=i(1),n=i(10),t=i(),v=()=>{_(l("newsTypeId"))},r=e=>{t.value=[],_(e)},_=async a=>{const l={current:s.value,size:n.value,typeId:a},{status:i,body:v}=await(c=l,e("official ","/public/info.page",c));var c;i&&(t.value=t.value.concat(v.records),s.value+=1)};return(e,a)=>{const s=I("el-scrollbar"),l=C("infinite-scroll");return c(),o("div",ae,[m("div",null,[h(L,{onNavChange:r}),h(s,{class:"news_list"},{default:N((()=>[k((c(),o("div",null,[(c(!0),o(u,null,d(t.value,((e,a)=>(c(),S(ee,{key:a,item:e},null,8,["item"])))),128))])),[[l,v]])])),_:1})]),se])}}}),[["__scopeId","data-v-4804ba8e"]]);export{le as default};
