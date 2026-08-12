import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ct as t,Gt as n,Kt as ee,Tt as r,ln as i,nn as a,p as o,rt as s,st as c,tt as l}from"./iframe-CvWSf_Hq.js";import{i as u,n as d,r as f,t as p}from"./create-runtime-stories-CMZqfqE5.js";import{n as m,t as h}from"./InputEnclosure-UlT17GC9.js";import{n as g,t as _}from"./UtilityButton-DYavnrrt.js";import{h as v,l as y,u as b}from"./dist-BYSjHjmV.js";import{n as x,t as S}from"./Theme-BPi75P-E.js";var C,w,T,E;function te(){return(te=e((()=>{C={all:[`default`,`light`,`dark`]},w=C.all,T={all:[`none`,`neutral`]},E=T.all})))()}function D(e,i){ee(i,!0);var o=W(),s=t(o);j(s,{name:`Default`,children:(e,t)=>{var n=M();l(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" class="InputBox" />
</InputEnclosure>`}}});var u=r(s,2);j(u,{name:`Light outline`,args:{outlineVariant:`light`},children:(e,t)=>{var n=N();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Light outline…" class="InputBox" />
</InputEnclosure>`}}});var d=r(u,2);j(d,{name:`Dark outline`,args:{outlineVariant:`dark`},children:(e,t)=>{var n=P();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Dark outline…" class="InputBox" />
</InputEnclosure>`}}});var f=r(d,2);j(f,{name:`No Outline`,args:{outline:!1},children:(e,t)=>{var n=F();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" class="InputBox" />
</InputEnclosure>`}}});var p=r(f,2);j(p,{name:`Focused`,args:{focused:!0},children:(e,t)=>{var n=I();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" class="InputBox" />
</InputEnclosure>`}}});var m=r(p,2);j(m,{name:`Error`,args:{error:!0},children:(e,t)=>{var n=L();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" class="InputBox" />
</InputEnclosure>`}}});var g=r(m,2);j(g,{name:`Grey backdrop`,args:{background:`neutral`},children:(e,t)=>{var n=R();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Grey backdrop…" class="InputBox" />
</InputEnclosure>`}}});var v=r(g,2);j(v,{name:`Disabled`,args:{disabled:!0},children:(e,t)=>{var n=z();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</InputEnclosure>`}}});var y=r(v,2);j(y,{name:`Large`,args:{size:`large`},children:(e,t)=>{var n=B();l(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" class="InputBox" />
</InputEnclosure>`}}});var b=r(y,2);j(b,{name:`With Before (Icon Prefix)`,asChild:!0,children:(e,t)=>{h(e,{before:e=>{var t=V();l(e,t)},children:(e,t)=>{var n=H();l(e,n)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888; padding-left: 8px">🔍</span>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var x=r(b,2);j(x,{name:`With After (Suffix Text)`,asChild:!0,children:(e,t)=>{h(e,{after:e=>{var t=ne();l(e,t)},children:(e,t)=>{var n=U();l(e,n)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888; padding-right: 8px">.com</span>
  {/snippet}

  <input placeholder="Website" class="InputBox" />
</InputEnclosure>`}}});var C=r(x,2);j(C,{name:`Affix Spacing Before`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingBefore:`tight`,before:e=>{_(e,{compact:!0,roundness:`full`,children:(e,t)=>{a();var n=c(`🔍`);l(e,n)},$$slots:{default:!0}})},children:(e,t)=>{var n=H();l(e,n)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingBefore="tight">
  {#snippet before()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var w=r(C,2);j(w,{name:`Affix Spacing After`,asChild:!0,children:(e,t)=>{h(e,{affixSpacingAfter:`tight`,after:e=>{_(e,{compact:!0,roundness:`full`,children:(e,t)=>{a();var n=c(`🔍`);l(e,n)},$$slots:{default:!0}})},children:(e,t)=>{var n=H();l(e,n)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure affixSpacingAfter="tight">
  {#snippet after()}
    <UtilityButton compact roundness="full">🔍</UtilityButton>
  {/snippet}

  <input placeholder="Search…" class="InputBox" />
</InputEnclosure>`}}});var T=r(w,2);j(T,{name:`Light Theme`,asChild:!0,children:(e,t)=>{S(e,{type:`light`,children:(e,t)=>{h(e,{children:(e,t)=>{var n=M();l(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}});var E=r(T,2);j(E,{name:`Dark Theme`,asChild:!0,globals:{backgrounds:{value:`dark`}},children:(e,t)=>{S(e,{type:`dark`,children:(e,t)=>{h(e,{children:(e,t)=>{var n=M();l(e,n)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" class="InputBox" />
  </InputEnclosure>
</Theme>`}}}),l(e,o),n()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,ne,U,W,G,K,q,J,Y,X,Z,Q,re,ie,ae,oe,$,se,ce,le,ue;function de(){return(de=e((()=>{i(),u(),v(),m(),x(),g(),te(),o(),d(),O=`
  An extensive wrappwer for input boxes.

 \`\`\`ts
 import { InputEnclosure } from '@flightlesslabs/dodo-ui';

 // apply 'InputBox' class to the input
  <input class="InputBox" />
 \`\`\`
 `,k={children:{control:{type:`text`},description:`InputEnclosure contents (typically an input or control)`,table:{category:`API`,subcategory:`Base`}},multiline:{control:{type:`boolean`},table:{category:`API`,subcategory:`Base`}},before:{description:`Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.`,table:{category:`API`,subcategory:`Base`}},after:{description:`Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.`,table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled visual state`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:`Focused visual state (wrapper-level)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},description:`Error visual state (validation)`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},size:{control:{type:`select`},options:b,description:`Visual size token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`normal`}}},roundness:{control:{type:`select`},options:y,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},outlineVariant:{control:{type:`select`},options:w,description:`Outlined color token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},background:{control:{type:`select`},options:E,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`none`}}},affixSpacingBefore:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}},affixSpacingAfter:{table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`default`}}}},A={component:h,tags:[`autodocs`],argTypes:k,parameters:{docs:{description:{component:O}}}},{Story:j}=f(A),M=s(`<input placeholder="Type something…" class="InputBox"/>`),N=s(`<input placeholder="Light outline…" class="InputBox"/>`),P=s(`<input placeholder="Dark outline…" class="InputBox"/>`),F=s(`<input placeholder="No outline…" class="InputBox"/>`),I=s(`<input placeholder="Focused state…" class="InputBox"/>`),L=s(`<input placeholder="Error state…" class="InputBox"/>`),R=s(`<input placeholder="Grey backdrop…" class="InputBox"/>`),z=s(`<input placeholder="Disabled state…" disabled="" class="InputBox"/>`),B=s(`<input placeholder="Large input…" class="InputBox"/>`),V=s(`<span style="color: #888; padding-left: 8px">🔍</span>`),H=s(`<input placeholder="Search…" class="InputBox"/>`),ne=s(`<span style="color: #888; padding-right: 8px">.com</span>`),U=s(`<input placeholder="Website" class="InputBox"/>`),W=s(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),D.__docgen={data:[],name:`InputEnclosure.stories.svelte`},G=p(D,A),K=[`Default`,`LightOutline`,`DarkOutline`,`NoOutline`,`Focused`,`Error`,`GreyBackdrop`,`Disabled`,`Large`,`WithBeforeIconPrefix`,`WithAfterSuffixText`,`AffixSpacingBefore`,`AffixSpacingAfter`,`LightTheme`,`DarkTheme`],q={...G.Default,tags:[`svelte-csf-v5`]},J={...G.LightOutline,tags:[`svelte-csf-v5`]},Y={...G.DarkOutline,tags:[`svelte-csf-v5`]},X={...G.NoOutline,tags:[`svelte-csf-v5`]},Z={...G.Focused,tags:[`svelte-csf-v5`]},Q={...G.Error,tags:[`svelte-csf-v5`]},re={...G.GreyBackdrop,tags:[`svelte-csf-v5`]},ie={...G.Disabled,tags:[`svelte-csf-v5`]},ae={...G.Large,tags:[`svelte-csf-v5`]},oe={...G.WithBeforeIconPrefix,tags:[`svelte-csf-v5`]},$={...G.WithAfterSuffixText,tags:[`svelte-csf-v5`]},se={...G.AffixSpacingBefore,tags:[`svelte-csf-v5`]},ce={...G.AffixSpacingAfter,tags:[`svelte-csf-v5`]},le={...G.LightTheme,tags:[`svelte-csf-v5`]},ue={...G.DarkTheme,tags:[`svelte-csf-v5`]}})))()}de();export{ce as AffixSpacingAfter,se as AffixSpacingBefore,Y as DarkOutline,ue as DarkTheme,q as Default,ie as Disabled,Q as Error,Z as Focused,re as GreyBackdrop,ae as Large,J as LightOutline,le as LightTheme,X as NoOutline,$ as WithAfterSuffixText,oe as WithBeforeIconPrefix,K as __namedExportsOrder,A as default,k as storyInputEnclosureArgTypes};