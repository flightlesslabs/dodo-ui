import{t as f,a as r,b as o}from"./props-D-EHSMr3.js";import{p as D,f as c,s as u,a as A}from"./runtime-CdPt_9rh.js";import{i as b}from"./lifecycle-BuIi21Zy.js";import{c as S,d as X}from"./create-runtime-stories-DsgurVz0.js";import{a as P}from"./Popper-CX05EFH0.js";import{M as h}from"./Menu-BTgiED71.js";import{M as s}from"./MenuItem-BlAOMtg9.js";import{p as Y,a as k}from"./position-CdGfDFyh.js";import"./index-CfOrKyLd.js";import"./attributes-CwJgYf65.js";import"./class-gNv4YZJM.js";import"./style-BzMgOw8E.js";import"./this-Dvi62nf7.js";import"./Paper-ahUYpBWO.js";import"./colors-C3b1rS-d.js";const E={popupPositionX:{control:{type:"select"},options:k},popupPositionY:{control:{type:"select"},options:Y}},R={component:P,tags:["autodocs"],argTypes:E,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:M}=X();var j=f("<!> <!> <!>",1),q=f("<!> <!> <!>",1),z=f("<!> <!>",1);function y(g,x){D(x,!1),b();var _=z(),v=c(_);M(v,{name:"Default",asChild:!0,children:(i,T)=>{P(i,{children:(m,w)=>{h(m,{children:(d,O)=>{var p=j(),a=c(p);s(a,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var n=u(a,2);s(n,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var $=u(n,2);s($,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}});var C=u(v,2);M(C,{name:"CustomPaperProps",args:{paperProps:{color:"primary"}},asChild:!0,children:(i,T)=>{P(i,{paperProps:{color:"primary"},children:(m,w)=>{h(m,{children:(d,O)=>{var p=q(),a=c(p);s(a,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var n=u(a,2);s(n,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var $=u(n,2);s($,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup
  paperProps={{
    color: 'primary',
  }}
>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}}),o(g,_),A()}y.__docgen={version:3,name:"PopperPopup.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=S(y,R),oe=["Default","CustomPaperProps"],re={...I.Default,tags:["svelte-csf-v5"]},se={...I.CustomPaperProps,tags:["svelte-csf-v5"]};export{se as CustomPaperProps,re as Default,oe as __namedExportsOrder,R as default,E as storyPopperPopupArgTypes};
