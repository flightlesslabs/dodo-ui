import{p as i,c as l}from"./iframe-Dz8TuBvm.js";import{c as p,d as m}from"./create-runtime-stories-D4PEhd9g.js";import{s as d,C as n}from"./Checkbox.stories-ChP9HEwz.js";import"./lifecycle-mfYXf25-.js";import"./attributes-DmS7zdLA.js";import"./this-BhKk8y0x.js";import"./style-BnPB1de5.js";import"./input-BWb0Gk77.js";import"./Icon-CW8kQ57V.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const h={component:n,tags:["autodocs"],argTypes:d,parameters:{docs:{description:{component:""}}}},{Story:C}=m();let o=!1;function a(s,r){i(r,!0),C(s,{name:"Change",args:{onchange:e=>{const t=e.target;alert("onchange Clicked"),console.log("Checkbox Clicked",t)},checked:o},asChild:!0,children:(e,t)=>{n(e,{onchange:c=>{const g=c.target;alert("onchange Clicked"),console.log("onchange Clicked",g)},checked:o})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    alert('onchange Clicked');
    console.log('onchange Clicked', target);
  }}
  {checked}
/>`}}}),l()}a.__docgen={data:[],name:"Events.stories.svelte"};const _=p(a,h),w=["Change"],A={..._.Change,tags:["svelte-csf-v5"]};export{A as Change,w as __namedExportsOrder,h as default};
