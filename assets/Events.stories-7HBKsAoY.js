import{p as g,c as p}from"./iframe-B_h0ZugA.js";import{c as l,d as m}from"./create-runtime-stories-CuUPjFLX.js";import{s as d,C as n}from"./Checkbox.stories-BRfgmN6s.js";import"./preload-helper-D9Z9MdNV.js";import"./lifecycle-Dv2MLzXX.js";import"./attributes-B-gMNrtk.js";import"./this-bRGdYwyX.js";import"./style-C9v_w32A.js";import"./input-IWW5ZSH7.js";import"./Icon-ELkYyRiM.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const h={component:n,tags:["autodocs"],argTypes:d,parameters:{docs:{description:{component:""}}}},{Story:C}=m();let o=!1;function a(s,r){g(r,!0),C(s,{name:"Change",args:{onchange:e=>{const t=e.target;alert("onchange Clicked"),console.log("Checkbox Clicked",t)},checked:o},asChild:!0,children:(e,t)=>{n(e,{onchange:c=>{const i=c.target;alert("onchange Clicked"),console.log("onchange Clicked",i)},checked:o})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    alert('onchange Clicked');
    console.log('onchange Clicked', target);
  }}
  {checked}
/>`}}}),p()}a.__docgen={data:[],name:"Events.stories.svelte"};const _=l(a,h),A=["Change"],H={..._.Change,tags:["svelte-csf-v5"]};export{H as Change,A as __namedExportsOrder,h as default};
