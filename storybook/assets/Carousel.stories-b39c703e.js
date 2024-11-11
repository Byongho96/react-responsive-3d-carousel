import{j as a,a as se}from"./jsx-runtime-78eee2bc.js";import{r as u}from"./index-8b3efc3f.js";import{A as nt}from"./Arrows-a32ca28d.js";import{I as st}from"./Indicators-97ad76a6.js";import{S as ot}from"./Status-6fd31166.js";import"./_commonjsHelpers-de833af9.js";const K=""+new URL("narrow-image-aa0b8384.jpg",import.meta.url).href,it=""+new URL("sample-video-15dc0a3f.mp4",import.meta.url).href,f=""+new URL("square-image-aef8a9fd.jpg",import.meta.url).href,ee=""+new URL("wide-image-7a04884d.jpg",import.meta.url).href,x={CONTAINER_WIDTH:"--container-width",CONTAINER_HEIGHT:"--container-height",ITEM_WIDTH:"--item-width"},lt=(r,t,e,o)=>{u.useEffect(()=>{if(!r)return;const l=window.setInterval(()=>{o()},t);return()=>{clearInterval(l)}},[r,t,e,o])},ut=(r,t,e,o,l)=>{u.useEffect(()=>{const n=r.current;n&&t&&n.focus()},[t]),u.useEffect(()=>{if(e==="none")return;const n=r.current;if(!n)return;const s=i=>{if(n===document.activeElement)switch(i.key){case"ArrowLeft":(e==="horizontal"||e==="both")&&l();break;case"ArrowRight":(e==="horizontal"||e==="both")&&o();break;case"ArrowUp":(e==="vertical"||e==="both")&&l();break;case"ArrowDown":(e==="vertical"||e==="both")&&o();break}};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,o,l])},oe={default:{translate:{x:0,y:0,z:-1},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},0:{translate:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}}},ie={default:{translate:{x:0,y:0,z:-1},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-1":{translate:{x:-.5,y:0,z:0},rotation:{x:0,y:40,z:0},offset:{x:.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(30*(Math.PI/180))}},0:{translate:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.5,y:0,z:0},rotation:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(30*(Math.PI/180))}}},le={default:{translate:{x:0,y:0,z:-1},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-2":{translate:{x:-.5,y:0,z:0},rotation:{x:0,y:40,z:0},offset:{x:.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(40*(Math.PI/180))}},"-1":{translate:{x:-.25,y:0,z:0},rotation:{x:0,y:20,z:0},offset:{x:.25*Math.cos(40*(Math.PI/180)),y:0,z:-.5*Math.sin(40*(Math.PI/180))}},0:{translate:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{translate:{x:.25,y:0,z:0},rotation:{x:0,y:-20,z:0},offset:{x:-.25*Math.cos(40*(Math.PI/180)),y:0,z:-.5*Math.sin(40*(Math.PI/180))}},2:{translate:{x:.5,y:0,z:0},rotation:{x:0,y:-40,z:0},offset:{x:-.5*Math.cos(40*(Math.PI/180)),y:0,z:-1*Math.sin(40*(Math.PI/180))}}},E=(r,t)=>Math.round(r*Math.pow(10,t))/Math.pow(10,t),R=(r,t)=>{const e={},o=(t==null?void 0:t.widthFactor)??1,l=(t==null?void 0:t.depthFactor)??1,n=(t==null?void 0:t.angleFactor)??1;return Object.entries(r).forEach(([s,i])=>{const d={x:E(i.translate.x*o,3),y:i.translate.y,z:E(i.translate.z*o,3)},c={x:E(i.rotation.x*n,3),y:E(i.rotation.y*n,3),z:E(i.rotation.z*n,3)},h={x:E(i.offset.x*o,3),y:i.offset.y,z:E(i.offset.z*l,3)};e[s]={translate:d,rotation:c,offset:h}}),e},ct=(r,t)=>{if(t&&"numOfSlides"in t){if(t.numOfSlides===2)return R(oe,t);if(t.numOfSlides===3)return R(ie,t);if(t.numOfSlides===5)return R(le,t)}return r<3?R(oe,t):r<5?R(ie,t):R(le,t)},dt=(r,t)=>{const{width:e,height:o,translate:l,rotation:n,offset:s}=r,i=typeof e=="number"?`calc(${e} * var(${x.CONTAINER_WIDTH}))`:e??"auto",d=typeof o=="number"?`calc(${o} * var(${x.CONTAINER_HEIGHT}))`:o??"auto";let c;switch(t){case"top":c=0;break;case"bottom":c=-100;break;case"center":c=-50;break}const h=Math.sqrt(n.x**2+n.y**2+n.z**2),m=h?n.x/h:0,y=h?n.y/h:0,v=h?n.z/h:0,b=typeof l.x=="number"?`${l.x} * var(${x.CONTAINER_WIDTH})`:l.x,g=typeof l.y=="number"?`${l.y} * var(${x.CONTAINER_HEIGHT})`:l.y,k=typeof l.z=="number"?`${l.z} * var(${x.CONTAINER_WIDTH})`:l.z,D=typeof s.x=="number"?`${s.x} * 100%`:s.x,M=typeof s.y=="number"?`${s.y} * 100%`:s.y,C=typeof s.z=="number"?`${s.z} * var(${x.ITEM_WIDTH})`:s.z;return{width:i,height:d,transform:`translate(-50%, ${c}%) 
  translate3d(calc(${b} + ${D}), calc(${g} + ${M}), calc(${k} + ${C})) 
  rotate3d(${m}, ${y}, ${v}, calc(${h}deg)`}},mt=(r,t)=>{const e={};for(const o in r)e[o]=dt(r[o],t);return e},pt=(r,t,e,o,l,n,s,i)=>{const d=u.useMemo(()=>{const c=n==="default"?ct(r.length,i):n;return mt(c,e)},[r,e,n,i]);u.useEffect(()=>{const c=t.current,h=(m,y)=>{m.style.width=y.width==="auto"?o:y.width,m.style.height=y.height==="auto"?l:y.height,m.style.transform=y.transform,m.style.width!=="auto"?m.classList.add("fixed-width"):m.classList.remove("fixed-width"),m.style.height!=="auto"?m.classList.add("fixed-height"):m.classList.remove("fixed-height")};c.forEach((m,y)=>{const v=y-s;if(d[v]){h(m,d[v]);return}const b=v+(v>0?-r.length:r.length);if(d[b]){h(m,d[b]);return}h(m,d.default)})},[r,o,l,d,s])},ft=(r,t,e,o,l)=>{u.useEffect(()=>{t.current.forEach(s=>{s.style.setProperty(x.ITEM_WIDTH,`${s.offsetWidth}px`)})},[r,o,l]),u.useEffect(()=>{const n=e.current;if(!n)return;const s=()=>{n.style.setProperty(x.CONTAINER_WIDTH,`${n.offsetWidth}px`),n.style.setProperty(x.CONTAINER_HEIGHT,`${n.offsetHeight}px`)};s();const i="ResizeObserver"in window?new ResizeObserver(s):null;return i?i.observe(n):window.addEventListener("resize",s),()=>{i?i.disconnect():window.removeEventListener("resize",s)}},[])},ht=30,gt=({containerRef:r,swipeable:t,swipeDirection:e,slideNext:o,slidePrev:l,onSwipeStart:n,onSwipeEnd:s,onSwipeMove:i})=>{const d=u.useRef(!1);return u.useEffect(()=>{if(!t)return;const c=r.current;if(!c)return;let h=0,m=0;const y=g=>{d.current=!0,h=g.touches[0].clientX,m=g.touches[0].clientY,n&&n(g)},v=g=>{d.current&&i&&i(g)},b=g=>{if(!d.current)return;d.current=!1,s&&s(g);const k=g.changedTouches[0].clientX,D=g.changedTouches[0].clientY,M=k-h,C=D-m,T=Math.abs(M),_=Math.abs(C);Math.sqrt(T**2+_**2)<ht||(e==="horizontal"&&T>_?(g.preventDefault(),M>0?l():o()):e==="vertical"&&_>T&&(g.preventDefault(),C>0?l():o()))};return c.addEventListener("touchstart",y,{passive:!0}),c.addEventListener("touchmove",v,{passive:!0}),c.addEventListener("touchend",b),()=>{c.removeEventListener("touchstart",y),c.removeEventListener("touchmove",v),c.removeEventListener("touchend",b)}},[t,e,o,l,n,s,i]),{isSwiping:d}};const yt=u.createContext({curIndex:0,setCurIndex:r=>{},slideNext:()=>{},slidePrev:()=>{}}),Q=({children:r,ariaLabel:t="3d carousel",items:e,startIndex:o=0,containerHeight:l="auto",containerWidth:n="100%",containerPadding:s="1rem",width:i="400px",height:d="300px",align:c="center",boxShadow:h="0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)",perspective:m="auto",perspectiveOrigin:y="center",layout:v="default",defaultOption:b,sizeDuration:g=1e3,sizeTimingFn:k="ease-in-out",transformDuration:D=1e3,transformTimingFn:M="ease-in-out",focusOnSelect:C=!0,pauseOnHover:T=!0,onClickItem:_,onChange:N,autoPlay:Ne=!0,interval:$e=3e3,infiniteLoop:$=!0,autoFocus:Pe=!1,slideWithKeyboard:ae="both",swipeable:Le=!0,swipeDirection:Fe="horizontal",onSwipeStart:He,onSwipeEnd:Je,onSwipeMove:Oe,showStatus:We=!0,status:je,showArrows:Ue=!0,arrows:z,showIndicators:Xe=!0,indicators:V})=>{const P=u.useRef(null),re=u.useRef(null),L=u.useRef(!1),[S,w]=u.useState(o),F=u.useMemo(()=>typeof i=="number"?`calc(${i} * var(${x.CONTAINER_WIDTH}))`:i,[i]),H=u.useMemo(()=>typeof d=="number"?`calc(${d} * var(${x.CONTAINER_HEIGHT}))`:d,[d]),te=u.useRef([]);u.useEffect(()=>{const p=P.current;p&&(te.current=Array.from(p.getElementsByClassName("react-responsive-3d-carousel__item")))},[e]);const J=u.useCallback(()=>{L.current||w(p=>!$&&p===0?p:(p-1+e.length)%e.length)},[e,$,w]),A=u.useCallback(()=>{L.current||w(p=>!$&&p===e.length-1?p:(p+1)%e.length)},[e,$,w]);u.useEffect(()=>{w(o)},[o]),u.useEffect(()=>{S<0?w(0):e.length-1<S&&w(e.length-1)},[e,S]);const ne=u.useRef(!1);u.useEffect(()=>{if(!ne.current){ne.current=!0;return}N&&N(S,e[S])},[S,N]),lt(Ne,$e,S,A),ft(e,te,re,F,S),pt(e,te,c,F,H,v,S,b),gt({containerRef:P,swipeable:Le,swipeDirection:Fe,slideNext:A,slidePrev:J,onSwipeStart:He,onSwipeEnd:Je,onSwipeMove:Oe}),ut(P,Pe,ae,A,J);const Ye=(p,q)=>{C&&w(q),_&&_(p,q,e[S],S===q)},Ge=()=>{T&&(L.current=!0)},Be=()=>{T&&(L.current=!1)},Ze=p=>{A(),z!=null&&z.onClickNext&&z.onClickNext(p)},Qe=p=>{J(),z!=null&&z.onClickPrev&&z.onClickPrev(p)},Ke=(p,q)=>{w(q),V!=null&&V.onClick&&V.onClick(p,q)},et={width:n,height:l,padding:s},tt={perspective:m==="auto"?`var(${x.CONTAINER_WIDTH})`:m,perspectiveOrigin:y,height:l==="auto"?H:"100%"},at={width:F,height:H,transition:`transform ${D}ms ${M}, width ${g}ms ${k}, height ${g}ms ${k}`,cursor:C?"pointer":"initial",top:c==="top"?"0%":c==="bottom"?"100%":"50%",boxShadow:h};return a(yt.Provider,{value:{curIndex:S,setCurIndex:w,slideNext:A,slidePrev:J},children:se("div",{className:"react-responsive-3d-carousel","aria-label":t,tabIndex:ae!=="none"?0:void 0,style:et,ref:P,children:[se("ul",{className:"react-responsive-3d-carousel__list",style:tt,ref:re,children:[e.map((p,q)=>a("li",{className:`react-responsive-3d-carousel__item 
                ${F!=="auto"?"fixed-width":""} 
                ${H!=="auto"?"fixed-height":""}`,onClick:rt=>Ye(rt,q),style:at,onMouseEnter:Ge,onMouseLeave:Be,children:p},q)),r]}),We&&a("div",{className:"react-responsive-3d-carousel__status-container",children:a(ot,{length:e.length,curIndex:S,...je})}),Ue&&a("div",{className:"react-responsive-3d-carousel__arrows-container",children:a(nt,{onClickNext:Ze,onClickPrev:Qe,...z})}),Xe&&a("div",{className:"react-responsive-3d-carousel__indicators-container",children:a(st,{length:e.length,curIndex:S,onClick:Ke,...V})})]})})};try{Q.displayName="Carousel",Q.__docgenInfo={description:"",displayName:"Carousel",props:{ariaLabel:{defaultValue:{value:"3d carousel"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},startIndex:{defaultValue:{value:"0"},description:"",name:"startIndex",required:!1,type:{name:"number"}},containerWidth:{defaultValue:{value:"100%"},description:"Container",name:"containerWidth",required:!1,type:{name:"string"}},containerHeight:{defaultValue:{value:"auto"},description:"",name:"containerHeight",required:!1,type:{name:"string"}},containerPadding:{defaultValue:{value:"1rem"},description:"",name:"containerPadding",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Carousel 2D",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},boxShadow:{defaultValue:{value:"0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)"},description:"",name:"boxShadow",required:!1,type:{name:"string"}},perspective:{defaultValue:{value:"auto"},description:"Carousel 3D",name:"perspective",required:!1,type:{name:"string"}},perspectiveOrigin:{defaultValue:{value:"center"},description:"",name:"perspectiveOrigin",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"default"},description:"",name:"layout",required:!1,type:{name:"LayoutType"}},defaultOption:{defaultValue:null,description:"",name:"defaultOption",required:!1,type:{name:"DefaultOption"}},sizeDuration:{defaultValue:{value:"1000"},description:"Carousel Transition",name:"sizeDuration",required:!1,type:{name:"number"}},sizeTimingFn:{defaultValue:{value:"ease-in-out"},description:"",name:"sizeTimingFn",required:!1,type:{name:"string"}},transformDuration:{defaultValue:{value:"1000"},description:"",name:"transformDuration",required:!1,type:{name:"number"}},transformTimingFn:{defaultValue:{value:"ease-in-out"},description:"",name:"transformTimingFn",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:{value:"true"},description:"Carousel Interaction",name:"focusOnSelect",required:!1,type:{name:"boolean"}},pauseOnHover:{defaultValue:{value:"true"},description:"",name:"pauseOnHover",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Carousel Callback",name:"onChange",required:!1,type:{name:"((index: number, item: Element) => void)"}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, index: number, item: Element, isCurIndex: boolean) => void)"}},autoPlay:{defaultValue:{value:"true"},description:"Carousel Play",name:"autoPlay",required:!1,type:{name:"boolean"}},interval:{defaultValue:{value:"3000"},description:"",name:"interval",required:!1,type:{name:"number"}},infiniteLoop:{defaultValue:{value:"true"},description:"",name:"infiniteLoop",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Carousel Focus",name:"autoFocus",required:!1,type:{name:"boolean"}},slideWithKeyboard:{defaultValue:{value:"both"},description:"",name:"slideWithKeyboard",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"vertical"'},{value:'"horizontal"'},{value:'"both"'}]}},swipeable:{defaultValue:{value:"true"},description:"Carousel Swipe",name:"swipeable",required:!1,type:{name:"boolean"}},swipeDirection:{defaultValue:{value:"horizontal"},description:"",name:"swipeDirection",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},onSwipeStart:{defaultValue:null,description:"",name:"onSwipeStart",required:!1,type:{name:"((event: TouchEvent) => void)"}},onSwipeEnd:{defaultValue:null,description:"",name:"onSwipeEnd",required:!1,type:{name:"((event: TouchEvent) => void)"}},onSwipeMove:{defaultValue:null,description:"",name:"onSwipeMove",required:!1,type:{name:"((event: TouchEvent) => void)"}},showStatus:{defaultValue:{value:"true"},description:"",name:"showStatus",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"StatusProps"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:"boolean"}},arrows:{defaultValue:null,description:"",name:"arrows",required:!1,type:{name:"ArrowsProps"}},showIndicators:{defaultValue:{value:"true"},description:"",name:"showIndicators",required:!1,type:{name:"boolean"}},indicators:{defaultValue:null,description:"",name:"indicators",required:!1,type:{name:"IndicatorsProps"}}}}}catch{}const qt={title:"Components/Carousel",component:Q,args:{width:"400px",height:"300px",align:"center",perspective:"auto",perspectiveOrigin:"center",boxShadow:"0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)",containerWidth:"100%",containerHeight:"auto",containerPadding:"1rem","defaultOption.widthFactor":1,"defaultOption.depthFactor":1,"defaultOption.angleFactor":1,autoPlay:!0,interval:3e3,transformDuration:1e3,transformTimingFn:"ease-in-out",infiniteLoop:!0,focusOnSelect:!0,pauseOnHover:!0,slideWithKeyboard:"both",swipeable:!0,swipeDirection:"horizontal",showStatus:!0,showArrows:!0,showIndicators:!0},argTypes:{"defaultOption.widthFactor":{type:"number",min:0,max:2,step:.1},"defaultOption.depthFactor":{type:"number",min:0,max:5,step:.1},"defaultOption.angleFactor":{type:"number",min:0,max:2,step:.1},interval:{control:{type:"number",min:0,max:1e4,step:100}},transitionDuration:{control:{type:"number",min:0,max:5e3,step:100}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},items:{table:{disable:!0}},layout:{table:{disable:!0}},defaultOption:{table:{disable:!0}},startIndex:{table:{disable:!0}},autoFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},onClickItem:{table:{disable:!0}},onSwipeStart:{table:{disable:!0}},onSwipeMove:{table:{disable:!0}},onSwipeEnd:{table:{disable:!0}},indicators:{table:{disable:!0}},arrows:{table:{disable:!0}},status:{table:{disable:!0}}},decorators:[r=>a("div",{style:{display:"flex",alignItems:"center",height:"100vh"},children:a(r,{})})]},I=r=>a(Q,{...r,defaultOption:{numOfSlides:"auto",angleFactor:r["defaultOption.angleFactor"],depthFactor:r["defaultOption.depthFactor"],widthFactor:r["defaultOption.widthFactor"]}}),O={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2")]},render:I},W={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3")]},render:I},j={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3"),a("img",{src:f,alt:"Sample Square"},"4"),a("img",{src:f,alt:"Sample Square"},"5")]},render:I},U={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:I},X={args:{width:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:I},Y={args:{containerHeight:"500px",width:"350px",height:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:I},G={args:{containerHeight:"450px",width:"auto",height:"auto",items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:K,alt:"Sample Narrow"},"2"),a("img",{src:ee,alt:"Sample Wide"},"3")]},render:I},B={args:{items:[a("img",{src:f,alt:"Sample Square"},"1"),a("video",{src:it,loop:!0,autoPlay:!0,"aria-label":"Sample Video"},"2"),a("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"white",fontSize:"2rem"},children:"Hello Dev"},"3")]},render:I},Z={args:{children:a("div",{style:{position:"absolute",top:"50%",left:"50%",display:"flex",alignItems:"center",justifyContent:"center",transform:"translate(-50%, -50%)",width:"200px",height:"200px",backgroundColor:"skyblue",color:"white",fontSize:"2rem",fontWeight:"bold"},children:"Children"}),items:[a("img",{src:f,alt:"Sample Square"},"1"),a("img",{src:f,alt:"Sample Square"},"2"),a("img",{src:f,alt:"Sample Square"},"3"),a("img",{src:f,alt:"Sample Square"},"4"),a("img",{src:f,alt:"Sample Square"},"5")],containerHeight:"400px",containerPadding:"0 1rem 3rem",perspectiveOrigin:"top",boxShadow:"0 0.05rem 0.25rem rgba(0, 0, 0, 0.5)",sizeDuration:1e3,sizeTimingFn:"ease-in-out",layout:{default:{width:"100px",height:"100px",translate:{x:0,y:0,z:-1},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},"-2":{width:"125px",height:"225px",translate:{x:-.25,y:0,z:-.25*Math.tan(72*(Math.PI/180))},rotation:{x:0,y:0,z:0},offset:{x:.25,y:0,z:0}},"-1":{width:"150px",height:"150px",translate:{x:-.5,y:0,z:0},rotation:{x:0,y:0,z:0},offset:{x:.5,y:0,z:0}},0:{width:"225px",height:"125px",translate:{x:0,y:0,z:.5*Math.tan(36*(Math.PI/180))},rotation:{x:0,y:0,z:0},offset:{x:0,y:0,z:0}},1:{width:"150px",height:"150px",translate:{x:.5,y:0,z:0},rotation:{x:0,y:0,z:0},offset:{x:-.5,y:0,z:0}},2:{width:"125px",height:"225px",translate:{x:.25,y:0,z:-.25*Math.tan(72*(Math.PI/180))},rotation:{x:0,y:0,z:0},offset:{x:-.25,y:0,z:0}}}},render:I};var ue,ce,de;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(de=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,fe;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />, <img key="3" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(fe=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,ge,ye;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={squareJpgSrc} alt="Sample Square" />, <img key="3" src={squareJpgSrc} alt="Sample Square" />, <img key="4" src={squareJpgSrc} alt="Sample Square" />, <img key="5" src={squareJpgSrc} alt="Sample Square" />]
  },
  render: defaultRender
}`,...(ye=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Se,xe,ve;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(ve=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var we,be,ze;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    width: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(ze=(be=X.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var qe,Ie,Ce;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    containerHeight: '500px',
    width: '350px',
    height: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(Ce=(Ie=Y.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Ee,ke,Me;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    containerHeight: '450px',
    width: 'auto',
    height: 'auto',
    items: [<img key="1" src={squareJpgSrc} alt="Sample Square" />, <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />, <img key="3" src={wideJpgSrc} alt="Sample Wide" />]
  },
  render: defaultRender
}`,...(Me=(ke=G.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Te,_e,Re;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Re=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var De,Ve,Ae;Z.parameters={...Z.parameters,docs:{...(De=Z.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
        rotation: {
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
        rotation: {
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
        rotation: {
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
        rotation: {
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
        rotation: {
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
        rotation: {
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
}`,...(Ae=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};const It=["DefaultTwo","DefaultThree","DefaultFive","VariousSize","AutoWidth","AutoHeight","AutoWidthHeight","VariousItem","CustomLayoutWithChildren"];export{Y as AutoHeight,X as AutoWidth,G as AutoWidthHeight,Z as CustomLayoutWithChildren,j as DefaultFive,W as DefaultThree,O as DefaultTwo,B as VariousItem,U as VariousSize,It as __namedExportsOrder,qt as default};
