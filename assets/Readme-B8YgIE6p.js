import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DvhXfW8u.js";import{r as n}from"./react-CFkguG7U.js";import{t as r}from"./mdx-react-shim-DavaZFxr.js";function i(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`modalmanager`,children:`ModalManager`}),`
`,(0,o.jsx)(t.p,{children:`A Global modal system with a centralized store.`}),`
`,(0,o.jsx)(t.h2,{id:`-installation`,children:`🚀 Installation`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-bash`,children:`pnpm add bits-ui @flightlesslabs/dodo-ui-bits
`})}),`
`,(0,o.jsxs)(t.p,{children:[`For full setup (styles, themes, configuration), see `,(0,o.jsx)(t.a,{href:`https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits`,rel:`nofollow`,children:`link`})]}),`
`,(0,o.jsx)(t.h2,{id:`-usage`,children:`🚀 Usage`}),`
`,(0,o.jsx)(t.h3,{id:`1-add-the-modalmanager`,children:`1. Add the ModalManager`}),`
`,(0,o.jsx)(t.p,{children:`Import your root component. use the root layout (+layout.svelte) for SvelteKit.`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-svelte`,children:`<ModalManager />
`})}),`
`,(0,o.jsx)(t.p,{children:`Or:`}),`
`,(0,o.jsx)(t.p,{children:`with optional id`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-svelte`,children:`<ModalManager id="modal-master-2" />
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h3,{id:`2-trigger-a-modal`,children:`2. Trigger a modal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { modals } from '@flightlesslabs/dodo-ui-bits';

modals.add('confirm', {
  title: 'Confirm',
  description: 'Are you sure?',
});
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-modal-types`,children:`🧠 Modal Types`}),`
`,(0,o.jsx)(t.h3,{id:`modal`,children:`modal`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`modals.add('modal', {
  title: 'My Modal',
  description: 'Content here',
});
`})}),`
`,(0,o.jsx)(t.h3,{id:`inform`,children:`inform`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`modals.add('inform', {
  title: 'Info',
  description: 'Something happened',
  onaccept: () => console.log('Accepted'),
});
`})}),`
`,(0,o.jsx)(t.h3,{id:`confirm`,children:`confirm`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`modals.add('confirm', {
  title: 'Delete',
  description: 'Are you sure?',
  onaccept: () => console.log('Confirmed'),
  onreject: () => console.log('Cancelled'),
});
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-api`,children:`🧾 API`}),`
`,(0,o.jsx)(t.h3,{id:`modalsaddtype-config`,children:`modals.add(type, config)`}),`
`,(0,o.jsx)(t.p,{children:`Open a modal.`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`type: 'modal' | 'inform' | 'confirm'`}),`
`,(0,o.jsx)(t.li,{children:`config: Modal configuration`}),`
`]}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h3,{id:`modalsclear`,children:`modals.clear()`}),`
`,(0,o.jsx)(t.p,{children:`Closes the currently active modal.`}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-config-types`,children:`🧩 Config Types`}),`
`,(0,o.jsx)(t.h3,{id:`base-config`,children:`Base Config`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`type ModalDialogBaseConfig = {
  modalManagerId?: string;
  title?: string;
  description?: string;
  payload?: Record<string, unknown>;
};
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-example`,children:`🧪 Example`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-svelte`,children:`<script lang="ts">
  import { modals } from '@flightlesslabs/dodo-ui-bits';
<\/script>

<button
  on:click={() => {
    modals.add('confirm', {
      title: 'Confirm',
      description: 'Proceed?',
    });
  }}
>
  Open Confirm
</button>

<ModalManager />
`})}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h2,{id:`-summary`,children:`🏁 Summary`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Use modals.add() to open modals`}),`
`,(0,o.jsx)(t.li,{children:`Use ModalManager to render them`}),`
`,(0,o.jsx)(t.li,{children:`Use modalManagerId for scoped control`}),`
`,(0,o.jsx)(t.li,{children:`Extend behavior with callbacks and payloads`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=t(),r()}))();export{a as default};