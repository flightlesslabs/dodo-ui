import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,V as n,W as r,at as i,bt as a,dt as o,f as s,it as c,kt as l,lt as u,q as d,xt as f,z as p}from"./iframe-CvJEiY70.js";import{A as m,E as h,F as g,G as _,M as v,W as y,g as b,n as x,r as S,t as C}from"./create-runtime-stories-C0Le82WJ.js";import{_ as w,t as T}from"./dist-DnLPFfhu.js";function E(e,t){f(t,!0);var n=M(),o=c(n);A(o,{name:`Default`,args:{id:`Default`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var s=i(o,2);A(s,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return d(j)},set checked(e){u(j,e,!0)},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox id="Checked" bind:checked={myValue}>Check this text</Checkbox>`}}});var m=i(s,2);A(m,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var h=i(m,2);A(h,{name:`Indeterminate`,args:{id:`indeterminate`,indeterminate:!0},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var g=i(h,2);A(g,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var _=i(g,2);A(_,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var v=i(_,2);A(v,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var y=i(v,2);A(y,{name:`Size`,args:{id:`Size`,size:`large`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var x=i(y,2);A(x,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Checkbox {...args}>
  Check this text
</Checkbox>`}}});var S=i(x,2);A(S,{name:`Light Theme`,asChild:!0,children:(e,t)=>{b(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Checkbox id="Light_Theme">Check this text</Checkbox>
</Theme>`}}}),A(i(S,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{b(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Checkbox id="Dark_Theme">Check this text</Checkbox>
</Theme>`}}}),p(e,n),a()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{t(),_(),S(),T(),s(),x(),D=`
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
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:m,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:g,description:`Visual variant of the Checkbox`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:v,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:h,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=y(k),j=o(!0),M=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Checkbox.stories.svelte`},N=C(E,k),P=[`Default`,`Controlled`,`OnChangeActions`,`Indeterminate`,`Color`,`Solid`,`NoOutline`,`Size`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.OnChangeActions,tags:[`svelte-csf-v5`]},R={...N.Indeterminate,tags:[`svelte-csf-v5`]},z={...N.Color,tags:[`svelte-csf-v5`]},B={...N.Solid,tags:[`svelte-csf-v5`]},V={...N.NoOutline,tags:[`svelte-csf-v5`]},H={...N.Size,tags:[`svelte-csf-v5`]},U={...N.Disabled,tags:[`svelte-csf-v5`]},W={...N.LightTheme,tags:[`svelte-csf-v5`]},G={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{O as CheckboxArgTypes,z as Color,I as Controlled,G as DarkTheme,F as Default,U as Disabled,R as Indeterminate,W as LightTheme,V as NoOutline,L as OnChangeActions,H as Size,B as Solid,P as __namedExportsOrder,k as default};