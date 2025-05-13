import{i as y,t as b,a as B,b as l}from"./props-DjujHgll.js";import{p as _,f as w,s as p,a as C}from"./context-D350OWv3.js";import{c as P,d as x}from"./create-runtime-stories-BmhrnokL.js";import{f as A}from"./index-fRFe1AOP.js";import{s as k,B as s}from"./Button.stories-BQvTR9Bi.js";import{I as e}from"./Icon-Bp5WpGd_.js";import"./index-CfOrKyLd.js";import"./attributes-BgNp7-AK.js";import"./class-D-tO7f_P.js";import"./style-CgXbQjLK.js";import"./this-JyHDzNFV.js";import"./index-client-DoNoRUyr.js";const D={component:s,tags:["autodocs"],argTypes:k,args:{onclick:A()},parameters:{docs:{description:{component:""}}}},{Story:r}=x();var S=b("<!> <!> <!> <!>",1);function $(g,h){_(h,!1),y();var u=S(),d=w(u);r(d,{name:"Icon Button",args:{compact:!0},children:(o,c)=>{s(o,{compact:!0,children:(n,t)=>{e(n,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/"}},__svelteCsf:{rawCode:`<Button {...args}>
  <Button compact>
<Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>
</Button>`}}});var m=p(d,2);r(m,{name:"Icon Button Circular",args:{compact:!0,roundness:"full"},children:(o,c)=>{s(o,{roundness:"full",compact:!0,children:(n,t)=>{e(n,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Circualr Icon button."}},__svelteCsf:{rawCode:`<Button {...args}>
  <Button roundness="full" compact>
<Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>
</Button>`}}});var f=p(m,2);r(f,{name:"Icon Before",children:(o,c)=>{s(o,{before:t=>{e(t,{icon:"material-symbols:content-copy"})},children:(t,v)=>{var i=B("Copy");l(t,i)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button {...args}>
  <Button>
{#snippet before()}
  <Icon icon="material-symbols:content-copy" />
{/snippet}
Copy
</Button>
</Button>`}}});var I=p(f,2);r(I,{name:"Icon After",children:(o,c)=>{s(o,{after:t=>{e(t,{icon:"material-symbols:download-2"})},children:(t,v)=>{var i=B("Download");l(t,i)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button {...args}>
  <Button>
{#snippet after()}
  <Icon icon="material-symbols:download-2" />
{/snippet}
Download
</Button>
</Button>`}}}),l(g,u),C()}$.__docgen={version:3,name:"IconButton.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=P($,D),J=["IconButton","IconButtonCircular","IconBefore","IconAfter"],K={...a.IconButton,tags:["svelte-csf-v5"]},L={...a.IconButtonCircular,tags:["svelte-csf-v5"]},N={...a.IconBefore,tags:["svelte-csf-v5"]},Q={...a.IconAfter,tags:["svelte-csf-v5"]};export{Q as IconAfter,N as IconBefore,K as IconButton,L as IconButtonCircular,J as __namedExportsOrder,D as default};
