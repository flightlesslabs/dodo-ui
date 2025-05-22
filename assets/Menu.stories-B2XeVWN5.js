import{t as M,a as o,b as e}from"./props-D-EHSMr3.js";import{p as O,f as _,s,a as R}from"./runtime-CdPt_9rh.js";import{i as j}from"./lifecycle-BuIi21Zy.js";import{c as q,d as B}from"./create-runtime-stories-DsgurVz0.js";import{M as f}from"./Menu-BTgiED71.js";import{M as a}from"./MenuItem-BlAOMtg9.js";import"./Popper-CX05EFH0.js";import{S as z}from"./Separator-CqBgzZQF.js";import"./index-CfOrKyLd.js";import"./attributes-CwJgYf65.js";import"./class-gNv4YZJM.js";import"./style-BzMgOw8E.js";import"./this-Dvi62nf7.js";import"./Paper-ahUYpBWO.js";import"./colors-C3b1rS-d.js";const H={},J={component:f,tags:["autodocs"],argTypes:H,parameters:{docs:{description:{component:""}}}},{Story:h}=B();var K=M("<!> <!> <!>",1),L=M("<!> <!> <!>",1),N=M("<!> <!> <!>",1),Q=M("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),U=M("<!> <!> <!>",1),V=M("<!> <!> <!> <!> <!>",1);function T(k,A){O(A,!1),j();var x=V(),S=_(x);h(S,{name:"Default",asChild:!0,children:(m,P)=>{f(m,{children:(c,C)=>{var u=K(),d=_(u);a(d,{children:(t,i)=>{var r=o("Cut");e(t,r)},$$slots:{default:!0}});var $=s(d,2);a($,{children:(t,i)=>{var r=o("Copy");e(t,r)},$$slots:{default:!0}});var p=s($,2);a(p,{children:(t,i)=>{var r=o("Paste");e(t,r)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Default Menu"}},__svelteCsf:{rawCode:`<Menu>
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var y=s(S,2);h(y,{name:"FixedSize",asChild:!0,children:(m,P)=>{f(m,{width:"200px",height:"300px",children:(c,C)=>{var u=L(),d=_(u);a(d,{children:(t,i)=>{var r=o("Cut");e(t,r)},$$slots:{default:!0}});var $=s(d,2);a($,{children:(t,i)=>{var r=o("Copy");e(t,r)},$$slots:{default:!0}});var p=s($,2);a(p,{children:(t,i)=>{var r=o("Paste");e(t,r)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Fixed width and height"}},__svelteCsf:{rawCode:`<Menu width="200px" height="300px">
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var g=s(y,2);h(g,{name:"WithSeparator",asChild:!0,children:(m,P)=>{f(m,{separator:!0,children:(c,C)=>{var u=N(),d=_(u);a(d,{children:(t,i)=>{var r=o("Cut");e(t,r)},$$slots:{default:!0}});var $=s(d,2);a($,{children:(t,i)=>{var r=o("Copy");e(t,r)},$$slots:{default:!0}});var p=s($,2);a(p,{children:(t,i)=>{var r=o("Paste");e(t,r)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems With Separator"}},__svelteCsf:{rawCode:`<Menu separator>
  <MenuItem>Cut</MenuItem>
  <MenuItem>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}});var w=s(g,2);h(w,{name:"Sections",asChild:!0,children:(m,P)=>{f(m,{width:"200px",children:(c,C)=>{var u=Q(),d=_(u);a(d,{children:(n,v)=>{var l=o("Cut");e(n,l)},$$slots:{default:!0}});var $=s(d,2);a($,{children:(n,v)=>{var l=o("Cut Special");e(n,l)},$$slots:{default:!0}});var p=s($,2);a(p,{children:(n,v)=>{var l=o("Cut Selected");e(n,l)},$$slots:{default:!0}});var t=s(p,2);z(t,{});var i=s(t,2);a(i,{children:(n,v)=>{var l=o("Copy");e(n,l)},$$slots:{default:!0}});var r=s(i,2);a(r,{children:(n,v)=>{var l=o("Copy Special");e(n,l)},$$slots:{default:!0}});var b=s(r,2);a(b,{children:(n,v)=>{var l=o("Copy Selected");e(n,l)},$$slots:{default:!0}});var D=s(b,2);z(D,{});var W=s(D,2);a(W,{children:(n,v)=>{var l=o("Paste");e(n,l)},$$slots:{default:!0}});var F=s(W,2);a(F,{children:(n,v)=>{var l=o("Paste Special");e(n,l)},$$slots:{default:!0}});var G=s(F,2);a(G,{children:(n,v)=>{var l=o("Paste Selected");e(n,l)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems Grouped in Sections. [Separator](?path=/docs/components-layout-separator--docs)"}},__svelteCsf:{rawCode:`<Menu width="200px">
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
</Menu>`}}});var E=s(w,2);h(E,{name:"Disabled",asChild:!0,children:(m,P)=>{f(m,{children:(c,C)=>{var u=U(),d=_(u);a(d,{children:(t,i)=>{var r=o("Cut");e(t,r)},$$slots:{default:!0}});var $=s(d,2);a($,{disabled:!0,children:(t,i)=>{var r=o("Copy");e(t,r)},$$slots:{default:!0}});var p=s($,2);a(p,{children:(t,i)=>{var r=o("Paste");e(t,r)},$$slots:{default:!0}}),e(c,u)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"MenuItems With some options disabled"}},__svelteCsf:{rawCode:`<Menu>
  <MenuItem>Cut</MenuItem>
  <MenuItem disabled>Copy</MenuItem>
  <MenuItem>Paste</MenuItem>
</Menu>`}}}),e(k,x),R()}T.__docgen={version:3,name:"Menu.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=q(T,J),pe=["Default","FixedSize","WithSeparator","Sections","Disabled"],me={...I.Default,tags:["svelte-csf-v5"]},ce={...I.FixedSize,tags:["svelte-csf-v5"]},ve={...I.WithSeparator,tags:["svelte-csf-v5"]},_e={...I.Sections,tags:["svelte-csf-v5"]},fe={...I.Disabled,tags:["svelte-csf-v5"]};export{me as Default,fe as Disabled,ce as FixedSize,_e as Sections,ve as WithSeparator,pe as __namedExportsOrder,J as default,H as storyMenuArgTypes};
