import{p as c,g as p,C as d,c as m}from"./iframe-Dp941mr0.js";import{c as u,d as f}from"./create-runtime-stories-BXezm3Za.js";import{i as C}from"./lifecycle-JuoPZCDb.js";import{C as t}from"./CalendarYearChip-nkTHRQ20.js";import{storyCalendarYearChipArgTypes as g}from"./CalendarYearChip.stories-Dj_9LXgL.js";import{g as Y}from"./getMoment-DH1PBheS.js";import"./this-DYHwRBO6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./roundness-fyqvrcF6.js";const _={component:t,tags:["autodocs"],argTypes:g,parameters:{docs:{description:{component:""}}}},{Story:v}=f();function a(r,o){c(o,!1),C(),v(r,{name:"Select",asChild:!0,children:(s,h)=>{const n=d(()=>Y(void 0,void 0,{utc:!0}).format("YYYY"));t(s,{get value(){return p(n)},onselect:(e,l)=>{const i=l.target;alert(`CalendarYearChip Select, ${e}`),console.log("CalendarYearChip Select",e,i)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarYearChip
  value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}
  onselect={(value, e) => {
    const target = e.target as HTMLButtonElement;
    alert(\`CalendarYearChip Select, \${value}\`);
    console.log('CalendarYearChip Select', value, target);
  }}
/>`}}}),m()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=u(a,_),H=["Select"],L={...S.Select,tags:["svelte-csf-v5"]};export{L as Select,H as __namedExportsOrder,_ as default};
