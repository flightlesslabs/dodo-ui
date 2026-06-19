import{i as e}from"./preload-helper-B51ZT_On.js";import{Ct as t,Et as n,Gt as r,Nt as i,Wt as a,dn as o,dt as s,et as c,f as l,jt as u,nn as d,nt as f,ot as p,tn as m,wt as h}from"./iframe-BCqsbs7L.js";import{G as g,dt as _,ht as v,mt as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-BAp6BU8T.js";import{S as w,b as T,t as E}from"./dist-BNzVGN-e.js";function D(e,i){r(i,!0);var o=R(),l=h(o);j(l,{name:`Default`,asChild:!0,children:(e,t)=>{var r=I(),i=h(r);_(i,{onclick:()=>u(M,!0),children:(e,t)=>{m(),c(e,p(`Open Modal`))},$$slots:{default:!0}}),T(n(i,2),{title:`Modal title`,get open(){return s(M)},set open(e){u(M,e,!0)},controls:e=>{_(e,{onclick:()=>u(M,!1),children:(e,t)=>{m(),c(e,p(`Okay`))},$$slots:{default:!0}})},children:(e,t)=>{m(),c(e,p(`This is a basic modal with a title and a single action.`))},$$slots:{controls:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var f=n(l,2);j(f,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var r=I(),i=h(r);_(i,{onclick:()=>u(N,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),T(n(i,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return s(N)},set open(e){u(N,e,!0)},controls:e=>{var t=I(),r=h(t);_(r,{onclick:()=>u(N,!1),children:(e,t)=>{m(),c(e,p(`Cancel`))},$$slots:{default:!0}}),_(n(r,2),{onclick:()=>u(N,!1),children:(e,t)=>{m(),c(e,p(`Confirm`))},$$slots:{default:!0}}),c(e,t)},children:(e,t)=>{m(),c(e,p(`Controls can be aligned differently.`))},$$slots:{controls:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=n(f,2);j(g,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var r=I(),i=h(r);_(i,{onclick:()=>u(P,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),T(n(i,2),{get open(){return s(P)},set open(e){u(P,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,t)=>{m(),c(e,p(`⚠ Warning`))},$$slots:{default:!0}})},controls:e=>{var t=I(),r=h(t);_(r,{onclick:()=>u(P,!1),children:(e,t)=>{m(),c(e,p(`Cancel`))},$$slots:{default:!0}}),_(n(r,2),{color:`danger`,onclick:()=>u(P,!1),children:(e,t)=>{m(),c(e,p(`Delete`))},$$slots:{default:!0}}),c(e,t)},children:(e,t)=>{m(),c(e,p(`This action cannot be undone.`))},$$slots:{customTitle:!0,controls:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}}),j(n(g,2),{name:`Custom Modal Card`,asChild:!0,children:(e,r)=>{var i=I(),a=h(i);_(a,{onclick:()=>u(F,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),T(n(a,2),{get open(){return s(F)},set open(e){u(F,e,!0)},customModalCard:e=>{w(e,{onclear:()=>u(F,!1),children:(e,r)=>{var i=L(),a=t(i);C(a,{children:(e,t)=>{m(),c(e,p(`Delete Item`))},$$slots:{default:!0}});var o=n(a,2);C(o,{children:(e,t)=>{m(),c(e,p(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}});var s=n(o,2),l=t(s);_(l,{onclick:()=>u(F,!1),children:(e,t)=>{m(),c(e,p(`Cancel`))},$$slots:{default:!0}}),_(n(l,2),{color:`danger`,onclick:()=>u(F,!1),children:(e,t)=>{m(),c(e,p(`Delete`))},$$slots:{default:!0}}),d(s),d(i),c(e,i)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),c(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</Modal>`}}}),c(e,o),a()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{o(),v(),x(),E(),l(),b(),O=`


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
 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:T,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=i(!1),N=i(!1),P=i(!1),F=i(!1),I=f(`<!> <!>`,1),L=f(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),R=f(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`Modal.stories.svelte`},z=S(D,A),B=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],V={...z.Default,tags:[`svelte-csf-v5`]},H={...z.ControlsAlignment,tags:[`svelte-csf-v5`]},U={...z.CustomTitle,tags:[`svelte-csf-v5`]},W={...z.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{H as ControlsAlignment,W as CustomModalCard,U as CustomTitle,V as Default,B as __namedExportsOrder,A as default,k as storyModalArgTypes};