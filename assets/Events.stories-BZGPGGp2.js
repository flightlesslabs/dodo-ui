import{p as y,f as g,a as _,s as l,b as E,c as O}from"./iframe-CwZFwEuH.js";import{c as $,d as b}from"./create-runtime-stories-CWQHB_qB.js";import{i as k}from"./lifecycle-DfwppKqL.js";import{storyDynamicMenuArgTypes as I,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-CtLxgDeK.js";import{D as o}from"./DynamicMenu-DDi51NL6.js";import"./each-B3X1ZroF.js";import"./Menu-LJr2shz7.js";import"./attributes-DjFZ4bq1.js";import"./this-Cbo_M9xu.js";import"./style-CT8XDUEw.js";import"./Popper-BNIvZcAB.js";import"./getMoment-Dn5kiy0e.js";import"./Paper-DUQVDo6y.js";import"./colors-C3b1rS-d.js";import"./MenuItem-CVD3g0Iu.js";const D={component:o,tags:["autodocs"],argTypes:I,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var M=g("<!> <!> <!>",1);function d(u,v){y(v,!1),k();var i=M(),c=_(i);r(c,{name:"onclick",asChild:!0,children:(e,p)=>{o(e,{keyboardNavigation:!0,get options(){return s},onclick:(n,t)=>{n.preventDefault(),console.log(t)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
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
