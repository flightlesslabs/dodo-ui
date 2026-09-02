import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ot as t,Xt as n,Yt as r,ct as i,ft as a,jt as o,on as s,ot as c,p as l,pn as u}from"./iframe-Dx_RV1xH.js";import{i as d,n as f,r as p,t as m}from"./create-runtime-stories-BmbbgM7A.js";import{n as h,t as g}from"./UtilityButton-DzQZVzyL.js";import{n as _,t as v}from"./Theme-zBf_QvP8.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./AccordionItem-N_ZZ7Nhf.js";import{n as T,t as E}from"./Icon-BcN8bgMb.js";function D(e,i){n(i,!0);var l=M(),u=t(l);A(u,{name:`Default`,asChild:!0,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{s();var n=a(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=o(u,2);A(d,{name:`Custom Header`,children:(e,n)=>{y(e,{type:`single`,children:(e,n)=>{w(e,{customHeaderContent:e=>{var n=j(),r=t(n);C(r,{children:(e,t)=>{g(e,{compact:!0,children:(e,t)=>{E(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(),c(e,n)},children:(e,t)=>{s();var n=a(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);c(e,n)},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
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
</AccordionItem>`}}});var f=o(d,2);A(f,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{s();var n=a(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}});var p=o(f,2);A(p,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{s();var n=a(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),c(e,l),r()}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{u(),d(),_(),h(),S(),x(),b(),T(),l(),f(),O={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:``}}}},{Story:A}=p(k),j=i(`<!> Item 2`,1),M=i(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`AccordionItem.stories.svelte`},N=m(D,k),P=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.CustomHeader,tags:[`svelte-csf-v5`]},L={...N.LightTheme,tags:[`svelte-csf-v5`]},R={...N.DarkTheme,tags:[`svelte-csf-v5`]}})))()}z();export{I as CustomHeader,R as DarkTheme,F as Default,L as LightTheme,P as __namedExportsOrder,k as default,O as storyAccordionItemArgTypes};