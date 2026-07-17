import{i as e}from"./preload-helper-CU4w0FXX.js";import{Et as t,Gt as n,St as r,Wt as i,dn as a,dt as o,et as s,f as c,jt as l,kt as u,nt as d,ot as f,tn as p,wt as m}from"./iframe-Boim5DH3.js";import{$ as h,T as g,gt as _,ht as v,n as y,r as b,t as x}from"./create-runtime-stories-D_3FAyMc.js";import{E as S,O as C,t as w,w as T}from"./dist-jYHt1L2h.js";import{n as E,t as D}from"./Icon-kAzk7ZmU.js";function O(e,t){n(t,!0);var a=z(),c=r(a);M(c,{name:`Default`,args:{type:`single`},children:(e,t)=>{var n=F(),i=r(n);T(i,{title:`Item 1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=m(i,2);T(a,{title:`Item 2`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),T(m(a,2),{title:`Item 3`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var l=m(c,2);M(l,{name:`Controlled`,asChild:!0,children:(e,t)=>{C(e,{type:`single`,get value(){return o(N)},set value(e){u(N,e,!0)},children:(e,t)=>{var n=F(),i=r(n);T(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=m(i,2);T(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),T(m(a,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="single" bind:value={value1}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=m(l,2);M(d,{name:`Multiple`,args:{type:`multiple`},children:(e,t)=>{var n=F(),i=r(n);T(i,{title:`Item 1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=m(i,2);T(a,{title:`Item 2`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),T(m(a,2),{title:`Item 3`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var _=m(d,2);M(_,{name:`Multiple Controlled`,asChild:!0,children:(e,t)=>{C(e,{type:`multiple`,get value(){return o(P)},set value(e){u(P,e,!0)},children:(e,t)=>{var n=F(),i=r(n);T(i,{title:`Item 1`,value:`item-1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var a=m(i,2);T(a,{title:`Item 2`,value:`item-2`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),T(m(a,2),{title:`Item 3`,value:`item-3`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="multiple" bind:value={value2}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var v=m(_,2);M(v,{name:`Custom Header`,args:{type:`single`},children:(e,t)=>{var n=F(),i=r(n);T(i,{customHeaderContent:e=>{var t=I();S(r(t),{children:(e,t)=>{h(e,{compact:!0,children:(e,t)=>{D(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),s(e,t)},children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}});var a=m(i,2);T(a,{customHeaderContent:e=>{var t=L();S(r(t),{children:(e,t)=>{h(e,{compact:!0,children:(e,t)=>{D(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),s(e,t)},children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),T(m(a,2),{customHeaderContent:e=>{var t=R();S(r(t),{children:(e,t)=>{h(e,{compact:!0,children:(e,t)=>{D(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),p(),s(e,t)},children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
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
</Accordion>`}}});var y=m(v,2);M(y,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,t)=>{T(e,{title:`Item 1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var b=m(y,2);M(b,{name:`Light Theme`,asChild:!0,children:(e,t)=>{g(e,{type:`light`,children:(e,t)=>{C(e,{type:`single`,children:(e,t)=>{T(e,{title:`Item 1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}});var x=m(b,2);M(x,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{g(e,{type:`dark`,children:(e,t)=>{C(e,{type:`single`,children:(e,t)=>{T(e,{title:`Item 1`,children:(e,t)=>{p(),s(e,f(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),s(e,a),i()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{a(),_(),w(),b(),E(),c(),y(),k=`
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
`,A={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},j={component:C,tags:[`autodocs`],argTypes:A,parameters:{docs:{description:{component:k}}}},{Story:M}=v(j),N=l(`item-2`),P=l(t([`item-2`,`item-3`])),F=d(`<!> <!> <!>`,1),I=d(`<!> Item 1`,1),L=d(`<!> Item 2`,1),R=d(`<!> Item 3`,1),z=d(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`Accordion.stories.svelte`},B=x(O,j),V=[`Default`,`Controlled`,`Multiple`,`MultipleControlled`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],H={...B.Default,tags:[`svelte-csf-v5`]},U={...B.Controlled,tags:[`svelte-csf-v5`]},W={...B.Multiple,tags:[`svelte-csf-v5`]},G={...B.MultipleControlled,tags:[`svelte-csf-v5`]},K={...B.CustomHeader,tags:[`svelte-csf-v5`]},q={...B.Disabled,tags:[`svelte-csf-v5`]},J={...B.LightTheme,tags:[`svelte-csf-v5`]},Y={...B.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{U as Controlled,K as CustomHeader,Y as DarkTheme,H as Default,q as Disabled,J as LightTheme,W as Multiple,G as MultipleControlled,V as __namedExportsOrder,j as default,A as storyAccordionArgTypes};