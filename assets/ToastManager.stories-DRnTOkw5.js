import{i as e}from"./preload-helper-xPQekRTU.js";import{$t as t,Ht as n,Q as r,St as i,Ut as a,et as o,f as s,g as c,gt as l,ln as u,nt as d,ot as f,tn as p,wt as m}from"./iframe-D2Y9OMva.js";import{G as h,H as g,K as _,Q as v,dt as y,ht as b,mt as x,n as S,r as C,t as w}from"./create-runtime-stories-BBhzpU6C.js";import{a as T,n as E,o as D,t as O}from"./dist-l3DYoKwe.js";function k(e,s){a(s,!0);var u=L(),d=i(u);M(d,{name:`Default`,asChild:!0,children:(e,n)=>{var r=N(),a=i(r);y(a,{onclick:()=>{T.add({title:`Toast`,description:`This is a basic toast.`,color:`danger`})},children:(e,n)=>{t(),o(e,f(`Add Toast`))},$$slots:{default:!0}}),E(m(a,2),{}),o(e,r)},$$slots:{default:!0},parameters:{docs:{description:{story:`------------------------------`}},__svelteCsf:{rawCode:`<Button
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

<ToastManager />`}}});var h=m(d,2);M(h,{name:`Auto Clear`,asChild:!0,children:(e,n)=>{var r=P(),a=i(r);y(a,{onclick:()=>{T.add({title:`Toast`,description:`This is a basic toast.`,color:`safe`,toastManagerId:`toasts-2`,variant:`solid`})},children:(e,n)=>{t(),o(e,f(`Add Toast`))},$$slots:{default:!0}}),E(m(a,2),{id:`toasts-2`,alignmentX:`start`,clearAfterDuration:2e3}),o(e,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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

<ToastManager id="toasts-2" alignmentX="start" clearAfterDuration={2000} />`}}}),M(m(h,2),{name:`Custom Toast Styles`,asChild:!0,children:(e,n)=>{var a=I(),s=i(a);y(s,{onclick:()=>{T.add({title:`Toast`,description:`This is a custom styled toast.`,toastManagerId:`toasts-3`,color:`safe`})},children:(e,n)=>{t(),o(e,f(`Add Toast`))},$$slots:{default:!0}}),E(m(s,2),{id:`toasts-3`,customToast:(e,t)=>{let n=()=>t?.().toastCardProps,a=()=>t?.().description;D(e,c(()=>p(t?.(),[`toastCardProps`,`description`]),n,{children:(e,t)=>{var n=F(),s=m(i(n));l(()=>r(s,` ${a()??``}`)),o(e,n)},$$slots:{default:!0}}))},$$slots:{customToast:!0}}),o(e,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
</ToastManager>`}}}),o(e,u),n()}var A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{u(),b(),C(),O(),s(),S(),A={id:{table:{category:`API`,subcategory:`Base`}},limit:{table:{category:`API`,subcategory:`Base`}},clearAfterDuration:{table:{category:`API`,subcategory:`Base`}},class:{table:{category:`API`,subcategory:`Base`}},alignmentX:{control:{type:`select`},options:h,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`end`}}},alignmentY:{control:{type:`select`},options:_,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`top`}}},shadow:{control:{type:`select`},options:g,table:{category:`API`,subcategory:`Appearance`,defaultValue:{summary:`3`}}},variant:{control:{type:`select`},options:v,table:{category:`API`,subcategory:`Appearance`}},outline:{control:{type:`boolean`},description:`Render outlined style`,table:{category:`API`,subcategory:`Appearance`}},"max-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},"min-width":{control:{type:`boolean`},table:{category:`API`,subcategory:`Appearance`}},customToast:{table:{category:`API`,subcategory:`Slots`}}},j={component:E,tags:[`autodocs`],argTypes:A,parameters:{layout:`fullscreen`,docs:{description:{component:``}}}},{Story:M}=x(j),N=d(`<!> <!>`,1),P=d(`<!> <!>`,1),F=d(`<b>Description:</b> `,1),I=d(`<!> <!>`,1),L=d(`<!> <!> <!>`,1),k.__docgen={data:[],name:`ToastManager.stories.svelte`},R=w(k,j),z=[`Default`,`AutoClear`,`CustomToastStyles`],B={...R.Default,tags:[`svelte-csf-v5`]},V={...R.AutoClear,tags:[`svelte-csf-v5`]},H={...R.CustomToastStyles,tags:[`svelte-csf-v5`]}}))();export{V as AutoClear,H as CustomToastStyles,B as Default,z as __namedExportsOrder,j as default,A as storyToastManagerArgTypes};