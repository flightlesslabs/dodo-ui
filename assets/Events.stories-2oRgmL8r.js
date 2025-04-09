import{i as f,t as T,b as _}from"./props-CtI7nL00.js";import{p as $,f as x,s as l,a as h}from"./context-BOJPcgPD.js";import{c as y,d as b}from"./create-runtime-stories-Bv-5NuaG.js";import{s as P,T as s}from"./TextInput.stories-BV6Mp3H0.js";import"./index-CfOrKyLd.js";import"./attributes-BQ-WOQPH.js";import"./input-BE0-jvYB.js";const w={component:s,tags:["autodocs"],argTypes:P,parameters:{docs:{description:{component:""}}}},{Story:a}=b();var F=T("<!> <!> <!> <!> <!> <!> <!>",1);function m(E,C){$(C,!1),f();var c=F(),p=x(c);a(p,{name:"Input",args:{oninput:t=>{const e=t.target;console.log("Input Event",e.value)}},children:(t,e)=>{s(t,{oninput:n=>{const o=n.target;console.log("Input Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput
  oninput={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('Input Event', target.value);
  }}
/>`}}});var u=l(p,2);a(u,{name:"Change",args:{onchange:t=>{const e=t.target;console.log("onChange Event",e.value)}},children:(t,e)=>{s(t,{onchange:n=>{const o=n.target;console.log("onchange Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    console.log('onchange Event', target.value);
  }}
/>`}}});var g=l(u,2);a(g,{name:"Focus",args:{onfocus:t=>{const e=t.target;console.log("onfocus Event",e)}},children:(t,e)=>{s(t,{onfocus:n=>{const o=n.target;console.log("onfocus Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onfocus={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onfocus Event', target);
  }}
/>`}}});var d=l(g,2);a(d,{name:"Blur",args:{onblur:t=>{const e=t.target;console.log("onblur Event",e)}},children:(t,e)=>{s(t,{onblur:n=>{const o=n.target;console.log("onblur Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onblur={(e: TextInputFocusEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onblur Event', target);
  }}
/>`}}});var v=l(d,2);a(v,{name:"Copy",args:{oncopy:t=>{const e=t.target;console.log("oncopy Event",e)}},children:(t,e)=>{s(t,{oncopy:n=>{const o=n.target;console.log("oncopy Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  oncopy={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncopy Event', target);
  }}
/>`}}});var i=l(v,2);a(i,{name:"Cut",args:{oncut:t=>{const e=t.target;console.log("oncut Event",e)}},children:(t,e)=>{s(t,{oncut:n=>{const o=n.target;console.log("oncut Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  oncut={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('oncut Event', target);
  }}
/>`}}});var I=l(i,2);a(I,{name:"Paste",args:{onpaste:t=>{const e=t.target;console.log("onpaste Event",e)}},children:(t,e)=>{s(t,{onpaste:n=>{const o=n.target;console.log("onpaste Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput
  onpaste={(e: TextInputClipboardEvent) => {
    const target = e.target as HTMLInputElement;

    console.log('onpaste Event', target);
  }}
/>`}}}),_(E,c),h()}m.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const r=y(m,w),O=["Input","Change","Focus","Blur","Copy","Cut","Paste"],R=r.Input,j=r.Change,q=r.Focus,z=r.Blur,D=r.Copy,G=r.Cut,J=r.Paste;export{z as Blur,j as Change,D as Copy,G as Cut,q as Focus,R as Input,J as Paste,O as __namedExportsOrder,w as default};
