(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{Ifh9:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),o=n.n(i),c=n("O94r"),l=n.n(c),s=n("hsl+"),u=n.n(s),f=n("JmwF"),d=n("rkTo"),m=n("nNND"),p=n("HlJr"),y=n("tZ4l"),h=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.scale,c=e.width,s=e.stroke,x=void 0===s?"#eaf0f6":s,j=e.strokeWidth,b=void 0===j?1:j,O=e.strokeDasharray,k=e.className,g=e.children,w=e.numTicks,T=void 0===w?10:w,E=e.lineStyle,S=e.offset,N=e.tickValues,C=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,h),V=null!=N?N:Object(m.a)(i,T),F=(null!=S?S:0)+Object(y.a)(i)/2,P=V.map((function(e,t){var n,a=(null!=(n=Object(p.a)(i(e)))?n:0)+F;return{index:t,from:new d.a({x:0,y:a}),to:new d.a({x:c,y:a})}}));return o.a.createElement(f.a,{className:l()("visx-rows",k),top:n,left:r},g?g({lines:P}):P.map((function(e){var t=e.from,n=e.to,a=e.index;return o.a.createElement(u.a,v({key:"row-line-"+a,from:t,to:n,stroke:x,strokeWidth:b,strokeDasharray:O,style:E},C))})))}x.propTypes={tickValues:r.a.array,width:r.a.number.isRequired}},"Soe+":function(e){e.exports=JSON.parse('{"name":"@visx/demo-axis","description":"Standalone axis demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-time-format":"2.1.1","@types/react":"^18","@types/react-dom":"^18","@visx/axis":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/react-spring":"latest","@visx/responsive":"latest","@visx/shape":"latest","@visx/scale":"latest","d3-time-format":"^2.2.3","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","react-spring":"^9.2.0","typescript":"^3"},"keywords":["axis","scales","visualization","d3","react","visx"]}')},eMuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),o=n.n(i),c=n("O94r"),l=n.n(c),s=n("hsl+"),u=n.n(s),f=n("JmwF"),d=n("rkTo"),m=n("nNND"),p=n("HlJr"),y=n("tZ4l"),h=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.scale,c=e.height,s=e.stroke,x=void 0===s?"#eaf0f6":s,j=e.strokeWidth,b=void 0===j?1:j,O=e.strokeDasharray,k=e.className,g=e.numTicks,w=void 0===g?10:g,T=e.lineStyle,E=e.offset,S=e.tickValues,N=e.children,C=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,h),V=null!=S?S:Object(m.a)(i,w),F=(null!=E?E:0)+Object(y.a)(i)/2,P=V.map((function(e,t){var n,a=(null!=(n=Object(p.a)(i(e)))?n:0)+F;return{index:t,from:new d.a({x:a,y:0}),to:new d.a({x:a,y:c})}}));return o.a.createElement(f.a,{className:l()("visx-columns",k),top:n,left:r},N?N({lines:P}):P.map((function(e){var t=e.from,n=e.to,a=e.index;return o.a.createElement(u.a,v({key:"column-line-"+a,from:t,to:n,stroke:x,strokeWidth:b,strokeDasharray:O,style:T},C))})))}x.propTypes={tickValues:r.a.array,height:r.a.number.isRequired}},ewQP:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.x,n=e.x0,l=e.x1,u=e.y,f=e.y1,d=e.y0,m=e.yScale,p=e.data,y=void 0===p?[]:p,h=e.defined,v=void 0===h?function(){return!0}:h,x=e.className,j=e.curve,b=e.innerRef,O=e.children,k=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,c),g=(0,o.area)({x:t,x0:n,x1:l,defined:v,curve:j});null==d?g.y0(m.range()[0]):(0,i.default)(g.y0,d);u&&!f&&(0,i.default)(g.y1,u);f&&!u&&(0,i.default)(g.y1,f);return O?a.default.createElement(a.default.Fragment,null,O({path:g})):a.default.createElement("path",s({ref:b,className:(0,r.default)("visx-area-closed",x),d:g(y)||""},k))};var a=l(n("ERkP")),r=l(n("O94r")),i=l(n("Fo22")),o=n("m2mA"),c=["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"];function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},gnM9:function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"c",(function(){return ee})),n.d(t,"b",(function(){return le}));var a=n("fGyu"),r=n("jg1C"),i=n("ERkP"),o=n.n(i),c=n("ewQP"),l=n.n(c),s=n("EbDF"),u=n("HlJr"),f=n("67po"),d=n("cc+0"),m=n("o/Mo"),p=n("i2hO"),y=n("5Nbk"),h=n("pn27"),v=n("Ifh9"),x=n("eMuC"),j=n("aWzz"),b=n.n(j),O=n("XDdH"),k=n.n(O),g=n("0yf5"),w=n("O94r"),T=n.n(w),E=n("uJnh"),S=n.n(E),N=n("O3m4");function C(e,t,n,a,r){var i;switch(e){case"center":return r;case"min":return null!=n?n:0;case"max":return null!=a?a:0;case"outside":default:return null!=(i=(null!=t?t:0)<r?n:a)?i:0}}function V(e){var t=e.from,n=e.to;return{fromX:t.x,toX:n.x,fromY:t.y,toY:n.y,opacity:1}}function F(e){var t=e.scale,n=e.animateXOrY,a=e.animationTrajectory,r=void 0===a?"outside":a,o="x"===n;return Object(i.useMemo)((function(){var e=t.range().map(u.a),n=e[0],a=e[1],i=null!=a&&null!=n&&a<n?[a,n]:[n,a],c=i[0],l=i[1],s=null!=a&&null!=n?Math.abs(a-n):0,f=(null!=c?c:0)+s/2,d=r;o||"min"!==r||(d="max"),o||"max"!==r||(d="min");var m=function(e){var t=e.from,n=e.to;return{fromX:o?C(d,t.x,c,l,f):t.x,toX:o?C(d,t.x,c,l,f):n.x,fromY:o?t.y:C(d,t.y,c,l,f),toY:o?n.y:C(d,t.y,c,l,f),opacity:0}};return{from:m,leave:m,enter:V,update:V}}),[t,o,r])}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e){var t=e.hideTicks,n=e.horizontal,a=e.orientation,r=e.scale,i=e.tickClassName,c=e.tickComponent,l=e.tickLabelProps,s=e.tickStroke,u=void 0===s?"#222":s,f=e.tickTransform,d=e.ticks,m=e.tickLineProps,p=e.animationTrajectory,y=Object(g.useTransition)(d,P({},F({scale:r,animateXOrY:n?"x":"y",animationTrajectory:p}),{keys:function(e){return"tick-"+e.value+"-"+e.index}}));return o.a.createElement(o.a.Fragment,null,y((function(e,n,r,s){var d,p,y=e.fromX,h=e.toX,v=e.fromY,x=e.toY,j=e.opacity,b=r.key,O=null!=(d=null!=(p=l[s])?p:l[0])?d:{};return null==n||null==b?null:o.a.createElement(g.animated.g,{key:b,className:T()("visx-axis-tick",i),transform:f},!t&&o.a.createElement(g.animated.line,P({x1:y,x2:h,y1:v,y2:x,stroke:u,strokeLinecap:"square",strokeOpacity:j},m)),o.a.createElement(g.animated.g,{key:s,transform:Object(g.to)([h,x],(function(e,t){var n;return"translate("+e+","+(t+(a===S.a.bottom&&"number"===typeof O.fontSize?null!=(n=O.fontSize)?n:10:0))+")"})),opacity:j},c?c(P({},O,{x:h,y:x,formattedValue:null==n?void 0:n.formattedValue})):o.a.createElement(N.a,O,null==n?void 0:n.formattedValue)))})))}var Y=["animationTrajectory","tickComponent"];function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e){var t=e.animationTrajectory,n=e.tickComponent,a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,Y),r=Object(i.useMemo)((function(){return function(e){return o.a.createElement(X,_({},e,{tickComponent:n,animationTrajectory:t}))}}),[t,n]);return o.a.createElement(k.a,_({},a,{ticksComponent:r}))}var z=n("0XzA"),D=n.n(z),R=["scale","lines","animationTrajectory","animateXOrY","lineKey","lineStyle"];function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e){var t=e.scale,n=e.lines,a=e.animationTrajectory,r=e.animateXOrY,i=e.lineKey,c=e.lineStyle,l=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,R),s=Object(g.useTransition)(n,J({},F({scale:t,animateXOrY:r,animationTrajectory:a}),{key:i}));return o.a.createElement(o.a.Fragment,null,s((function(e,t,n){var a=e.fromX,r=e.toX,i=e.fromY,s=e.toY,u=e.opacity,f=n.key;return o.a.createElement(g.animated.line,J({key:f,x1:a,x2:r,y1:i,y2:s,strokeOpacity:u,style:c},l))})))}W.propTypes={lineKey:b.a.func.isRequired};var A=["scale","width","numTicks","tickValues","offset","className","animationTrajectory","top","left"];function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e){var t=e.scale,n=e.width,a=e.numTicks,r=e.tickValues,i=(e.offset,e.className),c=e.animationTrajectory,l=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,A);return o.a.createElement(D.a,{scale:t,width:n,numTicks:a,tickValues:r,className:i,top:l,left:s},(function(e){var n=e.lines;return o.a.createElement(W,q({scale:t,lines:n,animationTrajectory:c,animateXOrY:"y",lineKey:function(e){var t,n;return"row-"+(null!=(t=null==e||null==(n=e.from)?void 0:n.y)?t:"")+"-"+e.index}},u))}))}var I=n("mv6+"),L=n.n(I),H=["scale","height","numTicks","tickValues","offset","className","animationTrajectory","top","left"];function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e){var t=e.scale,n=e.height,a=e.numTicks,r=e.tickValues,i=(e.offset,e.className),c=e.animationTrajectory,l=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,H);return o.a.createElement(L.a,{scale:t,height:n,numTicks:a,tickValues:r,className:i,top:l,left:s},(function(e){var n=e.lines;return o.a.createElement(W,Z({scale:t,lines:n,animationTrajectory:c,animateXOrY:"x",lineKey:function(e){var t,n;return"column-"+(null!=(t=null==e||null==(n=e.from)?void 0:n.x)?t:"")+"-"+e.index}},u))}))}var Q=n("201w"),G=n("Cf/J"),U=n("mHfT"),$="#da7cff",ee="#340098",te=Object(Q.a)(.5),ne=40,ae=150,re=20,ie=50,oe=function(){return{fill:"#fff",fontSize:12,fontFamily:"sans-serif",textAnchor:"middle"}},ce=function(e){var t=e.map(u.a);return[Math.min.apply(Math,Object(a.a)(t)),Math.max.apply(Math,Object(a.a)(t))]};function le(e){var t=e.width,n=void 0===t?800:t,a=e.height,o=void 0===a?800:a,c=e.showControls,u=void 0===c||c,j=window.matchMedia("(prefers-reduced-motion: reduce)"),b=!j||!!j.matches,O=Object(i.useState)(!b),k=O[0],g=O[1],w=n-ie-ae,T=o-ne-re,E=Object(i.useState)(!0),S=E[0],N=E[1],C=Object(i.useState)("center"),V=C[0],F=C[1],P=k?M:y.a,X=k?K:v.a,Y=k?B:x.a,_=Object(i.useMemo)((function(){var e=S?[0,2,4,6,8,10]:[6,8,10,12],t=S?["a","b","c","d"]:["d","c","b","a"],n=S?[new Date("2020-01-01"),new Date("2020-02-01")]:[new Date("2020-02-01"),new Date("2020-03-01")],a=S?[1,10,100,1e3,1e4]:[1e-4,.001,.1,1,10,100];return[{scale:Object(f.a)({domain:ce(e),range:[0,w]}),values:e,tickFormat:function(e,t,n){return 0===t?"first":t===n[n.length-1].index?"last":"".concat(e)},label:"linear"},{scale:Object(d.a)({domain:t,range:[0,w],paddingOuter:0,paddingInner:1}),values:t,tickFormat:function(e){return e},label:"categories"},{scale:Object(m.a)({domain:ce(n),range:[0,w]}),values:n,tickFormat:function(e,t){return 3===t?"\ud83c\udf89":w>400||t%2===0?Object(U.a)("%b %d")(e):""},label:"time"},{scale:Object(p.a)({domain:ce(a),range:[0,w]}),values:a,tickFormat:function(e){var t="".concat(e);return t.match(/^[.01?[\]]*$/)?t:""},label:"log"}]}),[S,w]);if(w<10)return null;var z=T/_.length-40,D=Object(f.a)({domain:[100,0],range:[z,0]});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("svg",{width:n,height:o,children:[Object(r.jsx)(G.a,{id:"visx-axis-gradient",from:$,to:$,toOpacity:.5}),Object(r.jsx)("rect",{x:0,y:0,width:n,height:o,fill:"url(#visx-axis-gradient)",rx:14}),Object(r.jsx)("g",{transform:"translate(".concat(ie,",").concat(ne,")"),children:_.map((function(e,t){var n=e.scale,a=e.values,i=e.label,o=e.tickFormat;return Object(r.jsxs)("g",{transform:"translate(0, ".concat(t*(z+40),")"),children:[Object(r.jsx)(X,{scale:D,stroke:"#6e0fca",width:w,numTicks:S?1:3,animationTrajectory:V},"gridrows-".concat(V)),Object(r.jsx)(Y,{scale:n,stroke:"#6e0fca",height:z,numTicks:S?5:2,animationTrajectory:V},"gridcolumns-".concat(V)),Object(r.jsx)(l.a,{data:a.map((function(e){var t;return[(null!==(t=n(e))&&void 0!==t?t:0)+("bandwidth"in n&&"undefined"!==typeof n.bandwidth?n.bandwidth()/2:0),D(10+90*te())]})),yScale:D,curve:s.a,fill:"#6e0fca",fillOpacity:.2}),Object(r.jsx)(P,{orientation:h.a.bottom,top:z,scale:n,tickFormat:o,stroke:"#fff",tickStroke:"#fff",tickLabelProps:oe,tickValues:"log"===i||"time"===i?void 0:a,numTicks:"time"===i?6:void 0,label:i,labelProps:{x:w+30,y:-10,fill:ee,fontSize:18,strokeWidth:0,stroke:"#fff",paintOrder:"stroke",fontFamily:"sans-serif",textAnchor:"start"},animationTrajectory:V},"axis-".concat(V))]},"scale-".concat(t))}))})]}),u&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{fontSize:12},children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(){return g(!k)},checked:k})," ","enable animation"]}),"\xa0\xa0\xa0",k&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("strong",{children:"animation trajectory"}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",onChange:function(){return F("outside")},checked:"outside"===V})," ","outside"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",onChange:function(){return F("center")},checked:"center"===V})," ","center"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",onChange:function(){return F("min")},checked:"min"===V})," ","min"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",onChange:function(){return F("max")},checked:"max"===V})," ","max"]})]})]}),k&&Object(r.jsx)("button",{onClick:function(){return N(!S)},children:"Update scales"})]})]})}try{le.displayName="Example",le.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-axis/Example.tsx#Example"]={docgenInfo:le.__docgenInfo,name:"Example",path:"src/sandboxes/visx-axis/Example.tsx#Example"})}catch(se){}},tZ4l:function(e,t,n){"use strict";function a(e){return"bandwidth"in e?e.bandwidth():0}n.d(t,"a",(function(){return a}))}}]);