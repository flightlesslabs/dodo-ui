let rt=!1,Qt=!1;function jn(){rt=!0}const qn=1,Bn=2,Un=16,Yn=1,Hn=2,Vn=4,Gn=8,Kn=16,Zn=1,$n=2,g=Symbol(),Wn="http://www.w3.org/1999/xhtml",mt=!1,I=2,Pt=4,lt=8,pt=16,P=32,B=64,z=128,T=256,J=512,y=1024,R=2048,M=4096,j=8192,at=16384,tn=32768,Rt=65536,Xn=1<<17,nn=1<<19,Dt=1<<20,_t=1<<21,H=Symbol("$state"),zn=Symbol("legacy props"),Jn=Symbol("");var en=Array.isArray,rn=Array.prototype.indexOf,Qn=Array.from,te=Object.defineProperty,V=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors,an=Object.prototype,sn=Array.prototype,St=Object.getPrototypeOf,Tt=Object.isExtensible;function ne(t){return typeof t=="function"}const ee=()=>{};function re(t){return t()}function le(t){for(var n=0;n<t.length;n++)t[n]()}function ae(t,n,e=!1){return t===void 0?e?n():n:t}function Ct(t){return t===this.v}function fn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Nt(t){return!fn(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _n(t){throw new Error("https://svelte.dev/e/effect_orphan")}function cn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function se(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function L(t,n){if(typeof t!="object"||t===null||H in t)return t;const e=St(t);if(e!==an&&e!==sn)return t;var r=new Map,a=en(t),l=S(0),_=v,c=u=>{var s=v;q(_);var f;return f=u(),q(s),f};return a&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&vn();var i=r.get(s);return i===void 0?(i=c(()=>S(f.value)),r.set(s,i)):b(i,c(()=>L(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>S(g)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&b(i,o)}b(f,g),bt(l)}return!0},get(u,s,f){var D;if(s===H)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(D=V(u,s))!=null&&D.writable)&&(i=c(()=>S(L(o?u[s]:g))),r.set(s,i)),i!==void 0){var d=N(i);return d===g?void 0:d}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=N(i))}else if(f===void 0){var o=r.get(s),d=o==null?void 0:o.v;if(o!==void 0&&d!==g)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(u,s){var d;if(s===H)return!0;var f=r.get(s),i=f!==void 0&&f.v!==g||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(d=V(u,s))!=null&&d.writable)){f===void 0&&(f=c(()=>S(i?L(u[s]):g)),r.set(s,f));var o=N(f);if(o===g)return!1}return i},set(u,s,f,i){var xt;var o=r.get(s),d=s in u;if(a&&s==="length")for(var D=f;D<o.v;D+=1){var Z=r.get(D+"");Z!==void 0?b(Z,g):D in u&&(Z=c(()=>S(g)),r.set(D+"",Z))}o===void 0?(!d||(xt=V(u,s))!=null&&xt.writable)&&(o=c(()=>S(void 0)),b(o,c(()=>L(f))),r.set(s,o)):(d=o.v!==g,b(o,c(()=>L(f))));var $=Reflect.getOwnPropertyDescriptor(u,s);if($!=null&&$.set&&$.set.call(i,f),!d){if(a&&typeof s=="string"){var gt=r.get("length"),ot=Number(s);Number.isInteger(ot)&&ot>=gt.v&&b(gt,ot+1)}bt(l)}return!0},ownKeys(u){N(l);var s=Reflect.ownKeys(u).filter(o=>{var d=r.get(o);return d===void 0||d.v!==g});for(var[f,i]of r)i.v!==g&&!(f in u)&&s.push(f);return s},setPrototypeOf(){pn()}})}function bt(t,n=1){b(t,t.v+n)}const G=new Map;function ht(t,n){var e={f:0,v:t,reactions:null,equals:Ct,rv:0,wv:0};return e}function S(t,n){const e=ht(t);return Bt(e),e}function fe(t,n=!1){var r;const e=ht(t);return n||(e.equals=Nt),rt&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(e),e}function ue(t,n){return b(t,Gt(()=>N(t))),n}function b(t,n,e=!1){v!==null&&!O&&it()&&(v.f&(I|pt))!==0&&!(E!=null&&E.includes(t))&&hn();let r=e?L(n):n;return dn(t,r)}function dn(t,n){if(!t.equals(n)){var e=t.v;K?G.set(t,n):G.set(t,e),t.v=n,t.wv=Yt(),kt(t,R),it()&&h!==null&&(h.f&y)!==0&&(h.f&(P|B))===0&&(m===null?xn([t]):m.push(t))}return n}function ie(t,n=1){var e=N(t),r=n===1?e++:e--;return b(t,e),r}function kt(t,n){var e=t.reactions;if(e!==null)for(var r=it(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&R)===0&&(!r&&_===h||(A(_,n),(c&(y|T))!==0&&((c&I)!==0?kt(_,M):ut(_))))}}function dt(t){var n=I|R,e=v!==null&&(v.f&I)!==0?v:null;return h===null||e!==null&&(e.f&T)!==0?n|=T:h.f|=Dt,{ctx:p,deps:null,effects:null,equals:Ct,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function oe(t){const n=dt(t);return Bt(n),n}function _e(t){const n=dt(t);return n.equals=Nt,n}function Ft(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)F(n[e])}}function wn(t){for(var n=t.parent;n!==null;){if((n.f&I)===0)return n;n=n.parent}return null}function En(t){var n,e=h;tt(wn(t));try{Ft(t),n=Vt(t)}finally{tt(e)}return n}function Mt(t){var n=En(t),e=(C||(t.f&T)!==0)&&t.deps!==null?M:y;A(t,e),t.equals(n)||(t.v=n,t.wv=Yt())}var At,yn,Lt,jt;function ce(){if(At===void 0){At=window,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Lt=V(n,"firstChild").get,jt=V(n,"nextSibling").get,Tt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tt(e)&&(e.__t=void 0)}}function ve(t=""){return document.createTextNode(t)}function qt(t){return Lt.call(t)}function wt(t){return jt.call(t)}function pe(t,n){return qt(t)}function he(t,n){{var e=qt(t);return e instanceof Comment&&e.data===""?wt(e):e}}function de(t,n=1,e=!1){let r=t;for(;n--;)r=wt(r);return r}function we(t){t.textContent=""}let W=!1,ct=!1,Q=null,k=!1,K=!1;function Ot(t){K=t}let X=[];let v=null,O=!1;function q(t){v=t}let h=null;function tt(t){h=t}let E=null;function gn(t){E=t}function Bt(t){v!==null&&v.f&_t&&(E===null?gn([t]):E.push(t))}let w=null,x=0,m=null;function xn(t){m=t}let Ut=1,nt=0,C=!1;function Yt(){return++Ut}function U(t){var i;var n=t.f;if((n&R)!==0)return!0;if((n&M)!==0){var e=t.deps,r=(n&T)!==0;if(e!==null){var a,l,_=(n&J)!==0,c=r&&h!==null&&!C,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=J),c&&f!==null&&(f.f&T)===0&&(s.f^=T)}for(a=0;a<u;a++)if(l=e[a],U(l)&&Mt(l),l.wv>t.wv)return!0}(!r||h!==null&&!C)&&A(t,y)}return!1}function mn(t,n){for(var e=n;e!==null;){if((e.f&z)!==0)try{e.fn(t);return}catch{e.f^=z}e=e.parent}throw W=!1,t}function Tn(t){return(t.f&at)===0&&(t.parent===null||(t.parent.f&z)===0)}function st(t,n,e,r){if(W){if(e===null&&(W=!1),Tn(n))throw t;return}e!==null&&(W=!0);{mn(t,n);return}}function Ht(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];E!=null&&E.includes(t)||((l.f&I)!==0?Ht(l,n,!1):n===l&&(e?A(l,R):(l.f&y)!==0&&A(l,M),ut(l)))}}function Vt(t){var d;var n=w,e=x,r=m,a=v,l=C,_=E,c=p,u=O,s=t.f;w=null,x=0,m=null,C=(s&T)!==0&&(O||!k||v===null),v=(s&(P|B))===0?t:null,E=null,It(t.ctx),O=!1,nt++,t.f|=_t;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(et(t,x),i!==null&&x>0)for(i.length=x+w.length,o=0;o<w.length;o++)i[x+o]=w[o];else t.deps=i=w;if(!C)for(o=x;o<i.length;o++)((d=i[o]).reactions??(d.reactions=[])).push(t)}else i!==null&&x<i.length&&(et(t,x),i.length=x);if(it()&&m!==null&&!O&&i!==null&&(t.f&(I|M|R))===0)for(o=0;o<m.length;o++)Ht(m[o],t);return a!==null&&(nt++,m!==null&&(r===null?r=m:r.push(...m))),f}finally{w=n,x=e,m=r,v=a,C=l,E=_,It(c),O=u,t.f^=_t}}function bn(t,n){let e=n.reactions;if(e!==null){var r=rn.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&I)!==0&&(w===null||!w.includes(n))&&(A(n,M),(n.f&(T|J))===0&&(n.f^=J),Ft(n),et(n,0))}function et(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)bn(t,e[r])}function ft(t){var n=t.f;if((n&at)===0){A(t,y);var e=h,r=p,a=k;h=t,k=!0;try{(n&pt)!==0?Nn(t):Wt(t),$t(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var _=t.deps,c;mt&&Qt&&t.f&R}catch(u){st(u,t,e,r||t.ctx)}finally{k=a,h=e}}}function An(){try{cn()}catch(t){if(Q!==null)st(t,Q,null);else throw t}}function On(){var t=k;try{var n=0;for(k=!0;X.length>0;){n++>1e3&&An();var e=X,r=e.length;X=[];for(var a=0;a<r;a++){var l=Pn(e[a]);In(l)}}}finally{ct=!1,k=t,Q=null,G.clear()}}function In(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(at|j))===0)try{U(r)&&(ft(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){st(a,r,null,r.ctx)}}}function ut(t){ct||(ct=!0,queueMicrotask(On));for(var n=Q=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(B|P))!==0){if((e&y)===0)return;n.f^=y}}X.push(n)}function Pn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(P|B))!==0,l=a&&(r&y)!==0;if(!l&&(r&j)===0){if((r&Pt)!==0)n.push(e);else if(a)e.f^=y;else{var _=v;try{v=e,U(e)&&ft(e)}catch(s){st(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function N(t){var n=t.f,e=(n&I)!==0;if(v!==null&&!O){if(!(E!=null&&E.includes(t))){var r=v.deps;t.rv<nt&&(t.rv=nt,w===null&&r!==null&&r[x]===t?x++:w===null?w=[t]:(!C||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&T)===0&&(a.f^=T)}return e&&(a=t,U(a)&&Mt(a)),K&&G.has(t)?G.get(t):t.v}function Gt(t){var n=O;try{return O=!0,t()}finally{O=n}}const Rn=-7169;function A(t,n){t.f=t.f&Rn|n}function Ee(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(H in t)vt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&H in e&&vt(e)}}}function vt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{vt(t[r],n)}catch{}const e=St(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=ln(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}function Kt(t){h===null&&v===null&&_n(),v!==null&&(v.f&T)!==0&&h===null&&on(),K&&un()}function Dn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function Y(t,n,e,r=!0){var a=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{ft(l),l.f|=tn}catch(u){throw F(l),u}else n!==null&&ut(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Dt|z))===0;if(!_&&r&&(a!==null&&Dn(l,a),v!==null&&(v.f&I)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function Sn(t){const n=Y(lt,null,!1);return A(n,y),n.teardown=t,n}function ye(t){Kt();var n=h!==null&&(h.f&P)!==0&&p!==null&&!p.m;if(n){var e=p;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function ge(t){return Kt(),Et(t)}function xe(t){const n=Y(B,t,!0);return(e={})=>new Promise(r=>{e.outro?kn(n,()=>{F(n),r(void 0)}):(F(n),r(void 0))})}function Zt(t){return Y(Pt,t,!1)}function me(t,n){var e=p,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=Et(()=>{t(),!r.ran&&(r.ran=!0,b(e.l.r2,!0),Gt(n))})}function Te(){var t=p;Et(()=>{if(N(t.l.r2)){for(var n of t.l.r1){var e=n.effect;(e.f&y)!==0&&A(e,M),U(e)&&ft(e),n.ran=!1}t.l.r2.v=!1}})}function Et(t){return Y(lt,t,!0)}function be(t,n=[],e=dt){const r=n.map(e);return Cn(()=>t(...r.map(N)))}function Cn(t,n=0){return Y(lt|pt|n,t,!0)}function Ae(t,n=!0){return Y(lt|P,t,!0,n)}function $t(t){var n=t.teardown;if(n!==null){const e=K,r=v;Ot(!0),q(null);try{n.call(null)}finally{Ot(e),q(r)}}}function Wt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&B)!==0?e.parent=null:F(e,n),e=r}}function Nn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&P)===0&&F(n),n=e}}function F(t,n=!0){var e=!1;if((n||(t.f&nn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:wt(r);r.remove(),r=l}e=!0}Wt(t,n&&!e),et(t,0),A(t,at);var _=t.transitions;if(_!==null)for(const u of _)u.stop();$t(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function kn(t,n){var e=[];zt(t,e,!0),Fn(e,()=>{F(t),n&&n()})}function Fn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function zt(t,n,e){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Rt)!==0||(r.f&P)!==0;zt(r,n,l?e:!1),r=a}}}function Oe(t){Jt(t,!0)}function Jt(t,n){if((t.f&j)!==0){t.f^=j,(t.f&y)===0&&(t.f^=y),U(t)&&(A(t,R),ut(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Rt)!==0||(e.f&P)!==0;Jt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}function Mn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function It(t){p=t}function Ie(t){return yt().get(t)}function Pe(t,n){return yt().set(t,n),n}function Re(t){return yt().has(t)}function De(t,n=!1,e){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};rt&&!n&&(p.l={s:null,u:null,r1:[],r2:ht(!1)}),Sn(()=>{r.d=!0})}function Se(t){const n=p;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];tt(l.effect),q(l.reaction),Zt(l.fn)}}finally{tt(e),q(r)}}p=n.p,n.m=!0}return{}}function it(){return!rt||p!==null&&p.l===null}function yt(t){return p===null&&Mn(),p.c??(p.c=new Map(Ln(p)||void 0))}function Ln(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}export{Zn as $,St as A,ln as B,_e as C,Oe as D,kn as E,Qn as F,h as G,ht as H,j as I,zt as J,we as K,Jn as L,Fn as M,Wn as N,Bn as O,qn as P,Un as Q,wt as R,oe as S,jn as T,le as U,q as V,tt as W,v as X,te as Y,ve as Z,yn as _,Se as a,$n as a0,ce as a1,xe as a2,Rt as a3,g as a4,ge as a5,re as a6,dt as a7,V as a8,se as a9,Xn as aa,Vn as ab,Nt as ac,L as ad,Gn as ae,H as af,zn as ag,Hn as ah,Yn as ai,Kn as aj,ne as ak,ee as al,Re as am,S as an,Zt as ao,Et as ap,ae as aq,rt as b,p as c,Gt as d,pe as e,he as f,Ie as g,Pe as h,en as i,Cn as j,Ae as k,Mn as l,qt as m,F as n,me as o,De as p,Te as q,b as r,de as s,be as t,ye as u,fe as v,ue as w,N as x,Ee as y,ie as z};
