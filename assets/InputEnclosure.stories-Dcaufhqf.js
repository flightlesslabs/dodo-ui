import{n as e}from"./chunk-DnJy8xQt.js";import{Mt as t,Ot as n,V as r,W as i,bt as a,f as o,it as s,rt as ee,yt as c,z as l}from"./iframe-PS8e3rka.js";import{D as u,N as d,P as f,b as p,j as m,n as h,r as g,t as _,w as v,y}from"./create-runtime-stories-CQklLuHl.js";function b(e,t){a(t,!0);var r=z(),o=ee(r);w(o,{name:`Default`,children:(e,t)=>{l(e,T())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var d=s(o,2);w(d,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{l(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var f=s(d,2);w(f,{name:`Focused`,args:{focused:!0},children:(e,t)=>{l(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var p=s(f,2);w(p,{name:`Error`,args:{error:!0},children:(e,t)=>{l(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var h=s(p,2);w(h,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{l(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var g=s(h,2);w(g,{name:`Large`,args:{size:`large`},children:(e,t)=>{l(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var _=s(g,2);w(_,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{m(e,{before:e=>{l(e,j())},children:(e,t)=>{l(e,M())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var y=s(_,2);w(y,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{m(e,{after:e=>{l(e,N())},children:(e,t)=>{l(e,P())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var b=s(y,2);w(b,{name:`Affix Spacing Before`,asChild:!0,children:(e,t)=>{m(e,{affixSpacingBefore:`tight`,before:e=>{u(e,{compact:!0,roundness:`full`,children:(e,t)=>{n(),l(e,i(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{l(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var x=s(b,2);w(x,{name:`Affix Spacing After`,asChild:!0,children:(e,t)=>{m(e,{affixSpacingAfter:`tight`,after:e=>{u(e,{compact:!0,roundness:`full`,children:(e,t)=>{n(),l(e,i(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{l(e,I())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var S=s(x,2);w(S,{name:`Light Theme`,asChild:!0,children:(e,t)=>{v(e,{type:`light`,children:(e,t)=>{m(e,{children:(e,t)=>{l(e,L())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),w(s(S,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{v(e,{type:`dark`,children:(e,t)=>{m(e,{children:(e,t)=>{l(e,R())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),l(e,r),c()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),f(),g(),o(),h(),x=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,S={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:p,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:y,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},C={component:m,tags:[`autodocs`],argTypes:S,parameters:{docs:{description:{component:x}}}},{Story:w}=d(C),T=r(`<input placeholder="Type something…" class="InputBox"/>`),E=r(`<input placeholder="No outline…" class="InputBox"/>`),D=r(`<input placeholder="Focused state…" class="InputBox"/>`),O=r(`<input placeholder="Error state…" class="InputBox"/>`),k=r(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),A=r(`<input placeholder="Large input…" class="InputBox"/>`),j=r(`<span style="color: #888; padding-left: 8px">🔍</span>`),M=r(`<input placeholder="Search…" class="InputBox"/>`),N=r(`<span style="color: #888; padding-right: 8px">.com</span>`),P=r(`<input placeholder="Website" class="InputBox"/>`),F=r(`<input placeholder="Search…" class="InputBox"/>`),I=r(`<input placeholder="Search…" class="InputBox"/>`),L=r(`<input placeholder="Type something…" class="InputBox"/>`),R=r(`<input placeholder="Type something…" class="InputBox"/>`),z=r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),b.__docgen={data:[],name:`InputEnclosure.stories.svelte`},B=_(b,C),V=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],H={...B.Default,tags:[`svelte-csf-v5`]},U={...B.NoOutline,tags:[`svelte-csf-v5`]},W={...B.Focused,tags:[`svelte-csf-v5`]},G={...B.Error,tags:[`svelte-csf-v5`]},K={...B.Disabled,tags:[`svelte-csf-v5`]},q={...B.Large,tags:[`svelte-csf-v5`]},J={...B.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},Y={...B.WithAfterSuffixText,tags:[`svelte-csf-v5`]},X={...B.AffixSpacingBefore,tags:[`svelte-csf-v5`]},Z={...B.AffixSpacingAfter,tags:[`svelte-csf-v5`]},Q={...B.LightTheme,tags:[`svelte-csf-v5`]},$={...B.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{Z as AffixSpacingAfter,X as AffixSpacingBefore,$ as DarkTheme,H as Default,K as Disabled,G as Error,W as Focused,q as Large,Q as LightTheme,U as NoOutline,Y as WithAfterSuffixText,J as WithBeforeIconPrefix,V as __namedExportsOrder,C as default,S as storyInputEnclosureArgTypes};