import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Dt as t,It as n,Ot as r,Rt as i,Xt as a,Yt as o,_t as s,ct as c,ft as l,jt as u,on as d,ot as f,p,pn as m,sn as h}from"./iframe-Dx_RV1xH.js";import{i as g,n as _,r as v,t as y}from"./create-runtime-stories-BmbbgM7A.js";import{r as b,t as x}from"./Button-Bc-cLDhd.js";import{h as S,i as C}from"./dist-BYSjHjmV.js";import{n as w,t as T}from"./Text-43fMg-Oc.js";import{n as E,t as D}from"./ConfirmDialogCard-CQ0HorzT.js";import{n as O,t as k}from"./ConfirmDialog-BqVBT6QT.js";function A(e,i){a(i,!0);var c=U(),p=r(c);P(p,{name:`Default`,asChild:!0,children:(e,t)=>{var i=V(),a=r(i);x(a,{onclick:()=>n(F,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);k(o,{title:`Confirm Dialog title`,get open(){return s(F)},set open(e){n(F,e,!0)},children:(e,t)=>{d();var n=l(`This is a basic ConfirmDialog with a title and a single action.`);f(e,n)},$$slots:{default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<ConfirmDialog bind:open={openDefault} title="Confirm Dialog title">
  This is a basic ConfirmDialog with a title and a single action.
</ConfirmDialog>`}}});var m=u(p,2);P(m,{name:`Accept Button Props`,asChild:!0,children:(e,t)=>{var i=V(),a=r(i);x(a,{onclick:()=>n(I,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);k(o,{title:`Confirm Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return s(I)},set open(e){n(I,e,!0)},children:(e,t)=>{d();var n=l(`This is a basic ConfirmDialog with a title and a single action.`);f(e,n)},$$slots:{default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<ConfirmDialog
  bind:open={openAcceptButtonProps}
  title="Confirm Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic ConfirmDialog with a title and a single action.
</ConfirmDialog>`}}});var g=u(m,2);P(g,{name:`Custom Accept Button`,asChild:!0,children:(e,t)=>{var i=V(),a=r(i);x(a,{onclick:()=>n(L,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);k(o,{title:`Confirm Dialog title`,get open(){return s(L)},set open(e){n(L,e,!0)},customAcceptButton:e=>{x(e,{compact:!0,onclick:()=>n(L,!1),children:(e,t)=>{d();var n=l(`👍`);f(e,n)},$$slots:{default:!0}})},children:(e,t)=>{d();var n=l(`This is a basic ConfirmDialog with a title and a single action.`);f(e,n)},$$slots:{customAcceptButton:!0,default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<ConfirmDialog bind:open={openCustomAcceptButton} title="Confirm Dialog title">
  This is a basic ConfirmDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</ConfirmDialog>`}}});var _=u(g,2);P(_,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var i=V(),a=r(i);x(a,{onclick:()=>n(R,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);k(o,{title:`Alignment Example`,controlsAlignment:`start`,get open(){return s(R)},set open(e){n(R,e,!0)},children:(e,t)=>{d();var n=l(`Controls can be aligned differently.`);f(e,n)},$$slots:{default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<ConfirmDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</ConfirmDialog>`}}});var v=u(_,2);P(v,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var i=V(),a=r(i);x(a,{onclick:()=>n(z,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var o=u(a,2);k(o,{get open(){return s(z)},set open(e){n(z,e,!0)},customTitle:e=>{T(e,{color:`danger`,children:(e,t)=>{d();var n=l(`⚠ Warning`);f(e,n)},$$slots:{default:!0}})},children:(e,t)=>{d();var n=l(`This action cannot be undone.`);f(e,n)},$$slots:{customTitle:!0,default:!0}}),f(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<ConfirmDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</ConfirmDialog>`}}});var y=u(v,2);P(y,{name:`Custom Modal Card`,asChild:!0,children:(e,i)=>{var a=V(),o=r(a);x(o,{onclick:()=>n(B,!0),children:(e,t)=>{d();var n=l(`Open`);f(e,n)},$$slots:{default:!0}});var c=u(o,2);k(c,{get open(){return s(B)},set open(e){n(B,e,!0)},customModalCard:e=>{D(e,{onclear:()=>n(B,!1),get open(){return s(B)},set open(e){n(B,e,!0)},children:(e,n)=>{var r=H(),i=t(r);T(i,{children:(e,t)=>{d();var n=l(`Delete Item`);f(e,n)},$$slots:{default:!0}});var a=u(i,2);T(a,{children:(e,t)=>{d();var n=l(`Are you sure you want to delete this item? This action cannot be undone.`);f(e,n)},$$slots:{default:!0}}),h(r),f(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),f(e,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</ConfirmDialog>`}}}),f(e,c),o()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{m(),g(),b(),S(),w(),O(),E(),p(),_(),j=`

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

 `,M={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:C,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},N={component:k,tags:[`autodocs`],argTypes:M,parameters:{layout:`fullscreen`,docs:{description:{component:j}}}},{Story:P}=v(N),F=i(!1),I=i(!1),L=i(!1),R=i(!1),z=i(!1),B=i(!1),V=c(`<!> <!>`,1),H=c(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),U=c(`<!> <!> <!> <!> <!> <!>`,1),A.__docgen={data:[],name:`ConfirmDialog.stories.svelte`},W=y(A,N),G=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.AcceptButtonProps,tags:[`svelte-csf-v5`]},J={...W.CustomAcceptButton,tags:[`svelte-csf-v5`]},Y={...W.ControlsAlignment,tags:[`svelte-csf-v5`]},X={...W.CustomTitle,tags:[`svelte-csf-v5`]},Z={...W.CustomModalCard,tags:[`svelte-csf-v5`]}})))()}Q();export{q as AcceptButtonProps,Y as ControlsAlignment,J as CustomAcceptButton,Z as CustomModalCard,X as CustomTitle,K as Default,G as __namedExportsOrder,N as default,M as storyConfirmDialogArgTypes};