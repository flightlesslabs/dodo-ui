import{f as y,a as g}from"./props-785jmTig.js";import{p as E,f as _,s as d,a as O}from"./runtime-CfJ2O1nk.js";import{i as k}from"./lifecycle-BJKci2tQ.js";import{c as I,d as b}from"./create-runtime-stories-BxeoUkSH.js";import{storyDynamicMenuArgTypes as D,dynamicMenuItemOptions as s}from"./DynamicMenu.stories-BTWKz_qG.js";import{D as t}from"./DynamicMenu-CAav2RwG.js";import"./index-CfOrKyLd.js";import"./each-NTaGD5xs.js";import"./Menu-BCYgW_Pw.js";import"./attributes-XQBg23q6.js";import"./class-Rk00bAhQ.js";import"./style-BR5QSoj8.js";import"./this-BiyzPYsS.js";import"./Popper-qqQ5Fl7X.js";import"./Paper-C24-57Rj.js";import"./colors-C3b1rS-d.js";import"./MenuItem-CAvtg6-R.js";const M={component:t,tags:["autodocs"],argTypes:D,parameters:{docs:{description:{component:""}}}},{Story:r}=b();var $=y("<!> <!> <!>",1);function l(u,v){E(v,!1),k();var i=$(),c=_(i);r(c,{name:"onclick",asChild:!0,children:(e,p)=>{t(e,{keyboardNavigation:!0,options:s,onclick:(n,o)=>{n.preventDefault(),console.log(o)}})},$$slots:{default:!0},parameters:{docs:{description:{story:"Menu Item onclick"}},__svelteCsf:{rawCode:`<DynamicMenu
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
