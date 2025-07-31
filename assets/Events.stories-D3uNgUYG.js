import{p as i,c as l}from"./iframe-CKreDJ-W.js";import{c as p,d as m}from"./create-runtime-stories-B1M39i5I.js";import{s as d,C as n}from"./Checkbox.stories-BPsZ1dpQ.js";import"./lifecycle-BoaImdaE.js";import"./attributes-BXh4mxt6.js";import"./this-CSoCAvVz.js";import"./style-kG9rw49h.js";import"./input-DZfi-ycp.js";import"./Icon-BknMwGiI.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const h={component:n,tags:["autodocs"],argTypes:d,parameters:{docs:{description:{component:""}}}},{Story:C}=m();let o=!1;function a(s,r){i(r,!0),C(s,{name:"Change",args:{onchange:e=>{const t=e.target;alert("onchange Clicked"),console.log("Checkbox Clicked",t)},checked:o},asChild:!0,children:(e,t)=>{n(e,{onchange:c=>{const g=c.target;alert("onchange Clicked"),console.log("onchange Clicked",g)},checked:o})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    alert('onchange Clicked');
    console.log('onchange Clicked', target);
  }}
  {checked}
/>`}}}),l()}a.__docgen={data:[],name:"Events.stories.svelte"};const _=p(a,h),w=["Change"],A={..._.Change,tags:["svelte-csf-v5"]};export{A as Change,w as __namedExportsOrder,h as default};
