import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,It as r,Nt as i,Ot as a,Wt as o,dn as s,dt as c,et as l,f as u,jt as d,nt as f,wt as p}from"./iframe-e19cdD8v.js";import{C as m,H as h,J as g,Q as _,T as v,X as y,ht as b,mt as x,n as S,r as C,t as w}from"./create-runtime-stories-aVG2uOFc.js";import{vt as T,yt as E}from"./dist-BXkoyn3n.js";import{n as D,t as O}from"./dist-Cpi9jqEA.js";function k(e,i){n(i,!0);var a=F(),s=p(a);N(s,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var u=t(s,2);N(u,{name:`Controlled`,asChild:!0,children:(e,t)=>{D(e,{get value(){return c(P)},set value(e){d(P,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Calendar bind:value={myValue} />`}}});var f=t(u,2);N(f,{name:`Starts On Sunday`,args:{weekStartsOn:0},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var m=t(f,2);{let e=r(()=>({minValue:new E(2026,4,7)}));N(m,{name:`Min Date`,get args(){return c(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var h=t(m,2);{let e=r(()=>({maxValue:new E(2026,4,7)}));N(h,{name:`Max Date`,get args(){return c(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var g=t(h,2);N(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Calendar />
</Theme>`}}}),N(t(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Calendar />
</Theme>`}}}),l(e,a),o()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{s(),b(),T(),O(),C(),u(),S(),A=`
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
`,j={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},shadow:{control:{type:`select`},options:h,description:`Component Shadow`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},color:{control:{type:`select`},options:m,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},variant:{control:{type:`select`},options:_,description:`Visual variant of the card`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},roundness:{control:{type:`select`},options:g,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},active:{control:{type:`boolean`},description:`Add mouse hover and active effects`,table:{category:`API`,subcategory:`Appearance`}},theme:{control:{type:`select`},options:y,description:`Theme color`,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`undefined`}}}},M={component:D,tags:[`autodocs`],argTypes:j,parameters:{docs:{description:{component:A}}}},{Story:N}=x(M),P=i(a(new E(2026,4,7))),F=f(`<!> <!> <!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Calendar.stories.svelte`},I=w(k,M),L=[`Default`,`Controlled`,`StartsOnSunday`,`MinDate`,`MaxDate`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Controlled,tags:[`svelte-csf-v5`]},B={...I.StartsOnSunday,tags:[`svelte-csf-v5`]},V={...I.MinDate,tags:[`svelte-csf-v5`]},H={...I.MaxDate,tags:[`svelte-csf-v5`]},U={...I.LightTheme,tags:[`svelte-csf-v5`]},W={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{z as Controlled,W as DarkTheme,R as Default,U as LightTheme,H as MaxDate,V as MinDate,B as StartsOnSunday,L as __namedExportsOrder,M as default,j as storyCalendarArgTypes};