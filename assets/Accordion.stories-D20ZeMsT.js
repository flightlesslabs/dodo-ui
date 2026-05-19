import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,W as r,at as i,bt as a,dt as o,f as s,it as c,kt as l,lt as u,ot as d,q as f,xt as p,z as m}from"./iframe-0_cAOKgT.js";import{C as h,K as g,S as _,g as v,n as y,q as b,r as x,t as S,z as C}from"./create-runtime-stories-b-oBHseY.js";import{h as w,m as T,p as E,t as D}from"./dist-hovDR5_x.js";function O(e,t){p(t,!0);var n=U(),o=c(n);M(o,{name:`Default`,args:{type:`single`},children:(e,t)=>{var n=F(),a=c(n);E(a,{title:`Item 1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);E(o,{title:`Item 2`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),E(i(o,2),{title:`Item 3`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),m(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var s=i(o,2);M(s,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{type:`single`,get value(){return f(N)},set value(e){u(N,e,!0)},children:(e,t)=>{var n=I(),a=c(n);E(a,{title:`Item 1`,value:`item-1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);E(o,{title:`Item 2`,value:`item-2`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),E(i(o,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),m(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="single" bind:value={value1}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=i(s,2);M(d,{name:`Multiple`,args:{type:`multiple`},children:(e,t)=>{var n=L(),a=c(n);E(a,{title:`Item 1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);E(o,{title:`Item 2`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),E(i(o,2),{title:`Item 3`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),m(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var h=i(d,2);M(h,{name:`Multiple Controlled`,asChild:!0,children:(e,t)=>{w(e,{type:`multiple`,get value(){return f(P)},set value(e){u(P,e,!0)},children:(e,t)=>{var n=R(),a=c(n);E(a,{title:`Item 1`,value:`item-1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var o=i(a,2);E(o,{title:`Item 2`,value:`item-2`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),E(i(o,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),m(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="multiple" bind:value={value2}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var g=i(h,2);M(g,{name:`Custom Header`,args:{type:`single`},children:(e,t)=>{var n=H(),a=c(n);E(a,{customHeaderContent:e=>{var t=z();T(c(t),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{_(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(),m(e,t)},children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}});var o=i(a,2);E(o,{customHeaderContent:e=>{var t=B();T(c(t),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{_(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(),m(e,t)},children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),E(i(o,2),{customHeaderContent:e=>{var t=V();T(c(t),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{_(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(),m(e,t)},children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),m(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
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
</Accordion>`}}});var y=i(g,2);M(y,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,t)=>{E(e,{title:`Item 1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var b=i(y,2);M(b,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{w(e,{type:`single`,children:(e,t)=>{E(e,{title:`Item 1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),M(i(b,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{w(e,{type:`single`,children:(e,t)=>{E(e,{title:`Item 1`,children:(e,t)=>{l(),m(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),m(e,n),a()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),b(),D(),x(),h(),s(),y(),k=`
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
`,A={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},j={component:w,tags:[`autodocs`],argTypes:A,parameters:{docs:{description:{component:k}}}},{Story:M}=g(j),N=o(`item-2`),P=o(d([`item-2`,`item-3`])),F=n(`<!> <!> <!>`,1),I=n(`<!> <!> <!>`,1),L=n(`<!> <!> <!>`,1),R=n(`<!> <!> <!>`,1),z=n(`<!> Item 1`,1),B=n(`<!> Item 2`,1),V=n(`<!> Item 3`,1),H=n(`<!> <!> <!>`,1),U=n(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`Accordion.stories.svelte`},W=S(O,j),G=[`Default`,`Controlled`,`Multiple`,`MultipleControlled`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.Controlled,tags:[`svelte-csf-v5`]},J={...W.Multiple,tags:[`svelte-csf-v5`]},Y={...W.MultipleControlled,tags:[`svelte-csf-v5`]},X={...W.CustomHeader,tags:[`svelte-csf-v5`]},Z={...W.Disabled,tags:[`svelte-csf-v5`]},Q={...W.LightTheme,tags:[`svelte-csf-v5`]},$={...W.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{q as Controlled,X as CustomHeader,$ as DarkTheme,K as Default,Z as Disabled,Q as LightTheme,J as Multiple,Y as MultipleControlled,G as __namedExportsOrder,j as default,A as storyAccordionArgTypes};