import{p as l,t as m,b as p,c as d}from"./iframe-Dz8TuBvm.js";import{c as u,d as g}from"./create-runtime-stories-D4PEhd9g.js";import{i as k}from"./lifecycle-mfYXf25-.js";import{B as n}from"./Button-B6GvU3o-.js";import{storyButtonArgTypes as C}from"./Button.stories-BHYsN2cu.js";import"./attributes-DmS7zdLA.js";import"./this-BhKk8y0x.js";import"./style-BnPB1de5.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./weight-CLgIXx1C.js";import"./size-C-8mwSpB.js";const f={component:n,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:_}=g();function r(a,c){l(c,!1),k(),_(a,{name:"Click",args:{onclick:t=>{const e=t.target;alert("Button Clicked"),console.log("Button Clicked",e)}},asChild:!0,children:(t,e)=>{n(t,{onclick:o=>{const s=o.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(o,s)=>{var i=m("Click me!");p(o,i)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={(e: Event) => {
    const target = e.target as HTMLButtonElement;

    alert('Button Clicked');
    console.log('Button Clicked', target);
  }}
>
  Click me!
</Button>`}}}),d()}r.__docgen={data:[],name:"Events.stories.svelte"};const B=u(r,f),A=["Click"],H={...B.Click,tags:["svelte-csf-v5"]};export{H as Click,A as __namedExportsOrder,f as default};
