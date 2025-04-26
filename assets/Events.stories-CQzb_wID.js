import{i,a as m,b as p}from"./props-DFsgJbdG.js";import{p as d,a as u}from"./context-Bs7fE3Bk.js";import{c as f,d as k}from"./create-runtime-stories-DhDNtbEy.js";import{f as g}from"./index-fRFe1AOP.js";import{s as C,B as n}from"./Button.stories-4OCwk2uc.js";import"./index-CfOrKyLd.js";import"./attributes-Ep-JlfiD.js";import"./class-CApJtfRH.js";import"./style-BlOeA41K.js";import"./this-DaULZ-96.js";const B={component:n,tags:["autodocs"],argTypes:C,args:{onclick:g()},parameters:{docs:{description:{component:""}}}},{Story:_}=k();function r(a,c){d(c,!1),i(),_(a,{name:"Click",args:{outline:!1,disabled:!1,compact:!1,onclick:t=>{const o=t.target;alert("Button Clicked"),console.log("Button Clicked",o)}},children:(t,o)=>{n(t,{onclick:e=>{const s=e.target;alert("Button Clicked"),console.log("Button Clicked",s)},children:(e,s)=>{var l=m("Click me!");p(e,l)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={(e: Event) => {
    const target = e.target as HTMLButtonElement;

    alert('Button Clicked');
    console.log('Button Clicked', target);
  }}
>
  Click me!
</Button>`}}}),u()}r.__docgen={version:3,name:"Events.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=f(r,B),S=["Click"],A=$.Click;export{A as Click,S as __namedExportsOrder,B as default};
