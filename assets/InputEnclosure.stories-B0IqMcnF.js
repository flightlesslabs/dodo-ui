import{n as e}from"./chunk-DnJy8xQt.js";import{Mt as t,V as n,bt as r,f as i,it as a,rt as o,yt as s,z as c}from"./iframe-C-3JwjRA.js";import{N as l,P as u,b as d,j as f,n as p,r as m,t as h,w as g,y as _}from"./create-runtime-stories-DnJyhKHE.js";function v(e,t){r(t,!0);var n=F(),i=o(n);S(i,{name:`Default`,children:(e,t)=>{c(e,C())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var l=a(i,2);S(l,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{c(e,w())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var u=a(l,2);S(u,{name:`Focused`,args:{focused:!0},children:(e,t)=>{c(e,T())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var d=a(u,2);S(d,{name:`Error`,args:{error:!0},children:(e,t)=>{c(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var p=a(d,2);S(p,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{c(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var m=a(p,2);S(m,{name:`Large`,args:{size:`large`},children:(e,t)=>{c(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var h=a(m,2);S(h,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{f(e,{before:e=>{c(e,k())},children:(e,t)=>{c(e,A())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var _=a(h,2);S(_,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{f(e,{after:e=>{c(e,j())},children:(e,t)=>{c(e,M())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var v=a(_,2);S(v,{name:`Light Theme`,asChild:!0,children:(e,t)=>{g(e,{type:`light`,children:(e,t)=>{f(e,{children:(e,t)=>{c(e,N())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),S(a(v,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{g(e,{type:`dark`,children:(e,t)=>{f(e,{children:(e,t)=>{c(e,P())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),c(e,n),s()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{t(),u(),m(),i(),p(),y=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,b={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:d,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:_,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},x={component:f,tags:[`autodocs`],argTypes:b,parameters:{docs:{description:{component:y}}}},{Story:S}=l(x),C=n(`<input placeholder="Type something…" class="InputBox"/>`),w=n(`<input placeholder="No outline…" class="InputBox"/>`),T=n(`<input placeholder="Focused state…" class="InputBox"/>`),E=n(`<input placeholder="Error state…" class="InputBox"/>`),D=n(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),O=n(`<input placeholder="Large input…" class="InputBox"/>`),k=n(`<span style="color: #888; padding-left: 8px">🔍</span>`),A=n(`<input placeholder="Search…" class="InputBox"/>`),j=n(`<span style="color: #888; padding-right: 8px">.com</span>`),M=n(`<input placeholder="Website" class="InputBox"/>`),N=n(`<input placeholder="Type something…" class="InputBox"/>`),P=n(`<input placeholder="Type something…" class="InputBox"/>`),F=n(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),v.__docgen={data:[],name:`InputEnclosure.stories.svelte`},I=h(v,x),L=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.NoOutline,tags:[`svelte-csf-v5`]},B={...I.Focused,tags:[`svelte-csf-v5`]},V={...I.Error,tags:[`svelte-csf-v5`]},H={...I.Disabled,tags:[`svelte-csf-v5`]},U={...I.Large,tags:[`svelte-csf-v5`]},W={...I.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},G={...I.WithAfterSuffixText,tags:[`svelte-csf-v5`]},K={...I.LightTheme,tags:[`svelte-csf-v5`]},q={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{q as DarkTheme,R as Default,H as Disabled,V as Error,B as Focused,U as Large,K as LightTheme,z as NoOutline,G as WithAfterSuffixText,W as WithBeforeIconPrefix,L as __namedExportsOrder,x as default,b as storyInputEnclosureArgTypes};