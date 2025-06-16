import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BKjAcQZO.js";import{S as a}from"./blocks-CQZjzKyP.js";import"./iframe-CfBVIw1X.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getdatesofmonth",children:t.jsx(e.code,{children:"getDatesOfMonth"})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"getDatesOfMonth(date, settings, manipulateDate)"})," generates a 2D array of weeks, each containing ",t.jsx(e.code,{children:"DateOfMonth"})," objects. It supports options via ",t.jsx(e.code,{children:"CreateDatesOfMonthSettings"})," and allows injecting custom logic per date."]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(a,{dark:!0,language:"ts",code:`
// Basic usage
import { getDatesOfMonth, getMoment } from '@flightlesslabs/dodo-ui';

const dates = getDatesOfMonth(new Date(), {
showLastMonth: false,
showNextMonth: false,
});

// Using a formatted date
const dates2 = getDatesOfMonth(
getMoment('01-02-2025', 'DD-MM-YYYY').toDate()
);

// With custom manipulation
const dates3 = getDatesOfMonth(new Date(), {
timezone: 'America/New_York',
startOfWeek: 'MON',
}, (date, settings) => {
return {
...date,
disabled: true,
};
});
`})]})}function h(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{h as default};
