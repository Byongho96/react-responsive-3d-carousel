"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[301],{3476:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"basic-props/carousel/3d-features","title":"3D Features","description":"The carousel\'s 3D features provide powerful customization options to create a unique, visually engaging experience. Use the following properties to adjust depth, layout, and overall visual perspective.","source":"@site/docs/basic-props/carousel/3d-features.md","sourceDirName":"basic-props/carousel","slug":"/basic-props/carousel/3d-features","permalink":"/react-responsive-3d-carousel/basic-props/carousel/3d-features","draft":false,"unlisted":false,"editUrl":"https://github.com/Byongho96/react-responsive-3d-carousel/docs/docs/basic-props/carousel/3d-features.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"2D Features","permalink":"/react-responsive-3d-carousel/basic-props/carousel/2d-features"},"next":{"title":"Transition","permalink":"/react-responsive-3d-carousel/basic-props/carousel/transition"}}');var t=n(4848),i=n(8453);const l={sidebar_position:2},o="3D Features",a={},c=[{value:"perspective",id:"perspective",level:2},{value:"perspectiveOrigin",id:"perspectiveorigin",level:2},{value:"layout",id:"layout",level:2},{value:"defaultOption",id:"defaultoption",level:2},{value:".numOfSlides",id:"numofslides",level:3},{value:".widthFactor",id:"widthfactor",level:3},{value:".depthFactor",id:"depthfactor",level:3},{value:".angleFactor",id:"anglefactor",level:3},{value:"children",id:"children",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"3d-features",children:"3D Features"})}),"\n",(0,t.jsx)(s.p,{children:"The carousel's 3D features provide powerful customization options to create a unique, visually engaging experience. Use the following properties to adjust depth, layout, and overall visual perspective."}),"\n",(0,t.jsx)(s.h2,{id:"perspective",children:"perspective"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"'auto'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defines the distance from the viewer's point of view to the carousel, similar to the ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",children:"CSS perspective"})," property. A smaller value increases the depth, making items appear larger in the positive Z-axis and smaller in the negative Z-axis. Conversely, a larger value minimizes the depth effect."]}),"\n",(0,t.jsxs)(s.p,{children:["When set to ",(0,t.jsx)(s.code,{children:"'auto'"}),", perspective adjusts proportionally to the container's width."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel perspective='auto' /> \n"})}),"\n",(0,t.jsx)(s.h2,{id:"perspectiveorigin",children:"perspectiveOrigin"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"'center'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Sets the origin point from which the viewer observes the carousel, following the ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin",children:"CSS perspective-origin"})," property."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel perspectiveOrigin='center' /> \n"})}),"\n",(0,t.jsx)(s.h2,{id:"layout",children:"layout"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"'default'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"'default' | CarouselLayoutInfo"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When set to ",(0,t.jsx)(s.code,{children:"'default'"}),", the carousel uses the standard layout, which can be adjusted further with defaultOption."]}),"\n",(0,t.jsxs)(s.p,{children:["For advanced control, use ",(0,t.jsx)(s.code,{children:"CarouselLayoutInfo"})," to set custom placement for each item. For detailed guidance, see ",(0,t.jsx)(s.a,{href:"../../advanced-api/custom-layout",children:"Custom Layout"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"defaultoption",children:"defaultOption"}),"\n",(0,t.jsxs)(s.p,{children:["Applies when layout is set to ",(0,t.jsx)(s.code,{children:"'default'"}),". Customize the carousel's appearance with the following properties:"]}),"\n",(0,t.jsx)(s.h3,{id:"numofslides",children:".numOfSlides"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"'auto'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"'auto' | 2 | 3 | 5"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Sets the number of visible slides. When set to ",(0,t.jsx)(s.code,{children:"'auto'"}),", the carousel displays 2, 3, or 5 slides based on the item count. Set a fixed number to maintain a consistent slide count."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel defaultOption={{ numOfSlides: 'auto' }} /> \n"})}),"\n",(0,t.jsx)(s.h3,{id:"widthfactor",children:".widthFactor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"1"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Controls the horizontal width of the carousel. Smaller values narrow the carousel, while larger values make it wider."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel defaultOption={{ widthFactor: 1 }} /> \n"})}),"\n",(0,t.jsx)(s.h3,{id:"depthfactor",children:".depthFactor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"1"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Adjusts the spacing between items along the Z-axis. Smaller values reduce spacing, creating a compact look, while larger values increase the spacing."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel defaultOption={{ depthFactor: 1 }} /> \n"})}),"\n",(0,t.jsx)(s.h3,{id:"anglefactor",children:".angleFactor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"1"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Sets the rotation angle of items in the carousel. Multiply this factor to adjust the angle, where smaller values create a subtle rotation and larger values increase the rotation."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel defaultOption={{ angleFactor: 1 }} /> \n"})}),"\n",(0,t.jsx)(s.h2,{id:"children",children:"children"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type"})," : ",(0,t.jsx)(s.code,{children:"ReactNode | ReactNode[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default"})," : ",(0,t.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"children"})," prop lets you add additional elements to the 3D space outside the carousel items. These elements remain stationary as the carousel rotates. Position elements freely using ",(0,t.jsx)(s.code,{children:"translate3d"})," to create layouts with added depth and dimension."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel>\n  <div style={{\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    transform: 'translate3d(-50%, -50%, -10px)',\n    padding: '2em',\n    borderRadius: '50%',\n    backgroundColor: 'pink',\n    color: 'white',\n    fontWeight: 'bold',\n  }}>Peek A Boo</div>\n</Carousel> \n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var r=n(6540);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);