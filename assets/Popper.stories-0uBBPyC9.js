import{p as J,f as C,a as P,j as f,t as n,b as t,g as _,k as K,u as H,s as c,n as N,c as Q,z as U,A as V,e as E,h as L}from"./iframe-Dp941mr0.js";import{c as Z,d as ee}from"./create-runtime-stories-BXezm3Za.js";import{P as v}from"./Popper-BdTl_VMh.js";import"./getMoment-DH1PBheS.js";import{B as T}from"./Button--LXaFNXf.js";import{M}from"./Menu-Dp3hGDu8.js";import{M as d}from"./MenuItem-BgL_tvet.js";import{p as te,a as oe}from"./position-CdGfDFyh.js";import"./attributes-DJZjS-wL.js";import"./this-DYHwRBO6.js";import"./style-tIhPzccR.js";import"./Paper-VCO_qGbf.js";import"./colors-C3b1rS-d.js";const re={popupPositionX:{control:{type:"select"},options:oe},popupPositionY:{control:{type:"select"},options:te}},se={component:v,tags:["autodocs"],argTypes:re,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:g}=ee();let $=K(!1);var ne=C("<!> <!> <!>",1),pe=C("<!> <!> <!>",1),le=C("<!> <!> <!>",1),ue=C("<!> <!> <!>",1),ae=C("<!> <!> <!>",1),ie=C("<!> <!>",1),de=C("<!> <!> <!> <!> <!> <!>",1);function S(X,Y){J(Y,!0);var F=de(),W=P(F);const j=H(()=>({open:_($),onClickOutside:()=>f($,!1)}));g(W,{name:"Default",get args(){return _(j)},asChild:!0,children:(h,x)=>{v(h,{get open(){return _($)},onClickOutside:()=>f($,!1),popupChildren:s=>{M(s,{children:(u,l)=>{var p=ne(),r=P(p);d(r,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(r,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var m=c(a,2);d(m,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,p)},$$slots:{default:!0}})},children:(s,u)=>{T(s,{onclick:()=>f($,!0),children:(l,p)=>{var r=n("Click to see Popup");t(l,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var B=c(W,2);g(B,{name:"MenuOpen",args:{open:!0},asChild:!0,children:(h,x)=>{v(h,{open:!0,popupChildren:s=>{M(s,{children:(u,l)=>{var p=pe(),r=P(p);d(r,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(r,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var m=c(a,2);d(m,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,p)},$$slots:{default:!0}})},children:(s,u)=>{var l=n("Hello! how are you doing?");t(s,l)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper open>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var D=c(B,2);g(D,{name:"CustomPaperProps",args:{open:!0,paperProps:{color:"primary"}},asChild:!0,children:(h,x)=>{v(h,{open:!0,paperProps:{color:"primary"},popupChildren:s=>{M(s,{children:(u,l)=>{var p=le(),r=P(p);d(r,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(r,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var m=c(a,2);d(m,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,p)},$$slots:{default:!0}})},children:(s,u)=>{var l=n("Hello! how are you doing?");t(s,l)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}});var b=c(D,2);g(b,{name:"FullWidth",asChild:!0,children:(h,x)=>{v(h,{get open(){return _($)},fullWidth:!0,onClickOutside:()=>f($,!1),popupChildren:s=>{M(s,{children:(u,l)=>{var p=ue(),r=P(p);d(r,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(r,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var m=c(a,2);d(m,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,p)},$$slots:{default:!0}})},children:(s,u)=>{T(s,{onclick:()=>f($,!0),children:(l,p)=>{var r=n("Click to see Popup");t(l,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var A=c(b,2);g(A,{name:"PopupFullWidthFalse",asChild:!0,children:(h,x)=>{v(h,{get open(){return _($)},fullWidth:!0,popupFullWidth:!1,onClickOutside:()=>f($,!1),popupChildren:s=>{M(s,{children:(u,l)=>{var p=ae(),r=P(p);d(r,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(r,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var m=c(a,2);d(m,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,p)},$$slots:{default:!0}})},children:(s,u)=>{T(s,{onclick:()=>f($,!0),children:(l,p)=>{var r=n("Click to see Popup");t(l,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Expand the Popper to full width but not the popup"}},__svelteCsf:{rawCode:`<Popper {open} fullWidth popupFullWidth={false} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var z=c(A,2);const R=H(()=>({open:_($),onClickOutside:()=>f($,!1)}));g(z,{name:"CustomPopup",get args(){return _(R)},asChild:!0,children:(h,x)=>{v(h,{get open(){return _($)},onClickOutside:()=>f($,!1),customPopup:(s,u=N)=>{var l=U(),p=P(l);{var r=a=>{M(a,{children:(m,o)=>{var i=ie(),e=P(i);d(e,{children:(y,G)=>{var O=n();E(()=>{var w;return L(O,(w=u())==null?void 0:w.height)}),t(y,O)},$$slots:{default:!0}});var q=c(e,2);d(q,{children:(y,G)=>{var O=n();E(()=>{var w;return L(O,(w=u())==null?void 0:w.width)}),t(y,O)},$$slots:{default:!0}}),t(m,i)},$$slots:{default:!0}})};V(p,a=>{_($)&&a(r)})}t(s,l)},children:(s,u)=>{T(s,{onclick:()=>f($,!0),children:(l,p)=>{var r=n("Click to see Popup");t(l,r)},$$slots:{default:!0}})},$$slots:{customPopup:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet customPopup(popperLocation)}
    {#if open}
      <Menu>
        <MenuItem>{popperLocation?.height}</MenuItem>
        <MenuItem>{popperLocation?.width}</MenuItem>
      </Menu>
    {/if}
  {/snippet}
</Popper>`}}}),t(X,F),Q()}S.__docgen={data:[],name:"Popper.stories.svelte"};const I=Z(S,se),ke=["Default","MenuOpen","CustomPaperProps","FullWidth","PopupFullWidthFalse","CustomPopup"],Oe={...I.Default,tags:["svelte-csf-v5"]},we={...I.MenuOpen,tags:["svelte-csf-v5"]},Te={...I.CustomPaperProps,tags:["svelte-csf-v5"]},ye={...I.FullWidth,tags:["svelte-csf-v5"]},Fe={...I.PopupFullWidthFalse,tags:["svelte-csf-v5"]},We={...I.CustomPopup,tags:["svelte-csf-v5"]};export{Te as CustomPaperProps,We as CustomPopup,Oe as Default,ye as FullWidth,we as MenuOpen,Fe as PopupFullWidthFalse,ke as __namedExportsOrder,se as default,re as storyPopperArgTypes};
