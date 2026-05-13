import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,V as n,at as r,bt as i,f as a,it as o,xt as s,z as c}from"./iframe-D9ZrzglU.js";import{C as l,G as u,K as d,S as f,g as p,i as m,j as h,n as g,r as _,t as v}from"./create-runtime-stories-JcLl9xeI.js";function y(e,t){s(t,!0);var n=E(),a=o(n);C(a,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var l=r(a,2);C(l,{name:`Font Size`,args:{"font-size":`2em`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var u=r(l,2);C(u,{name:`Safe`,args:{color:`safe`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var d=r(u,2);C(d,{name:`Danger`,args:{color:`danger`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var h=r(d,2);C(h,{name:`Warning`,args:{color:`warning`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var g=r(h,2);C(g,{name:`Custom Icon`,asChild:!0,children:(e,t)=>{m(e,{color:`danger`,customIndicatorIcon:e=>{f(e,{icon:`material-symbols:square`})},$$slots:{customIndicatorIcon:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Indicator color="danger">
  {#snippet customIndicatorIcon()}
    <Icon icon="material-symbols:square" />
  {/snippet}
</Indicator>`}}});var _=r(g,2);C(_,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{var n=w(),i=o(n);m(i,{});var a=r(i,2);m(a,{color:`safe`});var s=r(a,2);m(s,{color:`warning`});var l=r(s,2);m(l,{color:`danger`});var u=r(l,2);m(u,{color:`primary`}),m(r(u,2),{color:`secondary`}),c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),C(r(_,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{var n=T(),i=o(n);m(i,{});var a=r(i,2);m(a,{color:`safe`});var s=r(a,2);m(s,{color:`warning`});var l=r(s,2);m(l,{color:`danger`});var u=r(l,2);m(u,{color:`primary`}),m(r(u,2),{color:`secondary`}),c(e,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),c(e,n),i()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{t(),d(),_(),l(),a(),g(),b=`
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,x={class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:h,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},"font-size":{table:{category:`API`,subcategory:`Appearance`}},customIndicatorIcon:{table:{category:`API`,subcategory:`Slots`}}},S={component:m,tags:[`autodocs`],argTypes:x,parameters:{docs:{description:{component:b}}}},{Story:C}=u(S),w=n(`<!> <!> <!> <!> <!> <!>`,1),T=n(`<!> <!> <!> <!> <!> <!>`,1),E=n(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),y.__docgen={data:[],name:`Indicator.stories.svelte`},D=v(y,S),O=[`Default`,`FontSize`,`Safe`,`Danger`,`Warning`,`CustomIcon`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.FontSize,tags:[`svelte-csf-v5`]},j={...D.Safe,tags:[`svelte-csf-v5`]},M={...D.Danger,tags:[`svelte-csf-v5`]},N={...D.Warning,tags:[`svelte-csf-v5`]},P={...D.CustomIcon,tags:[`svelte-csf-v5`]},F={...D.LightTheme,tags:[`svelte-csf-v5`]},I={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as CustomIcon,M as Danger,I as DarkTheme,k as Default,A as FontSize,F as LightTheme,j as Safe,N as Warning,O as __namedExportsOrder,S as default,x as storyTextArgTypes};