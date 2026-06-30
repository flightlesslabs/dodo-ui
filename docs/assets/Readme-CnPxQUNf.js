import{i as e}from"./preload-helper-CuCQULJj.js";import{i as t,o as n}from"./react-BynncI18.js";import{t as r}from"./mdx-react-shim-BRKV4gro.js";function i(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`toastmanager`,children:`ToastManager`}),`
`,(0,o.jsx)(n.p,{children:`A global toast notification system with a centralized store, auto-dismiss support, and flexible positioning.`}),`
`,(0,o.jsx)(n.h2,{id:`-installation`,children:`🚀 Installation`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-bash`,children:`pnpm add bits-ui @flightlesslabs/dodo-ui-bits
`})}),`
`,(0,o.jsxs)(n.p,{children:[`For full setup (styles, themes, configuration), see `,(0,o.jsx)(n.a,{href:`https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits`,rel:`nofollow`,children:`link`})]}),`
`,(0,o.jsx)(n.h2,{id:`-usage`,children:`🚀 Usage`}),`
`,(0,o.jsx)(n.h3,{id:`1-add-the-toastmanager`,children:`1. Add the ToastManager`}),`
`,(0,o.jsxs)(n.p,{children:[`Import into your root component (e.g. `,(0,o.jsx)(n.code,{children:`+layout.svelte`}),` in SvelteKit):`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-svelte`,children:`<ToastManager />
`})}),`
`,(0,o.jsx)(n.p,{children:`Or with optional ID (for scoped toasts):`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-svelte`,children:`<ToastManager id="toast-master-2" />
`})}),`
`,(0,o.jsx)(n.h3,{id:`2-trigger-a-toast`,children:`2. Trigger a toast`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`import { toasts } from '@flightlesslabs/dodo-ui-bits';

toasts.add({
  title: 'Success',
  description: 'Saved successfully',
});
`})}),`
`,(0,o.jsx)(n.h2,{id:`-features`,children:`🧠 Features`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsx)(n.li,{children:`Global toast store`}),`
`,(0,o.jsxs)(n.li,{children:[`Multiple ToastManagers via `,(0,o.jsx)(n.code,{children:`id`})]}),`
`,(0,o.jsx)(n.li,{children:`Auto-dismiss (with per-toast override)`}),`
`,(0,o.jsx)(n.li,{children:`Limit visible toasts`}),`
`,(0,o.jsx)(n.li,{children:`Alignment-based grouping`}),`
`,(0,o.jsx)(n.li,{children:`Batch clearing for performance`}),`
`]}),`
`,(0,o.jsx)(n.h2,{id:`-api`,children:`🧾 API`}),`
`,(0,o.jsx)(n.h3,{id:`toastsaddconfig`,children:`toasts.add(config)`}),`
`,(0,o.jsx)(n.p,{children:`Create a new toast.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  title: 'Saved',
  description: 'Your changes were saved',
});
`})}),`
`,(0,o.jsx)(n.h3,{id:`toastsclearid`,children:`toasts.clear(id)`}),`
`,(0,o.jsx)(n.p,{children:`Remove a specific toast.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.clear(toastId);
`})}),`
`,(0,o.jsx)(n.h3,{id:`toastsclearall`,children:`toasts.clearAll()`}),`
`,(0,o.jsx)(n.p,{children:`Remove all toasts.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.clearAll();
`})}),`
`,(0,o.jsx)(n.h2,{id:`-config-types`,children:`🧩 Config Types`}),`
`,(0,o.jsx)(n.h3,{id:`toastinput`,children:`ToastInput`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type ToastInput = {
  toastManagerId?: string;

  title?: string;
  description?: string;
  payload?: Record<string, unknown>;

  color?: CardColor;
  variant?: ComponentVariant;

  alignmentX?: ComponentAlignmentX;
  alignmentY?: ComponentAlignmentY;

  toastCardProps?: ToastProps;

  onClear?: () => void;

  /** Auto-dismiss duration in ms (overrides manager default) */
  duration?: number;

  /** Disable auto-dismiss */
  autoDismiss?: boolean;

  /** Allow manual clearing (UI-level control) */
  clearable?: boolean;
};
`})}),`
`,(0,o.jsx)(n.h2,{id:`️-toastmanager-props`,children:`⚙️ ToastManager Props`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`type ToastManagerProps = {
  class?: string;
  id?: string;

  alignmentX?: ComponentAlignmentX;
  alignmentY?: ComponentAlignmentY;

  shadow?: ComponentShadow;
  outline?: boolean;
  variant?: ComponentVariant;

  'max-width'?: string;
  'min-width'?: string;

  /** Max visible toasts */
  limit?: number;

  /** Default auto-dismiss duration (ms) */
  clearAfterDuration?: number;
};
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`️-auto-dismiss-behavior`,children:`⏱️ Auto Dismiss Behavior`}),`
`,(0,o.jsx)(n.p,{children:`Priority order:`}),`
`,(0,o.jsxs)(n.ol,{children:[`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`toast.autoDismiss === false`}),` → ❌ never auto-dismiss`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`toast.duration`}),` → ✅ use this`]}),`
`,(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:`ToastManager.clearAfterDuration`}),` → ✅ fallback`]}),`
`,(0,o.jsx)(n.li,{children:`none defined → ❌ no auto-dismiss`}),`
`]}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`-examples`,children:`🧪 Examples`}),`
`,(0,o.jsx)(n.h3,{id:`basic-toast`,children:`Basic toast`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  title: 'Hello',
  description: 'This is a toast',
});
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h3,{id:`custom-duration`,children:`Custom duration`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  title: 'Quick message',
  duration: 1500,
});
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h3,{id:`persistent-toast-no-auto-dismiss`,children:`Persistent toast (no auto-dismiss)`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  title: 'Uploading...',
  autoDismiss: false,
});
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h3,{id:`scoped-toast`,children:`Scoped toast`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  toastManagerId: 'toast-master-2',
  title: 'Scoped toast',
});
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h3,{id:`positioned-toast`,children:`Positioned toast`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`toasts.add({
  title: 'Bottom Start',
  alignmentX: 'start',
  alignmentY: 'bottom',
});
`})}),`
`,(0,o.jsx)(n.hr,{}),`
`,(0,o.jsx)(n.h2,{id:`-summary`,children:`🏁 Summary`}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`toasts.add()`}),` to trigger notifications`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`ToastManager`}),` to render them`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`id`}),` for scoped toast systems`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`duration`}),` for per-toast timing`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`clearAfterDuration`}),` for global default`]}),`
`,(0,o.jsxs)(n.li,{children:[`Use `,(0,o.jsx)(n.code,{children:`autoDismiss: false`}),` for persistent toasts`]}),`
`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};