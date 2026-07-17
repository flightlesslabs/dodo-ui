import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,St as n,Wt as r,dn as i,et as a,f as o,nt as s,ot as c,tn as l,wt as u}from"./iframe-Boim5DH3.js";import{$ as d,T as f,gt as p,ht as m,n as h,r as g,t as _}from"./create-runtime-stories-D_3FAyMc.js";import{E as v,O as y,t as b,w as x}from"./dist-jYHt1L2h.js";import{n as S,t as C}from"./Icon-kAzk7ZmU.js";function w(e,i){t(i,!0);var o=k(),s=n(o);D(s,{name:`Default`,asChild:!0,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{x(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var p=u(s,2);D(p,{name:`Custom Header`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{x(e,{customHeaderContent:e=>{var t=O();v(n(t),{children:(e,t)=>{d(e,{compact:!0,children:(e,t)=>{C(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(),a(e,t)},children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
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
</AccordionItem>`}}});var m=u(p,2);D(m,{name:`Light Theme`,asChild:!0,children:(e,t)=>{f(e,{type:`light`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{x(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}});var h=u(m,2);D(h,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{f(e,{type:`dark`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{x(e,{title:`Item 1`,children:(e,t)=>{l(),a(e,c(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),a(e,o),r()}var T,E,D,O,k,A,j,M,N,P,F;e((()=>{i(),p(),g(),b(),S(),o(),h(),T={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},E={component:x,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:``}}}},{Story:D}=m(E),O=s(`<!> Item 2`,1),k=s(`<!> <!> <!> <!>`,1),w.__docgen={data:[],name:`AccordionItem.stories.svelte`},A=_(w,E),j=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],M={...A.Default,tags:[`svelte-csf-v5`]},N={...A.CustomHeader,tags:[`svelte-csf-v5`]},P={...A.LightTheme,tags:[`svelte-csf-v5`]},F={...A.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as CustomHeader,F as DarkTheme,M as Default,P as LightTheme,j as __namedExportsOrder,E as default,T as storyAccordionItemArgTypes};