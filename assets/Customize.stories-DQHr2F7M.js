import{p as z,f as B,a as N,n as u,g as h,K as c,s as P,b as i,c as w,t as f,e as D,h as _}from"./iframe-C3hxeNmA.js";import{c as S,d as T}from"./create-runtime-stories-LRBVjFCg.js";import{i as q}from"./lifecycle-9HmpwKdq.js";import{C}from"./CalendarDateChip-CWlipfis.js";import{storyCalendarDateChipArgTypes as A}from"./CalendarDateChip.stories-DTYEFC5W.js";import{g as e}from"./getMoment-CK165NMZ.js";import"./Popper-BqsAU3jH.js";import{B as E}from"./Button-D3n2jUR8.js";import"./MenuItem-DdEdlfko.js";import"./preload-helper-D9Z9MdNV.js";import"./this-B_qwwyck.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./attributes-DFU73Mj4.js";import"./style-EQUeuE57.js";import"./Paper-Cb0UiXvK.js";const K={component:C,tags:["autodocs"],argTypes:A,parameters:{docs:{description:{component:""}}}},{Story:$}=T();var R=B("<!> <!>",1);function g(v,y){z(y,!1),q();var m=R(),d=N(m);$(d,{name:"customCalendarDateChipContent",asChild:!0,children:(a,x)=>{{const o=(r,s=u)=>{var t=f();D(p=>_(t,`🗓️${p??""}`),[()=>Number(e(s().date).format("D"))]),i(r,t)};let n=c(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));C(a,{get dayOfMonth(){return h(n)},customCalendarDateChipContent:o,$$slots:{customCalendarDateChipContent:!0}})}},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarDateChip
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
</CalendarDateChip>`}}}),i(v,m),w()}g.__docgen={data:[],name:"Customize.stories.svelte"};const M=S(g,K),at=["CustomCalendarDateChipContent","CustomCalendarDateChip"],ot={...M.CustomCalendarDateChipContent,tags:["svelte-csf-v5"]},nt={...M.CustomCalendarDateChip,tags:["svelte-csf-v5"]};export{nt as CustomCalendarDateChip,ot as CustomCalendarDateChipContent,at as __namedExportsOrder,K as default};
