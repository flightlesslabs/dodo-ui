import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,Ct as n,Gt as r,Kt as i,Mt as a,St as o,Tt as s,ft as c,ln as l,nn as u,p as d,rn as f,rt as p,st as m,tt as h}from"./iframe-CvWSf_Hq.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-CMZqfqE5.js";import{r as b,t as x}from"./Button-DCOB9ik1.js";import{h as S,i as C}from"./dist-BYSjHjmV.js";import{n as w,t as T}from"./Text-DNIz78MF.js";import{n as E,t as D}from"./Modal-X5Ff1YgY.js";import{n as O,t as k}from"./ModalCard-h_qyBWz-.js";function A(e,a){i(a,!0);var l=V(),d=n(l);P(d,{name:`Default`,asChild:!0,children:(e,r)=>{var i=z(),a=n(i);x(a,{onclick:()=>t(F,!0),children:(e,t)=>{u();var n=m(`Open Modal`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);D(o,{title:`Modal title`,get open(){return c(F)},set open(e){t(F,e,!0)},controls:e=>{x(e,{onclick:()=>t(F,!1),children:(e,t)=>{u();var n=m(`Okay`);h(e,n)},$$slots:{default:!0}})},children:(e,t)=>{u();var n=m(`This is a basic modal with a title and a single action.`);h(e,n)},$$slots:{controls:!0,default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var p=s(d,2);P(p,{name:`Controls Alignment`,asChild:!0,children:(e,r)=>{var i=z(),a=n(i);x(a,{onclick:()=>t(I,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);D(o,{title:`Alignment Example`,controlsAlignment:`start`,get open(){return c(I)},set open(e){t(I,e,!0)},controls:e=>{var r=z(),i=n(r);x(i,{onclick:()=>t(I,!1),children:(e,t)=>{u();var n=m(`Cancel`);h(e,n)},$$slots:{default:!0}});var a=s(i,2);x(a,{onclick:()=>t(I,!1),children:(e,t)=>{u();var n=m(`Confirm`);h(e,n)},$$slots:{default:!0}}),h(e,r)},children:(e,t)=>{u();var n=m(`Controls can be aligned differently.`);h(e,n)},$$slots:{controls:!0,default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=s(p,2);P(g,{name:`Custom Title`,asChild:!0,children:(e,r)=>{var i=z(),a=n(i);x(a,{onclick:()=>t(L,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);D(o,{get open(){return c(L)},set open(e){t(L,e,!0)},customTitle:e=>{T(e,{color:`danger`,children:(e,t)=>{u();var n=m(`⚠ Warning`);h(e,n)},$$slots:{default:!0}})},controls:e=>{var r=z(),i=n(r);x(i,{onclick:()=>t(L,!1),children:(e,t)=>{u();var n=m(`Cancel`);h(e,n)},$$slots:{default:!0}});var a=s(i,2);x(a,{color:`danger`,onclick:()=>t(L,!1),children:(e,t)=>{u();var n=m(`Delete`);h(e,n)},$$slots:{default:!0}}),h(e,r)},children:(e,t)=>{u();var n=m(`This action cannot be undone.`);h(e,n)},$$slots:{customTitle:!0,controls:!0,default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}});var _=s(g,2);P(_,{name:`Custom Modal Card`,asChild:!0,children:(e,r)=>{var i=z(),a=n(i);x(a,{onclick:()=>t(R,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var l=s(a,2);D(l,{get open(){return c(R)},set open(e){t(R,e,!0)},customModalCard:e=>{k(e,{onclear:()=>t(R,!1),children:(e,n)=>{var r=B(),i=o(r);T(i,{children:(e,t)=>{u();var n=m(`Delete Item`);h(e,n)},$$slots:{default:!0}});var a=s(i,2);T(a,{children:(e,t)=>{u();var n=m(`Are you sure you want to delete this item? This action cannot be undone.`);h(e,n)},$$slots:{default:!0}});var c=s(a,2),l=o(c);x(l,{onclick:()=>t(R,!1),children:(e,t)=>{u();var n=m(`Cancel`);h(e,n)},$$slots:{default:!0}});var d=s(l,2);x(d,{color:`danger`,onclick:()=>t(R,!1),children:(e,t)=>{u();var n=m(`Delete`);h(e,n)},$$slots:{default:!0}}),f(c),f(r),h(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

<Modal bind:open={openCustomModalcard}>
  {#snippet customModalCard()}
    <ModalCard onclear={() => (openCustomModalcard = false)}>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text>Delete Item</Text>

        <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>

        <div style="display: flex; justify-content: flex-end; gap: 8px;">
          <Button onclick={() => (openCustomModalcard = false)}>Cancel</Button>

          <Button color="danger" onclick={() => (openCustomModalcard = false)}>Delete</Button>
        </div>
      </div>
    </ModalCard>
  {/snippet}
</Modal>`}}}),h(e,l),r()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{l(),g(),b(),S(),w(),O(),E(),d(),_(),j=`


a portal based Modal dialog based on bits-ui [dialog](https://bits-ui.com/docs/components/dialog)

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { Modal } from '@flightlesslabs/dodo-ui-bits';

 <Modal />
 \`\`\`
 `,M={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:C,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},N={component:D,tags:[`autodocs`],argTypes:M,parameters:{layout:`fullscreen`,docs:{description:{component:j}}}},{Story:P}=v(N),F=a(!1),I=a(!1),L=a(!1),R=a(!1),z=p(`<!> <!>`,1),B=p(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),V=p(`<!> <!> <!> <!>`,1),A.__docgen={data:[],name:`Modal.stories.svelte`},H=y(A,N),U=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],W={...H.Default,tags:[`svelte-csf-v5`]},G={...H.ControlsAlignment,tags:[`svelte-csf-v5`]},K={...H.CustomTitle,tags:[`svelte-csf-v5`]},q={...H.CustomModalCard,tags:[`svelte-csf-v5`]}})))()}J();export{G as ControlsAlignment,q as CustomModalCard,K as CustomTitle,W as Default,U as __namedExportsOrder,N as default,M as storyModalArgTypes};