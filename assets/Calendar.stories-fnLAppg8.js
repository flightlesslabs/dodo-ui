import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,Ct as r,I as i,J as a,K as o,O as s,Z as c,lt as l,q as u,t as d,tt as f,ut as p}from"./client-Bd_pqFlz.js";import{$ as m,S as h,at as g,b as _,et as v,i as y,it as b,n as x,o as S,r as C,s as w,t as T,u as E}from"./create-runtime-stories-BBq5Fw2W.js";import{n as D,t as O}from"./dist-D-15Mm2Z.js";function k(e,t){p(t,!0);var n=F(),r=o(n);N(r,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var a=u(r,2);N(a,{name:`Controlled`,asChild:!0,children:(e,t)=>{D(e,{get value(){return i(P)},set value(e){c(P,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Calendar bind:value={myValue} />`}}});var d=u(a,2);N(d,{name:`Starts On Sunday`,args:{weekStartsOn:0},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var m=u(d,2);{let e=f(()=>({minValue:new v(2026,4,7)}));N(m,{name:`Min Date`,get args(){return i(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var g=u(m,2);{let e=f(()=>({maxValue:new v(2026,4,7)}));N(g,{name:`Max Date`,get args(){return i(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var _=u(g,2);N(_,{name:`Light Theme`,asChild:!0,children:(e,t)=>{h(e,{type:`light`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Calendar />
</Theme>`}}}),N(u(_,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{h(e,{type:`dark`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Calendar />
</Theme>`}}}),s(e,n),l()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{r(),g(),m(),O(),C(),d(),x(),A=`
 a plug and play Calendar component based on bits-ui [calendar](https://bits-ui.com/docs/components/calendar).

## 🚀 Installation

 \`\`\`bash
pnpm add @internationalized/date @flightlesslabs/dodo-ui-date
 \`\`\`

## 🎨 Add Styles

 Import global styles in your root component. use the root layout (+layout.svelte) for SvelteKit.

 \`\`\`ts
 import '@flightlesslabs/dodo-ui-date/styles/main.css';
 \`\`\`

 or scss
 \`\`\`ts
import '@flightlesslabs/dodo-ui-date/styles/main.scss';
 \`\`\`

## ✨ Usage

 \`\`\`ts
 import { Calendar } from '@flightlesslabs/dodo-ui';

 <Calendar />
 \`\`\`
`,j={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},shadow:{control:{type:`select`},options:S,description:`Component Shadow`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},color:{control:{type:`select`},options:_,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},variant:{control:{type:`select`},options:w,description:`Visual variant of the card`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},roundness:{control:{type:`select`},options:E,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},active:{control:{type:`boolean`},description:`Add mouse hover and active effects`,table:{category:`API`,subcategory:`Appearance`}},theme:{control:{type:`select`},options:y,description:`Theme color`,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`undefined`}}}},M={component:D,tags:[`autodocs`],argTypes:j,parameters:{docs:{description:{component:A}}}},{Story:N}=b(M),P=t(a(new v(2026,4,7))),F=n(`<!> <!> <!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Calendar.stories.svelte`},I=T(k,M),L=[`Default`,`Controlled`,`StartsOnSunday`,`MinDate`,`MaxDate`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Controlled,tags:[`svelte-csf-v5`]},B={...I.StartsOnSunday,tags:[`svelte-csf-v5`]},V={...I.MinDate,tags:[`svelte-csf-v5`]},H={...I.MaxDate,tags:[`svelte-csf-v5`]},U={...I.LightTheme,tags:[`svelte-csf-v5`]},W={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{z as Controlled,W as DarkTheme,R as Default,U as LightTheme,H as MaxDate,V as MinDate,B as StartsOnSunday,L as __namedExportsOrder,M as default,j as storyCalendarArgTypes};