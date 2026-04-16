import{n as e}from"./chunk-BneVvdWh.js";import{A as t,Ct as n,K as r,N as i,O as a,lt as o,q as s,t as c,ut as l,vt as u}from"./client-r4VzY-6C.js";import{C as d,E as f,M as p,N as m,_ as h,n as g,r as _,t as v,v as y,y as b}from"./create-runtime-stories-BC-k6Egj.js";function x(e,t){l(t,!0);var n=E(),c=r(n);T(c,{name:`Default`,children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var p=s(c,2);T(p,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var m=s(p,2);T(m,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{u(),a(e,i(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var h=s(m,2);T(h,{name:`Color`,args:{color:`safe`},children:(e,t)=>{u(),a(e,i(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var g=s(h,2);T(g,{name:`Outline`,args:{outline:!0},children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var _=s(g,2);T(_,{name:`Size`,args:{size:`large`},children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var v=s(_,2);T(v,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var y=s(v,2);T(y,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var b=s(y,2);T(b,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{u(),a(e,i(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  +
</UtilityButton>`}}});var x=s(b,2);T(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{d(e,{type:`light`,children:(e,t)=>{f(e,{children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),T(s(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{d(e,{type:`dark`,children:(e,t)=>{f(e,{children:(e,t)=>{u(),a(e,i(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),a(e,n),o()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{n(),m(),_(),c(),g(),S=`
 A flexible small sized button component based.

 \`\`\`ts
 import { UtilityButton } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,C={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:h,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},size:{control:{type:`select`},options:b,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:y,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},w={component:f,tags:[`autodocs`],argTypes:C,parameters:{docs:{description:{component:S}}}},{Story:T}=p(w),E=t(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`UtilityButton.stories.svelte`},D=v(x,w),O=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`Compact`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.LinkButton,tags:[`svelte-csf-v5`]},j={...D.OnClickActions,tags:[`svelte-csf-v5`]},M={...D.Color,tags:[`svelte-csf-v5`]},N={...D.Outline,tags:[`svelte-csf-v5`]},P={...D.Size,tags:[`svelte-csf-v5`]},F={...D.Disabled,tags:[`svelte-csf-v5`]},I={...D.SubmitButton,tags:[`svelte-csf-v5`]},L={...D.Compact,tags:[`svelte-csf-v5`]},R={...D.LightTheme,tags:[`svelte-csf-v5`]},z={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{M as Color,L as Compact,z as DarkTheme,k as Default,F as Disabled,R as LightTheme,A as LinkButton,j as OnClickActions,N as Outline,P as Size,I as SubmitButton,O as __namedExportsOrder,w as default,C as storyUtilityButtonArgTypes};