import{H as t,o as e,I as i,J as s,_ as o,$ as h,X as r,a0 as a,W as c,a2 as n,g as l,i as p,C as u,S as d,b as g,a as m,B as v,w as f,av as w,aw as x,a1 as C}from"./vue.fa004e33.js";import{x as y,_ as b,C as M,M as O,N as X,e as Y,O as H,J as S,K as I}from"./index.743440f4.js";const W=t({name:"CirclePlus"}),L={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z=[s("path",{fill:"currentColor",d:"M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),s("path",{fill:"currentColor",d:"M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"},null,-1),s("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1)];var k=y(W,[["render",function(t,s,o,h,r,a){return e(),i("svg",L,z)}]]);const E=t({name:"Remove"}),T={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},A=[s("path",{fill:"currentColor",d:"M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),s("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1)];var $=y(E,[["render",function(t,s,o,h,r,a){return e(),i("svg",T,A)}]]);const N={};N.getData=t=>new Promise(((e,i)=>{let s={};(function(t){let e=null;return new Promise(((i,s)=>{if(t.src)if(/^data\:/i.test(t.src))e=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),i=e.length,s=new ArrayBuffer(i),o=new Uint8Array(s),h=0;h<i;h++)o[h]=e.charCodeAt(h);return s}(t.src),i(e);else if(/^blob\:/i.test(t.src)){var o=new FileReader;o.onload=function(t){e=t.target.result,i(e)},function(t,e){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="blob",i.onload=function(t){200!=this.status&&0!==this.status||e(this.response)},i.send()}(t.src,(function(t){o.readAsArrayBuffer(t)}))}else{var h=new XMLHttpRequest;h.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=h.response,i(e),h=null},h.open("GET",t.src,!0),h.responseType="arraybuffer",h.send(null)}else s("img error")}))})(t).then((t=>{s.arrayBuffer=t,s.orientation=function(t){var e,i,s,o,h,r,a,c,n,l=new DataView(t),p=l.byteLength;if(255===l.getUint8(0)&&216===l.getUint8(1))for(c=2;c<p;){if(255===l.getUint8(c)&&225===l.getUint8(c+1)){r=c;break}c++}r&&(i=r+10,"Exif"===function(t,e,i){var s,o="";for(s=e,i+=e;s<i;s++)o+=String.fromCharCode(t.getUint8(s));return o}(l,r+4,4)&&((o=18761===(h=l.getUint16(i)))||19789===h)&&42===l.getUint16(i+2,o)&&(s=l.getUint32(i+4,o))>=8&&(a=i+s));if(a)for(p=l.getUint16(a,o),n=0;n<p;n++)if(c=a+12*n+2,274===l.getUint16(c,o)){c+=8,e=l.getUint16(c,o);break}return e}(t),e(s)})).catch((t=>{i(t)}))}));var _=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i};const B=t({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:()=>!!window.ActiveXObject||"ActiveXObject"in window,passive(){return this.isIE?null:{passive:!1}}},watch:{img(){this.checkedImg()},imgs(t){""!==t&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const o=new RegExp(t,"i");for(var h=0;h<e.length;h++)o.test(e[h])&&(i=e[h]);return s=i?i.split("/")[1].split("."):["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const t=this.getVersion("version");t[0]>13&&t[1]>1&&(e=-1)}else{const t=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(t){let i=t[1];i=i.split("_"),(i[0]>13||i[0]>=13&&i[1]>=4)&&(e=-1)}}let o=document.createElement("canvas"),h=o.getContext("2d");switch(h.save(),e){case 2:o.width=i,o.height=s,h.translate(i,0),h.scale(-1,1);break;case 3:o.width=i,o.height=s,h.translate(i/2,s/2),h.rotate(180*Math.PI/180),h.translate(-i/2,-s/2);break;case 4:o.width=i,o.height=s,h.translate(0,s),h.scale(1,-1);break;case 5:o.height=i,o.width=s,h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:o.width=s,o.height=i,h.translate(s/2,i/2),h.rotate(90*Math.PI/180),h.translate(-i/2,-s/2);break;case 7:o.height=i,o.width=s,h.rotate(.5*Math.PI),h.translate(i,-s),h.scale(-1,1);break;case 8:o.height=i,o.width=s,h.translate(s/2,i/2),h.rotate(-90*Math.PI/180),h.translate(-i/2,-s/2);break;default:o.width=i,o.height=s}h.drawImage(t,0,0,i,s),h.restore(),o.toBlob((t=>{let e=URL.createObjectURL(t);URL.revokeObjectURL(this.imgs),this.imgs=e}),"image/"+this.outputType,1)},checkedImg(){if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();let t=new Image;if(t.onload=()=>{if(""===this.img)return this.$emit("img-load","error"),!1;let e=t.width,i=t.height;N.getData(t).then((s=>{this.orientation=s.orientation||1;let o=Number(this.maxImgSize);!this.orientation&&e<o&i<o?this.imgs=this.img:(e>o&&(i=i/e*o,e=o),i>o&&(e=e/i*o,i=o),this.checkOrientationImage(t,this.orientation,e,i))}))},t.onerror=()=>{this.$emit("img-load","error")},"data"!==this.img.substr(0,4)&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var e=URL.createObjectURL(this.response);t.src=e},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i=this.touches[0].clientX,s=this.touches[0].clientY,o=t.touches[0].clientX,h=t.touches[0].clientY,r=this.touches[1].clientX,a=this.touches[1].clientY,c=t.touches[1].clientX,n=t.touches[1].clientY,l=Math.sqrt(Math.pow(i-r,2)+Math.pow(s-a,2)),p=Math.sqrt(Math.pow(o-c,2)+Math.pow(h-n,2))-l,u=1,d=(u=(u=u/this.trueWidth>u/this.trueHeight?u/this.trueHeight:u/this.trueWidth)>.1?.1:u)*p;if(!this.touchNow){if(this.touchNow=!0,p>0?e+=Math.abs(d):p<0&&e>Math.abs(d)&&(e-=Math.abs(d)),this.touches=t.touches,setTimeout((()=>{this.touchNow=!1}),8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,o="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.moveX,i=o-this.moveY,this.$nextTick((()=>{if(this.centerBox){let t,s,o,h,r=this.getImgAxis(e,i,this.scale),a=this.getCropAxis(),c=this.trueHeight*this.scale,n=this.trueWidth*this.scale;switch(this.rotate){case 1:case-1:case 3:case-3:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(c-n)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(n-c)/2,o=t-c+this.cropW,h=s-n+this.cropH;break;default:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,o=t-n+this.cropW,h=s-c+this.cropH}r.x1>=a.x1&&(e=t),r.y1>=a.y1&&(i=s),r.x2<=a.x2&&(e=o),r.y2<=a.y2&&(i=h)}this.x=e,this.y=i,this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}))},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta;i=navigator.userAgent.indexOf("Firefox")>0?30*i:i,this.isIE&&(i=-i);var s=this.coe,o=(s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth)*i;o<0?e+=Math.abs(o):e>Math.abs(o)&&(e-=Math.abs(o));let h=o<0?"add":"reduce";if(h!==this.coeStatus&&(this.coeStatus=h,this.coe=.2),this.scaling||(this.scalingSet=setTimeout((()=>{this.scaling=!1,this.coe=this.coe+=.01}),50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if((t*=i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick((()=>{var t=e-this.cropX,s=i-this.cropY;if(t>0?(this.cropW=t+this.cropChangeX>this.w?this.w-this.cropChangeX:t,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(t)>this.w?this.cropChangeX:Math.abs(t),this.cropOffsertX=this.cropChangeX+t>0?this.cropChangeX+t:0),this.fixed){var o=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];o+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.cropOffsertX=t>0?this.cropChangeX:this.cropChangeX-this.cropW):this.cropH=o,this.cropOffsertY=this.cropOffsertY}else s>0?(this.cropH=s+this.cropChangeY>this.h?this.h-this.cropChangeY:s,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(s)>this.h?this.cropChangeY:Math.abs(s),this.cropOffsertY=this.cropChangeY+s>0?this.cropChangeY+s:0)}))},changeCropSize(t,e,i,s,o){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=o,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,o=this.h,h=0,r=0;if(this.centerBox){let t=this.getImgAxis(),e=t.x2,i=t.y2;h=t.x1>0?t.x1:0,r=t.y1>0?t.y1:0,s>e&&(s=e),o>i&&(o=i)}this.$nextTick((()=>{var t=e-this.cropX,a=i-this.cropY;if(this.canChangeX&&(1===this.changeCropTypeX?this.cropOldW-t>0?(this.cropW=s-this.cropChangeX-t<=s-h?this.cropOldW-t:this.cropOldW+this.cropChangeX-h,this.cropOffsertX=s-this.cropChangeX-t<=s-h?this.cropChangeX+t:h):(this.cropW=Math.abs(t)+this.cropChangeX<=s?Math.abs(t)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):2===this.changeCropTypeX&&(this.cropOldW+t>0?(this.cropW=this.cropOldW+t+this.cropOffsertX<=s?this.cropOldW+t:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-h?Math.abs(t+this.cropOldW):this.cropChangeX-h,this.cropOffsertX=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-h?this.cropChangeX-Math.abs(t+this.cropOldW):h))),this.canChangeY&&(1===this.changeCropTypeY?this.cropOldH-a>0?(this.cropH=o-this.cropChangeY-a<=o-r?this.cropOldH-a:this.cropOldH+this.cropChangeY-r,this.cropOffsertY=o-this.cropChangeY-a<=o-r?this.cropChangeY+a:r):(this.cropH=Math.abs(a)+this.cropChangeY<=o?Math.abs(a)-this.cropOldH:o-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):2===this.changeCropTypeY&&(this.cropOldH+a>0?(this.cropH=this.cropOldH+a+this.cropOffsertY<=o?this.cropOldH+a:o-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=o-this.cropChangeY+Math.abs(a+this.cropOldH)<=o-r?Math.abs(a+this.cropOldH):this.cropChangeY-r,this.cropOffsertY=o-this.cropChangeY+Math.abs(a+this.cropOldH)<=o-r?this.cropChangeY-Math.abs(a+this.cropOldH):r))),this.canChangeX&&this.fixed){var c=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];c+this.cropOffsertY>o?(this.cropH=o-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0]):this.cropH=c}if(this.canChangeY&&this.fixed){var n=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];n+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=n}}))},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return s=Array.isArray[i]?i:[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,o="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.cropOffsertX,i=o-this.cropOffsertY,this.cropX=e,this.cropY=i,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick((()=>{let t,o,h=i-this.cropX,r=s-this.cropY;if(e&&(h=this.cropOffsertX,r=this.cropOffsertY),t=h<=0?0:h+this.cropW>this.w?this.w-this.cropW:h,o=r<=0?0:r+this.cropH>this.h?this.h-this.cropH:r,this.centerBox){let e=this.getImgAxis();t<=e.x1&&(t=e.x1),t+this.cropW>e.x2&&(t=e.x2-this.cropW),o<=e.y1&&(o=e.y1),o+this.cropH>e.y2&&(o=e.y2-this.cropH)}this.cropOffsertX=t,this.cropOffsertY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})}))},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},o=this.trueWidth*i,h=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(o-h)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(h-o)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=new Image,s=this.rotate,o=this.trueWidth,h=this.trueHeight,r=this.cropOffsertX,a=this.cropOffsertY;function c(t,i){e.width=Math.round(t),e.height=Math.round(i)}i.onload=()=>{if(0!==this.cropW){let t=e.getContext("2d"),n=1;this.high&!this.full&&(n=window.devicePixelRatio),1!==this.enlarge&!this.full&&(n=Math.abs(Number(this.enlarge)));let l=this.cropW*n,p=this.cropH*n,u=o*this.scale*n,d=h*this.scale*n,g=(this.x-r+this.trueWidth*(1-this.scale)/2)*n,m=(this.y-a+this.trueHeight*(1-this.scale)/2)*n;switch(c(l,p),t.save(),s){case 0:this.full?(c(l/this.scale,p/this.scale),t.drawImage(i,g/this.scale,m/this.scale,u/this.scale,d/this.scale)):t.drawImage(i,g,m,u,d);break;case 1:case-3:this.full?(c(l/this.scale,p/this.scale),g=g/this.scale+(u/this.scale-d/this.scale)/2,m=m/this.scale+(d/this.scale-u/this.scale)/2,t.rotate(90*s*Math.PI/180),t.drawImage(i,m,-g-d/this.scale,u/this.scale,d/this.scale)):(g+=(u-d)/2,m+=(d-u)/2,t.rotate(90*s*Math.PI/180),t.drawImage(i,m,-g-d,u,d));break;case 2:case-2:this.full?(c(l/this.scale,p/this.scale),t.rotate(90*s*Math.PI/180),g/=this.scale,m/=this.scale,t.drawImage(i,-g-u/this.scale,-m-d/this.scale,u/this.scale,d/this.scale)):(t.rotate(90*s*Math.PI/180),t.drawImage(i,-g-u,-m-d,u,d));break;case 3:case-1:this.full?(c(l/this.scale,p/this.scale),g=g/this.scale+(u/this.scale-d/this.scale)/2,m=m/this.scale+(d/this.scale-u/this.scale)/2,t.rotate(90*s*Math.PI/180),t.drawImage(i,-m-u/this.scale,g,u/this.scale,d/this.scale)):(g+=(u-d)/2,m+=(d-u)/2,t.rotate(90*s*Math.PI/180),t.drawImage(i,-m-u,g,u,d));break;default:this.full?(c(l/this.scale,p/this.scale),t.drawImage(i,g/this.scale,m/this.scale,u/this.scale,d/this.scale)):t.drawImage(i,g,m,u,d)}t.restore()}else{let t=o*this.scale,r=h*this.scale,a=e.getContext("2d");switch(a.save(),s){case 0:c(t,r),a.drawImage(i,0,0,t,r);break;case 1:case-3:c(r,t),a.rotate(90*s*Math.PI/180),a.drawImage(i,0,-r,t,r);break;case 2:case-2:c(t,r),a.rotate(90*s*Math.PI/180),a.drawImage(i,-t,-r,t,r);break;case 3:case-1:c(r,t),a.rotate(90*s*Math.PI/180),a.drawImage(i,-t,0,t,r);break;default:c(t,r),a.drawImage(i,0,0,t,r)}a.restore()}t(e)},"data"!==this.img.substr(0,4)&&(i.crossOrigin="Anonymous"),i.src=this.imgs},getCropData(t){this.getCropChecked((e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))}))},getCropBlob(t){this.getCropChecked((e=>{e.toBlob((e=>t(e)),"image/"+this.outputType,this.outputSize)}))},showPreview(){if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout((()=>{this.isCanShow=!0}),16);let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let o=(this.x-this.cropOffsertX)/i,h=(this.y-this.cropOffsertY)/i;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${o}px, ${h}px, 0px)rotateZ(${90*this.rotate}deg)`},s.html=`\n      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">\n        <div style="width: ${t}px; height: ${e}px">\n          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:\n          scale(${i})translate3d(${o}px, ${h}px, 0px)rotateZ(${90*this.rotate}deg)">\n        </div>\n      </div>`,this.$emit("realTime",s),this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick((()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),this.$emit("imgLoad","success"),setTimeout((()=>{this.showPreview()}),20)}))},t.onerror=()=>{this.$emit("imgLoad","error"),this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i*=t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let o=s[0];if(-1!==o.search("px")){o=o.replace("px",""),e=parseFloat(o);const h=e/this.trueWidth;let r=1,a=s[1];-1!==a.search("px")&&(a=a.replace("px",""),i=parseFloat(a),r=i/this.trueHeight),t=Math.min(h,r)}if(-1!==o.search("%")&&(o=o.replace("%",""),e=parseFloat(o)/100*this.w,t=e/this.trueWidth),2===s.length&&"auto"===o){let e=s[1];-1!==e.search("px")&&(e=e.replace("px",""),i=parseFloat(e),t=i/this.trueHeight),-1!==e.search("%")&&(e=e.replace("%",""),i=parseFloat(e)/100*this.h,t=i/this.trueHeight)}}catch(o){t=1}}return t},goAutoCrop(t,e){if(""===this.imgs||null===this.imgs)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const t=Math.abs(this.rotate)%2>0;let e=(t?this.trueHeight:this.trueWidth)*this.scale,o=(t?this.trueWidth:this.trueHeight)*this.scale;i=e<i?e:i,s=o<s?o:s}var o=t||parseFloat(this.autoCropWidth),h=e||parseFloat(this.autoCropHeight);0!==o&&0!==h||(o=.8*i,h=.8*s),o=o>i?i:o,h=h>s?s:h,this.fixed&&(h=o/this.fixedNumber[0]*this.fixedNumber[1]),h>this.h&&(o=(h=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(o,h)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(e=(t=i.x2-i.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(t=(e=i.y2-i.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick((()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)}))},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick((()=>{this.checkedImg()}))},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let o=this.getImgAxis(t,e,i),h=this.getCropAxis();o.x1>=h.x1&&(s=!1),o.x2<=h.x2&&(s=!1),o.y1>=h.y1&&(s=!1),o.y2<=h.y2&&(s=!1)}return s}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,i,s){for(var o=atob(this.toDataURL(i,s).split(",")[1]),h=o.length,r=new Uint8Array(h),a=0;a<h;a++)r[a]=o.charCodeAt(a);e(new Blob([r],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),P={key:0,class:"cropper-box"},U=["src"],R={class:"cropper-view-box"},D=["src"],F={key:1};var V=_(B,[["render",function(t,l,p,u,d,g){return e(),i("div",{class:"vue-cropper",ref:"cropper",onMouseover:l[28]||(l[28]=(...e)=>t.scaleImg&&t.scaleImg(...e)),onMouseout:l[29]||(l[29]=(...e)=>t.cancelScale&&t.cancelScale(...e))},[t.imgs?(e(),i("div",P,[o(s("div",{class:"cropper-box-canvas",style:r({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"})},[s("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,U)],4),[[h,!t.loading]])])):a("",!0),s("div",{class:c(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:l[0]||(l[0]=(...e)=>t.startMove&&t.startMove(...e)),onTouchstart:l[1]||(l[1]=(...e)=>t.startMove&&t.startMove(...e))},null,34),o(s("div",{class:"cropper-crop-box",style:r({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[s("span",R,[s("img",{style:r({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,D)]),s("span",{class:"cropper-face cropper-move",onMousedown:l[2]||(l[2]=(...e)=>t.cropMove&&t.cropMove(...e)),onTouchstart:l[3]||(l[3]=(...e)=>t.cropMove&&t.cropMove(...e))},null,32),t.info?(e(),i("span",{key:0,class:"crop-info",style:r({top:t.cropInfo.top})},n(t.cropInfo.width)+" × "+n(t.cropInfo.height),5)):a("",!0),t.fixedBox?a("",!0):(e(),i("span",F,[s("span",{class:"crop-line line-w",onMousedown:l[4]||(l[4]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:l[5]||(l[5]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),s("span",{class:"crop-line line-a",onMousedown:l[6]||(l[6]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:l[7]||(l[7]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),s("span",{class:"crop-line line-s",onMousedown:l[8]||(l[8]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:l[9]||(l[9]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),s("span",{class:"crop-line line-d",onMousedown:l[10]||(l[10]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:l[11]||(l[11]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),s("span",{class:"crop-point point1",onMousedown:l[12]||(l[12]=e=>t.changeCropSize(e,!0,!0,1,1)),onTouchstart:l[13]||(l[13]=e=>t.changeCropSize(e,!0,!0,1,1))},null,32),s("span",{class:"crop-point point2",onMousedown:l[14]||(l[14]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:l[15]||(l[15]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),s("span",{class:"crop-point point3",onMousedown:l[16]||(l[16]=e=>t.changeCropSize(e,!0,!0,2,1)),onTouchstart:l[17]||(l[17]=e=>t.changeCropSize(e,!0,!0,2,1))},null,32),s("span",{class:"crop-point point4",onMousedown:l[18]||(l[18]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:l[19]||(l[19]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),s("span",{class:"crop-point point5",onMousedown:l[20]||(l[20]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:l[21]||(l[21]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),s("span",{class:"crop-point point6",onMousedown:l[22]||(l[22]=e=>t.changeCropSize(e,!0,!0,1,2)),onTouchstart:l[23]||(l[23]=e=>t.changeCropSize(e,!0,!0,1,2))},null,32),s("span",{class:"crop-point point7",onMousedown:l[24]||(l[24]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:l[25]||(l[25]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),s("span",{class:"crop-point point8",onMousedown:l[26]||(l[26]=e=>t.changeCropSize(e,!0,!0,2,2)),onTouchstart:l[27]||(l[27]=e=>t.changeCropSize(e,!0,!0,2,2))},null,32)]))],4),[[h,t.cropping]])],544)}],["__scopeId","data-v-be5e5ddc"]]);"undefined"!=typeof window&&window.Vue&&window.Vue.createApp({}).component("VueCropper",V);const j={class:"kz_up_avatar_component"},G={class:"kz_cropper_box"},q=(t=>(w("data-v-3f8220be"),t=t(),x(),t))((()=>s("div",{class:"file_name"},"拖拽/点击上传",-1))),J={class:"fsc kz_crop_btns"},Z=C("重新上传"),K={class:"flex"},Q=["accept"],tt={class:"fc kz_up_avatar_preview"},et=["src"];var it=b(t({props:{modelValue:null,boxSize:{default:230},cropSize:{default:100},exnameList:{default:()=>[".jpg",".png",".jpeg",".JPG",".PNG",".JPEG"]},maxSize:{default:4},site:{default:"official_img"}},emits:["update:modelValue","success","error"],setup(t,{expose:a,emit:c}){const w=t,x=l("");p((()=>w.modelValue),((t,e)=>{x.value=U.test(t)?t+"?random="+Math.random():t}));const C=l(),y=l(),b=t=>{"success"===t&&(y.value=C.value.getImgAxis())},W=l({}),L=t=>{W.value=t},z=t=>{C.value.changeScale(t)},E=t=>{t?C.value.rotateLeft():C.value.rotateRight(),R.value=!0},T=()=>{if(!_.value)return Y("请添加图片！"),!1;const t=_.value.name.substring(_.value.name.lastIndexOf("."));return-1===w.exnameList.indexOf(t)?(Y("图片格式错误！"),!1):!(_.value.size&&_.value.size/1024/1024>w.maxSize)||(Y(`图片文件大小不能超过${w.maxSize}M`),!1)},A=l(),N=()=>{A.value.click()},_=l(),B=()=>{var t,e;if(null==(e=null==(t=A.value)?void 0:t.files)?void 0:e.length){_.value=A.value.files[0];T()?(R.value=!0,x.value=URL.createObjectURL(_.value)):_.value=void 0}},P=()=>{R.value=!0},U=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/,R=l(!1),D=l();u((()=>{var t,e,i;x.value=U.test(w.modelValue)?w.modelValue+"?random="+Math.random():w.modelValue,null==(t=D.value)||t.addEventListener("dragenter",F,!1),null==(e=D.value)||e.addEventListener("dragover",it,!1),null==(i=D.value)||i.addEventListener("drop",st,!1)})),d((()=>{var t,e,i;URL.revokeObjectURL(x.value);try{null==(t=D.value)||t.removeEventListener("dragenter",F),null==(e=D.value)||e.removeEventListener("dragover",it),null==(i=D.value)||i.removeEventListener("drop",st)}catch(s){return!1}}));const F=t=>{t.stopPropagation(),t.preventDefault()},it=t=>{t.stopPropagation(),t.preventDefault()},st=t=>{var e;if(t.stopPropagation(),t.preventDefault(),null==(e=t.dataTransfer)?void 0:e.files.length){_.value=t.dataTransfer.files[0];T()?(R.value=!0,x.value=URL.createObjectURL(_.value)):_.value=void 0}};return a({validateImg:()=>!!x.value||T(),getImg:()=>new Promise(((t,e)=>{C.value.getCropBlob((e=>{t(e)}))})),upload:async()=>{const t=C.value.getImgAxis(),e=H(t,y.value);if(!_.value&&U.test(w.modelValue)&&e&&!R.value)return void c("success");const i=await S({site:w.site});if(1===i.status){const t=".png",e=new FormData,s={key:i.body.dir+"/"+i.body.uuid+t,OSSAccessKeyId:i.body.accessid,success_action_status:"200",policy:i.body.policy,signature:i.body.signature};for(const[i,o]of Object.entries(s))e.append(i,o);C.value.getCropBlob((async s=>{e.append("file",s);if(200==(await I({url:i.body.host,method:"post",headers:{"Content-Type":"multipart/form-data;"},data:e})).status){R.value=!1,_.value=void 0,y.value=C.value.getImgAxis();const e=i.body.host+"/"+i.body.dir+"/"+i.body.uuid+t;c("update:modelValue",e),c("success")}else c("error")}))}else c("error")}}),(a,c)=>{const l=g("el-icon"),p=g("el-link"),u=g("el-avatar");return e(),i("div",j,[s("div",G,[s("div",{style:r({width:t.boxSize+"px",height:t.boxSize+"px"})},[o(m(v(V),{ref_key:"cropperRef",ref:C,"auto-crop":"","fixed-box":"",img:x.value,"output-type":"png","can-move-box":!1,info:!1,"auto-crop-width":t.boxSize+"px","auto-crop-height":t.boxSize+"px",mode:"contain",onRealTime:L,onImgLoad:b,onCropMoving:P},null,8,["img","auto-crop-width","auto-crop-height"]),[[h,x.value]]),o(s("div",{ref_key:"dragRef",ref:D,class:"no_img_box fc fcc",onClick:N},[m(l,{size:"28px"},{default:f((()=>[m(v(M))])),_:1}),q],512),[[h,!x.value]])],4),o(s("div",J,[m(p,{type:"primary",onClick:N},{default:f((()=>[Z])),_:1}),s("div",K,[m(l,{size:"14px",onClick:c[0]||(c[0]=t=>z(1))},{default:f((()=>[m(v(k))])),_:1}),m(l,{size:"14px",onClick:c[1]||(c[1]=t=>z(-1))},{default:f((()=>[m(v($))])),_:1}),m(l,{size:"14px",onClick:c[2]||(c[2]=t=>E(1))},{default:f((()=>[m(v(O))])),_:1}),m(l,{size:"14px",onClick:c[3]||(c[3]=t=>E(0))},{default:f((()=>[m(v(X))])),_:1})])],512),[[h,x.value]]),o(s("div",{class:"kz_crop_btns"},"*上传图片大小在"+n(t.maxSize)+"M以内",513),[[h,!x.value]])]),s("input",{ref_key:"upInputRef",ref:A,style:{display:"none"},type:"file",accept:t.exnameList.join(","),name:"picture",onChange:B},null,40,Q),s("div",tt,[s("div",{class:"avatar_preview_box",style:r({"min-width":t.cropSize+"px","min-height":t.cropSize+"px",transform:`scale(calc(${t.cropSize} / ${t.boxSize}))`})},[s("div",{class:"avatar_preview",style:r({width:t.boxSize+"px",height:t.boxSize+"px"})},[m(u,{size:t.boxSize},{default:f((()=>[s("img",{src:x.value,style:r(W.value.img)},null,12,et)])),_:1},8,["size"])],4)],4),s("div",{class:"avatar_preview_text",style:r({top:t.cropSize+1+"px"})},"头像预览",4)])])}}}),[["__scopeId","data-v-3f8220be"]]);export{it as K};