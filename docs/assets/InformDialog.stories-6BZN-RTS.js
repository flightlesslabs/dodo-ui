import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,Ct as n,Gt as r,Kt as i,Mt as a,St as o,Tt as s,ft as c,ln as l,nn as u,p as d,rn as f,rt as p,st as m,tt as h}from"./iframe-CvWSf_Hq.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-CMZqfqE5.js";import{r as b,t as x}from"./Button-DCOB9ik1.js";import{h as S,i as C}from"./dist-BYSjHjmV.js";import{n as w,t as T}from"./Text-DNIz78MF.js";import{n as E,t as D}from"./InformDialogCard-cKKFgUJA.js";import{n as O,t as k}from"./InformDialog--KbImpgI.js";function A(e,a){i(a,!0);var l=U(),d=n(l);P(d,{name:`Default`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(F,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);k(o,{title:`Inform Dialog title`,get open(){return c(F)},set open(e){t(F,e,!0)},children:(e,t)=>{u();var n=m(`This is a basic InformDialog with a title and a single action.`);h(e,n)},$$slots:{default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<InformDialog bind:open={openDefault} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var p=s(d,2);P(p,{name:`Accept Button Props`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(I,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);k(o,{title:`Inform Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return c(I)},set open(e){t(I,e,!0)},children:(e,t)=>{u();var n=m(`This is a basic InformDialog with a title and a single action.`);h(e,n)},$$slots:{default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<InformDialog
  bind:open={openAcceptButtonProps}
  title="Inform Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var g=s(p,2);P(g,{name:`Custom Accept Button`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(L,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);k(o,{title:`Inform Dialog title`,get open(){return c(L)},set open(e){t(L,e,!0)},customAcceptButton:e=>{x(e,{compact:!0,onclick:()=>t(L,!1),children:(e,t)=>{u();var n=m(`👍`);h(e,n)},$$slots:{default:!0}})},children:(e,t)=>{u();var n=m(`This is a basic InformDialog with a title and a single action.`);h(e,n)},$$slots:{customAcceptButton:!0,default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</InformDialog>`}}});var _=s(g,2);P(_,{name:`Controls Alignment`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(R,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);k(o,{title:`Alignment Example`,controlsAlignment:`start`,get open(){return c(R)},set open(e){t(R,e,!0)},children:(e,t)=>{u();var n=m(`Controls can be aligned differently.`);h(e,n)},$$slots:{default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<InformDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</InformDialog>`}}});var v=s(_,2);P(v,{name:`Custom Title`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(z,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var o=s(a,2);k(o,{get open(){return c(z)},set open(e){t(z,e,!0)},customTitle:e=>{T(e,{color:`danger`,children:(e,t)=>{u();var n=m(`⚠ Warning`);h(e,n)},$$slots:{default:!0}})},children:(e,t)=>{u();var n=m(`This action cannot be undone.`);h(e,n)},$$slots:{customTitle:!0,default:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<InformDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</InformDialog>`}}});var y=s(v,2);P(y,{name:`Custom Modal Card`,asChild:!0,children:(e,r)=>{var i=V(),a=n(i);x(a,{onclick:()=>t(B,!0),children:(e,t)=>{u();var n=m(`Open`);h(e,n)},$$slots:{default:!0}});var l=s(a,2);k(l,{get open(){return c(B)},set open(e){t(B,e,!0)},customModalCard:e=>{D(e,{onclear:()=>t(B,!1),get open(){return c(B)},set open(e){t(B,e,!0)},children:(e,t)=>{var n=H(),r=o(n);T(r,{children:(e,t)=>{u();var n=m(`Delete Item`);h(e,n)},$$slots:{default:!0}});var i=s(r,2);T(i,{children:(e,t)=>{u();var n=m(`Are you sure you want to delete this item? This action cannot be undone.`);h(e,n)},$$slots:{default:!0}}),f(n),h(e,n)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),h(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</InformDialog>`}}}),h(e,l),r()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{l(),g(),b(),S(),w(),E(),O(),d(),_(),j=`

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

 `,M={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:C,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},N={component:k,tags:[`autodocs`],argTypes:M,parameters:{layout:`fullscreen`,docs:{description:{component:j}}}},{Story:P}=v(N),F=a(!1),I=a(!1),L=a(!1),R=a(!1),z=a(!1),B=a(!1),V=p(`<!> <!>`,1),H=p(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),U=p(`<!> <!> <!> <!> <!> <!>`,1),A.__docgen={data:[],name:`InformDialog.stories.svelte`},W=y(A,N),G=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.AcceptButtonProps,tags:[`svelte-csf-v5`]},J={...W.CustomAcceptButton,tags:[`svelte-csf-v5`]},Y={...W.ControlsAlignment,tags:[`svelte-csf-v5`]},X={...W.CustomTitle,tags:[`svelte-csf-v5`]},Z={...W.CustomModalCard,tags:[`svelte-csf-v5`]}})))()}Q();export{q as AcceptButtonProps,Y as ControlsAlignment,J as CustomAcceptButton,Z as CustomModalCard,X as CustomTitle,K as Default,G as __namedExportsOrder,N as default,M as storyInformDialogArgTypes};