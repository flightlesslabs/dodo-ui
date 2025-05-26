import{f as C,t as r,a as o}from"./props-uFC-caVa.js";import{p as b,f as _,b as l,g as u,c as S,u as g,s as m,a as E}from"./runtime-DIrpp2y3.js";import{c as R,d as q}from"./create-runtime-stories-BfW3D4Rh.js";import{P as v}from"./Popper-Y3KhLEoG.js";import{B as k}from"./Button-DCNgliNZ.js";import{M}from"./Menu-DhM_y6sA.js";import{M as a}from"./MenuItem-CJr34JYe.js";import{storyPopperArgTypes as z}from"./Popper.stories-CorvCHyp.js";import"./index-CfOrKyLd.js";import"./attributes-BIVPLOSU.js";import"./class-DADASfdQ.js";import"./style-C_xoMeF3.js";import"./this-B8E5S8lX.js";import"./Paper-C_5olhtM.js";import"./colors-C3b1rS-d.js";import"./position-CdGfDFyh.js";const D={component:v,tags:["autodocs"],argTypes:z,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=q();let s=S(!1);var G=C("<!> <!> <!>",1),J=C("<!> <!> <!>",1),K=C("<!> <!> <!>",1),N=C("<!> <!> <!>",1);function Y(B,F){b(F,!0);var O=N(),T=_(O);const H=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top"}));x(T,{name:"PositionAutoAdjust",get args(){return u(H)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:p=>{M(p,{children:(d,c)=>{var i=G(),n=_(i);a(n,{children:(t,P)=>{var e=r("One");o(t,e)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var e=r("Two");o(t,e)},$$slots:{default:!0}});var h=m($,2);a(h,{children:(t,P)=>{var e=r("Three");o(t,e)},$$slots:{default:!0}}),o(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var n=r("Click to see Popup");o(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will auto adjust depending on the space on top and bottom"}},__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var w=m(T,2);const V=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",lockPoistions:!0}));x(w,{name:"LockPoistions",get args(){return u(V)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},lockPoistions:!0,onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:p=>{M(p,{children:(d,c)=>{var i=J(),n=_(i);a(n,{children:(t,P)=>{var e=r("One");o(t,e)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var e=r("Two");o(t,e)},$$slots:{default:!0}});var h=m($,2);a(h,{children:(t,P)=>{var e=r("Three");o(t,e)},$$slots:{default:!0}}),o(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var n=r("Click to see Popup");o(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will not auto adjust if you use `lockPoistions`"}},__svelteCsf:{rawCode:`<Popper {open} lockPoistions onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var j=m(w,2);const L=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3}));x(j,{name:"HeightForVerticalPosition",get args(){return u(L)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3,popupChildren:p=>{M(p,{children:(d,c)=>{var i=K(),n=_(i);a(n,{children:(t,P)=>{var e=r("One");o(t,e)},$$slots:{default:!0}});var $=m(n,2);a($,{children:(t,P)=>{var e=r("Two");o(t,e)},$$slots:{default:!0}});var h=m($,2);a(h,{children:(t,P)=>{var e=r("Three");o(t,e)},$$slots:{default:!0}}),o(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var n=r("Click to see Popup");o(c,n)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"you can also adjust `popperHeightForVerticalPosition` to achive the same"}},__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}}),o(B,O),E()}Y.__docgen={version:3,name:"AutoPosition.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=R(Y,D),dt=["PositionAutoAdjust","LockPoistions","HeightForVerticalPosition"],ct={...I.PositionAutoAdjust,tags:["svelte-csf-v5"]},$t={...I.LockPoistions,tags:["svelte-csf-v5"]},Pt={...I.HeightForVerticalPosition,tags:["svelte-csf-v5"]};export{Pt as HeightForVerticalPosition,$t as LockPoistions,ct as PositionAutoAdjust,dt as __namedExportsOrder,D as default};
