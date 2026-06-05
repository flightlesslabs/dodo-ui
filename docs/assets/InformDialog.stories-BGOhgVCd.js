import{i as e}from"./preload-helper-B51ZT_On.js";import{Ct as t,Et as n,Gt as r,Nt as i,Wt as a,dn as o,dt as s,et as c,f as l,jt as u,nn as d,nt as f,ot as p,tn as m,wt as h}from"./iframe-e19cdD8v.js";import{G as g,dt as _,ht as v,mt as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-aVG2uOFc.js";import{g as w,t as T,v as E}from"./dist-DcVqT8er.js";function D(e,i){r(i,!0);var o=G(),l=h(o);j(l,{name:`Default`,asChild:!0,children:(e,t)=>{var r=R(),i=h(r);_(i,{onclick:()=>u(M,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Inform Dialog title`,get open(){return s(M)},set open(e){u(M,e,!0)},children:(e,t)=>{m(),c(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<InformDialog bind:open={openDefault} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var f=n(l,2);j(f,{name:`Accept Button Props`,asChild:!0,children:(e,t)=>{var r=z(),i=h(r);_(i,{onclick:()=>u(N,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Inform Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return s(N)},set open(e){u(N,e,!0)},children:(e,t)=>{m(),c(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<InformDialog
  bind:open={openAcceptButtonProps}
  title="Inform Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var g=n(f,2);j(g,{name:`Custom Accept Button`,asChild:!0,children:(e,t)=>{var r=B(),i=h(r);_(i,{onclick:()=>u(P,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Inform Dialog title`,get open(){return s(P)},set open(e){u(P,e,!0)},customAcceptButton:e=>{_(e,{compact:!0,onclick:()=>u(P,!1),children:(e,t)=>{m(),c(e,p(`👍`))},$$slots:{default:!0}})},children:(e,t)=>{m(),c(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{customAcceptButton:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</InformDialog>`}}});var v=n(g,2);j(v,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var r=V(),i=h(r);_(i,{onclick:()=>u(F,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return s(F)},set open(e){u(F,e,!0)},children:(e,t)=>{m(),c(e,p(`Controls can be aligned differently.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<InformDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</InformDialog>`}}});var y=n(v,2);j(y,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var r=H(),i=h(r);_(i,{onclick:()=>u(I,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(i,2),{get open(){return s(I)},set open(e){u(I,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,t)=>{m(),c(e,p(`⚠ Warning`))},$$slots:{default:!0}})},children:(e,t)=>{m(),c(e,p(`This action cannot be undone.`))},$$slots:{customTitle:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<InformDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</InformDialog>`}}}),j(n(y,2),{name:`Custom Modal Card`,asChild:!0,children:(e,r)=>{var i=W(),a=h(i);_(a,{onclick:()=>u(L,!0),children:(e,t)=>{m(),c(e,p(`Open`))},$$slots:{default:!0}}),w(n(a,2),{get open(){return s(L)},set open(e){u(L,e,!0)},customModalCard:e=>{E(e,{onclear:()=>u(L,!1),get open(){return s(L)},set open(e){u(L,e,!0)},children:(e,r)=>{var i=U(),a=t(i);C(a,{children:(e,t)=>{m(),c(e,p(`Delete Item`))},$$slots:{default:!0}}),C(n(a,2),{children:(e,t)=>{m(),c(e,p(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}}),d(i),c(e,i)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),c(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

<InformDialog bind:open={openCustomModalcard}>
  {#snippet customModalCard()}
    <InformDialogCard
      onclear={() => (openCustomModalcard = false)}
      bind:open={openCustomModalcard}
    >
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <Text>Delete Item</Text>

        <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
      </div>
    </InformDialogCard>
  {/snippet}
</InformDialog>`}}}),c(e,o),a()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),v(),x(),T(),l(),b(),O=`

 InformDialog based on Modal

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`

For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { InformDialog } from '@flightlesslabs/dodo-ui-bits';

 <InformDialog />
 \`\`\`

 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=i(!1),N=i(!1),P=i(!1),F=i(!1),I=i(!1),L=i(!1),R=f(`<!> <!>`,1),z=f(`<!> <!>`,1),B=f(`<!> <!>`,1),V=f(`<!> <!>`,1),H=f(`<!> <!>`,1),U=f(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),W=f(`<!> <!>`,1),G=f(`<!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`InformDialog.stories.svelte`},K=S(D,A),q=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],J={...K.Default,tags:[`svelte-csf-v5`]},Y={...K.AcceptButtonProps,tags:[`svelte-csf-v5`]},X={...K.CustomAcceptButton,tags:[`svelte-csf-v5`]},Z={...K.ControlsAlignment,tags:[`svelte-csf-v5`]},Q={...K.CustomTitle,tags:[`svelte-csf-v5`]},$={...K.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{Y as AcceptButtonProps,Z as ControlsAlignment,X as CustomAcceptButton,$ as CustomModalCard,Q as CustomTitle,J as Default,q as __namedExportsOrder,A as default,k as storyInformDialogArgTypes};