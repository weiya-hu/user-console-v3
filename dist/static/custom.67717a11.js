import{g as s,p as a}from"./index.a202d357.js";const e=s=>{let a="";switch(s){case 2:a="images";break;case 3:a="posters";break;case 4:a="videos";break;default:a="articles"}return a},c=(a,c)=>s("cms",`/cms/${e(c)}/diy.page`,a),i=(s,c)=>a("cms",`/cms/${e(c)}/diy.in`,s,!0),d=(s,c)=>a("cms",`/cms/${e(c)}/diy.del`,s,!0),m=(a,c)=>s("cms",`/cms/${e(c)}/diy/detail.get`,a);export{c as a,d as b,m as c,i as d};
