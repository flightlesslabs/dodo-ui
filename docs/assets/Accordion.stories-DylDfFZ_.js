import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as n,Nt as r,Ot as i,Wt as a,dn as o,dt as s,et as c,f as l,jt as u,nt as d,ot as f,tn as p,wt as m}from"./iframe-D-6HYk99.js";import{L as h,R as g,T as _,_t as v,n as y,r as b,t as x,tt as S,vt as C}from"./create-runtime-stories-Cv_8PuEr.js";import{E as w,O as T,t as E,w as D}from"./dist-CJi74XPO.js";function O(e,r){n(r,!0);var i=z(),o=m(i);M(o,{name:`Default`,args:{type:`single`},children:(e,n)=>{var r=F(),i=m(r);D(i,{title:`Item 1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=t(i,2);D(a,{title:`Item 2`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(t(a,2),{title:`Item 3`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var l=t(o,2);M(l,{name:`Controlled`,asChild:!0,children:(e,n)=>{T(e,{type:`single`,get value(){return s(N)},set value(e){u(N,e,!0)},children:(e,n)=>{var r=F(),i=m(r);D(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=t(i,2);D(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(t(a,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="single" bind:value={value1}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=t(l,2);M(d,{name:`Multiple`,args:{type:`multiple`},children:(e,n)=>{var r=F(),i=m(r);D(i,{title:`Item 1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=t(i,2);D(a,{title:`Item 2`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(t(a,2),{title:`Item 3`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var g=t(d,2);M(g,{name:`Multiple Controlled`,asChild:!0,children:(e,n)=>{T(e,{type:`multiple`,get value(){return s(P)},set value(e){u(P,e,!0)},children:(e,n)=>{var r=F(),i=m(r);D(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=t(i,2);D(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(t(a,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),c(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="multiple" bind:value={value2}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var v=t(g,2);M(v,{name:`Custom Header`,args:{type:`single`},children:(e,n)=>{var r=F(),i=m(r);D(i,{customHeaderContent:e=>{var t=I();w(m(t),{children:(e,t)=>{S(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),c(e,t)},children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}});var a=t(i,2);D(a,{customHeaderContent:e=>{var t=L();w(m(t),{children:(e,t)=>{S(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),c(e,t)},children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),D(t(a,2),{customHeaderContent:e=>{var t=R();w(m(t),{children:(e,t)=>{S(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),c(e,t)},children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),c(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
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
</Accordion>`}}});var y=t(v,2);M(y,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,t)=>{D(e,{title:`Item 1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var b=t(y,2);M(b,{name:`Light Theme`,asChild:!0,children:(e,t)=>{_(e,{type:`light`,children:(e,t)=>{T(e,{type:`single`,children:(e,t)=>{D(e,{title:`Item 1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),M(t(b,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{_(e,{type:`dark`,children:(e,t)=>{T(e,{type:`single`,children:(e,t)=>{D(e,{title:`Item 1`,children:(e,t)=>{p(),c(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),c(e,i),a()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{o(),C(),E(),b(),g(),l(),y(),k=`
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
`,A={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},j={component:T,tags:[`autodocs`],argTypes:A,parameters:{docs:{description:{component:k}}}},{Story:M}=v(j),N=r(`item-2`),P=r(i([`item-2`,`item-3`])),F=d(`<!> <!> <!>`,1),I=d(`<!> Item 1`,1),L=d(`<!> Item 2`,1),R=d(`<!> Item 3`,1),z=d(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`Accordion.stories.svelte`},B=x(O,j),V=[`Default`,`Controlled`,`Multiple`,`MultipleControlled`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],H={...B.Default,tags:[`svelte-csf-v5`]},U={...B.Controlled,tags:[`svelte-csf-v5`]},W={...B.Multiple,tags:[`svelte-csf-v5`]},G={...B.MultipleControlled,tags:[`svelte-csf-v5`]},K={...B.CustomHeader,tags:[`svelte-csf-v5`]},q={...B.Disabled,tags:[`svelte-csf-v5`]},J={...B.LightTheme,tags:[`svelte-csf-v5`]},Y={...B.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{U as Controlled,K as CustomHeader,Y as DarkTheme,H as Default,q as Disabled,J as LightTheme,W as Multiple,G as MultipleControlled,V as __namedExportsOrder,j as default,A as storyAccordionArgTypes};