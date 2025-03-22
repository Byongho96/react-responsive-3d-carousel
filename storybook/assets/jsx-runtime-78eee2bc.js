import{r as l}from"./index-8b3efc3f.js";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,a=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,c=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function x(t,r,p){var e,o={},n=null,_=null;p!==void 0&&(n=""+p),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)y.call(r,e)&&!j.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:a,type:t,key:n,ref:_,props:o,_owner:c.current}}s.Fragment=m;s.jsx=x;s.jsxs=x;f.exports=s;var i=f.exports;const d=i.jsx,E=i.jsxs;export{E as a,d as j};
