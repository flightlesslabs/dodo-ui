import{f as _,t as r,a as o}from"./props-DJ7OM77H.js";import{p as b,f as P,d as h,g as C,e as A,s as c,a as E}from"./runtime-hUo-UAYR.js";import{c as j,d as q}from"./create-runtime-stories-DR9We0Hg.js";import{P as v}from"./Popper-D9gFU6tp.js";import"./getMoment-BCpL1FFt.js";import{B as M}from"./Button-DHh_NJ62.js";import{M as x}from"./Menu-C70yTstw.js";import{M as l}from"./MenuItem-B43bEgLI.js";import{storyPopperArgTypes as z}from"./Popper.stories-MWsjOilk.js";import"./index-CfOrKyLd.js";import"./attributes-CeVSYgml.js";import"./class-0ksSn-pd.js";import"./style-Dl272AsC.js";import"./this-sl_nENle.js";import"./Paper-BW8240Nx.js";import"./colors-C3b1rS-d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./position-CdGfDFyh.js";const D={component:v,tags:["autodocs"],argTypes:z,parameters:{layout:"centered",docs:{story:{height:"400px",inline:!1},description:{component:""}}}},{Story:g}=q();let u=A(!1);var F=_("<!> <!> <!>",1),G=_("<!> <!> <!>",1),H=_("<!> <!> <!>",1),J=_("<!> <!> <!>",1),K=_("<!> <!> <!>",1),N=_("<!> <!> <!>",1),Q=_("<!> <!> <!> <!> <!> <!>",1);function X(y,Y){b(Y,!0);var B=Q(),O=P(B);g(O,{name:"BottomLeft",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=F(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupWidth="100px">
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
</Popper>`}}});var S=c(L,2);g(S,{name:"TopRight",asChild:!0,children:(m,k)=>{v(m,{get open(){return C(u)},popupPositionY:"top",popupPositionX:"right",onClickOutside:()=>h(u,!1),popupWidth:"100px",popupChildren:p=>{x(p,{children:(i,a)=>{var s=N(),n=P(s);l(n,{children:(e,$)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var d=c(n,2);l(d,{children:(e,$)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var f=c(d,2);l(f,{children:(e,$)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(i,s)},$$slots:{default:!0}})},children:(p,i)=>{M(p,{onclick:()=>h(u,!0),children:(a,s)=>{var n=r("Click to see Popup");o(a,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}}),o(y,B),E()}X.__docgen={version:3,name:"Positions.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const T=j(X,D),me=["BottomLeft","BottomCenter","BottomRight","TopLeft","TopCenter","TopRight"],fe={...T.BottomLeft,tags:["svelte-csf-v5"]},Pe={...T.BottomCenter,tags:["svelte-csf-v5"]},ve={...T.BottomRight,tags:["svelte-csf-v5"]},_e={...T.TopLeft,tags:["svelte-csf-v5"]},Ce={...T.TopCenter,tags:["svelte-csf-v5"]},Me={...T.TopRight,tags:["svelte-csf-v5"]};export{Pe as BottomCenter,fe as BottomLeft,ve as BottomRight,Ce as TopCenter,_e as TopLeft,Me as TopRight,me as __namedExportsOrder,D as default};
