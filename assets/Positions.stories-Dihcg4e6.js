import{p as S,f as v,a as _,j as h,t as r,b as o,g as C,k as j,s as c,c as A}from"./iframe-CbXHd0bm.js";import{c as E,d as q}from"./create-runtime-stories-DyBmwzhf.js";import"./getMoment-Ceps0Mms.js";import{P}from"./Popper-DNwlOahx.js";import{B as M}from"./Button-DN2kHdEu.js";import{M as g}from"./Menu-CskyyIkE.js";import{M as l}from"./MenuItem-iEiqXtI6.js";import{storyPopperArgTypes as z}from"./Popper.stories-CqOyY28t.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-D468Nl-V.js";import"./this-wio92ZO-.js";import"./style-B_gYWly_.js";import"./Paper-07a5KBNE.js";import"./colors-C3b1rS-d.js";import"./position-CdGfDFyh.js";const D={component:P,tags:["autodocs"],argTypes:z,parameters:{layout:"centered",docs:{story:{height:"400px",inline:!1},description:{component:""}}}},{Story:T}=q();let u=j(!1);var F=v("<!> <!> <!>",1),G=v("<!> <!> <!>",1),H=v("<!> <!> <!>",1),J=v("<!> <!> <!>",1),K=v("<!> <!> <!>",1),N=v("<!> <!> <!>",1),Q=v("<!> <!> <!> <!> <!> <!>",1);function X(y,Y){S(Y,!0);var B=Q(),O=_(B);T(O,{name:"BottomLeft",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=F(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var w=c(O,2);T(w,{name:"BottomCenter",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},popupPositionX:"center",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=G(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionX="center" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var W=c(w,2);T(W,{name:"BottomRight",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},popupPositionX:"right",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=H(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionX="right" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var R=c(W,2);T(R,{name:"TopLeft",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},popupPositionY:"top",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=J(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionY="top" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var L=c(R,2);T(L,{name:"TopCenter",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},popupPositionY:"top",popupPositionX:"center",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=K(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
  {open}
  popupPositionY="top"
  popupPositionX="center"
  onClickOutside={() => (open = false)}
  popupWidth="100px"
>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var b=c(L,2);T(b,{name:"TopRight",asChild:!0,children:(m,k)=>{P(m,{get open(){return C(u)},popupPositionY:"top",popupPositionX:"right",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{g(p,{children:(i,a)=>{var s=N(),n=_(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
  {open}
  popupPositionY="top"
  popupPositionX="right"
  onClickOutside={() => (open = false)}
  popupWidth="100px"
>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}}),o(y,B),A()}X.__docgen={data:[],name:"Positions.stories.svelte"};const x=E(X,D),$e=["BottomLeft","BottomCenter","BottomRight","TopLeft","TopCenter","TopRight"],ce={...x.BottomLeft,tags:["svelte-csf-v5"]},he={...x.BottomCenter,tags:["svelte-csf-v5"]},me={...x.BottomRight,tags:["svelte-csf-v5"]},fe={...x.TopLeft,tags:["svelte-csf-v5"]},_e={...x.TopCenter,tags:["svelte-csf-v5"]},Pe={...x.TopRight,tags:["svelte-csf-v5"]};export{he as BottomCenter,ce as BottomLeft,me as BottomRight,_e as TopCenter,fe as TopLeft,Pe as TopRight,$e as __namedExportsOrder,D as default};
