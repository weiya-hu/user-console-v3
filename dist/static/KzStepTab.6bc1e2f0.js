import{v as e,_ as t}from"./index.fde176ed.js";import{H as a,o as s,I as l,J as o,_ as i,g as d,r as c,P as n,aa as r,X as f,W as u,a1 as v,B as p,a as _,w as m,av as g,aw as h,a2 as k,a3 as z}from"./vue.a499711c.js";import{d as b}from"./debounce.d23c09a7.js";const w=a({name:"Warning"}),H={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},T=[o("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"},null,-1)];var V=e(w,[["render",function(e,t,a,o,i,d){return s(),l("svg",H,T)}]]);const x=e=>(g("data-v-2edabdc5"),e=e(),h(),e),E={class:"kz_step_tab flex"},S={class:"kz_step_tab_left fc kz_card"},y=["onClick"],j=x((()=>o("div",{class:"kz_step_dot"},null,-1))),C={class:"kz_step_text"},B={key:0,class:"kz_step_line fcc"},I=[x((()=>o("div",{class:"kz_step_line_box"},null,-1)))],K={key:0,class:"kz_step_tab_right f1"};var W=t(a({name:"KzStepTab",props:{modelValue:{default:0},tabs:{default:()=>[]},itemEl:{default:void 0},viewHeight:{default:0},totalHeight:{default:0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,g=i(),h=d(),w=b((({scrollTop:e})=>e?e+a.viewHeight>=a.totalHeight?(t("update:modelValue",a.itemEl.length-1),void t("change",a.itemEl.length-1)):void a.itemEl.forEach(((s,l)=>{s.offsetTop+s.offsetHeight<=e+a.viewHeight&&(t("update:modelValue",l),t("change",l))})):(t("update:modelValue",0),void t("change",0))),200);return(i,d)=>{const b=c("el-scrollbar");return s(),l("div",E,[o("div",S,[(s(!0),l(n,null,r(e.tabs,((d,c)=>(s(),l("div",{key:c,class:f(["kz_step_item",c===e.modelValue&&"kz_step_item_active"])},[o("div",{class:"kz_step_title fcs",onClick:e=>(e=>{if(!g.content)return t("update:modelValue",e),void t("change",e);const s=a.itemEl[e];e?e!==a.itemEl.length-1?s.offsetHeight>a.viewHeight/2?h.value.setScrollTop(s.offsetTop):h.value.setScrollTop(s.offsetTop-s.offsetHeight):h.value.setScrollTop(a.totalHeight):h.value.setScrollTop(0)})(c)},[j,o("div",C,[u(i.$slots,"default",{item:d},(()=>[k(z(d.title),1)]),!0)])],8,y),c!==e.tabs.length-1?(s(),l("div",B,I)):v("",!0)],2)))),128))]),p(g).content?(s(),l("div",K,[_(b,{ref_key:"scrollbarRef",ref:h,noresize:!0,onScroll:p(w)},{default:m((()=>[u(i.$slots,"content",{},void 0,!0)])),_:3},8,["onScroll"])])):v("",!0)])}}}),[["__scopeId","data-v-2edabdc5"]]);export{W as K,V as w};
