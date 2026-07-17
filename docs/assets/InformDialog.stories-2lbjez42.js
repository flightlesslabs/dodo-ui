import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,St as n,Wt as r,dn as i,dt as a,et as o,f as s,jt as c,kt as l,nn as u,nt as d,ot as f,tn as p,wt as m,xt as h}from"./iframe-CGmTcMmT.js";import{U as g,ft as _,gt as v,ht as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-DBsIqukf.js";import{g as w,t as T,v as E}from"./dist-CNVjs9dK.js";function D(e,i){t(i,!0);var s=B(),c=n(s);j(c,{name:`Default`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(M,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{title:`Inform Dialog title`,get open(){return a(M)},set open(e){l(M,e,!0)},children:(e,t)=>{p(),o(e,f(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<InformDialog bind:open={openDefault} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var d=m(c,2);j(d,{name:`Accept Button Props`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(N,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{title:`Inform Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return a(N)},set open(e){l(N,e,!0)},children:(e,t)=>{p(),o(e,f(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<InformDialog
  bind:open={openAcceptButtonProps}
  title="Inform Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var g=m(d,2);j(g,{name:`Custom Accept Button`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(P,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{title:`Inform Dialog title`,get open(){return a(P)},set open(e){l(P,e,!0)},customAcceptButton:e=>{_(e,{compact:!0,onclick:()=>l(P,!1),children:(e,t)=>{p(),o(e,f(`👍`))},$$slots:{default:!0}})},children:(e,t)=>{p(),o(e,f(`This is a basic InformDialog with a title and a single action.`))},$$slots:{customAcceptButton:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</InformDialog>`}}});var v=m(g,2);j(v,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(F,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return a(F)},set open(e){l(F,e,!0)},children:(e,t)=>{p(),o(e,f(`Controls can be aligned differently.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<InformDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</InformDialog>`}}});var y=m(v,2);j(y,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(I,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{get open(){return a(I)},set open(e){l(I,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,t)=>{p(),o(e,f(`⚠ Warning`))},$$slots:{default:!0}})},children:(e,t)=>{p(),o(e,f(`This action cannot be undone.`))},$$slots:{customTitle:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<InformDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</InformDialog>`}}});var b=m(y,2);j(b,{name:`Custom Modal Card`,asChild:!0,children:(e,t)=>{var r=R(),i=n(r);_(i,{onclick:()=>l(L,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),w(m(i,2),{get open(){return a(L)},set open(e){l(L,e,!0)},customModalCard:e=>{E(e,{onclear:()=>l(L,!1),get open(){return a(L)},set open(e){l(L,e,!0)},children:(e,t)=>{var n=z(),r=h(n);C(r,{children:(e,t)=>{p(),o(e,f(`Delete Item`))},$$slots:{default:!0}}),C(m(r,2),{children:(e,t)=>{p(),o(e,f(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}}),u(n),o(e,n)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</InformDialog>`}}}),o(e,s),r()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{i(),v(),x(),T(),s(),b(),O=`

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

 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=c(!1),N=c(!1),P=c(!1),F=c(!1),I=c(!1),L=c(!1),R=d(`<!> <!>`,1),z=d(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),B=d(`<!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`InformDialog.stories.svelte`},V=S(D,A),H=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],U={...V.Default,tags:[`svelte-csf-v5`]},W={...V.AcceptButtonProps,tags:[`svelte-csf-v5`]},G={...V.CustomAcceptButton,tags:[`svelte-csf-v5`]},K={...V.ControlsAlignment,tags:[`svelte-csf-v5`]},q={...V.CustomTitle,tags:[`svelte-csf-v5`]},J={...V.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{W as AcceptButtonProps,K as ControlsAlignment,G as CustomAcceptButton,J as CustomModalCard,q as CustomTitle,U as Default,H as __namedExportsOrder,A as default,k as storyInformDialogArgTypes};