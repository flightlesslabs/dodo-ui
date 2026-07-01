import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as n,Wt as r,dn as i,et as a,f as o,nt as s,ot as c,tn as l,wt as u}from"./iframe-CApopm_P.js";import{J as d,Q as f,T as p,Y as m,_t as h,ht as g,mt as _,n as v,q as y,r as b,t as x,vt as S}from"./create-runtime-stories-BluKH7db.js";function C(e,i){n(i,!0);var o=O(),s=u(o);D(s,{name:`Default`,children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var d=t(s,2);D(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var f=t(d,2);D(f,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{l(),a(e,c(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var m=t(f,2);D(m,{name:`Color`,args:{color:`safe`},children:(e,t)=>{l(),a(e,c(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var h=t(m,2);D(h,{name:`Text`,args:{variant:`text`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var g=t(h,2);D(g,{name:`No Background`,args:{variant:`text`,background:`none`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var v=t(g,2);D(v,{name:`Outline`,args:{variant:`text`,outline:!0},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var y=t(v,2);D(y,{name:`Size`,args:{size:`large`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var b=t(y,2);D(b,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var x=t(b,2);D(x,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var S=t(x,2);D(S,{name:`Full Width`,args:{fullWidth:!0},children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var C=t(S,2);D(C,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{l(),a(e,c(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  +
</Button>`}}});var w=t(C,2);D(w,{name:`Light Theme`,asChild:!0,children:(e,t)=>{p(e,{type:`light`,children:(e,t)=>{_(e,{children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Button>Click me!</Button>
</Theme>`}}}),D(t(w,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{p(e,{type:`dark`,children:(e,t)=>{_(e,{children:(e,t)=>{l(),a(e,c(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Button>Click me!</Button>
</Theme>`}}}),a(e,o),r()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{i(),S(),b(),o(),v(),w=`
 A flexible Button component .

 \`\`\`ts
 import { Button } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,T={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:y,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:f,description:`Visual variant of the button`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`solid`}}},background:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`subtle`}}},size:{control:{type:`select`},options:m,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:d,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},fullWidth:{control:{type:`boolean`},description:`Stretch button to full container width`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},E={component:_,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:w}}}},{Story:D}=h(E),O=s(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},k=x(C,E),A=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Text`,`NoBackground`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`FullWidth`,`Compact`,`LightTheme`,`DarkTheme`],j={...k.Default,tags:[`svelte-csf-v5`]},M={...k.LinkButton,tags:[`svelte-csf-v5`]},N={...k.OnClickActions,tags:[`svelte-csf-v5`]},P={...k.Color,tags:[`svelte-csf-v5`]},F={...k.Text,tags:[`svelte-csf-v5`]},I={...k.NoBackground,tags:[`svelte-csf-v5`]},L={...k.Outline,tags:[`svelte-csf-v5`]},R={...k.Size,tags:[`svelte-csf-v5`]},z={...k.Disabled,tags:[`svelte-csf-v5`]},B={...k.SubmitButton,tags:[`svelte-csf-v5`]},V={...k.FullWidth,tags:[`svelte-csf-v5`]},H={...k.Compact,tags:[`svelte-csf-v5`]},U={...k.LightTheme,tags:[`svelte-csf-v5`]},W={...k.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as Color,H as Compact,W as DarkTheme,j as Default,z as Disabled,V as FullWidth,U as LightTheme,M as LinkButton,I as NoBackground,N as OnClickActions,L as Outline,R as Size,B as SubmitButton,F as Text,A as __namedExportsOrder,E as default,T as storyButtonArgTypes};