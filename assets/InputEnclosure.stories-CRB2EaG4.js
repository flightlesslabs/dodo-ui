import{n as e}from"./chunk-BneVvdWh.js";import{A as t,Ct as n,K as r,O as i,lt as a,q as o,t as s,ut as c}from"./client-Bd_pqFlz.js";import{S as l,at as u,c as d,it as f,n as p,nt as m,r as h,t as g,u as _}from"./create-runtime-stories-BBq5Fw2W.js";function v(e,t){c(t,!0);var n=F(),s=r(n);S(s,{name:`Default`,children:(e,t)=>{i(e,C())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var u=o(s,2);S(u,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{i(e,w())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var d=o(u,2);S(d,{name:`Focused`,args:{focused:!0},children:(e,t)=>{i(e,T())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var f=o(d,2);S(f,{name:`Error`,args:{error:!0},children:(e,t)=>{i(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var p=o(f,2);S(p,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{i(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var h=o(p,2);S(h,{name:`Large`,args:{size:`large`},children:(e,t)=>{i(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var g=o(h,2);S(g,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{m(e,{before:e=>{i(e,k())},children:(e,t)=>{i(e,A())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var _=o(g,2);S(_,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{m(e,{after:e=>{i(e,j())},children:(e,t)=>{i(e,M())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var v=o(_,2);S(v,{name:`Light Theme`,asChild:!0,children:(e,t)=>{l(e,{type:`light`,children:(e,t)=>{m(e,{children:(e,t)=>{i(e,N())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),S(o(v,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{l(e,{type:`dark`,children:(e,t)=>{m(e,{children:(e,t)=>{i(e,P())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),i(e,n),a()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{n(),u(),h(),s(),p(),y=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,b={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:d,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:_,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},x={component:m,tags:[`autodocs`],argTypes:b,parameters:{docs:{description:{component:y}}}},{Story:S}=f(x),C=t(`<input placeholder="Type something…" class="InputBox"/>`),w=t(`<input placeholder="No outline…" class="InputBox"/>`),T=t(`<input placeholder="Focused state…" class="InputBox"/>`),E=t(`<input placeholder="Error state…" class="InputBox"/>`),D=t(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),O=t(`<input placeholder="Large input…" class="InputBox"/>`),k=t(`<span style="color: #888; padding-left: 8px">🔍</span>`),A=t(`<input placeholder="Search…" class="InputBox"/>`),j=t(`<span style="color: #888; padding-right: 8px">.com</span>`),M=t(`<input placeholder="Website" class="InputBox"/>`),N=t(`<input placeholder="Type something…" class="InputBox"/>`),P=t(`<input placeholder="Type something…" class="InputBox"/>`),F=t(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),v.__docgen={data:[],name:`InputEnclosure.stories.svelte`},I=g(v,x),L=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`LightTheme`,`DarkTheme`],R={...I.Default,tags:[`svelte-csf-v5`]},z={...I.NoOutline,tags:[`svelte-csf-v5`]},B={...I.Focused,tags:[`svelte-csf-v5`]},V={...I.Error,tags:[`svelte-csf-v5`]},H={...I.Disabled,tags:[`svelte-csf-v5`]},U={...I.Large,tags:[`svelte-csf-v5`]},W={...I.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},G={...I.WithAfterSuffixText,tags:[`svelte-csf-v5`]},K={...I.LightTheme,tags:[`svelte-csf-v5`]},q={...I.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{q as DarkTheme,R as Default,H as Disabled,V as Error,B as Focused,U as Large,K as LightTheme,z as NoOutline,G as WithAfterSuffixText,W as WithBeforeIconPrefix,L as __namedExportsOrder,x as default,b as storyInputEnclosureArgTypes};