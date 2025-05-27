import{f as y,a as g}from"./props-Bdhaksm5.js";import{p as E,f as _,s as d,a as O}from"./runtime-CfJ2O1nk.js";import{i as k}from"./lifecycle-BJKci2tQ.js";import{c as I,d as b}from"./create-runtime-stories-D0S7cr6W.js";import{storyDynamicMenuArgTypes as D,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-Dxc2aSJu.js";import{D as t}from"./DynamicMenu-DpjUOrgR.js";import"./index-CfOrKyLd.js";import"./each-g_srZ31t.js";import"./Menu-DxP0uKhz.js";import"./attributes-CLS4ljXR.js";import"./class-CsDfxRpo.js";import"./style-BcvVHqJD.js";import"./this-ByfO2SYf.js";import"./Popper-D0VFA_sk.js";import"./Paper-DiIJJwgT.js";import"./colors-C3b1rS-d.js";import"./MenuItem-n58TLLQw.js";const M={component:t,tags:["autodocs"],argTypes:D,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var $=y("<!> <!> <!>",1);function l(u,v){E(v,!1),k();var i=$(),c=_(i);r(c,{name:"onclick",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onclick:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onclick={(e: MouseEvent, option: DynamicMenuItemOption) => {
    e.preventDefault();
    console.log(option);
  }}
/>`}}});var m=d(c,2);r(m,{name:"onEnter",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onEnter:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEnter"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEnter={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}});var f=d(m,2);r(f,{name:"onEsc",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onEsc:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"KeyboardNavigation Event: onEsc"}},__svelteCsf:{rawCode:`<DynamicMenu
  keyboardNavigation
  options={dynamicMenuItemOptions}
  onEsc={(e: KeyboardEvent, menuItemIndex: number) => {
    e.preventDefault();
    console.log(menuItemIndex);
  }}
/>`}}}),g(u,i),O()}l.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a=I(l,M),H=["Onclick","OnEnter","OnEsc"],J={...a.Onclick,tags:["svelte-csf-v5"]},L={...a.OnEnter,tags:["svelte-csf-v5"]},Q={...a.OnEsc,tags:["svelte-csf-v5"]};export{L as OnEnter,Q as OnEsc,J as Onclick,H as __namedExportsOrder,M as default};
