import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{r as n}from"./react-C6wZJlw-.js";import{t as r}from"./mdx-react-shim-w1JW0gnZ.js";function i(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`createdate`,children:`createDate`}),`
`,(0,o.jsxs)(t.p,{children:[`A centralized date factory built on top of `,(0,o.jsx)(t.code,{children:`dayjs`}),`.`]}),`
`,(0,o.jsxs)(t.p,{children:[`This utility ensures `,(0,o.jsx)(t.strong,{children:`consistent parsing, timezone handling, and validation`}),` across your application.`]}),`
`,(0,o.jsx)(t.h2,{id:`-import`,children:`📦 Import`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { createDate } from '@flightlesslabs/dodo-ui';
`})}),`
`,(0,o.jsx)(t.h2,{id:`-basic-usage`,children:`🚀 Basic Usage`}),`
`,(0,o.jsx)(t.h3,{id:`current-date`,children:`Current Date`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const now = createDate();
console.log(now.format());
`})}),`
`,(0,o.jsx)(t.h3,{id:`parse-a-date`,children:`Parse a Date`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const date = createDate("01-02-2025", "DD-MM-YYYY");
console.log(date.format());
`})}),`
`,(0,o.jsx)(t.h2,{id:`-timezone--utc`,children:`🌍 Timezone & UTC`}),`
`,(0,o.jsx)(t.h3,{id:`utc-mode`,children:`UTC Mode`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const utcDate = createDate("2025-01-01T12:00:00Z", undefined, {
  utc: true,
});
`})}),`
`,(0,o.jsx)(t.h3,{id:`timezone-conversion`,children:`Timezone Conversion`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const indiaTime = createDate("01-01-2025", "DD-MM-YYYY", {
  timezone: "Asia/Kolkata",
});
`})}),`
`,(0,o.jsx)(t.h2,{id:`️-options`,children:`⚙️ Options`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`interface CreateDateOptions {
  timezone?: string;
  utc?: boolean;
  strict?: boolean;
  throwOnInvalid?: boolean;
}
`})}),`
`,(0,o.jsx)(t.h2,{id:`-behavior-priority`,children:`🔁 Behavior Priority`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`utc (highest priority)`}),`
`,(0,o.jsx)(t.li,{children:`timezone`}),`
`,(0,o.jsx)(t.li,{children:`local`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`timezone`,children:`timezone`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`IANA timezone string`}),`
`,(0,o.jsx)(t.li,{children:`Interprets input in given timezone`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`utc`,children:`utc`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Forces UTC mode`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`strict`,children:`strict`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Only applies when format is provided`}),`
`,(0,o.jsx)(t.li,{children:`Has no effect on ISO / timestamps`}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`throwoninvalid`,children:`throwOnInvalid`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Throws error if date is invalid`}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`-supported-inputs`,children:`📥 Supported Inputs`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`string`}),`
`,(0,o.jsx)(t.li,{children:`number (timestamp)`}),`
`,(0,o.jsx)(t.li,{children:`Date object`}),`
`,(0,o.jsx)(t.li,{children:`undefined`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=t(),r()}))();export{a as default};