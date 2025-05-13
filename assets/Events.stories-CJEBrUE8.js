import{i,a as m,b as p}from"./props-DjujHgll.js";import{p as d,a as u}from"./context-D350OWv3.js";import{c as f,d as g}from"./create-runtime-stories-BmhrnokL.js";import{f as k}from"./index-fRFe1AOP.js";import{s as B,B as n}from"./Button.stories-BQvTR9Bi.js";import"./index-CfOrKyLd.js";import"./attributes-BgNp7-AK.js";import"./class-D-tO7f_P.js";import"./style-CgXbQjLK.js";import"./this-JyHDzNFV.js";const C={component:n,tags:["autodocs"],argTypes:B,args:{onclick:k()},parameters:{docs:{description:{component:""}}}},{Story:v}=g();function r(a,c){d(c,!1),i(),v(a,{name:"Click",args:{outline:!1,disabled:!1,compact:!1,onclick:t=>{const o=t.target;alert("Button Clicked"),console.log("Button Clicked",o)}},children:(t,o)=>{n(t,{onclick:e=>{const s=e.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(e,s)=>{var l=m("Click me!");p(e,l)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button {...args}>
  <Button
onclick={(e: Event) => {
  const target = e.target as HTMLButtonElement;

  alert('Button Clicked');
  console.log('Button Clicked', target);
}}
>
Click me!
</Button>
</Button>`}}}),u()}r.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const _=f(r,C),S=["Click"],A={..._.Click,tags:["svelte-csf-v5"]};export{A as Click,S as __namedExportsOrder,C as default};
