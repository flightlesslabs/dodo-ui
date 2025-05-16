import{i as I,t as T,b as _}from"./props-CSR5yLpU.js";import{p as $,f as x,s as l,a as h}from"./context-BFm1olXO.js";import{c as y,d as b}from"./create-runtime-stories-B6GSnrD3.js";import{T as s}from"./TextInput-DI8D-Imu.js";import{storyTextInputArgTypes as P}from"./TextInput.stories-JH_hFyOk.js";import"./index-CfOrKyLd.js";import"./attributes-BMbukfXv.js";import"./class-8xQF_grn.js";import"./style-CdYSE7u6.js";import"./input-DTzSBvQz.js";import"./this-H1qM013v.js";import"./InputEnclosure-D0cLqyUc.js";const w={component:s,tags:["autodocs"],argTypes:P,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var F=T("<!> <!> <!> <!> <!> <!> <!>",1);function m(E,f){$(f,!1),I();var c=F(),p=x(c);r(p,{name:"Input",args:{oninput:t=>{const e=t.target;console.log("Input Event",e.value)}},children:(t,e)=>{s(t,{oninput:n=>{const o=n.target;console.log("Input Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput
  oninput={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('Input Event', target.value);
  }}
/>`}}});var u=l(p,2);r(u,{name:"Change",args:{onchange:t=>{const e=t.target;console.log("onChange Event",e.value)}},children:(t,e)=>{s(t,{onchange:n=>{const o=n.target;console.log("onchange Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('onchange Event', target.value);
  }}
/>`}}});var g=l(u,2);r(g,{name:"Focus",args:{onfocus:t=>{const e=t.target;console.log("onfocus Event",e)}},children:(t,e)=>{s(t,{onfocus:n=>{const o=n.target;console.log("onfocus Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onfocus={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onfocus Event', target);
  }}
/>`}}});var d=l(g,2);r(d,{name:"Blur",args:{onblur:t=>{const e=t.target;console.log("onblur Event",e)}},children:(t,e)=>{s(t,{onblur:n=>{const o=n.target;console.log("onblur Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onblur={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onblur Event', target);
  }}
/>`}}});var v=l(d,2);r(v,{name:"Copy",args:{oncopy:t=>{const e=t.target;console.log("oncopy Event",e)}},children:(t,e)=>{s(t,{oncopy:n=>{const o=n.target;console.log("oncopy Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  oncopy={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncopy Event', target);
  }}
/>`}}});var i=l(v,2);r(i,{name:"Cut",args:{oncut:t=>{const e=t.target;console.log("oncut Event",e)}},children:(t,e)=>{s(t,{oncut:n=>{const o=n.target;console.log("oncut Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  oncut={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncut Event', target);
  }}
/>`}}});var C=l(i,2);r(C,{name:"Paste",args:{onpaste:t=>{const e=t.target;console.log("onpaste Event",e)}},children:(t,e)=>{s(t,{onpaste:n=>{const o=n.target;console.log("onpaste Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onpaste={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onpaste Event', target);
  }}
/>`}}}),_(E,c),h()}m.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=y(m,w),D=["Input","Change","Focus","Blur","Copy","Cut","Paste"],G=a.Input,J=a.Change,K=a.Focus,N=a.Blur,Q=a.Copy,U=a.Cut,V=a.Paste;export{N as Blur,J as Change,Q as Copy,U as Cut,K as Focus,G as Input,V as Paste,D as __namedExportsOrder,w as default};
