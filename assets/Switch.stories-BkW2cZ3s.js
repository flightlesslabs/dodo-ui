import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,Ct as r,I as i,K as a,N as o,O as s,Z as c,lt as l,q as u,t as d,ut as f,vt as p}from"./client-Bd_pqFlz.js";import{M as m,S as h,c as g,j as _,l as v,n as y,r as b,s as x,t as S,x as C}from"./create-runtime-stories-XdMiYN-8.js";import{r as w,t as T}from"./dist-DXZFH604.js";function E(e,t){f(t,!0);var n=M(),r=a(n);A(r,{name:`Default`,args:{id:`Default`},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var d=u(r,2);A(d,{name:`Controlled`,asChild:!0,children:(e,t)=>{w(e,{id:`Checked`,get checked(){return i(j)},set checked(e){c(j,e,!0)},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch id="Checked" bind:checked={myValue}>Check this text</Switch>`}}});var m=u(d,2);A(m,{name:`Solid`,args:{id:`Solid`,variant:`solid`,checked:!0},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var g=u(m,2);A(g,{name:`NoOutline`,args:{id:`Outline`,outline:!1},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var _=u(g,2);A(_,{name:`OnChange (Actions)`,args:{id:`OnChange_Action`,onCheckedChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var v=u(_,2);A(v,{name:`Color`,args:{id:`Safe`,color:`safe`},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var y=u(v,2);A(y,{name:`Large`,args:{id:`Large`,size:`large`},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var b=u(y,2);A(b,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Switch {...args}>
  Check this text
</Switch>`}}});var x=u(b,2);A(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{h(e,{type:`light`,children:(e,t)=>{w(e,{id:`Light_Theme`,children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Switch id="Light_Theme">Check this text</Switch>
</Theme>`}}}),A(u(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{h(e,{type:`dark`,children:(e,t)=>{w(e,{id:`Dark_Theme`,children:(e,t)=>{p(),s(e,o(`Check this text`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Switch id="Dark_Theme">Check this text</Switch>
</Theme>`}}}),s(e,n),l()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{r(),m(),b(),T(),d(),y(),D=`
A Switch/toggle component based on bits-ui [switch](https://bits-ui.com/docs/components/switch).

## 🚀 Installation

  \`\`\`bash
 pnpm add bits-ui @flightlesslabs/dodo-ui-bits
  \`\`\`

## 🎨 Add Styles

 Import global styles in your root component. use the root layout (+layout.svelte) for SvelteKit.

 \`\`\`ts
 import '@flightlesslabs/dodo-ui-bits/styles/main.css';
 \`\`\`

 or scss
 \`\`\`ts
import '@flightlesslabs/dodo-ui-bits/styles/main.scss';
 \`\`\`

## ✨ Usage

 \`\`\`ts
 import { Switch } from '@flightlesslabs/dodo-ui-bits';

 <Switch />
 \`\`\`
`,O={children:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:C,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`neutral`}}},variant:{control:{type:`select`},options:x,description:`Visual variant of the Switch`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},size:{control:{type:`select`},options:g,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:v,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},k={component:w,tags:[`autodocs`],argTypes:O,parameters:{docs:{description:{component:D}}}},{Story:A}=_(k),j=t(!0),M=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),E.__docgen={data:[],name:`Switch.stories.svelte`},N=S(E,k),P=[`Default`,`Controlled`,`Solid`,`NoOutline`,`OnChangeActions`,`Color`,`Large`,`Disabled`,`LightTheme`,`DarkTheme`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Solid,tags:[`svelte-csf-v5`]},R={...N.NoOutline,tags:[`svelte-csf-v5`]},z={...N.OnChangeActions,tags:[`svelte-csf-v5`]},B={...N.Color,tags:[`svelte-csf-v5`]},V={...N.Large,tags:[`svelte-csf-v5`]},H={...N.Disabled,tags:[`svelte-csf-v5`]},U={...N.LightTheme,tags:[`svelte-csf-v5`]},W={...N.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{B as Color,I as Controlled,W as DarkTheme,F as Default,H as Disabled,V as Large,U as LightTheme,R as NoOutline,z as OnChangeActions,L as Solid,O as SwitchArgTypes,P as __namedExportsOrder,k as default};