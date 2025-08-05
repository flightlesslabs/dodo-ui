import{p as l,t as m,b as p,c as d}from"./iframe-CbXHd0bm.js";import{c as u,d as g}from"./create-runtime-stories-DyBmwzhf.js";import{i as k}from"./lifecycle-BctOnage.js";import{B as r}from"./Button-DN2kHdEu.js";import{storyButtonArgTypes as C}from"./Button.stories-DGbx2-RE.js";import"./preload-helper-D9Z9MdNV.js";import"./attributes-D468Nl-V.js";import"./this-wio92ZO-.js";import"./style-B_gYWly_.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./weight-CLgIXx1C.js";import"./size-C-8mwSpB.js";const f={component:r,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:_}=g();function n(a,i){l(i,!1),k(),_(a,{name:"Click",args:{onclick:t=>{const e=t.target;alert("Button Clicked"),console.log("Button Clicked",e)}},asChild:!0,children:(t,e)=>{r(t,{onclick:o=>{const s=o.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(o,s)=>{var c=m("Click me!");p(o,c)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={(e: Event) => {
    const target = e.target as HTMLButtonElement;

    alert('Button Clicked');
    console.log('Button Clicked', target);
  }}
>
  Click me!
</Button>`}}}),d()}n.__docgen={data:[],name:"Events.stories.svelte"};const B=u(n,f),H=["Click"],L={...B.Click,tags:["svelte-csf-v5"]};export{L as Click,H as __namedExportsOrder,f as default};
