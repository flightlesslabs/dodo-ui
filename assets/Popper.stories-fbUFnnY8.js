import{t as C,a as n,b as t,c as G,i as J,s as H}from"./props-mKSH39sK.js";import{p as K,f as _,b as h,g as P,c as N,u as A,s as c,n as Q,a as U,t as L}from"./context-Be8SpCvp.js";import{c as V,d as Z}from"./create-runtime-stories-9CvTCwCz.js";import{P as v}from"./Popper-BzK9LGY_.js";import{B as y}from"./Button-C03qjQLL.js";import{M as I}from"./Menu-CAF-4NHE.js";import{M as d}from"./MenuItem-DGgjVkPj.js";import{p as ee,a as te}from"./position-CdGfDFyh.js";import"./index-CfOrKyLd.js";import"./attributes-CBEXesa5.js";import"./class-oKhFqGyO.js";import"./style-ElLZQic_.js";import"./this-BbO7MGBb.js";import"./Paper-B3l7ZdQf.js";import"./colors-C3b1rS-d.js";const oe={popupPositionX:{control:{type:"select"},options:te},popupPositionY:{control:{type:"select"},options:ee}},re={component:v,tags:["autodocs"],argTypes:oe,parameters:{docs:{story:{height:"200px",inline:!1},description:{component:""}}}},{Story:x}=Z();let $=N(!1);var se=C("<!> <!> <!>",1),ne=C("<!> <!> <!>",1),pe=C("<!> <!> <!>",1),le=C("<!> <!> <!>",1),ue=C("<!> <!>",1),ae=C("<!> <!> <!> <!> <!>",1);function S(X,Y){K(Y,!0);var B=ae(),W=_(B);const E=A(()=>({open:P($),onClickOutside:()=>h($,!1)}));x(W,{name:"Default",get args(){return P(E)},asChild:!0,children:(m,O)=>{v(m,{get open(){return P($)},onClickOutside:()=>h($,!1),popupChildren:r=>{I(r,{children:(u,p)=>{var l=se(),s=_(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var b=c(W,2);x(b,{name:"MenuOpen",args:{open:!0},asChild:!0,children:(m,O)=>{v(m,{open:!0,popupChildren:r=>{I(r,{children:(u,p)=>{var l=ne(),s=_(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{var p=n("Hello! how are you doing?");t(r,p)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper open>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var D=c(b,2);x(D,{name:"CustomPaperProps",args:{open:!0,paperProps:{color:"primary"}},asChild:!0,children:(m,O)=>{v(m,{open:!0,paperProps:{color:"primary"},popupChildren:r=>{I(r,{children:(u,p)=>{var l=pe(),s=_(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{var p=n("Hello! how are you doing?");t(r,p)},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper
  open
  paperProps={{
    color: 'primary',
  }}
>
  Hello! how are you doing?
  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var F=c(D,2);x(F,{name:"FullWidth",asChild:!0,children:(m,O)=>{v(m,{get open(){return P($)},fullWidth:!0,onClickOutside:()=>h($,!1),popupChildren:r=>{I(r,{children:(u,p)=>{var l=le(),s=_(l);d(s,{children:(o,i)=>{var e=n("One");t(o,e)},$$slots:{default:!0}});var a=c(s,2);d(a,{children:(o,i)=>{var e=n("Two");t(o,e)},$$slots:{default:!0}});var f=c(a,2);d(f,{children:(o,i)=>{var e=n("Three");t(o,e)},$$slots:{default:!0}}),t(u,l)},$$slots:{default:!0}})},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{popupChildren:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} fullWidth onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet popupChildren()}
    <Menu>
      <MenuItem>One</MenuItem>
      <MenuItem>Two</MenuItem>
      <MenuItem>Three</MenuItem>
    </Menu>
  {/snippet}
</Popper>`}}});var R=c(F,2);const j=A(()=>({open:P($),onClickOutside:()=>h($,!1)}));x(R,{name:"CustomPopup",get args(){return P(j)},asChild:!0,children:(m,O)=>{v(m,{get open(){return P($)},onClickOutside:()=>h($,!1),customPopup:(r,u=Q)=>{var p=G(),l=_(p);{var s=a=>{I(a,{children:(f,o)=>{var i=ue(),e=_(i);d(e,{children:(T,z)=>{var M=n();L(()=>{var g;return H(M,(g=u())==null?void 0:g.height)}),t(T,M)},$$slots:{default:!0}});var q=c(e,2);d(q,{children:(T,z)=>{var M=n();L(()=>{var g;return H(M,(g=u())==null?void 0:g.width)}),t(T,M)},$$slots:{default:!0}}),t(f,i)},$$slots:{default:!0}})};J(l,a=>{P($)&&a(s)})}t(r,p)},children:(r,u)=>{y(r,{onclick:()=>h($,!0),children:(p,l)=>{var s=n("Click to see Popup");t(p,s)},$$slots:{default:!0}})},$$slots:{customPopup:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Popper {open} onClickOutside={() => (open = false)}>
  <Button onclick={() => (open = true)}>Click to see Popup</Button>

  {#snippet customPopup(popperLocation)}
    {#if open}
      <Menu>
        <MenuItem>{popperLocation?.height}</MenuItem>
        <MenuItem>{popperLocation?.width}</MenuItem>
      </Menu>
    {/if}
  {/snippet}
</Popper>`}}}),t(X,B),U()}S.__docgen={version:3,name:"Popper.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=V(S,re),ke=["Default","MenuOpen","CustomPaperProps","FullWidth","CustomPopup"],Oe={...k.Default,tags:["svelte-csf-v5"]},we={...k.MenuOpen,tags:["svelte-csf-v5"]},Te={...k.CustomPaperProps,tags:["svelte-csf-v5"]},ye={...k.FullWidth,tags:["svelte-csf-v5"]},Be={...k.CustomPopup,tags:["svelte-csf-v5"]};export{Te as CustomPaperProps,Be as CustomPopup,Oe as Default,ye as FullWidth,we as MenuOpen,ke as __namedExportsOrder,re as default,oe as storyPopperArgTypes};
