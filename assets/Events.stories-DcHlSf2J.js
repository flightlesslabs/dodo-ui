import{p as d,g as m,C,c as f}from"./iframe-CHeN87Yr.js";import{c as g,d as u}from"./create-runtime-stories-DDBEBZh5.js";import{i as h}from"./lifecycle-UF4EEaqb.js";import{C as t}from"./CalendarDateChip-CO_mQLF7.js";import{storyCalendarDateChipArgTypes as M}from"./CalendarDateChip.stories-D69u0Piu.js";import{g as e}from"./getMoment-CTPhDl79.js";import"./this-CWuz2fwQ.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";const _={component:t,tags:["autodocs"],argTypes:M,parameters:{docs:{description:{component:""}}}},{Story:D}=u();function a(o,r){d(r,!1),h(),D(o,{name:"Select",asChild:!0,children:(n,v)=>{const s=C(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));t(n,{get dayOfMonth(){return m(s)},onselect:(l,i,c)=>{const p=c.target;alert(`CalendarDateChip Select, ${e(l).format("DD-MM-YYYY")}`),console.log("CalendarDateChip Select",i,p)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarDateChip
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
/>`}}}),f()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=g(a,_),B=["Select"],H={...S.Select,tags:["svelte-csf-v5"]};export{H as Select,B as __namedExportsOrder,_ as default};
