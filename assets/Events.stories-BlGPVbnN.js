import{p as l,t as m,b as p,c as d}from"./iframe-CKreDJ-W.js";import{c as u,d as g}from"./create-runtime-stories-B1M39i5I.js";import{i as k}from"./lifecycle-BoaImdaE.js";import{B as n}from"./Button-DdHK-vP0.js";import{storyButtonArgTypes as C}from"./Button.stories-B7vXyBEM.js";import"./attributes-BXh4mxt6.js";import"./this-CSoCAvVz.js";import"./style-kG9rw49h.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./weight-CLgIXx1C.js";import"./size-C-8mwSpB.js";const f={component:n,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:_}=g();function r(a,c){l(c,!1),k(),_(a,{name:"Click",args:{onclick:t=>{const e=t.target;alert("Button Clicked"),console.log("Button Clicked",e)}},asChild:!0,children:(t,e)=>{n(t,{onclick:o=>{const s=o.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(o,s)=>{var i=m("Click me!");p(o,i)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={(e: Event) => {
    const target = e.target as HTMLButtonElement;

    alert('Button Clicked');
    console.log('Button Clicked', target);
  }}
>
  Click me!
</Button>`}}}),d()}r.__docgen={data:[],name:"Events.stories.svelte"};const B=u(r,f),A=["Click"],H={...B.Click,tags:["svelte-csf-v5"]};export{H as Click,A as __namedExportsOrder,f as default};
