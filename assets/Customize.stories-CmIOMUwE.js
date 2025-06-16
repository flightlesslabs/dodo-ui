import{p as b,f as p,a as y,n as d,s as h,b as s,c as g,t as x,e as C,h as i,i as w}from"./iframe-CfBVIw1X.js";import{c as z,d as P}from"./create-runtime-stories-Dw7ELUXC.js";import{i as S}from"./lifecycle-DjHDWpYg.js";import{C as n}from"./CalendarWeek-BQ4Z0zKr.js";import{storyCalendarWeekArgTypes as T}from"./CalendarWeek.stories-BYefS1mo.js";import"./each-DCAPy37e.js";import"./this-ZRJxfvwF.js";import"./types-zowg9ItS.js";import"./size-C-8mwSpB.js";const A={component:n,tags:["autodocs"],argTypes:T,parameters:{docs:{description:{component:""}}}},{Story:m}=P();var E=p('<li style="color: blue; display: block;"> </li>'),M=p("<!> <!>",1);function c(k,W){b(W,!1),S();var r=M(),l=y(r);m(l,{name:"customCalendarWeekContent",asChild:!0,children:(t,f)=>{n(t,{customCalendarWeekContent:(a,o=d)=>{var e=x();C(()=>i(e,`☀️${o().abr1??""}`)),s(a,e)},$$slots:{customCalendarWeekContent:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeekContent(option)}
    ☀️{option.abr1}
  {/snippet}
</CalendarWeek>`}}});var _=h(l,2);m(_,{name:"customCalendarWeek",asChild:!0,children:(t,f)=>{n(t,{customCalendarWeek:(a,o=d)=>{var e=E(),v=w(e);C(()=>i(v,o().abr3)),s(a,e)},$$slots:{customCalendarWeek:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Week"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeek(option)}
    <li style="color: blue; display: block;">
      {option.abr3}
    </li>
  {/snippet}
</CalendarWeek>`}}}),s(k,r),g()}c.__docgen={data:[],name:"Customize.stories.svelte"};const u=z(c,A),I=["CustomCalendarWeekContent","CustomCalendarWeek"],J={...u.CustomCalendarWeekContent,tags:["svelte-csf-v5"]},K={...u.CustomCalendarWeek,tags:["svelte-csf-v5"]};export{K as CustomCalendarWeek,J as CustomCalendarWeekContent,I as __namedExportsOrder,A as default};
