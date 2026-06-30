import{i as e}from"./preload-helper-CuCQULJj.js";import{Et as t,Gt as ee,Wt as te,dn as n,et as r,f as i,nt as a,ot as o,tn as s,wt as ne}from"./iframe-C1P8xe_p.js";import{J as c,T as l,Y as u,_t as d,ct as f,ft as p,lt as m,n as h,r as g,t as _,tt as v,vt as y}from"./create-runtime-stories-CSS-E7Kz.js";function b(e,n){ee(n,!0);var i=L(),a=ne(i);w(a,{name:`Default`,children:(e,t)=>{r(e,T())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var c=t(a,2);w(c,{name:`Light outline`,args:{outlineVariant:`light`},children:(e,t)=>{r(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Light outline…" class="InputBox" />
</InputEnclosure>`}}});var u=t(c,2);w(u,{name:`Dark outline`,args:{outlineVariant:`dark`},children:(e,t)=>{r(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Dark outline…" class="InputBox" />
</InputEnclosure>`}}});var d=t(u,2);w(d,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{r(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var f=t(d,2);w(f,{name:`Focused`,args:{focused:!0},children:(e,t)=>{r(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var m=t(f,2);w(m,{name:`Error`,args:{error:!0},children:(e,t)=>{r(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var h=t(m,2);w(h,{name:`Grey backdrop`,args:{background:`neutral`},children:(e,t)=>{r(e,j())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Grey backdrop…" class="InputBox" />
</InputEnclosure>`}}});var g=t(h,2);w(g,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{r(e,M())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var _=t(g,2);w(_,{name:`Large`,args:{size:`large`},children:(e,t)=>{r(e,N())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var y=t(_,2);w(y,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{p(e,{before:e=>{r(e,P())},children:(e,t)=>{r(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var b=t(y,2);w(b,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{p(e,{after:e=>{r(e,I())},children:(e,t)=>{r(e,re())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var x=t(b,2);w(x,{name:`Affix Spacing Before`,asChild:!0,children:(e,t)=>{p(e,{affixSpacingBefore:`tight`,before:e=>{v(e,{compact:!0,roundness:`full`,children:(e,t)=>{s(),r(e,o(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{r(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var S=t(x,2);w(S,{name:`Affix Spacing After`,asChild:!0,children:(e,t)=>{p(e,{affixSpacingAfter:`tight`,after:e=>{v(e,{compact:!0,roundness:`full`,children:(e,t)=>{s(),r(e,o(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{r(e,F())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var C=t(S,2);w(C,{name:`Light Theme`,asChild:!0,children:(e,t)=>{l(e,{type:`light`,children:(e,t)=>{p(e,{children:(e,t)=>{r(e,T())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),w(t(C,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{l(e,{type:`dark`,children:(e,t)=>{p(e,{children:(e,t)=>{r(e,T())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),r(e,i),te()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,re,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ie,$;e((()=>{n(),y(),g(),i(),h(),x=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,S={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:u,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:c,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},outlineVariant:{control:{type:`select`},options:m,description:`Outlined color token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},background:{control:{type:`select`},options:f,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`none`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},C={component:p,tags:[`autodocs`],argTypes:S,parameters:{docs:{description:{component:x}}}},{Story:w}=d(C),T=a(`<input placeholder="Type something…" class="InputBox"/>`),E=a(`<input placeholder="Light outline…" class="InputBox"/>`),D=a(`<input placeholder="Dark outline…" class="InputBox"/>`),O=a(`<input placeholder="No outline…" class="InputBox"/>`),k=a(`<input placeholder="Focused state…" class="InputBox"/>`),A=a(`<input placeholder="Error state…" class="InputBox"/>`),j=a(`<input placeholder="Grey backdrop…" class="InputBox"/>`),M=a(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),N=a(`<input placeholder="Large input…" class="InputBox"/>`),P=a(`<span style="color: #888; padding-left: 8px">🔍</span>`),F=a(`<input placeholder="Search…" class="InputBox"/>`),I=a(`<span style="color: #888; padding-right: 8px">.com</span>`),re=a(`<input placeholder="Website" class="InputBox"/>`),L=a(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),b.__docgen={data:[],name:`InputEnclosure.stories.svelte`},R=_(b,C),z=[`Default`,`LightOutline`,`DarkOutline`,`NoOutline`,`Focused`,`Error`,`GreyBackdrop`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.LightOutline,tags:[`svelte-csf-v5`]},H={...R.DarkOutline,tags:[`svelte-csf-v5`]},U={...R.NoOutline,tags:[`svelte-csf-v5`]},W={...R.Focused,tags:[`svelte-csf-v5`]},G={...R.Error,tags:[`svelte-csf-v5`]},K={...R.GreyBackdrop,tags:[`svelte-csf-v5`]},q={...R.Disabled,tags:[`svelte-csf-v5`]},J={...R.Large,tags:[`svelte-csf-v5`]},Y={...R.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},X={...R.WithAfterSuffixText,tags:[`svelte-csf-v5`]},Z={...R.AffixSpacingBefore,tags:[`svelte-csf-v5`]},Q={...R.AffixSpacingAfter,tags:[`svelte-csf-v5`]},ie={...R.LightTheme,tags:[`svelte-csf-v5`]},$={...R.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{Q as AffixSpacingAfter,Z as AffixSpacingBefore,H as DarkOutline,$ as DarkTheme,B as Default,q as Disabled,G as Error,W as Focused,K as GreyBackdrop,J as Large,V as LightOutline,ie as LightTheme,U as NoOutline,X as WithAfterSuffixText,Y as WithBeforeIconPrefix,z as __namedExportsOrder,C as default,S as storyInputEnclosureArgTypes};