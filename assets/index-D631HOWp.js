import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-NhNSy-XH.js";import{S as o}from"./blocks-D_S0gBN3.js";import"./iframe-CCEZUMhS.js";import"./preload-helper-D9Z9MdNV.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getmoment",children:e.jsx(t.code,{children:"getMoment"})}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.a,{href:"https://day.js.org/",rel:"nofollow",children:"Day.js"})," wrapper that supports custom formats, UTC mode, and timezone conversion using ",e.jsx(t.code,{children:"dayjs"}),", ",e.jsx(t.code,{children:"utc"}),", ",e.jsx(t.code,{children:"timezone"}),", and ",e.jsx(t.code,{children:"customParseFormat"})," plugins."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
// Basic local time
getMoment('2025-01-01T00:00:00Z').format();

// UTC output
getMoment('2025-01-01T00:00:00Z', undefined, { utc: true }).format();
// → "2025-01-01T00:00:00Z"

// With custom format + timezone
getMoment('01-01-2025', 'DD-MM-YYYY', { timezone: 'Asia/Kolkata' }).format();
// → "2025-01-01T00:00:00+05:30"
`}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
getMoment(
date?: ConfigType,
format?: string,
settings?: {
  utc?: boolean;
  timezone?: string;
}
): dayjs.Dayjs
`})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
