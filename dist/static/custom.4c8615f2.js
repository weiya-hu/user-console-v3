import{g as s,p as e}from"./index.f91ef24c.js";const a=s=>{let e="";switch(s){case 2:e="images";break;case 3:e="posters";break;case 4:e="videos";break;default:e="articles"}return e},c=(e,c)=>s("cms",`/cms/${a(c)}/diy.page`,e),m=(s,c)=>e("cms",`/cms/${a(c)}/diy.in`,s,!0),d=(s,c)=>e("cms",`/cms/${a(c)}/diy.del`,s,!0),i=(e,c)=>s("cms",`/cms/${a(c)}/diy/detail.get`,e),t=s=>e("cms","/cms/images.del",s),r=s=>e("cms","/cms/posters.del",s),l=s=>e("cms","/cms/videos.del",s);export{c as a,d as b,i as c,m as d,t as e,r as f,l as g};
