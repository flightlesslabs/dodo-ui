import{n as e}from"./chunk-DnJy8xQt.js";import{Ft as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-iUM9DLUR.js";import{A as d,B as f,N as p,O as m,V as h,h as g,k as _,n as v,r as y,t as b,z as x}from"./create-runtime-stories-pUe1Yfz2.js";function S(e,t){l(t,!0);var n=D(),o=s(n);E(o,{name:`Default`,children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var d=i(o,2);E(d,{name:`Link Button`,args:{href:`https://www.w3schools.com/tags/tag_a.asp`,target:`_blank`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var f=i(d,2);E(f,{name:`OnClick (Actions)`,args:{onclick:e=>{let t=e.target;alert(`Button Clicked`),console.log(`Button Clicked`,t)}},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var p=i(f,2);E(p,{name:`Color`,args:{color:`safe`},children:(e,t)=>{c(),u(e,r(`Click me`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me
</Button>`}}});var m=i(p,2);E(m,{name:`Text`,args:{variant:`text`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var h=i(m,2);E(h,{name:`Outline`,args:{variant:`text`,outline:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var _=i(h,2);E(_,{name:`Size`,args:{size:`large`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var v=i(_,2);E(v,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var y=i(v,2);E(y,{name:`Submit Button`,args:{type:`submit`},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var b=i(y,2);E(b,{name:`Full Width`,args:{fullWidth:!0},children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  Click me!
</Button>`}}});var S=i(b,2);E(S,{name:`Compact`,args:{compact:!0,"aria-label":`Add item`},children:(e,t)=>{c(),u(e,r(`+`))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  +
</Button>`}}});var C=i(S,2);E(C,{name:`Light Theme`,asChild:!0,children:(e,t)=>{g(e,{type:`light`,children:(e,t)=>{x(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <Button>Click me!</Button>
</Theme>`}}}),E(i(C,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{g(e,{type:`dark`,children:(e,t)=>{x(e,{children:(e,t)=>{c(),u(e,r(`Click me!`))},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <Button>Click me!</Button>
</Theme>`}}}),u(e,n),a()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{t(),h(),y(),o(),v(),C=`
 A flexible Button component .

 \`\`\`ts
 import { Button } from '@flightlesslabs/dodo-ui';
 \`\`\`
`,w={children:{table:{category:`API`,subcategory:`Base`}},href:{control:{type:`text`},description:`Render as Anchor when provided`,table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disable interactions`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},type:{table:{category:`API`,subcategory:`Base`}},color:{control:{type:`select`},options:m,description:`Color theme token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:p,description:`Visual variant of the button`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`solid`}}},size:{control:{type:`select`},options:d,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:_,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`}},fullWidth:{control:{type:`boolean`},description:`Stretch button to full container width`,table:{category:`API`,subcategory:`Appearance`}},compact:{control:{type:`boolean`},description:`Compact spacing (icon buttons)`,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"aria-label":{control:{type:`text`},description:`Accessible label (required for icon-only buttons)`,table:{category:`API`,subcategory:`Accessibility`}}},T={component:x,tags:[`autodocs`],argTypes:w,parameters:{docs:{description:{component:C}}}},{Story:E}=f(T),D=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),S.__docgen={data:[],name:`Button.stories.svelte`},O=b(S,T),k=[`Default`,`LinkButton`,`OnClickActions`,`Color`,`Text`,`Outline`,`Size`,`Disabled`,`SubmitButton`,`FullWidth`,`Compact`,`LightTheme`,`DarkTheme`],A={...O.Default,tags:[`svelte-csf-v5`]},j={...O.LinkButton,tags:[`svelte-csf-v5`]},M={...O.OnClickActions,tags:[`svelte-csf-v5`]},N={...O.Color,tags:[`svelte-csf-v5`]},P={...O.Text,tags:[`svelte-csf-v5`]},F={...O.Outline,tags:[`svelte-csf-v5`]},I={...O.Size,tags:[`svelte-csf-v5`]},L={...O.Disabled,tags:[`svelte-csf-v5`]},R={...O.SubmitButton,tags:[`svelte-csf-v5`]},z={...O.FullWidth,tags:[`svelte-csf-v5`]},B={...O.Compact,tags:[`svelte-csf-v5`]},V={...O.LightTheme,tags:[`svelte-csf-v5`]},H={...O.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{N as Color,B as Compact,H as DarkTheme,A as Default,L as Disabled,z as FullWidth,V as LightTheme,j as LinkButton,M as OnClickActions,F as Outline,I as Size,R as SubmitButton,P as Text,k as __namedExportsOrder,T as default,w as storyButtonArgTypes};