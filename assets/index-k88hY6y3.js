import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CINgmFdR.js";import{S as a}from"./blocks-DYxZ9B_5.js";import"./iframe-CbXHd0bm.js";import"./preload-helper-D9Z9MdNV.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"createdateofmonth",children:e.jsx(t.code,{children:"createDateOfMonth"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"createDateOfMonth(date, settings, monthType?, manipulateDate?)"})," creates a single ",e.jsx(t.code,{children:"DateOfMonth"})," object representing one calendar cell. This is typically used internally by ",e.jsx(t.code,{children:"getDatesOfMonth"})," but can be useful for custom logic."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Manual usage for one day
import { createDateOfMonth } from '@flightlesslabs/dodo-ui';

const date = new Date();
const dateObj = createDateOfMonth(date, {
minDate: new Date('2025-01-01'),
timezone: 'UTC',
}, 'currentMonth');
`}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h1,{id:"types",children:"Types"}),`
`,e.jsx(t.h2,{id:"dateofmonth",children:e.jsx(t.code,{children:"DateOfMonth"})}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Represents a single calendar cell
type DateOfMonth = {
id: string;
date: Date;
isCurrentMonth: boolean;
isLastMonth?: boolean;
isNextMonth?: boolean;
disabled?: boolean;
today?: boolean;
};
`}),`
`,e.jsx(t.h2,{id:"createdatesofmonthsettings",children:e.jsx(t.code,{children:"CreateDatesOfMonthSettings"})}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Configuration for calendar generation
interface CreateDatesOfMonthSettings {
startOfWeek?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
showLastMonth?: boolean;
showNextMonth?: boolean;
today?: Date;
minDate?: Date;
maxDate?: Date;
excludeDates?: Date[];
includeDates?: Date[];
timezone?: string;
utc?: boolean;
}
`}),`
`,e.jsx(t.h2,{id:"createdateofmonthtype",children:e.jsx(t.code,{children:"CreateDateOfMonthType"})}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Indicates the month context of the date
type CreateDateOfMonthType = 'currentMonth' | 'nextMonth' | 'lastMonth';
`}),`
`,e.jsxs(t.h2,{id:"days_of_week-enum",children:[e.jsx(t.code,{children:"DAYS_OF_WEEK"})," Enum"]}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Weekday constants (Sunday = 0)
export const enum DAYS_OF_WEEK {
SUN,
MON,
TUE,
WED,
THU,
FRI,
SAT,
}
`}),`
`,e.jsxs(t.h2,{id:"months-enum",children:[e.jsx(t.code,{children:"MONTHS"})," Enum"]}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
// Month constants (January = 0)
export const enum MONTHS {
JAN,
FEB,
MAR,
APR,
MAY,
JUN,
JUL,
AUG,
SEP,
OCT,
NOV,
DEC,
}
`})]})}function l(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{l as default};
