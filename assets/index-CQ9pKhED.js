import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dx-sRNSU.js";import{S as s}from"./index-Cuqn9FHJ.js";import"./index-DatCARk7.js";import"./iframe-BcJoDWwc.js";import"./index-D4waAiak.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function n(i){const l={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l.h1,{id:"isvalidnumbervalue",children:"isValidNumberValue"}),`
`,e.jsx(l.p,{children:"Utility function to validate whether a string is a valid number based on customizable settings including minimum, maximum, decimal places, and allowance of negative numbers."}),`
`,e.jsx(l.hr,{}),`
`,e.jsx(l.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(l.p,{children:"Validates a string as a number with default settings (no decimals allowed, no negatives allowed, strict checking):"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { isValidNumberValue } from '@flightlesslabs/dodo-ui';

const result = isValidNumberValue("123");
console.log(result); // true
`}),`
`,e.jsx(l.hr,{}),`
`,e.jsx(l.h2,{id:"with-settings",children:"With Settings"}),`
`,e.jsx(l.p,{children:"Customize validation rules:"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"min"})," — minimum allowed value (inclusive)"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"max"})," — maximum allowed value (inclusive)"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"allowNegativeValues"})," — whether negatives are allowed"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"decimalPlaces"})," — max decimal places allowed"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"log"})," — enable detailed logging"]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"strict"})," — Strict checking, Full text - keep it enabled, Partial text - keep it disabled"]}),`
`]}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { isValidNumberValue } from '@flightlesslabs/dodo-ui';

const result1 = isValidNumberValue("123.456", { decimalPlaces: 3, log: true });
const result2 = isValidNumberValue("-50", { allowNegativeValues: true, min: -100 });
const result3 = isValidNumberValue("200", { max: 150 });

const result4 = isValidNumberValue("-", { allowNegativeValues: true });
const result5 = isValidNumberValue("-", { allowNegativeValues: true, strict: false });

console.log(result1); // true
console.log(result2); // true
console.log(result3); // false (exceeds max)
console.log(result4); // false (fails in strict check)
console.log(result5); // true (pass in strict check)
`}),`
`,e.jsx(l.hr,{}),`
`,e.jsx(l.h2,{id:"type-definition",children:"Type Definition"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-ts",children:`export type IsValidNumberValueSettings = {
  min?: number;
  max?: number;
  allowNegativeValues?: boolean;
  decimalPlaces?: number;
  log?: boolean;
  strict?: boolean;
};
`})})]})}function x(i={}){const{wrapper:l}={...t(),...i.components};return l?e.jsx(l,{...i,children:e.jsx(n,{...i})}):n(i)}export{x as default};
