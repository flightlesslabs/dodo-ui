import{p as N,f,a as $,s as h,b as s,c as _,t as x}from"./iframe-Dp941mr0.js";import{c as P,d as b}from"./create-runtime-stories-BXezm3Za.js";import{i as w}from"./lifecycle-JuoPZCDb.js";import{C as o}from"./CalendarNavigation-BMxsTPSF.js";import{storyCalendarNavigationArgTypes as y}from"./CalendarNavigation.stories-BRf0k6XS.js";import"./Popper-BdTl_VMh.js";import"./getMoment-DH1PBheS.js";import{B}from"./Button--LXaFNXf.js";import"./MenuItem-BgL_tvet.js";import{I as r}from"./Icon-DKssd8lg.js";import"./this-DYHwRBO6.js";import"./colors-C3b1rS-d.js";import"./size-C-8mwSpB.js";import"./attributes-DJZjS-wL.js";import"./style-tIhPzccR.js";import"./Paper-VCO_qGbf.js";const I={component:o,tags:["autodocs"],argTypes:y,parameters:{docs:{description:{component:""}}}},{Story:l}=b();var z=f("<!> <!>",1);function m(d,c){N(c,!1),w();var n=z(),e=$(n);l(e,{name:"customCalendarNavigationContent",asChild:!0,children:(a,u)=>{o(a,{customCalendarNavigationPrevContent:t=>{r(t,{icon:"carbon:previous-filled",width:"32",height:"32"})},customCalendarNavigationNextContent:t=>{r(t,{icon:"carbon:next-outline",width:"32",height:"32"})},$$slots:{customCalendarNavigationPrevContent:!0,customCalendarNavigationNextContent:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarNavigation>
  {#snippet customCalendarNavigationPrevContent()}
    <Icon icon="carbon:previous-filled" width="32" height="32" />
  {/snippet}
  {#snippet customCalendarNavigationNextContent()}
    <Icon icon="carbon:next-outline" width="32" height="32" />
  {/snippet}
</CalendarNavigation>`}}});var p=h(e,2);l(p,{name:"customCalendarNavigation",asChild:!0,children:(a,u)=>{o(a,{customCalendarNavigation:i=>{B(i,{children:(t,S)=>{var g=x("Control");s(t,g)},$$slots:{default:!0}})},$$slots:{customCalendarNavigation:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CalendarNavigation>
  {#snippet customCalendarNavigation()}
    <Button>Control</Button>
  {/snippet}
</CalendarNavigation>`}}}),s(d,n),_()}m.__docgen={data:[],name:"Customize.stories.svelte"};const C=P(m,I),Q=["CustomCalendarNavigationContent","CustomCalendarNavigation"],U={...C.CustomCalendarNavigationContent,tags:["svelte-csf-v5"]},V={...C.CustomCalendarNavigation,tags:["svelte-csf-v5"]};export{V as CustomCalendarNavigation,U as CustomCalendarNavigationContent,Q as __namedExportsOrder,I as default};
