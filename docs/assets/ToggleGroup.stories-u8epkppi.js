import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,It as r,Nt as i,Ot as a,Wt as o,dn as s,dt as c,et as l,f as u,jt as d,nt as f,wt as p}from"./iframe-skAj-ZLh.js";import{J as m,ht as h,mt as g,n as _,r as v,t as y}from"./create-runtime-stories-BVPASrbR.js";import{A as b,t as x}from"./dist-AytEgn4j.js";function S(e,i){n(i,!0);var a=M(),s=p(a);{let e=r(()=>({type:`single`,options:w,value:c(k)}));O(s,{name:`Default`,get args(){return c(e)},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<ToggleGroup {...args} />`}}})}var u=t(s,2);O(u,{name:`Controlled`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,get value(){return c(k)},set value(e){d(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} />`}}});var f=t(u,2);O(f,{name:`Attached`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,attached:!0,get value(){return c(k)},set value(e){d(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} attached />`}}});var m=t(f,2);O(m,{name:`Allow Deselect`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,allowDeselect:!0,get value(){return c(j)},set value(e){d(j,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value3} allowDeselect />`}}});var h=t(m,2);O(h,{name:`Mutiple`,asChild:!0,children:(e,t)=>{b(e,{get options(){return T},type:`multiple`,outline:!0,get value(){return c(A)},set value(e){d(A,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options2} type="multiple" bind:value={value2} outline />`}}});var g=t(h,2);O(g,{name:`Full Width and flex`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,fullWidth:!0,flex:!0,get value(){return c(k)},set value(e){d(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup options={options1} type="single" bind:value={value1} fullWidth flex />`}}}),O(t(g,2),{name:`Button Style`,asChild:!0,children:(e,t)=>{b(e,{get options(){return w},type:`single`,buttonProps:{color:`safe`},activeButtonProps:{color:`safe`},get value(){return c(k)},set value(e){d(k,e,!0)}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleGroup
  options={options1}
  type="single"
  bind:value={value1}
  buttonProps={{
    color: 'safe',
  }}
  activeButtonProps={{
    color: 'safe',
  }}
/>`}}}),l(e,a),o()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{s(),h(),v(),x(),u(),_(),C=`
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
`,w=[{value:`one`,label:`Uno`},{value:`two`,label:`Dos`}],T=[{value:`one`,label:`One`},{value:`two`,label:`Two`},{value:`three`,label:`Three`},{value:`four`,label:`Four`},{value:`five`,label:`Five`},{value:`six`,label:`Six`},{value:`seven`,label:`Seven`},{value:`eight`,label:`Eight`},{value:`nine`,label:`Nine`},{value:`ten`,label:`Ten`}],E={class:{table:{category:`API`,subcategory:`Base`}},value:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},options:{table:{category:`API`,subcategory:`Base`}},type:{control:{type:`text`},table:{category:`API`,subcategory:`Base`}},attached:{table:{category:`API`,subcategory:`Base`}},disabled:{control:{type:`boolean`},description:`Disabled state of the input`,table:{category:`API`,subcategory:`State`,defaultValue:{summary:`false`}}},roundness:{control:{type:`select`},options:m,description:`Border radius token`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`1`}}},outline:{control:{type:`boolean`},description:`Render outlined enclosure`,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`true`}}},fullWidth:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},flex:{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},gap:{table:{category:`API`,subcategory:`Appearance`}},buttonProps:{table:{category:`API`,subcategory:`Appearance`}},activeButtonProps:{table:{category:`API`,subcategory:`Appearance`}},customContent:{table:{category:`API`,subcategory:`Slots`}}},D={component:b,tags:[`autodocs`],argTypes:E,parameters:{docs:{description:{component:C}}}},{Story:O}=g(D),k=i(a(w[0].value)),A=i(a([w[0].value])),j=i(void 0),M=f(`<!> <!> <!> <!> <!> <!> <!>`,1),S.__docgen={data:[],name:`ToggleGroup.stories.svelte`},N=y(S,D),P=[`Default`,`Controlled`,`Attached`,`AllowDeselect`,`Mutiple`,`FullWidthAndFlex`,`ButtonStyle`],F={...N.Default,tags:[`svelte-csf-v5`]},I={...N.Controlled,tags:[`svelte-csf-v5`]},L={...N.Attached,tags:[`svelte-csf-v5`]},R={...N.AllowDeselect,tags:[`svelte-csf-v5`]},z={...N.Mutiple,tags:[`svelte-csf-v5`]},B={...N.FullWidthAndFlex,tags:[`svelte-csf-v5`]},V={...N.ButtonStyle,tags:[`svelte-csf-v5`]}}))();export{R as AllowDeselect,L as Attached,V as ButtonStyle,I as Controlled,F as Default,B as FullWidthAndFlex,z as Mutiple,P as __namedExportsOrder,D as default,E as storyToggleGroupArgTypes};