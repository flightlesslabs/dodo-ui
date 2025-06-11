import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BgsZqCL6.js";import{S as s}from"./blocks-BHd8ulsN.js";import"./iframe-L6KL7_8k.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getmoment",children:e.jsx(t.code,{children:"getMoment"})}),`
`,e.jsx(t.p,{children:"a Day.js wrapper"}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { getMoment } from '@flightlesslabs/dodo-ui';

getMoment('2025-01-01T00:00:00Z', { utc: true }).format(); // "2025-01-01T00:00:00Z"
getMoment('01-01-2025', { format: 'DD-MM-YYYY', timezone: 'Asia/Kolkata' }).format();
`})]})}function d(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{d as default};
