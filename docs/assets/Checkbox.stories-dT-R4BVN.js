import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,St as n,Wt as r,dn as i,dt as a,et as o,f as s,jt as c,kt as l,nt as u,ot as d,tn as f,wt as p}from"./iframe-Cp4p74XL.js";import{G as m,T as h,V as g,X as _,gt as v,ht as y,n as b,q as x,r as S,t as C}from"./create-runtime-stories-C_QJuGQf.js";import{X as w,t as T}from"./dist-Ckbl2ktj.js";function E(e,i){t(i,!0);var s=M(),c=n(s);A(c,{name:`Default`,args:{id:`Default`},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var u=p(c,2);A(u,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return a(j)},set checked(e){l(j,e,!0)},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox id="Checked" bind:checked={myValue}>Check this text</Checkbox>`}}});var m=p(u,2);A(m,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var g=p(m,2);A(g,{name:`Indeterminate`,args:{id:`indeterminate`,indeterminate:!0},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var _=p(g,2);A(_,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var v=p(_,2);A(v,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var y=p(v,2);A(y,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var b=p(y,2);A(b,{name:`Size`,args:{id:`Size`,size:`large`},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var x=p(b,2);A(x,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var S=p(x,2);A(S,{name:`Light Theme`,asChild:!0,children:(e,t)=>{h(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Checkbox id="Light_Theme">Check this text</Checkbox>
</Theme>`}}});var C=p(S,2);A(C,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{h(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{f(),o(e,d(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Checkbox id="Dark_Theme">Check this text</Checkbox>
</Theme>`}}}),o(e,s),r()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{i(),v(),S(),T(),s(),b(),D=`
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
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:m,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:_,description:`Visual variant of the Checkbox`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:x,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:g,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=y(k),j=c(!0),M=u(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Checkbox.stories.svelte`},N=C(E,k),P=[`Default`,`Controlled`,`OnChangeActions`,`Indeterminate`,`Color`,`Solid`,`NoOutline`,`Size`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.OnChangeActions,tags:[`svelte-csf-v5`]},R={...N.Indeterminate,tags:[`svelte-csf-v5`]},z={...N.Color,tags:[`svelte-csf-v5`]},B={...N.Solid,tags:[`svelte-csf-v5`]},V={...N.NoOutline,tags:[`svelte-csf-v5`]},H={...N.Size,tags:[`svelte-csf-v5`]},U={...N.Disabled,tags:[`svelte-csf-v5`]},W={...N.LightTheme,tags:[`svelte-csf-v5`]},G={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{O as CheckboxArgTypes,z as Color,I as Controlled,G as DarkTheme,F as Default,U as Disabled,R as Indeterminate,W as LightTheme,V as NoOutline,L as OnChangeActions,H as Size,B as Solid,P as __namedExportsOrder,k as default};