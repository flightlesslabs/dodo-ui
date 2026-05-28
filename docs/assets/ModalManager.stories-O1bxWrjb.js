import{i as e}from"./preload-helper-B51ZT_On.js";import{$t as t,Ht as n,Q as r,St as i,Ut as a,et as o,f as s,g as c,gt as l,ln as u,nt as d,ot as f,tn as p,wt as m}from"./iframe-DGV1xx3g.js";import{dt as h,ht as g,mt as _,n as v,r as y,t as b}from"./create-runtime-stories-WrdPVTsn.js";import{c as x,d as S,t as C,v as w}from"./dist-BgWDz3O_.js";function T(e,s){a(s,!0);var u=N(),d=i(u);O(d,{name:`Default`,asChild:!0,children:(e,n)=>{var r=k(),a=i(r);h(a,{onclick:()=>{S.add(`confirm`,{title:`Confirm`,description:`This is a basic confirm.`})},children:(e,n)=>{t(),o(e,f(`Add Modal`))},$$slots:{default:!0}}),x(m(a,2),{}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
  }}
>
  Add Modal
</Button>

<ModalManager />`}}});var g=m(d,2);O(g,{name:`Modal master with custom ID`,asChild:!0,children:(e,n)=>{var r=A(),a=i(r);h(a,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic inform.`,modalManagerId:`modal-master-2`})},children:(e,n)=>{t(),o(e,f(`Add Modal`))},$$slots:{default:!0}}),x(m(a,2),{id:`modal-master-2`}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ModalManager id="modal-master-2" />`}}}),O(m(g,2),{name:`Custom Modal Styles`,asChild:!0,children:(e,n)=>{var a=M(),s=i(a);h(s,{onclick:()=>{S.add(`inform`,{title:`Inform`,description:`This is a basic Inform.`,modalManagerId:`modal-master-3`})},color:`safe`,children:(e,n)=>{t(),o(e,f(`Add Inform`))},$$slots:{default:!0}}),x(m(s,2),{id:`modal-master-3`,customCardInform:(e,t)=>{let n=()=>t?.().description,a=()=>t?.().modalProps;w(e,c(()=>p(t?.(),[`description`,`modalProps`]),a,()=>a()?.modalCardProps,{children:(e,t)=>{var a=j(),s=m(i(a));l(()=>r(s,` ${n()??``}`)),o(e,a)},$$slots:{default:!0}}))},$$slots:{customCardInform:!0}}),o(e,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
</ModalManager>`}}}),o(e,u),n()}var E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{u(),g(),y(),C(),s(),v(),E={id:{table:{category:`API`,subcategory:`Base`}},customCardModal:{table:{category:`API`,subcategory:`Slots`}},customCardInform:{table:{category:`API`,subcategory:`Slots`}},customCardConfirm:{table:{category:`API`,subcategory:`Slots`}}},D={component:x,tags:[`autodocs`],argTypes:E,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:O}=_(D),k=d(`<!> <!>`,1),A=d(`<!> <!>`,1),j=d(`<b>Description:</b> `,1),M=d(`<!> <!>`,1),N=d(`<!> <!> <!>`,1),T.__docgen={data:[],name:`ModalManager.stories.svelte`},P=b(T,D),F=[`Default`,`ModalMasterWithCustomID`,`CustomModalStyles`],I={...P.Default,tags:[`svelte-csf-v5`]},L={...P.ModalMasterWithCustomID,tags:[`svelte-csf-v5`]},R={...P.CustomModalStyles,tags:[`svelte-csf-v5`]}}))();export{R as CustomModalStyles,I as Default,L as ModalMasterWithCustomID,F as __namedExportsOrder,D as default,E as storyModalManagerArgTypes};