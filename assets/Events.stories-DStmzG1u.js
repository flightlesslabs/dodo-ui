import{p as y,f as g,a as _,s as l,b as E,c as O}from"./iframe-CfBVIw1X.js";import{c as $,d as b}from"./create-runtime-stories-Dw7ELUXC.js";import{i as k}from"./lifecycle-DjHDWpYg.js";import{storyDynamicMenuArgTypes as I,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-CA0TVvqp.js";import{D as o}from"./DynamicMenu-B1sXturf.js";import"./each-DCAPy37e.js";import"./Menu-D_a-yPV8.js";import"./attributes-Bsk4O1Lh.js";import"./this-ZRJxfvwF.js";import"./style-BGhvvo8Y.js";import"./Popper-D4hX8Dt5.js";import"./getMoment-BCHbvRiR.js";import"./Paper-tYc1JEr8.js";import"./colors-C3b1rS-d.js";import"./MenuItem-CZWVrw_-.js";const D={component:o,tags:["autodocs"],argTypes:I,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var M=g("<!> <!> <!>",1);function d(u,v){y(v,!1),k();var i=M(),c=_(i);r(c,{name:"onclick",asChild:!0,children:(e,p)=>{o(e,{keyboardNavigation:!0,get options(){return s},onclick:(n,t)=>{n.preventDefault(),console.log(t)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
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
/>`}}}),E(u,i),O()}d.__docgen={data:[],name:"Events.stories.svelte"};const a=$(d,D),F=["Onclick","OnEnter","OnEsc"],G={...a.Onclick,tags:["svelte-csf-v5"]},H={...a.OnEnter,tags:["svelte-csf-v5"]},J={...a.OnEsc,tags:["svelte-csf-v5"]};export{H as OnEnter,J as OnEsc,G as Onclick,F as __namedExportsOrder,D as default};
