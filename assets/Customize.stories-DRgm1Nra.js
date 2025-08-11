import{p as b,f as p,a as y,n as d,s as h,b as s,c as g,t as x,e as i,h as C,i as w}from"./iframe-B_h0ZugA.js";import{c as z,d as P}from"./create-runtime-stories-CuUPjFLX.js";import{i as S}from"./lifecycle-Dv2MLzXX.js";import{C as n}from"./CalendarWeek-B-51MGcM.js";import{storyCalendarWeekArgTypes as T}from"./CalendarWeek.stories-DkB15Kkp.js";import"./preload-helper-D9Z9MdNV.js";import"./each-Bz-EbiWA.js";import"./this-bRGdYwyX.js";import"./types-zowg9ItS.js";import"./size-C-8mwSpB.js";const A={component:n,tags:["autodocs"],argTypes:T,parameters:{docs:{description:{component:""}}}},{Story:m}=P();var E=p('<li style="color: blue; display: block;"> </li>'),M=p("<!> <!>",1);function c(k,W){b(W,!1),S();var r=M(),l=y(r);m(l,{name:"customCalendarWeekContent",asChild:!0,children:(t,f)=>{n(t,{customCalendarWeekContent:(o,a=d)=>{var e=x();i(()=>C(e,`☀️${a().abr1??""}`)),s(o,e)},$$slots:{customCalendarWeekContent:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeekContent(option)}
    ☀️{option.abr1}
  {/snippet}
</CalendarWeek>`}}});var _=h(l,2);m(_,{name:"customCalendarWeek",asChild:!0,children:(t,f)=>{n(t,{customCalendarWeek:(o,a=d)=>{var e=E(),v=w(e);i(()=>C(v,a().abr3)),s(o,e)},$$slots:{customCalendarWeek:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Week"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeek(option)}
    <li style="color: blue; display: block;">
      {option.abr3}
    </li>
  {/snippet}
</CalendarWeek>`}}}),s(k,r),g()}c.__docgen={data:[],name:"Customize.stories.svelte"};const u=z(c,A),J=["CustomCalendarWeekContent","CustomCalendarWeek"],K={...u.CustomCalendarWeekContent,tags:["svelte-csf-v5"]},L={...u.CustomCalendarWeek,tags:["svelte-csf-v5"]};export{L as CustomCalendarWeek,K as CustomCalendarWeekContent,J as __namedExportsOrder,A as default};
