import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ht as n,St as r,Ut as i,et as a,f as o,jt as s,kt as c,ln as l,lt as u,nt as d,ot as f,wt as p}from"./iframe-BwoblnGw.js";import{Q as m,T as h,U as g,Y as _,ht as v,mt as y,n as b,q as x,r as S,t as C}from"./create-runtime-stories-BtvKpReg.js";import{I as w,t as T}from"./dist-2qs_8F1R.js";function E(e,o){i(o,!0);var s=M(),l=r(s);A(l,{name:`Default`,args:{id:`Default`},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var d=p(l,2);A(d,{name:`Controlled`,asChild:!0,children:(e,n)=>{w(e,{id:`Checked`,get checked(){return u(j)},set checked(e){c(j,e,!0)},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch id="Checked" bind:checked={myValue}>Check this text</Switch>`}}});var m=p(d,2);A(m,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var g=p(m,2);A(g,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var _=p(g,2);A(_,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var v=p(_,2);A(v,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var y=p(v,2);A(y,{name:`Large`,args:{id:`Large`,size:`large`},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var b=p(y,2);A(b,{name:`Disabled`,args:{disabled:!0},children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var x=p(b,2);A(x,{name:`Light Theme`,asChild:!0,children:(e,n)=>{h(e,{type:`light`,children:(e,n)=>{w(e,{id:`Light_Theme`,children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Switch id="Light_Theme">Check this text</Switch>
</Theme>`}}}),A(p(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,n)=>{h(e,{type:`dark`,children:(e,n)=>{w(e,{id:`Dark_Theme`,children:(e,n)=>{t(),a(e,f(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Switch id="Dark_Theme">Check this text</Switch>
</Theme>`}}}),a(e,s),n()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),v(),S(),T(),o(),b(),D=`
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
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:x,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:m,description:`Visual variant of the Switch`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:_,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:g,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=y(k),j=s(!0),M=d(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Switch.stories.svelte`},N=C(E,k),P=[`Default`,`Controlled`,`Solid`,`NoOutline`,`OnChangeActions`,`Color`,`Large`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Solid,tags:[`svelte-csf-v5`]},R={...N.NoOutline,tags:[`svelte-csf-v5`]},z={...N.OnChangeActions,tags:[`svelte-csf-v5`]},B={...N.Color,tags:[`svelte-csf-v5`]},V={...N.Large,tags:[`svelte-csf-v5`]},H={...N.Disabled,tags:[`svelte-csf-v5`]},U={...N.LightTheme,tags:[`svelte-csf-v5`]},W={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{B as Color,I as Controlled,W as DarkTheme,F as Default,H as Disabled,V as Large,U as LightTheme,R as NoOutline,z as OnChangeActions,L as Solid,O as SwitchArgTypes,P as __namedExportsOrder,k as default};