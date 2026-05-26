import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,St as n,Ut as r,et as i,f as a,ln as o,nt as s,wt as c}from"./iframe-CP3e54cT.js";import{L as l,R as u,T as d,ht as f,i as p,mt as m,n as h,q as g,r as _,t as v}from"./create-runtime-stories-K5EB4XPM.js";function y(e,a){r(a,!0);var o=E(),s=n(o);C(s,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var u=c(s,2);C(u,{name:`Font Size`,args:{"font-size":`2em`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var f=c(u,2);C(f,{name:`Safe`,args:{color:`safe`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var m=c(f,2);C(m,{name:`Danger`,args:{color:`danger`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var h=c(m,2);C(h,{name:`Warning`,args:{color:`warning`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var g=c(h,2);C(g,{name:`Custom Icon`,asChild:!0,children:(e,t)=>{p(e,{color:`danger`,customIndicatorIcon:e=>{l(e,{icon:`material-symbols:square`})},$$slots:{customIndicatorIcon:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Indicator color="danger">
  {#snippet customIndicatorIcon()}
    <Icon icon="material-symbols:square" />
  {/snippet}
</Indicator>`}}});var _=c(g,2);C(_,{name:`Light Theme`,asChild:!0,children:(e,t)=>{d(e,{type:`light`,children:(e,t)=>{var r=w(),a=n(r);p(a,{});var o=c(a,2);p(o,{color:`safe`});var s=c(o,2);p(s,{color:`warning`});var l=c(s,2);p(l,{color:`danger`});var u=c(l,2);p(u,{color:`primary`}),p(c(u,2),{color:`secondary`}),i(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),C(c(_,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{d(e,{type:`dark`,children:(e,t)=>{var r=T(),a=n(r);p(a,{});var o=c(a,2);p(o,{color:`safe`});var s=c(o,2);p(s,{color:`warning`});var l=c(s,2);p(l,{color:`danger`});var u=c(l,2);p(u,{color:`primary`}),p(c(u,2),{color:`secondary`}),i(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),i(e,o),t()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{o(),f(),_(),u(),a(),h(),b=`
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,x={class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:g,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},"font-size":{table:{category:`API`,subcategory:`Appearance`}},customIndicatorIcon:{table:{category:`API`,subcategory:`Slots`}}},S={component:p,tags:[`autodocs`],argTypes:x,parameters:{docs:{description:{component:b}}}},{Story:C}=m(S),w=s(`<!> <!> <!> <!> <!> <!>`,1),T=s(`<!> <!> <!> <!> <!> <!>`,1),E=s(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),y.__docgen={data:[],name:`Indicator.stories.svelte`},D=v(y,S),O=[`Default`,`FontSize`,`Safe`,`Danger`,`Warning`,`CustomIcon`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.FontSize,tags:[`svelte-csf-v5`]},j={...D.Safe,tags:[`svelte-csf-v5`]},M={...D.Danger,tags:[`svelte-csf-v5`]},N={...D.Warning,tags:[`svelte-csf-v5`]},P={...D.CustomIcon,tags:[`svelte-csf-v5`]},F={...D.LightTheme,tags:[`svelte-csf-v5`]},I={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as CustomIcon,M as Danger,I as DarkTheme,k as Default,A as FontSize,F as LightTheme,j as Safe,N as Warning,O as __namedExportsOrder,S as default,x as storyTextArgTypes};