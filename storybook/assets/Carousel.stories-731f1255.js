import{j as a,a as ce}from"./jsx-runtime-78eee2bc.js";import{r as c}from"./index-8b3efc3f.js";import{A as it}from"./Arrows-a32ca28d.js";import{I as ut}from"./Indicators-8d82e9d0.js";import{S as ct}from"./Status-6fd31166.js";import"./_commonjsHelpers-de833af9.js";const K=""+new URL("narrow-image-aa0b8384.jpg",import.meta.url).href,dt=""+new URL("sample-video-15dc0a3f.mp4",import.meta.url).href,f=""+new URL("square-image-aef8a9fd.jpg",import.meta.url).href,ee=""+new URL("wide-image-7a04884d.jpg",import.meta.url).href,v={CONTAINER_WIDTH:"--container-width",CONTAINER_HEIGHT:"--container-height",ITEM_WIDTH:"--item-width"},mt=(r,t,e,l)=>{c.useEffect(()=>{if(!r)return;const i=window.setInterval(()=>{l.current||e()},t);return()=>{clearInterval(i)}},[r,t,e])},pt=(r,t,e,l,i)=>{c.useEffect(()=>{const n=r.current;n&&t&&n.focus()},[t]),c.useEffect(()=>{if(e==="none")return;const n=r.current;if(!n)return;const s=o=>{if(n===document.activeElement)switch(o.key){case"ArrowLeft":(e==="horizontal"||e==="both")&&i();break;case"ArrowRight":(e==="horizontal"||e==="both")&&l();break;case"ArrowUp":(e==="vertical"||e==="both")&&i();break;case"ArrowDown":(e==="vertical"||e==="both")&&l();break}};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,l,i])},de={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}}},me={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-1":{translate:{x:-.5,y:0,z:0},rotate:{x:0,y:40,z:0},offset:{x:.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(30*(Math.PI/180))}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.5,y:0,z:0},rotate:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(30*(Math.PI/180))}}},pe={default:{translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-2":{translate:{x:-.5,y:0,z:0},rotate:{x:0,y:40,z:0},offset:{x:.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(40*(Math.PI/180))}},"-1":{translate:{x:-.25,y:0,z:0},rotate:{x:0,y:20,z:0},offset:{x:.25*Math.cos(40*(Math.PI/180)),y:0,z:-.5*Math.sin(40*(Math.PI/180))}},0:{translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.25,y:0,z:0},rotate:{x:0,y:-20,z:0},offset:{x:-.25*Math.cos(40*(Math.PI/180)),y:0,z:-.5*Math.sin(40*(Math.PI/180))}},2:{translate:{x:.5,y:0,z:0},rotate:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(40*(Math.PI/180))}}},T=(r,t)=>Math.round(r*Math.pow(10,t))/Math.pow(10,t),A=(r,t)=>{const e={},l=(t==null?void 0:t.widthFactor)??1,i=(t==null?void 0:t.depthFactor)??1,n=(t==null?void 0:t.angleFactor)??1;return Object.entries(r).forEach(([s,o])=>{const g={x:T(o.translate.x*l,3),y:o.translate.y,z:T(o.translate.z*l,3)},u={x:T(o.rotate.x*n,3),y:T(o.rotate.y*n,3),z:T(o.rotate.z*n,3)},p={x:T(o.offset.x*l,3),y:o.offset.y,z:T(o.offset.z*i,3)};e[s]={translate:g,rotate:u,offset:p}}),e},ft=(r,t)=>{if(t&&"numOfSlides"in t){if(t.numOfSlides===2)return A(de,t);if(t.numOfSlides===3)return A(me,t);if(t.numOfSlides===5)return A(pe,t)}return r<3?A(de,t):r<5?A(me,t):A(pe,t)},ht=(r,t)=>{const{width:e,height:l,translate:i,rotate:n,offset:s}=r,o=typeof e=="number"?`calc(${e} * var(${v.CONTAINER_WIDTH}))`:e??"auto",g=typeof l=="number"?`calc(${l} * var(${v.CONTAINER_HEIGHT}))`:l??"auto";let u;switch(t){case"top":u=0;break;case"bottom":u=-100;break;case"center":u=-50;break}const p=Math.sqrt(n.x**2+n.y**2+n.z**2),z=p?n.x/p:0,d=p?n.y/p:0,y=p?n.z/p:0,b=typeof i.x=="number"?`${i.x} * var(${v.CONTAINER_WIDTH})`:i.x,h=typeof i.y=="number"?`${i.y} * var(${v.CONTAINER_HEIGHT})`:i.y,C=typeof i.z=="number"?`${i.z} * var(${v.CONTAINER_WIDTH})`:i.z,_=typeof s.x=="number"?`${s.x} * 100%`:s.x,k=typeof s.y=="number"?`${s.y} * 100%`:s.y,R=typeof s.z=="number"?`${s.z} * var(${v.ITEM_WIDTH})`:s.z;return{width:o,height:g,transform:`translate(-50%, ${u}%) 
  translate3d(calc(${b} + ${_}), calc(${h} + ${k}), calc(${C} + ${R})) 
  rotate3d(${z}, ${d}, ${y}, calc(${p}deg)`}},gt=(r,t)=>{const e={};for(const l in r)e[l]=ht(r[l],t);return e},yt=(r,t,e,l,i,n,s,o,g)=>{const u=c.useMemo(()=>{const p=s==="default"?ft(r.length,g):s;return gt(p,e)},[r,e,s,g]);c.useEffect(()=>{const p=t.current,z=(d,y)=>{d.style.width=y.width==="auto"?l:y.width,d.style.height=y.height==="auto"?i:y.height,d.style.transform=y.transform,d.style.width!=="auto"||d.style.height!=="auto"&&n!=="auto"?d.classList.add("fixed-width"):d.classList.remove("fixed-width"),d.style.height!=="auto"||d.style.width!=="auto"&&n!=="auto"?d.classList.add("fixed-height"):d.classList.remove("fixed-height")};p.forEach((d,y)=>{const b=y-o;if(u[b]){z(d,u[b]);return}const h=b+(b>0?-r.length:r.length);if(u[h]){z(d,u[h]);return}z(d,u.default)})},[r,l,i,n,u,o])},St=(r,t,e,l,i)=>{c.useEffect(()=>{t.current.forEach(s=>{s.style.setProperty(v.ITEM_WIDTH,`${s.offsetWidth}px`)})},[r,l,i]),c.useEffect(()=>{const n=e.current;if(!n)return;const s=()=>{n.style.setProperty(v.CONTAINER_WIDTH,`${n.offsetWidth}px`),n.style.setProperty(v.CONTAINER_HEIGHT,`${n.offsetHeight}px`)};s();const o="ResizeObserver"in window?new ResizeObserver(s):null;return o?o.observe(n):window.addEventListener("resize",s),()=>{o?o.disconnect():window.removeEventListener("resize",s)}},[])},xt=30,vt=({containerRef:r,swipeable:t,swipeDirection:e,slideNext:l,slidePrev:i,onSwipeStart:n,onSwipeEnd:s,onSwipeMove:o})=>{const g=c.useRef(!1);return c.useEffect(()=>{if(!t)return;const u=r.current;if(!u)return;let p=0,z=0;const d=h=>{g.current=!0,p=h.touches[0].clientX,z=h.touches[0].clientY,n&&n(h)},y=h=>{g.current&&o&&o(h)},b=h=>{if(!g.current)return;g.current=!1,s&&s(h);const C=h.changedTouches[0].clientX,_=h.changedTouches[0].clientY,k=C-p,R=_-z,V=Math.abs(k),N=Math.abs(R);Math.sqrt(V**2+N**2)<xt||(e==="horizontal"&&V>N?(h.preventDefault(),k>0?i():l()):e==="vertical"&&N>V&&(h.preventDefault(),R>0?i():l()))};return u.addEventListener("touchstart",d,{passive:!0}),u.addEventListener("touchmove",y,{passive:!0}),u.addEventListener("touchend",b),()=>{u.removeEventListener("touchstart",d),u.removeEventListener("touchmove",y),u.removeEventListener("touchend",b)}},[t,e,l,i,n,s,o]),{isSwiping:g}};const bt=c.createContext({curIndex:0,setCurIndex:r=>{},slideNext:()=>{},slidePrev:()=>{}}),Q=({children:r,ariaLabel:t="3d carousel",items:e,startIndex:l=0,containerHeight:i="auto",containerWidth:n="100%",containerPadding:s="1rem",width:o="400px",height:g="300px",aspectRatio:u="auto",align:p="center",boxShadow:z="0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)",perspective:d=1,perspectiveOrigin:y="center",layout:b="default",defaultOption:h,sizeDuration:C=1e3,sizeTimingFn:_="ease-in-out",transformDuration:k=1e3,transformTimingFn:R="ease-in-out",focusOnSelect:V=!0,pauseOnHover:N=!0,pauseOnTransition:w="both",onClickItem:se,onChange:te,autoPlay:He=!0,interval:Je=3e3,infiniteLoop:L=!0,autoFocus:We=!1,slideWithKeyboard:oe="both",swipeable:Oe=!0,swipeDirection:je="horizontal",onSwipeStart:Ue,onSwipeEnd:Xe,onSwipeMove:Ye,showStatus:Ge=!0,status:Be,showArrows:Ze=!0,arrows:I,showIndicators:Qe=!0,indicators:D})=>{const F=c.useRef(null),le=c.useRef(null),ae=c.useRef(!1),M=c.useRef({size:!1,transform:!1}),[S,q]=c.useState(l),$=c.useMemo(()=>typeof o=="number"?`calc(${o} * var(${v.CONTAINER_WIDTH}))`:o,[o]),H=c.useMemo(()=>typeof g=="number"?`calc(${g} * var(${v.CONTAINER_HEIGHT}))`:g,[g]),re=c.useRef([]);c.useEffect(()=>{const m=F.current;m&&(re.current=Array.from(m.getElementsByClassName("react-responsive-3d-carousel__item")))},[e]),c.useEffect(()=>{const m=C-100,x=k-100;m>0&&(M.current.size=!0),x>0&&(M.current.transform=!0);const ne=setTimeout(()=>{M.current.size=!1},m),lt=setTimeout(()=>{M.current.transform=!1},x);return()=>{clearTimeout(ne),clearTimeout(lt)}},[S,C,k]);const J=c.useCallback(()=>{(w==="size"||w==="both")&&M.current.size||(w==="transform"||w==="both")&&M.current.transform||q(m=>!L&&m===0?m:(m-1+e.length)%e.length)},[e,L,q,w]),P=c.useCallback(()=>{(w==="size"||w==="both")&&M.current.size||(w==="transform"||w==="both")&&M.current.transform||q(m=>!L&&m===e.length-1?m:(m+1)%e.length)},[e,L,q,w]);c.useEffect(()=>{q(l)},[l]),c.useEffect(()=>{S<0?q(0):e.length-1<S&&q(e.length-1)},[e,S]);const ie=c.useRef(!1);c.useEffect(()=>{if(!ie.current){ie.current=!0;return}te&&te(S,e[S])},[S,te]),mt(He,Je,P,ae),St(e,re,le,$,S),yt(e,re,p,$,H,u,b,S,h),vt({containerRef:F,swipeable:Oe,swipeDirection:je,slideNext:P,slidePrev:J,onSwipeStart:Ue,onSwipeEnd:Xe,onSwipeMove:Ye}),pt(F,We,oe,P,J);const Ke=(m,x)=>{V&&q(x),se&&se(m,x,e[S],S===x)},et=()=>{N&&(ae.current=!0)},tt=()=>{N&&(ae.current=!1)},at=m=>{P(),I!=null&&I.onClickNext&&I.onClickNext(m)},rt=m=>{J(),I!=null&&I.onClickPrev&&I.onClickPrev(m)},nt=(m,x)=>{q(x),D!=null&&D.onClick&&D.onClick(m,x)},st={width:n,height:i,padding:s},ot={perspective:typeof d=="number"?`calc(${d} * var(${v.CONTAINER_WIDTH}))`:d,perspectiveOrigin:y,height:i==="auto"?"auto":"100%"},ue={width:$,height:H,aspectRatio:u,transition:`transform ${k}ms ${R}, width ${C}ms ${_}, height ${C}ms ${_}`,cursor:V?"pointer":"initial",top:p==="top"?"0%":p==="bottom"?"100%":"50%",boxShadow:z};return a(bt.Provider,{value:{curIndex:S,setCurIndex:q,slideNext:P,slidePrev:J},children:ce("div",{className:"react-responsive-3d-carousel","aria-label":t,tabIndex:oe!=="none"?0:void 0,style:st,ref:F,children:[ce("ul",{className:"react-responsive-3d-carousel__list",style:ot,ref:le,children:[a("div",{className:"react-responsive-3d-carousel__dummy",style:{...ue,visibility:"hidden"}}),e.map((m,x)=>a("li",{className:`react-responsive-3d-carousel__item 
                ${$!=="auto"||H!=="auto"&&u!=="auto"?"fixed-width":""} 
                ${H!=="auto"||$!=="auto"&&u!=="auto"?"fixed-height":""}`,onClick:ne=>Ke(ne,x),style:ue,onMouseEnter:et,onMouseLeave:tt,children:m},x)),r]}),Ge&&a("div",{className:"react-responsive-3d-carousel__status-container",children:a(ct,{length:e.length,curIndex:S,...Be})}),Ze&&a("div",{className:"react-responsive-3d-carousel__arrows-container",children:a(it,{onClickNext:at,onClickPrev:rt,...I})}),Qe&&a("div",{className:"react-responsive-3d-carousel__indicators-container",children:a(ut,{length:e.length,curIndex:S,onClick:nt,...D})})]})})};try{Q.displayName="Carousel",Q.__docgenInfo={description:"",displayName:"Carousel",props:{ariaLabel:{defaultValue:{value:"3d carousel"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},startIndex:{defaultValue:{value:"0"},description:"",name:"startIndex",required:!1,type:{name:"number"}},containerWidth:{defaultValue:{value:"100%"},description:"Container",name:"containerWidth",required:!1,type:{name:"string"}},containerHeight:{defaultValue:{value:"auto"},description:"",name:"containerHeight",required:!1,type:{name:"string"}},containerPadding:{defaultValue:{value:"1rem"},description:"",name:"containerPadding",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Carousel 2D",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},aspectRatio:{defaultValue:{value:"auto"},description:"",name:"aspectRatio",required:!1,type:{name:'number | "auto"'}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},boxShadow:{defaultValue:{value:"0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)"},description:"",name:"boxShadow",required:!1,type:{name:"string"}},perspective:{defaultValue:{value:"1"},description:"Carousel 3D",name:"perspective",required:!1,type:{name:"string | number"}},perspectiveOrigin:{defaultValue:{value:"center"},description:"",name:"perspectiveOrigin",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"default"},description:"",name:"layout",required:!1,type:{name:"LayoutType"}},defaultOption:{defaultValue:null,description:"",name:"defaultOption",required:!1,type:{name:"DefaultOption"}},sizeDuration:{defaultValue:{value:"1000"},description:"Carousel Transition",name:"sizeDuration",required:!1,type:{name:"number"}},sizeTimingFn:{defaultValue:{value:"ease-in-out"},description:"",name:"sizeTimingFn",required:!1,type:{name:"string"}},transformDuration:{defaultValue:{value:"1000"},description:"",name:"transformDuration",required:!1,type:{name:"number"}},transformTimingFn:{defaultValue:{value:"ease-in-out"},description:"",name:"transformTimingFn",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:{value:"true"},description:"Carousel Interaction",name:"focusOnSelect",required:!1,type:{name:"boolean"}},pauseOnHover:{defaultValue:{value:"true"},description:"",name:"pauseOnHover",required:!1,type:{name:"boolean"}},pauseOnTransition:{defaultValue:{value:"both"},description:"",name:"pauseOnTransition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"size"'},{value:'"transform"'},{value:'"both"'}]}},onChange:{defaultValue:null,description:"Carousel Callback",name:"onChange",required:!1,type:{name:"((index: number, item: Element) => void)"}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, index: number, item: Element, isCurIndex: boolean) => void)"}},autoPlay:{defaultValue:{value:"true"},description:"Carousel Play",name:"autoPlay",required:!1,type:{name:"boolean"}},interval:{defaultValue:{value:"3000"},description:"",name:"interval",required:!1,type:{name:"number"}},infiniteLoop:{defaultValue:{value:"true"},description:"",name:"infiniteLoop",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Carousel Focus",name:"autoFocus",required:!1,type:{name:"boolean"}},slideWithKeyboard:{defaultValue:{value:"both"},description:"",name:"slideWithKeyboard",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"vertical"'},{value:'"horizontal"'}]}},swipeable:{defaultValue:{value:"true"},description:"Carousel Swipe",name:"swipeable",required:!1,type:{name:"boolean"}},swipeDirection:{defaultValue:{value:"horizontal"},description:"",name:"swipeDirection",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},onSwipeStart:{defaultValue:null,description:"",name:"onSwipeStart",required:!1,type:{name:"((event: TouchEvent) => void)"}},onSwipeEnd:{defaultValue:null,description:"",name:"onSwipeEnd",required:!1,type:{name:"((event: TouchEvent) => void)"}},onSwipeMove:{defaultValue:null,description:"",name:"onSwipeMove",required:!1,type:{name:"((event: TouchEvent) => void)"}},showStatus:{defaultValue:{value:"true"},description:"",name:"showStatus",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"StatusProps"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:"boolean"}},arrows:{defaultValue:null,description:"",name:"arrows",required:!1,type:{name:"ArrowsProps"}},showIndicators:{defaultValue:{value:"true"},description:"",name:"showIndicators",required:!1,type:{name:"boolean"}},indicators:{defaultValue:null,description:"",name:"indicators",required:!1,type:{name:"IndicatorsProps"}}}}}catch{}const kt={title:"Components/Carousel",component:Q,args:{width:"400px",height:"300px",aspectRatio:"auto",align:"center",perspective:1,perspectiveOrigin:"center",boxShadow:"0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)",containerWidth:"100%",containerHeight:"auto",containerPadding:"1rem","defaultOption.widthFactor":1,"defaultOption.depthFactor":1,"defaultOption.angleFactor":1,autoPlay:!0,interval:3e3,transformDuration:1e3,transformTimingFn:"ease-in-out",infiniteLoop:!0,focusOnSelect:!0,pauseOnHover:!0,slideWithKeyboard:"both",swipeable:!0,swipeDirection:"horizontal",showStatus:!0,showArrows:!0,showIndicators:!0},argTypes:{"defaultOption.widthFactor":{type:"number",min:0,max:2,step:.1},"defaultOption.depthFactor":{type:"number",min:0,max:5,step:.1},"defaultOption.angleFactor":{type:"number",min:0,max:2,step:.1},interval:{control:{type:"number",min:0,max:1e4,step:100}},transitionDuration:{control:{type:"number",min:0,max:5e3,step:100}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},items:{table:{disable:!0}},layout:{table:{disable:!0}},defaultOption:{table:{disable:!0}},startIndex:{table:{disable:!0}},autoFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},onClickItem:{table:{disable:!0}},onSwipeStart:{table:{disable:!0}},onSwipeMove:{table:{disable:!0}},onSwipeEnd:{table:{disable:!0}},indicators:{table:{disable:!0}},arrows:{table:{disable:!0}},status:{table:{disable:!0}}},decorators:[r=>a("div",{style:{display:"flex",alignItems:"center",height:"100vh"},children:a(r,{})})]},E=r=>a(Q,{...r,defaultOption:{numOfSlides:"auto",angleFactor:r["defaultOption.angleFactor"],depthFactor:r["defaultOption.depthFactor"],widthFactor:r["defaultOption.widthFactor"]}}),W={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2")]},render:E},O={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3")]},render:E},j={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3"),a("img",{src:f,alt:"Sample Square"},"4"),a("img",{src:f,alt:"Sample Square"},"5")]},render:E},U={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:E},X={args:{width:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:E},Y={args:{containerHeight:"500px",width:"350px",height:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:E},G={args:{containerHeight:"450px",width:"auto",height:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:E},B={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("video",{src:dt,loop:!0,autoPlay:!0,"aria-label":"Sample Video"},"2"),a("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"white",fontSize:"2rem"},children:"Hello Dev"},"3")]},render:E},Z={args:{children:a("div",{style:{position:"absolute",top:"50%",left:"50%",display:"flex",alignItems:"center",justifyContent:"center",transform:"translate(-50%, -50%)",width:"200px",height:"200px",backgroundColor:"skyblue",color:"white",fontSize:"2rem",fontWeight:"bold"},children:"Children"}),items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3"),a("img",{src:f,alt:"Sample Square"},"4"),a("img",{src:f,alt:"Sample Square"},"5")],containerHeight:"400px",containerPadding:"0 1rem 3rem",perspectiveOrigin:"top",boxShadow:"0 0.05rem 0.25rem rgba(0, 0, 0, 0.5)",sizeDuration:1e3,sizeTimingFn:"ease-in-out",layout:{default:{width:"100px",height:"100px",translate:{x:0,y:0,z:-1},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-2":{width:"125px",height:"225px",translate:{x:-.25,y:0,z:-.25*Math.tan(72*(Math.PI/180))},rotate:{x:0,y:0,z:0},offset:{x:.25,y:0,z:0}},"-1":{width:"150px",height:"150px",translate:{x:-.5,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:.5,y:0,z:0}},0:{width:"225px",height:"125px",translate:{x:0,y:0,z:.5*Math.tan(36*(Math.PI/180))},rotate:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{width:"150px",height:"150px",translate:{x:.5,y:0,z:0},rotate:{x:0,y:0,z:0},offset:{x:-.5,y:0,z:0}},2:{width:"125px",height:"225px",translate:{x:.25,y:0,z:-.25*Math.tan(72*(Math.PI/180))},rotate:{x:0,y:0,z:0},offset:{x:-.25,y:0,z:0}}}},render:E};var fe,he,ge;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(ge=(he=W.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,Se,xe;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />, <img key="3" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(xe=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var ve,be,we;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />, <img key="3" src={squareJpgSrc} alt="Sample Square" />, <img key="4" src={squareJpgSrc} alt="Sample Square" />, <img key="5" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(we=(be=j.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ze,qe,Ie;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(Ie=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Ie.source}}};var Ee,Ce,ke;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    width: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(ke=(Ce=X.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Me,Te,_e;Y.parameters={...Y.parameters,docs:{...(Me=Y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    containerHeight: '500px',
    width: '350px',
    height: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(_e=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Re,Ve,Ne;G.parameters={...G.parameters,docs:{...(Re=G.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    containerHeight: '450px',
    width: 'auto',
    height: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(Ne=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var Ae,De,$e;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <video key="2" src={videoSrc} loop autoPlay aria-label="Sample Video" />, <div key="3" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      fontSize: '2rem'
    }}>
        Hello Dev
      </div>]
  },
  render: defaultRender
}`,...($e=(De=B.parameters)==null?void 0:De.docs)==null?void 0:$e.source}}};var Pe,Le,Fe;Z.parameters={...Z.parameters,docs:{...(Pe=Z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      backgroundColor: 'skyblue',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>
        Children
      </div>,
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />, <img key="3" src={squareJpgSrc} alt="Sample Square" />, <img key="4" src={squareJpgSrc} alt="Sample Square" />, <img key="5" src={squareJpgSrc} alt="Sample Square" />],
    containerHeight: '400px',
    containerPadding: '0 1rem 3rem',
    perspectiveOrigin: 'top',
    boxShadow: '0 0.05rem 0.25rem rgba(0, 0, 0, 0.5)',
    sizeDuration: 1000,
    sizeTimingFn: 'ease-in-out',
    layout: {
      default: {
        width: '100px',
        height: '100px',
        translate: {
          x: 0,
          y: 0,
          z: -1
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      '-2': {
        width: '125px',
        height: '225px',
        translate: {
          x: -0.25,
          y: 0,
          z: -0.25 * Math.tan(72 * (Math.PI / 180))
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: 0.25,
          y: 0,
          z: 0
        }
      },
      '-1': {
        width: '150px',
        height: '150px',
        translate: {
          x: -0.5,
          y: 0,
          z: 0
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: 0.5,
          y: 0,
          z: 0
        }
      },
      0: {
        width: '225px',
        height: '125px',
        translate: {
          x: 0,
          y: 0,
          z: 0.5 * Math.tan(36 * (Math.PI / 180))
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      1: {
        width: '150px',
        height: '150px',
        translate: {
          x: 0.5,
          y: 0,
          z: 0
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: -0.5,
          y: 0,
          z: 0
        }
      },
      2: {
        width: '125px',
        height: '225px',
        translate: {
          x: 0.25,
          y: 0,
          z: -0.25 * Math.tan(72 * (Math.PI / 180))
        },
        rotate: {
          x: 0,
          y: 0,
          z: 0
        },
        offset: {
          x: -0.25,
          y: 0,
          z: 0
        }
      }
    }
  },
  render: defaultRender
}`,...(Fe=(Le=Z.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};const Mt=["DefaultTwo","DefaultThree","DefaultFive","VariousSize","AutoWidth","AutoHeight","AutoWidthHeight","VariousItem","CustomLayoutWithChildren"];export{Y as AutoHeight,X as AutoWidth,G as AutoWidthHeight,Z as CustomLayoutWithChildren,j as DefaultFive,O as DefaultThree,W as DefaultTwo,B as VariousItem,U as VariousSize,Mt as __namedExportsOrder,kt as default};
