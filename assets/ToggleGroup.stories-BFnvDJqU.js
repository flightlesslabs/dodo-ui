import{i as e}from"./preload-helper-Cs4UwXAW.js";import{It as t,V as n,at as r,bt as i,dt as a,f as o,it as s,lt as c,ot as l,pt as u,q as d,xt as f,z as p}from"./iframe-DV24syQ7.js";import{K as m,M as h,n as g,q as _,r as v,t as y}from"./create-runtime-stories-CpqXL_Zt.js";import{p as b,t as x}from"./dist-CzTxElfr.js";function S(e,t){f(t,!0);var n=j(),a=s(n);{let e=u(()=>({type:`single`,options:w,value:d(k)}));O(a,{name:`Default`,get args(){return d(e)},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<ToggleGroup {...args} />`}}})}var o=r(a,2);O(o,{name:`Controlled`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,get value(){return d(k)},set value(e){c(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} />`}}});var l=r(o,2);O(l,{name:`Attached`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,attached:!0,get value(){return d(k)},set value(e){c(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} attached />`}}});var m=r(l,2);O(m,{name:`Mutiple`,asChild:!0,children:(e,t)=>{b(e,{get options(){return T},type:`multiple`,outline:!0,get value(){return d(A)},set value(e){c(A,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options2} type="multiple" bind:value={value2} outline />`}}}),O(r(m,2),{name:`Button Style`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,buttonProps:{color:`safe`},activeButtonProps:{color:`safe`},get value(){return d(k)},set value(e){c(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup
  options={options1}
  type="single"
  bind:value={value1}
  buttonProps={{
    color: 'safe',
  }}
  activeButtonProps={{
    color: 'safe',
  }}
/>`}}}),p(e,n),i()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{t(),_(),v(),x(),o(),g(),C=`
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
`,w=[{value:`one`,label:`Uno`},{value:`two`,label:`Dos`}],T=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`},{value:`five`,label:`Five`},{value:`six`,label:`Six`},{value:`seven`,label:`Seven`},{value:`eight`,label:`Eight`},{value:`nine`,label:`Nine`},{value:`ten`,label:`Ten`}],E={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},attached:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},roundness:{control:{type:`select`},options:h,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},fullWidth:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},flex:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},gap:{table:{category:`API`,subcategory:`Appearance`}},buttonProps:{table:{category:`API`,subcategory:`Appearance`}},activeButtonProps:{table:{category:`API`,subcategory:`Appearance`}},customContent:{table:{category:`API`,subcategory:`Slots`}}},D={component:b,tags:[`autodocs`],argTypes:E,parameters:{docs:{description:{component:C}}}},{Story:O}=m(D),k=a(l(w[0].value)),A=a(l([w[0].value])),j=n(`<!> <!> <!> <!> <!>`,1),S.__docgen={data:[],name:`ToggleGroup.stories.svelte`},M=y(S,D),N=[`Default`,`Controlled`,`Attached`,`Mutiple`,`ButtonStyle`],P={...M.Default,tags:[`svelte-csf-v5`]},F={...M.Controlled,tags:[`svelte-csf-v5`]},I={...M.Attached,tags:[`svelte-csf-v5`]},L={...M.Mutiple,tags:[`svelte-csf-v5`]},R={...M.ButtonStyle,tags:[`svelte-csf-v5`]}}))();export{I as Attached,R as ButtonStyle,F as Controlled,P as Default,L as Mutiple,N as __namedExportsOrder,D as default,E as storyToggleGroupArgTypes};