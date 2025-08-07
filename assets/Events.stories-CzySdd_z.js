import{p,g as d,K as f,c as C}from"./iframe-C3hxeNmA.js";import{c as g,d as u}from"./create-runtime-stories-LRBVjFCg.js";import{i as h}from"./lifecycle-9HmpwKdq.js";import{C as t}from"./CalendarDateChip-CWlipfis.js";import{storyCalendarDateChipArgTypes as M}from"./CalendarDateChip.stories-DTYEFC5W.js";import{g as e}from"./getMoment-CK165NMZ.js";import"./preload-helper-D9Z9MdNV.js";import"./this-B_qwwyck.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const _={component:t,tags:["autodocs"],argTypes:M,parameters:{docs:{description:{component:""}}}},{Story:D}=u();function a(o,r){p(r,!1),h(),D(o,{name:"Select",asChild:!0,children:(n,$)=>{{let s=f(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));t(n,{get dayOfMonth(){return d(s)},onselect:(l,i,c)=>{const m=c.target;alert(`CalendarDateChip Select, ${e(l).format("DD-MM-YYYY")}`),console.log("CalendarDateChip Select",i,m)}})}},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarDateChip
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
/>`}}}),C()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=g(a,_),H=["Select"],K={...S.Select,tags:["svelte-csf-v5"]};export{K as Select,H as __namedExportsOrder,_ as default};
