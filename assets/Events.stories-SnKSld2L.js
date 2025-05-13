import{i as d,t as f,b as E}from"./props-DjujHgll.js";import{p as h,f as _,s as g,a as $}from"./context-D350OWv3.js";import{c as y,d as C}from"./create-runtime-stories-BmhrnokL.js";import{s as n,a as b,S as r}from"./SimpleSelect.stories-CAl00dmX.js";import"./index-CfOrKyLd.js";import"./each-k4c6705L.js";import"./attributes-BgNp7-AK.js";import"./class-D-tO7f_P.js";import"./style-CgXbQjLK.js";import"./this-JyHDzNFV.js";import"./InputEnclosure-FepzOtcx.js";const F={component:r,tags:["autodocs"],argTypes:b,args:{options:n},parameters:{docs:{description:{component:""}}}},{Story:l}=C();var O=f("<!> <!> <!>",1);function m(S,u){h(u,!1),d();var c=O(),i=_(c);l(i,{name:"Change",args:{onchange:e=>{const t=e.target;console.log("onChange Event",t.value)}},children:(e,t)=>{r(e,{onchange:o=>{const s=o.target;console.log("onchange Event",s.value)},options:n})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SimpleSelect {...args}>
  <SimpleSelect
onchange={(e: Event) => {
  const target = e.target as HTMLSelectElement;

  console.log('onchange Event', target.value);
}}
options={storySimpleSelectOptions}
/>
</SimpleSelect>`}}});var p=g(i,2);l(p,{name:"Focus",args:{onfocus:e=>{const t=e.target;console.log("onfocus Event",t)}},children:(e,t)=>{r(e,{onfocus:o=>{const s=o.target;console.log("onfocus Event",s)},options:n})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: SimpleSelectFocusEvent`"}},__svelteCsf:{rawCode:`<SimpleSelect {...args}>
  <SimpleSelect
onfocus={(e: SimpleSelectFocusEvent) => {
  const target = e.target as HTMLSelectElement;

  console.log('onfocus Event', target);
}}
options={storySimpleSelectOptions}
/>
</SimpleSelect>`}}});var v=g(p,2);l(v,{name:"Blur",args:{onblur:e=>{const t=e.target;console.log("onblur Event",t)}},children:(e,t)=>{r(e,{onblur:o=>{const s=o.target;console.log("onblur Event",s)},options:n})},$$slots:{default:!0},parameters:{docs:{description:{story:"`e: SimpleSelectFocusEvent`"}},__svelteCsf:{rawCode:`<SimpleSelect {...args}>
  <SimpleSelect
onblur={(e: SimpleSelectFocusEvent) => {
  const target = e.target as HTMLSelectElement;

  console.log('onblur Event', target);
}}
options={storySimpleSelectOptions}
/>
</SimpleSelect>`}}}),E(S,c),$()}m.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=y(m,F),j=["Change","Focus","Blur"],q={...a.Change,tags:["svelte-csf-v5"]},z={...a.Focus,tags:["svelte-csf-v5"]},D={...a.Blur,tags:["svelte-csf-v5"]};export{D as Blur,q as Change,z as Focus,j as __namedExportsOrder,F as default};
