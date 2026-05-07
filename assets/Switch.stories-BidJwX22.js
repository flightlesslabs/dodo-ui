import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,V as n,W as r,at as i,bt as a,dt as o,f as s,it as c,kt as l,lt as u,q as d,xt as f,z as p}from"./iframe-BPzhtbRW.js";import{P as m,T as h,U as g,W as _,h as v,j as y,k as b,n as x,r as S,t as C}from"./create-runtime-stories-B8IdGxw2.js";import{m as w,t as T}from"./dist-DqkdeKew.js";function E(e,t){f(t,!0);var n=M(),o=c(n);A(o,{name:`Default`,args:{id:`Default`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var s=i(o,2);A(s,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return d(j)},set checked(e){u(j,e,!0)},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch id="Checked" bind:checked={myValue}>Check this text</Switch>`}}});var m=i(s,2);A(m,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var h=i(m,2);A(h,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var g=i(h,2);A(g,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var _=i(g,2);A(_,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var y=i(_,2);A(y,{name:`Large`,args:{id:`Large`,size:`large`},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var b=i(y,2);A(b,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var x=i(b,2);A(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Switch id="Light_Theme">Check this text</Switch>
</Theme>`}}}),A(i(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{l(),p(e,r(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Switch id="Dark_Theme">Check this text</Switch>
</Theme>`}}}),p(e,n),a()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{t(),_(),S(),T(),s(),x(),D=`
A Switch/toggle component based on bits-ui [switch](https://bits-ui.com/docs/components/switch).

## 🚀 Installation

  \`\`\`bash
 pnpm add bits-ui @flightlesslabs/dodo-ui-bits
  \`\`\`

For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Switch } from '@flightlesslabs/dodo-ui-bits';

 <Switch />
 \`\`\`
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:b,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:m,description:`Visual variant of the Switch`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:y,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:h,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=g(k),j=o(!0),M=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Switch.stories.svelte`},N=C(E,k),P=[`Default`,`Controlled`,`Solid`,`NoOutline`,`OnChangeActions`,`Color`,`Large`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Solid,tags:[`svelte-csf-v5`]},R={...N.NoOutline,tags:[`svelte-csf-v5`]},z={...N.OnChangeActions,tags:[`svelte-csf-v5`]},B={...N.Color,tags:[`svelte-csf-v5`]},V={...N.Large,tags:[`svelte-csf-v5`]},H={...N.Disabled,tags:[`svelte-csf-v5`]},U={...N.LightTheme,tags:[`svelte-csf-v5`]},W={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{B as Color,I as Controlled,W as DarkTheme,F as Default,H as Disabled,V as Large,U as LightTheme,R as NoOutline,z as OnChangeActions,L as Solid,O as SwitchArgTypes,P as __namedExportsOrder,k as default};