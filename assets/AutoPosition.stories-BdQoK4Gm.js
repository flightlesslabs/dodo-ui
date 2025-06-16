import{p as b,f as C,a as _,j as l,t as r,b as e,g as u,k as S,u as g,s as m,c as E}from"./iframe-BT8UJLEl.js";import{c as R,d as q}from"./create-runtime-stories-CGUspsbm.js";import{P as v}from"./Popper-DeyzgV4e.js";import"./getMoment-C62wFe4H.js";import{B as k}from"./Button-TztSJhf1.js";import{M}from"./Menu-Duw--zsW.js";import{M as a}from"./MenuItem-rMLzxaKG.js";import{storyPopperArgTypes as z}from"./Popper.stories-DoTeOhgj.js";import"./attributes-DNvMGfjs.js";import"./this-BoRifFsJ.js";import"./style-VI2Q-dWv.js";import"./Paper-c5LTtVOX.js";import"./colors-C3b1rS-d.js";import"./position-CdGfDFyh.js";const D={component:v,tags:["autodocs"],argTypes:z,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=q();let s=S(!1);var G=C("<!> <!> <!>",1),J=C("<!> <!> <!>",1),K=C("<!> <!> <!>",1),N=C("<!> <!> <!>",1);function j(F,H){b(H,!0);var O=N(),T=_(O);const V=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top"}));x(T,{name:"PositionAutoAdjust",get args(){return u(V)},asChild:!0,children:(h,w)=>{v(h,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:i=>{M(i,{children:(d,c)=>{var p=G(),n=_(p);a(n,{children:(t,P)=>{var o=r("One");e(t,o)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var o=r("Two");e(t,o)},$$slots:{default:!0}});var f=m($,2);a(f,{children:(t,P)=>{var o=r("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{k(i,{onclick:()=>l(s,!0),children:(c,p)=>{var n=r("Click to see Popup");e(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will auto adjust depending on the space on top and bottom"}},__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var A=m(T,2);const Y=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",lockPoistions:!0}));x(A,{name:"LockPoistions",get args(){return u(Y)},asChild:!0,children:(h,w)=>{v(h,{get open(){return u(s)},lockPoistions:!0,onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:i=>{M(i,{children:(d,c)=>{var p=J(),n=_(p);a(n,{children:(t,P)=>{var o=r("One");e(t,o)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var o=r("Two");e(t,o)},$$slots:{default:!0}});var f=m($,2);a(f,{children:(t,P)=>{var o=r("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{k(i,{onclick:()=>l(s,!0),children:(c,p)=>{var n=r("Click to see Popup");e(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will not auto adjust if you use `lockPoistions`"}},__svelteCsf:{rawCode:`<Popper {open} lockPoistions onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var B=m(A,2);const L=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3}));x(B,{name:"HeightForVerticalPosition",get args(){return u(L)},asChild:!0,children:(h,w)=>{v(h,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3,popupChildren:i=>{M(i,{children:(d,c)=>{var p=K(),n=_(p);a(n,{children:(t,P)=>{var o=r("One");e(t,o)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var o=r("Two");e(t,o)},$$slots:{default:!0}});var f=m($,2);a(f,{children:(t,P)=>{var o=r("Three");e(t,o)},$$slots:{default:!0}}),e(d,p)},$$slots:{default:!0}})},children:(i,d)=>{k(i,{onclick:()=>l(s,!0),children:(c,p)=>{var n=r("Click to see Popup");e(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"you can also adjust `popperHeightForVerticalPosition` to achive the same"}},__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}}),e(F,O),E()}j.__docgen={data:[],name:"AutoPosition.stories.svelte"};const I=R(j,D),ut=["PositionAutoAdjust","LockPoistions","HeightForVerticalPosition"],at={...I.PositionAutoAdjust,tags:["svelte-csf-v5"]},dt={...I.LockPoistions,tags:["svelte-csf-v5"]},ct={...I.HeightForVerticalPosition,tags:["svelte-csf-v5"]};export{ct as HeightForVerticalPosition,dt as LockPoistions,at as PositionAutoAdjust,ut as __namedExportsOrder,D as default};
