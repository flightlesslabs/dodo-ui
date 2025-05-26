import{f as P,t as r,a as o}from"./props-uFC-caVa.js";import{p as D,f as c,s as u,a as A}from"./runtime-DIrpp2y3.js";import{i as S}from"./lifecycle-CXI0inZR.js";import{c as X,d as Y}from"./create-runtime-stories-BfW3D4Rh.js";import{a as f}from"./Popper-Y3KhLEoG.js";import{M as h}from"./Menu-DhM_y6sA.js";import{M as s}from"./MenuItem-CJr34JYe.js";import{p as b,a as k}from"./position-CdGfDFyh.js";import"./index-CfOrKyLd.js";import"./attributes-BIVPLOSU.js";import"./class-DADASfdQ.js";import"./style-C_xoMeF3.js";import"./this-B8E5S8lX.js";import"./Paper-C_5olhtM.js";import"./colors-C3b1rS-d.js";const E={popupPositionX:{control:{type:"select"},options:k},popupPositionY:{control:{type:"select"},options:b}},R={component:f,tags:["autodocs"],argTypes:E,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:M}=Y();var j=P("<!> <!> <!>",1),q=P("<!> <!> <!>",1),z=P("<!> <!>",1);function y(g,x){D(x,!1),S();var _=z(),v=c(_);M(v,{name:"Default",asChild:!0,children:(i,T)=>{f(i,{children:(m,w)=>{h(m,{children:(d,O)=>{var p=j(),n=c(p);s(n,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var a=u(n,2);s(a,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var $=u(a,2);s($,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}});var C=u(v,2);M(C,{name:"CustomPaperProps",args:{paperProps:{color:"primary"}},asChild:!0,children:(i,T)=>{f(i,{paperProps:{color:"primary"},children:(m,w)=>{h(m,{children:(d,O)=>{var p=q(),n=c(p);s(n,{children:(e,l)=>{var t=r("One");o(e,t)},$$slots:{default:!0}});var a=u(n,2);s(a,{children:(e,l)=>{var t=r("Two");o(e,t)},$$slots:{default:!0}});var $=u(a,2);s($,{children:(e,l)=>{var t=r("Three");o(e,t)},$$slots:{default:!0}}),o(d,p)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PopperPopup
  paperProps={{
    color: 'primary',
  }}
>
  <Menu>
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Menu>
</PopperPopup>`}}}),o(g,_),A()}y.__docgen={version:3,name:"PopperPopup.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=X(y,R),oe=["Default","CustomPaperProps"],re={...I.Default,tags:["svelte-csf-v5"]},se={...I.CustomPaperProps,tags:["svelte-csf-v5"]};export{se as CustomPaperProps,re as Default,oe as __namedExportsOrder,R as default,E as storyPopperPopupArgTypes};
