import{i as e}from"./preload-helper-Cs4UwXAW.js";import{At as t,It as n,V as r,W as i,at as a,bt as o,dt as s,f as c,it as l,kt as u,lt as d,q as f,rt as p,xt as m,z as h}from"./iframe-DV24syQ7.js";import{K as g,W as _,k as v,n as y,q as b,r as x,s as S,t as C}from"./create-runtime-stories-CpqXL_Zt.js";import{l as w,t as T,u as E}from"./dist-CzTxElfr.js";function D(e,n){m(n,!0);var r=G(),s=l(r);j(s,{name:`Default`,asChild:!0,children:(e,t)=>{var n=R(),r=l(n);_(r,{onclick:()=>d(M,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{title:`Inform Dialog title`,get open(){return f(M)},set open(e){d(M,e,!0)},children:(e,t)=>{u(),h(e,i(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<InformDialog bind:open={openDefault} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var c=a(s,2);j(c,{name:`Accept Button Props`,asChild:!0,children:(e,t)=>{var n=z(),r=l(n);_(r,{onclick:()=>d(N,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{title:`Inform Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return f(N)},set open(e){d(N,e,!0)},children:(e,t)=>{u(),h(e,i(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<InformDialog
  bind:open={openAcceptButtonProps}
  title="Inform Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var g=a(c,2);j(g,{name:`Custom Accept Button`,asChild:!0,children:(e,t)=>{var n=B(),r=l(n);_(r,{onclick:()=>d(P,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{title:`Inform Dialog title`,get open(){return f(P)},set open(e){d(P,e,!0)},customAcceptButton:e=>{_(e,{compact:!0,onclick:()=>d(P,!1),children:(e,t)=>{u(),h(e,i(`👍`))},$$slots:{default:!0}})},children:(e,t)=>{u(),h(e,i(`This is a basic InformDialog with a title and a single action.`))},$$slots:{customAcceptButton:!0,default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</InformDialog>`}}});var v=a(g,2);j(v,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var n=V(),r=l(n);_(r,{onclick:()=>d(F,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return f(F)},set open(e){d(F,e,!0)},children:(e,t)=>{u(),h(e,i(`Controls can be aligned differently.`))},$$slots:{default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<InformDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</InformDialog>`}}});var y=a(v,2);j(y,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var n=H(),r=l(n);_(r,{onclick:()=>d(I,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(r,2),{get open(){return f(I)},set open(e){d(I,e,!0)},customTitle:e=>{S(e,{color:`danger`,children:(e,t)=>{u(),h(e,i(`⚠ Warning`))},$$slots:{default:!0}})},children:(e,t)=>{u(),h(e,i(`This action cannot be undone.`))},$$slots:{customTitle:!0,default:!0}}),h(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<InformDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</InformDialog>`}}}),j(a(y,2),{name:`Custom Modal Card`,asChild:!0,children:(e,n)=>{var r=W(),o=l(r);_(o,{onclick:()=>d(L,!0),children:(e,t)=>{u(),h(e,i(`Open`))},$$slots:{default:!0}}),w(a(o,2),{get open(){return f(L)},set open(e){d(L,e,!0)},customModalCard:e=>{E(e,{onclear:()=>d(L,!1),get open(){return f(L)},set open(e){d(L,e,!0)},children:(e,n)=>{var r=U(),o=p(r);S(o,{children:(e,t)=>{u(),h(e,i(`Delete Item`))},$$slots:{default:!0}}),S(a(o,2),{children:(e,t)=>{u(),h(e,i(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}}),t(r),h(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),h(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</InformDialog>`}}}),h(e,r),o()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),b(),x(),T(),c(),y(),O=`

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

 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:v,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=g(A),M=s(!1),N=s(!1),P=s(!1),F=s(!1),I=s(!1),L=s(!1),R=r(`<!> <!>`,1),z=r(`<!> <!>`,1),B=r(`<!> <!>`,1),V=r(`<!> <!>`,1),H=r(`<!> <!>`,1),U=r(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),W=r(`<!> <!>`,1),G=r(`<!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`InformDialog.stories.svelte`},K=C(D,A),q=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],J={...K.Default,tags:[`svelte-csf-v5`]},Y={...K.AcceptButtonProps,tags:[`svelte-csf-v5`]},X={...K.CustomAcceptButton,tags:[`svelte-csf-v5`]},Z={...K.ControlsAlignment,tags:[`svelte-csf-v5`]},Q={...K.CustomTitle,tags:[`svelte-csf-v5`]},$={...K.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{Y as AcceptButtonProps,Z as ControlsAlignment,X as CustomAcceptButton,$ as CustomModalCard,Q as CustomTitle,J as Default,q as __namedExportsOrder,A as default,k as storyInformDialogArgTypes};