import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as n,Wt as r,dn as i,et as a,f as o,nt as s,ot as c,tn as l,wt as u}from"./iframe-CApopm_P.js";import{J as d,T as f,Y as p,_t as m,n as h,q as g,r as _,t as v,tt as y,vt as b}from"./create-runtime-stories-BluKH7db.js";function x(e,i){n(i,!0);var o=E(),s=u(o);T(s,{name:`Default`,children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var d=t(s,2);T(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var p=t(d,2);T(p,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{l(),a(e,c(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var m=t(p,2);T(m,{name:`Color`,args:{color:`safe`},children:(e,t)=>{l(),a(e,c(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me
</UtilityButton>`}}});var h=t(m,2);T(h,{name:`Outline`,args:{outline:!0},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var g=t(h,2);T(g,{name:`Size`,args:{size:`large`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var _=t(g,2);T(_,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var v=t(_,2);T(v,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  Click me!
</UtilityButton>`}}});var b=t(v,2);T(b,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{l(),a(e,c(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<UtilityButton {...args}>
  +
</UtilityButton>`}}});var x=t(b,2);T(x,{name:`Light Theme`,asChild:!0,children:(e,t)=>{f(e,{type:`light`,children:(e,t)=>{y(e,{children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),T(t(x,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{f(e,{type:`dark`,children:(e,t)=>{y(e,{children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <UtilityButton>Click me!</UtilityButton>
</Theme>`}}}),a(e,o),r()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{i(),b(),_(),o(),h(),S=`
 A flexible small sized button component based.

 \`\`\`ts
 import { UtilityButton } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,C={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:g,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},size:{control:{type:`select`},options:p,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:d,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},w={component:y,tags:[`autodocs`],argTypes:C,parameters:{docs:{description:{component:S}}}},{Story:T}=m(w),E=s(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`UtilityButton.stories.svelte`},D=v(x,w),O=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`Compact`,`LightTheme`,`DarkTheme`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.LinkButton,tags:[`svelte-csf-v5`]},j={...D.OnClickActions,tags:[`svelte-csf-v5`]},M={...D.Color,tags:[`svelte-csf-v5`]},N={...D.Outline,tags:[`svelte-csf-v5`]},P={...D.Size,tags:[`svelte-csf-v5`]},F={...D.Disabled,tags:[`svelte-csf-v5`]},I={...D.SubmitButton,tags:[`svelte-csf-v5`]},L={...D.Compact,tags:[`svelte-csf-v5`]},R={...D.LightTheme,tags:[`svelte-csf-v5`]},z={...D.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{M as Color,L as Compact,z as DarkTheme,k as Default,F as Disabled,R as LightTheme,A as LinkButton,j as OnClickActions,N as Outline,P as Size,I as SubmitButton,O as __namedExportsOrder,w as default,C as storyUtilityButtonArgTypes};