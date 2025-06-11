import{f as C,a,t as y,s as i}from"./props-DJ7OM77H.js";import{p as b,f as h,n as m,s as g,a as x,t as d,c as w}from"./runtime-hUo-UAYR.js";import{i as z}from"./lifecycle-hDYW8BV7.js";import{c as P,d as S}from"./create-runtime-stories-DR9We0Hg.js";import{C as r}from"./CalendarWeek-XH47KLpu.js";import{storyCalendarWeekArgTypes as T}from"./CalendarWeek.stories-CRWPZkqu.js";import"./index-CfOrKyLd.js";import"./each-Cwa_N87x.js";import"./class-0ksSn-pd.js";import"./this-sl_nENle.js";import"./types-zowg9ItS.js";import"./size-C-8mwSpB.js";const A={component:r,tags:["autodocs"],argTypes:T,parameters:{docs:{description:{component:""}}}},{Story:p}=S();var E=C('<li style="color: blue; display: block;"> </li>'),M=C("<!> <!>",1);function c(k,f){b(f,!1),z();var n=M(),l=h(n);p(l,{name:"customCalendarWeekContent",asChild:!0,children:(t,_)=>{r(t,{customCalendarWeekContent:(o,s=m)=>{var e=y();d(()=>i(e,`☀️${s().abr1??""}`)),a(o,e)},$$slots:{customCalendarWeekContent:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeekContent(option)}
    ☀️{option.abr1}
  {/snippet}
</CalendarWeek>`}}});var W=g(l,2);p(W,{name:"customCalendarWeek",asChild:!0,children:(t,_)=>{r(t,{customCalendarWeek:(o,s=m)=>{var e=E(),$=w(e);d(()=>i($,s().abr3)),a(o,e)},$$slots:{customCalendarWeek:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Week"}},__svelteCsf:{rawCode:`<CalendarWeek>
  {#snippet customCalendarWeek(option)}
    <li style="color: blue; display: block;">
      {option.abr3}
    </li>
  {/snippet}
</CalendarWeek>`}}}),a(k,n),x()}c.__docgen={version:3,name:"Customize.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const u=P(c,A),L=["CustomCalendarWeekContent","CustomCalendarWeek"],N={...u.CustomCalendarWeekContent,tags:["svelte-csf-v5"]},Q={...u.CustomCalendarWeek,tags:["svelte-csf-v5"]};export{Q as CustomCalendarWeek,N as CustomCalendarWeekContent,L as __namedExportsOrder,A as default};
