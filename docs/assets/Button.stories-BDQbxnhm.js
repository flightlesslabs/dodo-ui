import{i as e}from"./preload-helper-B51ZT_On.js";import{$t as t,Ht as n,St as r,Ut as i,et as a,f as o,ln as s,nt as c,ot as l,wt as u}from"./iframe-3OT3fdJ0.js";import{J as d,Q as f,T as p,Y as m,dt as h,ft as g,ht as _,mt as v,n as y,q as b,r as x,t as S}from"./create-runtime-stories-CYXmn-qB.js";function C(e,o){i(o,!0);var s=O(),c=r(s);D(c,{name:`Default`,children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var d=u(c,2);D(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var f=u(d,2);D(f,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,n)=>{t(),a(e,l(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var m=u(f,2);D(m,{name:`Color`,args:{color:`safe`},children:(e,n)=>{t(),a(e,l(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var g=u(m,2);D(g,{name:`Text`,args:{variant:`text`},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var _=u(g,2);D(_,{name:`No Background`,args:{variant:`text`,background:`none`},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var v=u(_,2);D(v,{name:`Outline`,args:{variant:`text`,outline:!0},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var y=u(v,2);D(y,{name:`Size`,args:{size:`large`},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var b=u(y,2);D(b,{name:`Disabled`,args:{disabled:!0},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var x=u(b,2);D(x,{name:`Submit Button`,args:{type:`submit`},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var S=u(x,2);D(S,{name:`Full Width`,args:{fullWidth:!0},children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var C=u(S,2);D(C,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,n)=>{t(),a(e,l(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  +
</Button>`}}});var w=u(C,2);D(w,{name:`Light Theme`,asChild:!0,children:(e,n)=>{p(e,{type:`light`,children:(e,n)=>{h(e,{children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Button>Click me!</Button>
</Theme>`}}}),D(u(w,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,n)=>{p(e,{type:`dark`,children:(e,n)=>{h(e,{children:(e,n)=>{t(),a(e,l(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Button>Click me!</Button>
</Theme>`}}}),a(e,s),n()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{s(),_(),x(),o(),y(),w=`
 A flexible Button component .

 \`\`\`ts
 import { Button } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,T={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:b,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:f,description:`Visual variant of the button`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`solid`}}},background:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`subtle`}}},size:{control:{type:`select`},options:m,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:d,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},fullWidth:{control:{type:`boolean`},description:`Stretch button to full container width`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},E={component:h,tags:[`autodocs`],argTypes:T,parameters:{docs:{description:{component:w}}}},{Story:D}=v(E),O=c(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),C.__docgen={data:[],name:`Button.stories.svelte`},k=S(C,E),A=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Text`,`NoBackground`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`FullWidth`,`Compact`,`LightTheme`,`DarkTheme`],j={...k.Default,tags:[`svelte-csf-v5`]},M={...k.LinkButton,tags:[`svelte-csf-v5`]},N={...k.OnClickActions,tags:[`svelte-csf-v5`]},P={...k.Color,tags:[`svelte-csf-v5`]},F={...k.Text,tags:[`svelte-csf-v5`]},I={...k.NoBackground,tags:[`svelte-csf-v5`]},L={...k.Outline,tags:[`svelte-csf-v5`]},R={...k.Size,tags:[`svelte-csf-v5`]},z={...k.Disabled,tags:[`svelte-csf-v5`]},B={...k.SubmitButton,tags:[`svelte-csf-v5`]},V={...k.FullWidth,tags:[`svelte-csf-v5`]},H={...k.Compact,tags:[`svelte-csf-v5`]},U={...k.LightTheme,tags:[`svelte-csf-v5`]},W={...k.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{P as Color,H as Compact,W as DarkTheme,j as Default,z as Disabled,V as FullWidth,U as LightTheme,M as LinkButton,I as NoBackground,N as OnClickActions,L as Outline,R as Size,B as SubmitButton,F as Text,A as __namedExportsOrder,E as default,T as storyButtonArgTypes};