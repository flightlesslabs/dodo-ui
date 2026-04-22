import{n as e}from"./chunk-DnJy8xQt.js";import{Mt as t,Ot as n,V as r,W as i,bt as a,ct as o,f as s,it as c,q as l,rt as u,ut as d,yt as f,z as p}from"./iframe-CANpI-uB.js";import{E as m,O as h,i as g,j as _,n as v,o as y,r as b,t as x,v as S,w as C}from"./create-runtime-stories-C72NYMsm.js";import{r as w,t as T}from"./dist-C_V1QCZT.js";function E(e,t){a(t,!0);var r=M(),s=u(r);A(s,{name:`Default`,args:{id:`Default`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var d=c(s,2);A(d,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return l(j)},set checked(e){o(j,e,!0)},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch id="Checked" bind:checked={myValue}>Check this text</Switch>`}}});var m=c(d,2);A(m,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var h=c(m,2);A(h,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var g=c(h,2);A(g,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var _=c(g,2);A(_,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var v=c(_,2);A(v,{name:`Large`,args:{id:`Large`,size:`large`},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var y=c(v,2);A(y,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var b=c(y,2);A(b,{name:`Light Theme`,asChild:!0,children:(e,t)=>{S(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Switch id="Light_Theme">Check this text</Switch>
</Theme>`}}}),A(c(b,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{S(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{n(),p(e,i(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Switch id="Dark_Theme">Check this text</Switch>
</Theme>`}}}),p(e,r),f()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{t(),g(),y(),T(),s(),v(),D=`
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
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:m,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:_,description:`Visual variant of the Switch`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:h,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:C,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=b(k),j=d(!0),M=r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Switch.stories.svelte`},N=x(E,k),P=[`Default`,`Controlled`,`Solid`,`NoOutline`,`OnChangeActions`,`Color`,`Large`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Solid,tags:[`svelte-csf-v5`]},R={...N.NoOutline,tags:[`svelte-csf-v5`]},z={...N.OnChangeActions,tags:[`svelte-csf-v5`]},B={...N.Color,tags:[`svelte-csf-v5`]},V={...N.Large,tags:[`svelte-csf-v5`]},H={...N.Disabled,tags:[`svelte-csf-v5`]},U={...N.LightTheme,tags:[`svelte-csf-v5`]},W={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{B as Color,I as Controlled,W as DarkTheme,F as Default,H as Disabled,V as Large,U as LightTheme,R as NoOutline,z as OnChangeActions,L as Solid,O as SwitchArgTypes,P as __namedExportsOrder,k as default};