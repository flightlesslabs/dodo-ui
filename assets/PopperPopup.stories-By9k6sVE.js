import{p as O,f,a as P,t as r,b as o,s as u,c as A}from"./iframe-CwZFwEuH.js";import{c as b,d as S}from"./create-runtime-stories-CWQHB_qB.js";import{i as X}from"./lifecycle-DfwppKqL.js";import{a as c}from"./Popper-BNIvZcAB.js";import"./getMoment-Dn5kiy0e.js";import{M as h}from"./Menu-LJr2shz7.js";import{M as s}from"./MenuItem-CVD3g0Iu.js";import{p as Y,a as E}from"./position-CdGfDFyh.js";import"./attributes-DjFZ4bq1.js";import"./this-Cbo_M9xu.js";import"./style-CT8XDUEw.js";import"./Paper-DUQVDo6y.js";import"./colors-C3b1rS-d.js";const R={popupPositionX:{control:{type:"select"},options:E},popupPositionY:{control:{type:"select"},options:Y}},j={component:c,tags:["autodocs"],argTypes:R,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:M}=S();var k=f("<!> <!> <!>",1),q=f("<!> <!> <!>",1),z=f("<!> <!>",1);function I(y,C){O(C,!1),X();var _=z(),v=P(_);M(v,{name:"Default",asChild:!0,children:(i,T)=>{c(i,{children:(m,w)=>{h(m,{children:($,D)=>{var p=k(),a=P(p);s(a,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var n=u(a,2);s(n,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var d=u(n,2);s(d,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o($,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup>
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
</PopperPopup>`}}}),o(y,_),A()}I.__docgen={data:[],name:"PopperPopup.stories.svelte"};const g=b(I,j),ee=["Default","CustomPaperProps"],te={...g.Default,tags:["svelte-csf-v5"]},oe={...g.CustomPaperProps,tags:["svelte-csf-v5"]};export{oe as CustomPaperProps,te as Default,ee as __namedExportsOrder,j as default,R as storyPopperPopupArgTypes};
