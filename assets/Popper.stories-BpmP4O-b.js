import{p as G,f as C,a as P,j as h,t as n,b as t,g as _,k as J,u as b,s as c,n as K,c as N,l as Q,m as U,e as A,h as L}from"./iframe-L6KL7_8k.js";import{c as V,d as Z}from"./create-runtime-stories-Bq_zeXfb.js";import{P as v}from"./Popper-C3gm7RtK.js";import"./getMoment-JPt7NaAo.js";import{B as y}from"./Button-BSKyNRkn.js";import{M as I}from"./Menu-KcGx3N0n.js";import{M as d}from"./MenuItem-Cf-INZxf.js";import{p as ee,a as te}from"./position-CdGfDFyh.js";import"./attributes-By4vptBT.js";import"./this-yoqIMBsH.js";import"./style-COqOzFTN.js";import"./Paper-B_pmpyc_.js";import"./colors-C3b1rS-d.js";const oe={popupPositionX:{control:{type:"select"},options:te},popupPositionY:{control:{type:"select"},options:ee}},re={component:v,tags:["autodocs"],argTypes:oe,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=Z();let $=J(!1);var se=C("<!> <!> <!>",1),ne=C("<!> <!> <!>",1),pe=C("<!> <!> <!>",1),le=C("<!> <!> <!>",1),ue=C("<!> <!>",1),ae=C("<!> <!> <!> <!> <!>",1);function S(X,Y){G(Y,!0);var B=ae(),W=P(B);const j=b(()=>({open:_($),onClickOutside:()=>h($,!1)}));x(W,{name:"Default",get args(){return _(j)},asChild:!0,children:(m,O)=>{v(m,{get open(){return _($)},onClickOutside:()=>h($,!1),popupChildren:r=>{I(r,{children:(u,p)=>{var l=se(),s=P(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var D=c(W,2);x(D,{name:"MenuOpen",args:{open:!0},asChild:!0,children:(m,O)=>{v(m,{open:!0,popupChildren:r=>{I(r,{children:(u,p)=>{var l=ne(),s=P(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{var p=n("Hello! how are you doing?");t(r,p)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper open>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var F=c(D,2);x(F,{name:"CustomPaperProps",args:{open:!0,paperProps:{color:"primary"}},asChild:!0,children:(m,O)=>{v(m,{open:!0,paperProps:{color:"primary"},popupChildren:r=>{I(r,{children:(u,p)=>{var l=pe(),s=P(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{var p=n("Hello! how are you doing?");t(r,p)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
  open
  paperProps={{
    color: 'primary',
  }}
>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var H=c(F,2);x(H,{name:"FullWidth",asChild:!0,children:(m,O)=>{v(m,{get open(){return _($)},fullWidth:!0,onClickOutside:()=>h($,!1),popupChildren:r=>{I(r,{children:(u,p)=>{var l=le(),s=P(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} fullWidth onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var E=c(H,2);const R=b(()=>({open:_($),onClickOutside:()=>h($,!1)}));x(E,{name:"CustomPopup",get args(){return _(R)},asChild:!0,children:(m,O)=>{v(m,{get open(){return _($)},onClickOutside:()=>h($,!1),customPopup:(r,u=K)=>{var p=Q(),l=P(p);{var s=a=>{I(a,{children:(f,o)=>{var i=ue(),e=P(i);d(e,{children:(T,z)=>{var M=n();A(()=>{var g;return L(M,(g=u())==null?void 0:g.height)}),t(T,M)},$$slots:{default:!0}});var q=c(e,2);d(q,{children:(T,z)=>{var M=n();A(()=>{var g;return L(M,(g=u())==null?void 0:g.width)}),t(T,M)},$$slots:{default:!0}}),t(f,i)},$$slots:{default:!0}})};U(l,a=>{_($)&&a(s)})}t(r,p)},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{customPopup:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet customPopup(popperLocation)}
    {#if open}
      <Menu>
        <MenuItem>{popperLocation?.height}</MenuItem>
        <MenuItem>{popperLocation?.width}</MenuItem>
      </Menu>
    {/if}
  {/snippet}
</Popper>`}}}),t(X,B),N()}S.__docgen={data:[],name:"Popper.stories.svelte"};const k=V(S,re),Ie=["Default","MenuOpen","CustomPaperProps","FullWidth","CustomPopup"],xe={...k.Default,tags:["svelte-csf-v5"]},ke={...k.MenuOpen,tags:["svelte-csf-v5"]},Oe={...k.CustomPaperProps,tags:["svelte-csf-v5"]},we={...k.FullWidth,tags:["svelte-csf-v5"]},Te={...k.CustomPopup,tags:["svelte-csf-v5"]};export{Oe as CustomPaperProps,Te as CustomPopup,xe as Default,we as FullWidth,ke as MenuOpen,Ie as __namedExportsOrder,re as default,oe as storyPopperArgTypes};
