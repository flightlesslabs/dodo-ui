import{p as m,g as p,H as f,c as C}from"./iframe-Dm2oeldt.js";import{c as g,d as u}from"./create-runtime-stories-DwmOa5kD.js";import{i as h}from"./lifecycle-CgTGwIUP.js";import{C as t}from"./CalendarDateChip-B0S_tDGF.js";import{storyCalendarDateChipArgTypes as M}from"./CalendarDateChip.stories-B3nqUjr7.js";import{g as e}from"./getMoment-DtA9pdSi.js";import"./this-5OZYxuTc.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const _={component:t,tags:["autodocs"],argTypes:M,parameters:{docs:{description:{component:""}}}},{Story:D}=u();function a(o,r){m(r,!1),h(),D(o,{name:"Select",asChild:!0,children:(n,$)=>{{let s=f(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));t(n,{get dayOfMonth(){return p(s)},onselect:(l,i,c)=>{const d=c.target;alert(`CalendarDateChip Select, ${e(l).format("DD-MM-YYYY")}`),console.log("CalendarDateChip Select",i,d)}})}},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarDateChip
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
/>`}}}),C()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=g(a,_),A=["Select"],B={...S.Select,tags:["svelte-csf-v5"]};export{B as Select,A as __namedExportsOrder,_ as default};
