import{m as e,O as a}from"./index.a202d357.js";import{H as l,u as s,g as t,b as o,o as u,c as d,B as p,k as r}from"./vue.fa004e33.js";const n=l({props:{modelValue:null,type:{default:"type"},size:{default:"default"}},emits:["update:modelValue","change"],setup(l,{expose:n,emit:i}){const c=l,m=s({get:()=>c.modelValue,set:e=>{i("update:modelValue",e)}});s({get:()=>c.modelValue,set:e=>{i("update:modelValue",e)}});const y=e(),V=s((()=>y.state.typeList)),f=s((()=>y.state.addressList)),g=s((()=>y.state.typeHash)),h=s((()=>y.state.addressHash)),v={expandTrigger:"hover",checkStrictly:!0,value:"industry_id",label:"name"},k={expandTrigger:"hover",checkStrictly:!0,value:"code",label:"name"},z=e=>{i("update:modelValue",e),i("change",e)},x=t();return n({getText:(e,l)=>a(e,"type"===c.type?g.value:h.value,l)}),(e,a)=>{const s=o("el-cascader");return"type"===l.type?(u(),d(s,{key:0,ref_key:"cRef",ref:x,modelValue:p(m),"onUpdate:modelValue":a[0]||(a[0]=e=>r(m)?m.value=e:null),options:p(V),props:v,placeholder:"请选择行业",class:"w100",size:l.size,onChange:z},null,8,["modelValue","options","size"])):(u(),d(s,{key:1,ref_key:"cRef",ref:x,modelValue:p(m),"onUpdate:modelValue":a[1]||(a[1]=e=>r(m)?m.value=e:null),options:p(f),props:k,placeholder:"请选择地区",class:"w100",size:l.size,onChange:z},null,8,["modelValue","options","size"]))}}});export{n as _};
