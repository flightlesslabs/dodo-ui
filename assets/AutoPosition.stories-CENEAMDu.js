import{f as C,t as n,a as e}from"./props-DJ7OM77H.js";import{p as b,f as _,d as l,g as u,e as S,u as g,s as P,a as E}from"./runtime-hUo-UAYR.js";import{c as R,d as q}from"./create-runtime-stories-DR9We0Hg.js";import{P as v}from"./Popper-D9gFU6tp.js";import"./getMoment-BCpL1FFt.js";import{B as k}from"./Button-DHh_NJ62.js";import{M}from"./Menu-C70yTstw.js";import{M as a}from"./MenuItem-B43bEgLI.js";import{storyPopperArgTypes as z}from"./Popper.stories-MWsjOilk.js";import"./index-CfOrKyLd.js";import"./attributes-CeVSYgml.js";import"./class-0ksSn-pd.js";import"./style-Dl272AsC.js";import"./this-sl_nENle.js";import"./Paper-BW8240Nx.js";import"./colors-C3b1rS-d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./position-CdGfDFyh.js";const D={component:v,tags:["autodocs"],argTypes:z,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=q();let s=S(!1);var G=C("<!> <!> <!>",1),J=C("<!> <!> <!>",1),K=C("<!> <!> <!>",1),N=C("<!> <!> <!>",1);function Y(B,F){b(F,!0);var O=N(),T=_(O);const H=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top"}));x(T,{name:"PositionAutoAdjust",get args(){return u(H)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:p=>{M(p,{children:(d,c)=>{var i=G(),r=_(i);a(r,{children:(t,m)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=P(r,2);a($,{children:(t,m)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var h=P($,2);a(h,{children:(t,m)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will auto adjust depending on the space on top and bottom"}},__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var w=P(T,2);const V=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",lockPoistions:!0}));x(w,{name:"LockPoistions",get args(){return u(V)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},lockPoistions:!0,onClickOutside:()=>l(s,!1),popupPositionY:"top",popupChildren:p=>{M(p,{children:(d,c)=>{var i=J(),r=_(i);a(r,{children:(t,m)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=P(r,2);a($,{children:(t,m)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var h=P($,2);a(h,{children:(t,m)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Positions will not auto adjust if you use `lockPoistions`"}},__svelteCsf:{rawCode:`<Popper {open} lockPoistions onClickOutside={() => (open = false)} popupPositionY="top">
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var j=P(w,2);const L=g(()=>({open:u(s),onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3}));x(j,{name:"HeightForVerticalPosition",get args(){return u(L)},asChild:!0,children:(f,y)=>{v(f,{get open(){return u(s)},onClickOutside:()=>l(s,!1),popupPositionY:"top",popperHeightForVerticalPosition:3,popupChildren:p=>{M(p,{children:(d,c)=>{var i=K(),r=_(i);a(r,{children:(t,m)=>{var o=n("One");e(t,o)},$$slots:{default:!0}});var $=P(r,2);a($,{children:(t,m)=>{var o=n("Two");e(t,o)},$$slots:{default:!0}});var h=P($,2);a(h,{children:(t,m)=>{var o=n("Three");e(t,o)},$$slots:{default:!0}}),e(d,i)},$$slots:{default:!0}})},children:(p,d)=>{k(p,{onclick:()=>l(s,!0),children:(c,i)=>{var r=n("Click to see Popup");e(c,r)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"you can also adjust `popperHeightForVerticalPosition` to achive the same"}},__svelteCsf:{rawCode:`<Popper
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
</Popper>`}}}),e(B,O),E()}Y.__docgen={version:3,name:"AutoPosition.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=R(Y,D),$t=["PositionAutoAdjust","LockPoistions","HeightForVerticalPosition"],mt={...I.PositionAutoAdjust,tags:["svelte-csf-v5"]},Pt={...I.LockPoistions,tags:["svelte-csf-v5"]},ft={...I.HeightForVerticalPosition,tags:["svelte-csf-v5"]};export{ft as HeightForVerticalPosition,Pt as LockPoistions,mt as PositionAutoAdjust,$t as __namedExportsOrder,D as default};
