import{p as m,g as p,K as f,c as C}from"./iframe-CwZFwEuH.js";import{c as g,d as u}from"./create-runtime-stories-CWQHB_qB.js";import{i as h}from"./lifecycle-DfwppKqL.js";import{C as t}from"./CalendarDateChip-0rkrUtS4.js";import{storyCalendarDateChipArgTypes as M}from"./CalendarDateChip.stories-D2k99wQZ.js";import{g as e}from"./getMoment-Dn5kiy0e.js";import"./this-Cbo_M9xu.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const _={component:t,tags:["autodocs"],argTypes:M,parameters:{docs:{description:{component:""}}}},{Story:D}=u();function a(o,r){m(r,!1),h(),D(o,{name:"Select",asChild:!0,children:(n,$)=>{{let s=f(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));t(n,{get dayOfMonth(){return p(s)},onselect:(l,i,c)=>{const d=c.target;alert(`CalendarDateChip Select, ${e(l).format("DD-MM-YYYY")}`),console.log("CalendarDateChip Select",i,d)}})}},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarDateChip
  dayOfMonth={{
    id: '1',
    date: getMoment().toDate(),
    isCurrentMonth: true,
  }}
  onselect={(value, dayOfMonth, e) => {
    const target = e.target as HTMLButtonElement;
    alert(\`CalendarDateChip Select, \${getMoment(value).format('DD-MM-YYYY')}\`);
    console.log('CalendarDateChip Select', dayOfMonth, target);
  }}
/>`}}}),C()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=g(a,_),B=["Select"],H={...S.Select,tags:["svelte-csf-v5"]};export{H as Select,B as __namedExportsOrder,_ as default};
