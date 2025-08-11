import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-NhNSy-XH.js";import{S as o}from"./blocks-D_S0gBN3.js";import"./iframe-CCEZUMhS.js";import"./preload-helper-D9Z9MdNV.js";function i(e){const n={h1:"h1",p:"p",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"click-outside",children:"Click Outside"}),`
`,t.jsx(n.p,{children:"Event that fires after clicking outside the target component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
import { clickOutside } '@flightlesslabs/dodo-ui';
`}),`
`,t.jsx(n.p,{children:"Attach it to a component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
<div
use:clickOutside={onClickOutside}
...
`})]})}function l(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{l as default};
