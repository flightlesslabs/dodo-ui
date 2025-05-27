import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Dx-sRNSU.js";import{S as o}from"./index-Cuqn9FHJ.js";import"./index-DatCARk7.js";import"./iframe-BcJoDWwc.js";import"./index-D4waAiak.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(n){const t={h1:"h1",h2:"h2",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"option-format",children:"Option Format"}),`
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
`})]})}function x(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{x as default};
