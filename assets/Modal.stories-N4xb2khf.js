import{i as e}from"./preload-helper-Cs4UwXAW.js";import{At as t,It as n,V as r,W as i,at as a,bt as o,dt as s,f as c,it as l,kt as u,lt as d,q as f,rt as p,xt as m,z as h}from"./iframe-RE4W-S_v.js";import{K as g,W as _,k as v,n as y,q as b,r as x,s as S,t as C}from"./create-runtime-stories-YqVOZxbN.js";import{d as w,f as T,t as E}from"./dist-DfjzhqNI.js";function D(e,n){m(n,!0);var r=U(),s=l(r);j(s,{name:`Default`,asChild:!0,children:(e,t)=>{var n=I(),r=l(n);_(r,{onclick:()=>d(M,!0),children:(e,t)=>{u(),h(e,i(`Open Modal`))},$$slots:{default:!0}}),w(a(r,2),{title:`Modal title`,get open(){return f(M)},set open(e){d(M,e,!0)},controls:e=>{_(e,{onclick:()=>d(M,!1),children:(e,t)=>{u(),h(e,i(`Okay`))},$$slots:{default:!0}})},children:(e,t)=>{u(),h(e,i(`This is a basic modal with a title and a single action.`))},$$slots:{controls:!0,default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var c=a(s,2);j(c,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var n=R(),r=l(n);_(r,{onclick:()=>d(N,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return f(N)},set open(e){d(N,e,!0)},controls:e=>{var t=L(),n=l(t);_(n,{onclick:()=>d(N,!1),children:(e,t)=>{u(),h(e,i(`Cancel`))},$$slots:{default:!0}}),_(a(n,2),{onclick:()=>d(N,!1),children:(e,t)=>{u(),h(e,i(`Confirm`))},$$slots:{default:!0}}),h(e,t)},children:(e,t)=>{u(),h(e,i(`Controls can be aligned differently.`))},$$slots:{controls:!0,default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=a(c,2);j(g,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var n=B(),r=l(n);_(r,{onclick:()=>d(P,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{get open(){return f(P)},set open(e){d(P,e,!0)},customTitle:e=>{S(e,{color:`danger`,children:(e,t)=>{u(),h(e,i(`⚠ Warning`))},$$slots:{default:!0}})},controls:e=>{var t=z(),n=l(t);_(n,{onclick:()=>d(P,!1),children:(e,t)=>{u(),h(e,i(`Cancel`))},$$slots:{default:!0}}),_(a(n,2),{color:`danger`,onclick:()=>d(P,!1),children:(e,t)=>{u(),h(e,i(`Delete`))},$$slots:{default:!0}}),h(e,t)},children:(e,t)=>{u(),h(e,i(`This action cannot be undone.`))},$$slots:{customTitle:!0,controls:!0,default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}}),j(a(g,2),{name:`Custom Modal Card`,asChild:!0,children:(e,n)=>{var r=H(),o=l(r);_(o,{onclick:()=>d(F,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(o,2),{get open(){return f(F)},set open(e){d(F,e,!0)},customModalCard:e=>{T(e,{onclear:()=>d(F,!1),children:(e,n)=>{var r=V(),o=p(r);S(o,{children:(e,t)=>{u(),h(e,i(`Delete Item`))},$$slots:{default:!0}});var s=a(o,2);S(s,{children:(e,t)=>{u(),h(e,i(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}});var c=a(s,2),l=p(c);_(l,{onclick:()=>d(F,!1),children:(e,t)=>{u(),h(e,i(`Cancel`))},$$slots:{default:!0}}),_(a(l,2),{color:`danger`,onclick:()=>d(F,!1),children:(e,t)=>{u(),h(e,i(`Delete`))},$$slots:{default:!0}}),t(c),t(r),h(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),h(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</Modal>`}}}),h(e,r),o()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{n(),b(),x(),E(),c(),y(),O=`


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
 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:v,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=g(A),M=s(!1),N=s(!1),P=s(!1),F=s(!1),I=r(`<!> <!>`,1),L=r(`<!> <!>`,1),R=r(`<!> <!>`,1),z=r(`<!> <!>`,1),B=r(`<!> <!>`,1),V=r(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),H=r(`<!> <!>`,1),U=r(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`Modal.stories.svelte`},W=C(D,A),G=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.ControlsAlignment,tags:[`svelte-csf-v5`]},J={...W.CustomTitle,tags:[`svelte-csf-v5`]},Y={...W.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{q as ControlsAlignment,Y as CustomModalCard,J as CustomTitle,K as Default,G as __namedExportsOrder,A as default,k as storyModalArgTypes};