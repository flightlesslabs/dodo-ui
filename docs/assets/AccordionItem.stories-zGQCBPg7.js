import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as n,Wt as r,dn as i,et as a,f as o,nt as s,ot as c,tn as l,wt as u}from"./iframe-CApopm_P.js";import{L as d,R as f,T as p,_t as m,n as h,r as g,t as _,tt as v,vt as y}from"./create-runtime-stories-BluKH7db.js";import{E as b,O as x,t as S,w as C}from"./dist-1glt4kwT.js";function w(e,i){n(i,!0);var o=k(),s=u(o);D(s,{name:`Default`,asChild:!0,children:(e,t)=>{x(e,{type:`single`,children:(e,t)=>{C(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var f=t(s,2);D(f,{name:`Custom Header`,children:(e,t)=>{x(e,{type:`single`,children:(e,t)=>{C(e,{customHeaderContent:e=>{var t=O();b(u(t),{children:(e,t)=>{v(e,{compact:!0,children:(e,t)=>{d(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(),a(e,t)},children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
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
</AccordionItem>`}}});var m=t(f,2);D(m,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{x(e,{type:`single`,children:(e,t)=>{C(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),D(t(m,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{x(e,{type:`single`,children:(e,t)=>{C(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),a(e,o),r()}var T,E,D,O,k,A,j,M,N,P,F;e((()=>{i(),y(),g(),S(),f(),o(),h(),T={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},E={component:C,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:``}}}},{Story:D}=m(E),O=s(`<!> Item 2`,1),k=s(`<!> <!> <!> <!>`,1),w.__docgen={data:[],name:`AccordionItem.stories.svelte`},A=_(w,E),j=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],M={...A.Default,tags:[`svelte-csf-v5`]},N={...A.CustomHeader,tags:[`svelte-csf-v5`]},P={...A.LightTheme,tags:[`svelte-csf-v5`]},F={...A.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as CustomHeader,F as DarkTheme,M as Default,P as LightTheme,j as __namedExportsOrder,E as default,T as storyAccordionItemArgTypes};