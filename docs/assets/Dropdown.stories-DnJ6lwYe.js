import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ot as t,Xt as n,Yt as r,ct as i,ft as a,jt as o,nt as s,on as c,ot as l,p as u,pn as d,wt as f}from"./iframe-Dx_RV1xH.js";import{i as p,n as m,r as h,t as g}from"./create-runtime-stories-BmbbgM7A.js";import{n as _,t as v}from"./Theme-zBf_QvP8.js";import{a as y,c as b,i as x,n as S,o as C,r as w,s as T,t as E}from"./Dropdown-u8PsctVf.js";function D(e,i){n(i,!0);var u=P(),d=t(u);M(d,{name:`Default`,children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var p=o(d,2);M(p,{name:`onselect (Actions)`,args:{onselect:e=>{alert(`onselect`),console.log(`onselect`,e.value)}},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var m=o(p,2);M(m,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var h=o(m,2);M(h,{name:`Menu Item outline`,args:{menuItemProps:{outline:!0}},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var g=o(h,2);M(g,{name:`Button styles`,args:{triggerProps:{color:`danger`}},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var _=o(g,2);M(_,{name:`Menu styles`,args:{menuProps:{outline:!0,color:`primary`}},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var b=o(_,2);M(b,{name:`Custom Trigger`,asChild:!0,children:(e,t)=>{E(e,{get options(){return k},customTrigger:e=>{T(e,{children:(e,t)=>{c();var n=a(`⚡ Hello`);l(e,n)},$$slots:{default:!0}})},$$slots:{customTrigger:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  {#snippet customTrigger()}
    <DropdownTrigger>⚡ Hello</DropdownTrigger>
  {/snippet}
</Dropdown>`}}});var x=o(b,2);M(x,{name:`Custom Menu content`,asChild:!0,children:(e,t)=>{E(e,{get options(){return k},customMenuItemContent:(e,t)=>{let n=()=>t?.().option;c();var r=a();f(()=>s(r,`⚡${n().label??``}`)),l(e,r)},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{customMenuItemContent:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  Dropdown

  {#snippet customMenuItemContent({ option })}
    ⚡{option.label}
  {/snippet}
</Dropdown>`}}});var S=o(x,2);M(S,{name:`Custom Dropdown Menu`,asChild:!0,children:(e,n)=>{E(e,{customMenu:e=>{y(e,{children:(e,n)=>{var r=N(),i=t(r);w(i,{children:(e,t)=>{c();var n=a(`Uno`);l(e,n)},$$slots:{default:!0}});var s=o(i,2);w(s,{children:(e,t)=>{c();var n=a(`Dos`);l(e,n)},$$slots:{default:!0}});var u=o(s,2);w(u,{children:(e,t)=>{c();var n=a(`Tres`);l(e,n)},$$slots:{default:!0}}),l(e,r)},$$slots:{default:!0}})},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{customMenu:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown>
  Dropdown

  {#snippet customMenu()}
    <DropdownMenu>
      <DropdownMenuItem>Uno</DropdownMenuItem>
      <DropdownMenuItem>Dos</DropdownMenuItem>
      <DropdownMenuItem>Tres</DropdownMenuItem>
    </DropdownMenu>
  {/snippet}
</Dropdown>`}}});var C=o(S,2);M(C,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{E(e,{get options(){return k},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Dropdown {options}>Dropdown</Dropdown>
</Theme>`}}});var D=o(C,2);M(D,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{E(e,{get options(){return k},menuProps:{theme:`dark`},children:(e,t)=>{c();var n=a(`Dropdown`);l(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Dropdown {options} menuProps={{ theme: 'dark' }}>Dropdown</Dropdown>
</Theme>`}}}),l(e,u),r()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{d(),p(),_(),S(),b(),C(),x(),u(),m(),O=`
 A dropdown component based on bits-ui [dropdown menu](https://bits-ui.com/docs/components/dropdown-menu).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Dropdown } from '@flightlesslabs/dodo-ui-bits';

 <Dropdown />
 \`\`\`
`,k=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`}],A={class:{table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},customTrigger:{table:{category:`API`,subcategory:`Slots`}},customMenu:{table:{category:`API`,subcategory:`Slots`}},customMenuItemContent:{table:{category:`API`,subcategory:`Slots`}}},j={component:E,tags:[`autodocs`],argTypes:A,args:{options:k},parameters:{docs:{description:{component:O}}}},{Story:M}=h(j),N=i(`<!> <!> <!>`,1),P=i(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`Dropdown.stories.svelte`},F=g(D,j),I=[`Default`,`OnselectActions`,`Disabled`,`MenuItemOutline`,`ButtonStyles`,`MenuStyles`,`CustomTrigger`,`CustomMenuContent`,`CustomDropdownMenu`,`LightTheme`,`DarkTheme`],L={...F.Default,tags:[`svelte-csf-v5`]},R={...F.OnselectActions,tags:[`svelte-csf-v5`]},z={...F.Disabled,tags:[`svelte-csf-v5`]},B={...F.MenuItemOutline,tags:[`svelte-csf-v5`]},V={...F.ButtonStyles,tags:[`svelte-csf-v5`]},H={...F.MenuStyles,tags:[`svelte-csf-v5`]},U={...F.CustomTrigger,tags:[`svelte-csf-v5`]},W={...F.CustomMenuContent,tags:[`svelte-csf-v5`]},G={...F.CustomDropdownMenu,tags:[`svelte-csf-v5`]},K={...F.LightTheme,tags:[`svelte-csf-v5`]},q={...F.DarkTheme,tags:[`svelte-csf-v5`]}})))()}J();export{V as ButtonStyles,G as CustomDropdownMenu,W as CustomMenuContent,U as CustomTrigger,q as DarkTheme,L as Default,z as Disabled,K as LightTheme,B as MenuItemOutline,H as MenuStyles,R as OnselectActions,I as __namedExportsOrder,j as default,A as storySelectArgTypes};