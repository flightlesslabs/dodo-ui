import{p as O,f,a as P,t as r,b as o,s as u,c as A}from"./iframe-B_h0ZugA.js";import{c as b,d as S}from"./create-runtime-stories-CuUPjFLX.js";import{i as X}from"./lifecycle-Dv2MLzXX.js";import"./getMoment-lRxgIpNk.js";import{a as c}from"./Popper-Ct7Pfu-W.js";import{M as h}from"./Menu-7DA6-MSP.js";import{M as s}from"./MenuItem-CVm9-pHS.js";import{p as Y,a as E}from"./position-CdGfDFyh.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-B-gMNrtk.js";import"./this-bRGdYwyX.js";import"./style-C9v_w32A.js";import"./Paper-CXhVzTzr.js";import"./colors-C3b1rS-d.js";const R={popupPositionX:{control:{type:"select"},options:E},popupPositionY:{control:{type:"select"},options:Y}},j={component:c,tags:["autodocs"],argTypes:R,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:M}=S();var k=f("<!> <!> <!>",1),q=f("<!> <!> <!>",1),z=f("<!> <!>",1);function I(y,C){O(C,!1),X();var _=z(),v=P(_);M(v,{name:"Default",asChild:!0,children:(i,T)=>{c(i,{children:(m,w)=>{h(m,{children:($,D)=>{var p=k(),a=P(p);s(a,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var n=u(a,2);s(n,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var d=u(n,2);s(d,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o($,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}});var x=u(v,2);M(x,{name:"CustomPaperProps",args:{paperProps:{color:"primary"}},asChild:!0,children:(i,T)=>{c(i,{paperProps:{color:"primary"},children:(m,w)=>{h(m,{children:($,D)=>{var p=q(),a=P(p);s(a,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var n=u(a,2);s(n,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var d=u(n,2);s(d,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o($,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup
  paperProps={{
    color: 'primary',
  }}
>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}}),o(y,_),A()}I.__docgen={data:[],name:"PopperPopup.stories.svelte"};const g=b(I,j),te=["Default","CustomPaperProps"],oe={...g.Default,tags:["svelte-csf-v5"]},re={...g.CustomPaperProps,tags:["svelte-csf-v5"]};export{re as CustomPaperProps,oe as Default,te as __namedExportsOrder,j as default,R as storyPopperPopupArgTypes};
