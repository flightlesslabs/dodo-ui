import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,Q as r,Wt as i,dn as a,et as o,f as s,g as c,nt as l,ot as u,rn as d,tn as f,vt as p,wt as m}from"./iframe-BCqsbs7L.js";import{dt as h,ht as g,mt as _,n as v,r as y,t as b}from"./create-runtime-stories-BAp6BU8T.js";import{c as x,d as S,t as C,v as w}from"./dist-BNzVGN-e.js";function T(e,a){n(a,!0);var s=j(),l=m(s);O(l,{name:`Default`,asChild:!0,children:(e,n)=>{var r=k(),i=m(r);h(i,{onclick:()=>{S.add(`confirm`,{title:`Confirm`,description:`This is a basic confirm.`})},children:(e,t)=>{f(),o(e,u(`Add Modal`))},$$slots:{default:!0}}),x(t(i,2),{}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}});var g=t(l,2);O(g,{name:`Confirm Actions Demo`,asChild:!0,children:(e,n)=>{var r=k(),i=m(r);h(i,{onclick:()=>{S.add(`confirm`,{title:`Confirm Actions Demo`,description:`Demo for testing actions`,onaccept:()=>{alert(`onaccept clicked`)},onreject:()=>{alert(`onreject clicked`)}})},children:(e,t)=>{f(),o(e,u(`Add Modal`))},$$slots:{default:!0}}),x(t(i,2),{}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', {
      title: 'Confirm Actions Demo',
      description: 'Demo for testing actions',
      onaccept: () => {
        alert('onaccept clicked');
      },
      onreject: () => {
        alert('onreject clicked');
      },
    });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}});var _=t(g,2);O(_,{name:`Modal master with custom ID`,asChild:!0,children:(e,n)=>{var r=k(),i=m(r);h(i,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic inform.`,modalManagerId:`modal-master-2`})},children:(e,t)=>{f(),o(e,u(`Add Modal`))},$$slots:{default:!0}}),x(t(i,2),{id:`modal-master-2`}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ModalManager id="modal-master-2" />`}}}),O(t(_,2),{name:`Custom Modal Styles`,asChild:!0,children:(e,n)=>{var i=k(),a=m(i);h(a,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic Inform.`,modalManagerId:`modal-master-3`})},color:`safe`,children:(e,t)=>{f(),o(e,u(`Add Inform`))},$$slots:{default:!0}}),x(t(a,2),{id:`modal-master-3`,customCardInform:(e,n)=>{let i=()=>n?.().description,a=()=>n?.().modalProps;w(e,c(()=>d(n?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,n)=>{var a=A(),s=t(m(a));p(()=>r(s,` ${i()??``}`)),o(e,a)},$$slots:{default:!0}}))},$$slots:{customCardInform:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
</ModalManager>`}}}),o(e,s),i()}var E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{a(),g(),y(),C(),s(),v(),E={id:{table:{category:`API`,subcategory:`Base`}},customCardModal:{table:{category:`API`,subcategory:`Slots`}},customCardInform:{table:{category:`API`,subcategory:`Slots`}},customCardConfirm:{table:{category:`API`,subcategory:`Slots`}}},D={component:x,tags:[`autodocs`],argTypes:E,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:O}=_(D),k=l(`<!> <!>`,1),A=l(`<b>Description:</b> `,1),j=l(`<!> <!> <!> <!>`,1),T.__docgen={data:[],name:`ModalManager.stories.svelte`},M=b(T,D),N=[`Default`,`ConfirmActionsDemo`,`ModalMasterWithCustomID`,`CustomModalStyles`],P={...M.Default,tags:[`svelte-csf-v5`]},F={...M.ConfirmActionsDemo,tags:[`svelte-csf-v5`]},I={...M.ModalMasterWithCustomID,tags:[`svelte-csf-v5`]},L={...M.CustomModalStyles,tags:[`svelte-csf-v5`]}}))();export{F as ConfirmActionsDemo,L as CustomModalStyles,P as Default,I as ModalMasterWithCustomID,N as __namedExportsOrder,D as default,E as storyModalManagerArgTypes};