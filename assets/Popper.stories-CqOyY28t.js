import{p as z,f as g,a as v,j as f,t as r,b as e,g as _,k as G,u as A,s as c,n as J,c as K,H as N,I as Q,e as E,h as L}from"./iframe-CbXHd0bm.js";import{c as U,d as V}from"./create-runtime-stories-DyBmwzhf.js";import"./getMoment-Ceps0Mms.js";import{P as M}from"./Popper-DNwlOahx.js";import{B as T}from"./Button-DN2kHdEu.js";import{M as I}from"./Menu-CskyyIkE.js";import{M as d}from"./MenuItem-iEiqXtI6.js";import{p as Z,a as ee}from"./position-CdGfDFyh.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-D468Nl-V.js";import"./this-wio92ZO-.js";import"./style-B_gYWly_.js";import"./Paper-07a5KBNE.js";import"./colors-C3b1rS-d.js";const te={popupPositionX:{control:{type:"select"},options:ee},popupPositionY:{control:{type:"select"},options:Z}},oe={component:M,tags:["autodocs"],argTypes:te,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=V();let $=G(!1);var re=g("<!> <!> <!>",1),se=g("<!> <!> <!>",1),ne=g("<!> <!> <!>",1),pe=g("<!> <!> <!>",1),le=g("<!> <!> <!>",1),ue=g("<!> <!>",1),ae=g("<!> <!> <!> <!> <!> <!>",1);function S(X,Y){z(Y,!0);var F=ae(),W=v(F);{let m=A(()=>({open:_($),onClickOutside:()=>f($,!1)}));x(W,{name:"Default",get args(){return _(m)},asChild:!0,children:(C,O)=>{M(C,{get open(){return _($)},onClickOutside:()=>f($,!1),popupChildren:l=>{I(l,{children:(u,n)=>{var s=re(),p=v(s);d(p,{children:(a,t)=>{var P=r("One");e(a,P)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(a,t)=>{var P=r("Two");e(a,P)},$$slots:{default:!0}});var o=c(h,2);d(o,{children:(a,t)=>{var P=r("Three");e(a,P)},$$slots:{default:!0}}),e(u,s)},$$slots:{default:!0}})},children:(l,u)=>{T(l,{onclick:()=>f($,!0),children:(n,s)=>{var p=r("Click to see Popup");e(n,p)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}})}var B=c(W,2);x(B,{name:"MenuOpen",args:{open:!0},asChild:!0,children:(m,C)=>{M(m,{open:!0,popupChildren:i=>{I(i,{children:(l,u)=>{var n=se(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{var u=r("Hello! how are you doing?");e(i,u)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper open>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var D=c(B,2);x(D,{name:"CustomPaperProps",args:{open:!0,paperProps:{color:"primary"}},asChild:!0,children:(m,C)=>{M(m,{open:!0,paperProps:{color:"primary"},popupChildren:i=>{I(i,{children:(l,u)=>{var n=ne(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{var u=r("Hello! how are you doing?");e(i,u)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}});var H=c(D,2);x(H,{name:"FullWidth",asChild:!0,children:(m,C)=>{M(m,{get open(){return _($)},fullWidth:!0,onClickOutside:()=>f($,!1),popupChildren:i=>{I(i,{children:(l,u)=>{var n=pe(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{T(i,{onclick:()=>f($,!0),children:(u,n)=>{var s=r("Click to see Popup");e(u,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var b=c(H,2);x(b,{name:"PopupFullWidthFalse",asChild:!0,children:(m,C)=>{M(m,{get open(){return _($)},fullWidth:!0,popupFullWidth:!1,onClickOutside:()=>f($,!1),popupChildren:i=>{I(i,{children:(l,u)=>{var n=le(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{T(i,{onclick:()=>f($,!0),children:(u,n)=>{var s=r("Click to see Popup");e(u,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width but not the popup"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth popupFullWidth={false} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var j=c(b,2);{let m=A(()=>({open:_($),onClickOutside:()=>f($,!1)}));x(j,{name:"CustomPopup",get args(){return _(m)},asChild:!0,children:(C,O)=>{M(C,{get open(){return _($)},onClickOutside:()=>f($,!1),customPopup:(l,u=J)=>{var n=N(),s=v(n);{var p=h=>{I(h,{children:(o,a)=>{var t=ue(),P=v(t);d(P,{children:(y,q)=>{var w=r();E(()=>L(w,u()?.height)),e(y,w)},$$slots:{default:!0}});var R=c(P,2);d(R,{children:(y,q)=>{var w=r();E(()=>L(w,u()?.width)),e(y,w)},$$slots:{default:!0}}),e(o,t)},$$slots:{default:!0}})};Q(s,h=>{_($)&&h(p)})}e(l,n)},children:(l,u)=>{T(l,{onclick:()=>f($,!0),children:(n,s)=>{var p=r("Click to see Popup");e(n,p)},$$slots:{default:!0}})},$$slots:{customPopup:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet customPopup(popperLocation)}
    {#if open}
      <Menu>
        <MenuItem>{popperLocation?.height}</MenuItem>
        <MenuItem>{popperLocation?.width}</MenuItem>
      </Menu>
    {/if}
  {/snippet}
</Popper>`}}})}e(X,F),K()}S.__docgen={data:[],name:"Popper.stories.svelte"};const k=U(S,oe),xe=["Default","MenuOpen","CustomPaperProps","FullWidth","PopupFullWidthFalse","CustomPopup"],ke={...k.Default,tags:["svelte-csf-v5"]},Oe={...k.MenuOpen,tags:["svelte-csf-v5"]},we={...k.CustomPaperProps,tags:["svelte-csf-v5"]},Te={...k.FullWidth,tags:["svelte-csf-v5"]},ye={...k.PopupFullWidthFalse,tags:["svelte-csf-v5"]},Fe={...k.CustomPopup,tags:["svelte-csf-v5"]};export{we as CustomPaperProps,Fe as CustomPopup,ke as Default,Te as FullWidth,Oe as MenuOpen,ye as PopupFullWidthFalse,xe as __namedExportsOrder,oe as default,te as storyPopperArgTypes};
