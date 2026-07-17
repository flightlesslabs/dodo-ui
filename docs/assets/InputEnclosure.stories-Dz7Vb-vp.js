import{i as e}from"./preload-helper-CU4w0FXX.js";import{Gt as ee,St as te,Wt as ne,dn as t,et as n,f as r,nt as i,ot as a,tn as o,wt as s}from"./iframe-CGmTcMmT.js";import{$ as c,K as l,T as u,gt as d,ht as f,n as p,ot as m,q as h,r as g,st as _,t as v,ut as y}from"./create-runtime-stories-DBsIqukf.js";function b(e,t){ee(t,!0);var r=L(),i=te(r);w(i,{name:`Default`,children:(e,ee)=>{n(e,T())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var l=s(i,2);w(l,{name:`Light outline`,args:{outlineVariant:`light`},children:(e,ee)=>{n(e,E())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Light outline…" class="InputBox" />
</InputEnclosure>`}}});var d=s(l,2);w(d,{name:`Dark outline`,args:{outlineVariant:`dark`},children:(e,ee)=>{n(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Dark outline…" class="InputBox" />
</InputEnclosure>`}}});var f=s(d,2);w(f,{name:`No Outline`,args:{outline:!1},children:(e,ee)=>{n(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var p=s(f,2);w(p,{name:`Focused`,args:{focused:!0},children:(e,ee)=>{n(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var m=s(p,2);w(m,{name:`Error`,args:{error:!0},children:(e,ee)=>{n(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var h=s(m,2);w(h,{name:`Grey backdrop`,args:{background:`neutral`},children:(e,ee)=>{n(e,j())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Grey backdrop…" class="InputBox" />
</InputEnclosure>`}}});var g=s(h,2);w(g,{name:`Disabled`,args:{disabled:!0},children:(e,ee)=>{n(e,M())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var _=s(g,2);w(_,{name:`Large`,args:{size:`large`},children:(e,ee)=>{n(e,N())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var v=s(_,2);w(v,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,ee)=>{y(e,{before:e=>{n(e,P())},children:(e,ee)=>{n(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var b=s(v,2);w(b,{name:`With After (Suffix Text)`,asChild:!0,children:(e,ee)=>{y(e,{after:e=>{n(e,I())},children:(e,ee)=>{n(e,re())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var x=s(b,2);w(x,{name:`Affix Spacing Before`,asChild:!0,children:(e,ee)=>{y(e,{affixSpacingBefore:`tight`,before:e=>{c(e,{compact:!0,roundness:`full`,children:(e,ee)=>{o(),n(e,a(`🔍`))},$$slots:{default:!0}})},children:(e,ee)=>{n(e,F())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var S=s(x,2);w(S,{name:`Affix Spacing After`,asChild:!0,children:(e,ee)=>{y(e,{affixSpacingAfter:`tight`,after:e=>{c(e,{compact:!0,roundness:`full`,children:(e,ee)=>{o(),n(e,a(`🔍`))},$$slots:{default:!0}})},children:(e,ee)=>{n(e,F())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var C=s(S,2);w(C,{name:`Light Theme`,asChild:!0,children:(e,ee)=>{u(e,{type:`light`,children:(e,ee)=>{y(e,{children:(e,ee)=>{n(e,T())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}});var R=s(C,2);w(R,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,ee)=>{u(e,{type:`dark`,children:(e,ee)=>{y(e,{children:(e,ee)=>{n(e,T())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),n(e,r),ne()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,re,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ie;e((()=>{t(),d(),g(),r(),p(),x=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,S={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:h,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:l,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},outlineVariant:{control:{type:`select`},options:_,description:`Outlined color token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},background:{control:{type:`select`},options:m,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`none`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},C={component:y,tags:[`autodocs`],argTypes:S,parameters:{docs:{description:{component:x}}}},{Story:w}=f(C),T=i(`<input placeholder="Type something…" class="InputBox"/>`),E=i(`<input placeholder="Light outline…" class="InputBox"/>`),D=i(`<input placeholder="Dark outline…" class="InputBox"/>`),O=i(`<input placeholder="No outline…" class="InputBox"/>`),k=i(`<input placeholder="Focused state…" class="InputBox"/>`),A=i(`<input placeholder="Error state…" class="InputBox"/>`),j=i(`<input placeholder="Grey backdrop…" class="InputBox"/>`),M=i(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),N=i(`<input placeholder="Large input…" class="InputBox"/>`),P=i(`<span style="color: #888; padding-left: 8px">🔍</span>`),F=i(`<input placeholder="Search…" class="InputBox"/>`),I=i(`<span style="color: #888; padding-right: 8px">.com</span>`),re=i(`<input placeholder="Website" class="InputBox"/>`),L=i(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),b.__docgen={data:[],name:`InputEnclosure.stories.svelte`},R=v(b,C),z=[`Default`,`LightOutline`,`DarkOutline`,`NoOutline`,`Focused`,`Error`,`GreyBackdrop`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.LightOutline,tags:[`svelte-csf-v5`]},H={...R.DarkOutline,tags:[`svelte-csf-v5`]},U={...R.NoOutline,tags:[`svelte-csf-v5`]},W={...R.Focused,tags:[`svelte-csf-v5`]},G={...R.Error,tags:[`svelte-csf-v5`]},K={...R.GreyBackdrop,tags:[`svelte-csf-v5`]},q={...R.Disabled,tags:[`svelte-csf-v5`]},J={...R.Large,tags:[`svelte-csf-v5`]},Y={...R.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},X={...R.WithAfterSuffixText,tags:[`svelte-csf-v5`]},Z={...R.AffixSpacingBefore,tags:[`svelte-csf-v5`]},Q={...R.AffixSpacingAfter,tags:[`svelte-csf-v5`]},$={...R.LightTheme,tags:[`svelte-csf-v5`]},ie={...R.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{Q as AffixSpacingAfter,Z as AffixSpacingBefore,H as DarkOutline,ie as DarkTheme,B as Default,q as Disabled,G as Error,W as Focused,K as GreyBackdrop,J as Large,V as LightOutline,$ as LightTheme,U as NoOutline,X as WithAfterSuffixText,Y as WithBeforeIconPrefix,z as __namedExportsOrder,C as default,S as storyInputEnclosureArgTypes};