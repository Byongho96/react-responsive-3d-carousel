"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[924],{1157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>q,default:()=>E,frontMatter:()=>V,metadata:()=>a,toc:()=>N});const a=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"To use React Responsive 3D Carousel in your project, follow the simple installation steps below. This guide covers multiple installation options, compatibility with different package managers, and basic usage examples to help you get started quickly.","source":"@site/docs/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/react-responsive-3d-carousel/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Byongho96/react-responsive-3d-carousel/docs/docs/getting-started/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/react-responsive-3d-carousel/getting-started"},"next":{"title":"Simple Carousel","permalink":"/react-responsive-3d-carousel/getting-started/simple-carousel"}}');var r=n(4848),s=n(8453),l=n(6540),i=n(4164),o=n(3104),u=n(6347),c=n(205),d=n(7485),p=n(1682),h=n(679);function m(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,p.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=b(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,u]=g({queryString:n,groupId:a}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,h.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),m=(()=>{const e=o??d;return f({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var x=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==a&&(c(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=v(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,r.jsx)(j,{...t,...e}),(0,r.jsx)(w,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,r.jsx)(I,{...e,children:m(e.children)},String(t))}const C={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(C.tabItem,a),hidden:n,children:t})}const V={sidebar_position:1},q="Installation",T={},N=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation-1",level:2},{value:"Basic Usage",id:"basic-usage",level:2}];function A(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsx)(t.p,{children:"To use React Responsive 3D Carousel in your project, follow the simple installation steps below. This guide covers multiple installation options, compatibility with different package managers, and basic usage examples to help you get started quickly."}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure you have React installed in your project, as this library requires ",(0,r.jsx)(t.strong,{children:"React 17 or later"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installation-1",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"You can install the library with the following command:"}),"\n","\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(S,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install react-responsive-3d-carousel\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add react-responsive-3d-carousel\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(t.p,{children:"After installing the library, you can start using the 3D Carousel component in your project. Here's a quick example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import React from \'react\';\nimport { Carousel } from \'react-responsive-3d-carousel\';\nimport \'react-responsive-3d-carousel/dist/styles.css\';  \n\n// Can be any JSX.Element tag\nconst items = [\n  <img src="image1.jpg" alt="Image 1" />,\n  <video src="video1.mp4" autoPlay />,\n  <div>Custom Content 1</div>,\n];\n\nfunction App() {\n  return (\n    <div className="App">\n      <Carousel\n        items={items}\n        startIndex={0}\n        onChange={(currentIndex) => console.log(currentIndex)}\n      />\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"It is important to import the provided CSS styles to ensure the carousel is displayed correctly."})}),"\n",(0,r.jsx)(t.admonition,{title:"Bundled Version",type:"tip",children:(0,r.jsxs)(t.p,{children:["If you prefer a fully bundled version that includes CSS and JavaScript. Use this:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"import 'react-responsive-3d-carousel/dist/index.esm.min.js';"})]})})]})}function E(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);