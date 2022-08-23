import{G as v}from"./app.627173e4.js";function F(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var $=F,M=typeof v=="object"&&v&&v.Object===Object&&v,B=M,U=B,X=typeof self=="object"&&self&&self.Object===Object&&self,D=U||X||Function("return this")(),N=D,H=N,q=function(){return H.Date.now()},z=q,J=/\s/;function K(e){for(var r=e.length;r--&&J.test(e.charAt(r)););return r}var Q=K,V=Q,Y=/^\s+/;function Z(e){return e&&e.slice(0,V(e)+1).replace(Y,"")}var ee=Z,re=N,te=re.Symbol,w=te,x=w,L=Object.prototype,ne=L.hasOwnProperty,ie=L.toString,m=x?x.toStringTag:void 0;function ae(e){var r=ne.call(e,m),n=e[m];try{e[m]=void 0;var i=!0}catch{}var o=ie.call(e);return i&&(r?e[m]=n:delete e[m]),o}var oe=ae,fe=Object.prototype,ce=fe.toString;function ue(e){return ce.call(e)}var se=ue,E=w,de=oe,be=se,le="[object Null]",me="[object Undefined]",I=E?E.toStringTag:void 0;function ge(e){return e==null?e===void 0?me:le:I&&I in Object(e)?de(e):be(e)}var ve=ge;function Te(e){return e!=null&&typeof e=="object"}var ye=Te,je=ve,Se=ye,$e="[object Symbol]";function Oe(e){return typeof e=="symbol"||Se(e)&&je(e)==$e}var pe=Oe,_e=ee,k=$,he=pe,R=0/0,xe=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,ke=parseInt;function Re(e){if(typeof e=="number")return e;if(he(e))return R;if(k(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=k(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=_e(e);var n=Ee.test(e);return n||Ie.test(e)?ke(e.slice(2),n?2:8):xe.test(e)?R:+e}var Ge=Re,Ne=$,S=z,G=Ge,we="Expected a function",Le=Math.max,We=Math.min;function Ce(e,r,n){var i,o,s,u,a,c,d=0,O=!1,b=!1,T=!0;if(typeof e!="function")throw new TypeError(we);r=G(r)||0,Ne(n)&&(O=!!n.leading,b="maxWait"in n,s=b?Le(G(n.maxWait)||0,r):s,T="trailing"in n?!!n.trailing:T);function y(t){var f=i,l=o;return i=o=void 0,d=t,u=e.apply(l,f),u}function W(t){return d=t,a=setTimeout(g,r),O?y(t):u}function C(t){var f=t-c,l=t-d,h=r-f;return b?We(h,s-l):h}function p(t){var f=t-c,l=t-d;return c===void 0||f>=r||f<0||b&&l>=s}function g(){var t=S();if(p(t))return _(t);a=setTimeout(g,C(t))}function _(t){return a=void 0,T&&i?y(t):(i=o=void 0,u)}function P(){a!==void 0&&clearTimeout(a),d=0,i=c=o=a=void 0}function A(){return a===void 0?u:_(S())}function j(){var t=S(),f=p(t);if(i=arguments,o=this,c=t,f){if(a===void 0)return W(c);if(b)return clearTimeout(a),a=setTimeout(g,r),y(c)}return a===void 0&&(a=setTimeout(g,r)),u}return j.cancel=P,j.flush=A,j}var Pe=Ce,Ae=Pe,Fe=$,Me="Expected a function";function Be(e,r,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(Me);return Fe(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ae(e,r,{leading:i,maxWait:r,trailing:o})}var Xe=Be;export{Xe as t};