import{n as e}from"./chunk-BneVvdWh.js";import{J as t,L as n,Q as r,Y as i,dt as a,et as o,j as s,k as c,nt as l,q as u,t as d,ut as f,wt as p}from"./client-D_tSG6NS.js";import{i as m,it as h,n as g,nt as _,o as v,r as y,rt as b,s as x,t as S,tt as C,u as w,x as T,y as E}from"./create-runtime-stories-Dn4bn6CJ.js";import{n as D,t as O}from"./dist-DfAu0XQy.js";function k(e,i){a(i,!0);var o=F(),s=u(o);N(s,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var d=t(s,2);N(d,{name:`Controlled`,asChild:!0,children:(e,t)=>{D(e,{get value(){return n(P)},set value(e){r(P,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Calendar bind:value={myValue} />`}}});var p=t(d,2);N(p,{name:`Starts On Sunday`,args:{weekStartsOn:0},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}});var m=t(p,2);{let e=l(()=>({minValue:new _(2026,4,7)}));N(m,{name:`Min Date`,get args(){return n(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var h=t(m,2);{let e=l(()=>({maxValue:new _(2026,4,7)}));N(h,{name:`Max Date`,get args(){return n(e)},parameters:{__svelteCsf:{rawCode:`<Calendar {...args} />`}}})}var g=t(h,2);N(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{T(e,{type:`light`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Calendar />
</Theme>`}}}),N(t(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{T(e,{type:`dark`,children:(e,t)=>{D(e,{})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Calendar />
</Theme>`}}}),c(e,o),f()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{p(),h(),C(),O(),y(),d(),g(),A=`
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
`,j={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},shadow:{control:{type:`select`},options:v,description:`Component Shadow`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},color:{control:{type:`select`},options:E,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},variant:{control:{type:`select`},options:x,description:`Visual variant of the card`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`text`}}},roundness:{control:{type:`select`},options:w,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},active:{control:{type:`boolean`},description:`Add mouse hover and active effects`,table:{category:`API`,subcategory:`Appearance`}},theme:{control:{type:`select`},options:m,description:`Theme color`,table:{category:`API`,subcategory:`Base`,defaultValue:{summary:`undefined`}}}},M={component:D,tags:[`autodocs`],argTypes:j,parameters:{docs:{description:{component:A}}}},{Story:N}=b(M),P=o(i(new _(2026,4,7))),F=s(`<!> <!> <!> <!> <!> <!> <!>`,1),k.__docgen={data:[],name:`Calendar.stories.svelte`},I=S(k,M),L=[`Default`,`Controlled`,`StartsOnSunday`,`MinDate`,`MaxDate`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.Controlled,tags:[`svelte-csf-v5`]},B={...I.StartsOnSunday,tags:[`svelte-csf-v5`]},V={...I.MinDate,tags:[`svelte-csf-v5`]},H={...I.MaxDate,tags:[`svelte-csf-v5`]},U={...I.LightTheme,tags:[`svelte-csf-v5`]},W={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{z as Controlled,W as DarkTheme,R as Default,U as LightTheme,H as MaxDate,V as MinDate,B as StartsOnSunday,L as __namedExportsOrder,M as default,j as storyCalendarArgTypes};