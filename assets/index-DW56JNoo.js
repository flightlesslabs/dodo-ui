import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dx-sRNSU.js";import{S as o}from"./index-BbHFFCgR.js";import"./index-DatCARk7.js";import"./iframe-Cw1nqWIl.js";import"./index-D4waAiak.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(e){const n={h1:"h1",p:"p",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"click-outside",children:"Click Outside"}),`
`,t.jsx(n.p,{children:"Event that fires after clicking outside the target component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
import { clickOutside } '@flightlesslabs/dodo-ui';
`}),`
`,t.jsx(n.p,{children:"Attach it to a component"}),`
`,t.jsx(o,{dark:!0,language:"js",code:`
<div
  use:clickOutside={onClickOutside}
  ...
`})]})}function h(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{h as default};
