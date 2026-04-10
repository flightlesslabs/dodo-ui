import{n as e}from"./chunk-BneVvdWh.js";import{J as t,dt as n,j as r,k as i,q as a,t as o,ut as s,wt as c}from"./client-HqitRhUI.js";import{i as l,n as u,r as d,t as f}from"./create-runtime-stories-DBs3Ve1l.js";import{n as p,t as m}from"./size-CEbo1wGE.js";import{n as h,r as g}from"./roundness-Bhv_yVp6.js";import{n as _,t as v}from"./Theme-DrolsbeQ.js";import{n as y,t as b}from"./InputEnclosure-Dv4l1nsA.js";function x(e,r){n(r,!0);var o=R(),c=a(o);T(c,{name:`Default`,children:(e,t)=>{i(e,E())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var l=t(c,2);T(l,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{i(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var u=t(l,2);T(u,{name:`Focused`,args:{focused:!0},children:(e,t)=>{i(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var d=t(u,2);T(d,{name:`Error`,args:{error:!0},children:(e,t)=>{i(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var f=t(d,2);T(f,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{i(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var p=t(f,2);T(p,{name:`Large`,args:{size:`large`},children:(e,t)=>{i(e,j())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var m=t(p,2);T(m,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{b(e,{before:e=>{i(e,M())},children:(e,t)=>{i(e,N())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var h=t(m,2);T(h,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{b(e,{after:e=>{i(e,P())},children:(e,t)=>{i(e,F())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var g=t(h,2);T(g,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{b(e,{children:(e,t)=>{i(e,I())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),T(t(g,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{b(e,{children:(e,t)=>{i(e,L())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),i(e,o),s()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{c(),l(),y(),p(),g(),_(),o(),u(),S=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,C={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:m,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:h,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}}},w={component:b,tags:[`autodocs`],argTypes:C,parameters:{docs:{description:{component:S}}}},{Story:T}=d(w),E=r(`<input placeholder="Type something…" class="InputBox"/>`),D=r(`<input placeholder="No outline…" class="InputBox"/>`),O=r(`<input placeholder="Focused state…" class="InputBox"/>`),k=r(`<input placeholder="Error state…" class="InputBox"/>`),A=r(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),j=r(`<input placeholder="Large input…" class="InputBox"/>`),M=r(`<span style="color: #888; padding-left: 8px">🔍</span>`),N=r(`<input placeholder="Search…" class="InputBox"/>`),P=r(`<span style="color: #888; padding-right: 8px">.com</span>`),F=r(`<input placeholder="Website" class="InputBox"/>`),I=r(`<input placeholder="Type something…" class="InputBox"/>`),L=r(`<input placeholder="Type something…" class="InputBox"/>`),R=r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`InputEnclosure.stories.svelte`},z=f(x,w),B=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`LightTheme`,`DarkTheme`],V={...z.Default,tags:[`svelte-csf-v5`]},H={...z.NoOutline,tags:[`svelte-csf-v5`]},U={...z.Focused,tags:[`svelte-csf-v5`]},W={...z.Error,tags:[`svelte-csf-v5`]},G={...z.Disabled,tags:[`svelte-csf-v5`]},K={...z.Large,tags:[`svelte-csf-v5`]},q={...z.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},J={...z.WithAfterSuffixText,tags:[`svelte-csf-v5`]},Y={...z.LightTheme,tags:[`svelte-csf-v5`]},X={...z.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{X as DarkTheme,V as Default,G as Disabled,W as Error,U as Focused,K as Large,Y as LightTheme,H as NoOutline,J as WithAfterSuffixText,q as WithBeforeIconPrefix,B as __namedExportsOrder,w as default,C as storyInputEnclosureArgTypes};