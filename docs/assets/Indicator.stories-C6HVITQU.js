import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,Wt as r,dn as i,et as a,f as o,nt as s,wt as c}from"./iframe-e19cdD8v.js";import{L as l,R as u,T as d,ht as f,i as p,mt as m,n as h,q as g,r as _,t as v}from"./create-runtime-stories-aVG2uOFc.js";function y(e,i){n(i,!0);var o=E(),s=c(o);C(s,{name:`Default`,parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var u=t(s,2);C(u,{name:`Font Size`,args:{"font-size":`2em`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var f=t(u,2);C(f,{name:`Safe`,args:{color:`safe`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var m=t(f,2);C(m,{name:`Danger`,args:{color:`danger`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var h=t(m,2);C(h,{name:`Warning`,args:{color:`warning`},parameters:{__svelteCsf:{rawCode:`<Indicator {...args} />`}}});var g=t(h,2);C(g,{name:`Custom Icon`,asChild:!0,children:(e,t)=>{p(e,{color:`danger`,customIndicatorIcon:e=>{l(e,{icon:`material-symbols:square`})},$$slots:{customIndicatorIcon:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Indicator color="danger">
  {#snippet customIndicatorIcon()}
    <Icon icon="material-symbols:square" />
  {/snippet}
</Indicator>`}}});var _=t(g,2);C(_,{name:`Light Theme`,asChild:!0,children:(e,n)=>{d(e,{type:`light`,children:(e,n)=>{var r=w(),i=c(r);p(i,{});var o=t(i,2);p(o,{color:`safe`});var s=t(o,2);p(s,{color:`warning`});var l=t(s,2);p(l,{color:`danger`});var u=t(l,2);p(u,{color:`primary`}),p(t(u,2),{color:`secondary`}),a(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),C(t(_,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,n)=>{d(e,{type:`dark`,children:(e,n)=>{var r=T(),i=c(r);p(i,{});var o=t(i,2);p(o,{color:`safe`});var s=t(o,2);p(s,{color:`warning`});var l=t(s,2);p(l,{color:`danger`});var u=t(l,2);p(u,{color:`primary`}),p(t(u,2),{color:`secondary`}),a(e,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Indicator />
  <Indicator color="safe" />
  <Indicator color="warning" />
  <Indicator color="danger" />
  <Indicator color="primary" />
  <Indicator color="secondary" />
</Theme>`}}}),a(e,o),r()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{i(),f(),_(),u(),o(),h(),b=`
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,x={class:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:g,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},"font-size":{table:{category:`API`,subcategory:`Appearance`}},customIndicatorIcon:{table:{category:`API`,subcategory:`Slots`}}},S={component:p,tags:[`autodocs`],argTypes:x,parameters:{docs:{description:{component:b}}}},{Story:C}=m(S),w=s(`<!> <!> <!> <!> <!> <!>`,1),T=s(`<!> <!> <!> <!> <!> <!>`,1),E=s(`<!> <!> <!> <!> <!> <!> <!> <!>`,1),y.__docgen={data:[],name:`Indicator.stories.svelte`},D=v(y,S),O=[`Default`,`FontSize`,`Safe`,`Danger`,`Warning`,`CustomIcon`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.FontSize,tags:[`svelte-csf-v5`]},j={...D.Safe,tags:[`svelte-csf-v5`]},M={...D.Danger,tags:[`svelte-csf-v5`]},N={...D.Warning,tags:[`svelte-csf-v5`]},P={...D.CustomIcon,tags:[`svelte-csf-v5`]},F={...D.LightTheme,tags:[`svelte-csf-v5`]},I={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as CustomIcon,M as Danger,I as DarkTheme,k as Default,A as FontSize,F as LightTheme,j as Safe,N as Warning,O as __namedExportsOrder,S as default,x as storyTextArgTypes};