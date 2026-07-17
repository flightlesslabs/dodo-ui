import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,Q as n,St as r,Wt as i,dn as a,et as o,f as s,nt as c,ot as l,tn as u,vt as d,wt as f}from"./iframe-Boim5DH3.js";import{T as p,gt as m,ht as h,n as g,r as _,t as v}from"./create-runtime-stories-D_3FAyMc.js";import{A as y,I as b,M as x,P as S,t as C}from"./dist-jYHt1L2h.js";function w(e,a){t(a,!0);var s=j(),c=r(s);k(c,{name:`Default`,children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var m=f(c,2);k(m,{name:`onselect (Actions)`,args:{onselect:e=>{alert(`onselect`),console.log(`onselect`,e.value)}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var h=f(m,2);k(h,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var g=f(h,2);k(g,{name:`Menu Item outline`,args:{menuItemProps:{outline:!0}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var _=f(g,2);k(_,{name:`Button styles`,args:{triggerProps:{color:`danger`}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var v=f(_,2);k(v,{name:`Menu styles`,args:{menuProps:{outline:!0,color:`primary`}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var C=f(v,2);k(C,{name:`Custom Trigger`,asChild:!0,children:(e,t)=>{y(e,{get options(){return E},customTrigger:e=>{b(e,{children:(e,t)=>{u(),o(e,l(`⚡ Hello`))},$$slots:{default:!0}})},$$slots:{customTrigger:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  {#snippet customTrigger()}
    <DropdownTrigger>⚡ Hello</DropdownTrigger>
  {/snippet}
</Dropdown>`}}});var w=f(C,2);k(w,{name:`Custom Menu content`,asChild:!0,children:(e,t)=>{y(e,{get options(){return E},customMenuItemContent:(e,t)=>{let r=()=>t?.().option;u();var i=l();d(()=>n(i,`⚡${r().label??``}`)),o(e,i)},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{customMenuItemContent:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  Dropdown

  {#snippet customMenuItemContent({ option })}
    ⚡{option.label}
  {/snippet}
</Dropdown>`}}});var T=f(w,2);k(T,{name:`Custom Dropdown Menu`,asChild:!0,children:(e,t)=>{y(e,{customMenu:e=>{S(e,{children:(e,t)=>{var n=A(),i=r(n);x(i,{children:(e,t)=>{u(),o(e,l(`Uno`))},$$slots:{default:!0}});var a=f(i,2);x(a,{children:(e,t)=>{u(),o(e,l(`Dos`))},$$slots:{default:!0}}),x(f(a,2),{children:(e,t)=>{u(),o(e,l(`Tres`))},$$slots:{default:!0}}),o(e,n)},$$slots:{default:!0}})},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{customMenu:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown>
  Dropdown

  {#snippet customMenu()}
    <DropdownMenu>
      <DropdownMenuItem>Uno</DropdownMenuItem>
      <DropdownMenuItem>Dos</DropdownMenuItem>
      <DropdownMenuItem>Tres</DropdownMenuItem>
    </DropdownMenu>
  {/snippet}
</Dropdown>`}}});var D=f(T,2);k(D,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{y(e,{get options(){return E},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Dropdown {options}>Dropdown</Dropdown>
</Theme>`}}});var O=f(D,2);k(O,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{y(e,{get options(){return E},menuProps:{theme:`dark`},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Dropdown {options} menuProps={{ theme: 'dark' }}>Dropdown</Dropdown>
</Theme>`}}}),o(e,s),i()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{a(),m(),_(),C(),s(),g(),T=`
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
`,E=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`}],D={class:{table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},customTrigger:{table:{category:`API`,subcategory:`Slots`}},customMenu:{table:{category:`API`,subcategory:`Slots`}},customMenuItemContent:{table:{category:`API`,subcategory:`Slots`}}},O={component:y,tags:[`autodocs`],argTypes:D,args:{options:E},parameters:{docs:{description:{component:T}}}},{Story:k}=h(O),A=c(`<!> <!> <!>`,1),j=c(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),w.__docgen={data:[],name:`Dropdown.stories.svelte`},M=v(w,O),N=[`Default`,`OnselectActions`,`Disabled`,`MenuItemOutline`,`ButtonStyles`,`MenuStyles`,`CustomTrigger`,`CustomMenuContent`,`CustomDropdownMenu`,`LightTheme`,`DarkTheme`],P={...M.Default,tags:[`svelte-csf-v5`]},F={...M.OnselectActions,tags:[`svelte-csf-v5`]},I={...M.Disabled,tags:[`svelte-csf-v5`]},L={...M.MenuItemOutline,tags:[`svelte-csf-v5`]},R={...M.ButtonStyles,tags:[`svelte-csf-v5`]},z={...M.MenuStyles,tags:[`svelte-csf-v5`]},B={...M.CustomTrigger,tags:[`svelte-csf-v5`]},V={...M.CustomMenuContent,tags:[`svelte-csf-v5`]},H={...M.CustomDropdownMenu,tags:[`svelte-csf-v5`]},U={...M.LightTheme,tags:[`svelte-csf-v5`]},W={...M.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{R as ButtonStyles,H as CustomDropdownMenu,V as CustomMenuContent,B as CustomTrigger,W as DarkTheme,P as Default,I as Disabled,U as LightTheme,L as MenuItemOutline,z as MenuStyles,F as OnselectActions,N as __namedExportsOrder,O as default,D as storySelectArgTypes};