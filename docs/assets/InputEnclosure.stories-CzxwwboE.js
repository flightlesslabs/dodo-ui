import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,Wt as r,dn as i,et as a,f as o,nt as s,ot as c,tn as l,wt as u}from"./iframe-skAj-ZLh.js";import{J as d,T as f,Y as p,ht as m,lt as h,mt as g,n as _,r as v,t as y,tt as b}from"./create-runtime-stories-BVPASrbR.js";function x(e,i){n(i,!0);var o=I(),s=u(o);T(s,{name:`Default`,children:(e,t)=>{a(e,E())},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var d=t(s,2);T(d,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{a(e,D())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var p=t(d,2);T(p,{name:`Focused`,args:{focused:!0},children:(e,t)=>{a(e,O())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var m=t(p,2);T(m,{name:`Error`,args:{error:!0},children:(e,t)=>{a(e,k())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var g=t(m,2);T(g,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{a(e,A())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var _=t(g,2);T(_,{name:`Large`,args:{size:`large`},children:(e,t)=>{a(e,j())},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var v=t(_,2);T(v,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{h(e,{before:e=>{a(e,M())},children:(e,t)=>{a(e,N())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var y=t(v,2);T(y,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{h(e,{after:e=>{a(e,P())},children:(e,t)=>{a(e,F())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var x=t(y,2);T(x,{name:`Affix Spacing Before`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingBefore:`tight`,before:e=>{b(e,{compact:!0,roundness:`full`,children:(e,t)=>{l(),a(e,c(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{a(e,N())},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var S=t(x,2);T(S,{name:`Affix Spacing After`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingAfter:`tight`,after:e=>{b(e,{compact:!0,roundness:`full`,children:(e,t)=>{l(),a(e,c(`🔍`))},$$slots:{default:!0}})},children:(e,t)=>{a(e,N())},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var C=t(S,2);T(C,{name:`Light Theme`,asChild:!0,children:(e,t)=>{f(e,{type:`light`,children:(e,t)=>{h(e,{children:(e,t)=>{a(e,E())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),T(t(C,2),{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{f(e,{type:`dark`,children:(e,t)=>{h(e,{children:(e,t)=>{a(e,E())},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),a(e,o),r()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{i(),m(),v(),o(),_(),S=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,C={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:p,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:d,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},w={component:h,tags:[`autodocs`],argTypes:C,parameters:{docs:{description:{component:S}}}},{Story:T}=g(w),E=s(`<input placeholder="Type something…" class="InputBox"/>`),D=s(`<input placeholder="No outline…" class="InputBox"/>`),O=s(`<input placeholder="Focused state…" class="InputBox"/>`),k=s(`<input placeholder="Error state…" class="InputBox"/>`),A=s(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),j=s(`<input placeholder="Large input…" class="InputBox"/>`),M=s(`<span style="color: #888; padding-left: 8px">🔍</span>`),N=s(`<input placeholder="Search…" class="InputBox"/>`),P=s(`<span style="color: #888; padding-right: 8px">.com</span>`),F=s(`<input placeholder="Website" class="InputBox"/>`),I=s(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),x.__docgen={data:[],name:`InputEnclosure.stories.svelte`},L=y(x,w),R=[`Default`,`NoOutline`,`Focused`,`Error`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],z={...L.Default,tags:[`svelte-csf-v5`]},B={...L.NoOutline,tags:[`svelte-csf-v5`]},V={...L.Focused,tags:[`svelte-csf-v5`]},H={...L.Error,tags:[`svelte-csf-v5`]},U={...L.Disabled,tags:[`svelte-csf-v5`]},W={...L.Large,tags:[`svelte-csf-v5`]},G={...L.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},K={...L.WithAfterSuffixText,tags:[`svelte-csf-v5`]},q={...L.AffixSpacingBefore,tags:[`svelte-csf-v5`]},J={...L.AffixSpacingAfter,tags:[`svelte-csf-v5`]},Y={...L.LightTheme,tags:[`svelte-csf-v5`]},X={...L.DarkTheme,tags:[`svelte-csf-v5`]}}))();export{J as AffixSpacingAfter,q as AffixSpacingBefore,X as DarkTheme,z as Default,U as Disabled,H as Error,V as Focused,W as Large,Y as LightTheme,B as NoOutline,K as WithAfterSuffixText,G as WithBeforeIconPrefix,R as __namedExportsOrder,w as default,C as storyInputEnclosureArgTypes};