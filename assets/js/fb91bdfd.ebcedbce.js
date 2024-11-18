"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[357],{5392:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"basic-props/carousel/interaction","title":"Interaction","description":"Customize user interaction settings for the carousel, including focus, hover, and swipe behaviors.","source":"@site/docs/basic-props/carousel/interaction.md","sourceDirName":"basic-props/carousel","slug":"/basic-props/carousel/interaction","permalink":"/react-responsive-3d-carousel/basic-props/carousel/interaction","draft":false,"unlisted":false,"editUrl":"https://github.com/Byongho96/react-responsive-3d-carousel/docs/docs/basic-props/carousel/interaction.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Transition","permalink":"/react-responsive-3d-carousel/basic-props/carousel/transition"},"next":{"title":"Callbacks","permalink":"/react-responsive-3d-carousel/basic-props/carousel/callbacks"}}');var l=s(4848),r=s(8453);const o={sidebar_position:4},c="Interaction",t={},a=[{value:"focusOnSelect",id:"focusonselect",level:2},{value:"pauseOnHover",id:"pauseonhover",level:2},{value:"pauseOnTransition",id:"pauseontransition",level:2},{value:"autoFocus",id:"autofocus",level:2},{value:"slideWithKeyboard",id:"slidewithkeyboard",level:2},{value:"swipeable",id:"swipeable",level:2},{value:"swipeDirection",id:"swipedirection",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"interaction",children:"Interaction"})}),"\n",(0,l.jsx)(n.p,{children:"Customize user interaction settings for the carousel, including focus, hover, and swipe behaviors."}),"\n",(0,l.jsx)(n.h2,{id:"focusonselect",children:"focusOnSelect"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"true"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Determines whether clicking on a carousel item sets it as the currently active item in the carousel."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel focusOnSelect={true} /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"pauseonhover",children:"pauseOnHover"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"true"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Pauses auto-play when hovering over a carousel item."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel pauseOnHover={true} /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"pauseontransition",children:"pauseOnTransition"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"both"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"none | size | transform | both"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Determines when sliding is allowed based on the completion of transition animations."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'none'"}),": No restrictions; sliding is always allowed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'size'"}),": Sliding is allowed after both width and height transitions are completed (",(0,l.jsx)(n.code,{children:"sizeDuration"}),")."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'transform'"}),": Sliding is allowed after the transform transition is completed (",(0,l.jsx)(n.code,{children:"transformDuration"}),")."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'both'"}),": Sliding is allowed only after both size and transform transitions are completed."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel pauseOnTransition={'both'} /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"autofocus",children:"autoFocus"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Specifies whether the carousel should automatically receive focus when it loads."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel autoFocus={false} /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"slidewithkeyboard",children:"slideWithKeyboard"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"'horizontal'"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"'none' | 'horizontal' | 'vertical' | 'both'"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Allows navigation through slides using the keyboard when the carousel is focused."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'none'"})," : Disables keyboard navigation."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'horizontal'"})," : Uses ",(0,l.jsx)("kbd",{children:"Left"})," and ",(0,l.jsx)("kbd",{children:"Right"})," keys to navigate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'vertical'"})," : Uses ",(0,l.jsx)("kbd",{children:"Up"})," and ",(0,l.jsx)("kbd",{children:"Down"})," keys to navigate."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'both'"})," : Enables navigation with ",(0,l.jsx)("kbd",{children:"Left"}),", ",(0,l.jsx)("kbd",{children:"Right"}),", ",(0,l.jsx)("kbd",{children:"Up"}),", and ",(0,l.jsx)("kbd",{children:"Down"})," keys."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel slideWithKeyboard='horizontal' /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"swipeable",children:"swipeable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"true"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Enables swipe gestures for navigating slides on touch devices."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel swipeable={true} /> \n"})}),"\n",(0,l.jsx)(n.h2,{id:"swipedirection",children:"swipeDirection"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default"})," : ",(0,l.jsx)(n.code,{children:"'horizontal'"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type"})," : ",(0,l.jsx)(n.code,{children:"'horizontal' | 'vertical'"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Valid only when ",(0,l.jsx)(n.code,{children:"swipeable"})," is enabled. Specifies the swipe direction."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'horizontal'"})," : Allows left and right swipe gestures."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"'vertical'"})," : Allows up and down swipe gestures."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"<Carousel swipeable={true} swipeDirection='horizontal' /> \n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);