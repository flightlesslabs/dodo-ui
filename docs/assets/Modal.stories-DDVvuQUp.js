import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Dt as t,It as n,Ot as r,Rt as i,Xt as a,Yt as o,_t as s,ct as c,ft as l,jt as u,on as d,ot as f,p,pn as m,sn as h}from"./iframe-Dx_RV1xH.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-BmbbgM7A.js";import{r as b,t as x}from"./Button-Bc-cLDhd.js";import{h as S,i as C}from"./dist-BYSjHjmV.js";import{n as w,t as T}from"./Text-43fMg-Oc.js";import{n as E,t as D}from"./Modal-DzlAOOTR.js";import{n as O,t as k}from"./ModalCard-CzmO46tI.js";function A(e,i){a(i,!0);var c=V(),p=r(c);P(p,{name:`Default`,asChild:!0,children:(e,t)=>{var i=z(),a=r(i);x(a,{onclick:()=>n(F,!0),children:(e,t)=>{d();var n=l(`Open Modal`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);D(o,{title:`Modal title`,get open(){return s(F)},set open(e){n(F,e,!0)},controls:e=>{x(e,{onclick:()=>n(F,!1),children:(e,t)=>{d();var n=l(`Okay`);f(e,n)},$$slots:{default:!0}})},children:(e,t)=>{d();var n=l(`This is a basic modal with a title and a single action.`);f(e,n)},$$slots:{controls:!0,default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var m=u(p,2);P(m,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var i=z(),a=r(i);x(a,{onclick:()=>n(I,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);D(o,{title:`Alignment Example`,controlsAlignment:`start`,get open(){return s(I)},set open(e){n(I,e,!0)},controls:e=>{var t=z(),i=r(t);x(i,{onclick:()=>n(I,!1),children:(e,t)=>{d();var n=l(`Cancel`);f(e,n)},$$slots:{default:!0}});var a=u(i,2);x(a,{onclick:()=>n(I,!1),children:(e,t)=>{d();var n=l(`Confirm`);f(e,n)},$$slots:{default:!0}}),f(e,t)},children:(e,t)=>{d();var n=l(`Controls can be aligned differently.`);f(e,n)},$$slots:{controls:!0,default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=u(m,2);P(g,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var i=z(),a=r(i);x(a,{onclick:()=>n(L,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);D(o,{get open(){return s(L)},set open(e){n(L,e,!0)},customTitle:e=>{T(e,{color:`danger`,children:(e,t)=>{d();var n=l(`⚠ Warning`);f(e,n)},$$slots:{default:!0}})},controls:e=>{var t=z(),i=r(t);x(i,{onclick:()=>n(L,!1),children:(e,t)=>{d();var n=l(`Cancel`);f(e,n)},$$slots:{default:!0}});var a=u(i,2);x(a,{color:`danger`,onclick:()=>n(L,!1),children:(e,t)=>{d();var n=l(`Delete`);f(e,n)},$$slots:{default:!0}}),f(e,t)},children:(e,t)=>{d();var n=l(`This action cannot be undone.`);f(e,n)},$$slots:{customTitle:!0,controls:!0,default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}});var _=u(g,2);P(_,{name:`Custom Modal Card`,asChild:!0,children:(e,i)=>{var a=z(),o=r(a);x(o,{onclick:()=>n(R,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var c=u(o,2);D(c,{get open(){return s(R)},set open(e){n(R,e,!0)},customModalCard:e=>{k(e,{onclear:()=>n(R,!1),children:(e,r)=>{var i=B(),a=t(i);T(a,{children:(e,t)=>{d();var n=l(`Delete Item`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);T(o,{children:(e,t)=>{d();var n=l(`Are you sure you want to delete this item? This action cannot be undone.`);f(e,n)},$$slots:{default:!0}});var s=u(o,2),c=t(s);x(c,{onclick:()=>n(R,!1),children:(e,t)=>{d();var n=l(`Cancel`);f(e,n)},$$slots:{default:!0}});var p=u(c,2);x(p,{color:`danger`,onclick:()=>n(R,!1),children:(e,t)=>{d();var n=l(`Delete`);f(e,n)},$$slots:{default:!0}}),h(s),h(i),f(e,i)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),f(e,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</Modal>`}}}),f(e,c),o()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{m(),g(),b(),S(),w(),O(),E(),p(),_(),j=`


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
 `,M={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:C,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},N={component:D,tags:[`autodocs`],argTypes:M,parameters:{layout:`fullscreen`,docs:{description:{component:j}}}},{Story:P}=v(N),F=i(!1),I=i(!1),L=i(!1),R=i(!1),z=c(`<!> <!>`,1),B=c(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),V=c(`<!> <!> <!> <!>`,1),A.__docgen={data:[],name:`Modal.stories.svelte`},H=y(A,N),U=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],W={...H.Default,tags:[`svelte-csf-v5`]},G={...H.ControlsAlignment,tags:[`svelte-csf-v5`]},K={...H.CustomTitle,tags:[`svelte-csf-v5`]},q={...H.CustomModalCard,tags:[`svelte-csf-v5`]}})))()}J();export{G as ControlsAlignment,q as CustomModalCard,K as CustomTitle,W as Default,U as __namedExportsOrder,N as default,M as storyModalArgTypes};