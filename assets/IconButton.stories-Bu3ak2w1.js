import{p as v,f as y,a as b,s as i,t as f,b as c,c as C}from"./iframe-C3hxeNmA.js";import{c as w,d as x}from"./create-runtime-stories-LRBVjFCg.js";import{i as A}from"./lifecycle-9HmpwKdq.js";import{B as l}from"./Button-D3n2jUR8.js";import{storyButtonArgTypes as P}from"./Button.stories-DQWVZypq.js";import{I as n}from"./Icon-BPV9euiA.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-DFU73Mj4.js";import"./this-B_qwwyck.js";import"./style-EQUeuE57.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./weight-CLgIXx1C.js";import"./size-C-8mwSpB.js";const D={component:l,tags:["autodocs"],argTypes:P,parameters:{docs:{description:{component:""}}}},{Story:e}=x();var S=y("<!> <!> <!> <!>",1);function _($,B){v(B,!1),A();var p=S(),d=b(p);e(d,{name:"Icon Button",args:{compact:!0},children:(t,r)=>{n(t,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0},parameters:{docs:{description:{story:"Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/"}},__svelteCsf:{rawCode:`<Button {...args}>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var u=i(d,2);e(u,{name:"Icon Button Circular",args:{compact:!0,roundness:"full"},children:(t,r)=>{n(t,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0},parameters:{docs:{description:{story:"Circualr Icon button."}},__svelteCsf:{rawCode:`<Button {...args}>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var m=i(u,2);e(m,{name:"Icon Before",asChild:!0,children:(t,r)=>{l(t,{before:o=>{n(o,{icon:"material-symbols:content-copy"})},children:(o,h)=>{var a=f("Copy");c(o,a)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet before()}
    <Icon icon="material-symbols:content-copy" />
  {/snippet}
  Copy
</Button>`}}});var g=i(m,2);e(g,{name:"Icon After",asChild:!0,children:(t,r)=>{l(t,{after:o=>{n(o,{icon:"material-symbols:download-2"})},children:(o,h)=>{var a=f("Download");c(o,a)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet after()}
    <Icon icon="material-symbols:download-2" />
  {/snippet}
  Download
</Button>`}}}),c($,p),C()}_.__docgen={data:[],name:"IconButton.stories.svelte"};const s=w(_,D),K=["IconButton","IconButtonCircular","IconBefore","IconAfter"],L={...s.IconButton,tags:["svelte-csf-v5"]},N={...s.IconButtonCircular,tags:["svelte-csf-v5"]},Q={...s.IconBefore,tags:["svelte-csf-v5"]},U={...s.IconAfter,tags:["svelte-csf-v5"]};export{U as IconAfter,Q as IconBefore,L as IconButton,N as IconButtonCircular,K as __namedExportsOrder,D as default};
