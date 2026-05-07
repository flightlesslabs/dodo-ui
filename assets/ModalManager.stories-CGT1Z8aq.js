import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Ft as n,L as r,V as i,W as a,at as o,bt as s,f as c,h as l,it as u,jt as d,kt as f,xt as p,z as m}from"./iframe-CgMBCj9R.js";import{H as h,U as g,V as _,n as v,r as y,t as b}from"./create-runtime-stories-DJ8jrQeW.js";import{c as x,i as S,r as C,t as w}from"./dist-BVQGJmm0.js";function T(e,n){p(n,!0);var i=N(),c=u(i);O(c,{name:`Default`,asChild:!0,children:(e,t)=>{var n=k(),r=u(n);_(r,{onclick:()=>{S.add(`confirm`,{title:`Confirm`,description:`This is a basic confirm.`})},children:(e,t)=>{f(),m(e,a(`Add Modal`))},$$slots:{default:!0}}),C(o(r,2),{}),m(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}});var h=o(c,2);O(h,{name:`Modal master with custom ID`,asChild:!0,children:(e,t)=>{var n=A(),r=u(n);_(r,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic inform.`,modalManagerId:`modal-master-2`})},children:(e,t)=>{f(),m(e,a(`Add Modal`))},$$slots:{default:!0}}),C(o(r,2),{id:`modal-master-2`}),m(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ModalManager id="modal-master-2" />`}}}),O(o(h,2),{name:`Custom Modal Styles`,asChild:!0,children:(e,n)=>{var i=M(),s=u(i);_(s,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic Inform.`,modalManagerId:`modal-master-3`})},color:`safe`,children:(e,t)=>{f(),m(e,a(`Add Inform`))},$$slots:{default:!0}}),C(o(s,2),{id:`modal-master-3`,customCardInform:(e,n)=>{let i=()=>n?.().description,a=()=>n?.().modalProps;x(e,l(()=>d(n?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,n)=>{var a=j(),s=o(u(a));t(()=>r(s,` ${i()??``}`)),m(e,a)},$$slots:{default:!0}}))},$$slots:{customCardInform:!0}}),m(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('inform', {
      title: 'Inform',
      description: 'This is a basic Inform.',
      modalManagerId: 'modal-master-3',
    });
  }}
  color="safe"
>
  Add Inform
</Button>

<ModalManager id="modal-master-3">
  {#snippet customCardInform({ description, modalProps, ...restProps })}
    <InformDialogCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
      <b>Description:</b>
      {description}
    </InformDialogCard>
  {/snippet}
</ModalManager>`}}}),m(e,i),s()}var E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{n(),g(),y(),w(),c(),v(),E={id:{table:{category:`API`,subcategory:`Base`}},customCardModal:{table:{category:`API`,subcategory:`Slots`}},customCardInform:{table:{category:`API`,subcategory:`Slots`}},customCardConfirm:{table:{category:`API`,subcategory:`Slots`}}},D={component:C,tags:[`autodocs`],argTypes:E,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:O}=h(D),k=i(`<!> <!>`,1),A=i(`<!> <!>`,1),j=i(`<b>Description:</b> `,1),M=i(`<!> <!>`,1),N=i(`<!> <!> <!>`,1),T.__docgen={data:[],name:`ModalManager.stories.svelte`},P=b(T,D),F=[`Default`,`ModalMasterWithCustomID`,`CustomModalStyles`],I={...P.Default,tags:[`svelte-csf-v5`]},L={...P.ModalMasterWithCustomID,tags:[`svelte-csf-v5`]},R={...P.CustomModalStyles,tags:[`svelte-csf-v5`]}}))();export{R as CustomModalStyles,I as Default,L as ModalMasterWithCustomID,F as __namedExportsOrder,D as default,E as storyModalManagerArgTypes};