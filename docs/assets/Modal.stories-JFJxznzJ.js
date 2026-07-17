import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,St as n,Wt as r,dn as i,dt as a,et as o,f as s,jt as c,kt as l,nn as u,nt as d,ot as f,tn as p,wt as m,xt as h}from"./iframe-CGmTcMmT.js";import{U as g,ft as _,gt as v,ht as y,n as b,r as x,t as S,u as C}from"./create-runtime-stories-DBsIqukf.js";import{S as w,b as T,t as E}from"./dist-CNVjs9dK.js";function D(e,i){t(i,!0);var s=R(),c=n(s);j(c,{name:`Default`,asChild:!0,children:(e,t)=>{var r=I(),i=n(r);_(i,{onclick:()=>l(M,!0),children:(e,t)=>{p(),o(e,f(`Open Modal`))},$$slots:{default:!0}}),T(m(i,2),{title:`Modal title`,get open(){return a(M)},set open(e){l(M,e,!0)},controls:e=>{_(e,{onclick:()=>l(M,!1),children:(e,t)=>{p(),o(e,f(`Okay`))},$$slots:{default:!0}})},children:(e,t)=>{p(),o(e,f(`This is a basic modal with a title and a single action.`))},$$slots:{controls:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button onclick={() => (openDefault = true)}>Open Modal</Button>

<Modal bind:open={openDefault} title="Modal title">
  This is a basic modal with a title and a single action.

  {#snippet controls()}
    <Button onclick={() => (openDefault = false)}>Okay</Button>
  {/snippet}
</Modal>`}}});var d=m(c,2);j(d,{name:`Controls Alignment`,asChild:!0,children:(e,t)=>{var r=I(),i=n(r);_(i,{onclick:()=>l(N,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),T(m(i,2),{title:`Alignment Example`,controlsAlignment:`start`,get open(){return a(N)},set open(e){l(N,e,!0)},controls:e=>{var t=I(),r=n(t);_(r,{onclick:()=>l(N,!1),children:(e,t)=>{p(),o(e,f(`Cancel`))},$$slots:{default:!0}}),_(m(r,2),{onclick:()=>l(N,!1),children:(e,t)=>{p(),o(e,f(`Confirm`))},$$slots:{default:!0}}),o(e,t)},children:(e,t)=>{p(),o(e,f(`Controls can be aligned differently.`))},$$slots:{controls:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openControlsAlignment = true)}>Open</Button>

<Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
  Controls can be aligned differently.

  {#snippet controls()}
    <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
    <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
  {/snippet}
</Modal>`}}});var g=m(d,2);j(g,{name:`Custom Title`,asChild:!0,children:(e,t)=>{var r=I(),i=n(r);_(i,{onclick:()=>l(P,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),T(m(i,2),{get open(){return a(P)},set open(e){l(P,e,!0)},customTitle:e=>{C(e,{color:`danger`,children:(e,t)=>{p(),o(e,f(`⚠ Warning`))},$$slots:{default:!0}})},controls:e=>{var t=I(),r=n(t);_(r,{onclick:()=>l(P,!1),children:(e,t)=>{p(),o(e,f(`Cancel`))},$$slots:{default:!0}}),_(m(r,2),{color:`danger`,onclick:()=>l(P,!1),children:(e,t)=>{p(),o(e,f(`Delete`))},$$slots:{default:!0}}),o(e,t)},children:(e,t)=>{p(),o(e,f(`This action cannot be undone.`))},$$slots:{customTitle:!0,controls:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomTitle = true)}>Open</Button>

<Modal bind:open={openCustomTitle}>
  {#snippet customTitle()}
    <Text color="danger">⚠ Warning</Text>
  {/snippet}

  This action cannot be undone.

  {#snippet controls()}
    <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
    <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
  {/snippet}
</Modal>`}}});var v=m(g,2);j(v,{name:`Custom Modal Card`,asChild:!0,children:(e,t)=>{var r=I(),i=n(r);_(i,{onclick:()=>l(F,!0),children:(e,t)=>{p(),o(e,f(`Open`))},$$slots:{default:!0}}),T(m(i,2),{get open(){return a(F)},set open(e){l(F,e,!0)},customModalCard:e=>{w(e,{onclear:()=>l(F,!1),children:(e,t)=>{var n=L(),r=h(n);C(r,{children:(e,t)=>{p(),o(e,f(`Delete Item`))},$$slots:{default:!0}});var i=m(r,2);C(i,{children:(e,t)=>{p(),o(e,f(`Are you sure you want to delete this item? This action cannot be undone.`))},$$slots:{default:!0}});var a=m(i,2),s=h(a);_(s,{onclick:()=>l(F,!1),children:(e,t)=>{p(),o(e,f(`Cancel`))},$$slots:{default:!0}}),_(m(s,2),{color:`danger`,onclick:()=>l(F,!1),children:(e,t)=>{p(),o(e,f(`Delete`))},$$slots:{default:!0}}),u(a),u(n),o(e,n)},$$slots:{default:!0}})},$$slots:{customModalCard:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button onclick={() => (openCustomModalcard = true)}>Open</Button>

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
</Modal>`}}}),o(e,s),r()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{i(),v(),x(),E(),s(),b(),O=`


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
 `,k={class:{table:{category:`API`,subcategory:`Base`}},clearable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},controlsAlignment:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`end`}}},title:{table:{category:`API`,subcategory:`Base`}},customTitle:{table:{category:`API`,subcategory:`Slots`}},controls:{table:{category:`API`,subcategory:`Slots`}},customModalCard:{table:{category:`API`,subcategory:`Slots`}}},A={component:T,tags:[`autodocs`],argTypes:k,parameters:{layout:`fullscreen`,docs:{description:{component:O}}}},{Story:j}=y(A),M=c(!1),N=c(!1),P=c(!1),F=c(!1),I=d(`<!> <!>`,1),L=d(`<div style="display: flex; flex-direction: column; gap: 12px;"><!> <!> <div style="display: flex; justify-content: flex-end; gap: 8px;"><!> <!></div></div>`),R=d(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`Modal.stories.svelte`},z=S(D,A),B=[`Default`,`ControlsAlignment`,`CustomTitle`,`CustomModalCard`],V={...z.Default,tags:[`svelte-csf-v5`]},H={...z.ControlsAlignment,tags:[`svelte-csf-v5`]},U={...z.CustomTitle,tags:[`svelte-csf-v5`]},W={...z.CustomModalCard,tags:[`svelte-csf-v5`]}}))();export{H as ControlsAlignment,W as CustomModalCard,U as CustomTitle,V as Default,B as __namedExportsOrder,A as default,k as storyModalArgTypes};