import{p as c,g as p,K as d,c as m}from"./iframe-CCEZUMhS.js";import{c as u,d as f}from"./create-runtime-stories-CSTpu6Dk.js";import{i as g}from"./lifecycle-DkDP_kOY.js";import{C as t}from"./CalendarYearChip-C8Q0nhhz.js";import{storyCalendarYearChipArgTypes as C}from"./CalendarYearChip.stories-W0e6ONlN.js";import{g as Y}from"./getMoment-nKS0EjjE.js";import"./preload-helper-D9Z9MdNV.js";import"./this-C9Nk6BSb.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./roundness-fyqvrcF6.js";const _={component:t,tags:["autodocs"],argTypes:C,parameters:{docs:{description:{component:""}}}},{Story:v}=f();function a(r,o){c(o,!1),g(),v(r,{name:"Select",asChild:!0,children:(s,h)=>{{let n=d(()=>Y(void 0,void 0,{utc:!0}).format("YYYY"));t(s,{get value(){return p(n)},onselect:(e,l)=>{const i=l.target;alert(`CalendarYearChip Select, ${e}`),console.log("CalendarYearChip Select",e,i)}})}},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarYearChip
  value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}
  onselect={(value, e) => {
    const target = e.target as HTMLButtonElement;
    alert(\`CalendarYearChip Select, \${value}\`);
    console.log('CalendarYearChip Select', value, target);
  }}
/>`}}}),m()}a.__docgen={data:[],name:"Events.stories.svelte"};const S=u(a,_),K=["Select"],L={...S.Select,tags:["svelte-csf-v5"]};export{L as Select,K as __namedExportsOrder,_ as default};
