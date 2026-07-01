import{i as e}from"./preload-helper-CuCQULJj.js";import{Ct as t,Et as n,Gt as r,Nt as i,Wt as a,dn as o,dt as s,et as c,f as l,jt as u,nn as d,nt as f,ot as p,tn as m,wt as h}from"./iframe-D-6HYk99.js";import{G as g,_t as _,mt as v,n as y,r as b,t as x,u as S,vt as C}from"./create-runtime-stories-Cv_8PuEr.js";import{f as w,m as T,t as E}from"./dist-CJi74XPO.js";function D(e,i){r(i,!0);var o=B(),l=h(o);j(l,{name:`Default`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);v(i,{onclick:()=>u(M,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Confirm Dialog title`,get open(){return s(M)},set open(e){u(M,e,!0)},children:(e,t)=>{m(),c(e,p(`This is a basic ConfirmDialog with a title and a single action.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<ConfirmDialog bind:open={openDefault} title="Confirm Dialog title">
  This is a basic ConfirmDialog with a title and a single action.
</ConfirmDialog>`}}});var f=n(l,2);j(f,{name:`Accept Button Props`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);v(i,{onclick:()=>u(N,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Confirm Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return s(N)},set open(e){u(N,e,!0)},children:(e,t)=>{m(),c(e,p(`This is a basic ConfirmDialog with a title and a single action.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<ConfirmDialog
  bind:open={openAcceptButtonProps}
  title="Confirm Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic ConfirmDialog with a title and a single action.
</ConfirmDialog>`}}});var g=n(f,2);j(g,{name:`Custom Accept Button`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);v(i,{onclick:()=>u(P,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Confirm Dialog title`,get open(){return s(P)},set open(e){u(P,e,!0)},customAcceptButton:e=>{v(e,{compact:!0,onclick:()=>u(P,!1),children:(e,t)=>{m(),c(e,p(`👍`))},$$slots:{default:!0}})},children:(e,t)=>{m(),c(e,p(`This is a basic ConfirmDialog with a title and a single action.`))},$$slots:{customAcceptButton:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<ConfirmDialog bind:open={openCustomAcceptButton} title="Confirm Dialog title">
  This is a basic ConfirmDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</ConfirmDialog>`}}});var _=n(g,2);j(_,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);v(i,{onclick:()=>u(F,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return s(F)},set open(e){u(F,e,!0)},children:(e,t)=>{m(),c(e,p(`Controls can be aligned differently.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<ConfirmDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</ConfirmDialog>`}}});var y=n(_,2);j(y,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);v(i,{onclick:()=>u(I,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{get open(){return s(I)},set open(e){u(I,e,!0)},customTitle:e=>{S(e,{color:`danger`,children:(e,t)=>{m(),c(e,p(`⚠ Warning`))},$$slots:{default:!0}})},children:(e,t)=>{m(),c(e,p(`This action cannot be undone.`))},$$slots:{customTitle:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<ConfirmDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</ConfirmDialog>`}}}),j(n(y,2),{name:`Custom Modal Card`,asChild:!0,children:(e,r)=>{var i=R(),a=h(i);v(a,{onclick:()=>u(L,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(a,2),{get open(){return s(L)},set open(e){u(L,e,!0)},customModalCard:e=>{T(e,{onclear:()=>u(L,!1),get open(){return s(L)},set open(e){u(L,e,!0)},children:(e,r)=>{var i=z(),a=t(i);S(a,{children:(e,t)=>{m(),c(e,p(`Delete Item`))},$$slots:{default:!0}}),S(n(a,2),{children:(e,t)=>{m(),c(e,p(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}}),d(i),c(e,i)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),c(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

<ConfirmDialog bind:open={openCustomModalcard}>
  {#snippet customModalCard()}
    <ConfirmDialogCard
      onclear={() => (openCustomModalcard = false)}
      bind:open={openCustomModalcard}
    >
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text>Delete Item</Text>

        <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
      </div>
    </ConfirmDialogCard>
  {/snippet}
</ConfirmDialog>`}}}),c(e,o),a()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{o(),C(),b(),E(),l(),y(),O=`

ConfirmDialog based on Modal

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { ConfirmDialog } from '@flightlesslabs/dodo-ui-bits';

 <ConfirmDialog />
 \`\`\`

 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=_(A),M=i(!1),N=i(!1),P=i(!1),F=i(!1),I=i(!1),L=i(!1),R=f(`<!> <!>`,1),z=f(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),B=f(`<!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`ConfirmDialog.stories.svelte`},V=x(D,A),H=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],U={...V.Default,tags:[`svelte-csf-v5`]},W={...V.AcceptButtonProps,tags:[`svelte-csf-v5`]},G={...V.CustomAcceptButton,tags:[`svelte-csf-v5`]},K={...V.ControlsAlignment,tags:[`svelte-csf-v5`]},q={...V.CustomTitle,tags:[`svelte-csf-v5`]},J={...V.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{W as AcceptButtonProps,K as ControlsAlignment,G as CustomAcceptButton,J as CustomModalCard,q as CustomTitle,U as Default,H as __namedExportsOrder,A as default,k as storyConfirmDialogArgTypes};