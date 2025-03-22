"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[583],{8840:(e,t,A)=>{A.d(t,{FN:()=>E,FP:()=>m,TG:()=>g,Yc:()=>B,nW:()=>C});var n=A(4848),o=A(6540),r=function(){return r=Object.assign||function(e){for(var t,A=1,n=arguments.length;A<n;A++)for(var o in t=arguments[A])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var i="--container-width",a="--container-height",c="--item-width",s={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}}},l={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-1":{translate:{x:-.5,y:0,z:0},rotate:{x:0,y:40,z:0},offset:{x:.5*Math.cos(Math.PI/180*40),y:0,z:-1*Math.sin(Math.PI/180*30)}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.5,y:0,z:0},rotate:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(Math.PI/180*40),y:0,z:-1*Math.sin(Math.PI/180*30)}}},f={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-2":{translate:{x:-.5,y:0,z:0},rotate:{x:0,y:40,z:0},offset:{x:.5*Math.cos(Math.PI/180*40),y:0,z:-1*Math.sin(Math.PI/180*40)}},"-1":{translate:{x:-.25,y:0,z:0},rotate:{x:0,y:20,z:0},offset:{x:.25*Math.cos(Math.PI/180*40),y:0,z:-.5*Math.sin(Math.PI/180*40)}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.25,y:0,z:0},rotate:{x:0,y:-20,z:0},offset:{x:-.25*Math.cos(Math.PI/180*40),y:0,z:-.5*Math.sin(Math.PI/180*40)}},2:{translate:{x:.5,y:0,z:0},rotate:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(Math.PI/180*40),y:0,z:-1*Math.sin(Math.PI/180*40)}}},u=function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},d=function(e,t){var A,n,o,r={},i=null!==(A=null==t?void 0:t.widthFactor)&&void 0!==A?A:1,a=null!==(n=null==t?void 0:t.depthFactor)&&void 0!==n?n:1,c=null!==(o=null==t?void 0:t.angleFactor)&&void 0!==o?o:1;return Object.entries(e).forEach((function(e){var t=e[0],A=e[1],n={x:u(A.translate.x*i,3),y:A.translate.y,z:u(A.translate.z*i,3)},o={x:u(A.rotate.x*c,3),y:u(A.rotate.y*c,3),z:u(A.rotate.z*c,3)},s={x:u(A.offset.x*i,3),y:A.offset.y,z:u(A.offset.z*a,3)};r[t]={translate:n,rotate:o,offset:s}})),r},v=function(e,t){var A,n=e.width,o=e.height,r=e.translate,s=e.rotate,l=e.offset,f="number"==typeof n?"calc(".concat(n," * var(").concat(i,"))"):null!=n?n:"auto",u="number"==typeof o?"calc(".concat(o," * var(").concat(a,"))"):null!=o?o:"auto";switch(t){case"top":A=0;break;case"bottom":A=-100;break;case"center":A=-50}var d=Math.sqrt(Math.pow(s.x,2)+Math.pow(s.y,2)+Math.pow(s.z,2)),v=d?s.x/d:0,h=d?s.y/d:0,g=d?s.z/d:0,w="number"==typeof r.x?"".concat(r.x," * var(").concat(i,")"):r.x,p="number"==typeof r.y?"".concat(r.y," * var(").concat(a,")"):r.y,m="number"==typeof r.z?"".concat(r.z," * var(").concat(i,")"):r.z,x="number"==typeof l.x?"".concat(l.x," * 100%"):l.x,C="number"==typeof l.y?"".concat(l.y," * 100%"):l.y,B="number"==typeof l.z?"".concat(l.z," * var(").concat(c,")"):l.z;return{width:f,height:u,transform:"translate(-50%, ".concat(A,"%) \n  translate3d(calc(").concat(w," + ").concat(x,"), calc(").concat(p," + ").concat(C,"), calc(").concat(m," + ").concat(B,")) \n  rotate3d(").concat(v,", ").concat(h,", ").concat(g,", calc(").concat(d,"deg)")}},h=function(e,t,A,n,r,i,a,c,u){var h=(0,o.useMemo)((function(){var t="default"===a?function(e,t){if(t&&"numOfSlides"in t){if(2===t.numOfSlides)return d(s,t);if(3===t.numOfSlides)return d(l,t);if(5===t.numOfSlides)return d(f,t)}return d(e<3?s:e<5?l:f,t)}(e.length,u):a;return function(e,t){var A={};for(var n in e)A[n]=v(e[n],t);return A}(t,A)}),[e,A,a,u]);(0,o.useEffect)((function(){var A=t.current,o=function(e,t){e.style.width="auto"===t.width?n:t.width,e.style.height="auto"===t.height?r:t.height,e.style.transform=t.transform,"auto"!==e.style.width||"auto"!==e.style.height&&"auto"!==i?e.classList.add("fixed-width"):e.classList.remove("fixed-width"),"auto"!==e.style.height||"auto"!==e.style.width&&"auto"!==i?e.classList.add("fixed-height"):e.classList.remove("fixed-height")};A.forEach((function(t,A){var n=A-c;if(h[n])o(t,h[n]);else{var r=n+(n>0?-e.length:e.length);h[r]?o(t,h[r]):o(t,h.default)}}))}),[e,n,r,i,h,c])},g=function(e){var t=e.width,A=void 0===t?"3rem":t,o=e.height,r=void 0===o?"5rem":o,i=e.color,a=void 0===i?"#ffffff":i,c=e.hoverColor,s=void 0===c?"#888888":c,l=e.shadow,f=void 0===l?"0 0.05rem 0.1rem rgba(0, 0, 0, 0.3)":l,u=e.nextArrowTranslate,d=void 0===u?["0px","0px"]:u,v=e.prevArrowTranslate,h=void 0===v?["0px","0px"]:v,g=e.onClickNext,m=e.onClickPrev,x=e.nextIcon,C=e.prevIcon,B={"--arrow-width":A,"--arrow-height":r,"--arrow-drop-shadow":f,"--arrow-color":a,"--arrow-hover-color":s};return(0,n.jsxs)("div",{className:"react-responsive-3d-carousel__arrows",style:B,children:[(0,n.jsx)("button",{type:"button",onClick:function(e){e.stopPropagation(),m&&m(e)},"aria-label":"previous slide",style:{transform:"translateY(-50%) translate(".concat(h[0],", ").concat(h[1],")")},children:C||(0,n.jsx)(w,{})}),(0,n.jsx)("button",{type:"button",onClick:function(e){e.stopPropagation(),g&&g(e)},"aria-label":"next slide",style:{transform:"translateY(-50%) translate(".concat(d[0],", ").concat(d[1],")")},children:x||(0,n.jsx)(p,{})})]})},w=function(){return(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",preserveAspectRatio:"none",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("polyline",{points:"15 18 9 12 15 6"})})},p=function(){return(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",preserveAspectRatio:"none",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("polyline",{points:"9 18 15 12 9 6"})})};g.displayName="Arrows";var m=function(e){var t=e.length,A=e.curIndex,o=e.color,r=void 0===o?"#ffffff":o,i=e.width,a=void 0===i?"0.7rem":i,c=e.height,s=void 0===c?"0.7rem":c,l=e.gap,f=void 0===l?"1.5rem":l,u=e.activeColor,d=void 0===u?"#888888":u,v=e.shadow,h=void 0===v?"0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)":v,g=e.translate,w=void 0===g?["0px","0px"]:g,p=e.indicatorIcon,m=e.onClick,C={gap:f,transform:"translate(".concat(w[0],", ").concat(w[1],")"),"--indicator-width":a,"--indicator-height":s,"--indicator-color":r,"--indicator-active-color":d,"--indicator-shadow":h};return(0,n.jsx)("ul",{className:"react-responsive-3d-carousel__indicators",style:C,children:Array.from({length:t},(function(e,t){return(0,n.jsx)("li",{onClick:function(e){return function(e,t){e.stopPropagation(),m&&m(e,t)}(e,t)},"aria-label":"slide item ".concat(t+1),className:t===A?"active":"",children:p||(0,n.jsx)(x,{})},t)}))})},x=function(){return(0,n.jsx)("svg",{preserveAspectRatio:"none",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10"})})};m.displayName="Indicators";var C=function(e){var t=e.length,A=e.curIndex,o=e.color,r=void 0===o?"#ffffff":o,i=e.fontSize,a=void 0===i?"1rem":i,c=e.fontWeight,s=void 0===c?"600":c,l=e.shadow,f=void 0===l?"0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)":l,u=e.translate,d=void 0===u?["0px","0px"]:u,v={color:r,fontSize:a,fontWeight:s,textShadow:f,transform:"translate(".concat(d[0],", ").concat(d[1],")")};return(0,n.jsx)("p",{className:"react-responsive-3d-carousel__status","aria-label":"".concat(A+1," of ").concat(t),style:v,children:"".concat(A+1," / ").concat(t)})};C.displayName="Status";var B=(0,o.createContext)({curIndex:0,setCurIndex:function(e){},slideNext:function(){},slidePrev:function(){}}),E=function(e){var t=e.children,A=e.ariaLabel,s=void 0===A?"3d carousel":A,l=e.items,f=e.startIndex,u=void 0===f?0:f,d=e.containerHeight,v=void 0===d?"auto":d,w=e.containerWidth,p=void 0===w?"100%":w,x=e.containerPadding,E=void 0===x?"1rem":x,I=e.width,y=void 0===I?"400px":I,Q=e.height,z=void 0===Q?"300px":Q,P=e.aspectRatio,b=void 0===P?"auto":P,D=e.align,M=void 0===D?"center":D,k=e.boxShadow,j=void 0===k?"0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)":k,N=e.perspective,R=void 0===N?1:N,S=e.perspectiveOrigin,W=void 0===S?"center":S,J=e.layout,Y=void 0===J?"default":J,T=e.defaultOption,K=e.sizeDuration,G=void 0===K?1e3:K,F=e.sizeTimingFn,O=void 0===F?"ease-in-out":F,L=e.transformDuration,X=void 0===L?1e3:L,H=e.transformTimingFn,Z=void 0===H?"ease-in-out":H,q=e.focusOnSelect,U=void 0===q||q,V=e.pauseOnHover,_=void 0===V||V,$=e.pauseOnTransition,ee=void 0===$?"both":$,te=e.onClickItem,Ae=e.onChange,ne=e.autoPlay,oe=void 0===ne||ne,re=e.interval,ie=void 0===re?3e3:re,ae=e.infiniteLoop,ce=void 0===ae||ae,se=e.autoFocus,le=void 0!==se&&se,fe=e.slideWithKeyboard,ue=void 0===fe?"both":fe,de=e.swipeable,ve=void 0===de||de,he=e.swipeDirection,ge=void 0===he?"horizontal":he,we=e.onSwipeStart,pe=e.onSwipeEnd,me=e.onSwipeMove,xe=e.showStatus,Ce=void 0===xe||xe,Be=e.status,Ee=e.showArrows,Ie=void 0===Ee||Ee,ye=e.arrows,Qe=e.showIndicators,ze=void 0===Qe||Qe,Pe=e.indicators,be=(0,o.useRef)(null),De=(0,o.useRef)(null),Me=(0,o.useRef)(!1),ke=(0,o.useRef)({size:!1,transform:!1}),je=(0,o.useState)(u),Ne=je[0],Re=je[1],Se=(0,o.useMemo)((function(){return"number"==typeof y?"calc(".concat(y," * var(").concat(i,"))"):y}),[y]),We=(0,o.useMemo)((function(){return"number"==typeof z?"calc(".concat(z," * var(").concat(a,"))"):z}),[z]),Je=(0,o.useRef)([]);(0,o.useEffect)((function(){var e=be.current;e&&(Je.current=Array.from(e.getElementsByClassName("react-responsive-3d-carousel__item")))}),[l]),(0,o.useEffect)((function(){var e=G-100,t=X-100;e>0&&(ke.current.size=!0),t>0&&(ke.current.transform=!0);var A=setTimeout((function(){ke.current.size=!1}),e),n=setTimeout((function(){ke.current.transform=!1}),t);return function(){clearTimeout(A),clearTimeout(n)}}),[Ne,G,X]);var Ye=(0,o.useCallback)((function(){("size"!==ee&&"both"!==ee||!ke.current.size)&&("transform"!==ee&&"both"!==ee||!ke.current.transform)&&Re((function(e){return ce||0!==e?(e-1+l.length)%l.length:e}))}),[l,ce,Re,ee]),Te=(0,o.useCallback)((function(){("size"!==ee&&"both"!==ee||!ke.current.size)&&("transform"!==ee&&"both"!==ee||!ke.current.transform)&&Re((function(e){return ce||e!==l.length-1?(e+1)%l.length:e}))}),[l,ce,Re,ee]);(0,o.useEffect)((function(){Re(u)}),[u]),(0,o.useEffect)((function(){Ne<0?Re(0):l.length-1<Ne&&Re(l.length-1)}),[l,Ne]);var Ke=(0,o.useRef)(!1);(0,o.useEffect)((function(){Ke.current?Ae&&Ae(Ne,l[Ne]):Ke.current=!0}),[Ne,Ae]),function(e,t,A,n){(0,o.useEffect)((function(){if(e){var o=window.setInterval((function(){n.current||A()}),t);return function(){clearInterval(o)}}}),[e,t,A])}(oe,ie,Te,Me),function(e,t,A,n,r){(0,o.useEffect)((function(){t.current.forEach((function(e){e.style.setProperty(c,"".concat(e.offsetWidth,"px"))}))}),[e,n,r]),(0,o.useEffect)((function(){var e=A.current;if(e){var t=function(){e.style.setProperty(i,"".concat(e.offsetWidth,"px")),e.style.setProperty(a,"".concat(e.offsetHeight,"px"))};t();var n="ResizeObserver"in window?new ResizeObserver(t):null;return n?n.observe(e):window.addEventListener("resize",t),function(){n?n.disconnect():window.removeEventListener("resize",t)}}}),[])}(l,Je,De,Se,Ne),h(l,Je,M,Se,We,b,Y,Ne,T),function(e){var t=e.containerRef,A=e.swipeable,n=e.swipeDirection,r=e.slideNext,i=e.slidePrev,a=e.onSwipeStart,c=e.onSwipeEnd,s=e.onSwipeMove,l=(0,o.useRef)(!1);(0,o.useEffect)((function(){if(A){var e=t.current;if(e){var o=0,f=0,u=function(e){l.current=!0,o=e.touches[0].clientX,f=e.touches[0].clientY,a&&a(e)},d=function(e){l.current&&s&&s(e)},v=function(e){if(l.current){l.current=!1,c&&c(e);var t=e.changedTouches[0].clientX,A=e.changedTouches[0].clientY,a=t-o,s=A-f,u=Math.abs(a),d=Math.abs(s);Math.sqrt(Math.pow(u,2)+Math.pow(d,2))<30||("horizontal"===n&&u>d?(e.preventDefault(),a>0?i():r()):"vertical"===n&&d>u&&(e.preventDefault(),s>0?i():r()))}};return e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("touchmove",d,{passive:!0}),e.addEventListener("touchend",v),function(){e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",d),e.removeEventListener("touchend",v)}}}}),[A,n,r,i,a,c,s])}({containerRef:be,swipeable:ve,swipeDirection:ge,slideNext:Te,slidePrev:Ye,onSwipeStart:we,onSwipeEnd:pe,onSwipeMove:me}),function(e,t,A,n,r){(0,o.useEffect)((function(){var A=e.current;A&&t&&A.focus()}),[t]),(0,o.useEffect)((function(){if("none"!==A){var t=e.current;if(t){var o=function(e){if(t===document.activeElement)switch(e.key){case"ArrowLeft":"horizontal"!==A&&"both"!==A||r();break;case"ArrowRight":"horizontal"!==A&&"both"!==A||n();break;case"ArrowUp":"vertical"!==A&&"both"!==A||r();break;case"ArrowDown":"vertical"!==A&&"both"!==A||n()}};return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}}}),[A,n,r])}(be,le,ue,Te,Ye);var Ge=function(){_&&(Me.current=!0)},Fe=function(){_&&(Me.current=!1)},Oe={width:p,height:v,padding:E},Le={perspective:"number"==typeof R?"calc(".concat(R," * var(").concat(i,"))"):R,perspectiveOrigin:W,height:"auto"===v?"auto":"100%"},Xe={width:Se,height:We,aspectRatio:b,transition:"transform ".concat(X,"ms ").concat(Z,", width ").concat(G,"ms ").concat(O,", height ").concat(G,"ms ").concat(O),cursor:U?"pointer":"initial",top:"top"===M?"0%":"bottom"===M?"100%":"50%",boxShadow:j};return(0,n.jsx)(B.Provider,{value:{curIndex:Ne,setCurIndex:Re,slideNext:Te,slidePrev:Ye},children:(0,n.jsxs)("div",{className:"react-responsive-3d-carousel","aria-label":s,tabIndex:"none"!==ue?0:void 0,style:Oe,ref:be,children:[(0,n.jsxs)("ul",{className:"react-responsive-3d-carousel__list",style:Le,ref:De,children:[(0,n.jsx)("div",{className:"react-responsive-3d-carousel__dummy",style:r(r({},Xe),{visibility:"hidden"})}),l.map((function(e,t){return(0,n.jsx)("li",{className:"react-responsive-3d-carousel__item \n                ".concat("auto"!==Se||"auto"!==We&&"auto"!==b?"fixed-width":""," \n                ").concat("auto"!==We||"auto"!==Se&&"auto"!==b?"fixed-height":""),onClick:function(e){return function(e,t){U&&Re(t),te&&te(e,t,l[Ne],Ne===t)}(e,t)},style:Xe,onMouseEnter:Ge,onMouseLeave:Fe,children:e},t)})),t]}),Ce&&(0,n.jsx)("div",{className:"react-responsive-3d-carousel__status-container",children:(0,n.jsx)(C,r({length:l.length,curIndex:Ne},Be))}),Ie&&(0,n.jsx)("div",{className:"react-responsive-3d-carousel__arrows-container",children:(0,n.jsx)(g,r({onClickNext:function(e){Te(),(null==ye?void 0:ye.onClickNext)&&ye.onClickNext(e)},onClickPrev:function(e){Ye(),(null==ye?void 0:ye.onClickPrev)&&ye.onClickPrev(e)}},ye))}),ze&&(0,n.jsx)("div",{className:"react-responsive-3d-carousel__indicators-container",children:(0,n.jsx)(m,r({length:l.length,curIndex:Ne,onClick:function(e,t){Re(t),(null==Pe?void 0:Pe.onClick)&&Pe.onClick(e,t)}},Pe))})]})})}},4364:(e,t,A)=>{A.d(t,{A:()=>s});var n,o=A(6540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)({}).hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},r.apply(null,arguments)}const i=e=>{let{title:t,titleId:A,...i}=e;return o.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"feather feather-code",viewBox:"0 0 24 24","aria-labelledby":A},i),t?o.createElement("title",{id:A},t):null,n||(n=o.createElement("path",{d:"m16 18 6-6-6-6M8 6l-6 6 6 6"})))},a={"code-link":"code-link_KnfM"};var c=A(4848);function s(e){let{href:t}=e;return(0,c.jsx)("a",{className:a["code-link"],href:t,target:"_blank","aria-label":"Source Code",children:(0,c.jsx)(i,{})})}},7120:(e,t,A)=>{A.r(t),A.d(t,{default:()=>p});var n=A(6540),o=A(1217),r=A(8774);const i=A.p+"assets/images/lightweight-64317491b4aebbeceabde5297f9d3625.png",a="data:image/png;base64,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",c="data:image/png;base64,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";var s=A(4364),l=A(8840);const f={wrapper:"wrapper_Nvr6","carousel-wrapper":"carousel-wrapper_IW6h","title-text":"title-text_L5qB",item:"item_oHpe","card-container":"card-container_EuRG",card:"card_wSHM"};var u=A(4848);const d=["Awesome","Beautiful","Thrilling","Refreshing","The best"," What again? "],v={default:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}}},h={...v};for(let m=-d.length;m<=d.length;m++)v[m]={translate:{x:.1*Math.sin(-Math.PI*m/8)*m,y:.5*Math.sin(-Math.PI*m/8),z:m>-1?.2*-m:1.5},rotate:{x:0,y:0,z:-m/8*360},offset:{x:0,y:-.2,z:0}},h[m]={translate:{x:0,y:.5*Math.sin(-Math.PI*m/8),z:m>-1?.2*-m:1.5},rotate:{x:0,y:0,z:-m/8*360},offset:{x:0,y:-.2,z:0}};function g(e){let{index:t,phrase:A,isLast:o}=e;const r=(0,n.useRef)(null),{curIndex:i,slideNext:a,setCurIndex:c}=(0,n.useContext)(l.Yc);return(0,n.useEffect)((()=>{const e=r.current;if(!e)return;const A=t-i>0?t-i:0;e.style.filter=`blur(${3*A}px)`}),[i,t]),(0,u.jsx)("div",{ref:r,className:f.item,onClick:e=>{i===t&&(e.stopPropagation(),o?c(0):a())},children:A})}function w(e){let{imgUrl:t,title:A,description:n}=e;return(0,u.jsxs)("div",{className:f.card,children:[(0,u.jsx)("img",{src:t,alt:A}),(0,u.jsx)("h2",{children:A}),(0,u.jsx)("p",{children:n})]})}function p(){const e=d.map(((e,t)=>(0,u.jsx)(g,{index:t,phrase:e,isLast:t===d.length-1},e)));return(0,u.jsx)(o.A,{title:"Home",description:"Full-featured 3D carousel component for React.",children:(0,u.jsxs)("main",{className:f.wrapper,children:[(0,u.jsxs)("div",{className:f["carousel-wrapper"],children:[(0,u.jsx)(l.FN,{items:e,layout:v,startIndex:0,infiniteLoop:!1,autoPlay:!1,onChange:e=>console.log(e),showArrows:!1,showStatus:!1,showIndicators:!1,containerHeight:"100%",width:"auto",height:"auto",boxShadow:"none",children:(0,u.jsxs)("p",{className:f["title-text"],children:[(0,u.jsxs)("span",{children:["3D Carousel is",(0,u.jsx)("br",{})]}),(0,u.jsxs)("span",{children:["Interactive and flexible 3D Carousel component",(0,u.jsx)("br",{}),"that enables smooth transitions",(0,u.jsx)("br",{}),(0,u.jsx)(r.A,{to:"/docs/getting-started/installation",children:"Get Started"})]})]})}),(0,u.jsx)(s.A,{href:"https://github.com/Byongho96/react-responsive-3d-carousel/blob/main/docs/src/pages/index.tsx"})]}),(0,u.jsxs)("div",{className:f["card-container"],children:[(0,u.jsx)(w,{imgUrl:i,title:"LightWeight",description:"By utilizing only the CSS transform property, the rendering process is optimized for better performance. This enables the delivery of stunning 3D carousel effects on the web with improved efficiency"}),(0,u.jsx)(w,{imgUrl:a,title:"Responsive",description:"Responsive design is essential for providing an optimized user experience. Not only the size of the carousel items but also their layout can be made responsive. Achieve an optimized display for all devices with responsive design."}),(0,u.jsx)(w,{imgUrl:c,title:"Customizable",description:"With customization, you can freely arrange the carousel almost entirely to your preference. Use the Layout Editor to easily position items through a user-friendly 3D UI."})]})]})})}}}]);