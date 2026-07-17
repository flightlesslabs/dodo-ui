import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as t,St as n,Wt as r,dn as i,et as a,f as o,nt as s,wt as c}from"./iframe-Boim5DH3.js";import{G as l,T as u,gt as d,ht as f,i as p,n as m,r as h,t as g}from"./create-runtime-stories-D_3FAyMc.js";import{n as _,t as v}from"./Icon-kAzk7ZmU.js";function y(e,i){t(i,!0);var o=T(),s=n(o);C(s,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var l=c(s,2);C(l,{name:`Font Size`,args:{"font-size":`2em`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var d=c(l,2);C(d,{name:`Safe`,args:{color:`safe`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var f=c(d,2);C(f,{name:`Danger`,args:{color:`danger`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var m=c(f,2);C(m,{name:`Warning`,args:{color:`warning`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var h=c(m,2);C(h,{name:`Custom Icon`,asChild:!0,children:(e,t)=>{p(e,{color:`danger`,customIndicatorIcon:e=>{v(e,{icon:`material-symbols:square`})},$$slots:{customIndicatorIcon:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Indicator color="danger">
  {#snippet customIndicatorIcon()}
    <Icon icon="material-symbols:square" />
  {/snippet}
</Indicator>`}}});var g=c(h,2);C(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{u(e,{type:`light`,children:(e,t)=>{var r=w(),i=n(r);p(i,{});var o=c(i,2);p(o,{color:`safe`});var s=c(o,2);p(s,{color:`warning`});var l=c(s,2);p(l,{color:`danger`});var u=c(l,2);p(u,{color:`primary`}),p(c(u,2),{color:`secondary`}),a(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}});var _=c(g,2);C(_,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{u(e,{type:`dark`,children:(e,t)=>{var r=w(),i=n(r);p(i,{});var o=c(i,2);p(o,{color:`safe`});var s=c(o,2);p(s,{color:`warning`});var l=c(s,2);p(l,{color:`danger`});var u=c(l,2);p(u,{color:`primary`}),p(c(u,2),{color:`secondary`}),a(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),a(e,o),r()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{i(),d(),h(),_(),o(),m(),b=`
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,x={class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:l,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},"font-size":{table:{category:`API`,subcategory:`Appearance`}},customIndicatorIcon:{table:{category:`API`,subcategory:`Slots`}}},S={component:p,tags:[`autodocs`],argTypes:x,parameters:{docs:{description:{component:b}}}},{Story:C}=f(S),w=s(`<!> <!> <!> <!> <!> <!>`,1),T=s(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),y.__docgen={data:[],name:`Indicator.stories.svelte`},E=g(y,S),D=[`Default`,`FontSize`,`Safe`,`Danger`,`Warning`,`CustomIcon`,`LightTheme`,`DarkTheme`],O={...E.Default,tags:[`svelte-csf-v5`]},k={...E.FontSize,tags:[`svelte-csf-v5`]},A={...E.Safe,tags:[`svelte-csf-v5`]},j={...E.Danger,tags:[`svelte-csf-v5`]},M={...E.Warning,tags:[`svelte-csf-v5`]},N={...E.CustomIcon,tags:[`svelte-csf-v5`]},P={...E.LightTheme,tags:[`svelte-csf-v5`]},F={...E.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as CustomIcon,j as Danger,F as DarkTheme,O as Default,k as FontSize,P as LightTheme,A as Safe,M as Warning,D as __namedExportsOrder,S as default,x as storyTextArgTypes};