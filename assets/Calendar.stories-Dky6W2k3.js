import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,A as n,Ct as r,I as i,J as a,K as o,O as s,Z as c,lt as l,q as u,t as d,tt as f,ut as p}from"./client-r4VzY-6C.js";import{C as m,N as h,P as g,h as _,m as v,n as y,r as b,t as x,w as S,x as C,y as w}from"./create-runtime-stories-CP4zndj_.js";import{F as T,I as E}from"./Icon-9L1z2YU0.js";import{n as D,t as O}from"./dist-Bb-jfmsw.js";function k(e,t){p(t,!0);var n=F(),r=o(n);N(r,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var a=u(r,2);N(a,{name:`Controlled`,asChild:!0,children:(e,t)=>{D(e,{get value(){return i(P)},set value(e){c(P,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Calendar bind:value={myValue} />`}}});var d=u(a,2);N(d,{name:`Starts On Sunday`,args:{weekStartsOn:0},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var m=u(d,2);{let e=f(()=>({minValue:new E(2026,4,7)}));N(m,{name:`Min Date`,get args(){return i(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var h=u(m,2);{let e=f(()=>({maxValue:new E(2026,4,7)}));N(h,{name:`Max Date`,get args(){return i(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var g=u(h,2);N(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{S(e,{type:`light`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Calendar />
</Theme>`}}}),N(u(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{S(e,{type:`dark`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Calendar />
</Theme>`}}}),s(e,n),l()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{r(),g(),T(),O(),b(),d(),y(),A=`
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
`,j={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},shadow:{control:{type:`select`},options:_,description:`Component Shadow`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},color:{control:{type:`select`},options:v,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},variant:{control:{type:`select`},options:m,description:`Visual variant of the card`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},roundness:{control:{type:`select`},options:w,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},active:{control:{type:`boolean`},description:`Add mouse hover and active effects`,table:{category:`API`,subcategory:`Appearance`}},theme:{control:{type:`select`},options:C,description:`Theme color`,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`undefined`}}}},M={component:D,tags:[`autodocs`],argTypes:j,parameters:{docs:{description:{component:A}}}},{Story:N}=h(M),P=t(a(new E(2026,4,7))),F=n(`<!> <!> <!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Calendar.stories.svelte`},I=x(k,M),L=[`Default`,`Controlled`,`StartsOnSunday`,`MinDate`,`MaxDate`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Controlled,tags:[`svelte-csf-v5`]},B={...I.StartsOnSunday,tags:[`svelte-csf-v5`]},V={...I.MinDate,tags:[`svelte-csf-v5`]},H={...I.MaxDate,tags:[`svelte-csf-v5`]},U={...I.LightTheme,tags:[`svelte-csf-v5`]},W={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{z as Controlled,W as DarkTheme,R as Default,U as LightTheme,H as MaxDate,V as MinDate,B as StartsOnSunday,L as __namedExportsOrder,M as default,j as storyCalendarArgTypes};