import{p as z,f as g,a as v,j as f,t as r,b as e,g as _,k as G,u as H,s as c,n as J,c as K,E as N,F as Q,e as A,h as L}from"./iframe-DpdNrh4j.js";import{c as U,d as V}from"./create-runtime-stories-D0NGXSfE.js";import{P as M}from"./Popper-ujftblw2.js";import"./getMoment-DQPCA-4b.js";import{B as T}from"./Button-B4lfIbJY.js";import{M as I}from"./Menu-BgHj8OVy.js";import{M as d}from"./MenuItem-CQr4AVzp.js";import{p as Z,a as ee}from"./position-CdGfDFyh.js";import"./attributes-C8pZS94E.js";import"./this-B3JHmcvJ.js";import"./style--qz3mRur.js";import"./Paper-CSJs_APj.js";import"./colors-C3b1rS-d.js";const te={popupPositionX:{control:{type:"select"},options:ee},popupPositionY:{control:{type:"select"},options:Z}},oe={component:M,tags:["autodocs"],argTypes:te,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=V();let $=G(!1);var re=g("<!> <!> <!>",1),se=g("<!> <!> <!>",1),ne=g("<!> <!> <!>",1),pe=g("<!> <!> <!>",1),le=g("<!> <!> <!>",1),ue=g("<!> <!>",1),ae=g("<!> <!> <!> <!> <!> <!>",1);function S(X,Y){z(Y,!0);var F=ae(),W=v(F);{let m=H(()=>({open:_($),onClickOutside:()=>f($,!1)}));x(W,{name:"Default",get args(){return _(m)},asChild:!0,children:(C,O)=>{M(C,{get open(){return _($)},onClickOutside:()=>f($,!1),popupChildren:l=>{I(l,{children:(u,n)=>{var s=re(),p=v(s);d(p,{children:(a,t)=>{var P=r("One");e(a,P)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(a,t)=>{var P=r("Two");e(a,P)},$$slots:{default:!0}});var o=c(h,2);d(o,{children:(a,t)=>{var P=r("Three");e(a,P)},$$slots:{default:!0}}),e(u,s)},$$slots:{default:!0}})},children:(l,u)=>{T(l,{onclick:()=>f($,!0),children:(n,s)=>{var p=r("Click to see Popup");e(n,p)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
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
</Popper>`}}});var b=c(D,2);x(b,{name:"FullWidth",asChild:!0,children:(m,C)=>{M(m,{get open(){return _($)},fullWidth:!0,onClickOutside:()=>f($,!1),popupChildren:i=>{I(i,{children:(l,u)=>{var n=pe(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{T(i,{onclick:()=>f($,!0),children:(u,n)=>{var s=r("Click to see Popup");e(u,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var E=c(b,2);x(E,{name:"PopupFullWidthFalse",asChild:!0,children:(m,C)=>{M(m,{get open(){return _($)},fullWidth:!0,popupFullWidth:!1,onClickOutside:()=>f($,!1),popupChildren:i=>{I(i,{children:(l,u)=>{var n=le(),s=v(n);d(s,{children:(o,a)=>{var t=r("One");e(o,t)},$$slots:{default:!0}});var p=c(s,2);d(p,{children:(o,a)=>{var t=r("Two");e(o,t)},$$slots:{default:!0}});var h=c(p,2);d(h,{children:(o,a)=>{var t=r("Three");e(o,t)},$$slots:{default:!0}}),e(l,n)},$$slots:{default:!0}})},children:(i,l)=>{T(i,{onclick:()=>f($,!0),children:(u,n)=>{var s=r("Click to see Popup");e(u,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width but not the popup"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth popupFullWidth={false} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var j=c(E,2);{let m=H(()=>({open:_($),onClickOutside:()=>f($,!1)}));x(j,{name:"CustomPopup",get args(){return _(m)},asChild:!0,children:(C,O)=>{M(C,{get open(){return _($)},onClickOutside:()=>f($,!1),customPopup:(l,u=J)=>{var n=N(),s=v(n);{var p=h=>{I(h,{children:(o,a)=>{var t=ue(),P=v(t);d(P,{children:(y,q)=>{var w=r();A(()=>L(w,u()?.height)),e(y,w)},$$slots:{default:!0}});var R=c(P,2);d(R,{children:(y,q)=>{var w=r();A(()=>L(w,u()?.width)),e(y,w)},$$slots:{default:!0}}),e(o,t)},$$slots:{default:!0}})};Q(s,h=>{_($)&&h(p)})}e(l,n)},children:(l,u)=>{T(l,{onclick:()=>f($,!0),children:(n,s)=>{var p=r("Click to see Popup");e(n,p)},$$slots:{default:!0}})},$$slots:{customPopup:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet customPopup(popperLocation)}
    {#if open}
      <Menu>
        <MenuItem>{popperLocation?.height}</MenuItem>
        <MenuItem>{popperLocation?.width}</MenuItem>
      </Menu>
    {/if}
  {/snippet}
</Popper>`}}})}e(X,F),K()}S.__docgen={data:[],name:"Popper.stories.svelte"};const k=U(S,oe),Ie=["Default","MenuOpen","CustomPaperProps","FullWidth","PopupFullWidthFalse","CustomPopup"],xe={...k.Default,tags:["svelte-csf-v5"]},ke={...k.MenuOpen,tags:["svelte-csf-v5"]},Oe={...k.CustomPaperProps,tags:["svelte-csf-v5"]},we={...k.FullWidth,tags:["svelte-csf-v5"]},Te={...k.PopupFullWidthFalse,tags:["svelte-csf-v5"]},ye={...k.CustomPopup,tags:["svelte-csf-v5"]};export{Oe as CustomPaperProps,ye as CustomPopup,xe as Default,we as FullWidth,ke as MenuOpen,Te as PopupFullWidthFalse,Ie as __namedExportsOrder,oe as default,te as storyPopperArgTypes};
