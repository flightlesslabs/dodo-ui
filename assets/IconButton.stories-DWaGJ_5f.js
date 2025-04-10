import{i as b,t as _,a as $,b as l}from"./props-PO_8iSUF.js";import{p as v,f as w,s as p,a as C}from"./context-D2MPbbZG.js";import{c as P,d as x}from"./create-runtime-stories-BF-UGU4N.js";import{f as A}from"./index-fRFe1AOP.js";import{s as k,B as e}from"./Button.stories-CS4oRgaW.js";import{I as s}from"./Icon-9O-AO5SR.js";import"./index-CfOrKyLd.js";import"./attributes-242B7gdq.js";import"./class-x-I183eY.js";import"./style-CDVVNY1l.js";import"./this-5E0zuglI.js";import"./index-client-BTUk2w0G.js";const D={component:e,tags:["autodocs"],argTypes:k,args:{onclick:A()},parameters:{docs:{description:{component:""}}}},{Story:r}=x();var S=_("<!> <!> <!> <!>",1);function h(B,I){v(I,!1),b();var d=S(),u=w(d);r(u,{name:"Icon Button",args:{compact:!0},children:(o,i)=>{e(o,{compact:!0,children:(n,t)=>{s(n,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/"}},__svelteCsf:{rawCode:`<Button compact>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var m=p(u,2);r(m,{name:"Icon Button Circular",args:{compact:!0,roundness:"full"},children:(o,i)=>{e(o,{roundness:"full",compact:!0,children:(n,t)=>{s(n,{icon:"material-symbols:app-badging",width:"18",height:"18"})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Circualr Icon button."}},__svelteCsf:{rawCode:`<Button roundness="full" compact>
  <Icon icon="material-symbols:app-badging" width="18" height="18" />
</Button>`}}});var f=p(m,2);r(f,{name:"Icon Before",children:(o,i)=>{e(o,{before:t=>{s(t,{icon:"material-symbols:content-copy"})},children:(t,y)=>{var c=$("Copy");l(t,c)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet before()}
    <Icon icon="material-symbols:content-copy" />
  {/snippet}
  Copy
</Button>`}}});var g=p(f,2);r(g,{name:"Icon After",children:(o,i)=>{e(o,{after:t=>{s(t,{icon:"material-symbols:download-2"})},children:(t,y)=>{var c=$("Download");l(t,c)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Button with an icon in front."}},__svelteCsf:{rawCode:`<Button>
  {#snippet after()}
    <Icon icon="material-symbols:download-2" />
  {/snippet}
  Download
</Button>`}}}),l(B,d),C()}h.__docgen={version:3,name:"IconButton.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=P(h,D),J=["IconButton","IconButtonCircular","IconBefore","IconAfter"],K=a.IconButton,L=a.IconButtonCircular,N=a.IconBefore,Q=a.IconAfter;export{Q as IconAfter,N as IconBefore,K as IconButton,L as IconButtonCircular,J as __namedExportsOrder,D as default};
