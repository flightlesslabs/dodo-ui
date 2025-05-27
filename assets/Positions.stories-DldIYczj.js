import{f as _,t as r,a as o}from"./props-785jmTig.js";import{p as S,f as P,b as h,g as C,c as A,s as c,a as E}from"./runtime-CfJ2O1nk.js";import{c as j,d as q}from"./create-runtime-stories-BxeoUkSH.js";import{P as v}from"./Popper-qqQ5Fl7X.js";import{B as M}from"./Button-lGpFYQ3s.js";import{M as x}from"./Menu-BCYgW_Pw.js";import{M as l}from"./MenuItem-CAvtg6-R.js";import{storyPopperArgTypes as z}from"./Popper.stories-BGwuTNTl.js";import"./index-CfOrKyLd.js";import"./attributes-XQBg23q6.js";import"./class-Rk00bAhQ.js";import"./style-BR5QSoj8.js";import"./this-BiyzPYsS.js";import"./Paper-C24-57Rj.js";import"./colors-C3b1rS-d.js";import"./position-CdGfDFyh.js";const D={component:v,tags:["autodocs"],argTypes:z,parameters:{layout:"centered",docs:{story:{height:"400px",inline:!1},description:{component:""}}}},{Story:g}=q();let u=A(!1);var F=_("<!> <!> <!>",1),G=_("<!> <!> <!>",1),H=_("<!> <!> <!>",1),J=_("<!> <!> <!>",1),K=_("<!> <!> <!>",1),N=_("<!> <!> <!>",1),Q=_("<!> <!> <!> <!> <!> <!>",1);function X(y,Y){S(Y,!0);var B=Q(),O=P(B);g(O,{name:"BottomLeft",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=F(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var w=c(O,2);g(w,{name:"BottomCenter",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionX:"center",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=G(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionX="center" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var W=c(w,2);g(W,{name:"BottomRight",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionX:"right",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=H(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionX="right" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var R=c(W,2);g(R,{name:"TopLeft",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionY:"top",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=J(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} popupPositionY="top" onClickOutside={() => (open = false)} popupWidth="100px">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var L=c(R,2);g(L,{name:"TopCenter",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionY:"top",popupPositionX:"center",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=K(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}});var b=c(L,2);g(b,{name:"TopRight",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionY:"top",popupPositionX:"right",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=N(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}}),o(y,B),E()}X.__docgen={version:3,name:"Positions.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const T=j(X,D),ce=["BottomLeft","BottomCenter","BottomRight","TopLeft","TopCenter","TopRight"],he={...T.BottomLeft,tags:["svelte-csf-v5"]},me={...T.BottomCenter,tags:["svelte-csf-v5"]},fe={...T.BottomRight,tags:["svelte-csf-v5"]},Pe={...T.TopLeft,tags:["svelte-csf-v5"]},ve={...T.TopCenter,tags:["svelte-csf-v5"]},_e={...T.TopRight,tags:["svelte-csf-v5"]};export{me as BottomCenter,he as BottomLeft,fe as BottomRight,ve as TopCenter,Pe as TopLeft,_e as TopRight,ce as __namedExportsOrder,D as default};
