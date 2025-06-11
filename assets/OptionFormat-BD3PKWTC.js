import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BsKd7sJ7.js";import{S as o}from"./index-BDcPF_xr.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-COAyVktX.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(t){const n={h1:"h1",h2:"h2",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"option-format",children:"Option Format"}),`
`,e.jsx(n.h2,{id:"selectoption",children:"SelectOption"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
 type SelectOption = {
    value: string | number | boolean | null | undefined;
    label: string;
    disabled?: boolean;
  };
`}),`
`,e.jsx(n.h2,{id:"example-values",children:"Example values"}),`
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
`})]})}function h(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
