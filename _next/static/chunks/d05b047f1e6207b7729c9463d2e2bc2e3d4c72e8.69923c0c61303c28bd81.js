(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{E5FE:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),l={source:{x:0,y:0},target:{x:0,y:0}};function s(e){var t=e.link,n=void 0===t?l:t;return o.a.createElement("line",{x1:n.source.x,y1:n.source.y,x2:n.target.x,y2:n.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6})}s.propTypes={link:i.a.shape({source:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired,target:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired}).isRequired})}},LdV1:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),l=n("O94r"),s=n.n(l),c=n("JmwF"),u=n("YOo5"),d=n("E5FE"),p=n("+H8D");function m(e){var t=e.top,n=e.left,r=e.className,i=e.root,a=e.size,l=e.nodeSize,m=e.separation,h=e.children,f=e.linkComponent,y=void 0===f?d.a:f,x=e.nodeComponent,b=void 0===x?p.a:x,v=Object(u.a)();a&&v.size(a),l&&v.nodeSize(l),m&&v.separation(m);var g=v(i);return h?o.a.createElement(o.a.Fragment,null,h(g)):o.a.createElement(c.a,{top:t,left:n,className:s()("visx-tree",r)},y&&g.links().map((function(e,t){return o.a.createElement(c.a,{key:"tree-link-"+t},o.a.createElement(y,{link:e}))})),b&&g.descendants().map((function(e,t){return o.a.createElement(c.a,{key:"tree-node-"+t},o.a.createElement(b,{node:e}))})))}m.propTypes={children:i.a.func,top:i.a.number,left:i.a.number,className:i.a.string,separation:i.a.func}},RZis:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n("zygG"),i=n("jg1C"),a=n("ERkP"),o=n("JmwF"),l=n("LdV1"),s=n("tshL"),c=n("Cf/J"),u=n("oT78");var d={fontSize:10};function p(e){var t=e.layout,n=e.orientation,r=e.linkType,a=e.stepPercent,o=e.setLayout,l=e.setOrientation,s=e.setLinkType,c=e.setStepPercent;return Object(i.jsxs)("div",{style:d,children:[Object(i.jsx)("label",{children:"layout:"}),"\xa0",Object(i.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return o(e.target.value)},value:t,children:[Object(i.jsx)("option",{value:"cartesian",children:"cartesian"}),Object(i.jsx)("option",{value:"polar",children:"polar"})]}),"\xa0\xa0",Object(i.jsx)("label",{children:"orientation:"}),"\xa0",Object(i.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return l(e.target.value)},value:n,disabled:"polar"===t,children:[Object(i.jsx)("option",{value:"vertical",children:"vertical"}),Object(i.jsx)("option",{value:"horizontal",children:"horizontal"})]}),"\xa0\xa0",Object(i.jsx)("label",{children:"link:"}),"\xa0",Object(i.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return s(e.target.value)},value:r,children:[Object(i.jsx)("option",{value:"diagonal",children:"diagonal"}),Object(i.jsx)("option",{value:"step",children:"step"}),Object(i.jsx)("option",{value:"curve",children:"curve"}),Object(i.jsx)("option",{value:"line",children:"line"})]}),"step"===r&&"polar"!==t&&Object(i.jsxs)(i.Fragment,{children:["\xa0\xa0",Object(i.jsx)("label",{children:"step:"}),"\xa0",Object(i.jsx)("input",{onClick:function(e){return e.stopPropagation()},type:"range",min:0,max:1,step:.1,onChange:function(e){return c(Number(e.target.value))},value:a,disabled:"step"!==r||"polar"===t})]})]})}try{p.displayName="LinkControls",p.__docgenInfo={description:"",displayName:"LinkControls",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"string"}},linkType:{defaultValue:null,description:"",name:"linkType",required:!0,type:{name:"string"}},stepPercent:{defaultValue:null,description:"",name:"stepPercent",required:!0,type:{name:"number"}},setLayout:{defaultValue:null,description:"",name:"setLayout",required:!0,type:{name:"(layout: string) => void"}},setOrientation:{defaultValue:null,description:"",name:"setOrientation",required:!0,type:{name:"(orientation: string) => void"}},setLinkType:{defaultValue:null,description:"",name:"setLinkType",required:!0,type:{name:"(linkType: string) => void"}},setStepPercent:{defaultValue:null,description:"",name:"setStepPercent",required:!0,type:{name:"(percent: number) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-linktypes/LinkControls.tsx#LinkControls"]={docgenInfo:p.__docgenInfo,name:"LinkControls",path:"src/sandboxes/visx-linktypes/LinkControls.tsx#LinkControls"})}catch(L){}var m=n("lgKO"),h=n("SOfz"),f=n("rhrq"),y=n("kSI0"),x=n("/7Bi"),b=n("ObRn"),v=n("XXu9"),g=n("L/jp"),j=n("zS1Q"),O=n("O+rU"),k=n("jDGj"),S=n("RpX9");function E(e){var t=e.layout,n=e.linkType,r=e.orientation;return"polar"===t?"step"===n?m.a:"curve"===n?h.a:"line"===n?f.a:y.a:"vertical"===r?"step"===n?x.a:"curve"===n?b.a:"line"===n?v.a:g.a:"step"===n?j.a:"curve"===n?O.a:"line"===n?k.a:S.a}try{E.displayName="getLinkComponent",E.__docgenInfo={description:"",displayName:"getLinkComponent",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"string"}},linkType:{defaultValue:null,description:"",name:"linkType",required:!0,type:{name:"string"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-linktypes/getLinkComponent.ts#getLinkComponent"]={docgenInfo:E.__docgenInfo,name:"getLinkComponent",path:"src/sandboxes/visx-linktypes/getLinkComponent.ts#getLinkComponent"})}catch(L){}var C={name:"T",children:[{name:"A",children:[{name:"A1"},{name:"A2"},{name:"A3"},{name:"C",children:[{name:"C1"},{name:"D",children:[{name:"D1"},{name:"D2"},{name:"D3"}]}]}]},{name:"Z"},{name:"B",children:[{name:"B1"},{name:"B2"},{name:"B3"}]}]},_={top:30,left:30,right:30,bottom:70};function z(e){var t,n,d,m=e.width,h=e.height,f=e.margin,y=void 0===f?_:f,x=Object(a.useState)("cartesian"),b=x[0],v=x[1],g=Object(a.useState)("horizontal"),j=g[0],O=g[1],k=Object(a.useState)("diagonal"),S=k[0],z=k[1],L=Object(a.useState)(.5),T=L[0],A=L[1],R=function(){var e=Object(a.useState)(0)[1];return function(){return e((function(e){return e+1}))}}(),w=m-y.left-y.right,q=h-y.top-y.bottom;"polar"===b?(t={x:w/2,y:q/2},n=2*Math.PI,d=Math.min(w,q)/2):(t={x:0,y:0},"vertical"===j?(n=w,d=q):(n=q,d=w));var P=E({layout:b,linkType:S,orientation:j});return m<10?null:Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{layout:b,orientation:j,linkType:S,stepPercent:T,setLayout:v,setOrientation:O,setLinkType:z,setStepPercent:A}),Object(i.jsxs)("svg",{width:m,height:h,children:[Object(i.jsx)(c.a,{id:"links-gradient",from:"#fd9b93",to:"#fe6e9e"}),Object(i.jsx)("rect",{width:m,height:h,rx:14,fill:"#272b4d"}),Object(i.jsx)(o.a,{top:y.top,left:y.left,children:Object(i.jsx)(l.a,{root:Object(s.c)(C,(function(e){return e.isExpanded?null:e.children})),size:[n,d],separation:function(e,t){return(e.parent===t.parent?1:.5)/e.depth},children:function(e){return Object(i.jsxs)(o.a,{top:t.y,left:t.x,children:[e.links().map((function(e,t){return Object(i.jsx)(P,{data:e,percent:T,stroke:"rgb(254,110,158,0.6)",strokeWidth:"1",fill:"none"},t)})),e.descendants().map((function(e,t){var n,a;if("polar"===b){var l=Object(u.a)(e.x,e.y),s=Object(r.a)(l,2),c=s[0];n=s[1],a=c}else"vertical"===j?(n=e.y,a=e.x):(n=e.x,a=e.y);return Object(i.jsxs)(o.a,{top:n,left:a,children:[0===e.depth&&Object(i.jsx)("circle",{r:12,fill:"url('#links-gradient')",onClick:function(){e.data.isExpanded=!e.data.isExpanded,console.log(e),R()}}),0!==e.depth&&Object(i.jsx)("rect",{height:20,width:40,y:-10,x:-20,fill:"#272b4d",stroke:e.data.children?"#03c0dc":"#26deb0",strokeWidth:1,strokeDasharray:e.data.children?"0":"2,2",strokeOpacity:e.data.children?1:.6,rx:e.data.children?0:10,onClick:function(){e.data.isExpanded=!e.data.isExpanded,console.log(e),R()}}),Object(i.jsx)("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:0===e.depth?"#71248e":e.children?"white":"#26deb0",children:e.data.name})]},t)}))]})}})})]})]})}try{z.displayName="Example",z.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-linktypes/Example.tsx#Example"]={docgenInfo:z.__docgenInfo,name:"Example",path:"src/sandboxes/visx-linktypes/Example.tsx#Example"})}catch(L){}},YOo5:function(e,t,n){"use strict";var r=n("tshL");function i(e,t){return e.parent===t.parent?1:2}function a(e){var t=e.children;return t?t[0]:e.t}function o(e){var t=e.children;return t?t[t.length-1]:e.t}function l(e,t,n){var r=n/(t.i-e.i);t.c-=r,t.s+=n,e.c+=r,t.z+=n,t.m+=n}function s(e,t,n){return e.a.parent===t.parent?e.a:n}function c(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}c.prototype=Object.create(r.a.prototype),t.a=function(){var e=i,t=1,n=1,r=null;function u(i){var a=function(e){for(var t,n,r,i,a,o=new c(e,0),l=[o];t=l.pop();)if(r=t._.children)for(t.children=new Array(a=r.length),i=a-1;i>=0;--i)l.push(n=t.children[i]=new c(r[i],i)),n.parent=t;return(o.parent=new c(null,0)).children=[o],o}(i);if(a.eachAfter(d),a.parent.m=-a.z,a.eachBefore(p),r)i.eachBefore(m);else{var o=i,l=i,s=i;i.eachBefore((function(e){e.x<o.x&&(o=e),e.x>l.x&&(l=e),e.depth>s.depth&&(s=e)}));var u=o===l?1:e(o,l)/2,h=u-o.x,f=t/(l.x+u+h),y=n/(s.depth||1);i.eachBefore((function(e){e.x=(e.x+h)*f,e.y=e.depth*y}))}return i}function d(t){var n=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null;if(n){!function(e){for(var t,n=0,r=0,i=e.children,a=i.length;--a>=0;)(t=i[a]).z+=n,t.m+=n,n+=t.s+(r+=t.c)}(t);var c=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+e(t._,i._),t.m=t.z-c):t.z=c}else i&&(t.z=i.z+e(t._,i._));t.parent.A=function(t,n,r){if(n){for(var i,c=t,u=t,d=n,p=c.parent.children[0],m=c.m,h=u.m,f=d.m,y=p.m;d=o(d),c=a(c),d&&c;)p=a(p),(u=o(u)).a=t,(i=d.z+f-c.z-m+e(d._,c._))>0&&(l(s(d,t,r),t,i),m+=i,h+=i),f+=d.m,m+=c.m,y+=p.m,h+=u.m;d&&!o(u)&&(u.t=d,u.m+=f-h),c&&!a(p)&&(p.t=c,p.m+=m-y,r=t)}return r}(t,i,t.parent.A||r[0])}function p(e){e._.x=e.z+e.parent.m,e.m+=e.parent.m}function m(e){e.x*=t,e.y=e.depth*n}return u.separation=function(t){return arguments.length?(e=t,u):e},u.size=function(e){return arguments.length?(r=!1,t=+e[0],n=+e[1],u):r?null:[t,n]},u.nodeSize=function(e){return arguments.length?(r=!0,t=+e[0],n=+e[1],u):r?[t,n]:null},u}},gJ5E:function(e){e.exports=JSON.parse('{"name":"@visx/demo-linktypes","description":"Standalone visx link types demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/gradient":"latest","@visx/group":"latest","@visx/hierarchy":"latest","@visx/responsive":"latest","@visx/shape":"latest","d3-shape":"1.3.7","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","link","shape"]}')},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("HO86");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);