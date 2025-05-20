import{i as y,t as _,a as f,b as i}from"./props-AgMr7LvY.js";import{p as b,f as C,s as c,a as w}from"./context-BFm1olXO.js";import{c as x,d as P}from"./create-runtime-stories-Dyt5eNtm.js";import{s as A,B as p}from"./Button.stories-Cr4KFWbR.js";import{I as e}from"./Icon-BwTz-FTP.js";import"./index-CfOrKyLd.js";import"./attributes-DJYA4uV4.js";import"./class-C2_huPTn.js";import"./style-D689KwYh.js";import"./this-BXiSSgcw.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./weight-CLgIXx1C.js";import"./size-C-8mwSpB.js";import"./index-client-CDLWwPMC.js";const D={component:p,tags:["autodocs"],argTypes:A,parameters:{docs:{description:{component:""}}}},{Story:n}=P();var S=_("<!> <!> <!> <!>",1);function g(h,B){b(B,!1),y();var l=S(),d=C(l);n(d,{name:"Icon Button",args:{compact:!0},children:(t,r)=>{e(t,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0},parameters:{docs:{description:{story:"Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/"}},__svelteCsf:{rawCode:`<Button {...args}>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var m=c(d,2);n(m,{name:"Icon Button Circular",args:{compact:!0,roundness:"full"},children:(t,r)=>{e(t,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0},parameters:{docs:{description:{story:"Circualr Icon button."}},__svelteCsf:{rawCode:`<Button {...args}>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var u=c(m,2);n(u,{name:"Icon Before",asChild:!0,children:(t,r)=>{p(t,{before:o=>{e(o,{icon:"material-symbols:content-copy"})},children:(o,v)=>{var a=f("Copy");i(o,a)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet before()}
    <Icon icon="material-symbols:content-copy" />
  {/snippet}
  Copy
</Button>`}}});var $=c(u,2);n($,{name:"Icon After",asChild:!0,children:(t,r)=>{p(t,{after:o=>{e(o,{icon:"material-symbols:download-2"})},children:(o,v)=>{var a=f("Download");i(o,a)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet after()}
    <Icon icon="material-symbols:download-2" />
  {/snippet}
  Download
</Button>`}}}),i(h,l),w()}g.__docgen={version:3,name:"IconButton.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const s=x(g,D),L=["IconButton","IconButtonCircular","IconBefore","IconAfter"],N={...s.IconButton,tags:["svelte-csf-v5"]},Q={...s.IconButtonCircular,tags:["svelte-csf-v5"]},U={...s.IconBefore,tags:["svelte-csf-v5"]},V={...s.IconAfter,tags:["svelte-csf-v5"]};export{V as IconAfter,U as IconBefore,N as IconButton,Q as IconButtonCircular,L as __namedExportsOrder,D as default};
