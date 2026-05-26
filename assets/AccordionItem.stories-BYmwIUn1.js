import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ht as n,St as r,Ut as i,et as a,f as o,ln as s,nt as c,ot as l,wt as u}from"./iframe-CP3e54cT.js";import{L as d,R as f,T as p,ht as m,mt as h,n as g,r as _,t as v,tt as y}from"./create-runtime-stories-K5EB4XPM.js";import{E as b,O as x,t as S,w as C}from"./dist-CwVdvW70.js";function w(e,o){i(o,!0);var s=k(),c=r(s);D(c,{name:`Default`,asChild:!0,children:(e,n)=>{x(e,{type:`single`,children:(e,n)=>{C(e,{title:`Item 1`,children:(e,n)=>{t(),a(e,l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var f=u(c,2);D(f,{name:`Custom Header`,children:(e,n)=>{x(e,{type:`single`,children:(e,n)=>{C(e,{customHeaderContent:e=>{var n=O();b(r(n),{children:(e,t)=>{y(e,{compact:!0,children:(e,t)=>{d(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),t(),a(e,n)},children:(e,n)=>{t(),a(e,l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
  <Accordion type="single">
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
</Accordion>
</AccordionItem>`}}});var m=u(f,2);D(m,{name:`Light Theme`,asChild:!0,children:(e,n)=>{p(e,{type:`light`,children:(e,n)=>{x(e,{type:`single`,children:(e,n)=>{C(e,{title:`Item 1`,children:(e,n)=>{t(),a(e,l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),D(u(m,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,n)=>{p(e,{type:`dark`,children:(e,n)=>{x(e,{type:`single`,children:(e,n)=>{C(e,{title:`Item 1`,children:(e,n)=>{t(),a(e,l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),a(e,s),n()}var T,E,D,O,k,A,j,M,N,P,F;e((()=>{s(),m(),_(),S(),f(),o(),g(),T={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},E={component:C,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:``}}}},{Story:D}=h(E),O=c(`<!> Item 2`,1),k=c(`<!> <!> <!> <!>`,1),w.__docgen={data:[],name:`AccordionItem.stories.svelte`},A=v(w,E),j=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],M={...A.Default,tags:[`svelte-csf-v5`]},N={...A.CustomHeader,tags:[`svelte-csf-v5`]},P={...A.LightTheme,tags:[`svelte-csf-v5`]},F={...A.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as CustomHeader,F as DarkTheme,M as Default,P as LightTheme,j as __namedExportsOrder,E as default,T as storyAccordionItemArgTypes};