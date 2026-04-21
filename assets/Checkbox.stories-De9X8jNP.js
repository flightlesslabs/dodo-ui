import{n as e}from"./chunk-DnJy8xQt.js";import{Mt as t,Ot as n,V as r,W as i,bt as a,ct as o,f as s,it as c,q as l,rt as u,ut as d,yt as f,z as p}from"./iframe-C-3JwjRA.js";import{C as m,N as h,P as g,b as _,g as v,n as y,r as b,t as x,v as S,w as C}from"./create-runtime-stories-DnJyhKHE.js";import{o as w,t as T}from"./dist-DNFb5MJy.js";function E(e,t){a(t,!0);var r=M(),s=u(r);A(s,{name:`Default`,args:{id:`Default`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var d=c(s,2);A(d,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return l(j)},set checked(e){o(j,e,!0)},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox id="Checked" bind:checked={myValue}>Check this text</Checkbox>`}}});var m=c(d,2);A(m,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var h=c(m,2);A(h,{name:`Indeterminate`,args:{id:`indeterminate`,indeterminate:!0},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var g=c(h,2);A(g,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var _=c(g,2);A(_,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var v=c(_,2);A(v,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var y=c(v,2);A(y,{name:`Size`,args:{id:`Size`,size:`large`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var b=c(y,2);A(b,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var x=c(b,2);A(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{C(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Checkbox id="Light_Theme">Check this text</Checkbox>
</Theme>`}}}),A(c(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{C(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Checkbox id="Dark_Theme">Check this text</Checkbox>
</Theme>`}}}),p(e,r),f()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{t(),g(),b(),T(),s(),y(),D=`
  A simple Checkbox component based on bits-ui [checkbox](https://bits-ui.com/docs/components/checkbox).

## 🚀 Installation

  \`\`\`bash
 pnpm add bits-ui @flightlesslabs/dodo-ui-bits
  \`\`\`

For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Checkbox } from '@flightlesslabs/dodo-ui-bits';

<Checkbox />
 \`\`\`
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:S,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:m,description:`Visual variant of the Checkbox`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:_,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:v,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=h(k),j=d(!0),M=r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Checkbox.stories.svelte`},N=x(E,k),P=[`Default`,`Controlled`,`OnChangeActions`,`Indeterminate`,`Color`,`Solid`,`NoOutline`,`Size`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.OnChangeActions,tags:[`svelte-csf-v5`]},R={...N.Indeterminate,tags:[`svelte-csf-v5`]},z={...N.Color,tags:[`svelte-csf-v5`]},B={...N.Solid,tags:[`svelte-csf-v5`]},V={...N.NoOutline,tags:[`svelte-csf-v5`]},H={...N.Size,tags:[`svelte-csf-v5`]},U={...N.Disabled,tags:[`svelte-csf-v5`]},W={...N.LightTheme,tags:[`svelte-csf-v5`]},G={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{O as CheckboxArgTypes,z as Color,I as Controlled,G as DarkTheme,F as Default,U as Disabled,R as Indeterminate,W as LightTheme,V as NoOutline,L as OnChangeActions,H as Size,B as Solid,P as __namedExportsOrder,k as default};