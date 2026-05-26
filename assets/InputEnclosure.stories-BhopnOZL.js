import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ht as n,St as r,Ut as ee,et as i,f as a,ln as o,nt as s,ot as c,wt as l}from"./iframe-DF-0A_pX.js";import{J as u,T as d,Y as f,ht as p,lt as m,mt as h,n as g,r as _,t as v,tt as y}from"./create-runtime-stories-DKBnnu4M.js";function b(e,a){ee(a,!0);var o=z(),s=r(o);w(s,{name:`Default`,children:(e,t)=>{i(e,T())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var u=l(s,2);w(u,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{i(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var f=l(u,2);w(f,{name:`Focused`,args:{focused:!0},children:(e,t)=>{i(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var p=l(f,2);w(p,{name:`Error`,args:{error:!0},children:(e,t)=>{i(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var h=l(p,2);w(h,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{i(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var g=l(h,2);w(g,{name:`Large`,args:{size:`large`},children:(e,t)=>{i(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var _=l(g,2);w(_,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{m(e,{before:e=>{i(e,j())},children:(e,t)=>{i(e,M())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var v=l(_,2);w(v,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{m(e,{after:e=>{i(e,N())},children:(e,t)=>{i(e,P())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var b=l(v,2);w(b,{name:`Affix Spacing Before`,asChild:!0,children:(e,n)=>{m(e,{affixSpacingBefore:`tight`,before:e=>{y(e,{compact:!0,roundness:`full`,children:(e,n)=>{t(),i(e,c(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{i(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var x=l(b,2);w(x,{name:`Affix Spacing After`,asChild:!0,children:(e,n)=>{m(e,{affixSpacingAfter:`tight`,after:e=>{y(e,{compact:!0,roundness:`full`,children:(e,n)=>{t(),i(e,c(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{i(e,I())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var S=l(x,2);w(S,{name:`Light Theme`,asChild:!0,children:(e,t)=>{d(e,{type:`light`,children:(e,t)=>{m(e,{children:(e,t)=>{i(e,L())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),w(l(S,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{d(e,{type:`dark`,children:(e,t)=>{m(e,{children:(e,t)=>{i(e,R())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),i(e,o),n()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),p(),_(),a(),g(),x=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,S={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:f,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:u,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},C={component:m,tags:[`autodocs`],argTypes:S,parameters:{docs:{description:{component:x}}}},{Story:w}=h(C),T=s(`<input placeholder="Type something…" class="InputBox"/>`),E=s(`<input placeholder="No outline…" class="InputBox"/>`),D=s(`<input placeholder="Focused state…" class="InputBox"/>`),O=s(`<input placeholder="Error state…" class="InputBox"/>`),k=s(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),A=s(`<input placeholder="Large input…" class="InputBox"/>`),j=s(`<span style="color: #888; padding-left: 8px">🔍</span>`),M=s(`<input placeholder="Search…" class="InputBox"/>`),N=s(`<span style="color: #888; padding-right: 8px">.com</span>`),P=s(`<input placeholder="Website" class="InputBox"/>`),F=s(`<input placeholder="Search…" class="InputBox"/>`),I=s(`<input placeholder="Search…" class="InputBox"/>`),L=s(`<input placeholder="Type something…" class="InputBox"/>`),R=s(`<input placeholder="Type something…" class="InputBox"/>`),z=s(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),b.__docgen={data:[],name:`InputEnclosure.stories.svelte`},B=v(b,C),V=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],H={...B.Default,tags:[`svelte-csf-v5`]},U={...B.NoOutline,tags:[`svelte-csf-v5`]},W={...B.Focused,tags:[`svelte-csf-v5`]},G={...B.Error,tags:[`svelte-csf-v5`]},K={...B.Disabled,tags:[`svelte-csf-v5`]},q={...B.Large,tags:[`svelte-csf-v5`]},J={...B.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},Y={...B.WithAfterSuffixText,tags:[`svelte-csf-v5`]},X={...B.AffixSpacingBefore,tags:[`svelte-csf-v5`]},Z={...B.AffixSpacingAfter,tags:[`svelte-csf-v5`]},Q={...B.LightTheme,tags:[`svelte-csf-v5`]},$={...B.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{Z as AffixSpacingAfter,X as AffixSpacingBefore,$ as DarkTheme,H as Default,K as Disabled,G as Error,W as Focused,q as Large,Q as LightTheme,U as NoOutline,Y as WithAfterSuffixText,J as WithBeforeIconPrefix,V as __namedExportsOrder,C as default,S as storyInputEnclosureArgTypes};