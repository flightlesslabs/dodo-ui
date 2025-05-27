import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dx-sRNSU.js";import{S as s}from"./index-C9xWYV7j.js";import"./index-DatCARk7.js";import"./iframe-1a9wh6KM.js";import"./index-D4waAiak.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(t){const n={h1:"h1",h2:"h2",hr:"hr",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"cleannumericstring",children:"cleanNumericString"}),`
`,e.jsx(n.p,{children:`Cleans the input string by removing all characters except numeric digits (0-9) and a single decimal point.
Only the first decimal point is retained; all subsequent dots are removed.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { cleanNumericString } from '@flightlesslabs/dodo-ui';

const result = cleanNumericString("abc123.45.67def"); // result === "123.4567"
`})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
