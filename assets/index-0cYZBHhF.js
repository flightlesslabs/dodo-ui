import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BsKd7sJ7.js";import{S as o}from"./index-ChXkTLhV.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-LZIq84s_.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"cleannumericstring",children:e.jsx(n.code,{children:"cleanNumericString"})}),`
`,e.jsx(n.p,{children:`Cleans the input string by removing all characters except numeric digits (0-9) and a single decimal point.
Only the first decimal point is retained; all subsequent dots are removed.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
import { cleanNumericString } from '@flightlesslabs/dodo-ui';

const result = cleanNumericString("abc123.45.67def"); // result === "123.4567"
`})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
