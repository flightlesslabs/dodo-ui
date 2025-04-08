import{p as U,t as I,g as P,s as X,b as m,f as M,i as re}from"./props-tZQGfWTo.js";import{j as le,x as H,C as oe,D as W,k as Y,E as se,F as Z,i as ne,I as z,G,v as ie,H as J,J as ce,K as ve,M as fe,n as ue,O as de,P as ye,Q as _e,R as pe,e as V,s as B,t as j,S as K,f as T,p as ge,a as me}from"./context-DL2VDvaF.js";import{c as Ce,d as be}from"./create-runtime-stories-8NiD5kAu.js";import{P as L}from"./Palette-D9TemsWc.js";let he=!1;function ke(u,e,t,i){for(var f=[],c=e.length,s=0;s<c;s++)ce(e[s].e,f,!0);var _=c>0&&f.length===0&&t!==null;if(_){var v=t.parentNode;ve(v),v.append(t),i.clear(),k(u,e[0].prev,e[c-1].next)}fe(f,()=>{for(var l=0;l<c;l++){var a=e[l];_||(i.delete(a.k),k(u,a.prev,a.next)),ue(a.e,!_)}})}function S(u,e,t,i,f,c=null){var s=u,_={flags:e,items:new Map,first:null},v=null,l=!1,a=oe(()=>{var n=t();return ne(n)?n:n==null?[]:Z(n)});le(()=>{var n=H(a),r=n.length;l&&r===0||(l=r===0,we(n,_,s,f,e,i,t),c!==null&&(r===0?v?W(v):v=Y(()=>c(s)):v!==null&&se(v,()=>{v=null})),H(a))})}function we(u,e,t,i,f,c,s){var _=u.length,v=e.items,l=e.first,a=l,n,r=null,y=[],o=[],C,b,d,p;for(p=0;p<_;p+=1){if(C=u[p],b=c(C,p),d=v.get(b),d===void 0){var E=a?a.e.nodes_start:t;r=xe(E,e,r,r===null?e.first:r.next,C,b,p,i,f,s),v.set(b,r),y=[],o=[],a=r.next;continue}if((d.e.f&z)!==0&&W(d.e),d!==a){if(n!==void 0&&n.has(d)){if(y.length<o.length){var h=o[0],g;r=h.prev;var w=y[0],q=y[y.length-1];for(g=0;g<y.length;g+=1)Q(y[g],h,t);for(g=0;g<o.length;g+=1)n.delete(o[g]);k(e,w.prev,q.next),k(e,r,w),k(e,q,h),a=h,r=q,p-=1,y=[],o=[]}else n.delete(d),Q(d,a,t),k(e,d.prev,d.next),k(e,d,r===null?e.first:r.next),k(e,r,d),r=d;continue}for(y=[],o=[];a!==null&&a.k!==b;)(a.e.f&z)===0&&(n??(n=new Set)).add(a),o.push(a),a=a.next;if(a===null)continue;d=a}y.push(d),r=d,a=d.next}if(a!==null||n!==void 0){for(var x=n===void 0?[]:Z(n);a!==null;)(a.e.f&z)===0&&x.push(a),a=a.next;var O=x.length;if(O>0){var te=null;ke(e,x,te,v)}}G.first=e.first&&e.first.e,G.last=r&&r.e}function xe(u,e,t,i,f,c,s,_,v,l){var a=(v&ye)!==0,n=(v&_e)===0,r=a?n?ie(f):J(f):f,y=(v&de)===0?s:J(s),o={i:y,v:r,k:c,a:null,e:null,prev:t,next:i};try{return o.e=Y(()=>_(u,r,y,l),he),o.e.prev=t&&t.e,o.e.next=i&&i.e,t===null?e.first=o:(t.next=o,t.e.next=o.e),i!==null&&(i.prev=o,i.e.prev=o.e),o}finally{}}function Q(u,e,t){for(var i=u.next?u.next.e.nodes_start:t,f=e?e.e.nodes_start:t,c=u.e.nodes_start;c!==i;){var s=pe(c);f.before(c),c=s}}function k(u,e,t){e===null?u.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}const Pe=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone"],D=["black","white"],Te=["default","primary","safe","warning","danger","info"],Ve=["50","100","200","300","400","500","600","700","800","900","950"];var Ee=I('<div class="Swatch svelte-15k1f83"><!> <div class="colorPaletteValue"> </div></div>');function F(u,e){const t=U(e,"prefix",3,"--dodo-color-");var i=Ee(),f=V(i);{var c=l=>{const a=K(()=>`var(${t()}${e.colorPalette}-${e.colorPaletteValue})`);L(l,{get backgroundColor(){return H(a)}})},s=l=>{const a=K(()=>`var(${t()}${e.colorPalette})`);L(l,{get backgroundColor(){return H(a)}})};P(f,l=>{e.colorPaletteValue?l(c):l(s,!1)})}var _=B(f,2),v=V(_);j(()=>X(v,e.colorPaletteValue)),m(u,i)}F.__docgen={data:[{name:"colorPalette",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorPaletteValue",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"prefix",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"--dodo-color-"'}],name:"Swatch.svelte"};var Me=I('<li class="svelte-1o1ycqa"><!></li>'),Se=I('<li class="svelte-1o1ycqa"><!></li>'),Ne=I('<ul class="Swatches svelte-1o1ycqa"><b class="svelte-1o1ycqa"> </b> <!></ul>');function N(u,e){const t=U(e,"isColorPaletteValues",3,!1);var i=Ne(),f=V(i),c=V(f),s=B(f,2);{var _=l=>{var a=M(),n=T(a);S(n,16,()=>Ve,r=>r,(r,y)=>{var o=Me(),C=V(o);F(C,{get colorPalette(){return e.colorPalette},get colorPaletteValue(){return y},get prefix(){return e.prefix}}),m(r,o)}),m(l,a)},v=l=>{var a=Se(),n=V(a);F(n,{get colorPalette(){return e.colorPalette},get prefix(){return e.prefix}}),m(l,a)};P(s,l=>{t()?l(_):l(v,!1)})}j(()=>X(c,e.colorPalette)),m(u,i)}N.__docgen={data:[{name:"colorPalette",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"prefix",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"isColorPaletteValues",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Swatches.svelte"};var Be=I('<div class="Colors svelte-cnjhz6"><!></div>');function $(u,e){var t=Be(),i=V(t);{var f=s=>{var _=M(),v=T(_);S(v,16,()=>Pe,l=>l,(l,a)=>{N(l,{get colorPalette(){return a},prefix:"--dodo-color-base-",isColorPaletteValues:!0})}),m(s,_)},c=(s,_)=>{{var v=a=>{var n=M(),r=T(n);S(r,16,()=>D,y=>y,(y,o)=>{N(y,{get colorPalette(){return o},prefix:"--dodo-color-base-"})}),m(a,n)},l=(a,n)=>{{var r=o=>{var C=M(),b=T(C);S(b,16,()=>Te,d=>d,(d,p)=>{N(d,{get colorPalette(){return p},isColorPaletteValues:!0})}),m(o,C)},y=(o,C)=>{{var b=p=>{var E=M(),h=T(E);S(h,16,()=>D,g=>g,(g,w)=>{N(g,{get colorPalette(){return w}})}),m(p,E)},d=(p,E)=>{{var h=g=>{var w=M(),q=T(w);S(q,16,()=>D,x=>x,(x,O)=>{N(x,{get colorPalette(){return O},prefix:"--dodo-color-constant-"})}),m(g,w)};P(p,g=>{e.swatchType==="colors-constant"&&g(h)},E)}};P(o,p=>{e.swatchType==="colors-neutral"?p(b):p(d,!1)},C)}};P(a,o=>{e.swatchType==="colors"?o(r):o(y,!1)},n)}};P(s,a=>{e.swatchType==="base-colors-neutral"?a(v):a(l,!1)},_)}};P(i,s=>{e.swatchType==="base-colors"?s(f):s(c,!1)})}m(u,t)}$.__docgen={data:[{name:"swatchType",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"base-colors",text:'"base-colors"'},{kind:"const",type:"string",value:"base-colors-neutral",text:'"base-colors-neutral"'},{kind:"const",type:"string",value:"colors",text:'"colors"'},{kind:"const",type:"string",value:"colors-neutral",text:'"colors-neutral"'},{kind:"const",type:"string",value:"colors-constant",text:'"colors-constant"'}],text:'"base-colors" | "base-colors-neutral" | "colors" | "colors-neutral" | "colors-constant"'},static:!1,readonly:!1}],name:"Colors.svelte"};const ee={component:$,args:{swatchType:"colors"},parameters:{docs:{description:{component:""}}}},{Story:A}=be();var Ie=I("<!> <!> <!> <!> <!>",1);function ae(u,e){ge(e,!1),re();var t=Ie(),i=T(t);A(i,{name:"Main",parameters:{__svelteCsf:{rawCode:"<Colors {...args} />"}}});var f=B(i,2);A(f,{name:"ColorsNeutral",args:{swatchType:"colors-neutral"},parameters:{__svelteCsf:{rawCode:"<Colors {...args} />"}}});var c=B(f,2);A(c,{name:"ColorsConstant",args:{swatchType:"colors-constant"},parameters:{__svelteCsf:{rawCode:"<Colors {...args} />"}}});var s=B(c,2);A(s,{name:"ColorsBase",args:{swatchType:"base-colors"},parameters:{__svelteCsf:{rawCode:"<Colors {...args} />"}}});var _=B(s,2);A(_,{name:"BaseColorsNeutral",args:{swatchType:"base-colors-neutral"},parameters:{__svelteCsf:{rawCode:"<Colors {...args} />"}}}),m(u,t),me()}ae.__docgen={version:3,name:"Colors.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R=Ce(ae,ee),qe=["Main","ColorsNeutral","ColorsConstant","ColorsBase","BaseColorsNeutral"],Ae=R.Main,Re=R.ColorsNeutral,He=R.ColorsConstant,Oe=R.ColorsBase,ze=R.BaseColorsNeutral,Ke=Object.freeze(Object.defineProperty({__proto__:null,BaseColorsNeutral:ze,ColorsBase:Oe,ColorsConstant:He,ColorsNeutral:Re,Main:Ae,__namedExportsOrder:qe,default:ee},Symbol.toStringTag,{value:"Module"}));export{ze as B,Ke as C,Ae as M,Re as a,He as b,Oe as c};
