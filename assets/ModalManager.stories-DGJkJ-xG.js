import{n as e}from"./chunk-DnJy8xQt.js";import{Pt as t,V as n,W as r,at as i,bt as a,f as o,it as s,kt as c,xt as l,z as u}from"./iframe-xlnz60GK.js";import{H as d,i as f,n as p,o as m,r as h,t as g}from"./create-runtime-stories-Gb8E1ZlD.js";import{n as _,r as v,t as y}from"./dist-D1ladVTJ.js";function b(e,t){l(t,!0);var n=E(),o=s(n);C(o,{name:`Default`,asChild:!0,children:(e,t)=>{var n=w(),a=s(n);d(a,{onclick:()=>{v.add(`confirm`,{title:`Confirm`,description:`This is a basic confirm.`})},children:(e,t)=>{c(),u(e,r(`Add Modal`))},$$slots:{default:!0}}),_(i(a,2),{}),u(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}}),C(i(o,2),{name:`Modal master with custom ID`,asChild:!0,children:(e,t)=>{var n=T(),a=s(n);d(a,{onclick:()=>{v.add(`inform`,{title:`Inform`,description:`This is a basic inform.`,modalManagerId:`modal-master-2`})},children:(e,t)=>{c(),u(e,r(`Add Modal`))},$$slots:{default:!0}}),_(i(a,2),{id:`modal-master-2`}),u(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('inform', {
      title: 'Inform',
      description: 'This is a basic inform.',
      modalManagerId: 'modal-master-2',
    });
  }}
>
  Add Modal
</Button>

<ModalManager id="modal-master-2" />`}}}),u(e,n),a()}var x,S,C,w,T,E,D,O,k,A;e((()=>{t(),f(),m(),y(),o(),p(),x={id:{table:{category:`API`,subcategory:`Base`}}},S={component:_,tags:[`autodocs`],argTypes:x,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:C}=h(S),w=n(`<!> <!>`,1),T=n(`<!> <!>`,1),E=n(`<!> <!>`,1),b.__docgen={data:[],name:`ModalManager.stories.svelte`},D=g(b,S),O=[`Default`,`ModalMasterWithCustomID`],k={...D.Default,tags:[`svelte-csf-v5`]},A={...D.ModalMasterWithCustomID,tags:[`svelte-csf-v5`]}}))();export{k as Default,A as ModalMasterWithCustomID,O as __namedExportsOrder,S as default,x as storyModalManagerArgTypes};