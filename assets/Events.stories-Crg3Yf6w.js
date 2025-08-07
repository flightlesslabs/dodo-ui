import{p,t as s,b as a,j as d,g as n,k as g,c as _}from"./iframe-C3hxeNmA.js";import{c as v,d as q}from"./create-runtime-stories-LRBVjFCg.js";import{s as $,A as r}from"./Accordian.stories-CJC2zu-d.js";import"./preload-helper-D9Z9MdNV.js";import"./lifecycle-9HmpwKdq.js";import"./this-B_qwwyck.js";import"./Icon-BPV9euiA.js";import"./attributes-DFU73Mj4.js";import"./style-EQUeuE57.js";import"./size-C-8mwSpB.js";const f={component:r,tags:["autodocs"],argTypes:$,parameters:{docs:{description:{component:""}}}},{Story:h}=q();let t=g(!1);function i(c,m){p(m,!0),h(c,{name:"Toggle",asChild:!0,children:(u,T)=>{r(u,{get open(){return n(t)},ontoggle:e=>{d(t,!n(t)),console.log("Input Event",e)},summary:e=>{var o=s("Click me!");a(e,o)},children:(e,o)=>{var l=s(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.`);a(e,l)},$$slots:{summary:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordian
  {open}
  ontoggle={(e: AccordianToggleEvent) => {
    open = !open;

    console.log('Input Event', e);
  }}
>
  {#snippet summary()}
    Click me!
  {/snippet}

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
  mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
  at harum, explicabo et doloremque.
</Accordian>`}}}),_()}i.__docgen={data:[],name:"Events.stories.svelte"};const y=v(i,f),w=["Toggle"],M={...y.Toggle,tags:["svelte-csf-v5"]};export{M as Toggle,w as __namedExportsOrder,f as default};
