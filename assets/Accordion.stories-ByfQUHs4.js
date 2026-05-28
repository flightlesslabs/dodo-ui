import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Et as n,Ht as r,St as i,Ut as a,et as o,f as s,jt as c,kt as l,ln as u,lt as d,nt as f,ot as p,wt as m}from"./iframe-BwoblnGw.js";import{L as h,R as g,T as _,ht as v,mt as y,n as b,r as x,t as S,tt as C}from"./create-runtime-stories-BtvKpReg.js";import{E as w,O as T,t as E,w as D}from"./dist-2qs_8F1R.js";function O(e,n){a(n,!0);var s=U(),c=i(s);M(c,{name:`Default`,args:{type:`single`},children:(e,n)=>{var r=F(),a=i(r);D(a,{title:`Item 1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var s=m(a,2);D(s,{title:`Item 2`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(m(s,2),{title:`Item 3`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var u=m(c,2);M(u,{name:`Controlled`,asChild:!0,children:(e,n)=>{T(e,{type:`single`,get value(){return d(N)},set value(e){l(N,e,!0)},children:(e,n)=>{var r=I(),a=i(r);D(a,{title:`Item 1`,value:`item-1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var s=m(a,2);D(s,{title:`Item 2`,value:`item-2`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(m(s,2),{title:`Item 3`,value:`item-3`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="single" bind:value={value1}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var f=m(u,2);M(f,{name:`Multiple`,args:{type:`multiple`},children:(e,n)=>{var r=L(),a=i(r);D(a,{title:`Item 1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var s=m(a,2);D(s,{title:`Item 2`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(m(s,2),{title:`Item 3`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>

<AccordionItem title="Item 3">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var g=m(f,2);M(g,{name:`Multiple Controlled`,asChild:!0,children:(e,n)=>{T(e,{type:`multiple`,get value(){return d(P)},set value(e){l(P,e,!0)},children:(e,n)=>{var r=R(),a=i(r);D(a,{title:`Item 1`,value:`item-1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}});var s=m(a,2);D(s,{title:`Item 2`,value:`item-2`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),D(m(s,2),{title:`Item 3`,value:`item-3`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion type="multiple" bind:value={value2}>
  <AccordionItem title="Item 1" value="item-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2" value="item-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3" value="item-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var v=m(g,2);M(v,{name:`Custom Header`,args:{type:`single`},children:(e,n)=>{var r=H(),a=i(r);D(a,{customHeaderContent:e=>{var n=z();w(i(n),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),t(),o(e,n)},children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}});var s=m(a,2);D(s,{customHeaderContent:e=>{var n=B();w(i(n),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),t(),o(e,n)},children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),D(m(s,2),{customHeaderContent:e=>{var n=V();w(i(n),{children:(e,t)=>{C(e,{compact:!0,children:(e,t)=>{h(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),t(),o(e,n)},children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
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
</Accordion>`}}});var y=m(v,2);M(y,{name:`Disabled`,args:{type:`single`,disabled:!0},children:(e,n)=>{D(e,{title:`Item 1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Accordion {...args}>
  <AccordionItem title="Item 1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</AccordionItem>
</Accordion>`}}});var b=m(y,2);M(b,{name:`Light Theme`,asChild:!0,children:(e,n)=>{_(e,{type:`light`,children:(e,n)=>{T(e,{type:`single`,children:(e,n)=>{D(e,{title:`Item 1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),M(m(b,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,n)=>{_(e,{type:`dark`,children:(e,n)=>{T(e,{type:`single`,children:(e,n)=>{D(e,{title:`Item 1`,children:(e,n)=>{t(),o(e,p(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),o(e,s),r()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),v(),E(),x(),g(),s(),b(),k=`
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
`,A={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},description:`The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},accordionContentProps:{table:{category:`API`,subcategory:`Appearance`}}},j={component:T,tags:[`autodocs`],argTypes:A,parameters:{docs:{description:{component:k}}}},{Story:M}=y(j),N=c(`item-2`),P=c(n([`item-2`,`item-3`])),F=f(`<!> <!> <!>`,1),I=f(`<!> <!> <!>`,1),L=f(`<!> <!> <!>`,1),R=f(`<!> <!> <!>`,1),z=f(`<!> Item 1`,1),B=f(`<!> Item 2`,1),V=f(`<!> Item 3`,1),H=f(`<!> <!> <!>`,1),U=f(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),O.__docgen={data:[],name:`Accordion.stories.svelte`},W=S(O,j),G=[`Default`,`Controlled`,`Multiple`,`MultipleControlled`,`CustomHeader`,`Disabled`,`LightTheme`,`DarkTheme`],K={...W.Default,tags:[`svelte-csf-v5`]},q={...W.Controlled,tags:[`svelte-csf-v5`]},J={...W.Multiple,tags:[`svelte-csf-v5`]},Y={...W.MultipleControlled,tags:[`svelte-csf-v5`]},X={...W.CustomHeader,tags:[`svelte-csf-v5`]},Z={...W.Disabled,tags:[`svelte-csf-v5`]},Q={...W.LightTheme,tags:[`svelte-csf-v5`]},$={...W.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{q as Controlled,X as CustomHeader,$ as DarkTheme,K as Default,Z as Disabled,Q as LightTheme,J as Multiple,Y as MultipleControlled,G as __namedExportsOrder,j as default,A as storyAccordionArgTypes};