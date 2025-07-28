import{p as c,g as d,H as p,c as m}from"./iframe-DpdNrh4j.js";import{c as u,d as f}from"./create-runtime-stories-D0NGXSfE.js";import{i as g}from"./lifecycle-C7N4YKsQ.js";import{C as t}from"./CalendarYearChip-Ct6Nz1uF.js";import{storyCalendarYearChipArgTypes as C}from"./CalendarYearChip.stories-Dsy4KGaE.js";import{g as Y}from"./getMoment-DQPCA-4b.js";import"./this-B3JHmcvJ.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./roundness-fyqvrcF6.js";const _={component:t,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:v}=f();function a(r,o){c(o,!1),g(),v(r,{name:"Select",asChild:!0,children:(s,h)=>{{let n=p(()=>Y(void 0,void 0,{utc:!0}).format("YYYY"));t(s,{get value(){return d(n)},onselect:(e,l)=>{const i=l.target;alert(`CalendarYearChip Select, ${e}`),console.log("CalendarYearChip Select",e,i)}})}},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarYearChip
  value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}
  onselect={(value, e) => {
    const target = e.target as HTMLButtonElement;
    alert(\`CalendarYearChip Select, \${value}\`);
    console.log('CalendarYearChip Select', value, target);
  }}
/>`}}}),m()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=u(a,_),B=["Select"],L={...S.Select,tags:["svelte-csf-v5"]};export{L as Select,B as __namedExportsOrder,_ as default};
