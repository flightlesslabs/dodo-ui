import{p as z,f as B,a as N,n as u,g as h,K as c,s as P,b as i,c as w,t as f,e as D,h as _}from"./iframe-CKreDJ-W.js";import{c as S,d as T}from"./create-runtime-stories-B1M39i5I.js";import{i as q}from"./lifecycle-BoaImdaE.js";import{C}from"./CalendarDateChip-W3FoerYn.js";import{storyCalendarDateChipArgTypes as A}from"./CalendarDateChip.stories-DUHu_DmQ.js";import"./Popper-Cy66yvXS.js";import{g as e}from"./getMoment-cKxXKUl7.js";import{B as E}from"./Button-DdHK-vP0.js";import"./MenuItem-GU6-85ko.js";import"./this-CSoCAvVz.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./attributes-BXh4mxt6.js";import"./style-kG9rw49h.js";import"./Paper-UXqeixB3.js";const K={component:C,tags:["autodocs"],argTypes:A,parameters:{docs:{description:{component:""}}}},{Story:$}=T();var R=B("<!> <!>",1);function g(v,y){z(y,!1),q();var m=R(),d=N(m);$(d,{name:"customCalendarDateChipContent",asChild:!0,children:(a,x)=>{{const o=(r,s=u)=>{var t=f();D(p=>_(t,`🗓️${p??""}`),[()=>Number(e(s().date).format("D"))]),i(r,t)};let n=c(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));C(a,{get dayOfMonth(){return h(n)},customCalendarDateChipContent:o,$$slots:{customCalendarDateChipContent:!0}})}},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarDateChip
  dayOfMonth={{
    id: '1',
    date: getMoment().toDate(),
    isCurrentMonth: true,
  }}
>
  {#snippet customCalendarDateChipContent(dayOfMonth)}
    🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
  {/snippet}
</CalendarDateChip>`}}});var O=P(d,2);$(O,{name:"customCalendarDateChip",asChild:!0,children:(a,x)=>{{const o=(r,s=u)=>{E(r,{size:"small",variant:"text",outline:!0,children:(t,p)=>{var l=f();D(b=>_(l,b),[()=>Number(e(s().date).format("D"))]),i(t,l)},$$slots:{default:!0}})};let n=c(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));C(a,{get dayOfMonth(){return h(n)},customCalendarDateChip:o,$$slots:{customCalendarDateChip:!0}})}},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Chip"}},__svelteCsf:{rawCode:`<CalendarDateChip
  dayOfMonth={{
    id: '1',
    date: getMoment().toDate(),
    isCurrentMonth: true,
  }}
>
  {#snippet customCalendarDateChip(dayOfMonth)}
    <Button size="small" variant="text" outline>
      {Number(getMoment(dayOfMonth.date).format('D'))}
    </Button>
  {/snippet}
</CalendarDateChip>`}}}),i(v,m),w()}g.__docgen={data:[],name:"Customize.stories.svelte"};const M=S(g,K),et=["CustomCalendarDateChipContent","CustomCalendarDateChip"],at={...M.CustomCalendarDateChipContent,tags:["svelte-csf-v5"]},ot={...M.CustomCalendarDateChip,tags:["svelte-csf-v5"]};export{ot as CustomCalendarDateChip,at as CustomCalendarDateChipContent,et as __namedExportsOrder,K as default};
