import{p as y,f as g,a as _,s as l,b as E,c as O}from"./iframe-B_h0ZugA.js";import{c as $,d as b}from"./create-runtime-stories-CuUPjFLX.js";import{i as k}from"./lifecycle-Dv2MLzXX.js";import{storyDynamicMenuArgTypes as I,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-CiO13HqJ.js";import{D as o}from"./DynamicMenu-gcKrRYkF.js";import"./preload-helper-D9Z9MdNV.js";import"./each-Bz-EbiWA.js";import"./Menu-7DA6-MSP.js";import"./attributes-B-gMNrtk.js";import"./this-bRGdYwyX.js";import"./style-C9v_w32A.js";import"./getMoment-lRxgIpNk.js";import"./Popper-Ct7Pfu-W.js";import"./Paper-CXhVzTzr.js";import"./colors-C3b1rS-d.js";import"./MenuItem-CVm9-pHS.js";const D={component:o,tags:["autodocs"],argTypes:I,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var M=g("<!> <!> <!>",1);function d(u,v){y(v,!1),k();var i=M(),c=_(i);r(c,{name:"onclick",asChild:!0,children:(e,p)=>{o(e,{keyboardNavigation:!0,get options(){return s},onclick:(n,t)=>{n.preventDefault(),console.log(t)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onclick={(e: MouseEvent, option: DynamicMenuItemOption) => {
    e.preventDefault();
    console.log(option);
  }}
/>`}}});var m=l(c,2);r(m,{name:"onEnter",asChild:!0,children:(e,p)=>{o(e,{keyboardNavigation:!0,get options(){return s},onEnter:(n,t)=>{n.preventDefault(),console.log(t)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEnter"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEnter={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}});var f=l(m,2);r(f,{name:"onEsc",asChild:!0,children:(e,p)=>{o(e,{keyboardNavigation:!0,get options(){return s},onEsc:(n,t)=>{n.preventDefault(),console.log(t)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEsc"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEsc={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}}),E(u,i),O()}d.__docgen={data:[],name:"Events.stories.svelte"};const a=$(d,D),G=["Onclick","OnEnter","OnEsc"],H={...a.Onclick,tags:["svelte-csf-v5"]},J={...a.OnEnter,tags:["svelte-csf-v5"]},L={...a.OnEsc,tags:["svelte-csf-v5"]};export{J as OnEnter,L as OnEsc,H as Onclick,G as __namedExportsOrder,D as default};
