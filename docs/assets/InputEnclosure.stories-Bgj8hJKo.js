import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ot as t,Xt as n,Yt as ee,ct as r,ft as i,jt as a,on as o,ot as s,p as c,pn as l}from"./iframe-Dx_RV1xH.js";import{i as u,n as d,r as f,t as p}from"./create-runtime-stories-BmbbgM7A.js";import{n as m,t as h}from"./InputEnclosure-CmphUMtI.js";import{n as g,t as _}from"./UtilityButton-DzQZVzyL.js";import{h as v,l as y,u as b}from"./dist-BYSjHjmV.js";import{n as x,t as S}from"./Theme-zBf_QvP8.js";var C,w,T,E;function D(){return(D=e((()=>{C={all:[`default`,`light`,`dark`]},w=C.all,T={all:[`none`,`neutral`]},E=T.all})))()}function te(e,r){n(r,!0);var c=W(),l=t(c);j(l,{name:`Default`,children:(e,t)=>{var n=M();s(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var u=a(l,2);j(u,{name:`Light outline`,args:{outlineVariant:`light`},children:(e,t)=>{var n=N();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Light outline…" class="InputBox" />
</InputEnclosure>`}}});var d=a(u,2);j(d,{name:`Dark outline`,args:{outlineVariant:`dark`},children:(e,t)=>{var n=P();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Dark outline…" class="InputBox" />
</InputEnclosure>`}}});var f=a(d,2);j(f,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{var n=F();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var p=a(f,2);j(p,{name:`Focused`,args:{focused:!0},children:(e,t)=>{var n=I();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var m=a(p,2);j(m,{name:`Error`,args:{error:!0},children:(e,t)=>{var n=L();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var g=a(m,2);j(g,{name:`Grey backdrop`,args:{background:`neutral`},children:(e,t)=>{var n=R();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Grey backdrop…" class="InputBox" />
</InputEnclosure>`}}});var v=a(g,2);j(v,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{var n=z();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var y=a(v,2);j(y,{name:`Large`,args:{size:`large`},children:(e,t)=>{var n=B();s(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var b=a(y,2);j(b,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{h(e,{before:e=>{var t=V();s(e,t)},children:(e,t)=>{var n=H();s(e,n)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var x=a(b,2);j(x,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{h(e,{after:e=>{var t=U();s(e,t)},children:(e,t)=>{var n=ne();s(e,n)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var C=a(x,2);j(C,{name:`Affix Spacing Before`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingBefore:`tight`,before:e=>{_(e,{compact:!0,roundness:`full`,children:(e,t)=>{o();var n=i(`🔍`);s(e,n)},$$slots:{default:!0}})},children:(e,t)=>{var n=H();s(e,n)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var w=a(C,2);j(w,{name:`Affix Spacing After`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingAfter:`tight`,after:e=>{_(e,{compact:!0,roundness:`full`,children:(e,t)=>{o();var n=i(`🔍`);s(e,n)},$$slots:{default:!0}})},children:(e,t)=>{var n=H();s(e,n)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var T=a(w,2);j(T,{name:`Light Theme`,asChild:!0,children:(e,t)=>{S(e,{type:`light`,children:(e,t)=>{h(e,{children:(e,t)=>{var n=M();s(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}});var E=a(T,2);j(E,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{S(e,{type:`dark`,children:(e,t)=>{h(e,{children:(e,t)=>{var n=M();s(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),s(e,c),ee()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,ne,W,G,K,q,J,Y,X,Z,Q,re,ie,ae,oe,$,se,ce,le,ue;function de(){return(de=e((()=>{l(),u(),v(),m(),x(),g(),D(),c(),d(),O=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,k={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:b,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:y,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},outlineVariant:{control:{type:`select`},options:w,description:`Outlined color token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},background:{control:{type:`select`},options:E,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`none`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},A={component:h,tags:[`autodocs`],argTypes:k,parameters:{docs:{description:{component:O}}}},{Story:j}=f(A),M=r(`<input placeholder="Type something…" class="InputBox"/>`),N=r(`<input placeholder="Light outline…" class="InputBox"/>`),P=r(`<input placeholder="Dark outline…" class="InputBox"/>`),F=r(`<input placeholder="No outline…" class="InputBox"/>`),I=r(`<input placeholder="Focused state…" class="InputBox"/>`),L=r(`<input placeholder="Error state…" class="InputBox"/>`),R=r(`<input placeholder="Grey backdrop…" class="InputBox"/>`),z=r(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),B=r(`<input placeholder="Large input…" class="InputBox"/>`),V=r(`<span style="color: #888; padding-left: 8px">🔍</span>`),H=r(`<input placeholder="Search…" class="InputBox"/>`),U=r(`<span style="color: #888; padding-right: 8px">.com</span>`),ne=r(`<input placeholder="Website" class="InputBox"/>`),W=r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),te.__docgen={data:[],name:`InputEnclosure.stories.svelte`},G=p(te,A),K=[`Default`,`LightOutline`,`DarkOutline`,`NoOutline`,`Focused`,`Error`,`GreyBackdrop`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],q={...G.Default,tags:[`svelte-csf-v5`]},J={...G.LightOutline,tags:[`svelte-csf-v5`]},Y={...G.DarkOutline,tags:[`svelte-csf-v5`]},X={...G.NoOutline,tags:[`svelte-csf-v5`]},Z={...G.Focused,tags:[`svelte-csf-v5`]},Q={...G.Error,tags:[`svelte-csf-v5`]},re={...G.GreyBackdrop,tags:[`svelte-csf-v5`]},ie={...G.Disabled,tags:[`svelte-csf-v5`]},ae={...G.Large,tags:[`svelte-csf-v5`]},oe={...G.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},$={...G.WithAfterSuffixText,tags:[`svelte-csf-v5`]},se={...G.AffixSpacingBefore,tags:[`svelte-csf-v5`]},ce={...G.AffixSpacingAfter,tags:[`svelte-csf-v5`]},le={...G.LightTheme,tags:[`svelte-csf-v5`]},ue={...G.DarkTheme,tags:[`svelte-csf-v5`]}})))()}de();export{ce as AffixSpacingAfter,se as AffixSpacingBefore,Y as DarkOutline,ue as DarkTheme,q as Default,ie as Disabled,Q as Error,Z as Focused,re as GreyBackdrop,ae as Large,J as LightOutline,le as LightTheme,X as NoOutline,$ as WithAfterSuffixText,oe as WithBeforeIconPrefix,K as __namedExportsOrder,A as default,k as storyInputEnclosureArgTypes};