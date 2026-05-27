import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ht as n,St as r,Ut as i,en as a,et as o,f as s,jt as c,kt as l,ln as u,lt as d,nt as f,ot as p,wt as m,xt as h}from"./iframe-D2Y9OMva.js";import{G as g,dt as _,ht as v,mt as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-BBhzpU6C.js";import{g as w,t as T,v as E}from"./dist-l3DYoKwe.js";function D(e,s){i(s,!0);var c=G(),u=r(c);j(u,{name:`Default`,asChild:!0,children:(e,n)=>{var i=R(),a=r(i);_(a,{onclick:()=>l(M,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(a,2),{title:`Inform Dialog title`,get open(){return d(M)},set open(e){l(M,e,!0)},children:(e,n)=>{t(),o(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open</Button>

<InformDialog bind:open={openDefault} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var f=m(u,2);j(f,{name:`Accept Button Props`,asChild:!0,children:(e,n)=>{var i=z(),a=r(i);_(a,{onclick:()=>l(N,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(a,2),{title:`Inform Dialog title`,acceptButtonProps:{label:`Ok`,color:`safe`},get open(){return d(N)},set open(e){l(N,e,!0)},children:(e,n)=>{t(),o(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

<InformDialog
  bind:open={openAcceptButtonProps}
  title="Inform Dialog title"
  acceptButtonProps={{ label: 'Ok', color: 'safe' }}
>
  This is a basic InformDialog with a title and a single action.
</InformDialog>`}}});var g=m(f,2);j(g,{name:`Custom Accept Button`,asChild:!0,children:(e,n)=>{var i=B(),a=r(i);_(a,{onclick:()=>l(P,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(a,2),{title:`Inform Dialog title`,get open(){return d(P)},set open(e){l(P,e,!0)},customAcceptButton:e=>{_(e,{compact:!0,onclick:()=>l(P,!1),children:(e,n)=>{t(),o(e,p(`👍`))},$$slots:{default:!0}})},children:(e,n)=>{t(),o(e,p(`This is a basic InformDialog with a title and a single action.`))},$$slots:{customAcceptButton:!0,default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

<InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
  This is a basic InformDialog with a title and a single action.

  {#snippet customAcceptButton()}
    <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
  {/snippet}
</InformDialog>`}}});var v=m(g,2);j(v,{name:`Controls Alignment`,asChild:!0,children:(e,n)=>{var i=V(),a=r(i);_(a,{onclick:()=>l(F,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(a,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return d(F)},set open(e){l(F,e,!0)},children:(e,n)=>{t(),o(e,p(`Controls can be aligned differently.`))},$$slots:{default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<InformDialog
  bind:open={openControlsAlignment}
  title="Alignment Example"
  controlsAlignment="start"
>
  Controls can be aligned differently.
</InformDialog>`}}});var y=m(v,2);j(y,{name:`Custom Title`,asChild:!0,children:(e,n)=>{var i=H(),a=r(i);_(a,{onclick:()=>l(I,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(a,2),{get open(){return d(I)},set open(e){l(I,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,n)=>{t(),o(e,p(`⚠ Warning`))},$$slots:{default:!0}})},children:(e,n)=>{t(),o(e,p(`This action cannot be undone.`))},$$slots:{customTitle:!0,default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<InformDialog bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.
</InformDialog>`}}}),j(m(y,2),{name:`Custom Modal Card`,asChild:!0,children:(e,n)=>{var i=W(),s=r(i);_(s,{onclick:()=>l(L,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),w(m(s,2),{get open(){return d(L)},set open(e){l(L,e,!0)},customModalCard:e=>{E(e,{onclear:()=>l(L,!1),get open(){return d(L)},set open(e){l(L,e,!0)},children:(e,n)=>{var r=U(),i=h(r);C(i,{children:(e,n)=>{t(),o(e,p(`Delete Item`))},$$slots:{default:!0}}),C(m(i,2),{children:(e,n)=>{t(),o(e,p(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}}),a(r),o(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</InformDialog>`}}}),o(e,c),n()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),v(),x(),T(),s(),b(),O=`

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

 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearOnAccept:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`true`}}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:w,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=c(!1),N=c(!1),P=c(!1),F=c(!1),I=c(!1),L=c(!1),R=f(`<!> <!>`,1),z=f(`<!> <!>`,1),B=f(`<!> <!>`,1),V=f(`<!> <!>`,1),H=f(`<!> <!>`,1),U=f(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>`),W=f(`<!> <!>`,1),G=f(`<!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`InformDialog.stories.svelte`},K=S(D,A),q=[`Default`,`AcceptButtonProps`,`CustomAcceptButton`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],J={...K.Default,tags:[`svelte-csf-v5`]},Y={...K.AcceptButtonProps,tags:[`svelte-csf-v5`]},X={...K.CustomAcceptButton,tags:[`svelte-csf-v5`]},Z={...K.ControlsAlignment,tags:[`svelte-csf-v5`]},Q={...K.CustomTitle,tags:[`svelte-csf-v5`]},$={...K.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{Y as AcceptButtonProps,Z as ControlsAlignment,X as CustomAcceptButton,$ as CustomModalCard,Q as CustomTitle,J as Default,q as __namedExportsOrder,A as default,k as storyInformDialogArgTypes};