import{f as z,a as i,t as u,s as h}from"./props-DJ7OM77H.js";import{p as B,f as N,n as c,g as f,y as e,s as w,a as P,t as D}from"./runtime-hUo-UAYR.js";import{i as S}from"./lifecycle-hDYW8BV7.js";import{c as T,d as k}from"./create-runtime-stories-DR9We0Hg.js";import{C as m}from"./CalendarDateChip-BOmPxAwj.js";import{storyCalendarDateChipArgTypes as q}from"./CalendarDateChip.stories-n8lN9Ijz.js";import"./Popper-D9gFU6tp.js";import{g as a}from"./getMoment-BCpL1FFt.js";import{B as A}from"./Button-DHh_NJ62.js";import"./MenuItem-B43bEgLI.js";import"./index-CfOrKyLd.js";import"./class-0ksSn-pd.js";import"./this-sl_nENle.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./attributes-CeVSYgml.js";import"./style-Dl272AsC.js";import"./Paper-BW8240Nx.js";const E={component:m,tags:["autodocs"],argTypes:q,parameters:{docs:{description:{component:""}}}},{Story:_}=k();var R=z("<!> <!>",1);function $(v,M){B(M,!1),S();var p=R(),d=N(p);_(d,{name:"customCalendarDateChipContent",asChild:!0,children:(o,x)=>{const n=e(()=>({id:"1",date:a().toDate(),isCurrentMonth:!0}));m(o,{get dayOfMonth(){return f(n)},customCalendarDateChipContent:(s,r=c)=>{var t=u();D(C=>h(t,`🗓️${C??""}`),[()=>Number(a(r().date).format("D"))],e),i(s,t)},$$slots:{customCalendarDateChipContent:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Content"}},__svelteCsf:{rawCode:`<CalendarDateChip
  dayOfMonth={{
    id: '1',
    date: getMoment().toDate(),
    isCurrentMonth: true,
  }}
>
  {#snippet customCalendarDateChipContent(dayOfMonth)}
    🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
  {/snippet}
</CalendarDateChip>`}}});var y=w(d,2);_(y,{name:"customCalendarDateChip",asChild:!0,children:(o,x)=>{const n=e(()=>({id:"1",date:a().toDate(),isCurrentMonth:!0}));m(o,{get dayOfMonth(){return f(n)},customCalendarDateChip:(s,r=c)=>{A(s,{size:"small",variant:"text",outline:!0,children:(t,C)=>{var l=u();D(b=>h(l,b),[()=>Number(a(r().date).format("D"))],e),i(t,l)},$$slots:{default:!0}})},$$slots:{customCalendarDateChip:!0}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Custom Chip"}},__svelteCsf:{rawCode:`<CalendarDateChip
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
</CalendarDateChip>`}}}),i(v,p),P()}$.__docgen={version:3,name:"Customize.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const g=T($,E),st=["CustomCalendarDateChipContent","CustomCalendarDateChip"],rt={...g.CustomCalendarDateChipContent,tags:["svelte-csf-v5"]},it={...g.CustomCalendarDateChip,tags:["svelte-csf-v5"]};export{it as CustomCalendarDateChip,rt as CustomCalendarDateChipContent,st as __namedExportsOrder,E as default};
