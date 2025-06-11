import{f as y,a as g}from"./props-DJ7OM77H.js";import{p as E,f as _,s as d,a as O}from"./runtime-hUo-UAYR.js";import{i as k}from"./lifecycle-hDYW8BV7.js";import{c as I,d as b}from"./create-runtime-stories-DR9We0Hg.js";import{storyDynamicMenuArgTypes as D,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-D09QMzB8.js";import{D as t}from"./DynamicMenu-C4qSFhX-.js";import"./index-CfOrKyLd.js";import"./each-Cwa_N87x.js";import"./Menu-C70yTstw.js";import"./attributes-CeVSYgml.js";import"./class-0ksSn-pd.js";import"./style-Dl272AsC.js";import"./this-sl_nENle.js";import"./Popper-D9gFU6tp.js";import"./getMoment-BCpL1FFt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Paper-BW8240Nx.js";import"./colors-C3b1rS-d.js";import"./MenuItem-B43bEgLI.js";const M={component:t,tags:["autodocs"],argTypes:D,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var $=y("<!> <!> <!>",1);function l(u,v){E(v,!1),k();var i=$(),m=_(i);r(m,{name:"onclick",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onclick:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onclick={(e: MouseEvent, option: DynamicMenuItemOption) => {
    e.preventDefault();
    console.log(option);
  }}
/>`}}});var c=d(m,2);r(c,{name:"onEnter",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onEnter:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEnter"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEnter={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}});var f=d(c,2);r(f,{name:"onEsc",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onEsc:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEsc"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEsc={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}}),g(u,i),O()}l.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=I(l,M),L=["Onclick","OnEnter","OnEsc"],Q={...a.Onclick,tags:["svelte-csf-v5"]},U={...a.OnEnter,tags:["svelte-csf-v5"]},V={...a.OnEsc,tags:["svelte-csf-v5"]};export{U as OnEnter,V as OnEsc,Q as Onclick,L as __namedExportsOrder,M as default};
