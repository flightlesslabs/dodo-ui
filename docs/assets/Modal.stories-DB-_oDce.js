import{i as e}from"./preload-helper-B51ZT_On.js";import{$t as t,Ht as n,St as r,Ut as i,en as a,et as o,f as s,jt as c,kt as l,ln as u,lt as d,nt as f,ot as p,wt as m,xt as h}from"./iframe-DGV1xx3g.js";import{G as g,dt as _,ht as v,mt as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-WrdPVTsn.js";import{S as w,b as T,t as E}from"./dist-BgWDz3O_.js";function D(e,s){i(s,!0);var c=U(),u=r(c);j(u,{name:`Default`,asChild:!0,children:(e,n)=>{var i=I(),a=r(i);_(a,{onclick:()=>l(M,!0),children:(e,n)=>{t(),o(e,p(`Open Modal`))},$$slots:{default:!0}}),T(m(a,2),{title:`Modal title`,get open(){return d(M)},set open(e){l(M,e,!0)},controls:e=>{_(e,{onclick:()=>l(M,!1),children:(e,n)=>{t(),o(e,p(`Okay`))},$$slots:{default:!0}})},children:(e,n)=>{t(),o(e,p(`This is a basic modal with a title and a single action.`))},$$slots:{controls:!0,default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var f=m(u,2);j(f,{name:`Controls Alignment`,asChild:!0,children:(e,n)=>{var i=R(),a=r(i);_(a,{onclick:()=>l(N,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),T(m(a,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return d(N)},set open(e){l(N,e,!0)},controls:e=>{var n=L(),i=r(n);_(i,{onclick:()=>l(N,!1),children:(e,n)=>{t(),o(e,p(`Cancel`))},$$slots:{default:!0}}),_(m(i,2),{onclick:()=>l(N,!1),children:(e,n)=>{t(),o(e,p(`Confirm`))},$$slots:{default:!0}}),o(e,n)},children:(e,n)=>{t(),o(e,p(`Controls can be aligned differently.`))},$$slots:{controls:!0,default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=m(f,2);j(g,{name:`Custom Title`,asChild:!0,children:(e,n)=>{var i=B(),a=r(i);_(a,{onclick:()=>l(P,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),T(m(a,2),{get open(){return d(P)},set open(e){l(P,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,n)=>{t(),o(e,p(`⚠ Warning`))},$$slots:{default:!0}})},controls:e=>{var n=z(),i=r(n);_(i,{onclick:()=>l(P,!1),children:(e,n)=>{t(),o(e,p(`Cancel`))},$$slots:{default:!0}}),_(m(i,2),{color:`danger`,onclick:()=>l(P,!1),children:(e,n)=>{t(),o(e,p(`Delete`))},$$slots:{default:!0}}),o(e,n)},children:(e,n)=>{t(),o(e,p(`This action cannot be undone.`))},$$slots:{customTitle:!0,controls:!0,default:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}}),j(m(g,2),{name:`Custom Modal Card`,asChild:!0,children:(e,n)=>{var i=H(),s=r(i);_(s,{onclick:()=>l(F,!0),children:(e,n)=>{t(),o(e,p(`Open`))},$$slots:{default:!0}}),T(m(s,2),{get open(){return d(F)},set open(e){l(F,e,!0)},customModalCard:e=>{w(e,{onclear:()=>l(F,!1),children:(e,n)=>{var r=V(),i=h(r);C(i,{children:(e,n)=>{t(),o(e,p(`Delete Item`))},$$slots:{default:!0}});var s=m(i,2);C(s,{children:(e,n)=>{t(),o(e,p(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}});var c=m(s,2),u=h(c);_(u,{onclick:()=>l(F,!1),children:(e,n)=>{t(),o(e,p(`Cancel`))},$$slots:{default:!0}}),_(m(u,2),{color:`danger`,onclick:()=>l(F,!1),children:(e,n)=>{t(),o(e,p(`Delete`))},$$slots:{default:!0}}),a(c),a(r),o(e,r)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</Modal>`}}}),o(e,c),n()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{u(),v(),x(),E(),s(),b(),O=`


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
 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:T,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=c(!1),N=c(!1),P=c(!1),F=c(!1),I=f(`<!> <!>`,1),L=f(`<!> <!>`,1),R=f(`<!> <!>`,1),z=f(`<!> <!>`,1),B=f(`<!> <!>`,1),V=f(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),H=f(`<!> <!>`,1),U=f(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`Modal.stories.svelte`},W=S(D,A),G=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.ControlsAlignment,tags:[`svelte-csf-v5`]},J={...W.CustomTitle,tags:[`svelte-csf-v5`]},Y={...W.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{q as ControlsAlignment,Y as CustomModalCard,J as CustomTitle,K as Default,G as __namedExportsOrder,A as default,k as storyModalArgTypes};