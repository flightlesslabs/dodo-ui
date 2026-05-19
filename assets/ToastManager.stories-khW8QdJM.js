import{i as e}from"./preload-helper-Cs4UwXAW.js";import{$ as t,It as n,L as r,V as i,W as a,at as o,bt as s,f as c,h as l,it as u,jt as d,kt as f,xt as p,z as m}from"./iframe-0_cAOKgT.js";import{A as h,E as g,I as _,K as v,W as y,k as b,n as x,q as S,r as C,t as w}from"./create-runtime-stories-b-oBHseY.js";import{i as T,n as E,r as D,t as O}from"./dist-hovDR5_x.js";function k(e,n){p(n,!0);var i=L(),c=u(i);M(c,{name:`Default`,asChild:!0,children:(e,t)=>{var n=N(),r=u(n);y(r,{onclick:()=>{D.add({title:`Toast`,description:`This is a basic toast.`,color:`danger`})},children:(e,t)=>{f(),m(e,a(`Add Toast`))},$$slots:{default:!0}}),E(o(r,2),{}),m(e,n)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
  onclick={() => {
    toasts.add({
      title: 'Toast',
      description: 'This is a basic toast.',
      color: 'danger',
    });
  }}
>
  Add Toast
</Button>

<ToastManager />`}}});var h=o(c,2);M(h,{name:`Auto Clear`,asChild:!0,children:(e,t)=>{var n=P(),r=u(n);y(r,{onclick:()=>{D.add({title:`Toast`,description:`This is a basic toast.`,color:`safe`,toastManagerId:`toasts-2`,variant:`solid`})},children:(e,t)=>{f(),m(e,a(`Add Toast`))},$$slots:{default:!0}}),E(o(r,2),{id:`toasts-2`,alignmentX:`start`,clearAfterDuration:2e3}),m(e,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    toasts.add({
      title: 'Toast',
      description: 'This is a basic toast.',
      color: 'safe',
      toastManagerId: 'toasts-2',
      variant: 'solid',
    });
  }}
>
  Add Toast
</Button>

<ToastManager id="toasts-2" alignmentX="start" clearAfterDuration={2000} />`}}}),M(o(h,2),{name:`Custom Toast Styles`,asChild:!0,children:(e,n)=>{var i=I(),s=u(i);y(s,{onclick:()=>{D.add({title:`Toast`,description:`This is a custom styled toast.`,toastManagerId:`toasts-3`,color:`safe`})},children:(e,t)=>{f(),m(e,a(`Add Toast`))},$$slots:{default:!0}}),E(o(s,2),{id:`toasts-3`,customToast:(e,n)=>{let i=()=>n?.().toastCardProps,a=()=>n?.().description;T(e,l(()=>d(n?.(),[`toastCardProps`,`description`]),i,{children:(e,n)=>{var i=F(),s=o(u(i));t(()=>r(s,` ${a()??``}`)),m(e,i)},$$slots:{default:!0}}))},$$slots:{customToast:!0}}),m(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    toasts.add({
      title: 'Toast',
      description: 'This is a custom styled toast.',
      toastManagerId: 'toasts-3',
      color: 'safe',
    });
  }}
>
  Add Toast
</Button>

<ToastManager id="toasts-3">
  {#snippet customToast({ toastCardProps, description, ...restProps })}
    <Toast {...restProps} {...toastCardProps}>
      <b>Description:</b>
      {description}
    </Toast>
  {/snippet}
</ToastManager>`}}}),m(e,i),s()}var A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{n(),S(),C(),O(),c(),x(),A={id:{table:{category:`API`,subcategory:`Base`}},limit:{table:{category:`API`,subcategory:`Base`}},clearAfterDuration:{table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},alignmentX:{control:{type:`select`},options:b,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`end`}}},alignmentY:{control:{type:`select`},options:h,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`top`}}},shadow:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`3`}}},variant:{control:{type:`select`},options:_,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"max-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},"min-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},customToast:{table:{category:`API`,subcategory:`Slots`}}},j={component:E,tags:[`autodocs`],argTypes:A,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:M}=v(j),N=i(`<!> <!>`,1),P=i(`<!> <!>`,1),F=i(`<b>Description:</b> `,1),I=i(`<!> <!>`,1),L=i(`<!> <!> <!>`,1),k.__docgen={data:[],name:`ToastManager.stories.svelte`},R=w(k,j),z=[`Default`,`AutoClear`,`CustomToastStyles`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.AutoClear,tags:[`svelte-csf-v5`]},H={...R.CustomToastStyles,tags:[`svelte-csf-v5`]}}))();export{V as AutoClear,H as CustomToastStyles,B as Default,z as __namedExportsOrder,j as default,A as storyToastManagerArgTypes};