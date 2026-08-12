import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,Ct as n,Dt as r,Ft as i,Gt as a,Kt as o,Mt as s,Tt as c,ft as l,ln as u,p as d,rt as f,tt as p}from"./iframe-CvWSf_Hq.js";import{i as m,n as h,r as g,t as _}from"./create-runtime-stories-CMZqfqE5.js";import{h as v,l as y}from"./dist-BYSjHjmV.js";import{n as b,t as x}from"./ToggleGroup-DKJPK9z6.js";function S(e,r){o(r,!0);var s=M(),u=n(s);{let e=i(()=>({type:`single`,options:w,value:l(k)}));O(u,{name:`Default`,get args(){return l(e)},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<ToggleGroup {...args} />`}}})}var d=c(u,2);O(d,{name:`Controlled`,asChild:!0,children:(e,n)=>{x(e,{get options(){return w},type:`single`,get value(){return l(k)},set value(e){t(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} />`}}});var f=c(d,2);O(f,{name:`Attached`,asChild:!0,children:(e,n)=>{x(e,{get options(){return w},type:`single`,attached:!0,get value(){return l(k)},set value(e){t(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} attached />`}}});var m=c(f,2);O(m,{name:`Allow Deselect`,asChild:!0,children:(e,n)=>{x(e,{get options(){return w},type:`single`,allowDeselect:!0,get value(){return l(j)},set value(e){t(j,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value3} allowDeselect />`}}});var h=c(m,2);O(h,{name:`Mutiple`,asChild:!0,children:(e,n)=>{x(e,{get options(){return T},type:`multiple`,outline:!0,get value(){return l(A)},set value(e){t(A,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options2} type="multiple" bind:value={value2} outline />`}}});var g=c(h,2);O(g,{name:`Full Width and flex`,asChild:!0,children:(e,n)=>{x(e,{get options(){return w},type:`single`,fullWidth:!0,flex:!0,get value(){return l(k)},set value(e){t(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} fullWidth flex />`}}});var _=c(g,2);O(_,{name:`Button Style`,asChild:!0,children:(e,n)=>{x(e,{get options(){return w},type:`single`,buttonProps:{color:`safe`},activeButtonProps:{color:`safe`},get value(){return l(k)},set value(e){t(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup
  options={options1}
  type="single"
  bind:value={value1}
  buttonProps={{
    color: 'safe',
  }}
  activeButtonProps={{
    color: 'safe',
  }}
/>`}}}),p(e,s),a()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{u(),m(),v(),b(),d(),h(),C=`
 ToggleGroup component based on bits-ui [toggle-group](https://bits-ui.com/docs/components/toggle-group).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { ToggleGroup } from '@flightlesslabs/dodo-ui-bits';

 <ToggleGroup />
 \`\`\`
`,w=[{value:`one`,label:`Uno`},{value:`two`,label:`Dos`}],T=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`},{value:`five`,label:`Five`},{value:`six`,label:`Six`},{value:`seven`,label:`Seven`},{value:`eight`,label:`Eight`},{value:`nine`,label:`Nine`},{value:`ten`,label:`Ten`}],E={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},attached:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},roundness:{control:{type:`select`},options:y,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},fullWidth:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},flex:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},gap:{table:{category:`API`,subcategory:`Appearance`}},buttonProps:{table:{category:`API`,subcategory:`Appearance`}},activeButtonProps:{table:{category:`API`,subcategory:`Appearance`}},customContent:{table:{category:`API`,subcategory:`Slots`}}},D={component:x,tags:[`autodocs`],argTypes:E,parameters:{docs:{description:{component:C}}}},{Story:O}=g(D),k=s(r(w[0].value)),A=s(r([w[0].value])),j=s(void 0),M=f(`<!> <!> <!> <!> <!> <!> <!>`,1),S.__docgen={data:[],name:`ToggleGroup.stories.svelte`},N=_(S,D),P=[`Default`,`Controlled`,`Attached`,`AllowDeselect`,`Mutiple`,`FullWidthAndFlex`,`ButtonStyle`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Attached,tags:[`svelte-csf-v5`]},R={...N.AllowDeselect,tags:[`svelte-csf-v5`]},z={...N.Mutiple,tags:[`svelte-csf-v5`]},B={...N.FullWidthAndFlex,tags:[`svelte-csf-v5`]},V={...N.ButtonStyle,tags:[`svelte-csf-v5`]}})))()}H();export{R as AllowDeselect,L as Attached,V as ButtonStyle,I as Controlled,F as Default,B as FullWidthAndFlex,z as Mutiple,P as __namedExportsOrder,D as default,E as storyToggleGroupArgTypes};