import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BsKd7sJ7.js";import{S as o}from"./index-ChXkTLhV.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-LZIq84s_.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"utils",children:"Utils"}),`
`,e.jsx(t.h2,{id:"getdatesofmonth",children:e.jsx(t.code,{children:"getDatesOfMonth"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getDatesOfMonth(date, settings)"})," generates a calendar view of a given month with options to include dates from the previous and next month."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
import { getDatesOfMonth, getMoment} from '@flightlesslabs/dodo-ui';

const dates = getDatesOfMonth(new Date(), {
showLastMonth: false,
showNextMonth: false,
});

// Or

const dates2 = getDatesOfMonth(getMoment('01-02-2025', 'DD-MM-YYYY').toDate());

`}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(t.h3,{id:"dateofmonth",children:e.jsx(t.code,{children:"DateOfMonth"})}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
 type DateOfMonth = {
  id: string;
  dayNumber: number;
  date: Date;
  isCurrentMonth?: boolean;
  isLastMonth?: boolean;
  isNextMonth?: boolean;
};
`}),`
`,e.jsxs(t.h3,{id:"enum-days_of_week",children:["Enum: ",e.jsx(t.code,{children:"DAYS_OF_WEEK"})]}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
 const enum DAYS_OF_WEEK {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}
`})]})}function f(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
