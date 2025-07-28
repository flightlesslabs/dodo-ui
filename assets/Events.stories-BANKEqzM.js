import{p as l,c as i}from"./iframe-DpdNrh4j.js";import{c as p,d as m}from"./create-runtime-stories-D0NGXSfE.js";import{s as d,T as n}from"./Toggle.stories-BBqsuu2w.js";import"./lifecycle-C7N4YKsQ.js";import"./attributes-C8pZS94E.js";import"./this-B3JHmcvJ.js";import"./style--qz3mRur.js";import"./input-B99Fd7Bz.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const h={component:n,tags:["autodocs"],argTypes:d,parameters:{docs:{description:{component:""}}}},{Story:C}=m();let o=!1;function a(s,r){l(r,!0),C(s,{name:"Change",args:{onchange:e=>{const t=e.target;alert("onchange Clicked"),console.log("Toggle Clicked",t)},checked:o},asChild:!0,children:(e,t)=>{n(e,{onchange:c=>{const g=c.target;alert("onchange Clicked"),console.log("onchange Clicked",g)},checked:o})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Toggle
  onchange={(e: Event) => {
    const target = e.target as HTMLInputElement;

    alert('onchange Clicked');
    console.log('onchange Clicked', target);
  }}
  {checked}
/>`}}}),i()}a.__docgen={data:[],name:"Events.stories.svelte"};const _=p(a,h),w=["Change"],A={..._.Change,tags:["svelte-csf-v5"]};export{A as Change,w as __namedExportsOrder,h as default};
