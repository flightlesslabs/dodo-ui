import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-RE4W-S_v.js";import{C as d,K as f,S as p,g as m,n as h,q as g,r as _,t as v,z as y}from"./create-runtime-stories-YqVOZxbN.js";import{h as b,m as x,p as S,t as C}from"./dist-DfjzhqNI.js";function w(e,t){l(t,!0);var n=k(),o=s(n);D(o,{name:`Default`,asChild:!0,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=i(o,2);D(d,{name:`Custom Header`,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{customHeaderContent:e=>{var t=O();x(s(t),{children:(e,t)=>{y(e,{compact:!0,children:(e,t)=>{p(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),c(),u(e,t)},children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
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
</AccordionItem>`}}});var f=i(d,2);D(f,{name:`Light Theme`,asChild:!0,children:(e,t)=>{m(e,{type:`light`,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),D(i(f,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{m(e,{type:`dark`,children:(e,t)=>{b(e,{type:`single`,children:(e,t)=>{S(e,{title:`Item 1`,children:(e,t)=>{c(),u(e,r(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),u(e,n),a()}var T,E,D,O,k,A,j,M,N,P,F;e((()=>{t(),g(),_(),C(),d(),o(),h(),T={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},E={component:S,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:``}}}},{Story:D}=f(E),O=n(`<!> Item 2`,1),k=n(`<!> <!> <!> <!>`,1),w.__docgen={data:[],name:`AccordionItem.stories.svelte`},A=v(w,E),j=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],M={...A.Default,tags:[`svelte-csf-v5`]},N={...A.CustomHeader,tags:[`svelte-csf-v5`]},P={...A.LightTheme,tags:[`svelte-csf-v5`]},F={...A.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as CustomHeader,F as DarkTheme,M as Default,P as LightTheme,j as __namedExportsOrder,E as default,T as storyAccordionItemArgTypes};