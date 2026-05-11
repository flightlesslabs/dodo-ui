import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,V as n,at as r,bt as i,f as a,it as o,xt as s,z as c}from"./iframe-z5xBFQ2Z.js";import{A as l,G as u,M as d,W as f,g as p,i as m,n as h,r as g,t as _}from"./create-runtime-stories-BnonnxDa.js";function v(e,t){s(t,!0);var n=T(),a=o(n);S(a,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var l=r(a,2);S(l,{name:`Large`,args:{size:`large`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var u=r(l,2);S(u,{name:`Safe`,args:{color:`safe`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var d=r(u,2);S(d,{name:`Danger`,args:{color:`danger`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var f=r(d,2);S(f,{name:`Warning`,args:{color:`warning`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var h=r(f,2);S(h,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{var n=C(),i=o(n);m(i,{});var a=r(i,2);m(a,{color:`safe`});var s=r(a,2);m(s,{color:`warning`});var l=r(s,2);m(l,{color:`danger`});var u=r(l,2);m(u,{color:`primary`}),m(r(u,2),{color:`secondary`}),c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),S(r(h,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{var n=w(),i=o(n);m(i,{});var a=r(i,2);m(a,{color:`safe`});var s=r(a,2);m(s,{color:`warning`});var l=r(s,2);m(l,{color:`danger`});var u=r(l,2);m(u,{color:`primary`}),m(r(u,2),{color:`secondary`}),c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),c(e,n),i()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{t(),u(),g(),a(),h(),y=`
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,b={class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:l,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},size:{control:{type:`select`},options:d,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}}},x={component:m,tags:[`autodocs`],argTypes:b,parameters:{docs:{description:{component:y}}}},{Story:S}=f(x),C=n(`<!> <!> <!> <!> <!> <!>`,1),w=n(`<!> <!> <!> <!> <!> <!>`,1),T=n(`<!> <!> <!> <!> <!> <!> <!>`,1),v.__docgen={data:[],name:`Indicator.stories.svelte`},E=_(v,x),D=[`Default`,`Large`,`Safe`,`Danger`,`Warning`,`LightTheme`,`DarkTheme`],O={...E.Default,tags:[`svelte-csf-v5`]},k={...E.Large,tags:[`svelte-csf-v5`]},A={...E.Safe,tags:[`svelte-csf-v5`]},j={...E.Danger,tags:[`svelte-csf-v5`]},M={...E.Warning,tags:[`svelte-csf-v5`]},N={...E.LightTheme,tags:[`svelte-csf-v5`]},P={...E.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{j as Danger,P as DarkTheme,O as Default,k as Large,N as LightTheme,A as Safe,M as Warning,D as __namedExportsOrder,x as default,b as storyTextArgTypes};