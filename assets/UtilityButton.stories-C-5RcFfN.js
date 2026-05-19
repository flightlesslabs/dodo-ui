import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-JnVjh8xl.js";import{K as d,M as f,N as p,g as m,j as h,n as g,q as _,r as v,t as y,z as b}from"./create-runtime-stories-B3SB7HIJ.js";function x(e,t){l(t,!0);var n=E(),o=s(n);T(o,{name:`Default`,children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var d=i(o,2);T(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var f=i(d,2);T(f,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var p=i(f,2);T(p,{name:`Color`,args:{color:`safe`},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var h=i(p,2);T(h,{name:`Outline`,args:{outline:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var g=i(h,2);T(g,{name:`Size`,args:{size:`large`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var _=i(g,2);T(_,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var v=i(_,2);T(v,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var y=i(v,2);T(y,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{c(),u(e,r(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  +
</UtilityButton>`}}});var x=i(y,2);T(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{m(e,{type:`light`,children:(e,t)=>{b(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),T(i(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{m(e,{type:`dark`,children:(e,t)=>{b(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),u(e,n),a()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{t(),_(),v(),o(),g(),S=`
 A flexible small sized button component based.

 \`\`\`ts
 import { UtilityButton } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,C={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:h,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},size:{control:{type:`select`},options:p,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:f,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},w={component:b,tags:[`autodocs`],argTypes:C,parameters:{docs:{description:{component:S}}}},{Story:T}=d(w),E=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`UtilityButton.stories.svelte`},D=y(x,w),O=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`Compact`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.LinkButton,tags:[`svelte-csf-v5`]},j={...D.OnClickActions,tags:[`svelte-csf-v5`]},M={...D.Color,tags:[`svelte-csf-v5`]},N={...D.Outline,tags:[`svelte-csf-v5`]},P={...D.Size,tags:[`svelte-csf-v5`]},F={...D.Disabled,tags:[`svelte-csf-v5`]},I={...D.SubmitButton,tags:[`svelte-csf-v5`]},L={...D.Compact,tags:[`svelte-csf-v5`]},R={...D.LightTheme,tags:[`svelte-csf-v5`]},z={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{M as Color,L as Compact,z as DarkTheme,k as Default,F as Disabled,R as LightTheme,A as LinkButton,j as OnClickActions,N as Outline,P as Size,I as SubmitButton,O as __namedExportsOrder,w as default,C as storyUtilityButtonArgTypes};