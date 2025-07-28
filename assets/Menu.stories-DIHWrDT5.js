import{p as R,f as M,a as v,t as o,b as e,s as r,c as j}from"./iframe-DpdNrh4j.js";import{c as k,d as q}from"./create-runtime-stories-D0NGXSfE.js";import{i as B}from"./lifecycle-C7N4YKsQ.js";import{M as f}from"./Menu-BgHj8OVy.js";import{M as a}from"./MenuItem-CQr4AVzp.js";import"./Popper-ujftblw2.js";import"./getMoment-DQPCA-4b.js";import{S as z}from"./Separator-C6rl7Yvl.js";import"./attributes-C8pZS94E.js";import"./this-B3JHmcvJ.js";import"./style--qz3mRur.js";import"./Paper-CSJs_APj.js";import"./colors-C3b1rS-d.js";const H={},J={component:f,tags:["autodocs"],argTypes:H,parameters:{docs:{description:{component:""}}}},{Story:h}=q();var K=M("<!> <!> <!>",1),L=M("<!> <!> <!>",1),N=M("<!> <!> <!>",1),Q=M("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),U=M("<!> <!> <!>",1),V=M("<!> <!> <!> <!> <!>",1);function T(A,E){R(E,!1),B();var x=V(),S=v(x);h(S,{name:"Default",asChild:!0,children:(m,P)=>{f(m,{children:(c,C)=>{var u=K(),d=v(u);a(d,{children:(t,i)=>{var s=o("Cut");e(t,s)},$$slots:{default:!0}});var $=r(d,2);a($,{children:(t,i)=>{var s=o("Copy");e(t,s)},$$slots:{default:!0}});var p=r($,2);a(p,{children:(t,i)=>{var s=o("Paste");e(t,s)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Default Menu"}},__svelteCsf:{rawCode:`<Menu>
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var y=r(S,2);h(y,{name:"FixedSize",asChild:!0,children:(m,P)=>{f(m,{width:"200px",height:"300px",children:(c,C)=>{var u=L(),d=v(u);a(d,{children:(t,i)=>{var s=o("Cut");e(t,s)},$$slots:{default:!0}});var $=r(d,2);a($,{children:(t,i)=>{var s=o("Copy");e(t,s)},$$slots:{default:!0}});var p=r($,2);a(p,{children:(t,i)=>{var s=o("Paste");e(t,s)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Fixed width and height"}},__svelteCsf:{rawCode:`<Menu width="200px" height="300px">
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var g=r(y,2);h(g,{name:"WithSeparator",asChild:!0,children:(m,P)=>{f(m,{separator:!0,children:(c,C)=>{var u=N(),d=v(u);a(d,{children:(t,i)=>{var s=o("Cut");e(t,s)},$$slots:{default:!0}});var $=r(d,2);a($,{children:(t,i)=>{var s=o("Copy");e(t,s)},$$slots:{default:!0}});var p=r($,2);a(p,{children:(t,i)=>{var s=o("Paste");e(t,s)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems With Separator"}},__svelteCsf:{rawCode:`<Menu separator>
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var D=r(g,2);h(D,{name:"Sections",asChild:!0,children:(m,P)=>{f(m,{width:"200px",children:(c,C)=>{var u=Q(),d=v(u);a(d,{children:(n,_)=>{var l=o("Cut");e(n,l)},$$slots:{default:!0}});var $=r(d,2);a($,{children:(n,_)=>{var l=o("Cut Special");e(n,l)},$$slots:{default:!0}});var p=r($,2);a(p,{children:(n,_)=>{var l=o("Cut Selected");e(n,l)},$$slots:{default:!0}});var t=r(p,2);z(t,{});var i=r(t,2);a(i,{children:(n,_)=>{var l=o("Copy");e(n,l)},$$slots:{default:!0}});var s=r(i,2);a(s,{children:(n,_)=>{var l=o("Copy Special");e(n,l)},$$slots:{default:!0}});var b=r(s,2);a(b,{children:(n,_)=>{var l=o("Copy Selected");e(n,l)},$$slots:{default:!0}});var w=r(b,2);z(w,{});var W=r(w,2);a(W,{children:(n,_)=>{var l=o("Paste");e(n,l)},$$slots:{default:!0}});var F=r(W,2);a(F,{children:(n,_)=>{var l=o("Paste Special");e(n,l)},$$slots:{default:!0}});var O=r(F,2);a(O,{children:(n,_)=>{var l=o("Paste Selected");e(n,l)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems Grouped in Sections. [Separator](?path=/docs/components-layout-separator--docs)"}},__svelteCsf:{rawCode:`<Menu width="200px">
  <MenuItem>Cut</MenuItem>
  <MenuItem>Cut Special</MenuItem>
  <MenuItem>Cut Selected</MenuItem>
  <Separator />
  <MenuItem>Copy</MenuItem>
  <MenuItem>Copy Special</MenuItem>
  <MenuItem>Copy Selected</MenuItem>
  <Separator />
  <MenuItem>Paste</MenuItem>
  <MenuItem>Paste Special</MenuItem>
  <MenuItem>Paste Selected</MenuItem>
</Menu>`}}});var G=r(D,2);h(G,{name:"Disabled",asChild:!0,children:(m,P)=>{f(m,{children:(c,C)=>{var u=U(),d=v(u);a(d,{children:(t,i)=>{var s=o("Cut");e(t,s)},$$slots:{default:!0}});var $=r(d,2);a($,{disabled:!0,children:(t,i)=>{var s=o("Copy");e(t,s)},$$slots:{default:!0}});var p=r($,2);a(p,{children:(t,i)=>{var s=o("Paste");e(t,s)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems With some options disabled"}},__svelteCsf:{rawCode:`<Menu>
  <MenuItem>Cut</MenuItem>
  <MenuItem disabled>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}}),e(A,x),j()}T.__docgen={data:[],name:"Menu.stories.svelte"};const I=k(T,J),$e=["Default","FixedSize","WithSeparator","Sections","Disabled"],ie={...I.Default,tags:["svelte-csf-v5"]},pe={...I.FixedSize,tags:["svelte-csf-v5"]},me={...I.WithSeparator,tags:["svelte-csf-v5"]},ce={...I.Sections,tags:["svelte-csf-v5"]},_e={...I.Disabled,tags:["svelte-csf-v5"]};export{ie as Default,_e as Disabled,pe as FixedSize,ce as Sections,me as WithSeparator,$e as __namedExportsOrder,J as default,H as storyMenuArgTypes};
