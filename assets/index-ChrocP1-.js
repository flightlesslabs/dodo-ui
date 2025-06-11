import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BsKd7sJ7.js";import{S as o}from"./index-BDcPF_xr.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-COAyVktX.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(e){const n={h1:"h1",p:"p",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"click-outside",children:"Click Outside"}),`
`,t.jsx(n.p,{children:"Event that fires after clicking outside the target component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
import { clickOutside } '@flightlesslabs/dodo-ui';
`}),`
`,t.jsx(n.p,{children:"Attach it to a component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
<div
  use:clickOutside={onClickOutside}
  ...
`})]})}function j(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{j as default};
