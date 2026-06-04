import{i as e}from"./preload-helper-B51ZT_On.js";import{Et as t,Gt as n,Q as r,Wt as i,dn as a,et as o,f as s,g as c,nt as l,ot as u,rn as d,tn as f,vt as p,wt as m}from"./iframe-CYY3S9tK.js";import{G as h,H as g,K as _,Q as v,dt as y,ht as b,mt as x,n as S,r as C,t as w}from"./create-runtime-stories-CSxmADnm.js";import{a as T,n as E,o as D,t as O}from"./dist-DJV9Be7H.js";function k(e,a){n(a,!0);var s=L(),l=m(s);M(l,{name:`Default`,asChild:!0,children:(e,n)=>{var r=N(),i=m(r);y(i,{onclick:()=>{T.add({title:`Toast`,description:`This is a basic toast.`,color:`danger`})},children:(e,t)=>{f(),o(e,u(`Add Toast`))},$$slots:{default:!0}}),E(t(i,2),{}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
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

<ToastManager />`}}});var h=t(l,2);M(h,{name:`Auto Clear`,asChild:!0,children:(e,n)=>{var r=P(),i=m(r);y(i,{onclick:()=>{T.add({title:`Toast`,description:`This is a basic toast.`,color:`safe`,toastManagerId:`toasts-2`,variant:`solid`})},children:(e,t)=>{f(),o(e,u(`Add Toast`))},$$slots:{default:!0}}),E(t(i,2),{id:`toasts-2`,alignmentX:`start`,clearAfterDuration:2e3}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ToastManager id="toasts-2" alignmentX="start" clearAfterDuration={2000} />`}}}),M(t(h,2),{name:`Custom Toast Styles`,asChild:!0,children:(e,n)=>{var i=I(),a=m(i);y(a,{onclick:()=>{T.add({title:`Toast`,description:`This is a custom styled toast.`,toastManagerId:`toasts-3`,color:`safe`})},children:(e,t)=>{f(),o(e,u(`Add Toast`))},$$slots:{default:!0}}),E(t(a,2),{id:`toasts-3`,customToast:(e,n)=>{let i=()=>n?.().toastCardProps,a=()=>n?.().description;D(e,c(()=>d(n?.(),[`toastCardProps`,`description`]),i,{children:(e,n)=>{var i=F(),s=t(m(i));p(()=>r(s,` ${a()??``}`)),o(e,i)},$$slots:{default:!0}}))},$$slots:{customToast:!0}}),o(e,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
</ToastManager>`}}}),o(e,s),i()}var A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{a(),b(),C(),O(),s(),S(),A={id:{table:{category:`API`,subcategory:`Base`}},limit:{table:{category:`API`,subcategory:`Base`}},clearAfterDuration:{table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},alignmentX:{control:{type:`select`},options:h,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`end`}}},alignmentY:{control:{type:`select`},options:_,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`top`}}},shadow:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`3`}}},variant:{control:{type:`select`},options:v,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"max-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},"min-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},customToast:{table:{category:`API`,subcategory:`Slots`}}},j={component:E,tags:[`autodocs`],argTypes:A,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:M}=x(j),N=l(`<!> <!>`,1),P=l(`<!> <!>`,1),F=l(`<b>Description:</b> `,1),I=l(`<!> <!>`,1),L=l(`<!> <!> <!>`,1),k.__docgen={data:[],name:`ToastManager.stories.svelte`},R=w(k,j),z=[`Default`,`AutoClear`,`CustomToastStyles`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.AutoClear,tags:[`svelte-csf-v5`]},H={...R.CustomToastStyles,tags:[`svelte-csf-v5`]}}))();export{V as AutoClear,H as CustomToastStyles,B as Default,z as __namedExportsOrder,j as default,A as storyToastManagerArgTypes};