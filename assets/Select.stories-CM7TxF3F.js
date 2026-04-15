import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,Ct as r,I as i,J as a,K as o,O as s,Z as c,lt as l,q as u,t as d,ut as f}from"./client-Bd_pqFlz.js";import{M as p,S as m,c as h,j as g,n as _,r as v,t as y,u as b}from"./create-runtime-stories-XdMiYN-8.js";import{n as x,t as S}from"./dist-DXZFH604.js";function C(e,t){f(t,!0);var n=A(),r=o(n);O(r,{name:`Default`,args:{placeholder:`Select an option`},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Select {...args} />`}}});var a=u(r,2);O(a,{name:`Searchable`,args:{searchable:!0,placeholder:`Search a number`},parameters:{__svelteCsf:{rawCode:`<Select {...args} />`}}});var d=u(a,2);O(d,{name:`Controlled`,asChild:!0,children:(e,t)=>{x(e,{get options(){return T},get value(){return i(k)},set value(e){c(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Select {options} bind:value={myValue} />`}}});var p=u(d,2);O(p,{name:`OnChange (Actions)`,args:{onValueChange:e=>{alert(`OnChange`),console.log(`OnChange`,e)}},parameters:{__svelteCsf:{rawCode:`<Select {...args} />`}}});var h=u(p,2);O(h,{name:`Disabled`,args:{placeholder:`Select an option`,disabled:!0},parameters:{__svelteCsf:{rawCode:`<Select {...args} />`}}});var g=u(h,2);O(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{m(e,{type:`light`,children:(e,t)=>{x(e,{get options(){return T}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Select {options} />
</Theme>`}}}),O(u(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{m(e,{type:`dark`,children:(e,t)=>{x(e,{get options(){return T},popupProps:{theme:`dark`}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Select {options} popupProps={{ theme: 'dark' }} />
</Theme>`}}}),s(e,n),l()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{r(),p(),v(),S(),d(),_(),w=`
 A searchable Select component based on bits-ui [combobox](https://bits-ui.com/docs/components/combobox).

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
 import { Select } from '@flightlesslabs/dodo-ui-bits';

 <Select />
 \`\`\`
`,T=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`},{value:`five`,label:`Five`},{value:`six`,label:`Six`},{value:`seven`,label:`Seven`},{value:`eight`,label:`Eight`},{value:`nine`,label:`Nine`},{value:`ten`,label:`Ten`},{value:`eleven`,label:`Eleven`},{value:`twelve`,label:`Twelve`},{value:`thirteen`,label:`Thirteen`},{value:`fourteen`,label:`Fourteen`},{value:`fifteen`,label:`Fifteen`},{value:`sixteen`,label:`Sixteen`},{value:`seventeen`,label:`Seventeen`},{value:`eighteen`,label:`Eighteen`},{value:`nineteen`,label:`Nineteen`},{value:`twenty`,label:`Twenty`},{value:`twentyOne`,label:`Twenty One`},{value:`twentyTwo`,label:`Twenty Two`},{value:`twentyThree`,label:`Twenty Three`},{value:`twentyFour`,label:`Twenty Four`},{value:`twentyFive`,label:`Twenty Five`}],E={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},name:{table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},searchable:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Force focused visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:h,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:b,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},before:{table:{category:`API`,subcategory:`Slots`},description:`Content rendered before the input`},after:{table:{category:`API`,subcategory:`Slots`},description:`Content rendered after the input`}},D={component:x,tags:[`autodocs`],argTypes:E,args:{options:T},parameters:{docs:{description:{component:w}}}},{Story:O}=g(D),k=t(a(T[1].value)),A=n(`<!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Select.stories.svelte`},j=y(C,D),M=[`Default`,`Searchable`,`Controlled`,`OnChangeActions`,`Disabled`,`LightTheme`,`DarkTheme`],N={...j.Default,tags:[`svelte-csf-v5`]},P={...j.Searchable,tags:[`svelte-csf-v5`]},F={...j.Controlled,tags:[`svelte-csf-v5`]},I={...j.OnChangeActions,tags:[`svelte-csf-v5`]},L={...j.Disabled,tags:[`svelte-csf-v5`]},R={...j.LightTheme,tags:[`svelte-csf-v5`]},z={...j.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{F as Controlled,z as DarkTheme,N as Default,L as Disabled,R as LightTheme,I as OnChangeActions,P as Searchable,M as __namedExportsOrder,D as default,E as storySelectArgTypes};