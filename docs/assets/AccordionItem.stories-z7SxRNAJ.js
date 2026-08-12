import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ct as t,Gt as n,Kt as r,Tt as i,ln as a,nn as o,p as s,rt as c,st as l,tt as u}from"./iframe-CvWSf_Hq.js";import{i as d,n as f,r as p,t as m}from"./create-runtime-stories-CMZqfqE5.js";import{n as h,t as g}from"./UtilityButton-DYavnrrt.js";import{n as _,t as v}from"./Theme-BPi75P-E.js";import{a as y,i as b,n as x,o as S,r as C,t as w}from"./AccordionItem-BSfqnGiX.js";import{n as T,t as E}from"./Icon-C79uxSh8.js";function D(e,a){r(a,!0);var s=M(),c=t(s);A(c,{name:`Default`,asChild:!0,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{o();var n=l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);u(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Accordion type="single">
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Accordion>`}}});var d=i(c,2);A(d,{name:`Custom Header`,children:(e,n)=>{y(e,{type:`single`,children:(e,n)=>{w(e,{customHeaderContent:e=>{var n=j(),r=t(n);C(r,{children:(e,t)=>{g(e,{compact:!0,children:(e,t)=>{E(e,{icon:`material-symbols:arrow-drop-down-rounded`,width:`24`,height:`24`})},$$slots:{default:!0}})},$$slots:{default:!0}}),o(),u(e,n)},children:(e,t)=>{o();var n=l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);u(e,n)},$$slots:{customHeaderContent:!0,default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<AccordionItem {...args}>
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
</AccordionItem>`}}});var f=i(d,2);A(f,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{o();var n=l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);u(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}});var p=i(f,2);A(p,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{y(e,{type:`single`,children:(e,t)=>{w(e,{title:`Item 1`,children:(e,t)=>{o();var n=l(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`);u(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Theme>`}}}),u(e,s),n()}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{a(),d(),_(),h(),S(),x(),b(),T(),s(),f(),O={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},title:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},customHeaderContent:{table:{category:`API`,subcategory:`Slots`}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:``}}}},{Story:A}=p(k),j=c(`<!> Item 2`,1),M=c(`<!> <!> <!> <!>`,1),D.__docgen={data:[],name:`AccordionItem.stories.svelte`},N=m(D,k),P=[`Default`,`CustomHeader`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.CustomHeader,tags:[`svelte-csf-v5`]},L={...N.LightTheme,tags:[`svelte-csf-v5`]},R={...N.DarkTheme,tags:[`svelte-csf-v5`]}})))()}z();export{I as CustomHeader,R as DarkTheme,F as Default,L as LightTheme,P as __namedExportsOrder,k as default,O as storyAccordionItemArgTypes};