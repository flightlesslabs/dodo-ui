import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,Ct as n,Dt as r,Gt as i,Kt as a,Mt as o,Tt as s,ft as c,ln as l,nn as u,p as d,rt as f,st as p,tt as m}from"./iframe-CvWSf_Hq.js";import{i as h,n as g,r as _,t as v}from"./create-runtime-stories-CMZqfqE5.js";import{n as y,t as b}from"./UtilityButton-DYavnrrt.js";import{n as x,t as S}from"./Theme-BPi75P-E.js";import{a as C,i as w,n as T,o as E,r as D,t as O}from"./AccordionItem-BSfqnGiX.js";import{n as k,t as A}from"./Icon-C79uxSh8.js";function j(e,r){a(r,!0);var o=H(),l=n(o);F(l,{name:`Default`,args:{type:`single`},children:(e,t)=>{var r=R(),i=n(r);O(i,{title:`Item 1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var a=s(i,2);O(a,{title:`Item 2`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var o=s(a,2);O(o,{title:`Item 3`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}}),m(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var d=s(l,2);F(d,{name:`Controlled`,asChild:!0,children:(e,r)=>{C(e,{type:`single`,get value(){return c(I)},set value(e){t(I,e,!0)},children:(e,t)=>{var r=R(),i=n(r);O(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var a=s(i,2);O(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var o=s(a,2);O(o,{title:`Item 3`,value:`item-3`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}}),m(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="single" bind:value={value1}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var f=s(d,2);F(f,{name:`Multiple`,args:{type:`multiple`},children:(e,t)=>{var r=R(),i=n(r);O(i,{title:`Item 1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var a=s(i,2);O(a,{title:`Item 2`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var o=s(a,2);O(o,{title:`Item 3`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}}),m(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var h=s(f,2);F(h,{name:`Multiple Controlled`,asChild:!0,children:(e,r)=>{C(e,{type:`multiple`,get value(){return c(L)},set value(e){t(L,e,!0)},children:(e,t)=>{var r=R(),i=n(r);O(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var a=s(i,2);O(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}});var o=s(a,2);O(o,{title:`Item 3`,value:`item-3`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}}),m(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="multiple" bind:value={value2}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var g=s(h,2);F(g,{name:`Custom Header`,args:{type:`single`},children:(e,t)=>{var r=R(),i=n(r);O(i,{customHeaderContent:e=>{var t=z(),r=n(t);D(r,{children:(e,t)=>{b(e,{compact:!0,children:(e,t)=>{A(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),u(),m(e,t)},children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{customHeaderContent:!0,default:!0}});var a=s(i,2);O(a,{customHeaderContent:e=>{var t=B(),r=n(t);D(r,{children:(e,t)=>{b(e,{compact:!0,children:(e,t)=>{A(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),u(),m(e,t)},children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{customHeaderContent:!0,default:!0}});var o=s(a,2);O(o,{customHeaderContent:e=>{var t=V(),r=n(t);D(r,{children:(e,t)=>{b(e,{compact:!0,children:(e,t)=>{A(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),u(),m(e,t)},children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{customHeaderContent:!0,default:!0}}),m(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem>
{#snippet customHeaderContent()}
  <AccordionTrigger>
    <UtilityButton compact>
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    </UtilityButton>
  </AccordionTrigger>
  Item 1
{/snippet}
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem>
{#snippet customHeaderContent()}
  <AccordionTrigger>
    <UtilityButton compact>
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    </UtilityButton>
  </AccordionTrigger>
  Item 2
{/snippet}
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem>
{#snippet customHeaderContent()}
  <AccordionTrigger>
    <UtilityButton compact>
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    </UtilityButton>
  </AccordionTrigger>
  Item 3
{/snippet}
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var _=s(g,2);F(_,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,t)=>{O(e,{title:`Item 1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var v=s(_,2);F(v,{name:`Light Theme`,asChild:!0,children:(e,t)=>{S(e,{type:`light`,children:(e,t)=>{C(e,{type:`single`,children:(e,t)=>{O(e,{title:`Item 1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}});var y=s(v,2);F(y,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{S(e,{type:`dark`,children:(e,t)=>{C(e,{type:`single`,children:(e,t)=>{O(e,{title:`Item 1`,children:(e,t)=>{u();var n=p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);m(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),m(e,o),i()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{l(),h(),E(),T(),w(),x(),y(),k(),d(),g(),M=`
 A simple, stylable accordion component based on bits-ui [accordion](https://bits-ui.com/docs/components/accordion).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Accordion } from '@flightlesslabs/dodo-ui-bits';

 <Accordion />
 \`\`\`
`,N={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},P={component:C,tags:[`autodocs`],argTypes:N,parameters:{docs:{description:{component:M}}}},{Story:F}=_(P),I=o(`item-2`),L=o(r([`item-2`,`item-3`])),R=f(`<!> <!> <!>`,1),z=f(`<!> Item 1`,1),B=f(`<!> Item 2`,1),V=f(`<!> Item 3`,1),H=f(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),j.__docgen={data:[],name:`Accordion.stories.svelte`},U=v(j,P),W=[`Default`,`Controlled`,`Multiple`,`MultipleControlled`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],G={...U.Default,tags:[`svelte-csf-v5`]},K={...U.Controlled,tags:[`svelte-csf-v5`]},q={...U.Multiple,tags:[`svelte-csf-v5`]},J={...U.MultipleControlled,tags:[`svelte-csf-v5`]},Y={...U.CustomHeader,tags:[`svelte-csf-v5`]},X={...U.Disabled,tags:[`svelte-csf-v5`]},Z={...U.LightTheme,tags:[`svelte-csf-v5`]},Q={...U.DarkTheme,tags:[`svelte-csf-v5`]}})))()}$();export{K as Controlled,Y as CustomHeader,Q as DarkTheme,G as Default,X as Disabled,Z as LightTheme,q as Multiple,J as MultipleControlled,W as __namedExportsOrder,P as default,N as storyAccordionArgTypes};