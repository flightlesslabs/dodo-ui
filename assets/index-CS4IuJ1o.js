import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BsKd7sJ7.js";import{S as m}from"./index-ChXkTLhV.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-LZIq84s_.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function n(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getmoment",children:t.jsx(e.code,{children:"getMoment"})}),`
`,t.jsx(e.p,{children:"a Day.js wrapper"}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(m,{dark:!0,language:"ts",code:`
import { getMoment } from '@flightlesslabs/dodo-ui';

getMoment('2025-01-01T00:00:00Z', { utc: true }).format(); // "2025-01-01T00:00:00Z"
getMoment('01-01-2025', { format: 'DD-MM-YYYY', timezone: 'Asia/Kolkata' }).format();
`})]})}function x(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{x as default};
