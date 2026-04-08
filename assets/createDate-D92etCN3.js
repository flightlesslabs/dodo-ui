import{u as s,j as n,S as t}from"./blocks-DqiNq93X.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6lunisr.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createdate",children:"createDate"}),`
`,n.jsxs(e.p,{children:["A centralized date factory built on top of ",n.jsx(e.code,{children:"dayjs"}),"."]}),`
`,n.jsxs(e.p,{children:["This utility ensures ",n.jsx(e.strong,{children:"consistent parsing, timezone handling, and validation"})," across your application."]}),`
`,n.jsx(e.h2,{id:"-import",children:"📦 Import"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
import { createDate } from '@flightlesslabs/dodo-ui';
`}),`
`,n.jsx(e.h2,{id:"-basic-usage",children:"🚀 Basic Usage"}),`
`,n.jsx(e.h3,{id:"current-date",children:"Current Date"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
const now = createDate();
console.log(now.format());
`}),`
`,n.jsx(e.h3,{id:"parse-a-date",children:"Parse a Date"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
const date = createDate("01-02-2025", "DD-MM-YYYY");
console.log(date.format());
`}),`
`,n.jsx(e.h2,{id:"-timezone--utc",children:"🌍 Timezone & UTC"}),`
`,n.jsx(e.h3,{id:"utc-mode",children:"UTC Mode"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
const utcDate = createDate("2025-01-01T12:00:00Z", undefined, {
utc: true,
});
`}),`
`,n.jsx(e.h3,{id:"timezone-conversion",children:"Timezone Conversion"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
const indiaTime = createDate("01-01-2025", "DD-MM-YYYY", {
timezone: "Asia/Kolkata",
});
`}),`
`,n.jsx(e.h2,{id:"️-options",children:"⚙️ Options"}),`
`,n.jsx(t,{dark:!0,language:"ts",code:`
interface CreateDateOptions {
timezone?: string;
utc?: boolean;
strict?: boolean;
throwOnInvalid?: boolean;
}
`}),`
`,n.jsx(e.h2,{id:"-behavior-priority",children:"🔁 Behavior Priority"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"utc (highest priority)"}),`
`,n.jsx(e.li,{children:"timezone"}),`
`,n.jsx(e.li,{children:"local"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"timezone",children:"timezone"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"IANA timezone string"}),`
`,n.jsx(e.li,{children:"Interprets input in given timezone"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"utc",children:"utc"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Forces UTC mode"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"strict",children:"strict"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Only applies when format is provided"}),`
`,n.jsx(e.li,{children:"Has no effect on ISO / timestamps"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"throwoninvalid",children:"throwOnInvalid"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Throws error if date is invalid"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-supported-inputs",children:"📥 Supported Inputs"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"string"}),`
`,n.jsx(e.li,{children:"number (timestamp)"}),`
`,n.jsx(e.li,{children:"Date object"}),`
`,n.jsx(e.li,{children:"undefined"}),`
`]})]})}function c(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{c as default};
