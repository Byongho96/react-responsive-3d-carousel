import{j as i,a as k}from"./jsx-runtime-78eee2bc.js";import{r as A}from"./index-8b3efc3f.js";import{I as R,v as j}from"./preview-errors-dde4324f.js";import{I as C}from"./Indicators-97ad76a6.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",P=`${B}/action-event`,L={depth:10,clearOnStoryChange:!0,limit:50},v=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:v(t,n)},T=e=>!!(typeof e=="object"&&e&&v(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),V=e=>{if(T(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?j():Date.now().toString(36)+Math.random().toString(36).substring(2);function W(e,n={}){let t={...L,...n},r=function(...l){var p,u;if(n.implicit){let h=(p="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(h){let s=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),m=new R({phase:h.phase,name:e,deprecated:s});if(s)console.warn(m);else throw m}}let a=S.getChannel(),D=M(),w=5,d=l.map(V),E=l.length>1?d:d[0],b={id:D,count:0,data:{name:e,args:E},options:{...t,maxDepth:w+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(P,b)};return r.isAction=!0,r}const $={title:"Components/Indicators",component:C,argTypes:{length:{control:{type:"number",min:1}},curIndex:{table:{disable:!0}},onClick:{table:{disable:!0}}},decorators:[e=>i("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},children:i(e,{})})]},o={args:{length:5,translate:["0px","0px"]},render:e=>{const[n,t]=A.useState(0);return i(C,{...e,curIndex:n,onClick:(l,a)=>{W("onClick")(a),t(a)}})}},c={args:{...o.args,width:"1rem",height:"1rem",indicatorIcon:k("svg",{preserveAspectRatio:"none",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),i("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),i("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})},render:o.render};var y,f,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    length: 5,
    translate: ['0px', '0px']
  },
  render: args => {
    const [curIndex, setCurIndex] = useState(0);
    const handleClick = (_: React.MouseEvent, index: number) => {
      action('onClick')(index);
      setCurIndex(index);
    };
    return <Indicators {...args} curIndex={curIndex} onClick={handleClick} // 클릭 시 curIndex 업데이트
    />;
  }
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var _,x,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: '1rem',
    height: '1rem',
    indicatorIcon: <svg preserveAspectRatio="none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
  },
  render: Default.render
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const G=["Default","CustomIcon"];export{c as CustomIcon,o as Default,G as __namedExportsOrder,$ as default};
