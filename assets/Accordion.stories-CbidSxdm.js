import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-Cvi8vf-1.js";import{C as d,K as f,S as p,g as m,n as h,q as g,r as _,t as v,z as y}from"./create-runtime-stories-1j-U1JW1.js";import{h as b,m as x,p as S,t as C}from"./dist-1OX3Vgy7.js";function w(e,t){l(t,!0);var n=F(),o=s(n);O(o,{name:`Default`,args:{type:`single`},children:(e,t)=>{var n=k(),a=s(n);S(a,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);S(o,{title:`Item 2`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),S(i(o,2),{title:`Item 3`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),u(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var d=i(o,2);O(d,{name:`Multiple`,args:{type:`multiple`},children:(e,t)=>{var n=A(),a=s(n);S(a,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);S(o,{title:`Item 2`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),S(i(o,2),{title:`Item 3`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),u(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var f=i(d,2);O(f,{name:`Custom Header`,args:{type:`single`},children:(e,t)=>{var n=P(),a=s(n);S(a,{customHeaderContent:e=>{var t=j();x(s(t),{children:(e,t)=>{y(e,{compact:!0,children:(e,t)=>{p(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),c(),u(e,t)},children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}});var o=i(a,2);S(o,{customHeaderContent:e=>{var t=M();x(s(t),{children:(e,t)=>{y(e,{compact:!0,children:(e,t)=>{p(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),c(),u(e,t)},children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),S(i(o,2),{customHeaderContent:e=>{var t=N();x(s(t),{children:(e,t)=>{y(e,{compact:!0,children:(e,t)=>{p(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),c(),u(e,t)},children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),u(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
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
</Accordion>`}}});var h=i(f,2);O(h,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var g=i(h,2);O(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{m(e,{type:`light`,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),O(i(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{m(e,{type:`dark`,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),u(e,n),a()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{t(),g(),C(),_(),d(),o(),h(),T=`
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
`,E={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},D={component:b,tags:[`autodocs`],argTypes:E,parameters:{docs:{description:{component:T}}}},{Story:O}=f(D),k=n(`<!> <!> <!>`,1),A=n(`<!> <!> <!>`,1),j=n(`<!> Item 1`,1),M=n(`<!> Item 2`,1),N=n(`<!> Item 3`,1),P=n(`<!> <!> <!>`,1),F=n(`<!> <!> <!> <!> <!> <!>`,1),w.__docgen={data:[],name:`Accordion.stories.svelte`},I=v(w,D),L=[`Default`,`Multiple`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Multiple,tags:[`svelte-csf-v5`]},B={...I.CustomHeader,tags:[`svelte-csf-v5`]},V={...I.Disabled,tags:[`svelte-csf-v5`]},H={...I.LightTheme,tags:[`svelte-csf-v5`]},U={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{B as CustomHeader,U as DarkTheme,R as Default,V as Disabled,H as LightTheme,z as Multiple,L as __namedExportsOrder,D as default,E as storyAccordionArgTypes};