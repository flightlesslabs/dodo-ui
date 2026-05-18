import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,V as n,at as r,bt as i,dt as a,f as o,it as s,lt as c,ot as l,pt as u,q as d,xt as f,z as p}from"./iframe-BMIQX6az.js";import{E as m,I as h,K as g,M as _,P as v,g as y,h as b,n as x,q as S,r as C,t as w}from"./create-runtime-stories-CmJJFurP.js";import{L as T,R as E}from"./dist-Bbm42NBG.js";import{n as D,t as O}from"./dist-D9Xrx33Y.js";function k(e,t){f(t,!0);var n=F(),a=s(n);N(a,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var o=r(a,2);N(o,{name:`Controlled`,asChild:!0,children:(e,t)=>{D(e,{get value(){return d(P)},set value(e){c(P,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Calendar bind:value={myValue} />`}}});var l=r(o,2);N(l,{name:`Starts On Sunday`,args:{weekStartsOn:0},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var m=r(l,2);{let e=u(()=>({minValue:new E(2026,4,7)}));N(m,{name:`Min Date`,get args(){return d(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var h=r(m,2);{let e=u(()=>({maxValue:new E(2026,4,7)}));N(h,{name:`Max Date`,get args(){return d(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var g=r(h,2);N(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{y(e,{type:`light`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Calendar />
</Theme>`}}}),N(r(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{y(e,{type:`dark`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Calendar />
</Theme>`}}}),p(e,n),i()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{t(),S(),T(),O(),C(),o(),x(),A=`
 a plug and play Calendar component based on bits-ui [calendar](https://bits-ui.com/docs/components/calendar).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @internationalized/date @flightlesslabs/dodo-ui-date
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-date) guide.

## ✨ Usage

 \`\`\`ts
 import { Calendar } from '@flightlesslabs/dodo-ui';

 <Calendar />
 \`\`\`
`,j={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},shadow:{control:{type:`select`},options:m,description:`Component Shadow`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},color:{control:{type:`select`},options:b,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},variant:{control:{type:`select`},options:h,description:`Visual variant of the card`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},roundness:{control:{type:`select`},options:_,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},active:{control:{type:`boolean`},description:`Add mouse hover and active effects`,table:{category:`API`,subcategory:`Appearance`}},theme:{control:{type:`select`},options:v,description:`Theme color`,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`undefined`}}}},M={component:D,tags:[`autodocs`],argTypes:j,parameters:{docs:{description:{component:A}}}},{Story:N}=g(M),P=a(l(new E(2026,4,7))),F=n(`<!> <!> <!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Calendar.stories.svelte`},I=w(k,M),L=[`Default`,`Controlled`,`StartsOnSunday`,`MinDate`,`MaxDate`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Controlled,tags:[`svelte-csf-v5`]},B={...I.StartsOnSunday,tags:[`svelte-csf-v5`]},V={...I.MinDate,tags:[`svelte-csf-v5`]},H={...I.MaxDate,tags:[`svelte-csf-v5`]},U={...I.LightTheme,tags:[`svelte-csf-v5`]},W={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{z as Controlled,W as DarkTheme,R as Default,U as LightTheme,H as MaxDate,V as MinDate,B as StartsOnSunday,L as __namedExportsOrder,M as default,j as storyCalendarArgTypes};