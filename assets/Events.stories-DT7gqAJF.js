import{i as f,t as x,b as C}from"./props-DjujHgll.js";import{p as _,f as $,s as l,a as h}from"./context-D350OWv3.js";import{c as y,d as b}from"./create-runtime-stories-BmhrnokL.js";import{T as s}from"./TextInput-e0iXzCoD.js";import{storyTextInputArgTypes as P}from"./TextInput.stories-BPMl8oma.js";import"./index-CfOrKyLd.js";import"./attributes-BgNp7-AK.js";import"./class-D-tO7f_P.js";import"./style-CgXbQjLK.js";import"./input-Dk1Z7IFf.js";import"./this-JyHDzNFV.js";import"./InputEnclosure-FepzOtcx.js";const w={component:s,tags:["autodocs"],argTypes:P,parameters:{docs:{description:{component:""}}}},{Story:a}=b();var F=x("<!> <!> <!> <!> <!> <!> <!>",1);function m(I,E){_(E,!1),f();var c=F(),p=$(c);a(p,{name:"Input",args:{oninput:t=>{const e=t.target;console.log("Input Event",e.value)}},children:(t,e)=>{s(t,{oninput:n=>{const o=n.target;console.log("Input Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
oninput={(e: Event) => {
  const target = e.target as HTMLInputElement;

  console.log('Input Event', target.value);
}}
/>
</TextInput>`}}});var u=l(p,2);a(u,{name:"Change",args:{onchange:t=>{const e=t.target;console.log("onChange Event",e.value)}},children:(t,e)=>{s(t,{onchange:n=>{const o=n.target;console.log("onchange Event",o.value)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
onchange={(e: Event) => {
  const target = e.target as HTMLInputElement;

  console.log('onchange Event', target.value);
}}
/>
</TextInput>`}}});var g=l(u,2);a(g,{name:"Focus",args:{onfocus:t=>{const e=t.target;console.log("onfocus Event",e)}},children:(t,e)=>{s(t,{onfocus:n=>{const o=n.target;console.log("onfocus Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
onfocus={(e: TextInputFocusEvent) => {
  const target = e.target as HTMLInputElement;

  console.log('onfocus Event', target);
}}
/>
</TextInput>`}}});var v=l(g,2);a(v,{name:"Blur",args:{onblur:t=>{const e=t.target;console.log("onblur Event",e)}},children:(t,e)=>{s(t,{onblur:n=>{const o=n.target;console.log("onblur Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputFocusEvent`"}},__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
onblur={(e: TextInputFocusEvent) => {
  const target = e.target as HTMLInputElement;

  console.log('onblur Event', target);
}}
/>
</TextInput>`}}});var d=l(v,2);a(d,{name:"Copy",args:{oncopy:t=>{const e=t.target;console.log("oncopy Event",e)}},children:(t,e)=>{s(t,{oncopy:n=>{const o=n.target;console.log("oncopy Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
oncopy={(e: TextInputClipboardEvent) => {
  const target = e.target as HTMLInputElement;

  console.log('oncopy Event', target);
}}
/>
</TextInput>`}}});var i=l(d,2);a(i,{name:"Cut",args:{oncut:t=>{const e=t.target;console.log("oncut Event",e)}},children:(t,e)=>{s(t,{oncut:n=>{const o=n.target;console.log("oncut Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
oncut={(e: TextInputClipboardEvent) => {
  const target = e.target as HTMLInputElement;

  console.log('oncut Event', target);
}}
/>
</TextInput>`}}});var T=l(i,2);a(T,{name:"Paste",args:{onpaste:t=>{const e=t.target;console.log("onpaste Event",e)}},children:(t,e)=>{s(t,{onpaste:n=>{const o=n.target;console.log("onpaste Event",o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: TextInputClipboardEvent`"}},__svelteCsf:{rawCode:`<TextInput {...args}>
  <TextInput
onpaste={(e: TextInputClipboardEvent) => {
  const target = e.target as HTMLInputElement;

  console.log('onpaste Event', target);
}}
/>
</TextInput>`}}}),C(I,c),h()}m.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const r=y(m,w),D=["Input","Change","Focus","Blur","Copy","Cut","Paste"],G={...r.Input,tags:["svelte-csf-v5"]},J={...r.Change,tags:["svelte-csf-v5"]},K={...r.Focus,tags:["svelte-csf-v5"]},N={...r.Blur,tags:["svelte-csf-v5"]},Q={...r.Copy,tags:["svelte-csf-v5"]},U={...r.Cut,tags:["svelte-csf-v5"]},V={...r.Paste,tags:["svelte-csf-v5"]};export{N as Blur,J as Change,Q as Copy,U as Cut,K as Focus,G as Input,V as Paste,D as __namedExportsOrder,w as default};
