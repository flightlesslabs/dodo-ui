import{p as A,f as D,a as r,s as l,b as O,c as s}from"./iframe-B6lunisr.js";import{c as w,d as L}from"./create-runtime-stories-XCof7lZX.js";import{I as c}from"./InputEnclosure-D0D0XaZV.js";import{c as W}from"./size-DUtmoJ_Y.js";import{c as k}from"./roundness-tdvNkHbg.js";import{T as E}from"./Theme-B-k2fUfU.js";import{i as B}from"./lifecycle-Bue9sWyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./attributes-COnczyff.js";import"./this-DJj0nNLa.js";const F={children:{control:{type:"text"},description:"InputEnclosure contents (typically an input or control)",table:{category:"API",subcategory:"Base"}},before:{description:"Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.",table:{category:"API",subcategory:"Base"}},after:{description:"Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.",table:{category:"API",subcategory:"Base"}},class:{table:{category:"API",subcategory:"Base"}},disabled:{control:{type:"boolean"},description:"Disabled visual state",table:{category:"API",subcategory:"State",defaultValue:{summary:"false"}}},focused:{control:{type:"boolean"},description:"Focused visual state (wrapper-level)",table:{category:"API",subcategory:"State",defaultValue:{summary:"false"}}},error:{control:{type:"boolean"},description:"Error visual state (validation)",table:{category:"API",subcategory:"State",defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:W,description:"Visual size token",table:{category:"API",subcategory:"Appearance",defaultValue:{summary:"normal"}}},roundness:{control:{type:"select"},options:k,description:"Border radius token",table:{category:"API",subcategory:"Appearance",defaultValue:{summary:"1"}}},outline:{control:{type:"boolean"},description:"Render outlined enclosure",table:{category:"API",subcategory:"Appearance",defaultValue:{summary:"true"}}}},N={component:c,tags:["autodocs"],argTypes:F,parameters:{docs:{description:{component:""}}}},{Story:o}=L();var V=s('<input placeholder="Type something…"/>'),z=s('<input placeholder="No outline…"/>'),R=s('<input placeholder="Focused state…"/>'),M=s('<input placeholder="Error state…"/>'),j=s('<input placeholder="Disabled state…" disabled=""/>'),q=s('<input placeholder="Large input…"/>'),G=s('<input placeholder="Pill shaped input…"/>'),H=s('<span style="color: #888;">🔍</span>'),J=s('<input placeholder="Search…"/>'),K=s('<span style="color: #888;">.com</span>'),Q=s('<input placeholder="Website"/>'),U=s('<input placeholder="Type something…"/>'),X=s('<input placeholder="Type something…"/>'),Y=s("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function T(C,x){A(x,!1),B();var f=Y(),h=D(f);o(h,{name:"Default (Outlined)",children:(e,n)=>{var t=V();r(e,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"------------------------------"}},__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Type something…" />
</InputEnclosure>`}}});var _=l(h,2);o(_,{name:"No Outline",args:{outline:!1},children:(e,n)=>{var t=z();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="No outline…" />
</InputEnclosure>`}}});var m=l(_,2);o(m,{name:"Focused",args:{focused:!0},children:(e,n)=>{var t=R();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Focused state…" />
</InputEnclosure>`}}});var v=l(m,2);o(v,{name:"Error",args:{error:!0},children:(e,n)=>{var t=M();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Error state…" />
</InputEnclosure>`}}});var $=l(v,2);o($,{name:"Disabled",args:{disabled:!0},children:(e,n)=>{var t=j();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Disabled state…" disabled />
</InputEnclosure>`}}});var g=l($,2);o(g,{name:"Large",args:{size:"large"},children:(e,n)=>{var t=q();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Large input…" />
</InputEnclosure>`}}});var y=l(g,2);o(y,{name:"Pill Shape",args:{roundness:"pill"},children:(e,n)=>{var t=G();r(e,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure {...args}>
  <input placeholder="Pill shaped input…" />
</InputEnclosure>`}}});var b=l(y,2);o(b,{name:"With Before (Icon Prefix)",asChild:!0,children:(e,n)=>{c(e,{before:u=>{var p=H();r(u,p)},children:(u,p)=>{var i=J();r(u,i)},$$slots:{before:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet before()}
    <span style="color: #888;">🔍</span>
  {/snippet}

  <input placeholder="Search…" />
</InputEnclosure>`}}});var I=l(b,2);o(I,{name:"With After (Suffix Text)",asChild:!0,children:(e,n)=>{c(e,{after:u=>{var p=K();r(u,p)},children:(u,p)=>{var i=Q();r(u,i)},$$slots:{after:!0,default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<InputEnclosure>
  {#snippet after()}
    <span style="color: #888;">.com</span>
  {/snippet}

  <input placeholder="Website" />
</InputEnclosure>`}}});var P=l(I,2);o(P,{name:"Light Theme",asChild:!0,children:(e,n)=>{E(e,{type:"light",children:(t,u)=>{c(t,{children:(p,i)=>{var d=U();r(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="light">
  <InputEnclosure>
    <input placeholder="Type something…" />
  </InputEnclosure>
</Theme>`}}});var S=l(P,2);o(S,{name:"Dark Theme",asChild:!0,globals:{backgrounds:{value:"dark"}},children:(e,n)=>{E(e,{type:"dark",children:(t,u)=>{c(t,{children:(p,i)=>{var d=X();r(p,d)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Theme type="dark">
  <InputEnclosure>
    <input placeholder="Type something…" />
  </InputEnclosure>
</Theme>`}}}),r(C,f),O()}T.__docgen={data:[],name:"InputEnclosure.stories.svelte"};const a=w(T,N),pe=["DefaultOutlined","NoOutline","Focused","Error","Disabled","Large","PillShape","WithBeforeIconPrefix","WithAfterSuffixText","LightTheme","DarkTheme"],ie={...a.DefaultOutlined,tags:["svelte-csf-v5"]},ce={...a.NoOutline,tags:["svelte-csf-v5"]},de={...a.Focused,tags:["svelte-csf-v5"]},fe={...a.Error,tags:["svelte-csf-v5"]},he={...a.Disabled,tags:["svelte-csf-v5"]},_e={...a.Large,tags:["svelte-csf-v5"]},me={...a.PillShape,tags:["svelte-csf-v5"]},ve={...a.WithBeforeIconPrefix,tags:["svelte-csf-v5"]},$e={...a.WithAfterSuffixText,tags:["svelte-csf-v5"]},ge={...a.LightTheme,tags:["svelte-csf-v5"]},ye={...a.DarkTheme,tags:["svelte-csf-v5"]};export{ye as DarkTheme,ie as DefaultOutlined,he as Disabled,fe as Error,de as Focused,_e as Large,ge as LightTheme,ce as NoOutline,me as PillShape,$e as WithAfterSuffixText,ve as WithBeforeIconPrefix,pe as __namedExportsOrder,N as default,F as storyInputEnclosureArgTypes};
