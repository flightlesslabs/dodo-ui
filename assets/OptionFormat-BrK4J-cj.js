import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-CINgmFdR.js";import{S as o}from"./blocks-DYxZ9B_5.js";import"./iframe-CbXHd0bm.js";import"./preload-helper-D9Z9MdNV.js";function l(n){const t={h1:"h1",h2:"h2",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"option-format",children:"Option Format"}),`
`,e.jsx(t.h2,{id:"selectoption",children:"SelectOption"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
type SelectOption = {
  value: string | number | boolean | null | undefined;
  label: string;
  disabled?: boolean;
};
`}),`
`,e.jsx(t.h2,{id:"example-values",children:"Example values"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
const options: SelectOption[] = [
{
  value: 1,
  label: 'One',
},
{
  value: 2,
  label: 'Two',
},
{
  value: 3,
  label: 'Three',
},
];
`})]})}function m(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{m as default};
