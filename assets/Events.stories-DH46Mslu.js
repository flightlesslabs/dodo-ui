import{p as c,g as p,F as d,c as m}from"./iframe-BT8UJLEl.js";import{c as u,d as f}from"./create-runtime-stories-CGUspsbm.js";import{i as g}from"./lifecycle-GBqxdjWe.js";import{C as t}from"./CalendarYearChip-CRgNJ7rB.js";import{storyCalendarYearChipArgTypes as C}from"./CalendarYearChip.stories-CaAxQNi3.js";import{g as Y}from"./getMoment-C62wFe4H.js";import"./this-BoRifFsJ.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./roundness-fyqvrcF6.js";const _={component:t,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:v}=f();function a(r,o){c(o,!1),g(),v(r,{name:"Select",asChild:!0,children:(s,h)=>{const n=d(()=>Y(void 0,void 0,{utc:!0}).format("YYYY"));t(s,{get value(){return p(n)},onselect:(e,l)=>{const i=l.target;alert(`CalendarYearChip Select, ${e}`),console.log("CalendarYearChip Select",e,i)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarYearChip
  value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}
  onselect={(value, e) => {
    const target = e.target as HTMLButtonElement;
    alert(\`CalendarYearChip Select, \${value}\`);
    console.log('CalendarYearChip Select', value, target);
  }}
/>`}}}),m()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=u(a,_),F=["Select"],H={...S.Select,tags:["svelte-csf-v5"]};export{H as Select,F as __namedExportsOrder,_ as default};
