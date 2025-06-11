import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BsKd7sJ7.js";import{S as n}from"./index-BDcPF_xr.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-COAyVktX.js";import"./index-CPsILM3-.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function l(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"logger-utility",children:"Logger Utility"}),`
`,e.jsx(o.p,{children:"A customizable logger function that supports:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Log levels (",e.jsx(o.code,{children:"info"}),", ",e.jsx(o.code,{children:"warn"}),", ",e.jsx(o.code,{children:"error"}),")"]}),`
`,e.jsx(o.li,{children:"Optional labels"}),`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.code,{children:"show"})," flag to toggle logging"]}),`
`,e.jsx(o.li,{children:"Console output with timestamps"}),`
`]}),`
`,e.jsx(o.h2,{id:"import",children:"Import"}),`
`,e.jsx(o.p,{children:"Import the logger creation function:"}),`
`,e.jsx(n,{dark:!0,language:"ts",code:"import { createLogger } from '@flightlesslabs/dodo-ui';"}),`
`,e.jsx(o.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(o.p,{children:"Create a logger and log different types of messages:"}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`const logger = createLogger({
  label: 'AuthService',
});

logger.info('User logged in');
logger.warn('Token is about to expire');
logger.error('Login failed', new Error('Invalid credentials'));
`}),`
`,e.jsx(o.h2,{id:"disable-logging",children:"Disable Logging"}),`
`,e.jsx(o.p,{children:"You can use the `show` flag to completely silence the logger (e.g., in production):"}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`const logger = createLogger({
  show: false,
});

logger.info('This will not be logged');
`}),`
`,e.jsx(o.h2,{id:"level-filtering",children:"Level Filtering"}),`
`,e.jsxs(o.p,{children:["The logger will only show messages ",e.jsx(o.strong,{children:"at or above"})," the configured ",e.jsx(o.code,{children:"level"}),":"]}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`const logger = createLogger();

logger.info('This will NOT show');
logger.warn('This WILL show');
logger.error('This WILL show');
`})]})}function p(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(l,{...r})}):l(r)}export{p as default};
