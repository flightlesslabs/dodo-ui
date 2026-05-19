import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-Cvi8vf-1.js";import{G as d,I as f,K as p,M as m,N as h,W as g,g as _,j as v,n as y,q as b,r as x,t as S}from"./create-runtime-stories-1j-U1JW1.js";function C(e,t){l(t,!0);var n=O(),o=s(n);D(o,{name:`Default`,children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var d=i(o,2);D(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var f=i(d,2);D(f,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var p=i(f,2);D(p,{name:`Color`,args:{color:`safe`},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var m=i(p,2);D(m,{name:`Text`,args:{variant:`text`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var h=i(m,2);D(h,{name:`No Background`,args:{variant:`text`,background:`none`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var v=i(h,2);D(v,{name:`Outline`,args:{variant:`text`,outline:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var y=i(v,2);D(y,{name:`Size`,args:{size:`large`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var b=i(y,2);D(b,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var x=i(b,2);D(x,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var S=i(x,2);D(S,{name:`Full Width`,args:{fullWidth:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var C=i(S,2);D(C,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{c(),u(e,r(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  +
</Button>`}}});var w=i(C,2);D(w,{name:`Light Theme`,asChild:!0,children:(e,t)=>{_(e,{type:`light`,children:(e,t)=>{g(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Button>Click me!</Button>
</Theme>`}}}),D(i(w,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{_(e,{type:`dark`,children:(e,t)=>{g(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Button>Click me!</Button>
</Theme>`}}}),u(e,n),a()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{t(),b(),x(),o(),y(),w=`
 A flexible Button component .

 \`\`\`ts
 import { Button } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,T={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:v,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:f,description:`Visual variant of the button`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`solid`}}},background:{control:{type:`select`},options:d,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`subtle`}}},size:{control:{type:`select`},options:h,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:m,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},fullWidth:{control:{type:`boolean`},description:`Stretch button to full container width`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},E={component:g,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:w}}}},{Story:D}=p(E),O=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},k=S(C,E),A=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Text`,`NoBackground`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`FullWidth`,`Compact`,`LightTheme`,`DarkTheme`],j={...k.Default,tags:[`svelte-csf-v5`]},M={...k.LinkButton,tags:[`svelte-csf-v5`]},N={...k.OnClickActions,tags:[`svelte-csf-v5`]},P={...k.Color,tags:[`svelte-csf-v5`]},F={...k.Text,tags:[`svelte-csf-v5`]},I={...k.NoBackground,tags:[`svelte-csf-v5`]},L={...k.Outline,tags:[`svelte-csf-v5`]},R={...k.Size,tags:[`svelte-csf-v5`]},z={...k.Disabled,tags:[`svelte-csf-v5`]},B={...k.SubmitButton,tags:[`svelte-csf-v5`]},V={...k.FullWidth,tags:[`svelte-csf-v5`]},H={...k.Compact,tags:[`svelte-csf-v5`]},U={...k.LightTheme,tags:[`svelte-csf-v5`]},W={...k.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as Color,H as Compact,W as DarkTheme,j as Default,z as Disabled,V as FullWidth,U as LightTheme,M as LinkButton,I as NoBackground,N as OnClickActions,L as Outline,R as Size,B as SubmitButton,F as Text,A as __namedExportsOrder,E as default,T as storyButtonArgTypes};