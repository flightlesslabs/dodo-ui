import{n as e}from"./chunk-DnJy8xQt.js";import{$ as t,Ft as n,L as r,V as i,W as a,at as o,bt as s,f as c,h as l,it as u,jt as d,kt as f,xt as p,z as m}from"./iframe-B9livWaI.js";import{B as h,V as g,n as _,r as v,t as y,z as b}from"./create-runtime-stories-DHWlgRs6.js";import{a as x,l as S,n as C,r as w,s as T,t as E}from"./dist-Dv5zYDfM.js";function D(e,n){p(n,!0);var i=L(),c=u(i);A(c,{name:`Default`,asChild:!0,children:(e,t)=>{var n=j(),r=u(n);b(r,{onclick:()=>{w.add(`confirm`,{title:`Confirm`,description:`This is a basic confirm.`})},children:(e,t)=>{f(),m(e,a(`Add Modal`))},$$slots:{default:!0}}),C(o(r,2),{}),m(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}});var h=o(c,2);A(h,{name:`Modal master with custom ID`,asChild:!0,children:(e,t)=>{var n=M(),r=u(n);b(r,{onclick:()=>{w.add(`inform`,{title:`Inform`,description:`This is a basic inform.`,modalManagerId:`modal-master-2`})},children:(e,t)=>{f(),m(e,a(`Add Modal`))},$$slots:{default:!0}}),C(o(r,2),{id:`modal-master-2`}),m(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ModalManager id="modal-master-2" />`}}}),A(o(h,2),{name:`Custom Modal Styles`,asChild:!0,children:(e,n)=>{var i=I(),s=u(i);b(s,{onclick:()=>{w.add(`modal`,{title:`Hi There`,description:`This is a basic Modal.`,modalManagerId:`modal-master-3`})},color:`secondary`,children:(e,t)=>{f(),m(e,a(`Add Modal`))},$$slots:{default:!0}});var c=o(s,2);b(c,{onclick:()=>{w.add(`inform`,{title:`Inform`,description:`This is a basic Inform.`,modalManagerId:`modal-master-3`})},color:`safe`,children:(e,t)=>{f(),m(e,a(`Add Inform`))},$$slots:{default:!0}});var p=o(c,2);b(p,{onclick:()=>{w.add(`confirm`,{title:`Confirm`,description:`This is a basic Confirm.`,modalManagerId:`modal-master-3`})},color:`warning`,children:(e,t)=>{f(),m(e,a(`Add Confirm`))},$$slots:{default:!0}}),C(o(p,2),{id:`modal-master-3`,customCardModal:(e,n)=>{let i=()=>n?.().description,a=()=>n?.().modalProps;S(e,l(()=>d(n?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,n)=>{var a=N(),s=o(u(a));t(()=>r(s,` ${i()??``}`)),m(e,a)},$$slots:{default:!0}}))},customCardInform:(e,n)=>{let i=()=>n?.().description,a=()=>n?.().modalProps;T(e,l(()=>d(n?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,n)=>{var a=P(),s=o(u(a));t(()=>r(s,` ${i()??``}`)),m(e,a)},$$slots:{default:!0}}))},customCardConfirm:(e,n)=>{let i=()=>n?.().description,a=()=>n?.().modalProps;x(e,l(()=>d(n?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,n)=>{var a=F(),s=o(u(a));t(()=>r(s,` ${i()??``}`)),m(e,a)},$$slots:{default:!0}}))},$$slots:{customCardModal:!0,customCardInform:!0,customCardConfirm:!0}}),m(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('modal', {
      title: 'Hi There',
      description: 'This is a basic Modal.',
      modalManagerId: 'modal-master-3',
    });
  }}
  color="secondary"
>
  Add Modal
</Button>

<Button
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

<Button
  onclick={() => {
    modals.add('confirm', {
      title: 'Confirm',
      description: 'This is a basic Confirm.',
      modalManagerId: 'modal-master-3',
    });
  }}
  color="warning"
>
  Add Confirm
</Button>

<ModalManager id="modal-master-3">
  {#snippet customCardModal({ description, modalProps, ...restProps })}
    <ModalCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
      <b>Description:</b>
      {description}
    </ModalCard>
  {/snippet}

  {#snippet customCardInform({ description, modalProps, ...restProps })}
    <InformDialogCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
      <b>Description:</b>
      {description}
    </InformDialogCard>
  {/snippet}

  {#snippet customCardConfirm({ description, modalProps, ...restProps })}
    <ConfirmDialogCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
      <b>Description:</b>
      {description}
    </ConfirmDialogCard>
  {/snippet}
</ModalManager>`}}}),m(e,i),s()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{n(),g(),v(),E(),c(),_(),O={id:{table:{category:`API`,subcategory:`Base`}},customCardModal:{table:{category:`API`,subcategory:`Slots`}},customCardInform:{table:{category:`API`,subcategory:`Slots`}},customCardConfirm:{table:{category:`API`,subcategory:`Slots`}}},k={component:C,tags:[`autodocs`],argTypes:O,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:A}=h(k),j=i(`<!> <!>`,1),M=i(`<!> <!>`,1),N=i(`<b>Description:</b> `,1),P=i(`<b>Description:</b> `,1),F=i(`<b>Description:</b> `,1),I=i(`<!> <!> <!> <!>`,1),L=i(`<!> <!> <!>`,1),D.__docgen={data:[],name:`ModalManager.stories.svelte`},R=y(D,k),z=[`Default`,`ModalMasterWithCustomID`,`CustomModalStyles`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.ModalMasterWithCustomID,tags:[`svelte-csf-v5`]},H={...R.CustomModalStyles,tags:[`svelte-csf-v5`]}}))();export{H as CustomModalStyles,B as Default,V as ModalMasterWithCustomID,z as __namedExportsOrder,k as default,O as storyModalManagerArgTypes};