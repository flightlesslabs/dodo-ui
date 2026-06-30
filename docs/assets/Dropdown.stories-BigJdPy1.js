import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as n,Q as r,Wt as i,dn as a,et as o,f as s,nt as c,ot as l,tn as u,vt as d,wt as f}from"./iframe-C1P8xe_p.js";import{T as p,_t as m,n as h,r as g,t as _,vt as v}from"./create-runtime-stories-CSS-E7Kz.js";import{A as y,I as b,M as x,P as S,t as C}from"./dist-ByjgJLS9.js";function w(e,a){n(a,!0);var s=j(),c=f(s);k(c,{name:`Default`,children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var m=t(c,2);k(m,{name:`onselect (Actions)`,args:{onselect:e=>{alert(`onselect`),console.log(`onselect`,e.value)}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var h=t(m,2);k(h,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var g=t(h,2);k(g,{name:`Button styles`,args:{triggerProps:{color:`danger`}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var _=t(g,2);k(_,{name:`Menu styles`,args:{menuProps:{outline:!0,color:`primary`}},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
  Dropdown
</Dropdown>`}}});var v=t(_,2);k(v,{name:`Custom Trigger`,asChild:!0,children:(e,t)=>{y(e,{get options(){return E},customTrigger:e=>{b(e,{children:(e,t)=>{u(),o(e,l(`⚡ Hello`))},$$slots:{default:!0}})},$$slots:{customTrigger:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  {#snippet customTrigger()}
    <DropdownTrigger>⚡ Hello</DropdownTrigger>
  {/snippet}
</Dropdown>`}}});var C=t(v,2);k(C,{name:`Custom Menu content`,asChild:!0,children:(e,t)=>{y(e,{get options(){return E},customMenuItemContent:(e,t)=>{let n=()=>t?.().option;u();var i=l();d(()=>r(i,`⚡${n().label??``}`)),o(e,i)},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{customMenuItemContent:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {options}>
  Dropdown

  {#snippet customMenuItemContent({ option })}
    ⚡{option.label}
  {/snippet}
</Dropdown>`}}});var w=t(C,2);k(w,{name:`Custom Dropdown Menu`,asChild:!0,children:(e,n)=>{y(e,{customMenu:e=>{S(e,{children:(e,n)=>{var r=A(),i=f(r);x(i,{children:(e,t)=>{u(),o(e,l(`Uno`))},$$slots:{default:!0}});var a=t(i,2);x(a,{children:(e,t)=>{u(),o(e,l(`Dos`))},$$slots:{default:!0}}),x(t(a,2),{children:(e,t)=>{u(),o(e,l(`Tres`))},$$slots:{default:!0}}),o(e,r)},$$slots:{default:!0}})},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{customMenu:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown>
  Dropdown

  {#snippet customMenu()}
    <DropdownMenu>
      <DropdownMenuItem>Uno</DropdownMenuItem>
      <DropdownMenuItem>Dos</DropdownMenuItem>
      <DropdownMenuItem>Tres</DropdownMenuItem>
    </DropdownMenu>
  {/snippet}
</Dropdown>`}}});var T=t(w,2);k(T,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{y(e,{get options(){return E},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Dropdown {options}>Dropdown</Dropdown>
</Theme>`}}}),k(t(T,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{y(e,{get options(){return E},menuProps:{theme:`dark`},children:(e,t)=>{u(),o(e,l(`Dropdown`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Dropdown {options} menuProps={{ theme: 'dark' }}>Dropdown</Dropdown>
</Theme>`}}}),o(e,s),i()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{a(),v(),g(),C(),s(),h(),T=`
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
`,E=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`}],D={class:{table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},customTrigger:{table:{category:`API`,subcategory:`Slots`}},customMenu:{table:{category:`API`,subcategory:`Slots`}},customMenuItemContent:{table:{category:`API`,subcategory:`Slots`}}},O={component:y,tags:[`autodocs`],argTypes:D,args:{options:E},parameters:{docs:{description:{component:T}}}},{Story:k}=m(O),A=c(`<!> <!> <!>`,1),j=c(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),w.__docgen={data:[],name:`Dropdown.stories.svelte`},M=_(w,O),N=[`Default`,`OnselectActions`,`Disabled`,`ButtonStyles`,`MenuStyles`,`CustomTrigger`,`CustomMenuContent`,`CustomDropdownMenu`,`LightTheme`,`DarkTheme`],P={...M.Default,tags:[`svelte-csf-v5`]},F={...M.OnselectActions,tags:[`svelte-csf-v5`]},I={...M.Disabled,tags:[`svelte-csf-v5`]},L={...M.ButtonStyles,tags:[`svelte-csf-v5`]},R={...M.MenuStyles,tags:[`svelte-csf-v5`]},z={...M.CustomTrigger,tags:[`svelte-csf-v5`]},B={...M.CustomMenuContent,tags:[`svelte-csf-v5`]},V={...M.CustomDropdownMenu,tags:[`svelte-csf-v5`]},H={...M.LightTheme,tags:[`svelte-csf-v5`]},U={...M.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{L as ButtonStyles,V as CustomDropdownMenu,B as CustomMenuContent,z as CustomTrigger,U as DarkTheme,P as Default,I as Disabled,H as LightTheme,R as MenuStyles,F as OnselectActions,N as __namedExportsOrder,O as default,D as storySelectArgTypes};