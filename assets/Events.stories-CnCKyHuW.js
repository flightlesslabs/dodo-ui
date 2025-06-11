import"./props-DJ7OM77H.js";import{p as d,g as c,y as f,a as C}from"./runtime-hUo-UAYR.js";import{i as g}from"./lifecycle-hDYW8BV7.js";import{c as u,d as h}from"./create-runtime-stories-DR9We0Hg.js";import{C as t}from"./CalendarDateChip-BOmPxAwj.js";import{storyCalendarDateChipArgTypes as M}from"./CalendarDateChip.stories-n8lN9Ijz.js";import{g as e}from"./getMoment-BCpL1FFt.js";import"./index-CfOrKyLd.js";import"./class-0ksSn-pd.js";import"./this-sl_nENle.js";import"./roundness-fyqvrcF6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./_commonjsHelpers-CqkleIqs.js";const D={component:t,tags:["autodocs"],argTypes:M,parameters:{docs:{description:{component:""}}}},{Story:_}=h();function o(a,r){d(r,!1),g(),_(a,{name:"Select",asChild:!0,children:(s,y)=>{const n=f(()=>({id:"1",date:e().toDate(),isCurrentMonth:!0}));t(s,{get dayOfMonth(){return c(n)},onselect:(i,l,p)=>{const m=p.target;alert(`CalendarDateChip Select, ${e(i).format("DD-MM-YYYY")}`),console.log("CalendarDateChip Select",l,m)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarDateChip
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
/>`}}}),C()}o.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const v=u(o,D),P=["Select"],R={...v.Select,tags:["svelte-csf-v5"]};export{R as Select,P as __namedExportsOrder,D as default};
