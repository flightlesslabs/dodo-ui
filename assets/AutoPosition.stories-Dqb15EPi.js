import{p as B,f as g,a as v,j as l,t as n,b as e,g as u,k as L,u as k,s as m,c as b}from"./iframe-B_h0ZugA.js";import{c as S,d as E}from"./create-runtime-stories-CuUPjFLX.js";import"./getMoment-lRxgIpNk.js";import{P as C}from"./Popper-Ct7Pfu-W.js";import{B as M}from"./Button-ZMCCX1-1.js";import{M as I}from"./Menu-7DA6-MSP.js";import{M as a}from"./MenuItem-CVm9-pHS.js";import{storyPopperArgTypes as R}from"./Popper.stories-Bq6mkJYh.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-B-gMNrtk.js";import"./this-bRGdYwyX.js";import"./style-C9v_w32A.js";import"./Paper-CXhVzTzr.js";import"./colors-C3b1rS-d.js";import"./position-CdGfDFyh.js";const q={component:C,tags:["autodocs"],argTypes:R,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=E();let s=L(!1);var z=g("<!> <!> <!>",1),D=g("<!> <!> <!>",1),G=g("<!> <!> <!>",1),J=g("<!> <!> <!>",1);function F(H,V){B(V,!0);var T=J(),A=v(T);{let h=k(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top"}));x(A,{name:"PositionAutoAdjust",get args(){return u(h)},asChild:!0,children:(f,y)=>{C(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:i=>{I(i,{children:(d,c)=>{var p=z(),r=v(p);a(r,{children:(t,P)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=m(r,2);a($,{children:(t,P)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var _=m($,2);a(_,{children:(t,P)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{M(i,{onclick:()=>l(s,!0),children:(c,p)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will auto adjust depending on the space on top and bottom"}},__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}})}var w=m(A,2);{let h=k(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",lockPoistions:!0}));x(w,{name:"LockPoistions",get args(){return u(h)},asChild:!0,children:(f,y)=>{C(f,{get open(){return u(s)},lockPoistions:!0,onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:i=>{I(i,{children:(d,c)=>{var p=D(),r=v(p);a(r,{children:(t,P)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=m(r,2);a($,{children:(t,P)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var _=m($,2);a(_,{children:(t,P)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{M(i,{onclick:()=>l(s,!0),children:(c,p)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will not auto adjust if you use `lockPoistions`"}},__svelteCsf:{rawCode:`<Popper {open} lockPoistions onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}})}var Y=m(w,2);{let h=k(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3}));x(Y,{name:"HeightForVerticalPosition",get args(){return u(h)},asChild:!0,children:(f,y)=>{C(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3,popupChildren:i=>{I(i,{children:(d,c)=>{var p=G(),r=v(p);a(r,{children:(t,P)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=m(r,2);a($,{children:(t,P)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var _=m($,2);a(_,{children:(t,P)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{M(i,{onclick:()=>l(s,!0),children:(c,p)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"you can also adjust `popperHeightForVerticalPosition` to achive the same"}},__svelteCsf:{rawCode:`<Popper
  {open}
  onClickOutside={() => (open = false)}
  popupPositionY="top"
  popperHeightForVerticalPosition={3}
>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}})}e(H,T),b()}F.__docgen={data:[],name:"AutoPosition.stories.svelte"};const O=S(F,q),lt=["PositionAutoAdjust","LockPoistions","HeightForVerticalPosition"],ut={...O.PositionAutoAdjust,tags:["svelte-csf-v5"]},at={...O.LockPoistions,tags:["svelte-csf-v5"]},dt={...O.HeightForVerticalPosition,tags:["svelte-csf-v5"]};export{dt as HeightForVerticalPosition,at as LockPoistions,ut as PositionAutoAdjust,lt as __namedExportsOrder,q as default};
