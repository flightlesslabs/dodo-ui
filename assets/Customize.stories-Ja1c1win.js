import{p as z,f as B,a as N,n as u,g as h,C as e,s as P,b as i,c as w,t as c,e as f,h as D}from"./iframe-CHeN87Yr.js";import{c as S,d as T}from"./create-runtime-stories-DDBEBZh5.js";import{i as q}from"./lifecycle-UF4EEaqb.js";import{C}from"./CalendarDateChip-CO_mQLF7.js";import{storyCalendarDateChipArgTypes as A}from"./CalendarDateChip.stories-D69u0Piu.js";import"./Popper-BGmQcml-.js";import{g as a}from"./getMoment-CTPhDl79.js";import{B as E}from"./Button-BQlT9vZw.js";import"./MenuItem-Nj2Bqy9X.js";import"./this-CWuz2fwQ.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./attributes-tQAbu21o.js";import"./style-mYo1V7jF.js";import"./Paper--xd6b0Yr.js";const R={component:C,tags:["autodocs"],argTypes:A,parameters:{docs:{description:{component:""}}}},{Story:_}=T();var j=B("<!> <!>",1);function $(M,v){z(v,!1),q();var m=j(),d=N(m);_(d,{name:"customCalendarDateChipContent",asChild:!0,children:(o,x)=>{const n=e(()=>({id:"1",date:a().toDate(),isCurrentMonth:!0}));C(o,{get dayOfMonth(){return h(n)},customCalendarDateChipContent:(s,r=u)=>{var t=c();f(p=>D(t,`🗓️${p??""}`),[()=>Number(a(r().date).format("D"))],e),i(s,t)},$$slots:{customCalendarDateChipContent:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarDateChip
  dayOfMonth={{
    id: '1',
    date: getMoment().toDate(),
    isCurrentMonth: true,
  }}
>
  {#snippet customCalendarDateChipContent(dayOfMonth)}
    🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
  {/snippet}
</CalendarDateChip>`}}});var y=P(d,2);_(y,{name:"customCalendarDateChip",asChild:!0,children:(o,x)=>{const n=e(()=>({id:"1",date:a().toDate(),isCurrentMonth:!0}));C(o,{get dayOfMonth(){return h(n)},customCalendarDateChip:(s,r=u)=>{E(s,{size:"small",variant:"text",outline:!0,children:(t,p)=>{var l=c();f(b=>D(l,b),[()=>Number(a(r().date).format("D"))],e),i(t,l)},$$slots:{default:!0}})},$$slots:{customCalendarDateChip:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Chip"}},__svelteCsf:{rawCode:`<CalendarDateChip
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
</CalendarDateChip>`}}}),i(M,m),w()}$.__docgen={data:[],name:"Customize.stories.svelte"};const g=S($,R),et=["CustomCalendarDateChipContent","CustomCalendarDateChip"],at={...g.CustomCalendarDateChipContent,tags:["svelte-csf-v5"]},ot={...g.CustomCalendarDateChip,tags:["svelte-csf-v5"]};export{ot as CustomCalendarDateChip,at as CustomCalendarDateChipContent,et as __namedExportsOrder,R as default};
