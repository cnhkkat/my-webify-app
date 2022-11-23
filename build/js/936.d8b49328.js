"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[936],{78874:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),c=t(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},i=t(30076),a=function(e,n){return c.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};a.displayName="GithubOutlined";var l=c.forwardRef(a)},55934:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),c=t(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},i=t(30076),a=function(e,n){return c.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};a.displayName="VerticalAlignTopOutlined";var l=c.forwardRef(a)},19025:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(87462),c=t(4942),o=t(29439),i=t(55934),a=t(94184),l=t.n(a),u=t(63441),f=t(64019),s=t(76632),v=t(98423),d=t(67294),m=t(53124);function p(e){return null!=e&&e===e.window}function g(e,n){var t,r;if("undefined"==typeof window)return 0;var c=n?"scrollTop":"scrollLeft",o=0;return p(e)?o=e[n?"pageYOffset":"pageXOffset"]:e instanceof Document?o=e.documentElement[c]:(e instanceof HTMLElement||e)&&(o=e[c]),e&&!p(e)&&"number"!=typeof o&&(o=null===(r=(null!==(t=e.ownerDocument)&&void 0!==t?t:e).documentElement)||void 0===r?void 0:r[c]),o}var w=t(96159),Z=t(75164);function h(e,n,t,r){var c=t-n;return(e/=r/2)<1?c/2*e*e*e+n:c/2*((e-=2)*e*e+2)+n}var b=t(93433);function C(e){var n,t=function(t){return function(){n=null,e.apply(void 0,(0,b.Z)(t))}},r=function(){if(null==n){for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];n=(0,Z.Z)(t(r))}};return r.cancel=function(){Z.Z.cancel(n),n=null},r}var E=function(e){var n=e.prefixCls,t=e.rootPrefixCls,r=e.children,c=e.visible,o=d.createElement("div",{className:"".concat(n,"-content")},d.createElement("div",{className:"".concat(n,"-icon")},d.createElement(i.Z,null)));return d.createElement(u.Z,{visible:c,motionName:"".concat(t,"-fade")},(function(e){var n=e.className;return(0,w.Tm)(r||o,(function(e){var t=e.className;return{className:l()(n,t)}}))}))},N=function(e){var n=(0,s.Z)(!1,{value:e.visible}),t=(0,o.Z)(n,2),i=t[0],a=t[1],u=d.createRef(),w=d.useRef(),b=function(){return u.current&&u.current.ownerDocument?u.current.ownerDocument:window},N=C((function(n){var t=e.visibilityHeight,r=void 0===t?400:t,c=g(n.target,!0);a(c>r)}));d.useEffect((function(){var n;return n=(e.target||b)(),w.current=(0,f.Z)(n,"scroll",(function(e){N(e)})),N({target:n}),function(){w.current&&w.current.remove(),N.cancel()}}),[e.target]);var x=d.useContext(m.E_),y=x.getPrefixCls,k=x.direction,D=e.prefixCls,T=e.className,H=void 0===T?"":T,M=y("back-top",D),O=y(),L=l()(M,(0,c.Z)({},"".concat(M,"-rtl"),"rtl"===k),H),R=(0,v.Z)(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return d.createElement("div",(0,r.Z)({},R,{className:L,onClick:function(n){var t=e.onClick,r=e.target,c=e.duration;!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.getContainer,r=void 0===t?function(){return window}:t,c=n.callback,o=n.duration,i=void 0===o?450:o,a=r(),l=g(a,!0),u=Date.now(),f=function n(){var t=Date.now()-u,r=h(t>i?i:t,l,e,i);p(a)?a.scrollTo(window.pageXOffset,r):a instanceof Document||"HTMLDocument"===a.constructor.name?a.documentElement.scrollTop=r:a.scrollTop=r,t<i?(0,Z.Z)(n):"function"==typeof c&&c()};(0,Z.Z)(f)}(0,{getContainer:r||b,duration:void 0===c?450:c}),"function"==typeof t&&t(n)},ref:u}),d.createElement(E,{prefixCls:M,rootPrefixCls:O,visible:i},e.children))},x=d.memo(N)},31754:function(e,n,t){t(88851)}}]);